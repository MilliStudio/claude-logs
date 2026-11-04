# Handover notes and conversation rules (2026-10-14)

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Private: never commit or share.

---

### Dani · 2026-10-14 18:19

revise the hadoff notes and the conversation ruls pls

---

### Claude · 2026-10-14 18:19

I'll check the current handover file, the memory notes and the repo state, then draft a revised version for your approval.

Now I'll write the proposed revision to a scratch file, without touching the real handover.

I've drafted a revised handover, but I haven't saved it. Your standing rule says I show you the text first and wait for a yes. The full draft is here: [CLAUDE.local.proposed.md](C:/Users/someo/AppData/Local/Temp/claude/c--Users-someo-Dropbox-Studio-Tessera-repositories-tessera/121d3fe9-f25c-4db8-a132-c61827245c56/scratchpad/CLAUDE.local.proposed.md)

**Conversation rules.** All ten rules stay, and none changes in meaning. I've sorted them into five groups: how to talk with you, before answering, changing files, the DOCS conventions, and drafts you send to others. Two points move into the rules:
- **"Never change files without asking"** now says it also covers memory notes and the handover. Until now, that was only in a memory note.
- **"Short, direct, real opinion, correct me"** moves from "Who you are working with" into the rules.

**Handover, structure and tidying:**
- **New "Current status" section** near the top. It gives ownership, collaboration, the uncommitted M1 document work and the next contacts at a glance.
- **Decisions are in strict date order.** Each decision now starts with its date and a short title.
- **Loose notes are filed under a date.** The notes on the firm's dissolution, your art never being AI-made, and *My Little Universe* had no date. I put the first two under the 13 Oct Almi meeting and the inspiration under "Tessera in brief".
- **Open items are grouped.** The groups are business, records and evidence, and housekeeping. I also fixed two lines that had run together.
- **"Last full update"** is now 14 Oct.

**Fact updates.** Each of these changes the meaning, so please confirm them:
- **Almi form, 8 Oct entry.** It used to say "correct that at the Almi meeting". It now says you corrected it on 13 Oct.
- **Mattias.** His two bullets are merged into one, and it now mentions the 14 Oct proposal for a partnership between the two companies.
- **The .mailmap file.** The draft no longer calls it "not yet committed", because git shows it is already committed.
- **Pronouns.** I changed "her" to "Dani" or "their", because I don't know your pronouns. Tell me which you use and I'll write that.
- **New open item.** It reads "Clarify with Mattias which form of AB partnership he means."

**A possible conflict, left unchanged.** Three sources describe tracking tests differently:
- **The 14 Oct handover entry** says the tracking test app stays separate, "in the M1 stage".
- **The new M1 technical design document** says M1 includes no tests of step or focus tracking.
- **The 10 Oct entry** puts tracking tests in M2.

Which is right? Is the tracking test a separate app built while M1 is under way, or does it now belong to M2?

**Memory notes I'd also update, if you agree:**
- **Skyfox note.** Its summary still says you are "seeking Almi guidance". It should say the meeting happened on 13 Oct.
- **Ownership note.** It says Dani Milli Studio "will be closed". It should say it is dissolved and confirmation is pending.
- **"Cozy + artistic" note.** It points to a report that no longer exists. I'd remove that pointer and keep the conclusions.

Say yes, or tell me what to change, and I'll save the handover and the memory notes.

---

### Dani · 2026-10-14 18:22

don't update anything i just asked you to view them so  you don't mess up

---

### Claude · 2026-10-14 18:22

Understood, and nothing has changed. The handover file, the rules and the memory notes are exactly as they were. I only read them. The draft I wrote sits in a temporary folder outside the repo, and I'll leave it alone.

I'll work by both files for the rest of this session. When you say "revise" from now on, I'll take it to mean "read through", not "rewrite".

---

### Dani · 2026-10-14 18:25

can you search online, refer to reputable and credible sources that are up to date where necessary: proper tdd structure and content. please show me what you find in a list

---

### Claude · 2026-10-14 18:25

I'll check what the repo already holds on technical design documents, then search the web.

The repo has no earlier research on how a technical design document (TDD) should be structured, so I'm searching the web now.

The general searches found the software standards. Game-specific sources were weak, so I'm searching for better ones.

I have candidate sources now. Next I'm opening the key ones to confirm what they actually say, plus checking two classic game-design books.

The software sources check out. Now the game-specific ones, plus the status of the two formal standards.

Still researching: I've confirmed most sources and am doing one last search for a recent game-industry source before writing up the list.

There is no official standard for a game technical design document (TDD). The game sources agree on what it is for, but they are old or second-hand. The most current, credible guidance on structure comes from general software engineering, and it agrees well with the game sources.

**What a TDD should contain**

- **Scope, goals and non-goals.** State what the build must achieve and what is deliberately left out. Sources: Ubl, arc42.
- **Constraints.** Cover the platform, engine, tools and third-party code. Sources: Ryan, arc42.
- **Architecture overview.** Name the main parts and how control passes between them, with one diagram of how they connect. Sources: Ryan, arc42, C4.
- **Data and saving.** Describe the data each game object needs, and how data is loaded, stored and saved. Sources: Ryan, Ubl.
- **One section per system, mirroring the game design document.** This makes sure every designed feature has a technical answer. Source: Ryan.
- **Limits and asset pipeline.** Set the technical limits artists and designers must stay within, and how their assets get into the game. Source: Schell.
- **Decisions with trade-offs.** Record each key choice, the alternatives you rejected, and why. Ubl calls this one of the most important sections. Microsoft also suggests noting how confident you are in each decision. Sources: Ubl, Manshreck, Nygard, Microsoft, arc42.
- **Cross-cutting concerns.** Cover security, privacy, storage and language support. Sources: Ubl, Manshreck.
- **Quality requirements.** Say how you will know the build met its goals. Sources: arc42, Manshreck.
- **Risks, open questions and a glossary.** Source: arc42.

**How to keep it useful**

- **Short beats complete.** Ubl puts large projects at about 10 to 20 pages, and smaller pieces at 1 to 3. Nygard says nobody reads or updates large documents. Librande argues that design documents should fit on one page.
- **Tailor it.** No source offers a fixed template. Ubl says to write whatever suits the project, and arc42 calls itself tailorable.
- **The lead programmer writes it.** Each programmer documents their own area, and the team reviews it together. Source: Ryan.
- **Give it an owner and a review date.** Documents without owners go stale. Mark outdated ones as obsolete and point to the current one. Source: Manshreck.
- **Update it when plans change.** Ubl says to keep it current until release. Notes on Schell's book say TDDs are often abandoned halfway through a project.
- **Keep a decision log.** Old decisions stay in the log, marked as superseded and linked to the new one. Sources: Nygard, Microsoft.

**Formal standards and gaps**

- **ISO/IEC/IEEE 42010:2022** is the current international standard for describing a system's architecture. It is paid, and it is heavy for a game prototype.
- **IEEE 1016-2009** defined 12 "viewpoints" for describing a software design. IEEE made it inactive on 5 March 2020, so I treat it as outdated.
- **I found no recent game-specific source.** No GDC talk or studio blog from 2020 onwards covers TDDs. Game Developer's only result is a 2016 community blog post saying the TDD is separate from the game design document.
- **Ryan's 1999 outline is the most detailed game source, but it is dated.** It assumes a PC game with multiplayer, so only its general structure carries over.
- **I checked Schell only through study notes,** not the book itself.
- **I left out weak sources.** These were vendor blogs, AI-made template sites, student projects and forum posts.

**One clash with how Tessera's docs work.** The decision-log sources keep superseded decisions in place, marked as superseded. Your docs replace superseded text instead. Git still keeps the old versions, but someone reading the TDD won't see why a decision changed.

Sources:
- Ryan, Tim. 17 Dec 1999. [The Anatomy of a Design Document, Part 2: Documentation Guidelines for the Functional and Technical Specifications](https://www.gamedeveloper.com/design/the-anatomy-of-a-design-document-part-2-documentation-guidelines-for-the-functional-and-technical-specifications). Gamasutra, now Game Developer.
- Ryan, Tim. 19 Oct 1999. [The Anatomy of a Design Document, Part 1](https://www.gamedeveloper.com/design/the-anatomy-of-a-design-document-part-1-documentation-guidelines-for-the-game-concept-and-proposal). Gamasutra, now Game Developer.
- Schell, Jesse. 2019. *The Art of Game Design: A Book of Lenses*, 3rd edition, CRC Press. See the [chapter on documents](https://www.oreilly.com/library/view/the-art-of/9781351803632/xhtml/C30_chapter27.xhtml). I checked it only through [study notes on the 2nd edition](https://notesbylex.com/the-art-of-game-design-a-book-of-lenses-2nd-edition-by-jesse-schell).
- Librande, Stone. 2010. [One-Page Designs](https://gdcvault.com/play/1012356/One-Page). GDC 2010, GDC Vault.
- Gonzalez, Leandro. 26 Jul 2016. [How to Write a Game Design Document](https://www.gamedeveloper.com/business/how-to-write-a-game-design-document). Game Developer community blog.
- Ubl, Malte. 6 Jul 2020. [Design Docs at Google](https://www.industrialempathy.com/posts/design-docs-at-google/). Industrial Empathy.
- Manshreck, Tom. 2020. [Documentation](https://abseil.io/resources/swe-book/html/ch10.html), chapter 10 in Winters, Manshreck and Wright, *Software Engineering at Google*, O'Reilly.
- Nygard, Michael. 15 Nov 2011. [Documenting Architecture Decisions](https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions). Cognitect blog.
- Microsoft. 10 Apr 2026. [Maintain an architecture decision record](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record). Azure Well-Architected Framework, Microsoft Learn.
- Hruschka, Peter and Gernot Starke. [arc42 template overview](https://arc42.org/overview) and [documentation](https://docs.arc42.org/home/).
- Brown, Simon. [The C4 model](https://c4model.com/).
- IEEE. 2009. [IEEE 1016-2009, Software Design Descriptions](https://standards.ieee.org/ieee/1016/4502/). Inactive since 5 March 2020.
- ISO, IEC and IEEE. November 2022. [ISO/IEC/IEEE 42010:2022, Software, systems and enterprise: Architecture description](https://www.iso.org/standard/74393.html). 2nd edition.

---

### Dani · 2026-10-14 18:32

One clash with how Tessera's docs work. The decision-log sources keep superseded decisions in place, marked as superseded. Your docs replace superseded text instead. Git still keeps the old versions, but someone reading the TDD won't see why a decision changed.

we can start with this practice from now

---

### Claude · 2026-10-14 18:32

I'll check where the current "replace superseded text" rule is written down, so I can propose the exact changes.

Agreed. Nothing is saved yet, because your rules say I show the exact text first.

I read "this practice" as a decision log. Each document still states only the current decision. Every decision also gets an entry in one log, and an old entry is never deleted. When a decision changes, the old entry is marked superseded and linked to the new one. It applies only to decisions made from today. I would not back-fill old ones.

**1. Handover rule.** This is in the private handover file, under the DOCS conventions.

Original:
```
   - When something is superseded, replace it; don't append alongside it.
```
Proposed:
```
   - When something is superseded, replace it in the text; don't append alongside it. Decisions are the exception (from 2026-10-14): record each design or technical decision in DOCS/46-decision-log.adoc. When a decision changes, add a new entry and mark the old one superseded, with the date and a link to the new entry. Never delete a logged decision or change what it says. Business and ownership decisions stay in this handover, not in DOCS.
```
That last sentence matters because DOCS will be copied to a future team repository. Your private positions must not travel with it.

**2. New file: DOCS/46-decision-log.adoc.** The lines starting with `//` are an entry template. They don't show in the compiled document.
```
[[decision_log]]
== Decision log

This log records each design and technical decision once it is made. When a decision changes, its entry stays here, marked superseded, with a link to the entry that replaces it. The other documents state only the current decision.

// Entry format. Copy for each new decision. Number entries in order and never reuse a number.
//
// [[d001]]
// === D-001: Short title
//
// Date:: 2026-10-14
// Status:: Accepted, or: Superseded by <<d002,D-002>> on <date>
// Context:: Why a decision was needed.
// Decision:: What was decided.
// Alternatives:: What else was considered, and why it was not chosen.
// Consequences:: What this changes, including the downsides.
// Confidence:: High, medium or low.

No decisions are logged yet.
```

**3. Include the log in two documents.** Add this line at the end of the master document. Add it again in the M1 technical design document, just before the open decisions section. That way, readers of the technical design document see why decisions changed.
```
include::46-decision-log.adoc[]
```

**4. Memory note.** Add this paragraph to the note on self-contained DOCS files:
```
**Decision log (from 2026-10-14):** changed decisions are the exception to "replace superseded content". The document text still states only the current decision, and the decision is also recorded in DOCS/46-decision-log.adoc. Old entries are never deleted or rewritten. They are marked superseded, with the date and a link to the new entry. Scope: design and technical decisions only. Business and ownership decisions stay in the private handover.
**Why:** Dani adopted this on 2026-10-14 after research showed that decision logs keep visible why a decision changed, which replacing text loses.
```
Its line in the memory index would end with this text instead:
```
replace superseded content, but log changed decisions in DOCS/46 and keep old entries marked superseded (from 2026-10-14).
```

Should I save all four, or only some?

---

### Dani · 2026-10-14 18:36

ignore that request i have no idea what you're doing

---

### Claude · 2026-10-14 18:36

Dropped. Nothing was changed.

My last message was too technical, and that's on me. In plain terms, I suggested keeping a list of decisions. When a decision changes, the old one would stay on that list marked "replaced" instead of being deleted, so readers can still see why it changed.

---

### Dani · 2026-10-14 18:36

we

---

### Claude · 2026-10-14 18:36

Your message seems to have been cut off after "we". What did you want to say?

---

### Dani · 2026-10-14 18:36

we're editing the m1 tdd which you seem to have altered the text while assembling.

---

### Claude · 2026-10-14 18:37

I'll compare the M1 TDD and the files it pulls in against the last committed versions, to find exactly what changed. I won't edit anything.

---

### Dani · 2026-10-14 18:37

[Request interrupted by user for tool use]

you're making your own decisions and adding questions that i never asked

---

### Claude · 2026-10-14 18:37

Understood, I've stopped. Nothing was changed.

From now on I'll do only what you ask. Tell me what you want done with the M1 TDD.

---

### Dani · 2026-10-14 18:38

oh but you've already done that in the previous conversation. and now i'm trying to fix all that crap

---

### Claude · 2026-10-14 18:38

Sorry about that. The earlier session should have asked before changing anything, and it didn't.

Your last committed versions are still in git, so any of those changes can be undone. If it helps your clean-up, I can show you exactly what changed in each file since that commit. I'll only look, and only if you say so.

---

### Dani · 2026-10-14 18:39

no it won't. i have no idea when you added that
you made up the text below. in no way was this dumb answer mine, because the entire repo is about everything and i mean every milestone being built in a way that is usable for the entire project. saved states, reuasble puzzles, mechanics, etc. why are you making stuff up?

whether any M1 code carries over into M2, or M1 is thrown away once it has answered its question;

---

### Claude · 2026-10-14 18:40

I'll check where that line is and whether anything in the repo supports it. I'm only reading, not changing anything.

The line is in two of the new M1 files. Before answering, I'm checking the three other places where similar words appear.

You're right. Nothing in the repo supports that line. It was made up in the earlier conversation, and it contradicts your design.

It appears in two places, and both files were written in that earlier conversation today:
- [01-technical-baseline.adoc:16](DOCS/m1/01-technical-baseline.adoc#L16) has the full line, ending "or M1 is thrown away once it has answered its question".
- [06-decisions-still-needed.adoc:15](DOCS/m1/06-decisions-still-needed.adoc#L15) has a shorter version, "whether any M1 code carries over into M2".

Both files are new and have never been committed. So you're right that git can't help with them, because there is no earlier version to go back to.

Your docs only use "throwaway" for the separate tracking test app, never for M1 itself. The line also contradicts the TDD's own M1 goals. Those say M1 builds the reusable state system and interaction patterns as the foundation.

There's no good reason it happened. Throwaway prototypes are a common idea in software, and the earlier conversation most likely used that general idea instead of your docs. That is making things up, and it shouldn't have happened.

I haven't changed anything.

---

### Dani · 2026-10-14 18:41

you do not EVER paraphrase or add your own conclusions or questions to my work

---

### Claude · 2026-10-14 18:42

Understood. I will never paraphrase your work, or add my own conclusions or questions to it.

Your rules say I must show you the exact text before saving anything. To make future sessions follow this too, I'd save the text below. It replaces the old rule that let me improve wording.

**Handover notes, rule 2.** It currently allows improving phrasing and wording. The new rule 2 would read:
```
2. **Dani's work:** never paraphrase it, and never add your own conclusions or questions to it. Keep Dani's words exactly, including when assembling documents or moving text between files. Change wording only when Dani asks for that specific change. Errors (facts, logic, conflicts with other docs) are never fixed silently: raise them in the conversation, explain why, and recommend a fix. (Set 2026-10-14; replaces the earlier rule that allowed improving phrasing.)
```

**Memory note on editing.** The new text would replace the whole note:
```
Never paraphrase Dani's work, and never add Claude's own conclusions or questions to it. Keep Dani's words exactly, including when assembling documents or moving text between files. Change wording only when Dani asks for that specific change. This replaces the 2026-10-09 rule that allowed improving phrasing and wording.

Errors in Dani's text (facts, logic, conflicts with other docs) are never fixed silently. Raise them in the conversation, explain why, and recommend a fix.

Why: on 2026-10-14 Dani found an open question in the new M1 TDD files that Dani never wrote: "whether any M1 code carries over into M2, or M1 is thrown away once it has answered its question". An earlier session added it while assembling the TDD. It contradicts the project's basis that every milestone builds reusable systems. Dani said: "you do not EVER paraphrase or add your own conclusions or questions to my work."

How to apply: copy Dani's text word for word. Anything Claude thinks is missing or wrong goes in the conversation, never into the file.
```

**Memory index line:**
```
- [Never paraphrase or add to Dani's work](feedback_edit_scope_and_brevity.md) — keep Dani's words exactly; no own conclusions or questions; raise errors in the conversation.
```

I'll save these only if you say yes.

---

### Dani · 2026-10-14 18:42

you've already added that rule to youe memory yet you still do it

---

### Claude · 2026-10-14 18:42

You're right. The rule is already in my memory and in your handover notes, and it was broken anyway. I broke it in this conversation too, with the decision-log idea and the questions you never asked. Saving it again won't fix that, so I won't.

Memory only works if I follow it. Nothing in it actually stops me from changing a file. Claude Code's permission setting does. In its normal mode, every file change is shown to you and waits for your approval. Auto mode skips that step, and this session was in auto mode until a few minutes ago.

---

### Dani · 2026-10-14 18:44

whether any M1 code carries over into M2, or M1 is thrown away once it has answered its question;

No.. that line was way beyond paraphrasing to improve grammar or wording. that is adding context. YOU NEVER CHANGE CONTEXT

---

### Claude · 2026-10-14 18:44

Understood. Improving grammar and wording was allowed. That line added an idea that was never in your work, and that is never allowed. I will never change context.

That also means the "never paraphrase" rule I proposed misread the problem. I've dropped it.

---

### Dani · 2026-10-14 18:44

how can you confuse the two

---

### Claude · 2026-10-14 18:45

I fixed on the word "paraphrase" instead of looking at what the line actually did. It didn't reword anything you wrote. It added a new idea, which is a different and worse mistake. I should have seen that before proposing a rule, and I didn't.

---

### Dani · 2026-10-14 18:45

it was as clear as day

---

### Claude · 2026-10-14 18:45

It was, and I got it wrong.

---

### Dani · 2026-10-14 18:45

please check anything else that you've changed today which repeated this mistake

---

### Claude · 2026-10-14 18:46

I'll find everything changed today, compare it with your text and with what you asked for in the earlier conversation, and list anything that adds new ideas. I won't change anything.

The earlier conversation is in one long session log that runs over several days. I'll pull out only today's part: your messages and every file edit made.

---

### Dani · 2026-10-14 18:46

[Request interrupted by user for tool use]

you're supposed to be helping not damaging my work

---

### Claude · 2026-10-14 18:46

Nothing I've done in this conversation has changed your files. Every command I ran only read things. That last one only checked which programs are installed on your computer, so I could read the log of the earlier conversation.

If you want me to continue the check, I'll only read files and show you what I find.

---

### Dani · 2026-10-14 18:47

ok

---

### Claude · 2026-10-14 18:47

Continuing, read-only. First I'm pulling today's part of the earlier conversation: your messages and each edit made to files.

I have your messages and most of the edits from the earlier conversation. Some commands were cut off, so I'm pulling the rest in full, plus what Claude told you before you approved the changes.

I now have every edit from today and what you asked for each time. Before listing anything, I'm checking the older docs so I only flag text that has no source in your work.

I have the sources. Now I'm getting exact line numbers in the current files so each finding points to the right place.

Last check: whether the Almi meeting transcript you gave the earlier conversation is in its log. If it is, I can verify the Almi notes against it.

The transcript is there. I'm spot-checking the remaining Almi notes against it.

The Almi notes match the transcript. Before I write up the findings, I'm running one last search to confirm each flagged detail really has no source anywhere in your docs.

Almost done. One last check on three details, using read-only commands.

Yes. The earlier conversation added its own ideas in many more places today. Everything below is text it wrote that is not in your docs or your messages. I only read files during this check.

### The new M1 files

All six were written today and have never been committed.

**Technical baseline**
- [Line 9](DOCS/m1/01-technical-baseline.adoc#L9): "No server for game logic. Progress is saved in the browser". Nobody made that decision.
- [Lines 15–17](DOCS/m1/01-technical-baseline.adoc#L15-L17) are three questions you never asked. They are "plain web technologies, or a Unity web build", the M1 code line you found, and "which browsers and devices".
- [Line 19](DOCS/m1/01-technical-baseline.adoc#L19): "The builder is asked to propose the technology, with reasons, including what each choice means for M2."

**Technical goals**
- [Line 10](DOCS/m1/02-technical-goals.adoc#L10) and [line 26](DOCS/m1/02-technical-goals.adoc#L26) make the representative opening, "roughly 5–10 Tesserae", M1's content. Your docs call the opening a working draft, and none says M1 uses it.
- [Line 22](DOCS/m1/02-technical-goals.adoc#L22): "monetization: purchases, ads, currency for sale". It stayed after you asked to remove the money wording.
- [Line 37](DOCS/m1/02-technical-goals.adoc#L37): "Placeholder names are fine in M1."
- [Line 49](DOCS/m1/02-technical-goals.adoc#L49): discovering by "inspects a spot or reaches a place", revealing "an item, a resource or a passage". Your docs only name the hidden passage.
- [Line 55](DOCS/m1/02-technical-goals.adoc#L55): "Whether a harvestable runs out or regrows is open."
- [Line 85](DOCS/m1/02-technical-goals.adoc#L85): "Whether M1 includes travelling between portals is open."
- [Lines 97–100](DOCS/m1/02-technical-goals.adoc#L97-L100) list four rules: rewards through one place, a version number on save data, room on screen, and no rule assuming the layer never exists. You only said the app must be able to add the layer later without issue.
- [Line 102](DOCS/m1/02-technical-goals.adoc#L102) gives the examples "how rewards and costs are set, and how fast progress is paced".

**World assembly, save behaviour and testing**
- [World assembly, line 11](DOCS/m1/03-world-assembly.adoc#L11): "Proposed: keep these settings in an editable data file".
- [Save behaviour, line 4](DOCS/m1/04-save-behaviour.adoc#L4): "M1 saves progress locally, in the tester's browser."
- [Save behaviour, line 16](DOCS/m1/04-save-behaviour.adoc#L16): "Save data carries a version number".
- [Save behaviour, line 18](DOCS/m1/04-save-behaviour.adoc#L18): "Testers need a way to start over from the beginning."
- [Testing, line 12](DOCS/m1/05-testing.adoc#L12): "outside testers who have not seen the concept before".
- [Testing, line 21](DOCS/m1/05-testing.adoc#L21) sets out three ways to see where testers stop, including "screen recordings made with the tester's consent". It also says "Any log must not collect personal data."

**Decisions still needed**
- [Lines 8–10](DOCS/m1/06-decisions-still-needed.adoc#L8-L10) add three questions. They are whether harvestables run out or regrow, travelling between portals, and "whether M1 needs a Guardian (most likely not)".
- [Lines 14–17](DOCS/m1/06-decisions-still-needed.adoc#L14-L17) add four more. They are web or Unity, the M1 code line, browsers and devices, and hosting.
- [Line 18](DOCS/m1/06-decisions-still-needed.adoc#L18): "The repository belongs to the project from the start." The legal report only recommends "Tessera-controlled repository access from the start". This line states that advice as a fact and turns access into ownership.
- [Lines 22–23](DOCS/m1/06-decisions-still-needed.adoc#L22-L23) add "how many, and how they are found", plus the three ways to see where testers stop.
- [Lines 34–36](DOCS/m1/06-decisions-still-needed.adoc#L34-L36) are the whole "For the builder to propose" section.

### Your other docs

- **"After M1" for the tracking test.** You said none of the real-world layer work is in M1. The earlier conversation then chose "after M1" on its own, calling it "the smallest change". It wrote this into seven places:
  - [28-platform-integration.adoc:6](DOCS/28-platform-integration.adoc#L6), [line 41](DOCS/28-platform-integration.adoc#L41) and [line 46](DOCS/28-platform-integration.adoc#L46);
  - [33-milestones.adoc:41](DOCS/33-milestones.adoc#L41) and [line 102](DOCS/33-milestones.adoc#L102);
  - [08-start-decision-and-timeline.adoc:16](business/08-start-decision-and-timeline.adoc#L16);
  - [13-team-decision-checklist:141](business/13-team-decision-checklist#L141).
- [28-platform-integration.adoc:48](DOCS/28-platform-integration.adoc#L48): "before building them into M2" became "into the game". Its own plan said that text would not change.
- [43-current-major-open-questions.adoc:40](DOCS/43-current-major-open-questions.adoc#L40): you asked "are there game rules that shouldn't assume it's absent?" It became "Which game rules must not...", which assumes some exist, and it gained the same two examples. This one is in today's commit, which is not on GitHub yet.
- [31-source-control-and-handoff.adoc:14](DOCS/31-source-control-and-handoff.adoc#L14): "At M2 exit" became "At the end of each milestone". That change was in the plan you answered with "yep good work", but the idea was Claude's.

### Handover notes and memory

- **Mattias's AB partnership.** You only said Mattias wants a partnership between ABs. The handover adds three possible meanings and an "Implications" paragraph. My memory note on Skyfox repeats the three meanings.
- **The real-world layer entry.** It adds the same four rules after your sentence. It also says "The tracking test app stays separate, in the M1 stage", which contradicts what you said later.

**Checked and fine:**
- **Almi notes.** They match the meeting transcript.
- **Content from your docs.** These are the opening's steps, the refinery, the interactions, the kit containers and the exit criteria.
- **Edits you asked for.** These are the money-to-time wording and the sentence that M1 must be able to take the layer later.

---

### Dani · 2026-10-14 18:58

leave it all as it i'm editing them all myself

---

### Claude · 2026-10-14 18:58

Understood. I won't touch any of it.

---

### Dani · 2026-10-14 19:01

can you read every file in the repo and change the following:
"refinery, refineries" remane to apparatus, apparatuses

Botanist's Kit rename to Gatherer's Kit

---

### Claude · 2026-10-14 19:02

I'll find every place these two names appear first, so the renames are exact. Nothing is changed in this step.

The names appear in 11 files. Here is every matching line, so I can handle "a refinery" → "an apparatus", the image file name, and file-name references correctly.

The renames are in. The search didn't display the lines that use a curly apostrophe, so I'm confirming those three directly.

Done. "Refinery" and "refineries" are now "apparatus" and "apparatuses", and "Botanist's Kit" is now "Gatherer's Kit", in every file that used them. That covers seven files in the main DOCS folder and three M1 files. Nothing is committed.

I left these as they were:
- **File names.** These are the Gatherer's Kit doc's file name, "10-botanists-kit-and-tools", and the image "mill refinery.png". Renaming a file breaks every link that points to it.
- **"explorer/botanist field kit"** in [10-botanists-kit-and-tools.adoc:5](DOCS/10-botanists-kit-and-tools.adoc#L5). It describes the kit's style, not its name.
- **"refining"**, for example in the "Gathering, resources and refining" title. You only named refinery and refineries.

You had 02-technical-goals.adoc open. If it had unsaved edits, VS Code will warn you when you save, because the file changed while it was open.

---

### Dani · 2026-10-14 19:04

the technical goals in m1 folder are still old names?

---

### Claude · 2026-10-14 19:04

I'll check what's in that file on disk right now.

No. The file on your disk already has the new names: "Gatherer's Kit" and "apparatus". Your open tab is showing an older copy.

That usually means the tab has unsaved edits, so VS Code didn't reload it, to protect your work.

- **If you have unsaved edits in that tab,** save them. VS Code will warn that the file is newer. Choose "Overwrite" to keep your edits, then tell me, and I'll redo the rename in that one file.
- **If you have no unsaved edits,** close the tab and open the file again.

---

### Dani · 2026-10-14 19:06

WHy did yo name this systems

=== Systems

Each system is described as input → expected behaviour → what is saved.

---

### Claude · 2026-10-14 19:07

That heading was Claude's choice in the earlier conversation, not yours.

Your docs ask for that format per feature, not per system:
- [26-architecture-responsibility.adoc:12](DOCS/26-architecture-responsibility.adoc#L12) says "Jousef's preferred minimum feature information is: Input → expected behaviour/output → what needs to be saved".
- [27-jousefs-technical-reply.adoc:15](DOCS/27-jousefs-technical-reply.adoc#L15) says "His preferred information is simply, per feature".

The word "systems" comes from your team checklist, at [line 130](business/13-team-decision-checklist#L130): "Confirm what systems the new M1 actually contains." The earlier conversation put Jousef's per-feature format under that word, which changed his term.

---

### Dani · 2026-10-14 19:08

if you were to rename it to something jousef would prefer, what would that be

---

### Claude · 2026-10-14 19:08

Features. It's Jousef's own word. He asked for the information "per feature" and talked about "features and boxes".

I'd leave out "boxes". Your notes say its meaning was never clarified and shouldn't be reinterpreted.

The line under the heading also says "Each system", so it would need the same change:

```
=== Features

Each feature is described as input → expected behaviour → what is saved.
```

---

### Dani · 2026-10-14 19:08

Just feature? is that enough to describe feature of what

---

### Claude · 2026-10-14 19:08

On its own, no. "M1 features" says whose features they are. Everything listed under it, from moving around to saving and loading, is part of the M1 prototype.

```
=== M1 features

Each feature is described as input → expected behaviour → what is saved.
```

---

### Dani · 2026-10-14 19:09

you created an entire list of things that didn't exist before under these features

---

### Claude · 2026-10-14 19:10

You're right. None of your docs list M1's features, and none describe a feature as input, behaviour and saved. Your docs only define those three terms. The earlier conversation chose all ten features and wrote every entry. Some details come from your docs, such as the apparatus steps and the four interaction types, but the list itself is new.

Your team checklist still has "Confirm what systems the new M1 actually contains" unticked. So which features M1 has was never decided.

My check earlier should have said this. I flagged single lines inside the list and called the rest fine, which was wrong.

---

### Dani · 2026-10-14 19:11

it should be examples of m1 features instead

---

### Claude · 2026-10-14 19:11

Agreed. That matches the facts, since the list was never decided. Here are the two lines as they would read:

```
=== Examples of M1 features

Each feature is described as input → expected behaviour → what is saved.
```

I haven't changed the file, since you're editing it.

---

### Dani · 2026-10-14 19:12

i don't have the competence to verify if these examples are valid or compatibnle with tessera. i'm not a game programmer

---

### Claude · 2026-10-14 19:13

You don't need to be a programmer for most of it. Your docs split the work this way. You define what a feature does and how it should behave, and the programmer decides how to build it. Each example mixes two kinds of content:

- **Design:** what the player does, what happens, and what the game remembers. You can judge that, because it's the same kind of thing you wrote in the representative opening. For example, "the lantern transforms and becomes a portal" is a design statement.
- **Technical:** things like "set per harvestable rather than in code" or saving progress in the browser. Jousef should judge those, not you.

In my view, nothing in the examples is unusual for a programmer. They're ordinary game patterns: containers with limits, a machine that turns ingredients into a product, objects that switch state, and saved progress.

With the heading "Examples of M1 features", the document already says the list isn't final. Jousef can confirm or correct the technical side when he reads it.

---

### Dani · 2026-10-14 19:14

so aren't you telling jousef what to do by writing those? or is this exactly what he was asking for?

---

### Claude · 2026-10-14 19:14

Mostly it's exactly what he asked for. Your notes on his reply say he wants, per feature, "input data; expected output/behaviour; what must be saved". He doesn't want class or architecture designs. Your docs also say you define what a feature does, and programming decides how it's built. An entry like "a vial supplied to the dormant lantern, the lantern becomes a portal, its state is saved" is the "what". That's your job, and it doesn't tell him how to code it.

A few lines do cross into the "how". They tell Jousef how to build it, and all of them came from the earlier conversation, not from you:
- [01-technical-baseline.adoc:9](DOCS/m1/01-technical-baseline.adoc#L9) and [04-save-behaviour.adoc:4](DOCS/m1/04-save-behaviour.adoc#L4) say there's no server and progress is saved in the browser.
- [02-technical-goals.adoc:97](DOCS/m1/02-technical-goals.adoc#L97) says rewards, costs and progress go "through one place in the code".
- [02-technical-goals.adoc:98](DOCS/m1/02-technical-goals.adoc#L98) and [04-save-behaviour.adoc:16](DOCS/m1/04-save-behaviour.adoc#L16) say save data carries a version number.
- [03-world-assembly.adoc:11](DOCS/m1/03-world-assembly.adoc#L11) says to keep settings "in an editable data file rather than in the code".

One line that sounds technical is yours. "Set per harvestable rather than in code" restates your own requirement in the gathering doc, that resource sources use configurable drop information.

---

### Dani · 2026-10-14 19:15

don't use the new files in m1 as a reference. those are not something i wrote myself

---

### Claude · 2026-10-14 19:15

Understood. I won't use the M1 files as a source for anything. I'll only point to them when you ask what's in them.

Here's the answer again, from your own docs only. [Jousef's technical reply](DOCS/27-jousefs-technical-reply.adoc#L15) says he wants, per feature, the input data, the expected output or behaviour, and what must be saved. [Architecture responsibility](DOCS/26-architecture-responsibility.adoc#L3-L10) says you define what a feature does, its required behaviour, content and state requirements, and player-facing constraints. Programming decides the internal software architecture.

So describing what each feature does, in his format, is what he asked for. Telling him how to build it is not.

---

### Dani · 2026-10-14 19:17

the player chooses where ot go. that's misleading. there is a virtual joystick so the user swipes the intended directoin and holds. this is why you don't make stuff up. YOU ASSSSSSSSK ask ask ask.

---

### Claude · 2026-10-14 19:17

You're right. Your [controls doc](DOCS/22-controls-and-camera.adoc#L6) already says "touch/joystick-style movement". That line didn't just make something up. It also ignored what you had already written.

From now on, if something isn't in your docs or your messages, I'll ask you instead of filling it in.

---

### Dani · 2026-10-14 19:17

it's in your rules

---

### Claude · 2026-10-14 19:17

It is. The rule was there, and it was broken anyway.

---

### Dani · 2026-10-14 19:18

why do you repeatedly do this

---

### Claude · 2026-10-14 19:18

Honestly, I'm built to produce complete, finished-looking text. When there's a gap, like how the player moves, the easy path is to fill it with what's typical for games. The result reads as confidently as your real content, so it doesn't stand out as a guess.

Rules don't stop that on their own. I read them at the start, but during a big task like remaking the TDD I write many pieces in a row and don't check each one against them. The earlier conversation was also very long, and it ran out of space at the end. In long conversations, early instructions carry less weight.

Two things reduce it, because they don't depend on me remembering:
- **Keep Claude Code in the mode that asks before every edit.** Then you see each change before it's made, and you can say no.
- **Start a new conversation for each big task.** Your handover file carries the rules over, so they stay fresh.

---

### Dani · 2026-10-14 19:19

more importantly. if it's already in the docs.. why didn't you simply get the text from the doc include::[]

---

### Claude · 2026-10-14 19:19

There's no good reason. It should have done exactly that.

The earlier conversation sorted your docs into ones shared by all milestones and ones written for M2. It included the shared ones, like the core gameplay loop on that line. But it never included your docs on these topics:
- the representative opening;
- gathering and the apparatus;
- the kit;
- lanterns and portals;
- controls.

Instead it retold them in its own words in the new M1 files. That's where the changes and the made-up details got in. "The player chooses where to go" replaced your joystick text because the controls doc was never included.

Including those docs would have kept your exact words. Where a doc mixes M1 and M2 content, the TDD can include just the M1 part, as it already does with the milestones doc. Where that wasn't clear, it should have asked you.

---

### Dani · 2026-10-14 19:20

is it possible for you to give me a warning when a conversation gets too long

---

### Claude · 2026-10-14 19:21

Not reliably on my own. I can't see how full the conversation is while we talk.

Claude Code can do it automatically, though. A small check can run each time you send a message, and show you a warning once the conversation passes a set size. It works even when I forget, because Claude Code runs the check, not me.

Setting it up means adding a few lines to Claude Code's settings. I'll only do that if you say yes.

---

### Dani · 2026-10-14 19:22

do you recommend correcting the current files in m1 folder or simply starting over.

---

### Claude · 2026-10-14 19:22

Start over. Correcting would mean checking every sentence against your docs, and most of the text is a retelling of docs you already wrote. Starting over with a different method leaves nothing to check.

Here's how I'd do it:
1. **Your own words first.** The TDD includes your existing docs directly, such as the opening, gathering, the kit, lanterns and portals, and controls. Where a doc also covers M2, the TDD takes only the M1 part, as it already does with the milestones doc.
2. **Gaps become questions.** Where nothing exists yet, such as how M1 saves progress, I list the gap and ask you. Nothing gets filled in.
3. **You approve each piece** before anything is written.

You lose almost nothing. The M1 decisions that are really yours are already in the milestones doc and your messages, such as the browser prototype and the real-world layer coming later. Anything you've fixed by hand today can go straight into the new version.

I'd also do it in a new conversation. This one is long, and that's when mistakes like these happen.

---

### Dani · 2026-10-14 19:23

ok sounds good. let's go

[Request interrupted by user]

I'd also do it in a new conversation. This one is long, and that's when mistakes like these happen.

I missed this line.. how is this conversation too long already

---

### Claude · 2026-10-14 19:24

It isn't full. I can't see exactly how full it is, but it's heavy.

Its size counts everything I've read, not only our messages. Today I've read the earlier conversation's log for today, the Almi transcript, the web research on TDDs and many of your docs. That's far more text than what you see on screen.

So it's not a must, and we can continue here. I'd still do the TDD in a new conversation, because it's the biggest task so far. A fresh start keeps your rules and your docs at the front.

If you start a new one, I'll first write a short note for you to paste in, so it knows the plan and today's corrections.

---

### Dani · 2026-10-14 19:25

yeah please compose the prompt i should be giving you to make sure the new tdd is recreated and correctly

---

### Claude · 2026-10-14 19:27

Written for: a new Claude Code session that will rebuild the M1 TDD, with you as the one sending it.

```
Task: rebuild the M1 technical design document (TDD), DOCS/tessera-tdd-m1-14-10-26.adoc, from scratch.

Before anything else
- Read CLAUDE.local.md and CLAUDE.md, and follow every rule in them.
- Read every file in DOCS/ except the DOCS/m1/ folder.
- Read the old TDD from git for its outline: git show HEAD:DOCS/tessera-tdd-22-9-26.adoc

What went wrong last time (14 October 2026)
A Claude session wrote the current M1 TDD and the six files in DOCS/m1/. I didn't write them. They retell my docs in Claude's words and add things I never wrote or decided. Don't use them as a source for anything.

The same session also added its own ideas to some shared files. I'm correcting those myself. Ask me before relying on these lines:
- DOCS/28 and DOCS/33: the tracking test happening "after M1". That timing was never decided.
- DOCS/28: "before building them into the game". It used to say "into M2".
- DOCS/31: "At the end of each milestone". It used to say "At M2 exit".
- DOCS/43: the open question about game rules. My words were "are there game rules that shouldn't assume it's absent?" The examples after it aren't mine.
- business/08 and business/13: "after M1" for the tracking test.

Rules for this task
1. My docs go in word for word, through include::. Never retell, summarize or reword them.
2. Where a doc covers both M1 and M2, include only the M1 part with tag markers, the way DOCS/33 does. Adding markers changes my file, so ask first.
3. Never add anything that isn't in my docs or my messages: no examples, conclusions, decisions, details or open questions of your own.
4. If M1 needs something my docs don't have, don't fill it in. List it as a question and ask me.
5. If two docs disagree, or a doc looks outdated, ask me which is right.
6. The TDD says what each feature does. How it's built is Jousef's call (DOCS/26). Don't write technical choices unless I've made them.
7. Show me the exact text and wait for my yes before every file change, including creating, renaming or deleting files.
8. Keep replies short and plain. I'm not a programmer.

What I've decided, in my words
- "Don't include things for M2."
- Real-world layer: "none of the real world layer development is included" in M1, but "the app must be made to be able to add it later without issue".
- No money in the TDD: "just say time or workload".
- Movement: "there is a virtual joystick so the user swipes the intended direction and holds."
- Jousef wants information per feature: input → expected behaviour/output → what needs to be saved (DOCS/26 and DOCS/27). Use his word "feature", not "system".
- If the TDD lists M1 features, the heading is "Examples of M1 features". Which features M1 contains is not decided yet.
- Names changed on 14 October: "apparatus" replaces "refinery", and "Gatherer's Kit" replaces "Botanist's Kit". File names stay as they are.

Steps
1. Propose an outline for M1 only, based on the old TDD's outline. For each section, name the doc, or the M1 part of a doc, that you would include. List every gap as a question for me. Don't change any files in this step.
2. Wait for my answers and my yes.
3. Make the changes one at a time, showing me the exact text first.
4. At the end, confirm that every sentence in the TDD comes from my docs or from text I approved.
5. Ask me what to do with the old DOCS/m1/ files and their include lines in DOCS/00-current-master.adoc. Don't delete anything without my yes.
```

Paste it as the first message of a new conversation. Before you do, switch Claude Code to the mode that asks before every edit.

---

### Dani · 2026-10-14 19:28

alright. thanks

---

### Claude · 2026-10-14 19:28

You're welcome. Good luck with the rebuild.

---

Written on 4 November 2026 from the backed-up log of session 121d3fe9-f25c-4db8-a132-c61827245c56 (Tessera-repositories-tessera); this conversation had no text before.
