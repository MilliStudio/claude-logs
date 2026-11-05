# Tessera Records: readable lists, Bring in on the Overview and lists by month

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Private: never commit or share.

---

### Dani · 2026-10-28 14:30

Task: upgrade Tessera Records' features. I'll tell you which. Leave the eight records from my M1 Trial email alone: an M1 session enters them later. At the end, write what changed in the app in its CLAUDE.md.

1. problem with readability. text is cramped, specifically in business and records with large text bodies, specifically in business section. they need to be more presentable

2 open questions can also use a face lift for better readability + questions sohuld be numbered

Needs attention
2 subscription charge(s) to record
1 asset(s) in the IP register without a file
asset notice links to the page not the record with the issue

expenses
drop down menu for currency
when part of sub is chosen, fields can be filled from the sub

design should be in documents menu. the menu s hould  be gdd, tdd + the main catedories or sectoins such as features, pillard, etc

---

### Claude · 2026-10-28 14:30

Starting with the session-start check: the end of the newest conversation log.

This is a larger task: six changes across both parts, with tests and screen checks. Roughly 1½–2 hours. Reading the styles and the pages involved first.

Taking baseline screenshots with made-up records while I read the code.

---

### Dani · 2026-10-28 14:31

[Request interrupted by user]

Task: upgrade Tessera Records' features. I'll tell you which. Leave the eight records from my M1 Trial email alone: an M1 session enters them later. At the end, write what changed in the app in its CLAUDE.md.

1. problem with readability. text is cramped, specifically in business and records with large text bodies, specifically in business section. they need to be more presentable

2 open questions, decisions, and other ssections with similiar structure should can also use a face lift for better readability + questions sohuld be numbered

3 decisions list should have titles and excerpt + read more

Needs attention
2 subscription charge(s) to record
1 asset(s) in the IP register without a file
asset notice links to the page not the record with the issue

expenses
drop down menu for currency
when part of sub is chosen, fields can be filled from the sub

design should be in documents menu. the menu s hould  be gdd, tdd + the main catedories or sectoins such as features, pillard, etc

[Request interrupted by user]

sorry i keep missclicking

---

### Claude · 2026-10-28 14:34

No problem: I have the full list now, including the two additions (decisions and similar lists, and the decisions list with titles, excerpts and Read more). Continuing.

---

### Dani · 2026-10-28 14:34

[Request interrupted by user]

i'm not editing the prompt.

---

### Claude · 2026-10-28 14:34

Understood, I'll work from the list as it stands. Checking how a decision's label is made now, since decisions have no title field.

Decisions have no title of their own: the list shows the decision's first line. Now the records part: Needs attention and the expense form.

Baseline screenshots done, no problems. Looking at the pages Dani named.

The made-up records are too short to show the cramping, so I'll add long made-up texts to the screen check. Reading the business plan's fields first.

Reading the shared list code (sorting, and the list beside an open record) before redesigning the lists.

---

### Dani · 2026-10-28 14:37

(sent while Claude was working) i need to clarify

In the dashboard, i get noticies like 
"Needs attention
2 subscription charge(s) to record
1 asset(s) in the IP register without a file"

they link to the page not the record with the issue

---

### Claude · 2026-10-28 14:37

That matches how I read it: each notice should open the record itself, such as the subscription whose charge is due or the asset that has no file. Now the expense form.

I have what I need for the records part. Now the design part's other list pages, to see which share the questions' and decisions' structure.

I have the full picture. Two of the changes need your answer before I build them, because one adds a field and the other can mean two different things.

Both as recommended. Building now: Title field and fixed question numbers first, then the screens.

Status: Dani, I'm adding the Title field and the question numbers to the design part's server now. The screens come next, then the records part, tests and screen checks.

Adding migration 12 and the server side.

Still on the server side: making search find decision titles too.

The files use Windows line endings; switching to the Edit tool.

Now the lists the screens read: decisions get their title, questions their fixed number.

---

### Dani · 2026-10-28 14:42

(sent while Claude was working) i want a bring in button and items need to be brought in in the dashboard. or at lease a noticable note that there are updates to be brought in in the dashboards. it's the feature i'm using the most

---

### Claude · 2026-10-28 14:42

Got it: I'll put the Bring in button on the Overview, with a list of what's waiting, in a panel at the top that's hard to miss. Reading how the Bring in page works first.

Rewriting the attention list so each kind lists its records.

Line endings are mixed in the working copy, and git stores them all the same way, so that's harmless. Now the Overview on screen: the Bring in panel and the Needs attention links.

Writing the Overview's Bring in panel, shared with the Bring in page's button.

Now the Bring in page uses the same bring-in call.

The Overview no longer needs the old count of waiting items, so I'm removing it from the server and updating its two tests.

sed's quoting misfired on two lines; fixing those with the Edit tool.

Now the currency menu and filling an expense from its subscription.

Now the subscription fill, in the expense form's setup.

Records part's logic is done. Before the design part's screens, a look at how a decision and a feature page look now.

Now the open questions list as numbered cards.

Now the decisions list: title, date, excerpt with Read more.

Features, research and pillars get the same cards.

Lists done. Now the question's page shows its number, and the decision page gets the Title field and reading text.

Rewriting the decision page's middle part.

Decision page done. Now the business page. Checking what the server sends for its fields.

Marking the business plan's one-line answers as short, so they can sit side by side.

Business page logic done. Now the menu: the Design menu moves into Documents, with GDD and TDD first.

Now the design part fills in the GDD and TDD links when the app starts.

Now the styles: the menu, the Overview panels, the cards, the business layout and reading text.

Syntax is clean. Removing one style rule nothing uses any more, then running the tests.

All 247 tests pass. Now new tests for the new rules. Reading the existing decision and question tests for their style.

Writing the new design-part tests.

Both pass. Now a records-part test that Needs attention names each record.

It passes on its own. Running the three files together again to see whether the failure repeats.

It fails two times out of three when run alongside the other files. Getting the error message.

This is an older test that fails at random, not something I changed: when both owners are saved within the same millisecond, their order is left to chance. Checking how the export orders them.

Every records table has a row number, so ties can fall back to the order the rows were saved. A one-line fix:

All 251 tests pass. Now the screen check: I'm adding long made-up texts (business plan answers, decisions with titles, several questions, a GDD and a TDD) and checks for the new behaviour.

No problems on any of the 192 page views, and every new check passed. Now looking at the screens themselves.

The business page now has the section list with answer counts, and the Overview's Needs attention links each record. Checking the lists and the decision page.

The lists read well: numbered questions grouped by topic, decisions with title, date, excerpt and Read more. Now the decision page and the expense form.

A name clash with the script's own `waiting`; renaming mine.

---

### Dani · 2026-10-28 15:04

(sent while Claude was working) the topic order drownwn list is in it's own line so better make them tabs for less clicking. or links

(sent while Claude was working) these are also too big. the text size can be the same as the previous list but not this gigantic. it's not a forum

---

### Claude · 2026-10-28 15:10

Now each list: shorter tab labels, and the count moves onto the tabs' line.

Now the compact styles.

---

### Dani · 2026-10-28 15:11

(sent while Claude was working) expenses form
date still requested twice. if they differ from each other let me know otherwise one date please
just sek, eur and dollar in currency
fix that in all similar record entries

(sent while Claude was working) What they’re made of and Every document 
no need for them so remove them please

---

### Claude · 2026-10-28 15:16

Noted, all three. Quick check of which forms ask for two dates.

Status: the one-date forms, the three currencies and the menu cleanup are in. I'm adding a check for the single date to the screen check, then running it.

The compact rows look right. One bug: the order tabs printed as text instead of buttons. Fixing it.

Both read well. Next, rule 4: rehearse the database upgrade on a read-only copy of your live design database, looking only at counts.

Updating the spec to 3.17: the menu, the dashboard's Bring in, and the forms.

Now the system documentation.

Now the plain-language guide.

Editing the guide in the sections the changes touch.

Now the design part's data model in its plan.

All 251 tests pass. Now the handover in the app's CLAUDE.md, including what changed for the M1 session.

Docs done. Checking what will be committed.

Only the files I meant to change. Backing up both databases before committing and restarting your app.

Committed and pushed. Now restarting your app so its server matches the new screens (the upgrade runs on start).

Your app is running again and answering. (The other `node server.js` is the M1 trial's, which I left alone.) Confirming the upgrade ran on the live design database, version number only:

Everything you asked for is done and your app is restarted on v0.18.0. Reload the page in your browser to see it. All 251 tests pass and the screen check found no problems on any page. The eight M1 Trial records are untouched.

**What changed**
- **Overview:** it opens with Bring in. It lists everything waiting, including design changes and commits made since they last came in on their own, with a **Bring in all** button. The Bring in page is still there for choosing. When nothing waits, it says so in one line.
- **Needs attention:** each record is listed under its kind and opens the record itself. A subscription's charge can be recorded right there.
- **Menu:** Documents starts with GDD and TDD, then Features, Open questions, Decisions, Pillars, Assets and Topics, then All documents, Queries and Names. The Design menu and the two headings are gone.
- **Lists** (features, questions, decisions, research, pillars): compact rows at the old table's text size, with two grey lines of text and Read more. They are grouped by topic, and the order is a row of tabs on the count's line.
- **Open questions** have fixed numbers, Q1 to Q112, shown in the app only.
- **Decisions** have an optional title, shown in the lists but never printed. A saved decision's page now shows its text to read, and only the title can still change. None of your 143 decisions has a title yet, so the lists show each one's first sentence.
- **Business plan:** the sections are listed on the left with how many answers each has, such as 3/6. Each question shows the English with the Swedish under it, and the text sits in a column that's easier to read.
- **Forms:** the currency is a menu of SEK, EUR and USD in expenses, subscriptions and funding. An expense shows one date. Choosing its subscription fills in what's still empty.

**Side effects**
- Until I restarted the app at 15:31, you were seeing the new screens with the old server behind them. Question numbers and the Needs attention links didn't work during that time; they do now.
- One older test sometimes failed at random. Records saved in the same millisecond had no fixed order, so I made them keep the order they were saved in.

I rehearsed the database upgrade on a copy of your design database first, looking only at counts, and nothing was lost. It took about an hour (14:30 to the commit at 15:31). The upgrade's notes for the next M1 session are in the app's CLAUDE.md.

I can suggest short titles for the 143 decisions in chat for you to check, if you'd like.

---

### Dani · 2026-10-28 15:35

question. is it too much to get tr to extract the data from uploaded invoives in the expences form?
lilke if i don't have an invoice that's fine, but if i do and i upload it, how complicated would it be to get tr to get the costs vat date and names and invoiec #

---

### Claude · 2026-10-28 15:36

Checking one thing before answering: whether Windows' own text reader for images (OCR) is available on your computer, since that decides how photos of receipts could work.

Not too much. It's a medium-sized job, and it can all run on your computer for free.

**How it would work.** You add the invoice file in the expense form, as now. The app reads it and fills in the empty fields: date, total, VAT, supplier and invoice number. A note says what it filled, for example "Filled in from the invoice: date, total paid, VAT, invoice number." You check the fields and press Save. Nothing is saved on its own, and nothing you typed is overwritten, the same rule as choosing a subscription.

**Two kinds of invoice:**
1. **PDFs from online purchases**, such as Adobe or Steam. These hold real text, so the app can read it directly. This works well.
2. **Photos or scans of paper receipts.** These are only pictures, so they need text recognition. Windows has this built in, and I just checked: yours has it for Swedish and English. So this costs nothing and needs no new software. It's less reliable, though: a blurry or crumpled receipt gives gaps.

**What it gets right, and what it doesn't:**
- **Usually right:** the total, the date and the invoice number, because invoices label them ("Att betala", "Total", "Fakturanummer", "Invoice #").
- **Usually right when shown:** VAT. Foreign invoices often show none, which is correct for them.
- **Hardest:** the supplier's name, because every invoice puts it somewhere different. The app can remember a supplier after you correct it once, so the next invoice from them comes out right.
- **With a subscription:** most fields already come from it, so the invoice only adds the date and the invoice number.

**What I wouldn't do:** send invoices to an online service, such as an AI that reads them. It would cost money every month, and your invoices would leave your computer.

**Size:** about a day's work for me, both kinds together. Most of that is testing on made-up invoices in different layouts, never your real ones. It needs no database change.

**Already works today, without building anything:** put an invoice in our chat, and I'll read it and propose the expense, with the file attached, for your Bring in button.

I recommend building it, both kinds at once. Shall I?

---

### Dani · 2026-10-28 15:40

nah iht's not worth it

---

### Claude · 2026-10-28 15:40

Fine. Putting an invoice in our chat still works whenever you want it. I'll add this to the handover's list of offers you turned down, so no later session offers it again.

I've added it to that list in the handover, and committed and pushed the change.

---

### Dani · 2026-10-28 15:40

no just ignore the whole this XD

---

### Claude · 2026-10-28 15:40

Taking the note out again, with a new commit so git's history stays as it is.

I've taken the invoice note out of the handover again, so nothing records the invoice idea any more. I did it as a new commit, because your rules say saved git versions are never changed. That commit is pushed.

---

### Dani · 2026-10-28 15:57

it was nicer when there was a line separating gdd and tdd from the menu items below them

new expense
part of sub and what was bought fields should swap places

decisions and decisions aren't clearer sadly. the table format worked better than rows of div boxes
The attached pic looks better. the only change is that the massive block of text sohuld be expaandable instead

pillars looks great

Open questions
the bold white titles are blinding when the text is lond rather than a small title. too harsh on the eyes

assets page is nice and clear

topics is not clear
it's still difficult to read

all documents looks very clear and nice

how many templates does tr have?  there seems to be many

---

### Claude · 2026-10-28 15:58

Got it. Before changing anything, I'm checking the topics page and the hours table you sent, so I can answer the templates question accurately.

Features back to a table:

Now topics, with the tree easier to see.

Now the records part: Read more in its list tables, and the expense form's swap.

Now the styles for Read more, the menu line and the topic tree.

Updating the screen check for the tables, with a fuller made-up topic tree.

---

### Dani · 2026-10-28 16:02

(sent while Claude was working) what no!!! i didn't ask for that. i said pillars look great. i hate two-line truncated text entries and prefer tables. too late now. finish first and let's see

---

### Claude · 2026-10-28 16:06

It works as built. Finishing: tests, documentation, commit, restart.

v0.18.1 is live and your app is restarted, so reload the page. All 251 tests pass and the screen check found no problems.

**What changed in this round**
- **Tables again:** features, open questions (with a No. column), decisions and research are tables, sorted by clicking a heading.
- **Pillars:** I didn't touch them; they're as you saw them.
- **Long text:** I read "expandable" wrongly. I made long text show two lines with Read more, in these tables and in the records part's tables such as Hours. You've said you hate that, so it's the first thing to fix once you've looked.
- **Topics:** main topics are heading rows, the topics under them are indented, and one column says what each holds, such as "1 feature · 2 decisions".
- **Menu:** a line separates GDD and TDD from the items below them.
- **New expense:** "Part of a subscription" comes right after the date, and "What was bought" moved down to where it was.

**My suggested fix for the long text, once you've looked:** each row shows only its name or first line, with a small ▸. Clicking ▸ opens the whole text in place, so nothing is ever cut off halfway. Tell me if that's what you meant, or what you'd prefer.

**How many templates?** About eight page layouts:
1. **Tables:** most list pages, in both parts.
2. **Rows:** pillars only.
3. **Records part forms:** fields side by side, with Save on the right.
4. **Design part forms:** fields stacked, with the list of records on the left.
5. **A document:** its printed preview, with its parts beside it.
6. **The business plan:** its sections on the left.
7. **Panel pages:** Overview, Planning, Summaries, Bring in and Backups.
8. **Search and history pages:** search results, and comparing versions.

The difference you notice most is probably 3 and 4. They come from the two apps joined on 22 October and were never made alike. I'd make them one style, as a separate change, whenever you want.

---

### Dani · 2026-10-28 16:18

decisions looks better but maybe simply making the first colum the dates
i'm too tired to think. you need to make examples isnteead of recoding over and over. 
agreed about the expandable text

---

### Claude · 2026-10-28 16:18

Doing all three: dates first in decisions, and the ▸ text with nothing cut halfway. I'll also add your rule to the app's handover: examples first, then code.

Now the records part's tables: the first sentence in full, ▸ for the rest.

---

### Dani · 2026-10-28 16:19

(sent while Claude was working) actually i have a bigger task. you know how photo albums in phones are arranged by month. you should do that. instead of onee massive list

---

### Claude · 2026-10-28 16:25

Working. The ▸ is too small, so I'm making it easier to hit, then committing.

---

### Dani · 2026-10-28 16:25

(sent while Claude was working) decisions looks great nw

---

### Claude · 2026-10-28 16:26

The shell mangled the file paths in my little screenshot script; writing it with the Write tool instead.

The examples look right. Opening the page in your browser:

v0.18.2 is live, so reload the app to see it. Long text in the lists stays closed until you click ▸, which opens it whole, and decisions show the date first. All 251 tests pass.

I've opened a page in your browser with three made-up versions of the Hours list grouped by month, newest first. Each month shows its count and total, such as "October 2026 · 4 days · 28 hours":
- **A:** one table, with a heading row for each month.
- **B:** a folding box for each month. The newest month is open and older months stay closed until clicked.
- **C:** buttons for the months along the top, showing one month at a time.

If the page doesn't open, it's at `C:\Users\someo\AppData\Local\Temp\claude\c--Users-someo-Dropbox-Studio-Tessera-Records\63936b06-8a16-403e-860a-d713928864ad\scratchpad\months-examples.html`.

Two questions, whenever you're rested:
- **Q1.** A, B or C? I recommend **B**. You mostly work in the current month, which is already open, and the page stays short however long the list grows.
- **Q2.** Which lists? I recommend the records lists that have dates: Hours, Expenses, Funding, Timeline and Original files. I'd leave Decisions and Research as they are, since you just said Decisions looks right.

I also added your rule to the app's handover: before changing how a screen looks, I show examples with made-up records first.

---

### Dani · 2026-10-28 18:45

wow they're nice. i want a combination from a and c
a because the table has two heading-rows. it's relaxing to the eye, 
Date	Hours	Type of work	Description	Who
October 20264 days · 28 hours

and from c the tabs. they limit scrolling. it can stay in one page

This session is being continued from a previous conversation that ran out of context. The summary below covers the earlier portion of the conversation.

<tools-used-before-summary>AskUserQuestion, Bash, Edit, Grep, PowerShell, Read, Write</tools-used-before-summary>
Summary:
1. Primary Request and Intent:
   - **Task (session prompt):** upgrade Tessera Records' features, which Dani names. "Leave the eight records from my M1 Trial email alone: an M1 session enters them later. At the end, write what changed in the app in its CLAUDE.md."
   - **First request list:**
     - Readability of the business section and long-text records.
     - A face lift for open questions, decisions and similar sections, with numbered questions.
     - The decisions list with titles, excerpts and Read more.
     - Needs attention items link to the record with the issue, not the page.
     - Expenses: a currency drop-down; choosing the subscription fills in fields.
     - The Design menu goes into Documents: GDD, TDD, then the main categories (features, pillars and so on).
   - **Added mid-work:** a Bring in button and the waiting items on the dashboard (the Overview), "it's the feature i'm using the most".
   - **Later feedback, all done:**
     - Order tabs instead of the drop-down.
     - Compact rows, not "gigantic", "it's not a forum".
     - One date on expenses: tell her if the two dates differ in meaning.
     - Only SEK, EUR and USD, in all similar forms.
     - Remove the menu headings "What they're made of" and "Every document".
     - A line separating GDD/TDD from the items below.
     - Swap "Part of a subscription" and "What was bought".
     - Tables, not rows; massive text expandable; no two-line truncation.
     - Decisions: the date as the first column.
     - Open questions: no harsh bold white titles.
     - Topics clearer.
   - **New rule from Dani:** "you need to make examples instead of recoding over and over". It is in CLAUDE.md §5.
   - **Newest request:** "you know how photo albums in phones are arranged by month. you should do that. instead of onee massive list". The examples were made; waiting for her choice.
   - **Invoice reading:** Dani asked about it, declined ("nah iht's not worth it"), then said "no just ignore the whole this XD". Ignore it entirely and don't record it.
   - **Templates:** Dani asked "how many templates does tr have?" I answered: about eight layouts.

2. Key Technical Concepts:
   - **Platform:** Node.js 24 built-ins only (`node:sqlite`, `node:http`, `node:test`); no dependencies.
   - **Data:** append-only versioned tables, with a `current_*` view; `row_id INTEGER PRIMARY KEY AUTOINCREMENT`.
   - **Migrations:** design part 1–12 released (12 = `decisions.title`); records part 1–8.
   - **Front end:** files are served live from `public/`, `design/public/` and `records/public/`. Dani's browser picks up front-end changes on reload, but server changes need a restart.
   - **One server:** 127.0.0.1:4870, started with `Start Tessera Records.bat`; the app's process is `node  src\server.js`. A rehearsal copy runs on 4871 and the screen check on 4872. The M1 trial is a separate `node server.js` process, left alone.
   - **Screen check:** `scripts/check-screens.mjs` runs headless Edge with `--remote-debugging-port=0` and made-up records.
   - **Bring in:** `GET /api/bring-in/preview`, `POST /api/bring-in`; proposals live in `proposed-records.json`.
   - **Workflow:**
     - Back up first (`npm run backup`), then commit, push, and restart Dani's app.
     - Run `npm test`; 251 tests pass as of v0.18.2.
   - **Line endings:** mixed CRLF and LF with autocrlf=true; harmless. Use the Edit/Write tools rather than heredocs, which mangle backslashes.

3. Files and Code Sections:
   - **design/src/schema.js:** migration 12 appended:
     ```js
     // 12 — a decision's title (Dani, 2026-10-28): optional, shown in the app's
     // lists, never printed. Empty for the decisions saved before it.
     `
     ALTER TABLE decisions ADD COLUMN title TEXT;
     `,
     ```
   - **design/src/records.js:** `decisionTitle(decision)` returns the own title, or else the first sentence of the first line (`line.match(/^.+?[.!?](?=\s|$)/)`).
   - **design/src/store.js:**
     - `FIELDS.decisions` and `NAME_FIELDS.decisions` include `'title'`; `cleanDecision` adds `title: oneLine(f.title) || null`.
     - `listDecisions` adds `heading: fillIn(decisionTitle(x), world.names)`.
     - `questionNumbers(db)` uses `SELECT record_id FROM open_questions GROUP BY record_id ORDER BY MIN(row_id)`; `listQuestions` and `questionDetail` get `number`.
     - `questionDetail.answered_by.name` uses `decisionTitle`; `recordLabel` is unchanged, so print order is unaffected.
   - **design/src/search.js:** decisions are scored on their title too; the result title is `fillIn(decisionTitle(d), values)`.
   - **design/src/business.js:** `short: true` on address, postcode, town, phone, email, mobile, plan_name, start_month, vat_status and project_started.
   - **design/public/app.js:**
     - Helpers: `readable()`; `expandable(parts)` returns `{toggle, text}` (a ▸ button and hidden full text); `nameCell(href, name, {more, privateTag})`; `cardList` and `cardNode`, now used only by pillars, with order tabs.
     - List tables: features, questions (No. column `td.number` `Q${n}`), decisions (columns Date, Decision, Topic, Milestones), research and topics all use `sortableTable` with `nameCell`. Topics use tree classes `tree depth-N` and `tree-top`, and a "Records in it" counts column.
     - Decision page: a Title input; saved decisions show `.reading` text; the "Save title" button posts `{fields:{title}, expected_version}`.
     - The question page head shows `Open question Q${n}`. BROWSE uses `heading` for decisions and `Q${number}. label` for questions.
     - Business page: `splitLabel`, a `.bp-layout` section nav with counts, the `.bp-short` and `.bp-terms` layouts, and `form.classList.add('business-form')`.
     - `menuDocuments()` in `init()` fills `#menu-main-documents` with GDD and TDD links, found by `\bgdd\b` / `\btdd\b` in the file name.
   - **records/src/reports.js:**
     - `attentionRecords(db, today)` returns lists of `{table, record_id, name, detail}`; an asset contributor's item is its asset.
     - `attentionList` gives the counts, as the lists' lengths.
     - The endpoint `/api/reports/attention` returns `attentionRecords`.
   - **records/src/bring-in.js and records/src/server.js:** `pendingCount` and `/api/bring-in/pending` are removed.
   - **records/src/records-read.js:** `ORDER BY created_at, row_id`.
   - **records/public/app.js:**
     - Overview: `waitingToBringIn(pv)`, `bringInKeys(waiting, keys)`, `bringInPanel(pv)` ("Bring in all N" / "Bring it in"), `ATTENTION_KINDS` and `attentionPanel` (links `#${addressOf(table)}/${id}`, plus a "Record the charge" button).
     - Forms:
       - `OPTIONS.currency` is SEK, EUR and USD; the currency fields in expenses, subscriptions and funding have `type: 'select'`.
       - The expense fields put `subscription_id` second (after `event_date`); `description` (wide) comes after `expense_category`.
       - `enhanceExpenseForm`: the subscription fill (`fromSubscription`, with `filledIn`) and the invoice-date tickbox `invoice_other_day`.
       - `enhanceDocumentForm(form)`: the file's own date is hidden, with a note and a "Change it" link; `fileChosen(date)`.
     - Lists: `expandable(text)` shows the first sentence plus ▸ for the rest; `showList` uses `cell()` for strings over 160 characters.
   - **public/index.html:** the Design menu is merged into Documents; `<div id="menu-main-documents"></div>` comes first; "Documents" is renamed "All documents"; no headings.
   - **public/style.css:**
     - Writing and reading: `.reading`, `textarea.writing` (52rem max, line-height 1.7).
     - Panels and the menu: `.bring-in`, `ul.attention`, the `#menu-main-documents:not(:empty)` border-bottom.
     - List pieces: `.expand-toggle`, `.expand-text`, `td.number`, the tree classes, the `.card*`/`.order-tab` rows for pillars.
     - Business plan: the `.bp-*` layout.
     - `.clamp` and `td.research-title` are removed.
   - **Tests:**
     - `design/test/decisions.test.js`: a title test and a v0.17.1 upgrade test.
     - `design/test/questions.test.js`: a numbers test.
     - `records/test/phase3.test.js`: an `attentionRecords` test.
     - `bring-in.test.js` and `v011.test.js` updated for the removed `pendingCount`.
   - **scripts/check-screens.mjs:**
     - Long made-up texts, titled decisions, more questions, the business plan, a made-up GDD/TDD and topic tree; the `exchangeDir` variable.
     - Pages `decision/${ids.titled}`, `decision/new`, `business?tab=idea` and `business?tab=admin`.
     - Checks: Overview attention links; Bring in from chat (`fromChat`); the expense currency SELECT, one date and subscription fill; menu GDD/TDD; question numbers from `td.number`.
   - **Docs:**
     - SPEC.md v3.17 (§2.1 menu, §30 dashboard, the 3.17 change note).
     - `records/docs/SYSTEM.md` §3i, plus rows 0.18.0, 0.18.1 and 0.18.2.
     - README.md.
     - `design/PLAN.md` (`decisions.title`, migrations 1–12).
     - CLAUDE.md: Status v0.18.2, "What v0.18.0 changed", Lists (v0.18.2), the M1 open item noting what changed for the records, rules 4.1/4.5 updated, and the §5 rule: "**Before changing how a screen looks, show Dani examples to choose from,** made with made-up records, instead of building and rebuilding it (Dani, 2026-10-28). She prefers tables, and dislikes long text cut off at two lines: long text stays closed behind ▸ until opened whole."
     - `package.json` version 0.18.2.
   - **Scratchpad (`C:\Users\someo\AppData\Local\Temp\claude\c--Users-someo-Dropbox-Studio-Tessera-Records\63936b06-8a16-403e-860a-d713928864ad\scratchpad\`):**
     - `upgrade-rehearsal.mjs` (counts only).
     - `shot.mjs` (headless Edge screenshot: url, out, width).
     - `months-examples.html` (examples A, B and C, using the app's `style.css`, with made-up hours from Aug–Oct 2026), and its screenshot `months.png`.

4. Errors and fixes:
   - Node string replace failed on CRLF files; switched to the Edit tool.
   - A sed edit with quote escaping misfired on server.js and a test; fixed with the Edit tool.
   - The v011 "facts" test was flaky (owners created in the same millisecond); fixed the `listCurrent` order with the `row_id` tiebreaker.
   - check-screens: `const waiting` clashed with the CDP `waiting` Map; renamed it to `fromChat`.
   - The order tabs showed "[object HTMLButtonElement]"; added the missing spread in `tabs.replaceChildren(..., ...[...].map(...))`.
   - The heredoc mangled backslashes in `shot.mjs`; rewrote it with the Write tool.
   - **User feedback on design misreads:**
     - Cards were too big.
     - Dani preferred tables.
     - "expandable" means closed behind ▸, never a two-line clamp.
     - Pillars rows are fine as they are.
     - "make examples instead of recoding over and over".
   - Dani saw new front-end files against the old server before the restart; resolved by restarting.

5. Problem Solving:
   - **Upgrade rehearsal (counts only):** version 11 to 12; 176 decision versions and 128 question versions kept; 143 decisions all with a heading; 112 questions with 112 distinct numbers. The copy was deleted. The live database is now at version 12 with the title column.
   - **Results:** all 251 tests pass; the screen check showed 198 views with 0 problems at each step.
   - **Commits pushed:**
     - 62d8cd2 (v0.18.0)
     - f8a8d71 and 4504ad4 (the invoice note added, then removed)
     - 6f0d58f (v0.18.1)
     - 4ab7471 (v0.18.2)
   - Dani's app is restarted on v0.18.2 and answers 200.

6. All user messages:
   - "Task: upgrade Tessera Records' features. I'll tell you which. Leave the eight records from my M1 Trial email alone: an M1 session enters them later. At the end, write what changed in the app in its CLAUDE.md. 1. problem with readability. text is cramped, specifically in business and records with large text bodies, specifically in business section. they need to be more presentable 2 open questions can also use a face lift for better readability + questions sohuld be numbered / Needs attention 2 subscription charge(s) to record 1 asset(s) in the IP register without a file asset notice links to the page not the record with the issue / expenses drop down menu for currency when part of sub is chosen, fields can be filled from the sub / design should be in documents menu. the menu s hould be gdd, tdd + the main catedories or sectoins such as features, pillard, etc"
   - The same message resent with "2 open questions, decisions, and other ssections with similiar structure should can also use a face lift for better readability + questions sohuld be numbered / 3 decisions list should have titles and excerpt + read more", then "sorry i keep missclicking".
   - "i'm not editing the prompt."
   - "i need to clarify In the dashboard, i get noticies like 'Needs attention 2 subscription charge(s) to record 1 asset(s) in the IP register without a file' they link to the page not the record with the issue"
   - AskUserQuestion answers: Q1 "Yes, a Title field (Recommended)"; Q2 "Fixed, app only (Recommended)".
   - "i want a bring in button and items need to be brought in in the dashboard. or at lease a noticable note that there are updates to be brought in in the dashboards. it's the feature i'm using the most"
   - "the topic order drownwn list is in it's own line so better make them tabs for less clicking. or links"
   - "these are also too big. the text size can be the same as the previous list but not this gigantic. it's not a forum" (with a screenshot of her Research list)
   - (pasted) "expenses form date still requested twice. if they differ from each other let me know otherwise one date please just sek, eur and dollar in currency fix that in all similar record entries"
   - "What they're made of and Every document no need for them so remove them please"
   - "question. is it too much to get tr to extract the data from uploaded invoives in the expences form? lilke if i don't have an invoice that's fine, but if i do and i upload it, how complicated would it be to get tr to get the costs vat date and names and invoiec #"
   - "nah iht's not worth it"
   - "no just ignore the whole this XD"
   - "it was nicer when there was a line separating gdd and tdd from the menu items below them / new expense part of sub and what was bought fields should swap places / decisions and decisions aren't clearer sadly. the table format worked better than rows of div boxes The attached pic looks better. the only change is that the massive block of text sohuld be expaandable instead / pillars looks great / Open questions the bold white titles are blinding when the text is lond rather than a small title. too harsh on the eyes / assets page is nice and clear / topics is not clear it's still difficult to read / all documents looks very clear and nice / how many templates does tr have? there seems to be many" (with a screenshot of the Hours table)
   - "what no!!! i didn't ask for that. i said pillars look great. i hate two-line truncated text entries and prefer tables. too late now. finish first and let's see"
   - "decisions looks better but maybe simply making the first colum the dates / i'm too tired to think. you need to make examples isnteead of recoding over and over. / agreed about the expandable text"
   - "actually i have a bigger task. you know how photo albums in phones are arranged by month. you should do that. instead of onee massive list"
   - "decisions looks great nw"

7. Pending Tasks:
   - **Month grouping:** get Dani's choice of A, B or C from the examples page, and which lists to apply it to. Then build it, following the new rule (examples first, then code).
   - At session end: the conversation text and handovers per the general rules, when Dani ends the session. The M1 records stay untouched.

8. Current Work:
   - **Done:** v0.18.2 is deployed (commit 4ab7471, app restarted).
   - **Built for the month request:** `C:\Users\someo\AppData\Local\Temp\claude\c--Users-someo-Dropbox-Studio-Tessera-Records\63936b06-8a16-403e-860a-d713928864ad\scratchpad\months-examples.html`. It shows three versions of the Hours list with made-up records, using the app's `public/style.css`:
     - A: one table with a heading row per month, such as "October 2026 · 4 days · 28 hours".
     - B: a folding box per month, newest open, older ones closed (details/summary).
     - C: one month at a time, with month buttons along the top.
   - Verified with a screenshot (`months.png`) and opened in Dani's browser with Start-Process. No message has gone to Dani about it yet.

9. Optional Next Step:
   Tell Dani the examples page is open, and ask briefly and plainly, since she is tired:
   - **Q1:** A, B or C. Recommend B: the current month opens with no click, and the page stays short.
   - **Q2:** which lists. Recommend the records part's dated lists (Hours, Expenses, Funding, Timeline, Original files), and leave Decisions and Research, which she just approved ("decisions looks great nw").
   
   Mention that v0.18.2 is live, with decisions dates-first and the ▸ text. Do not build anything until she chooses. Her request: "you know how photo albums in phones are arranged by month. you should do that. instead of onee massive list", together with her rule "you need to make examples isnteead of recoding over and over."

If you need specific details from before compaction (like exact code snippets, error messages, or content you generated), read the full transcript at: C:\Users\someo\.claude\projects\c--Users-someo-Dropbox-Studio-Tessera-Records\63936b06-8a16-403e-860a-d713928864ad.jsonl
Continue the conversation from where it left off without asking the user any further questions. Resume directly — do not acknowledge the summary, do not recap what was happening, do not preface with "I'll continue" or similar. Pick up the last task as if the break never happened.

The messages after this summary are the most recent messages from before compaction, kept verbatim. The summary was written without seeing them, so something it says has not happened yet may already have happened in them.

---

### Claude · 2026-10-28 18:45

Size: about an hour, covering the build, tests, screen check, docs and the restart.

Building it now: month buttons above each dated list, with the month's heading row inside the table.

Writing the month code into the list page now.

---

### Dani · 2026-10-28 18:47

(sent while Claude was working) but avoid using white text for long centences

---

### Claude · 2026-10-28 18:47

Noted: long sentences won't be bright white. I'll give them a softer colour. Checking the colour settings now.

Adding the softer colour for long text and the month styles to the stylesheet.

Now the list cells: columns that hold long text get the softer colour.

Now adding checks for the month buttons to the screen-check script.

---

### Dani · 2026-10-28 18:48

(sent while Claude was working) also i think it would be great to aply it to assets and topics as well. tabs would be the cetegories

---

### Claude · 2026-10-28 18:49

Noted. On the design part's Assets page, the tabs will be the asset categories. On Topics, they'll be the top-level topics, each with its subtopics. Looking at both pages now.

---

### Dani · 2026-10-28 18:49

(sent while Claude was working) again mamke sure the bold white text is used for short titles only. i don't want to go blind

---

### Claude · 2026-10-28 18:49

Noted: bold, bright text only for short titles. I'll check every bold style in the stylesheet as part of this change.

Found one bold, bright label that holds long sentences: the business plan's questions. Checking the search results next.

Bold, bright text will stay on short titles only: headings, month names and record names. Long text gets the softer colour everywhere, including every table cell. Making those edits now.

Updating the screen check to match.

Now the design part's Assets and Topics. Checking its helper for building elements first.

Rewriting the Topics page now.

Now the Assets page.

Adding the styles for the Topics heading row, so only the main topic's name is bold.

Now checks for the Assets and Topics tabs. Looking at the made-up design records the screen check creates.

---

### Dani · 2026-10-28 18:53

(sent while Claude was working) let me know when this conversation is finished. i already have a prepped prompt for th enext one

---

### Claude · 2026-10-28 18:54

I'll tell you when it's done. What's left: tests, the screen check, the docs, the commit and push, a restart, and saving this session's conversation text. Running the tests and the screen check now.

Funding with no records crashed, because there was no month to show. Fixing that.

The screen check passes: 198 views, no problems, including the new checks. Looking at three of the screenshots to confirm the layout.

The layouts look right. Two small fixes: the Topics tabs sit flush against the New topic button, and the heading row's summary wraps. Fixing both.

Updating the README, SYSTEM.md, the handover and the version number.

Running the tests and the screen check once more after the last style fixes.

All 251 tests pass and the screen check has 0 problems. Backing up, committing, pushing and restarting your app.

Pushed. Restarting your app now.

Your app is back up on v0.19.0. Now saving this session's conversation text, as the session-end rules require.

This conversation is finished, so you can start your next one with your prompt. v0.19.0 is live; reload the app to see it.

**What changed:**
- **Lists by month:** Hours, Expenses, Funding, Timeline and Original files show one month at a time, newest first. Month buttons sit above the table, and each month has a heading row under the column headings, such as "October 2026 · 4 days · 28 hours". When you save a new record, the list opens on its month.
- **Topics:** one main topic at a time. The main topic is the heading row, and only its name is bold.
- **Assets:** one main category at a time. The category menu is gone because the buttons replace it; the milestone menu stays.
- **Long text:** table cells, text boxes and saved text now use a softer colour instead of white. I removed bold from long sentences, such as the business plan's questions and the question titles in search results, so bold is only on short titles. I added this to the app's handover as a rule.

All 251 tests pass and the screen check found no problems. It was committed and backed up at 19:10, pushed to GitHub, and your app restarted.

You didn't say which lists to group by month, so I used the five above and left Decisions and Research as they are. Tell me if you want others.

The eight records from your M1 Trial email are untouched, left for an M1 session. This session's conversation is saved in `claude-logs\conversation-texts\2026-10-28 Tessera Records readable lists, Bring in on the Overview and lists by month.md`.

When you have a moment, double-click `Back up Claude logs.bat` in `Dropbox\Studio\claude-logs`.

---

### Dani · 2026-10-28 19:22

what ... it's not updated
where are the tabs where are the tabs and double heading rows?

---

### Claude · 2026-10-28 19:22

Those screenshots are from the examples page, not the app. It still shows the old A and C examples with made-up records ("Made-up Person"), and it will never change, so you can close that tab.

I've opened the app's **Working hours** page in a new tab. Scroll down to **Current**: the month buttons are above the table, and the bold month row sits right under the column headings. If it still looks old, press **Ctrl+F5** to reload the page fully.

The app on your computer is running the new version. I checked that it serves the month buttons.

---

### Dani · 2026-10-28 19:24

dude... did i write this or did i not????


wow they're nice. i want a combination from a and c
a because the table has two heading-rows. it's relaxing to the eye, 
Date	Hours	Type of work	Description	Who
October 20264 days · 28 hours

and from c the tabs. they limit scrolling. it can stay in one page

---

### Claude · 2026-10-28 19:25

Yes, you wrote it, and that's what I built into the app: the month tabs from C, with A's table and its second heading row. The examples page in your screenshots is older. I made it before you chose, so it still shows A and C apart, which made it look like nothing changed. I'll put your combination at the top of that page and open a screenshot of the real app's Hours page with made-up records.

---

### Dani · 2026-10-28 19:25

(sent while Claude was working) all this work you did and nothing

---

### Claude · 2026-10-28 19:25

Yes, you wrote it. The app already has it. The mistake was mine: I left the old examples page open, so A and C still looked separate.

I've opened two things for you:
1. **The examples page, updated.** "A + C, your choice" is now at the top: C's month buttons above A's table, with the second heading row "October 2026 · 4 days · 28 hours".
2. **A screenshot of the real app's Working hours page,** taken with made-up records. Under "Current" it shows the month buttons, then the table with the column headings and the month row under them.

Your app runs this version, and I checked that it serves the new code. I also opened the app's Working hours page in a new tab earlier. In that tab, scroll past "Log hours" to "Current".

If you still see one long list there with no month buttons, tell me and I'll find out why.

---

### Dani · 2026-10-28 19:26

dude. i'm looking at the app now
Do you see double headers and tabs?

---

### Claude · 2026-10-28 19:26

No, they're not on Decisions yet. I left Decisions and Research out because I assumed you wanted them kept as they were, and that was wrong. So far the tabs and second heading row are on Hours, Expenses, Funding, Timeline, Original files, Topics and Assets. I'm adding them to Decisions and Research now, by month.

Now Research.

Adding the screen checks for both.

The old screenshot is still open in your image viewer, which locks the file, so I'll use a new folder.

---

### Dani · 2026-10-28 19:29

(sent while Claude was working) this one please. for decisions. and topic only has one header not two

(sent while Claude was working) i don't like it when tabs are too cramped though. is it at all possible to make allign them.. like in a grid

(sent while Claude was working) do you think we need a correspondence section that saves all interactions and meetings? or do we have that already?\

---

### Claude · 2026-10-28 19:34

Short answer on correspondence: you mostly have it already. Details after I finish these fixes. Now the Topics heading rows:

Both look right: tabs in a grid, and two heading rows on Topics and Decisions. Reading the handover, which changed on disk, before I update it.

The app restarted on v0.19.1. Saving the conversation text again so it includes this last part.

v0.19.1 is live, so reload the app:
- **Decisions and Research** now show one month at a time, with the month buttons and the two heading rows.
- **Topics** has two heading rows too: the column headings, then a row like "Game · 3 topics under it · 5 records". The main topic and its subtopics follow below.
- **The tabs** line up in a grid, all the same width, with the name on the left and the count on the right.

All 251 tests pass, the screen check found no problems, and the change is committed, pushed and running.

**Correspondence:** you mostly have it already, so I don't recommend a new section.
- **Emails:** they go in **Original files** with the category **Correspondence**. Each one is stored unchanged, fingerprinted and dated, and that file is the proof.
- **Meetings:** they go on the **Timeline** as the type **Meeting**.

What's missing is small, and I'd add three things:
1. A **Correspondence** event type on the Timeline, for an email or message exchange.
2. A link from a timeline event to its email in Original files. That's one new optional field, `timeline_events.document_id`, a foreign key to Original files.
3. **People involved** chosen from People instead of typed, which was already on the "later" list.

Then the Timeline would show every meeting and exchange month by month, each linked to its proof.

**Q1.** Should I add these three in a later session? I recommend yes. Your handover says to build nothing until you decide, so I've only written the recommendation into it.

This session is finished. Its conversation text is saved, so you can start the next one with your prompt.

---

### Dani · 2026-10-28 19:43

in tables with large text like decisions, please widen the top or bottom or both top and bottom margins (whatever loos better) so that there is more space between the rows

---

### Claude · 2026-10-28 19:43

I'll give those rows equal extra space above and below the text. I'll apply it to the text-heavy lists: Decisions, Open questions, Features, Research and Topics, plus Hours and Timeline, whose descriptions run long. Lists of short values stay compact.

---

### Dani · 2026-10-28 19:43

(sent while Claude was working) q1 yeah good ideas

---

### Claude · 2026-10-28 19:49

Tests pass and the screen check is clean. Noted on Q1: I'll record the three correspondence additions as approved for a later session. Checking the screenshot first.

The rows have more space now. Updating the docs and the handover, including your yes on the correspondence additions, then committing and restarting.

v0.19.2 is live; reload the app to see it. Decisions, Open questions, Features, Research, Topics, Hours and Timeline now have more space between rows. I added the same amount above and below the text, because that looked best. Lists of short values, such as Expenses and People, stay compact. All 251 tests pass, the screen check found no problems, and the change is committed, pushed and running.

I've written your yes on the three correspondence additions into the app's handover, for a later session. That session will show you the setup for "People involved" before building it, since it needs a new place in the database to link events to people.

This session is finished, and the conversation text is saved, so you can start the next one with your prompt.

---

### Dani · 2026-10-28 19:51

no. not good. the one line records are good but the multi line ones don't leave space

---

### Claude · 2026-10-28 19:51

Making a quick examples page, as your rule asks, because "space" could mean two different fixes. I'll show three versions of your Decisions table with made-up records.

---

### Dani · 2026-10-28 19:51

(sent while Claude was working) the bottom margin needs to be the same for all records

---

### Claude · 2026-10-28 19:52

Adding a screen check that measures the space under every record, using a made-up decision with a long topic name, the kind that caused this.

The check passes at all three widths. Looking at the screenshot to confirm by eye.

---

Closing note (28 October 2026): Tessera Records v0.19.3 is live (commit 83a3eb7, pushed; app restarted). Lists go one month, main topic or main category at a time, with grid tabs and two heading rows; long-text lists have more room and the same space under every record. Dani approved the three correspondence additions for a later session (CLAUDE.md section 7); show her the People involved schema first. Dani has her own prompt for the next session. The eight M1 Trial records are untouched, for an M1 session.

---

This conversation's 32 pictures are in Tessera Records, in the original file "Pictures: 2026-10-28 Tessera Records readable lists, Bring in on the Overview and lists by month", in the order they came.
