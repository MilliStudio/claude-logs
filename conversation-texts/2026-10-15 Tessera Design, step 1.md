# Tessera Design, step 1 (2026-10-15)

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Its pictures are in Tessera Records, in the original file "Pictures: 2026-10-15 Tessera Design, step 1", numbered as here. Private: never commit or share.

---

### Dani · 2026-10-15 20:34

Start step 1 of the Tessera Design plan.

---

### Claude · 2026-10-15 20:35

I'm reading the plan and Studio Records' code so the new app matches its setup. Next I'll design step 1 and start building it.

I've read the plan and how Studio Records is built. Now writing the app: database, server, search, history and the browser screens.

Storage, history and search are written. Now the backup copies and the local server, then the browser screens and tests.

Now the tests.

One test was wrong (it tried to delete from an empty table, so nothing fired). Fixing the test.

All 39 tests pass. Now I'll start a test copy of the app (separate data folder and port) and check the screens in a headless browser.

API works, including search and a backup copy. Now screenshots of each screen.

Claude looked at picture 001

Claude looked at picture 002

Claude looked at picture 003

Claude looked at picture 004

Two small problems: a stray "null" in the backup panel, and the history comparison splits `{apparatus}` into pieces. Fixing both.

Claude looked at picture 005

Claude looked at picture 006

Search, names and history screens render correctly. Checking highlighting, the name editor, and a few interactions next.

That failure notice is just the test server I stopped myself. Restarting it, then driving the editor in a headless browser: typing, saving, renaming a name, and the unsaved-changes warning.

22 of 23 checks pass. The one "fail" was my own expectation: the earlier test block is marked "All milestones", so it correctly shows up under M1 too. Checking two more screenshots.

Claude looked at picture 007

Claude looked at picture 008

Claude looked at picture 009

The interaction check passed everything else, with no page errors. Stopping the test server and writing the plain-language guide and the handover notes for future sessions.

That notice is the test server I stopped on purpose. One last full test run and a check that no data ended up in the code folder.

Step 1 of Tessera Design is built and working. The app now has blocks, names, search, editing and history, plus automatic backup copies.

**What you can do in it:**
- **Write blocks:** each one has a title, its text, milestones (M1, M2, M3 or All), a status (decided, working idea or open) and a Private tick box. Every save is dated automatically.
- **Use names:** type `{game-title}` in any block and it fills in "Tessera: Sleeping Atlas". Change the value once and every block changes with it. If you rename the label itself, the app asks first and then updates every block that uses it.
- **Search:** one box searches every block and name. You can narrow it by milestone, status, or shared and private.
- **Go back in time:** every save is kept. You can see exactly which words changed and bring back any older version, including a deleted block.

**How to try it:** double-click **Start Tessera Design.bat** in `Dropbox\Studio\tessera-design`. Please don't use it for real work yet. Until step 2 is built, nothing you write in it reaches the documents, so the .adoc files are still the originals.

**Checks:** all 40 automated tests pass. I also clicked through every screen in a hidden browser: saving, renaming a name, the "unsaved changes" warning, bringing back an old version and deleting. All of it worked, with no errors on the pages.

**Decisions I made:**
- **No login.** The app only answers your own computer, and the same text already sits unprotected in the Dropbox files.
- **Backups.** Your blocks and names are kept outside Dropbox on purpose, like Studio Records, because Dropbox can damage a database while it's being written to. So that they're still backed up, the app saves a copy to `Dropbox\Studio\tessera-design-backups` every 15 minutes if anything changed, and keeps the newest 30.
- **Notes for later sessions.** I also wrote a short guide (README.md) and notes for future Claude sessions (CLAUDE.md) in the app folder.

I worked from PLAN.md and your 15 October note in the handover file, which agree with each other.

**Questions:**
- **Q1. Version history for the app's code:** should I put the code under git and create a private GitHub repository, `MilliStudio/tessera-design`, like Studio Records has? I'll only commit and push after you say yes.
- **Q2. Updating the plan and the handover file:** may I make these two changes?
  - PLAN.md: "Nothing is built yet." → "Step 1 built on 15 October 2026."
  - CLAUDE.local.md: "Next: step 1, the app itself." → "Step 1 built on 2026-10-15 (v0.1.0); its handover is `tessera-design\CLAUDE.md`. Next: step 2, documents."

---

### Dani · 2026-10-15 21:23

1 surse 
2 ok

---

### Claude · 2026-10-15 21:23

No GitHub command-line tool is installed, but your SSH key is, so pushing will work once the repository exists on GitHub. First the git setup and the two approved edits.

Now creating the git repository, marking `.git` as ignored by Dropbox (same as your other two repositories), and making the first commit.

Tests pass (40 of 40). Committing.

Q2 is done, and Q1 is half done: the code is committed on your computer, but it isn't on GitHub yet.

**What's done:**
- **Q1, git:** the app's code is now under git, with one commit ("Step 1: blocks, names, search, editing and history"). The tests passed before I committed. Dropbox is set to ignore its `.git` folder, the same as your other two repositories.
- **Q2, the two edits:** PLAN.md now says "Step 1 built on 15 October 2026." CLAUDE.local.md now says step 1 is built and step 2 is next.
- **The app's own notes (CLAUDE.md):** I updated these to say the code is under git and has a private GitHub repository. That line about GitHub is only true once the push below is done.

**One step for you:** the repository doesn't exist on GitHub yet, and I can't create it from here because the GitHub command-line tool isn't installed. It takes a minute on the website:
1. Go to https://github.com/new, logged in as MilliStudio.
2. Owner: **MilliStudio**. Repository name: **tessera-design**.
3. Choose **Private**.
4. Leave it empty: don't add a README, .gitignore or licence.
5. Click **Create repository**.

Tell me when it's done and I'll push. Until then, the code exists only in Dropbox.

---

### Dani · 2026-10-15 21:57

i need a description.

---

### Claude · 2026-10-15 21:57

Paste this into GitHub's "Description" field:

> Local app that stores each piece of Tessera's design text once and builds every document from it. Code only, no data.

The description is optional, so it doesn't affect the push. Once you've clicked **Create repository**, tell me and I'll push.

---

### Dani · 2026-10-15 21:57

ok done

---

### Claude · 2026-10-15 21:57

The push worked: the app's code is now in your private GitHub repository, `MilliStudio/tessera-design`. GitHub holds the same commit as your computer, so the code is backed up there.

Step 1 is finished. Step 2 is next: documents, copies written into the Tessera repository, the PDF button and the safety net. After step 2 you can start using the app for real work. Tell me when you want to start it.

---

### Dani · 2026-10-15 21:59

go

---

### Claude · 2026-10-15 22:00

Starting step 2. First I'll look at how today's documents are put together and how the existing TDD PDF was made, since the app has to reproduce both.

Still researching: the existing TDD PDF was printed by Edge from an HTML page. I'm checking exactly how, so the app's PDF button can do the same.

The docs use a small, manageable set of AsciiDoc features: headings, lists, tables, bold and italic, links, cross-references, a couple of images. Looking at real examples of the less common ones.

---

### Dani · 2026-10-15 22:01

(sent while Claude was working) just a note, i hope you're copying the text as is, not paraphrasing, making stuff up to fill gaps or omitting anything

---

### Claude · 2026-10-15 22:09

API Error: Can't reach the API server — check your internet or DNS (ENOTFOUND)

---

### Dani · 2026-10-15 22:10

can you resume?

---

### Claude · 2026-10-15 22:16

Now the converter that turns AsciiDoc into a readable page. The preview and the PDFs both use it.

The shell mangled the backslashes in my edit, which Studio Records' notes warn about. Making the same fixes with the editor instead.

Now the storage code for documents.

Next: printing a document into AsciiDoc text, and writing copies into the Tessera repository with the safety net.

Now the PDF maker. It uses Edge, the same way the M1 TDD PDF was made, and never overwrites a PDF.

Now the server: routes for documents, the safety net, the preview and PDFs. Plus the setting for where the Tessera repository is.

Before the screens, I'll point the tests at a temporary copy of the repository, so no test can ever write into the real one. Then I'll run the existing tests.

Two expected breaks: the import line in the server test, and one message I reworded ("used in 1 block" is now "used in 1 place", because documents can use names too). Fixing both.

Tests from step 1 pass with the new code. Now tests for step 2, starting with the most important one: a document built from a file's own text must print that file back exactly.

Printing is exact, including odd endings and double blank lines. Now tests for the safety net: what happens when a file was edited outside the app.

Now tests for documents and for the converter's handling of each AsciiDoc feature.

One test disagrees with my expectation about how lists separated only by a blank line combine. I'll ask Asciidoctor what it does with this exact text instead of guessing.

Found a real difference: after a blank line, a `//` line ends a list in Asciidoctor, but my converter joined the lists. Fixing it.

I'm writing the screen code now: the documents list and editor, the file status, preview and PDF panels, plus "Appears in" on the block editor. It's the biggest file of this step.

That test expected the old behaviour. Asciidoctor formats bold inside monospace, and the converter now does too. Updating the test.

65 of 66 files were taken over unchanged, and not a single file in the copy was modified. One master file differs. Checking why:

All 15 browser checks pass. The only error logged is the browser asking for a tab icon the app doesn't have, which is harmless. Now I'm looking at the screenshots.

Claude looked at picture 010

Claude looked at picture 011

Claude looked at picture 012

The preview renders well, including your images and the description lists. The blank preview in the earlier screenshot was most likely taken before the frame had loaded. Checking that page directly:

All 75 tests pass. Now I'll save the Asciidoctor comparison as a tool in the app folder, for step 3's checks, and update the version, README and handover notes.

The saved tool confirms it against your real files (it only reads them): all 68 match. Now the README and the handover notes for later sessions.

Step 2 is built and tested. All 75 tests pass, and your real Tessera repository is untouched: git shows no changes there.

**What the app can do now:**
- **Documents:** you build a document by arranging blocks and other documents in order, by dragging or with arrow buttons. A document holds no text of its own.
- **Copies in the repository:** after every change, the app writes each document's .adoc file into DOCS/ or business/. Commits still happen only when you ask.
- **Safety net:** if a file was changed outside the app, the app won't overwrite it. The top of the screen shows how many files need your attention, and the document page shows exactly what differs. You then choose:
  - bring the changes into the app, where each change goes into the block it belongs to;
  - or replace the file, in which case its old text is kept in the app.
- **Preview and PDF:** the preview shows the document as it will look. The PDF button leaves out private blocks unless you untick the box. PDFs go to the `exports` folder, next to the M1 TDD PDF, and are never overwritten.
- **Where a block appears:** each block's page lists every document it's in. A block that a document uses can't be deleted, so nothing drops out unnoticed.

**On copying text exactly:**
- **Copies:** I loaded a copy of your repository into a test copy of the app, cut into blocks at the headings. The app printed 65 of 66 files back character for character and changed no file. The one exception is the master's "All features" section, which pulls in only parts of other files. My quick trial didn't handle that kind; step 3 will.
- **Preview and PDFs:** they use a converter I wrote, since the plan rules out outside packages. I checked it against Asciidoctor, the tool used for the M1 TDD PDF. It shows the same words in all 68 files, with nothing dropped.
- **Names:** in the .adoc files, a name appears as `{game-title}`, with its value set once at the top of the file. The preview, PDFs and GitHub all show "Tessera: Sleeping Atlas".

**The app isn't useful yet:** your docs only get copied in with step 3. Until then the .adoc files stay the originals, and the app leaves them alone. I recommend going straight on to step 3.

I recorded your rule, copy text exactly with no paraphrasing, gap-filling or omissions, in the app's notes for future sessions (`tessera-design\CLAUDE.md`). I also updated the README.

**Questions:**
- **Q1. Saving step 2 to GitHub:** may I commit step 2 and push it to `MilliStudio/tessera-design`?
- **Q2. Updating the plan and the handover file:** may I make these two changes?
  - PLAN.md: "Step 1 built on 15 October 2026." → "Steps 1 and 2 built on 15 October 2026."
  - CLAUDE.local.md: "Step 1 built on 2026-10-15 (v0.1.0) … Next: step 2, documents." → "Steps 1 and 2 built on 2026-10-15 (v0.2.0); its handover is `tessera-design\CLAUDE.md`. Next: step 3, copying today's docs in."
- **Q3. Remembering your copying rule:** should I also save it as a memory note, so it applies in every Tessera session, not just in the app's? The proposed text: "When copying Dani's content anywhere, copy it as it is: no paraphrasing, no filling gaps, no omissions. Merging repeated text needs Dani's approval."

---

### Dani · 2026-10-15 22:47

1 yes
2 yes. and it's best to start a new conversation (if it's necessary). if it is can you give me a prompt
3 yeah great. you can adjust a bit: When copying Dani's content anywhere, copy it as it is: no paraphrasing, no filling gaps (ask dani instead), no omissions. Merging repeated text needs Dani's approval.

---

### Claude · 2026-10-15 22:48

Doing all three. First the text changes, including your adjusted wording in the app's notes as well.

Now the commit and push. The tests run once more first.

All three are done:
- **Q1:** step 2 is committed and pushed to GitHub. The tests passed (75 of 75) before the commit.
- **Q2:** PLAN.md and CLAUDE.local.md now say steps 1 and 2 are built and step 3 is next.
- **Q3:** the memory note is saved with your wording, including "ask Dani instead". I put the same wording in the app's notes.

**New conversation:** yes, I'd start one. This conversation is very long, and step 3 is careful work, one doc at a time. A fresh session gets everything it needs from the notes: CLAUDE.local.md, the app's CLAUDE.md, the plan and your memory notes. Start it in the Tessera repository folder, as now, so it loads those memory notes.

Written for: a new Claude session. Paste it as your first message.

```
Start step 3 of the Tessera Design plan: copying today's docs into the app.

Read first: CLAUDE.local.md (as always), then C:\Users\someo\Dropbox\Studio\tessera-design\CLAUDE.md and PLAN.md in that folder. Steps 1 and 2 are built (v0.2.0).

How I want it done:
- One doc at a time. Copy the text exactly as it is: no paraphrasing, no filling gaps (ask me instead), no omissions.
- Before the app takes over a file, show me that the document it prints matches today's file exactly. If it doesn't, show me the differences and wait.
- Facts written in more than one doc (the table in PLAN.md, section 5) are merged into one block only with my approval, one merge at a time. Show me the exact texts first.
- Tell me when I need to start the app.
- Start by proposing the order of the docs, and how you'll handle the TDD, the features list and the master's "All features" section, which include only parts of other files. Wait for my yes before copying anything.
```

---

Written on 4 November 2026 from the backed-up log of session 9522d297-8030-4abe-aaed-aa787a06c6a9 (Tessera-repositories-tessera); this conversation had no text before.
