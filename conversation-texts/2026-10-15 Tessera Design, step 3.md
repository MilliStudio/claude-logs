# Tessera Design, step 3 (2026-10-15 to 2026-10-16)

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Private: never commit or share.

---

### Dani · 2026-10-15 22:56

Start step 3 of the Tessera Design plan: copying today's docs into the app.

Read first: CLAUDE.local.md (as always), then C:\Users\someo\Dropbox\Studio\tessera-design\CLAUDE.md and PLAN.md in that folder. Steps 1 and 2 are built (v0.2.0).

How I want it done:
- One doc at a time. Copy the text exactly as it is: no paraphrasing, no filling gaps (ask me instead), no omissions.
- Before the app takes over a file, show me that the document it prints matches today's file exactly. If it doesn't, show me the differences and wait.
- Facts written in more than one doc (the table in PLAN.md, section 5) are merged into one block only with my approval, one merge at a time. Show me the exact texts first.
- Tell me when I need to start the app.
- Start by proposing the order of the docs, and how you'll handle the TDD, the features list and the master's "All features" section, which include only parts of other files. Wait for my yes before copying anything.

---

### Claude · 2026-10-15 22:56

I'll read the Tessera Design handover and plan first.

Now the repository's docs: the file list, the master, and where tag-filtered includes are used.

Now the topic files that carry tags, to see how the TDD and features list cut into them.

Let me check how the app prints documents (level offsets, headers) and what the step-2 trial covered, so the proposal fits the app as built.

Here's my proposal. I haven't copied anything or changed any files.

**When to start the app:** not yet. I'll check each document on a test copy of the repository first. Once you've approved the first document's check, I'll ask you to start the app. Then keep it open while we copy.

## How each document goes in

1. I cut the file into blocks at its headings, without changing the text, and have the app print it on the test copy.
2. I show you the list of blocks and the result. Either it's identical to today's file, byte for byte, or I show you the exact differences and wait.
3. When you say yes, I put it into your app. If the print is identical, the app takes over the file by itself. From then on, you edit that document only in the app.

The test run during step 2 already showed that the ordinary topic files print identically.

## Order

- **A. The 41 ordinary topic files, in number order:** 01–05, 07, 12–21, 24–33c, 34–42, 44–46. Each should be identical, so my report on each will be two lines.
- **B. One group, in this order:**
  - the 8 files that the TDD takes parts of: 06, 08, 09, 10, 11, 22, 23 and 43;
  - then the features list, the TDD, the master and the GDD.

  Doing them together means the repository's TDD never ends up half-converted.
- **C. Business:** files 01–12, then the business plan master, then 13-team-decision-checklist.

## The TDD, the features list and the master's "All features" section

- Each will list its blocks directly, instead of picking parts of other files.
- All three will share one list, "All features": the 14 features in today's order. The features list moves their headings up one level, as it does today. A feature added to the shared list appears in all three.
- These documents also contain lines of their own, such as "*Draft — 14 October 2026*", "== Scope" and "This list may still be incomplete." A document in the app holds no text itself, so each of those lines becomes a small block.
- The repository files for these three will contain the full text where they now have include lines, so the files will differ from today's. Before the app writes them, I'll show you:
  - the text differences;
  - a check that each document looks the same as today, word for word. I'll make both versions with Asciidoctor (the standard AsciiDoc tool) and compare them.

## Questions

**Q1. Order:** Is the order above OK?

**Q2. The marker lines in group B:** On 15 October I added 24 marker lines, such as `// tag::m1[]`, to the 8 files in group B so the TDD could pick parts of them. They don't show in documents or PDFs, and in the app they'd have no job left. I recommend removing them. If they stay, they'll appear inside your blocks on the edit screen as lines of code. Removing them means those 8 files will differ from today's only by the marker lines, plus an empty line wherever removing a marker would leave two empty lines in a row. You'll see each difference before the app writes the file. Should I remove them?

**Q3. Block settings (status, milestones, Private):** Every block needs a status (decided, working idea or open), milestones and a Private setting. The text doesn't tell me these, and guessing would mean filling gaps. I recommend copying with placeholders: status "working idea", no milestones, Private off. Then we set the real values together in one go after copying. Business blocks would be the exception and start as Private, because they hold your personal data. None of these settings changes the text of any document. Is that OK?

**Q4. Files to leave out of the app:**
- **DOCS/README.md:** a Markdown index from 20 September. 52 of its links point to .md files that no longer exist, and the app's preview only reads AsciiDoc. The table in PLAN.md lists it as one of the places that repeats Flow Points. Whether to update or delete it is a separate decision.
- **business/almi-submission-form.adoc:** the record of what you sent to Almi on 8 October. It should never change.
- **The 9 October legal report (.md and .pdf):** advice from outside, kept as it arrived.

Should I leave these three out?

**Q5. Merges and names come after all documents are in:** Merges would go one at a time from the table in PLAN.md, and I'd show you the exact texts first. Waiting means every copy is checked against today's file before anything changes, and each merge shows up as a separate change in the history. Names like "Tessera: Sleeping Atlas" would also wait, because each one adds a line to the files. Is that OK?

There are about 67 documents in total, so that's 67 rounds. If you'd rather approve the identical ones in small groups, say so.

---

### Dani · 2026-10-15 23:16

1. let's try. would it be possible to change any table structures later?
2. of course remove them. the document should contain fields put together anyway
3. make it devided, working idea, or open question (not just open)
4. ok
5. what exactly will you be merging? do you mean creating blocks from a critrea?

---

### Claude · 2026-10-15 23:16

Your answers settle most of it. I'll look at how the app labels statuses and how its API creates blocks and documents, then answer and run the first check.

Before answering, I'll run the first check (file 01) on a test copy so you can see what a report looks like. That needs a small copy-in script in the app's `scripts` folder, which is part of step 3.

No file has a BOM, and all use plain line endings except the business checklist. Now I'll write the copy-in script.

All 41 ordinary topic files print back byte for byte. Next, a full rehearsal of file 01 through a test copy of the app on port 4881, using a copy of the repository.

Here are your answers in turn, then the result for the first document.

**1. Can the structure change later?** Yes, in two ways:
- **The app's fields and kinds of records:** I add them through an upgrade that runs when the app starts. Everything already in the app stays, including its history. Step 4 adds records with fields this way.
- **How text is cut into blocks:** you can split a block or join two at any time. Each change is saved as a new version, and the old versions stay in the history.

**2. The marker lines:** I'll remove them. I agree on fields: in step 4, each feature becomes a record with its three fields (input, expected behaviour/output, what needs to be saved), and the documents put those records together. In step 3 I copy the features in as blocks, exactly as they're written today.

**4.** I'll leave out the three files.

**5. What a merge is.** Some facts are written in more than one place. For example, these two sentences appear word for word twice in DOCS/09: once in the section's opening text and again in "Feature: Gather a resource":

> A harvestable has at most 4 looks. The number of hits needed to move it from one look to the next depends on both levels: sometimes 3 hits, sometimes 1.

A merge keeps a passage like this once, as one block, and both places use that block. When you edit it, both places change. Where the wordings differ, you choose which one to keep, or approve a combined version. That means a merge changes what some documents say, which is why each one needs your yes. The candidates are the 10 rows of the table in PLAN.md, such as the real-world layer being kept out of M1, Flow Points, and the Guardian.

Merges don't pick blocks by a rule. Picking blocks by a rule, such as "all M1 features", is a separate feature: the filters that come in step 4.

## First document: DOCS/01-which-documents-matter-now.adoc

It becomes 8 blocks: 1. Which documents matter now · Design · Technical (M2) · Broad project/context · Research · M2 task inventory · Meeting minutes / Business Model Canvas · Notable updates already folded in.

**The app prints it back identical to today's file, byte for byte.** I ran the whole process on a test copy of the app with a copy of the repository, and the app took over the file without changing it. The other 40 ordinary topic files also print back identical.

To do this, I added a small copy-in script to the app: `scripts/copy-in.mjs`.

## Questions

**Q1. Status label:** I read your answer 3 as asking for the third status to say "open question" instead of "open". The change would be:
- the app's screens show "Open question": `public/app.js` line 90, plus one message in `src/store.js`;
- README.md and PLAN.md say "open question" too.

The value stored behind the label doesn't change, so nothing else is affected. Should I make the change?

**Q2. Status while copying:** The text doesn't tell me each block's status. Which do you want?
- **a) (Recommended)** Every block gets "working idea" as a placeholder, and we set the real statuses together after copying. Until then, filtering by status won't mean anything.
- **b)** I propose a status for each block as we copy, and you approve it along with the document.

Either way, milestones stay empty for now, and blocks from the business files start as Private, because they hold your personal data.

**Q3. Put file 01 into your app?** If yes, answer Q1 and Q2, start the app (double-click `Start Tessera Design.bat` in `Dropbox\Studio\tessera-design`), and tell me when it's running. If you approve Q1, the new label appears when you reload the page in the browser. You don't need to restart the app.

---

### Dani · 2026-10-15 23:26

1. yep
2. can't the field be empty or is it obligatory? if it can't be empty then a
3. i need to know the importance of file 1

---

### Claude · 2026-10-15 23:27

Let me read file 01 and its history so I can tell you what it's for.

Your answer to Q1 was yes, so I'll make the label change now. First I'll check where the old wording appears.

I've made the Q1 change: the screens, the one error message, README.md and PLAN.md now say "Open question" instead of "Open". All 75 of the app's tests pass.

## What file 01 is

**It's background, not design. It doesn't decide anything about the game.** It says three things:
- **What DOCS/ is:** a written record of decisions made in conversation, with no authority of its own.
- **Where each group of docs came from:** the older Word and Markdown files from 17–18 September that they were copied from on 20 September.
- **Two warnings:**
  - the 14 September Master Inventory isn't the current feature list;
  - later design docs override the meeting minutes.

It appears only in the master document, as section 1. It isn't in the GDD, the TDD or the features list.

**It was last changed on 24 September, and parts of it are now out of date:**
1. It names `tessera-tdd-22-9-26.adoc` as the technical document. On 15 October that file was replaced by the M1 TDD, `tessera-tdd-m1-14-10-26.adoc`.
2. Its lists leave out the docs added since then: 33a–c, 46 and the features list.
3. Its "Notable updates" list stops at 24 September.
4. After step 3, the app holds the original text instead of the DOCS folder, so its first paragraph will no longer be accurate.

In my view it matters little. Its one lasting use is recording where the docs came from and when, and git's history keeps that record too.

## Questions

**Q1. Can the status be left empty?** Not in the app as it stands. Right now it only accepts decided, working idea or open question. I can change that:
- blocks would start with no status;
- the edit screen would get a "No status yet" choice;
- search would get a "No status yet" filter.

This needs an upgrade to how the app stores blocks, which I'd test on copies first. Your app has no data in it yet, so now is the easiest time to do it. I recommend it. Should I make the status optional?

**Q2. File 01:** I recommend copying it in exactly as it is, so the copy stays exact. After that, you'd decide separately whether to update it, cut it down to the two warnings, or remove it from the master. Is that OK?

**Don't start the app yet.** The upgrade in Q1 runs when the app starts, so I'll tell you when to start it.

---

### Dani · 2026-10-15 23:32

1. don't make it optional, instead you can give it a default value, which is working idea. the user doesn't need to pick manually
2. ok

---

### Claude · 2026-10-15 23:32

That's how the app already works: a new block gets "working idea" automatically, and nobody has to pick one. So there's nothing to change, and every block I copy in will start as "working idea".

**Please start the app now:**
1. Double-click **Start Tessera Design.bat** in `Dropbox\Studio\tessera-design`.
2. A black window opens, and the app opens in your browser. It will be empty, because nothing has been copied in yet.
3. Keep the black window open while we work.

Tell me when it's running, and I'll copy file 01 in. Its text matches today's file exactly, so the app will take the file over without changing it. I'll check that it did and tell you.

---

### Dani · 2026-10-15 23:33

ok it's open

---

### Claude · 2026-10-15 23:34

The app is running and empty, and file 01 hasn't changed since the rehearsal. Copying it in now.

File 01 is in. Next I'll rehearse file 02 on the test copy.

**File 01 is in your app.** It's 8 blocks, each with status "working idea", no milestones and Private off. The app took over the file without touching it: the file's contents and date are the same as before, and git shows no changes. From now on, edit file 01 in the app only.

## Next: DOCS/02-what-tessera-is.adoc

- **What it is:** the game's definition: what Tessera is, why people play it, art as a core pillar, "game first", and the experience goal. It's a core design doc, used in the master and the GDD. Last changed 15 October.
- **Blocks:** 1, "2. What Tessera is now". The file has no subheadings, so the whole file is one block.
- **Check:** the app prints it back identical to today's file, byte for byte. In the rehearsal on the test copy, the app took over the file without changing it.
- **For the merges later:** this file holds two of the repeated facts in the PLAN.md table: "art as a core pillar" and the real-world layer.

Should I copy file 02 into your app?

---

### Dani · 2026-10-15 23:35

ok

---

### Claude · 2026-10-15 23:35

**File 02 is in your app.** The app took it over without changing it.

## Next: DOCS/03-world-and-narrative.adoc

- **What it is:** the world and its story:
  - the Tesserae and the Void, which stays in the background;
  - what restoration brings back;
  - the story told through the environment instead of cutscenes;
  - nature and old machinery in one world.

  It's used in the master and the GDD. Last changed 8 October.
- **Blocks:** 1, "3. World and narrative". The file has no subheadings.
- **Check:** identical to today's file, byte for byte, and the rehearsal took it over without changing it.
- **For later:** in 02 it's "Void" with a capital V, but here it's "void" in lower case. Once everything is copied in, we could make these match by turning "Void" into a name. I won't change anything now.

Should I copy file 03 into your app?

---

### Dani · 2026-10-15 23:37

it's not the Void, it's a void

---

### Claude · 2026-10-15 23:37

You're right. File 03 already says "void" in lower case, so it's correct as it is. I'll drop my idea of making it a name.

"Void" has a capital V in four places. Here's what I propose for each:

1. **DOCS/02** (already in the app): "affected by an unexplained Void." → "affected by an unexplained void." I'd make the change through the app, so it shows up in the history as an edit. The app would then rewrite the file, which is also the first real test of the app writing a file.
2. **business/02-business-idea-and-usp.adoc**: "by an unexplained Void." → "by an unexplained void." I'd change it after that file is copied in, so the copy still matches today's file first.
3. **DOCS/README.md**, which stays outside the app: "Tesserae, the Void, how restoration…" → "Tesserae, the void, how restoration…". I'd change the file directly.
4. **My handover note (CLAUDE.local.md)**: "drained by an unexplained Void" → "drained by an unexplained void".

**Q1.** Should I make these four changes?

**Q2.** Should I copy file 03 into your app? It's identical to today's file, byte for byte.

---

### Dani · 2026-10-15 23:39

a void with small v everywhere please. i keep trying to make it "a void" but for some reason, everytime an ai documents it, it's change into the Void.. every time. it's a void
1. yes
2.  yes

---

### Claude · 2026-10-15 23:40

I'll make the changes now. First, file 02 through the app.

The app rewrote file 02, and only that one word changed. Now the README and my handover note.

Now copying file 03 in, and checking other text files in your Studio folder for "Void".

File 03 is in. The search across the Studio folder is still running, so I'll rehearse file 04 meanwhile.

The whole Studio folder is large (photo library, portfolio). I'll search just the Tessera-related folders instead.

I made the changes, and file 03 is in your app.

- **File 02:** changed through the app. The app then rewrote the file, and only that one word changed. That was the first real test of the app writing a file, and it worked.
- **DOCS/README.md** and **my handover note:** "void" is now lower case in both.
- **I also found one I'd caused myself:** sample text in one of the app's tests said "the Void". I changed it, and all 75 tests still pass.
- **I searched every text file in your Studio folder.** The only "Void" left is in business/02, which I'll fix as soon as that file is copied in. Old PDFs stay as they are.

## Questions

**Q1. "the void" in lower case:** two files mention it a second time with "the":
- file 03: "*The void matters, but it stays in the background.*"
- file 18: "the void, its affliction and what restoration brings back…"

That's normal English for a second mention, so I'd leave both. Should I?

**Q2. A memory note, so future sessions get it right.** I'd save this as a new note in my memory:

> Write "a void", with a small v, in everything about Tessera. Never capitalize it or treat it as a name ("the Void").
> **Why:** Dani has corrected this many times. AI-written docs keep turning it into "the Void" (corrected again on 2026-10-15).
> **How to apply:** use lower case in docs, notes, code comments and test text.

Should I save it?

## Next: DOCS/04-core-gameplay-loop.adoc

- **What it is:** the core loop: explore, discover, gather or solve, process, restore, the world transforms, explore farther. It also covers the rhythm between easy wandering and small thinking moments, and the two extremes to avoid. It's used in the master, the GDD and the TDD. Last changed 24 September.
- **Blocks:** 2. "4. Core gameplay loop" holds only the heading line, and "CURRENT WORKING LOOP" holds the rest.
- **Check:** identical to today's file, byte for byte, and the rehearsal took it over without changing it.

**Q3.** Should I copy file 04 into your app?

---

### Dani · 2026-10-15 23:46

1. the context is different in file 3. it's about grammar. you can't say a void matters but it stays in the background. 
it's like, my son was followed by a dog. my son made it to school but the dog didn't
3. ok

---

### Claude · 2026-10-15 23:46

Understood: "a void" the first time, "the void" after that, always with a small v. Files 03 and 18 stay as they are. Copying file 04 in now.

**File 04 is in your app.**

## Next: DOCS/05-representative-opening.adoc

- **What it is:** the working opening, spread over about 5–10 Tesserae. It lists what's in it (porous rocks, the dormant apparatus, a sapling, the dormant lantern plant, the Gatherer's Kit) and the 13-step flow from finding the kit to the lantern becoming a portal. It's used in the master and the GDD. Last changed 15 October.
- **Blocks:** 4: "5. Current representative opening" (the heading only), "WORKING — NOT LOCKED TUTORIAL", "Current ingredients" and "Current flow".
- **Check:** identical to today's file, byte for byte, and the rehearsal took it over without changing it.
- **For later, not changed now:** "Gatherer’s Kit" is written with a curly apostrophe on line 13 and a straight one on line 18. A search for one form won't find the other. Making them match is a small fix after copying.
- **For the merges later:** this file is one of the places the PLAN.md table lists for "Lantern and portal".

## Questions

**Q1.** Should I copy file 05 into your app?

**Q2. Memory note (still open):** I've added your rule about "the" to it. Should I save it?

> Write "a void", with a small v, in everything about Tessera. Never capitalize it or treat it as a name ("the Void"). "The void" with a small v is correct when it refers back to a void already mentioned, as in DOCS/03.
> **Why:** Dani has corrected this many times. AI-written docs keep turning it into "the Void" (corrected again on 2026-10-15).
> **How to apply:** use lower case in docs, notes, code comments and test text.

---

### Dani · 2026-10-15 23:48

yes to both

---

### Claude · 2026-10-15 23:49

**I saved the memory note, and file 05 is in your app.** Files 01–05 are done, except 06, which comes later with the other files the TDD takes parts of.

## Next: DOCS/07-persistent-world-state-system.adoc

- **What it is:** the rule that separates *persistent state* from *temporary transition*. Persistent state is what must still be true after the game is reopened, such as apparatus: Dormant / Restored or lantern: Dormant / Portal. Temporary transition is the animation that shows the change. The goal is one reusable state system. It's used in the master and the TDD. Last changed 15 October.
- **Blocks:** 2: "7. Persistent world-state system" (the heading only) and "CURRENT TECHNICAL/DESIGN PRINCIPLE".
- **Check:** identical to today's file, byte for byte, and the rehearsal took it over without changing it.
- **For the merges later:** this file is one of the places the PLAN.md table lists for "Guardian" and for "Lantern and portal".

Should I copy file 07 into your app?

---

### Dani · 2026-10-15 23:49

i think just save them all but ask questions if you run into something.

---

### Claude · 2026-10-15 23:50

Understood. I'll copy in every file that matches today's file exactly and stop for anything that doesn't. Files 06, 08, 09, 10, 11, 22, 23 and 43 won't match, because the marker lines come out, and I promised you'd see those differences first. The same goes for the TDD, the features list and the master. So I'll prepare those and show you the differences together.

First I'll extend the script to handle documents built from other documents, such as the business plan master.

I'll rewrite the script so it can also handle the files with marker lines and the documents built from other documents.

Now the batch: each remaining ordinary topic file goes through the test copy first, and only into your app if it matches exactly. The batch stops at the first problem.

The safety check works: the test copy already had 07, so it refused to add it twice. File 07 passed its rehearsal earlier, so it can go straight in, then the rest.

All 41 ordinary topic files are now in your app, and none of them changed. Next, the business files.

All business files are in and marked Private. Now the approved fix in business/02.

The test copy already had all 55 documents from the batch rehearsals. Now group B on the test copy.

I'm checking the last section of file 43, then I'll report.

Here's where things stand.

## Done since your "save them all"

- **All 41 ordinary topic files and 14 business files are in your app.** The business files are 01–12, the team checklist and the business plan master. Every one printed back identical to today's file, byte for byte, and no file changed. The business blocks are Private.
- **business/02:** I changed "Void" to "void" through the app.
- **In total:** 55 documents and 248 blocks. No files need your attention.

## Group B: rehearsed on the test copy, waiting for your yes

1. **The 8 files with marker lines (06, 08, 09, 10, 11, 22, 23, 43):** the only differences from today's files are the 24 marker lines and 3 empty lines in 09, 10 and 11. Each of those empty lines would otherwise have left two empty lines in a row. None of your text changes.
2. **TDD, features list and master:** each include line that picked out part of a file is replaced by the text it pulled in. The TDD file grows from 49 to 231 lines, the features list from 17 to 97, and the master from 123 to 203. Include lines for whole files stay as they are.
3. **Whether they look the same:** I ran all 12 documents through Asciidoctor, once from today's files and once from the app's versions. The results are identical, character for character. The 12 are the 8 files above, the TDD, the features list, the master and the GDD.
4. **GDD:** identical to today's file, so the app takes it over by itself.

What's new in the app with this group:
- **"All features (shared list)":** the 14 features in today's order. The TDD, the features list and the master all use it. The features list moves its headings up one level, as it does today.
- **Small blocks for the lines the documents held themselves:**
  - TDD: the draft line, Scope, M1 features, and Open decisions — not yet locked;
  - features list: the draft line;
  - master: the opening lines and the All features heading;
  - GDD: the cover lines, Elevator pitch and Closing statement.
- **Labels for blocks without a heading:** the document's name plus the block's first words, for example "6. Restoration: The environment itself is part of the…". The labels only show in the app.

## Questions

**Q1. Group B:** Should I put these 12 documents into your app and have it write the 11 changed files?

**Q2. Private setting for team positions:**
- **38 Team status** describes where Mattias and Jousef stand. For example, it says Jousef prefers paid work to a share of future revenue.
- **41 Legal / ownership** lists your principles for IP and contracts.

Both appear only in the master. If you send the master as a PDF to Mattias or Jousef, both go with it unless they're marked Private. I recommend marking both Private. This doesn't change any file, only what goes into PDFs. The "Team/legal" part of 43 is a plain list of open questions, so I'd leave it shared. Should I mark 38 and 41 Private?

**Q3. For later:** the opening lines of two documents are now out of date.
- **The master** says "*Current through 20 September 2026*" and "Edit the relevant topic file; do not duplicate its content in assembled documents."
- **The business plan** says "Edit the relevant topic file below to update it; this file only assembles them."

Once the app takes over, you edit in the app, not in the files. I'll propose new wording for these after group B, unless you'd rather leave them.

---

### Dani · 2026-10-16 00:59

1 ok
2. private

---

### Claude · 2026-10-16 01:02

API Error: Can't reach the API server — check your internet or DNS (ENOTFOUND)

---

### Dani · 2026-10-16 14:31

can you resume

---

### Claude · 2026-10-16 14:31

Resuming. First I'll check that your app is still running and that none of the group B files changed since the rehearsal.

Both are running, and the group B files are unchanged. Copying group B into your app now. The app will leave the 11 changed files alone until I tell it to write them.

All 12 are in. The GDD was taken over unchanged, and the other 11 files are waiting. Before your app writes them, I'll check that it would write exactly what the test copy wrote and checked.

Your app would write exactly what was checked on the test copy. Writing the 11 files now.

Everything matches. In the 8 topic files, the only lines removed are the 24 markers and 3 empty lines, and nothing was added. Now I'll mark 38 and 41 Private.

I'll stop the test server, since everything is now in your app, and get the final counts.

The copying is finished. Every document is now in your app.

- **Group B is in.** Your app wrote the 11 changed files, and it took over the GDD unchanged.
- **Final check:** I compared the new files with the last versions saved in git, using Asciidoctor. All 12 documents look exactly the same. The 8 topic files lost only the 24 marker lines and 3 empty lines. Nothing was added.
- **38 and 41 are Private.** That's 6 blocks. PDFs of the master now leave them out unless you untick the box.
- **In total:** 67 documents and 302 blocks, 84 of them Private. All 67 files match the app.

**From now on, edit the docs in the app, not in the .adoc files.** If someone edits a file anyway, the app notices and asks you what to do.

**Still to do in step 3:**
- the merges, one at a time;
- new wording for the out-of-date opening lines of the master and the business plan (Q3 last time);
- the apostrophe in "Gatherer's Kit";
- deciding what to do with DOCS/README.md.

## Questions

**Q1. Update the handover notes and the app's guide.** I'd change three files:

*CLAUDE.local.md*, section 4, in the Tessera Design entry: replace "Next: step 3, copying today's docs in." with:
> **Step 3 copying done on 2026-10-16:** all 67 docs in DOCS/ and business/ are in the app, and the app now writes those files. Left out on purpose: DOCS/README.md, business/almi-submission-form.adoc and the 9 October legal report. Next: the merges in PLAN.md section 5, one at a time with Dani's approval.

*CLAUDE.local.md*, section 7, first item: replace "The TDD, tessera-features-14-10-26.adoc and the master's "All features" section pull Dani's docs through markers." with:
> Since 2026-10-16 the app builds the TDD, the features list and the master's "All features" section from blocks. The 14 features are one shared list, "All features (shared list)". The tag markers are gone.

*tessera-design README.md*: replace the "Next, step 3" paragraph with:
> **Step 3: copying today's docs in** (16 October 2026). All docs in DOCS/ and business/ are in the app, except DOCS/README.md, the Almi form and the 9 October legal report. **The app now holds the original text. Edit the docs in the app, not in the .adoc files.** If an .adoc file is edited anyway, the safety net catches it. Still to do: merging facts that are written in more than one place, one at a time.

The app's technical handover, tessera-design's CLAUDE.md, would get the same facts in its status section. It would also record that new blocks are "working idea" by default, that "open" shows as "Open question", and how to use the copy-in script.

**Q2. Commit and push?** Two places have unsaved changes:
- **The Tessera repository:** 14 files.
- **The tessera-design app:** the copy-in script and the "Open question" label.

Until they're pushed to GitHub, git doesn't back them up. Should I commit both and push?

---

### Dani · 2026-10-16 15:13

go and go

---

### Claude · 2026-10-16 15:14

Updating the three notes first.

Now the commits. I'll write the messages to files first.

Both commits are made, and the app's 75 tests still pass. I left out the shortcut you made in the app folder, since it's yours. Pushing now.

Both are committed and pushed to GitHub, and the handover notes and the app's guide are updated.

- **Tessera repository:** the 14 changed files are pushed to GitHub as "Copy the docs into Tessera Design".
- **tessera-design:** the copy-in script, the "Open question" label and the updated notes are pushed as "Step 3: copy today's docs into the app".
- **Your app:** all 67 files still match it.

Next, in the order I'd suggest:
1. **New wording for the out-of-date opening lines** of the master and the business plan. These are small, and the master's opening still tells people to edit the topic files directly.
2. **The merges** from the table in PLAN.md, one at a time, with the exact texts shown first.
3. **The small leftovers:** the two apostrophes in "Gatherer's Kit", and what to do with DOCS/README.md.

Should I start with the opening lines?

---

### Dani · 2026-10-16 15:16

you'll be asking for me to approve yes?

---

### Claude · 2026-10-16 15:16

Yes. Your "save them all" covered only exact copies. For every wording change, merge or fix, I'll show you the current text and my proposed text, and wait for your yes. Here are the first ones.

**Q1. Master document, first line**
- Now: "*Current through 20 September 2026*"
- The docs have changed many times since 20 September, and the app now records the date of every change. A typed date like this goes out of date with each edit.
- I recommend removing the line. The other option is to change it to "*Current through 16 October 2026*", but then it needs updating by hand after every change.

Remove it, or update the date?

**Q2. Master document, last opening line**
- Now: "Edit the relevant topic file; do not duplicate its content in assembled documents."
- Proposed: "Edit the text in Tessera Design. Each piece of text is stored there once, and every document is built from it."

Is that OK?

**Q3. Business plan, second opening paragraph**
- Now: "This document gathers every business-planning topic in one place. Edit the relevant topic file below to update it; this file only assembles them."
- Proposed: "This document gathers every business-planning topic in one place. Edit the text in Tessera Design; this document only puts the topics together."

Is that OK?

The business plan's first line also still says Tessera is "developed by Dani Milli Studio, an enskild firma". You chose to update the ownership later, so I've left it as it is.

---

### Dani · 2026-10-16 15:19

q1 your recommendation
2. yes
3. yes
yes change it to Dani Almilli Syren

---

### Claude · 2026-10-16 15:19

I'll make the three approved changes through the app now.

---

### Dani · 2026-10-16 15:19

(sent while Claude was working) sorry Dania Almilli Syren

---

### Claude · 2026-10-16 15:19

The three approved changes are done. The app rewrote both files, and only those lines changed:
- **Master:** the "Current through 20 September 2026" line is gone, and the last opening line now says "Edit the text in Tessera Design. Each piece of text is stored there once, and every document is built from it."
- **Business plan:** the second paragraph now ends "Edit the text in Tessera Design; this document only puts the topics together."
- **In the app only:** I changed the label of the master's opening block to its new first words, because the old label quoted the removed date line.

## Your name in the business plan

**Q1. Spelling:** my notes have "Syrén", with an é. You wrote "Syren" both times. Which is right for the business plan?

**Q2. First line.** With the é, it would read:
- Now: "Business plan for Tessera, a mobile game developed by Dani Milli Studio, an enskild firma registered in Sweden."
- Proposed: "Business plan for Tessera, a mobile game developed by Dania Almilli Syrén."

The words "an enskild firma registered in Sweden" describe the firm, so they would go too. Is that OK?

**Q3. Title:** the business plan's title also names the firm: "DANI MILLI STUDIO — TESSERA BUSINESS PLAN". I recommend shortening it to "TESSERA BUSINESS PLAN", so it won't need changing again when Milli Studio AB is formed. Should I?

The rest of the business plan still describes Dani Milli Studio, for example in "1. Company Overview". That stays as it is until you want to do the ownership update.

---

### Dani · 2026-10-16 15:26

1. it's Dania Almilli Syrén but it's sometimes, more often than not, still some won't accept, with just e instead of é becaue some businesses / governmental office apps can't handle é, specifically outside sweden. but for example, Klarna would absolutely not accept a simple e
2. in this case it should be the correct swedish character. you can state the english translation then add the swedish term between brackets. i just spelled it wronglyl because it saved time not to switch to swedish keyboard. it's better to have correct spelling in texts to be professional
3. my name is Dania Almilli Syrén but my studio was dani milli studio. sohuldn't it be better to note that my company dani milli studio got dissolved?

---

### Claude · 2026-10-16 15:27

Thanks. I'll write "Dania Almilli Syrén" with the é in texts, and Swedish terms in English first with the Swedish term in brackets.

**On noting the dissolution: yes, I agree.** Readers know the name Dani Milli Studio: Almi saw it on the form, and the GDD, the TDD and the artwork carry it. One sentence saying what happened to the firm avoids confusion. My notes say the dissolution was still waiting for confirmation from the authorities on 14 October, so the wording depends on whether that has arrived.

## Questions

**Q1. Has the confirmation of the dissolution arrived?**

**Q2. The business plan's first paragraph.**
- Now: "Business plan for Tessera, a mobile game developed by Dani Milli Studio, an enskild firma registered in Sweden."
- Proposed: "Business plan for Tessera, a mobile game developed by Dania Almilli Syrén. Her sole proprietorship (enskild firma), Dani Milli Studio, has been dissolved and had no part in Tessera."

If the confirmation hasn't arrived, "has been dissolved" becomes "is being dissolved". The words "had no part in Tessera" follow your decision of 10 October: the firm put in no money, purchases or hours. Is that OK?

**Q3. Title:** "DANI MILLI STUDIO — TESSERA BUSINESS PLAN" → "TESSERA BUSINESS PLAN". Is that OK?

**Q4. A conflict to fix later:** the GDD's cover lines say "Concept & Visual Design: © Dani Milli Studio". My notes say the TDD and your artwork carry the same mark. If the business plan says the firm had no part in Tessera, those marks contradict it. I recommend changing the GDD's mark to "© Dania Almilli Syrén" through the app. I'll check the TDD, but the artwork files are yours to change. Should I propose the exact change?

**Q5. A memory note**, so future sessions get your name and the Swedish terms right. I'd save:
> Dani's full name is Dania Almilli Syrén, with é. Always use the é in texts. Plain "Syren" is only for systems that can't take é, mostly outside Sweden. Write Swedish terms in English first, with the Swedish term in brackets, for example "sole proprietorship (enskild firma)".

Should I save it?

---

### Dani · 2026-10-16 15:34

q1. no
2. in the process of being dissolved 
3.Tessera: Sleeping Atlas Plan
4. not sure what to do .. perhaps also change to my name instead of studio. everything should be in my name not the studio, and the explanation lies in the business plan
5. add that if it clarifies things for you. otherwise it's not a big deal

---

### Claude · 2026-10-16 15:34

I'll make the two approved changes in the business plan, save the memory note, and search the app for every "Dani Milli Studio".

I've made the changes. In the business plan:
- the title now reads "Tessera: Sleeping Atlas Plan";
- the first paragraph now reads "Business plan for Tessera, a mobile game developed by Dania Almilli Syrén. Her sole proprietorship (enskild firma), Dani Milli Studio, is in the process of being dissolved and had no part in Tessera."

I also saved the memory note. It helps: it settles the é question for future sessions.

## Where "Dani Milli Studio" still appears

**A. The copyright mark:** the GDD's cover lines say "Concept & Visual Design: © Dani Milli Studio". The rebuilt TDD no longer carries the mark. The artwork files are yours to change.

**B. The business plan, which now contradicts its own first line in these places:**
- **1. Company Overview:**
  - the legal name and trading name are "Dani Milli Studio";
  - "Tessera is developed under Dani Milli Studio for now. Forming a wholly owned Tessera AB is recommended…". This is also out of date, because on 10 October you chose a studio company, Milli Studio AB;
  - the VAT section talks about Dani Milli Studio's turnover.
- **2. Business Idea and USP:**
  - "Dani Milli Studio develops and will publish Tessera…";
  - "The reason a customer picks Dani Milli Studio over an alternative."
- **13. Team checklist:** "Decide whether Tessera remains under Dani Milli Studio (enskild firma) for now."

**C. These stay as they are:** in 3. Founder Background, "Owner of Dani Milli Studio since 2016" and "Has run Dani Milli Studio as a sole trader since 2016…". That's your history, and it's still true.

## Questions

**Q1. Title:** I used it exactly as you wrote it: "Tessera: Sleeping Atlas Plan". Did you mean "Tessera: Sleeping Atlas Business Plan"?

**Q2. GDD copyright mark:** "Concept & Visual Design: © Dani Milli Studio" → "Concept & Visual Design: © Dania Almilli Syrén". Is that OK?

**Q3. The places in B:** should I propose exact new wording for each, one section at a time? This is the ownership update you put off before. Some points, such as VAT, need facts from you, so I'll ask where I don't know. I recommend doing it now, because the business plan currently contradicts itself.

---

### Dani · 2026-10-16 15:35

3.Tessera: Sleeping Atlas Plan
sorry, it dhould be Tessera: Sleeping Atlas Business Plan

---

### Claude · 2026-10-16 15:35

The business plan's title is now "Tessera: Sleeping Atlas Business Plan".

Two questions are still open:

**Q2. GDD copyright mark:** "Concept & Visual Design: © Dani Milli Studio" → "Concept & Visual Design: © Dania Almilli Syrén". Is that OK?

**Q3. The ownership update in the business plan:** sections 1 and 2 and the team checklist still say Dani Milli Studio runs Tessera, which contradicts the new first line. Should I propose exact new wording, one section at a time?

---

### Dani · 2026-10-16 15:36

no you misunderstood me. my name should be used instead of dani milli studio

---

### Claude · 2026-10-16 15:37

Understood: wherever Dani Milli Studio stands for the owner or developer, use your name instead, and the first line of the business plan explains why. I'll look at the exact sentences so I can show you each swap.

Sorry, I made it too complicated. Your name replaces Dani Milli Studio, and the business plan's first line explains why. Here's every place.

**Q1. Plain swaps. Can I change all three?**
- **GDD cover:** "Concept & Visual Design: © Dani Milli Studio" → "Concept & Visual Design: © Dania Almilli Syrén"
- **Business plan, 2. The idea:** "Dani Milli Studio develops and will publish Tessera, …" → "Dania Almilli Syrén develops and will publish Tessera, …"
- **Business plan, 2. Why buy from this studio:** "The reason a customer picks Dani Milli Studio over an alternative." → "The reason a customer picks Dania Almilli Syrén over an alternative."

**Q2. Business plan, 1. Planned structure.** Besides your name, this one still says "Tessera AB", but on 10 October you chose a studio company instead.
- Now: "Tessera is developed under Dani Milli Studio for now. Forming a wholly owned Tessera AB is recommended once contracts, ownership or financing justify it. …"
- Proposed: "Tessera is developed by Dania Almilli Syrén for now. Forming a studio company, Milli Studio AB (working name), is recommended once contracts, ownership or financing justify it. …"

The rest of the paragraph stays the same. Is that OK?

**Q3. Business plan, 1. Company Overview, the list at the top.** With only your name swapped in, some lines would be wrong, because they describe the firm.
- Now:
  ```
  Legal name:: Dani Milli Studio
  Trading name:: Dani Milli Studio
  Legal form:: Enskild firma (Swedish sole trader)
  Organisation number:: 780522-2804
  Owner:: Dania Almilli Syrén
  Start date:: 2016
  ```
- Proposed:
  ```
  Legal name:: Dania Almilli Syrén
  Legal form:: Private person (privatperson). Tessera is her personal property until the planned company is formed.
  Personal identity number (personnummer):: 780522-2804
  Owner:: Dania Almilli Syrén
  ```

"Trading name" and "Start date: 2016" belonged to the firm, so they would go. The lines "Tessera project started" and "Registered address" stay. Is that OK?

**Q4. Team checklist, the first item.** That decision was made on 10 October.
- Now: "- [ ] Decide whether Tessera remains under Dani Milli Studio (enskild firma) for now."
- Proposed: "- [x] Decide who holds Tessera for now. Decided on 10 October 2026: Dania Almilli Syrén personally, until the company is formed."

Is that OK?

**Q5. Two facts I don't know:** the VAT section and the registration checklist in section 1 describe the firm's VAT status and its F-skatt.
- Is your F-skatt still active?
- If you're not sure about either, I recommend changing both to an open question for an accountant (redovisningskonsult), as Almi suggested.

---

### Dani · 2026-10-16 15:42

1 2 yes
3. the project itself 2026, the ab is still not formed but would/could eventually own tessera
5. vat and fskatt are "none available" because the game is a personal property being designed. it doesn't operate under a business and doesn't generate any revenue

---

### Claude · 2026-10-16 15:43

I'll make the Q1 and Q2 changes now.

The Q1 and Q2 changes are done: the GDD cover, the two lines in section 2, and "Planned structure". Here are the remaining three, rewritten with what you told me.

**Q3. 1. Company Overview, the list at the top.** "Could own Tessera later" follows what you said: the company isn't formed, and owning Tessera is possible but not decided.
- Proposed:
  ```
  Legal name:: Dania Almilli Syrén
  Legal form:: Private person (privatperson). Tessera is her personal property. The planned company, Milli Studio AB (working name), isn't formed yet and could own Tessera later.
  Personal identity number (personnummer):: 780522-2804
  Owner:: Dania Almilli Syrén
  Tessera project started:: 2026
  Address:: Jursla Lindväg 5 A, 616 34 Åby
  ```
- "Trading name" and "Start date: 2016" belonged to the firm, so they go.
- "Registered address" becomes "Address", because the address was registered for the firm.

Is that OK?

**Q4. 1. Company Overview, the two sections about VAT and registration.** The wording follows yours.
- **VAT (moms) status.** Now: "Icke momspliktig (not VAT-registered). Dani Milli Studio's turnover is under 120,000 SEK a year, …" Proposed: "None available. Tessera is personal property being designed. It doesn't operate under a business and doesn't generate any revenue."
- **Registration checklist.** Now: the three lines for Bolagsverket, F-skatt and VAT (moms). Proposed: "None available. Tessera doesn't operate under a business."

Is that OK?

**Q5. Team checklist, the first item.** This replaces my earlier proposal, which said "until the company is formed".
- Now: "- [ ] Decide whether Tessera remains under Dani Milli Studio (enskild firma) for now."
- Proposed: "- [x] Decide who holds Tessera for now. Decided on 10 October 2026: Dania Almilli Syrén personally. The planned company could own it later."

Is that OK?

---

### Dani · 2026-10-16 15:44

yes

---

### Claude · 2026-10-16 15:45

All three are done, and every file still matches the app. The team checklist kept its Windows line endings.

"Dani Milli Studio" now appears in only two places, both on purpose:
- the business plan's first line, which explains the dissolution;
- 3. Founder Background, which is your history.

## Related: "Tessera AB" still appears in three places

On 10 October you chose a studio company instead of a Tessera AB. These lines still say Tessera AB.

**Q1. Business plan, 10. Startup Capital Budget:**
- "Tessera AB share capital: 25,000 SEK (becomes company capital, not a fee)." → "Milli Studio AB share capital: 25,000 SEK (becomes company capital, not a fee)."
- "Tessera AB registration: 2,400 SEK online." → "Milli Studio AB registration: 2,400 SEK online."

Is that OK?

**Q2. Team checklist:**
- "- [ ] Decide whether a separate Tessera AB is needed later." → "- [x] Decide whether a separate Tessera AB is needed later. Decided on 10 October 2026: no; a studio company, Milli Studio AB (working name), instead."
- "- [ ] Decide whether to assign or license the existing IP to a future Tessera AB, with legal and tax advice." → "- [ ] Decide whether to assign or license the existing IP to a future Milli Studio AB, with legal and tax advice."

Is that OK?

**Q3. Commit and push today's changes?** Six files have changed since the last push. I can push now, or after the Tessera AB fixes so they all go in one commit.

---

### Dani · 2026-10-16 15:54

1. not sure it works, but perhaps state that start capital from personal savings, and expected expences estimated around 400,000 sek in total, which includes 
"Milli Studio AB share capital: 25,000 SEK (becomes company capital, not a fee)."
"Milli Studio AB registration: 2,400 SEK online."

2. you can perhaps note this development, "Planned partnership between Milli Studio AB and Skyfox Interactive AB." and update with this development where relevant. (don't make a big deal about the name skyfox interactive ab not matching what is writted in thee files, it's not a big deal)

3. go

---

### Claude · 2026-10-16 15:55

Committing and pushing the six files first.

Pushed. Now I'll read the budget files and every place that mentions Skyfox, Mattias or a partnership, so the proposals fit what's already written.

Here are the exact proposals.

## Q1. 10. Startup Capital Budget, the text under the tables

- **Now:**
  > Tessera is financed with own capital. No loans are planned.
  >
  > Known one-off costs:
  > * Tessera AB share capital: 25,000 SEK (becomes company capital, not a fee).
  > * Tessera AB registration: 2,400 SEK online.
  > * Trademark registration: 2,700 SEK for the first class, plus 1,000 SEK for each extra class.
- **Proposed:**
  > Tessera is financed with own capital from personal savings. No loans are planned.
  >
  > Expected expenses are estimated at around 400,000 SEK in total. This includes these known one-off costs:
  > * Milli Studio AB share capital: 25,000 SEK (becomes company capital, not a fee).
  > * Milli Studio AB registration: 2,400 SEK online.
  > * Trademark registration: 2,700 SEK for the first class, plus 1,000 SEK for each extra class.
- I'd also put "about 400,000" in the table's "Total capital needed" row, so the table matches the text.

Three things to check before I change it:
- **Q1.a** Does the 400,000 also cover the trademark registration? It's in the same list, so I assumed it does.
- **Q1.b** What period does it cover: up to M1, up to M2, or everything? A reader will ask. If you don't know yet, I'll keep "in total".
- **Q1.c** The financing table lists your own capital as "Not disclosed". With 400,000 in total and no loans, a reader can work out roughly what you'll put in. Is that OK?

## Q2. The planned partnership

My notes from 14 October say the form of the partnership isn't settled: it could be a collaboration agreement, a jointly owned new AB, or Skyfox taking shares in Milli Studio AB. So in two places I'd add "Its form isn't decided yet."

1. **Business plan, 1. Planned structure:** add a new paragraph: "Planned partnership between Milli Studio AB and Skyfox Interactive AB. Its form isn't decided yet."
2. **Business plan, 3. Partners and co-owners:**
   - Now: "None. Mattias is a possible working partner and producer. Jousef is …"
   - Proposed: "None yet. Planned partnership between Milli Studio AB and Skyfox Interactive AB, Mattias's company. Jousef is …"

   The rest stays the same.
3. **Business plan, 7. SWOT, under Weaknesses:**
   - Now: "Partnership with Mattias isn't decided."
   - Proposed: "The terms of the planned partnership between Milli Studio AB and Skyfox Interactive AB aren't agreed."
4. **Business plan, 8. Timeline:**
   - "TBD | Clarify Mattias's role and contribution | Open" → "TBD | Agree the partnership between Milli Studio AB and Skyfox Interactive AB, and Mattias's role | Planned"
   - Also out of date: "TBD | Almi consultation | Planned" → "13 Oct 2026 | Almi consultation | Done"
5. **Team checklist, section 1:** add a new item: "- [ ] Clarify the planned partnership between Milli Studio AB and Skyfox Interactive AB: a collaboration agreement, a jointly owned new AB, or Skyfox Interactive AB taking shares in Milli Studio AB."
6. **DOCS/38 Team status, under Mattias / Skyfox:** after "Production/lead involvement has been discussed.", add: "Planned partnership between Milli Studio AB and Skyfox Interactive AB."
7. **DOCS/43, under Team/legal:** add "Form of the planned partnership between Milli Studio AB and Skyfox Interactive AB." Unlike 38, this section is shared. That's fine, because Mattias proposed the partnership himself.

Should I make all seven changes, including "Its form isn't decided yet"?

## Q3. The two "Tessera AB" items in the team checklist, from my last message

- "- [ ] Decide whether a separate Tessera AB is needed later." → "- [x] … Decided on 10 October 2026: no; a studio company, Milli Studio AB (working name), instead."
- "… license the existing IP to a future Tessera AB …" → "… to a future Milli Studio AB …"

Is that OK?

## Q4. My notes on the partnership

My handover note and my memory note both say the partnership is "a proposal only". I'd add this line to both:

> 2026-10-16: Dani calls it a planned partnership between Milli Studio AB and Skyfox Interactive AB, and the business docs now say so. Its form is still open.

Should I add it?

---

### Dani · 2026-10-16 16:03

between "the intended Milli Studio AB" and... etc. this is everywhere where applicable i think
yes to the rest

---

### Claude · 2026-10-16 16:03

Understood: I'll write "the intended Milli Studio AB" in every partnership mention. Making all the approved changes now.

All approved changes are in, and every file still matches the app. Now the two notes (Q4).

All of it is done.

- **Startup capital:** the text now names your personal savings, the estimate of around 400,000 SEK in total, and the Milli Studio AB costs. The table's total row says "About 400,000".
- **Partnership:** it's now noted in all seven places, each time as "the intended Milli Studio AB and Skyfox Interactive AB". The Almi consultation shows as done on 13 October.
- **Team checklist:** the Tessera AB item is ticked as decided, and the IP item now says Milli Studio AB.
- **My handover note and memory note** now say the partnership is planned and that its form is still open.

Every file still matches the app. Eight files have changed since the last push: business/01, 03, 07, 08, 10 and 13, and DOCS/38 and 43.

Should I commit and push them?

---

### Dani · 2026-10-16 16:05

go ahead

---

### Claude · 2026-10-16 16:05

The eight files are committed and pushed to GitHub as "Note the planned Skyfox partnership and the startup estimate". Nothing is left unsaved.

What's left in step 3:
1. **The merges** from the table in PLAN.md, one at a time, with the exact texts shown first.
2. **"Gatherer's Kit" in DOCS/05:** it uses a curly apostrophe in one place and a straight one in the other.
3. **DOCS/README.md:** an out-of-date index outside the app. Update it or delete it?

Should I start with the first merge?

---

### Dani · 2026-10-16 16:05

ye

---

### Claude · 2026-10-16 16:05

I'll pull up the passages from the PLAN.md table first, to find a good first merge: a fact written as whole paragraphs in more than one place.

Before the first merge, here's something I found while reading the table's passages. Most rows are the same fact said in different ways: a list item in one file, half a sentence in another, an open question in a third. The app can share only whole paragraphs. So for each row I'll show you the passages and recommend one of three things:
- share one paragraph;
- leave the passages as they are;
- or reword them so they agree.

I suggest starting with **"Art as a core pillar"**, because it has one clean repeat. Here are all the passages:

| File | Text |
|---|---|
| 02 | "Art is a core pillar of Tessera, not a layer on top of the mechanics." (a paragraph of its own) |
| 18 | "Art is a core pillar of Tessera. Its job is not decoration:" followed by a list of three jobs |
| 03 | "…The art carries the story — what's dormant and what's restored is shown through the visuals." |
| 06 | "…Restoration is where the art does its biggest work: each transformation should be built to create a moment of awe, not just a change of state." |
| 33a | "This milestone does not need painterly art, sound, or animation to pass…" |

My recommendation:
- **02 and 18 share one paragraph:** "Art is a core pillar of Tessera, not a layer on top of the mechanics."
  - 02 doesn't change.
  - In 18, the first sentence becomes that shared paragraph, and "Its job is not decoration:" starts a new paragraph, still followed by the list. So 18 gains the words "not a layer on top of the mechanics".
  - If you change the sentence later, both files change.
- **03 and 06 stay as they are.** They say what art does for the story and for restoration, which belongs in those sections. They aren't the same sentence.
- **33a stays as it is.** It's a different fact: M1 doesn't need finished art.

**Q1.** Should 02 and 18 share the paragraph, using 02's wording as above? The other option is 18's shorter "Art is a core pillar of Tessera.", but then 02 would lose "not a layer on top of the mechanics".

---

### Dani · 2026-10-16 16:08

shouldn't the core pillars be saved in a table. like each pillar and it's data is in a row

---

### Claude · 2026-10-16 16:09

Yes, I think that's right, and the idea reaches further than pillars.

**Why it fits:** a pillar has a fixed shape, and many documents refer to it. That's exactly what step 4 of the plan is for: "records with fields", where each row is stored once and documents list the rows. Each pillar would be one row, for example:

| Pillar | What it means | What it rules out |
|---|---|---|
| Art | … | … |

Documents such as 02 and 18 would then print the pillar from its row instead of each having their own sentence.

**Most of the table's other repeats are records too:**
- "Real-world layer kept out of M1" is a **decision** (14 October, you).
- "Who does world assembly" is an **open question**, asked in 27, 30, 34 and 43.
- "Lantern and portal" and the gathering rules are partly **features**.
- "Jousef's input → behaviour → save format" is the **feature record's** own shape.

Merging these as paragraphs now would mean doing the work twice. Once step 4 exists, each of these facts becomes one row that every document lists.

**My recommendation:** build step 4 next, with pillars added as a kind of record, and do the merges after that.

## Questions

**Q1. Add pillars to the plan?** In PLAN.md section 2, under "Records with fields", I'd add:
> Pillars: pillar, what it means, what it rules out.

Is that OK? You can also name other fields you want.

**Q2. The order of the steps.** PLAN.md section 6 would become:
> 3. Copying content in: one doc at a time.
> 4. Records with fields: features, open questions, decisions, pillars, assets, with milestone filters.
> 5. Merging repeated facts: one merge at a time, approved by Dani.

Is that OK?

**Q3. Which pillars are there?** Only art is called a pillar in the docs. These principles read like pillars too, but deciding is up to you:
- "game first": the real-world layer is optional (02);
- "nothing is ever lost; Tessera never punishes the player" (02);
- "restoration, not accumulation" (04, and the GDD's closing statement);
- "no pay-to-win, no forced ads" (36).

You don't need to answer Q3 now. It's needed when step 4 is built.

---

### Dani · 2026-10-16 16:13

it's not only applicable to pillars. not sure how different this structure is from your current one. but for example, features, each row contains a feature and its data, including which part of the game it belongs to. for example, opening a chest is part of gathering and resoures

---

### Claude · 2026-10-16 16:14

It's close to what you have now. The difference is where the parts of a feature live.

**Now:** each feature is one block of text inside its topic document. "Open a chest" is a block in 09, and its input, behaviour and save data are lines of text inside that block. The app knows it belongs to gathering only because 09 lists it. It can't sort or filter features by any of those parts.

**With records (step 4):** each feature is one row, with each part in its own field:

| Feature | Part of the game | Input | Expected behaviour/output | What needs to be saved | Milestones | Status |
|---|---|---|---|---|---|---|
| Open a chest | Gathering, resources and refining | The player pushes against the chest. | The chest opens and gives coins… | The refill timer… | M1 | … |

Documents then pick rows by a rule:
- 09 prints "all features in gathering";
- the TDD prints "all M1 features";
- the features list prints all of them.

The printed text looks the same as today, because the app turns the fields back into the same "Input:: …" lines.

PLAN.md already has features as records. Your "part of the game" field is new, and I'd give the other kinds of records the same field.

## Questions

**Q1. Records in PLAN.md section 2.** The list would become:
> - Features: name, part of the game, input, expected behaviour/output, what needs to be saved.
> - Open questions: question, part of the game, milestone, who answers.
> - Decisions: decision, part of the game, date, who decided.
> - Pillars: pillar, what it means, what it rules out.
> - Assets: the asset list (DOCS/46).
>
> Each record also has milestones, a status and Private, like a block. A document lists records by a rule, for example "all features in gathering" or "all M1 open questions".

"Part of the game" would be a fixed list you can edit in the app, starting from today's topic files: restoration, environmental interactions, gathering, the kit and tools, lanterns and portals, controls, and so on. Is that OK?

**Q2. The order of the steps (from my last message):** step 4, records, comes next, and the merges come after it. Is that OK?

If both are yes, I'll write out how step 4 will work (the screens, and how a document picks its rows) and show it to you before building anything.

---

### Dani · 2026-10-16 16:15

can you show me exacly what the database structure is now. the main table, linked tables, tables filtered with critera etc

---

### Claude · 2026-10-16 16:15

I'll pull real rows from your app to use as examples.

Here's the structure as it is now: six tables and three views. It's built around free text, not records.

## Overview

```
 names ┄┄(found by {label} in the text)┄┄▶ blocks ◀──(listed in)── documents ◀──(listed in)── documents
                                                                    │
                                    file tracking and logs: printed_files · file_log · pdfs
```

## 1. Main tables

All three are **version tables**. Every save adds a new row, and old rows are never changed or removed. That's how the history works. They share these columns:

| Column | Meaning |
|---|---|
| row_id | number of this row |
| record_id | the thing's ID; all versions of one block share it |
| version | 1, 2, 3 … |
| state | active / deleted |
| saved_at | when it was saved |
| change | create / edit / delete / restore / name-renamed / file-import |
| changed | which fields changed |
| note | an explanation, for restores and imports |

On top of those, each table has its own columns:

**blocks** (302 now):

| Column | Example: "Feature: Open a chest" |
|---|---|
| title | Feature: Open a chest |
| body | the whole text: heading, Input, behaviour and save lines, all as one piece |
| milestones | "" (empty), or e.g. "M1 M2" |
| status | working / decided / open |
| private | 0 or 1 |

**names** (0 now): label, value, description. For example `game-title` = "Tessera: Sleeping Atlas".

**documents** (67 now): name, title, header (settings like `:toc: left`), file (its .adoc file, or none), and entries.

## 2. Links

- **Document → its contents:** the `entries` column holds a fixed list inside the document's row. Each item is either a block or another document, optionally with its headings moved up or down a level. There is no separate link table. Examples:
  - **09 Gathering:** 6 blocks, chosen by hand: the heading block, Gather a resource, Open a chest, Buy and sell, Apparatuses, Process in the apparatus.
  - **TDD — M1:** 23 items mixing blocks and documents, including the document "All features (shared list)".
  - **All features (shared list):** 14 feature blocks, with no file of its own.
- **Name → block:** not stored. The app finds `{label}` in the text when it needs to.
- **Block → part of the game:** doesn't exist. "Open a chest" belongs to gathering only because document 09 lists it.

## 3. Filtered views

There's only one kind: `current_blocks`, `current_names` and `current_documents`. Each shows the newest version of every record. No view filters by milestone, status or topic. The search box does that filtering in code, on the fly.

## 4. File tracking and logs

| Table | Holds |
|---|---|
| printed_files | one row per repository file: the text the app last wrote, and which lines belong to which block. This is the safety net's reference, and the only table that is updated in place. |
| file_log | every write, takeover and replacement, kept forever |
| pdfs | every PDF made, kept forever |
| meta | the database's own version number |

## What this means for your idea

A feature is one block of free text. The app doesn't know its input, behaviour, save data or part of the game. A document's contents are a list picked by hand, not a rule.

Step 4 would add:
- **record tables with real fields:** features, open questions, decisions, pillars;
- **a "parts of the game" table** that records link to;
- **document entries that are rules**, such as "all features in gathering, milestone M1".

---

### Dani · 2026-10-16 16:17

i think that thrughout the years, programmers wanted to develop simple stuff to allow non programmers to use their tools, in time, tables and fields lost their original names so tht regular people can understand. this simplification is sad

---

### Claude · 2026-10-16 16:17

I partly agree. Plain words help when each one maps to exactly one real concept. They hurt when they hide the structure. And my own design does some of that hiding, beyond just the names:

- **"Entries" isn't a link table.** It's a list stuffed into one field of the document's row. A database person would normally build a separate link table, with document_id, position and block_id in each row. With that table, you could query "which documents use this block" directly instead of searching through text.
- **"Milestones" is a text field** holding "M1 M2", where a proper design would use a link table to a milestones table.
- **"Names" are linked by searching for `{label}` in the text**, with no foreign key.

Those were shortcuts that made steps 1–2 quicker. For step 4, the real terms describe the design better:
- **record tables:** features, open_questions, decisions, pillars;
- **a lookup table:** game_parts, which records point to with a foreign key;
- **a link table:** document_entries;
- **saved filters:** stored queries, essentially views, such as "features WHERE game_part = gathering AND milestone = M1".

**Q1.** Should I use proper database terms with you from now on (table, record, field, primary and foreign key, link table, lookup table, view, query)? You have an IT degree, and this conversation shows you think in these terms. My notes currently say to explain everything in plain language. If yes, I'll save a note so future sessions do the same:

> Dani has an IT degree and thinks in data structures. Use proper database terms with her (table, record, field, primary/foreign key, link table, lookup table, view, query). Don't simplify them away; plain language is for everything else.

I'd also write the step-4 plan as a real schema (tables, fields and keys) for you to review before I build anything.

---

### Dani · 2026-10-16 16:18

yes it's much easier for me to understand

---

### Claude · 2026-10-16 16:19

I'll save the note first. Then, before drafting the step-4 tables, I'll check the structure of the open questions (43) and the asset list (46), so the fields fit the real content.

I've saved the note. Here's my draft schema for step 4. Nothing is built yet.

All the tables below are **version tables**, like the existing ones. Every save adds a row, there's a `current_*` view of the newest rows, and every table has the version fields (row_id, version, state, saved_at, change, changed, note). `id` means the stable record_id, and foreign keys point to it.

```
-- Lookup tables
topics          id PK · name · parent_id FK → topics (null = top level) · sort_order
milestones      id PK · code ('M1') · name · sort_order

-- Record tables
features        id PK · name · topic_id FK → topics · input · behaviour · saved · sort_order · status · private
open_questions  id PK · question · topic_id FK → topics · who_answers · sort_order · status · private
decisions       id PK · decision · topic_id FK → topics · decided_on · decided_by · private
pillars         id PK · name · meaning · rules_out · sort_order · private
blocks          as now, plus topic_id FK → topics (optional); the milestones text field moves to a link table

-- Link tables (keyed on the version row, so each version keeps its own links in the history)
<record>_milestones  row_id FK → <record>.row_id · milestone_id FK → milestones · PK (row_id, milestone_id)
                     one each for blocks, features, open_questions, decisions
document_entries     document_row FK → documents.row_id · position · kind · target · heading_offset
                     kind = block | document | record | query   (replaces the "entries" list field)

-- Saved queries
queries         id PK · name · record_type · topic_id FK (null = any) · milestone_id FK (null = any) · status (null = any)
```

## How documents use it

- **The TDD's "M1 features" section** becomes a query entry: `features WHERE milestone = M1 ORDER BY topic.sort_order, sort_order`. A new M1 feature appears in it by itself.
- **09 Gathering** lists its four features as single record entries. That keeps today's order, where the "Apparatuses" text sits between two of the features. It could also use a query, if you'd rather 09 always show all gathering features together.
- **Printing:** each record table has a fixed print layout. For features, it's today's "=== Feature: name / Input:: … / Expected behaviour/output:: … / What needs to be saved:: …". So the files stay the same.

## Moving today's data in

- **The 14 feature blocks become features records.** I'd set each topic from the document that lists the feature (Open a chest → Gathering). Each would be M1, because the TDD lists all 14 under "M1 features". I'd check that every file still prints the same, as in step 3.
- **The 43 open questions become open_questions records.** Their sections today mix topics (Game, Real-world layer, Research/business, Team/legal) with milestones (M1, M2). Each section becomes a query, or a list of records.
- **pillars and decisions start empty.** Their content has to come from you.

## Questions

**Q1. Topics as a hierarchy** (a parent_id on the same table)? For example, Game → Gathering, Restoration, Lanterns and portals…, alongside Real-world layer, Research/business and Team/legal at the top level. I'd draft the full list from today's topic files and the sections of 43, and you'd edit it before anything is built. Is that OK?

**Q2. Milestones as a lookup table with link tables**, replacing the text field on blocks? Is that OK?

**Q3. Assets later, as their own design.** The drop table in 46 already has a relational shape: a harvestables table, an items table, and a drops link table (harvestable → item, primary or secondary). Should I design that after the rest?

**Q4. Build order:** features first, then open questions, then pillars and decisions. Is that OK?

Once you're happy with the schema, I'll write it into PLAN.md and the handover, and then build it.

---

### Dani · 2026-10-16 16:23

so currently, you have all the core pillars in one row?

---

### Claude · 2026-10-16 16:23

No. Right now there's no pillars table at all. The pillar sentences sit inside larger blocks, as part of their `body` field:

| blocks row | body field |
|---|---|
| "2. What Tessera is now" | all of file 02 in one field, 33 lines. That includes "Art is a core pillar…", "Tessera remains a *game first*" and "Nothing is ever lost". |
| "What the art is for" (18) | "Art is a core pillar of Tessera. Its job is not decoration:" followed by its list |
| "CURRENT WORKING LOOP" (04) | among other things, "Restoration/environmental change is increasingly the major reward…" |

So the pillar candidates in 02 do share one row, but only because the whole of file 02 is one row. Nothing marks them as pillars. The app can't list them, count them or print them anywhere else.

In the proposed `pillars` table, each pillar is its own row. For example, here's Art, filled in word for word from 18 and 02:

| id | name | meaning | rules_out |
|---|---|---|---|
| 1 | Art | make the world a place players want to spend time in; create moments of awe…; carry the story… | decoration; "a layer on top of the mechanics" |
| 2 | … | … | … |

Files 02 and 18 would then print the Art row instead of each holding their own sentence.

---

### Dani · 2026-10-16 16:24

what if we want to discuss one of the core pillars alone

---

### Claude · 2026-10-16 16:24

The schema supports that if pillars are linked to the other content, not just stored as their own rows. A pillar cuts across topics: Art touches visual direction, restoration, the story and UI. So it needs a **many-to-many link table**, because one block can serve several pillars and one pillar has many blocks.

**Addition to the draft:**

```
<record>_pillars   row_id FK → <record>.row_id · pillar_id FK → pillars · PK (row_id, pillar_id)
                   one each for blocks, features, open_questions, decisions
```

As with milestones, the links are keyed on the version row, so the history keeps them.

**Then "Art alone" is a set of queries:**

| Part | Query | Today's content that would match |
|---|---|---|
| The pillar | `pillars WHERE id = Art` | name, meaning, what it rules out |
| Its text | `blocks WHERE pillar = Art` | 18 "What the art is for" and "Target style", the story paragraph in 03, the awe paragraph in 06 |
| Its features | `features WHERE pillar = Art` | for example, "Restore an object or place" |
| Its open questions | `open_questions WHERE pillar = Art` | for example, "How much authored scenery/content is needed for sustained interest" |
| Its decisions | `decisions WHERE pillar = Art` | for example, the landscape orientation, which 22 justifies by immersion and scenery |

A document such as "Pillar: Art" would list those five queries. You'd get one focused document, or a PDF of just that pillar, and it would always be current. In the app, the pillar's screen would show the same set.

**One consequence:** links work per block, so a block that mixes several pillars needs splitting. File 02, for example, is one block holding art, "game first" and "nothing is ever lost". It would become separate blocks, so each part can link to its own pillar. The printed file stays the same.

**Q1.** Should I add the pillar link tables to the draft schema?

---

### Dani · 2026-10-16 16:26

is the rest of the data built the same way?

---

### Claude · 2026-10-16 16:27

Yes. Apart from the documents' contents lists, everything is free text in the `blocks` table: 302 rows, cut only at headings. Wherever content has a fixed shape, the shape exists only as lines of text inside a `body` field:

| Content | Stored today as | Its real shape |
|---|---|---|
| Features (14) | one block each; Input, behaviour and saved are lines in the body | feature · topic · input · behaviour · saved · milestones |
| Open questions (43) | 7 blocks, one per section. The "M1" block holds 13 questions in one field. | question · topic · milestone · who answers |
| Decisions | no rows at all. They're sentences inside prose, such as landscape orientation in 22, the milestone split in 33 and the M2 public release in 33b. | decision · date · who decided · topic |
| Pillars | sentences inside 02 and 18 | pillar · meaning · rules out |
| Milestones (33–33c) | blocks of prose and lists | milestone · goal · scope · exit criteria |
| Asset list (46) | 21 blocks. The drop table is an AsciiDoc table inside one field, so its rows are text lines, not database rows. | harvestables · items · drops (link table) |
| Research (15–17) | studies and citations inside prose | study · citation · finding · relevance |
| Business: timeline, budgets, company facts | AsciiDoc tables and "Legal name:: …" lines inside text | event · date · status / item · amount / field · value |
| Team checklist | checkbox lines inside text | item · section · done |
| Names | a real table, but empty | label · value |

So the app today works like a word processor with sections, plus a version history. It isn't yet a database of Tessera's content.

**My recommendation:** don't turn everything into records. Rationale, narrative and explanations read best as prose, so they stay blocks. Records pay off where content has a fixed shape and documents need to filter, count or reuse it. In order of value:
1. features, open questions, decisions, pillars;
2. milestones, and the assets with their drop table;
3. later, if useful: research studies, the timeline, the checklist and the budgets.

Every record type can also link to topics, milestones and pillars, as in the draft. That's what makes views like "everything about Art" or "everything in M1" work.

**Q1.** Should I extend the draft schema with milestones and assets in the first round, alongside features, open questions, decisions and pillars?

---

### Dani · 2026-10-16 16:28

i don't understand what a block is. is it a record, one long text field

---

### Claude · 2026-10-16 16:28

Yes, exactly. A block is a record in the `blocks` table. Its content is mainly one long text field, `body`, holding a piece of a file cut at a heading, heading line included. Here's the full record for "Feature: Open a chest":

| Field | Value |
|---|---|
| record_id | f4e4eddb-345b-44be-864c-4bda5e61a09d |
| version | 1 |
| state | active |
| title | Feature: Open a chest |
| body | the long text field, shown below |
| milestones | (empty) |
| status | working |
| private | 0 |
| saved_at | 2026-10-16T12:31:49Z |
| change | create |

The `body` field holds:

```
=== Feature: Open a chest

Input:: The player pushes against the chest.
Expected behaviour/output:: The chest opens and gives coins. Whether it also gives other items is still to be decided. Coin chests refill. Their timer is longer than a harvestable's and depends on the chest's size and level.
What needs to be saved:: The refill timer. It keeps running while the game is closed, like the apparatus timer.
```

So "Input", "Expected behaviour/output" and "What needs to be saved" aren't fields. They're lines of text inside `body`. The database can't see them separately.

The `title` field is taken from the heading line. A block without a heading gets a typed label instead.

When you edit a block, the app adds a new record with the same record_id and version 2. Version 1 stays for the history. The `current_blocks` view shows only the newest version of each.

A document's contents list then points to blocks by record_id. File 09, for example, is the list [heading block, Gather a resource, Open a chest, Buy and sell, Apparatuses, Process in the apparatus]. Printed in that order, those blocks give the .adoc file.

---

### Dani · 2026-10-16 16:30

ok then let's go back to your questions

---

### Claude · 2026-10-16 16:31

Here are the open questions, each with my recommendation.

**Q1. Step order:** build records (step 4) before the merges (step 5), because most merges will happen through records. Recommended: yes.

**Q2. Topics:** a `topics` lookup table with a `parent_id`, so topics form a hierarchy. For example: Game → Gathering, Restoration, Lanterns and portals…, alongside Real-world layer, Research/business and Team/legal. I'd draft the list from today's topic files and the sections of 43, and you'd edit it before anything is built. Recommended: yes.

**Q3. Milestones:** a `milestones` table linked to records through link tables, replacing the text field on blocks. I'd also give each milestone its own fields: goal, scope and exit criteria, taken from 33a–c. Then it's both the lookup table and the place where each milestone is described. Recommended: yes.

**Q4. Pillar link tables:** many-to-many links from blocks, features, open questions and decisions to pillars, so you can view one pillar together with everything linked to it. Recommended: yes.

**Q5. First round:** features, open questions, decisions, pillars and milestones. The assets come in a second round, as their own design (harvestables, items, and a drops link table), after I've gone through all of 46 with you. Recommended: yes.

**Q6. Build order within the first round:** features, then open questions, then milestones, then pillars and decisions. The first three are filled from today's text. Pillars and decisions need content from you. Recommended: yes.

**Q7. Which pillars:** this can wait until pillars are built. The candidates in the docs are art, "game first", "nothing is ever lost; never punishes", "restoration, not accumulation" and "no pay-to-win, no forced ads".

If you say yes, I'll write the full schema and the topic list into PLAN.md for you to review before I build anything.

---

### Dani · 2026-10-16 16:34

ok go ahead

---

### Claude · 2026-10-16 16:34

I'll write the schema into PLAN.md now. First I'll re-read the plan as it stands.

The schema is written into [PLAN.md](../../../tessera-design/PLAN.md), sections 2, 3, 5 and 6. Nothing is built yet.

Please review these points in particular, because they go beyond what we discussed or need your input:

**Q1. Closing open questions:** I added `answered_by` to `open_questions`, a foreign key to the decision that answers it. A question then closes when it's linked to its decision, and it's never deleted. That way you can always see what answered what. Is that OK?

**Q2. The topic tree, in section 2.3.** It's my draft, built from today's topic files. It has eight top-level topics: Game, Art and audio, Real-world layer, Technical, Monetization, Research and audience, Business and Team. Please edit it freely: rename topics, move them, or add your own.

**Q3. Features get M1:** all 14 features would start with milestone M1, because the TDD lists them under "M1 features". Some mention parts that aren't in M1, such as speeding up processing with Flow Points. That stays in their text. Is that OK?

**Q4. File 02 is split into separate blocks** (art, "game first", "nothing is ever lost", and so on), so each can link to its own pillar. The printed file stays the same. Is that OK?

**Q5. Print layouts:** features keep today's layout. Decisions and pillars are new, so I'll show you a sample layout for each before they print anywhere. Is that OK?

Once these are settled, I'll build the features part first and check that every file still prints the same.

---

### Dani · 2026-10-16 16:40

are you able to show me all the tables

---

### Claude · 2026-10-16 16:40

A page with a diagram will show this better than chat, so I'll make one. It will cover every table, its fields and keys, how the tables link, and example rows.

I'll get exact row counts and real example rows from the newest backup copy. It's a closed file, so this doesn't touch your running app.

Here's the page with every table: https://claude.ai/artifact/SHwvU73XJ4FnubwoEZLtgy

It's private to you. It has:
- a diagram of how all the tables link;
- one card per table, marked Now, Changed or New, with its fields, types, keys and example rows.

Rows marked "Real" come from your database. They include the two versions of block 02 from the "void" fix, and file 09's tracking row. The new tables show examples taken from today's text, such as "Open a chest" split into its fields.

**One correction:** the milestone files share four sections: "Why it exists", "What it's for", "Exit criteria" and "What it cannot answer". So the `milestones` table now has those four fields instead of my earlier goal and scope. Sections that only one milestone has, such as M2's method and pass/fail condition, stay blocks linked to it. I've fixed this in PLAN.md too.

The questions from my last message (Q1–Q5) are still open, if you'd rather answer them after looking at the page.

---

### Dani · 2026-10-16 16:49

ok i see it now

---

### Claude · 2026-10-16 16:49

Good. When you're ready, here are the five open points. Each one can be seen on the page.

**Q1. `open_questions.answered_by`:** a question closes when it points to the decision that answers it. It's never deleted. Is that OK?

**Q2. The topic tree** (PLAN.md section 2.3, and the `topics` card): it's my draft. Edit it however you like, or tell me it's fine for now.

**Q3. All 14 features start in M1**, because the TDD lists them under "M1 features". Is that OK?

**Q4. File 02 is split into separate blocks**, so that each pillar candidate can link to its own pillar. The printed file stays the same. Is that OK?

**Q5. Print layouts:** features keep today's layout. I'll show you sample layouts for decisions and pillars before they print anywhere. Is that OK?

---

### Dani · 2026-10-16 16:50

1. why
2. ok
3. yes
4. ok
5. ok

---

### Claude · 2026-10-16 16:50

**Why `answered_by`:** without it, there's no good way to close a question.

- **Without it**, when you answer a question you'd have to delete it, or edit its text to add the answer. Deleting loses the question. Editing puts the answer inside the question, so it never reaches the decisions table. Either way, nothing records which decision answered which question.
- **With it**, you record the answer once, as a decision row (what was decided, when and by whom), and point the question to it. Then:
  - "Open questions" is simply `answered_by IS NULL`. The TDD's "Open decisions" section drops answered questions by itself.
  - You can trace every answer: question → decision → date. That's useful after meetings like the 15 October one, and as a record for collaborators.
  - One decision can answer several questions.
  - The question stays in the history.

For example, say you decide that M1 is 2D. You'd add that decision and point "Is it OK for M1 to be 2D?" to it. The question disappears from the open lists, and the decision lists the question it answered.

The simpler alternative is a "status: open / answered" field plus an "answer" text field. It's easier, but the answers would sit inside questions instead of in the decisions table.

**Q1.** Should I keep `answered_by`?

Q2–Q5 are settled. Once you've answered Q1, I'll start building the features part.

---

### Dani · 2026-10-16 16:51

go

---

### Claude · 2026-10-16 16:51

Building the features part now. First I'll read the parts of the app the new tables touch.

This is a bigger build: new tables, an upgrade of how blocks and documents store their links, and new screens. I'll read the rest of the app's code first.

The build is under way. First the database migration, which adds the new tables and moves milestones and document contents into link tables.

Let me test the migration on a copy of your newest backup before going further.

Now the store, rewritten for the new tables. It keeps every existing behaviour for blocks, names and documents.

Now printing: documents can list a feature or a query, and a query prints its results in order.

---

### Dani · 2026-10-16 16:58

(sent while Claude was working) question, now that we have this, what about the studio records app, it contains records about the progress of the project itself and schedules and planning. i feel that's unnecessary there, and that it be more efficiently achieved here, while the records app can remain for accounting and taxes. what do you think. also how long until we're done, and should we start a new conversation. if yes, please provide  the prompt

---

### Claude · 2026-10-16 16:58

Good questions. Before I answer the one about Studio Records, I'll check what it actually holds.

Short answers, then I'll carry on with the build.

**1. Planning in Studio Records: I agree, with one boundary.** Studio Records' phase 4 is milestones, tasks and a calendar. That fits better here:
- Tessera Design now has a `milestones` table with goals and exit criteria.
- Tasks would link straight to the features, open questions, decisions and topics they concern.
- Keeping milestones in two apps means two versions that drift apart.

Everything that is evidence or money stays in Studio Records: expenses, subscriptions, hours, contributions, funding, the IP register, the dated timeline, and the future company's bookkeeping, VAT and annual report. That app's audit chain, login and encrypted backups exist for exactly that.

The one link between the two apps is hours: an hours entry there could name the Tessera Design task or milestone it was spent on.

This also bears on the rename decided on 15 October. If Studio Records becomes the studio's accounting and evidence app for every future project, "Tessera Studio Records" may be the wrong name. That's your call.

If you agree, I'd add `tasks` (task, milestone, topic, owner, due date, status) to step 4 here. In a Studio Records session we'd then copy over any milestones and tasks already stored there and stop using its phase 4 screens. Nothing there gets deleted, because its tables are append-only too.

**2. How long.** The features part is about half built. Still to do: the safety net, search, the server, the screens, the tests, a full rehearsal on a copy of your data, and then your review of the differences. After that come open questions, milestones, pillars and decisions, then tasks if you want them, the assets, and finally the merges. Those later parts reuse what I'm building now, so each one is smaller, roughly one session each.

**3. A new conversation: yes, but after this part is finished.** The code is mid-change right now. **Please don't restart Tessera Design until I say so.** The new code is incomplete, and the app wouldn't start. Your data is safe either way. When I tell you this part is done and committed, start a new conversation with this prompt:

> Continue building Tessera Design, step 4. Read first: CLAUDE.local.md, then C:\Users\someo\Dropbox\Studio\tessera-design\CLAUDE.md and PLAN.md (section 2 is the approved schema; the overview page is https://claude.ai/artifact/SHwvU73XJ4FnubwoEZLtgy). The features part (topics, milestones, features, saved queries, link tables) is built and in use. Next, in this order: open questions, milestones (fill the four fields from 33a–c), then pillars and decisions. Also settle with me whether planning (milestones, tasks, calendar) moves from Studio Records into Tessera Design. Same working rules as before: show me exact texts and differences before anything changes, one merge at a time, and use proper database terms with me.

Before then, I'll update the handover files so the new conversation knows everything decided here. Continuing the build now.

Now the safety net: changes made in a file outside the app can also be brought back into a feature's fields.

Now search: it finds features too, and can filter by topic.

Now the server routes for the new tables.

My quick edit broke the quoting on one line. Fixing it.

Now I'll run the existing tests to see what the changes broke.

All 75 existing tests pass. Now new tests for everything step 4 adds.

All 86 tests pass, including the 11 new ones and the upgrade test. Next, the screens. I'll add Features, Topics and Queries pages, and let documents list features and queries.

Now the search page: a topic filter, and features in the results.

Now the block editor: milestone boxes without "All", since milestones now come from the table, plus an optional topic.

Now the document editor, so it can list features and queries.

Now the history pages for the new tables.

Now the new pages themselves: Features, Topics and Queries.

Inline styles are blocked by the app's security settings, so the topic tree indent needs a different approach. I'll also add the nav links and a CSS rule.

Now the script that moves today's 14 feature blocks into the new `features` table. It also creates the topic tree from PLAN.md and points every document at the new records.

The upgrade on a copy of your real data leaves all 67 files exactly as they are. Now the feature move, on the copy.

Every screen opens without errors. I'll double-check one detail on the search page, because its matches are highlighted, which splits the text.

Search finds the feature, and the TDD's parts show correctly. One last check: the 5 changed files render the same in Asciidoctor.

Everything matches. I'll stop the rehearsal server, then update the version number and the app's guide and handover.

The features part is built, and the full rehearsal has passed:
- **All 86 tests pass.** That includes the new ones for features, topics, queries and the upgrade.
- **The upgrade on a copy of your real data changes no file.** All 67 still match.
- **Moving the 14 features into the new table changes only this:** files 06, 08, 09, 10 and 22 each lose one empty line at the very end. Those five files previously ended with a feature followed by an empty line, and a record doesn't carry a trailing empty line. Asciidoctor renders all five files the same as before. The TDD, the features list and the master don't change at all.
- **The new pages work in a browser:** Features, Topics and Queries, plus features and queries in documents, search and history.
- **37 topics** are created from the tree in PLAN.md. Each feature gets its topic from the file it's in, milestone M1, and the same order as in the file.

## Questions

**Q1.** Can the five files lose their final empty line?

**Q2.** Should I commit and push the app's new code now, before you restart it?

**Q3. Handover note for the new conversation** (CLAUDE.local.md, section 4, newest first). I'd add:

> - **2026-10-16** Tessera Design step 4 schema approved (PLAN.md section 2; overview page https://claude.ai/artifact/SHwvU73XJ4FnubwoEZLtgy): records with fields (topics, milestones, features, open questions, decisions, pillars), link tables and saved queries. Records come before the merges. First part (topics, milestones, features, queries) built as v0.3.0. Use proper database terms with Dani.
> - **2026-10-16 (proposal, not decided)** Move project planning (milestones, tasks, calendar) from Studio Records into Tessera Design. Studio Records keeps money and evidence (expenses, hours, IP register, timeline, bookkeeping). Dani leans yes. If so, reconsider the "Tessera Studio Records" rename.

In the Tessera Design entry, "Next: the merges…" would become "Next: the rest of step 4, then the merges."

Is that OK?

**Still: don't restart the app yet.** Once you've answered Q1 and Q2, I'll commit and then tell you to restart. When it's running again, I'll move the features in, check the files, and report back.

---

### Dani · 2026-10-16 17:13

1  yed
2 yes
3 yes

---

### Claude · 2026-10-16 17:13

Committing and pushing the app code, and updating the handover note.

Now the handover note.

The app's code is committed and pushed to GitHub, and the handover note is updated. I also made a fresh backup of your data just now, before the upgrade.

**Please restart Tessera Design now:**
1. Close the black window.
2. Double-click **Start Tessera Design.bat**.
3. When the app opens in your browser, tell me it's running.

On start, it upgrades the database and shows the new pages: Features, Topics and Queries. Those pages stay empty until I move the features in, which I'll do as soon as you tell me it's running. Then I'll check the files and report back.

---

### Dani · 2026-10-16 17:15

ok it's running

---

### Claude · 2026-10-16 17:15

Your app runs version 0.3.0, the upgrade is done, and no file changed. Moving the features in now.

Step 4's first part is finished and running in your app. Your four records tables are now in it: 37 topics, 14 features, saved queries and the M1–M3 milestones.

**Q1.** Should I commit and push the last two changes?
- **The Tessera repository:** the five files that lost their final empty line.
- **The tessera-design app:** the note in its handover file that the rollout is done.

After that, nothing is left unsaved, and you can start the new conversation with this prompt:

> Continue building Tessera Design, step 4. Read first: CLAUDE.local.md, then C:\Users\someo\Dropbox\Studio\tessera-design\CLAUDE.md and PLAN.md (section 2 is the approved schema; the overview page is https://claude.ai/artifact/SHwvU73XJ4FnubwoEZLtgy). The features part (topics, milestones, features, saved queries, link tables) is built and in use. Next, in this order: open questions, milestones (fill the four fields from 33a–c), then pillars and decisions. Also settle with me whether planning (milestones, tasks, calendar) moves from Studio Records into Tessera Design. Same working rules as before: show me exact texts and differences before anything changes, one merge at a time, and use proper database terms with me.

---

### Dani · 2026-10-16 17:15

ok

---

### Claude · 2026-10-16 17:16

Both are committed and pushed to GitHub, so nothing is left unsaved.

You can start the new conversation now with the prompt above. It will pick up from the handover files and continue with open questions next.

---

### Dani · 2026-10-16 17:16

can you provide it again

---

### Claude · 2026-10-16 17:16

Here it is:

> Continue building Tessera Design, step 4. Read first: CLAUDE.local.md, then C:\Users\someo\Dropbox\Studio\tessera-design\CLAUDE.md and PLAN.md (section 2 is the approved schema; the overview page is https://claude.ai/artifact/SHwvU73XJ4FnubwoEZLtgy). The features part (topics, milestones, features, saved queries, link tables) is built and in use. Next, in this order: open questions, milestones (fill the four fields from 33a–c), then pillars and decisions. Also settle with me whether planning (milestones, tasks, calendar) moves from Studio Records into Tessera Design. Same working rules as before: show me exact texts and differences before anything changes, one merge at a time, and use proper database terms with me.

---

Written on 4 November 2026 from the backed-up log of session 1acb5b25-0bd6-4b59-a782-59478a1d8202 (Tessera-repositories-tessera); this conversation had no text before.
