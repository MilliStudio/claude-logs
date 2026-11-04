// Usage: node conversation-text.mjs <session.jsonl> <out.md> "<title>" ["<closing line>"]
// Writes Dani's and Claude's messages from a Claude Code session log, without
// code, tool calls, tool output or system notes. Times are Swedish local time.
// Messages Dani sent while Claude was working are kept too, marked as such.
// Every image in the conversation is saved in images\<out's name>\, numbered in the order it came, and the text shows
// it where it came (Dani, 4 November 2026: "they all need to be saved"): the ones Dani pasted (001 Dani.png), the
// image files Claude pointed her to or opened for her (002 Claude to Dani.png), both shown in the text, and the ones
// Claude opened to look at, such as screenshots of the game (003 Claude.png), linked. An image that comes again keeps
// its first number.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const time = (iso) => new Date(iso).toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' }).slice(0, 16);
const clean = (text) => text
  .replace(/<system-reminder>[\s\S]*?<\/system-reminder>/g, '')
  .replace(/<ide_[a-z_]+>[\s\S]*?<\/ide_[a-z_]+>/g, '')
  .replace(/<\/?pasted_content[^>]*>/g, '')
  .replace(/<task-notification>[\s\S]*?<\/task-notification>/g, '')
  .trim();

// The text above the messages.
export const header = (title, name, images) => `# ${title}\n\nThe messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output.${images ? ` Its images are in images\\${name}\\, shown or linked where they came.` : ''} Private: never commit or share.\n\n---\n\n`;

// An image file named in a message: a whole path on a drive, ending in an image's extension.
const IMAGE_PATH = /[A-Za-z]:[\\/][^\n"'`<>|*?]*?\.(?:png|jpe?g|gif|webp)\b/gi;
const EXTENSION = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/gif': 'gif', 'image/webp': 'webp' };
const RANK = { Claude: 0, 'Claude to Dani': 1, Dani: 2 }; // whose an image counts as, when it comes more than once

// The messages of a session log as text, and its images, saved in images\<name>\ unless save is false. With images
// false, the text is as this script wrote it before it saved images.
export function conversation(file, name, { images = true, save = true } = {}) {
  const entries = fs.readFileSync(file, 'utf8').trim().split('\n')
    .map((l) => { try { return JSON.parse(l); } catch { return null; } })
    .filter(Boolean);
  const kept = new Map(); // each image's hash: its data, extension, whose, when it first came and its place in order
  const keep = (data, extension, who, at) => {
    const hash = crypto.createHash('sha1').update(data).digest('hex');
    const known = kept.get(hash);
    if (!known) kept.set(hash, { data, extension, who, at: time(at), order: kept.size + 1 });
    else if (RANK[who] > RANK[known.who]) known.who = who;
    return `\u0000${hash}\u0000`; // a mark in the text, written out once each image's name is known
  };
  const fromBlock = (b, who, at) => keep(Buffer.from(b.source.data, 'base64'), EXTENSION[b.source.media_type] ?? 'png', who, at);
  const fromPaths = (text, who, at) => [...new Set(text.match(IMAGE_PATH) ?? [])]
    .filter((p) => fs.existsSync(p))
    .map((p) => keep(fs.readFileSync(p), path.extname(p).slice(1).toLowerCase().replace('jpeg', 'jpg'), who, at));

  const messages = [];
  // Texts of messages sent while Claude was working, so one delivered again later isn't written twice.
  const queued = new Set();
  const add = (who, at, text) => {
    const last = messages.at(-1);
    if (last && last.who === who) last.parts.push(text);
    else messages.push({ who, at: time(at), parts: [text] });
  };

  for (const e of entries) {
    if (e.isMeta || e.isSidechain || e.isCompactSummary) continue; // the summary written when a long session is compacted
    // A message Dani typed while Claude was working.
    const a = e.attachment;
    if (e.type === 'attachment' && a?.type === 'queued_command' && a.origin?.kind === 'human') {
      const prompt = Array.isArray(a.prompt) ? a.prompt : [];
      const at = a.timestamp ?? e.timestamp;
      const text = clean(prompt.filter((b) => b.type === 'text').map((b) => b.text).join('\n\n'));
      if (queued.has(text)) continue;
      const pictures = images ? prompt.filter((b) => b.type === 'image' && b.source?.data).map((b) => fromBlock(b, 'Dani', at)) : [];
      if (text) {
        queued.add(text);
        add('Dani', at, `(sent while Claude was working) ${text}`);
      }
      pictures.forEach((p) => add('Dani', at, p));
      continue;
    }
    if (e.type !== 'user' && e.type !== 'assistant') continue; // copies of what was sent, and system notes
    const content = e.message?.content;
    if (!Array.isArray(content) && typeof content !== 'string') continue;
    const blocks = typeof content === 'string' ? [{ type: 'text', text: content }] : content;
    const text = clean(blocks.filter((b) => b.type === 'text').map((b) => b.text).join('\n\n'));
    const who = e.type === 'user' ? 'Dani' : 'Claude';
    if (who === 'Dani' && text && queued.has(text)) continue;
    const pictures = [];
    if (images) {
      for (const b of blocks) {
        if (b.type === 'image' && b.source?.data) pictures.push(['Dani', fromBlock(b, 'Dani', e.timestamp)]);
        if (b.type === 'tool_result' && Array.isArray(b.content)) {
          for (const c of b.content) if (c.type === 'image' && c.source?.data) pictures.push(['Claude', fromBlock(c, 'Claude', e.timestamp)]);
        }
        // An image file Claude opened for Dani, in VS Code.
        const command = b.type === 'tool_use' ? b.input?.command ?? '' : '';
        if (/(^|[\s;&|])code(\.cmd)?\s/.test(command)) fromPaths(command, 'Claude to Dani', e.timestamp).forEach((p) => pictures.push(['Claude', p]));
      }
      if (text) fromPaths(text, who === 'Claude' ? 'Claude to Dani' : 'Dani', e.timestamp).forEach((p) => pictures.push([who, p]));
    }
    if (text) add(who, e.timestamp, text);
    for (const [by, p] of pictures) add(by, e.timestamp, p);
  }

  // Each image's name, by its place in order and whose it counts as, and the marks written out as pictures or links.
  const list = [...kept.entries()].sort((a, b) => a[1].order - b[1].order);
  for (const [, image] of list) image.file = `${String(image.order).padStart(3, '0')} ${image.who}.${image.extension}`;
  const ref = (image, from = `../images/${name}/`) => (image.who === 'Claude'
    ? `Claude looked at [image ${image.file.slice(0, 3)}](<${from}${image.file}>)`
    : `![${image.who === 'Dani' ? 'Dani\'s' : 'Claude\'s'} image ${image.file.slice(0, 3)}](<${from}${image.file}>)`);
  // An image already in the text is linked again, not shown again.
  const written = new Set();
  const body = messages.map((m) => `### ${m.who} · ${m.at}\n\n${m.parts.join('\n\n')}`).join('\n\n---\n\n')
    .replace(/\u0000([0-9a-f]{40})\u0000/g, (_, hash) => {
      const image = kept.get(hash);
      if (!written.has(hash)) return written.add(hash) && ref(image);
      return `${image.who === 'Claude' ? 'Claude looked at' : 'Again:'} [image ${image.file.slice(0, 3)}](<../images/${name}/${image.file}>)`;
    });
  if (save && list.length) {
    const folder = path.join(HERE, 'images', name);
    fs.mkdirSync(folder, { recursive: true });
    for (const [, image] of list) fs.writeFileSync(path.join(folder, image.file), image.data);
  }
  return { body, messages: messages.length, images: list.map(([, image]) => image), ref };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [file, out, title, closing] = process.argv.slice(2);
  const name = path.basename(out, '.md');
  const { body, messages, images } = conversation(file, name);
  fs.writeFileSync(out, `${header(title, name, images.length)}${body}\n${closing ? `\n---\n\n${closing}\n` : ''}`);
  console.log(`${messages} messages written to ${out}${images.length ? `, and ${images.length} images to images\\${name}\\` : ''}`);
}
