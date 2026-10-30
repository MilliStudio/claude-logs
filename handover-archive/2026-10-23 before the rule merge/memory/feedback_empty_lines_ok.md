---
name: feedback-empty-lines-ok
description: A printed file may lose or gain empty lines without asking Dani first; tell her afterwards. Every other difference still needs her yes (2026-10-16, 2026-10-17).
metadata:
  node_type: memory
  type: feedback
  originSessionId: fbdfc7f4-a1ed-4e39-b18c-45bb8f37da38
  modified: 2026-10-17T17:43:42.479Z
---

A printed file may lose empty lines without asking first; tell Dani afterwards (Dani, 2026-10-16, answering whether DOCS/43 could lose its last empty line: "lose any empty lines"). A printed file may also gain empty lines without asking, for example when a paragraph is split so a decision prints on its own; tell Dani afterwards (Dani, 2026-10-17: "cut them all don't ask me about adding empty lines"). Every other difference still needs her yes.

**Why:** empty-line changes don't change what the document says. Asking about each split was slowing the merges down and frustrating Dani.

**How to apply:** in Tessera Design moves and merges, make empty-line-only differences (including paragraph splits where no word changes) and report them after the fact; show all other differences (a word, formatting such as bold, a reworded sentence) before anything changes. Related: [[feedback-ask-before-filling]], [[feedback-copy-verbatim]].
