// Usage: node conversation-text.mjs <session.jsonl> <out.md> "<title>" ["<closing line>"]
// Writes Dani's and Claude's messages from a Claude Code session log, without
// code, tool calls, tool output or system notes. Times are Swedish local time.
// Messages Dani sent while Claude was working are kept too, marked as such.
import fs from 'node:fs';

const [file, out, title, closing] = process.argv.slice(2);
const entries = fs.readFileSync(file, 'utf8').trim().split('\n')
  .map((l) => { try { return JSON.parse(l); } catch { return null; } })
  .filter(Boolean);

const time = (iso) => new Date(iso).toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' }).slice(0, 16);
const clean = (text) => text
  .replace(/<system-reminder>[\s\S]*?<\/system-reminder>/g, '')
  .replace(/<ide_[a-z_]+>[\s\S]*?<\/ide_[a-z_]+>/g, '')
  .replace(/<\/?pasted_content[^>]*>/g, '')
  .trim();

const messages = [];
// Texts of messages sent while Claude was working, so one delivered again later isn't written twice.
const queued = new Set();
const add = (who, at, text) => {
  const last = messages.at(-1);
  if (last && last.who === who) last.parts.push(text);
  else messages.push({ who, at: time(at), parts: [text] });
};

for (const e of entries) {
  if (e.isMeta || e.isSidechain) continue;
  // A message Dani typed while Claude was working.
  const a = e.attachment;
  if (e.type === 'attachment' && a?.type === 'queued_command' && a.origin?.kind === 'human') {
    const text = clean((a.prompt ?? []).filter((b) => b.type === 'text').map((b) => b.text).join('\n\n'));
    if (text && !queued.has(text)) {
      queued.add(text);
      add('Dani', a.timestamp ?? e.timestamp, `(sent while Claude was working) ${text}`);
    }
    continue;
  }
  const content = e.message?.content;
  if (!Array.isArray(content) && typeof content !== 'string') continue;
  const blocks = typeof content === 'string' ? [{ type: 'text', text: content }] : content;
  const text = clean(blocks.filter((b) => b.type === 'text').map((b) => b.text).join('\n\n'));
  if (!text) continue;
  const who = e.type === 'user' ? 'Dani' : e.type === 'assistant' ? 'Claude' : null;
  if (!who || (who === 'Dani' && queued.has(text))) continue;
  add(who, e.timestamp, text);
}

const body = messages.map((m) => `### ${m.who} · ${m.at}\n\n${m.parts.join('\n\n')}`).join('\n\n---\n\n');
fs.writeFileSync(out, `# ${title}\n\nThe messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Private: never commit or share.\n\n---\n\n${body}\n${closing ? `\n---\n\n${closing}\n` : ''}`);
console.log(`${messages.length} messages written to ${out}`);
