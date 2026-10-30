---
name: feedback_research_with_citations
description: "For open Tessera design/product hypotheses, Dani wants literature-backed research with full citations, not just reasoned opinion"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 0ff617e3-f891-41e6-80ea-8ee4cf3a92e4
  modified: 2026-10-08T19:00:44.257Z
---

When Dani asks to investigate a design or product hypothesis (e.g. "is there a reason to combine these two things in one app"), they want actual literature research — real studies/meta-analyses from reputable, current sources — not just reasoned argument from first principles. They explicitly asked for "scientific research... proven, reputable and up to date sources" and to "list all the references."

**Why:** confirmed by direct instruction; Dani then had the resulting research findings written into DOCS/15-17 and DOCS/43 as the project's durable record, so the sourcing needs to hold up on its own later, not just support one conversation.

**How to apply:** For open design/business questions in Tessera, default to running real web research (WebSearch/WebFetch) and citing sources, rather than answering from general reasoning alone. Be honest about evidence gaps — several of Dani's specific research questions had no direct study, and that was stated plainly rather than papered over.

**Update 2026-10-08:** Dani flagged (frustrated) that answers were missing relevant material already sitting in the repo — "as if you're looking through a looking glass, you see one thing and leave all the rest out." Concrete miss: when asked about narrative-engagement research, external reasoning was given before checking DOCS/15-research-findings.adoc and the dated reports in DOCS/reports/ (e.g. 2026-09-28-game-plus-habit-layer-bundling-research.adoc), which already had directly relevant citations (Nicholson 2012 on narrative connection vs. reward-only gamification; Froehlich, Findlater & Landay 2010 on eco-feedback/visible-narrative-beats-abstract-points) — both bear directly on Tessera's "narrative told through gameplay, not exposition" design. That same pass also surfaced a real citation inconsistency already in the repo (Daneels & Maes's co-author initial given as "K." in doc 15 vs "S." in the bundling report) that nobody had caught. **Fix going forward: before answering any research/citation question or doing a fresh web search, grep/read DOCS/15-research-findings.adoc and DOCS/reports/ (both the dated research reports and reports/research/) for existing relevant material first — treat the repo's own research corpus as the first source, not something to independently rediscover — and when citing the same source across files, check it reads identically (author names, year, venue) rather than assuming prior instances were correct.

**Location note (2026-10-08):** Dani moved `reports/` and `business/` out of DOCS to the repo root (`reports/research/`, flat `business/`). Read the paths above as `reports/` at repo root. Report links into DOCS use `../../DOCS/`.

**Update 2026-10-08 (second round):** Dani broadened this — "check everything like you used to. not just the research. you need to check the adocs and the research as well as our chat." This generalizes beyond citations: before answering, check (1) the relevant .adoc files in DOCS/, (2) the existing research corpus, and (3) what's already been established earlier in the current conversation, so answers build on and stay consistent with all three instead of re-deriving from general reasoning in isolation.
