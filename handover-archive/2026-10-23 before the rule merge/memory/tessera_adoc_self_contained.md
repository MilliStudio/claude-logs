---
name: tessera-adoc-self-contained
description: Each DOCS/*.adoc file must stand alone — no references to other .adoc files by filename
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 208cbf3c-d6a0-420b-9325-6097a6d8ca68
  modified: 2026-09-24T15:49:31.586Z
---

Each file in DOCS/ must be self-contained: never reference another file by name (e.g. "see 15-research-findings.adoc") inside the prose.

**Why:** Dani is using the AsciiDoc VS Code extension and assembles all 44 files into one document via `include::` directives in 00-current-master.adoc. Cross-file pointers by filename are redundant/awkward in that assembled context, and each file should be readable and editable independently without needing to trace links to other files. This reverses the old `.md`-era convention (a "## Related" links section per file, and a README cross-cutting-topics table) — that convention does not carry over to the `.adoc` rewrite.

**How to apply:** When new content belongs conceptually in multiple places, either restate the relevant point directly in each file (self-contained) or put it in exactly one file without a pointer from the others — never write "see X.adoc" or "see section N" referencing another file's filename or number in prose. Also: when new research/findings supersede old content in a file, replace that content outright rather than appending alongside it, per [[tessera-positioning-cozy-artistic]] update workflow.

**Third rule, learned 2026-09-24:** internal AsciiDoc cross-references (`<<anchor,link text>>`) ARE allowed and encouraged where one file's detail would otherwise get duplicated across files — e.g. a short summary in one file linking to the full detail in another. This doesn't violate the self-containment reasoning above, because it resolves as an in-page jump-link once `00-current-master.adoc` compiles everything via `include::`, not as a "go open another file" pointer — the exact awkwardness the original rule was written to avoid. The distinction: prose like "see 15-research-findings.adoc" (banned) vs. `<<_15_research_findings,the research findings>>` (fine). Use real content restatement when both places genuinely need the full detail; use an xref when one place should own the detail and the other just needs a pointer to it.

**Second rule, learned 2026-09-22 during the audience-hypothesis-reset pass:** research findings, citations, and study-backed reasoning ("a meta-analysis found...", "no precedent exists for...") belong ONLY in the designated research files — 15-research-findings.adoc, 16-audience-hypothesis.adoc, 17-research-still-needed.adoc. Never inject research citations or literature framing into game-design/mechanic files (e.g. 14-recurring-currency-spending-problem.adoc) or business files (e.g. 36-monetization.adoc, 37-business-and-audience-work.adoc) — those files state plain design decisions/conclusions only, without the research apparatus behind them. Reverted three such additions on 2026-09-22 after being corrected. Separately, M1-specific findings/decisions (e.g. sequencing recommendations) belong in the M1 files themselves (25-m1-technical-goals.adoc, 28-platform-integration.adoc, 34-m1-decisions-still-needed.adoc), not in the research files — that pass was deferred to later, not skipped.
