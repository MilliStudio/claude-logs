// Usage: node picture-book.mjs <session name>... | --all [--pages-only]
//        node picture-book.mjs --tidy <session name>... | --tidy --all
// Prints a Claude Code session's pages and pictures as PDFs for Tessera Records, and adds them to the Bring in file as
// original files (Dani, 5 November 2026: "would be nice to have them as docs to look at"; the rule is in
// Dropbox\Studio\CLAUDE.md). A session is its folder in images\, as conversation-text.mjs saves it:
// - each page there ("page <title>.html") becomes its own PDF, "Page <date> <title>.pdf";
// - its pictures become one PDF, "Pictures <session>.pdf", in the order they came, each marked Dani or Claude with the
//   time and the chat line it came with. The line comes from the session's text, or from its raw logs in projects\
//   where the text is older than its pictures.
// The PDFs go to %USERPROFILE%\TesseraExchange\files\, and their records into proposed-records.json beside what waits
// there, for Dani's Bring in button. --all does every session that has a text; --pages-only leaves out the pictures.
// --tidy, once Dani has brought them in: where Tessera Records and its backup hold every PDF of a session, its folder in
// images\ goes, and its text names the PDF instead of linking the pictures (Dani, 5 November 2026: "i just don't like
// clutter and stuff i don't need").
import fs from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { conversation } from './conversation-text.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const IMAGES = path.join(HERE, 'images');
const TEXTS = path.join(HERE, 'conversation-texts');
const EXCHANGE = process.env.TESSERA_EXCHANGE ?? path.join(os.homedir(), 'TesseraExchange'); // another folder, to try it out
const OUT = path.join(EXCHANGE, 'files');
const PROPOSALS = path.join(EXCHANGE, 'proposed-records.json');
// The browsers Tessera Records prints its PDFs with (design/src/pdf.js), the first one there. Chrome comes first: Edge
// started from Claude's shell exits without a PDF (5 November 2026).
const BROWSER = ['C:/Program Files/Google/Chrome/Application/chrome.exe', path.join(os.homedir(), 'AppData/Local/Google/Chrome/Application/chrome.exe'),
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe'].find((b) => fs.existsSync(b));
const PICTURE = /\.(png|jpe?g|gif|webp)$/i;
// The pictures that go in a session's PDF: Dani's and the ones Claude made or showed her, not the screenshots Claude
// took for itself while coding and testing ("003 Claude.png", in folders saved before 11 November 2026; Dani: "only
// images that i attach or the images you generate for me when explaining things or showing me things").
const forTheBook = (f) => PICTURE.test(f) && /^\d{3} (Dani|Claude to Dani)\./.test(f);
const today = new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Stockholm' });
const escape = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Original files' categories in Tessera Records: the game's sessions give design documents, the app's technical ones.
const categoryOf = (name) => (/ M1 |Repetitions in the documents|Getting to know Tessera's files/.test(name) ? 'design_document'
  : /Tessera Design|Tessera Records|Studio Records|One app|Exchange step|TD screens|session [0-9a-f]{8}$/.test(name) ? 'technical_document'
    : 'other');

// The chat line each picture came with, by its file: who wrote the message and when, and the text nearest before the
// picture in it, or after it where the picture opens the message.
const isPicture = (part) => /^(!\[|Claude looked at \[image|Again: \[image)/.test(part);
function captionsFrom(body) {
  const found = new Map();
  for (const message of body.split(/\n\n---\n\n/)) {
    const head = message.match(/^### (.+?) · (\d{4}-\d\d-\d\d \d\d:\d\d)/m);
    if (!head) continue;
    const parts = message.slice(message.indexOf(head[0]) + head[0].length).split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
    parts.forEach((part, i) => {
      const file = isPicture(part) && part.match(/\(<[^>]*\/(\d{3} [^/>]+)>\)/)?.[1];
      if (!file || found.has(file)) return;
      const line = parts.slice(0, i).reverse().find((p) => !isPicture(p)) ?? parts.slice(i + 1).find((p) => !isPicture(p)) ?? '';
      found.set(file, { who: head[1], at: head[2], line });
    });
  }
  return found;
}
const plain = (text) => text.replace(/!\[[^\]]*\]\(<[^>]*>\)/g, '').replace(/\[([^\]]*)\]\(<?[^)>]*>?\)/g, '$1')
  .replace(/\*\*|__/g, '').replace(/^#+\s*/gm, '').replace(/\s+/g, ' ').trim();
const short = (text, most = 360) => (text.length <= most ? text : `${text.slice(0, text.lastIndexOf(' ', most))} …`);

// The raw session logs, and each one's first message, read only when a session's text is older than its pictures.
let logs = null;
function rawLogs() {
  if (logs) return logs;
  const root = path.join(HERE, 'projects');
  logs = fs.readdirSync(root).flatMap((dir) => fs.readdirSync(path.join(root, dir)).filter((f) => f.endsWith('.jsonl'))
    .map((f) => path.join(root, dir, f)))
    .map((file) => ({ file, head: conversation(file, '', { images: false, save: false }).body.match(/^### .+$/m)?.[0] }));
  return logs;
}
function captionsFor(name, pictures) {
  const text = path.join(TEXTS, `${name}.md`);
  const body = fs.existsSync(text) ? fs.readFileSync(text, 'utf8') : '';
  const found = captionsFrom(body);
  if (pictures.every((p) => found.has(p))) return found;
  // The logs that start with one of the text's messages, or the log whose number names the session.
  const heads = new Set(body.match(/^### .+$/gm));
  const id = name.match(/session ([0-9a-f]{8})$/)?.[1];
  for (const { file } of rawLogs().filter((l) => heads.has(l.head) || (id && path.basename(l.file).startsWith(id)))) {
    const { body: logBody, images } = conversation(file, name, { save: false });
    const fromLog = captionsFrom(logBody);
    for (const image of images) {
      const saved = path.join(IMAGES, name, image.file);
      // A picture counts only where it is the very one saved under that name.
      if (!found.has(image.file) && fromLog.has(image.file) && fs.existsSync(saved) && fs.readFileSync(saved).equals(image.data)) {
        found.set(image.file, fromLog.get(image.file));
      }
    }
  }
  return found;
}

function print(htmlFile, pdfFile) {
  fs.rmSync(pdfFile, { force: true });
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'picture-book-'));
  const run = spawnSync(BROWSER, ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    `--user-data-dir=${path.join(profile, 'profile')}`, '--no-pdf-header-footer', '--virtual-time-budget=20000', `--print-to-pdf=${pdfFile}`,
    pathToFileURL(htmlFile).href], { timeout: 300000 });
  try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5 }); } catch { /* the browser still holds it */ }
  if (!fs.existsSync(pdfFile)) throw new Error(`No PDF came from ${htmlFile}: ${run.stderr}`);
}

const titleOf = (html, file) => html.match(/<title>([^<]*)<\/title>/i)?.[1].trim() || file.replace(/^page \d* ?|\.html$/g, '');
// A page as printed: on A4, its colours kept, and the artifact runtime's diagram script taken from the web instead.
function printPage(name, file) {
  const html = fs.readFileSync(path.join(IMAGES, name, file), 'utf8');
  const title = titleOf(html, file);
  const style = '<style>@page { size: A4; margin: 12mm; } html, body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }</style>';
  const page = (/^\s*<!doctype/i.test(html) ? html : `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${html}`)
    .replace(/<\/head>|<title>/i, (m) => `${style}${m}`)
    .replace(/src="\/_runtime\/mermaid-([\d.]+)\.min\.js"/g, 'src="https://cdn.jsdelivr.net/npm/mermaid@$1/dist/mermaid.min.js"');
  const copy = path.join(IMAGES, name, `.print ${file}`); // beside the page, so its pictures are found
  const pdf = path.join(OUT, `Page ${name.slice(0, 10)} ${title}.pdf`);
  fs.writeFileSync(copy, page);
  try { print(copy, pdf); } finally { fs.rmSync(copy, { force: true }); }
  return {
    key: `page ${name.slice(0, 10)} ${title}`, action: 'create', table: 'documents', summary: `Original file: Page: ${title}`,
    fields: {
      name: `Page: ${title}`, category: categoryOf(name), event_date: name.slice(0, 10), evidence_source: 'source_document',
      notes: `A page Claude made for Dani in the session "${name}", printed to PDF on ${today}. The page itself is claude-logs\\images\\${name}\\${file}.`,
    },
    file: pdf, skip_if: { field: 'name', value: `Page: ${title}` }, reconstructed: name.slice(0, 10) < today,
  };
}

function printPictures(name, pictures) {
  const captions = captionsFor(name, pictures);
  const date = name.slice(0, 10);
  const figures = pictures.map((file) => {
    const c = captions.get(file);
    const who = / Claude to Dani\./.test(file) ? 'Claude, shown to Dani' : 'Dani';
    const line = c?.line ? `<span class="line">${escape(c.who)}: ${escape(short(plain(c.line)))}</span>` : '';
    return `<figure><figcaption><b>${escape(file.slice(0, 3))} · ${who}</b>${c ? ` · ${escape(c.at)}` : ''}${line}</figcaption>`
      + `<img src="${pathToFileURL(path.join(IMAGES, name, file)).href}" alt=""></figure>`;
  });
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Pictures: ${escape(name)}</title><style>
@page { size: A4; margin: 12mm; }
html, body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin: 0; font: 10.5pt/1.45 "Segoe UI", system-ui, sans-serif; color: #1d2230; background: #fff; }
h1 { font-size: 16pt; margin: 0 0 4pt; }
.about { color: #59606f; margin: 0 0 12pt; }
figure { margin: 0 0 14pt; break-inside: avoid; }
figcaption { margin-bottom: 4pt; }
.line { display: block; color: #59606f; }
img { display: block; max-width: 100%; max-height: 118mm; width: auto; height: auto; border: 0.5pt solid #ccd2dc; }
</style></head><body>
<h1>Pictures: ${escape(name)}</h1>
<p class="about">${pictures.length} pictures from the Claude Code session of ${date}, in the order they came, each with the chat line it came with. Dani's are the pictures Dani pasted. Claude's are the pictures Claude made or showed Dani to explain something. Dani's pictures can include references from other games, or photos: those aren't Tessera's work. Made by Claude on ${today} from claude-logs\\images\\${escape(name)}\\.</p>
${figures.join('\n')}
</body></html>`;
  const source = path.join(OUT, `.print ${name}.html`);
  const pdf = path.join(OUT, `Pictures ${name}.pdf`);
  fs.writeFileSync(source, html);
  try { print(source, pdf); } finally { fs.rmSync(source, { force: true }); }
  const placed = pictures.filter((p) => captions.has(p)).length;
  return {
    key: `pictures ${name}`, action: 'create', table: 'documents', summary: `Original file: Pictures: ${name} (${pictures.length} pictures)`,
    fields: {
      name: `Pictures: ${name}`, category: categoryOf(name), event_date: date, evidence_source: 'source_document',
      notes: `The ${pictures.length} pictures of the Claude Code session "${name}", in the order they came, each marked Dani or Claude`
        + `${placed ? ' with the chat line it came with' : ''}, printed to PDF by Claude on ${today} from claude-logs\\images\\${name}\\.`
        + ' Claude\'s are the pictures Claude made or showed Dani to explain something. Dani\'s can include references from other games, or photos, which aren\'t Tessera\'s work.',
    },
    file: pdf, skip_if: { field: 'name', value: `Pictures: ${name}` }, reconstructed: date < today, placed,
  };
}

// Adds the records to the Bring in file, after what waits there; a record of the same key is replaced by the new one.
function propose(records) {
  const data = fs.existsSync(PROPOSALS) ? JSON.parse(fs.readFileSync(PROPOSALS, 'utf8'))
    : { kind: 'Tessera proposed records', format_version: 1, title: 'Pictures and pages as original files', written_by: 'Claude', records: [] };
  for (const r of records) {
    const at = data.records.findIndex((old) => old.key === r.key);
    if (at >= 0) data.records[at] = r;
    else data.records.push(r);
  }
  if (!/pictures and pages/i.test(data.title ?? '')) data.title = `${data.title}, and pictures and pages as original files`;
  data.written_at = today;
  fs.writeFileSync(PROPOSALS, `${JSON.stringify(data, null, 2)}\n`);
}

// The session's PDFs that Tessera Records doesn't hold yet, both in its own store and in every backup, by their records'
// names; none means its folder can go.
const RECORDS = path.join(os.homedir(), 'StudioRecords');
function notHeld(names) {
  const db = new DatabaseSync(path.join(RECORDS, 'studio-records.sqlite'), { readOnly: true });
  const backups = JSON.parse(fs.readFileSync(path.join(RECORDS, 'settings.json'), 'utf8')).backupDestinations ?? [];
  try {
    return names.filter((name) => {
      const doc = db.prepare(`SELECT sha256, status FROM documents d WHERE name = ?
        AND version = (SELECT MAX(version) FROM documents WHERE record_id = d.record_id)`).get(name);
      return !doc?.sha256 || doc.status === 'withdrawn' || !backups.length
        || !fs.existsSync(path.join(RECORDS, 'files', doc.sha256.slice(0, 2), doc.sha256))
        || backups.some((b) => !fs.existsSync(path.join(b, 'StudioRecordsBackup', 'files', `${doc.sha256}.srf`)));
    });
  } finally { db.close(); }
}
function tidy(name) {
  const folder = path.join(IMAGES, name);
  const files = fs.readdirSync(folder);
  const pictures = files.filter((f) => PICTURE.test(f) && /^\d{3} /.test(f));
  const pages = files.filter((f) => /^page .*\.html$/i.test(f)).map((f) => `Page: ${titleOf(fs.readFileSync(path.join(folder, f), 'utf8'), f)}`);
  const missing = notHeld([...pages, ...(pictures.length ? [`Pictures: ${name}`] : [])]);
  if (missing.length) return console.log(`${name}: kept, as Tessera Records doesn't hold ${missing.join(', ')} yet`);
  const text = path.join(TEXTS, `${name}.md`);
  if (fs.existsSync(text) && pictures.length) {
    const where = ` Its pictures are in Tessera Records, in the original file "Pictures: ${name}", numbered as here.`;
    let body = fs.readFileSync(text, 'utf8');
    // The texts whose pictures were saved after them name the folder in a line of their own, with a list of the pictures.
    const listed = /This conversation's (\d+) images are in images\\[^\n]*?\\\. \[The list of them\]\(<[^>]*>\) gives each one's time\./;
    body = listed.test(body) ? body.replace(listed, `This conversation's $1 pictures are in Tessera Records, in the original file "Pictures: ${name}", in the order they came.`)
      : / Its images are in images\\/.test(body) ? body.replace(/ Its images are in images\\[^\n]*?, shown or linked where they came\./, where)
        : body.replace(/( Private: never commit or share\.)/, `${where}$1`);
    body = body.replace(/!\[(Dani's|Claude's) image (\d{3})\]\(<[^>]*>\)/g, '$1 picture $2')
      .replace(/(Claude looked at|Again:) \[image (\d{3})\]\(<[^>]*>\)/g, '$1 picture $2');
    fs.writeFileSync(text, body);
  }
  fs.rmSync(folder, { recursive: true });
  console.log(`${name}: its folder is gone; its ${pictures.length} pictures and ${pages.length} pages are in Tessera Records`);
}

const args = process.argv.slice(2);
if (args.includes('--tidy')) {
  const all = args.includes('--all');
  for (const name of (all ? fs.readdirSync(IMAGES) : args.filter((a) => !a.startsWith('--'))).sort()) tidy(name);
  process.exit(0);
}
const pagesOnly = args.includes('--pages-only');
const names = args.includes('--all') ? fs.readdirSync(IMAGES).filter((n) => fs.existsSync(path.join(TEXTS, `${n}.md`)))
  : args.filter((a) => !a.startsWith('--'));
if (!names.length) {
  console.log('Usage: node picture-book.mjs <session name>... | --all [--pages-only]');
  process.exit(1);
}
fs.mkdirSync(OUT, { recursive: true });
const records = [];
for (const name of names.sort()) {
  const files = fs.readdirSync(path.join(IMAGES, name)).sort();
  const pages = files.filter((f) => /^page .*\.html$/i.test(f));
  const pictures = pagesOnly ? [] : files.filter(forTheBook);
  for (const page of pages) records.push(printPage(name, page));
  if (pictures.length) records.push(printPictures(name, pictures));
  const book = records.at(-1)?.placed !== undefined && records.at(-1).key === `pictures ${name}` ? records.at(-1) : null;
  console.log(`${name}: ${pages.length} page${pages.length === 1 ? '' : 's'}${pictures.length ? `, ${pictures.length} pictures, ${book.placed} with their chat line` : ''}`);
}
propose(records.map(({ placed, ...r }) => r));
console.log(`${records.length} records added to ${PROPOSALS}`);
