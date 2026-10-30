---
name: feedback-handover-files
description: "Where the handover files are, and keeping them current and short; when to update them and when to ask are rules 14 and 1 in CLAUDE.local.md."
metadata:
  node_type: memory
  type: feedback
  originSessionId: 9f748344-7857-4cd8-bb8e-bc639f4d93f0
  modified: 2026-10-23T13:17:59.710Z
---

Dani wants handover files for both projects kept up to date:

- **Tessera:** `CLAUDE.local.md` in the Tessera repo root. Private and git-ignored; it holds ownership, business and collaboration context. The shared `CLAUDE.md` only points to it.
- **Tessera Records:** `C:\Users\someo\Dropbox\Studio\Tessera Records\CLAUDE.md`, committed in that private repo. Since 2026-10-23 it is the one handover for the whole app (design part included).

**When to update them and when to ask:** rules 14 and 1 in section 2 of CLAUDE.local.md, the only copies.

**Why:** 2026-10-11, a Tessera conversation grew too long and the next session knew nothing, so Dani asked for handover files. 2026-10-14, Dani wanted to see handover text first ("I might not want it committed"). By 2026-10-23 every approval round was too much; see rule 1 in CLAUDE.local.md.

**How to apply:**
- Never put private Tessera context (ownership, Mattias/Skyfox, finances, preferences) into committed Tessera files.
- Once per session, at the end, not after every request ("don't update after every request", 2026-10-19).
- **Keep them short (Dani, 2026-10-22):** current state only, under about 3,000 words; replace outdated status instead of adding to it. Every session loads the handover, and Dani ran out of tokens. Full copies from before a trim go to `Dropbox\Studio\claude-logs\handover-archive\`.

Related: [[project-ownership-and-records-app]].
