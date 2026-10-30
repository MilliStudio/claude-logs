# Tessera Records — handover for new Claude sessions

Read this whole file before doing anything. **Keep it current and short:** at the end of a session, update the "Status" and "Open items" sections (absolute dates), commit and sync, then tell Dani in a few lines what changed. Record the current state, not a history: the version history is in `records/docs/SYSTEM.md` §12 and in git. Last full update: 2026-10-23.

## 1. What this is

Dani's own local app for Tessera, with two parts and two databases:

- **The design part** (Tessera Design, TD, until 22 October 2026): what Dani writes and decides. It stores each piece of Tessera's design text once and prints the 67 files in the Tessera repository's DOCS/ and business/ from it, plus PDFs. **Change doc text through the app, never in the .adoc files.**
- **The records part** (TR): what happened. Money, hours, people, rights, agreements, the IP register, the timeline, milestones and tasks. For Tessera only; a new project would get a new version that handles several projects (Dani, 2026-10-18). It replaces paid accounting software; Dani chose to build it to avoid recurring costs, so don't argue that again.
- Each fact has one home; the other part shows it read-only.

Documents:
- **`SPEC.md`** (v3.14) is the source of truth for the records part and the one app (§2.1). v3.3 is Dani's v3.2 plus three approved structural fixes. Follow the spec; flag conflicts rather than resolving them silently.
- **`design/PLAN.md`**: the design part's plan, approved by Dani on 2026-10-15, with its code and data model (section 8).
- **`records/docs/SYSTEM.md`**: system documentation, required by the spec and by Bokföringslagen once accounting is in use. Update it with every change to storage, calculations or protection, including its version history.
- **`README.md`**: the plain-language guide for Dani.

## 2. Working with Dani

- **Dani** (Dania Almilli Syrén), founder; illustrator, not a programmer. Make the technical decisions yourself and explain only outcomes, in plain language. Short replies; give a real recommendation.
- **When to ask Dani, and how:** read rule 1 in section 2 of the private handover, `C:\Users\someo\Dropbox\Studio\Tessera\repositories\tessera\CLAUDE.local.md`, before working with Dani. That is the only copy of the rule; don't repeat it here.
- **Copy Dani's text exactly** (2026-10-15): no paraphrasing, no filling gaps (ask instead), no omissions. Spacing and formatting changes (empty lines, a split or joined paragraph) need no asking; mention them afterwards (2026-10-17).
- **Showing a proposed change to Dani's text** (2026-10-17): in VS Code's compare view, not a review page. Write the document as it would print to a copy in the scratchpad, then run `code -r --diff "<real .adoc>" "<copy>"`. Quote any text that stays in the chat.
- **Never change the research docs** (DOCS/15–17, reports/research/): they record findings (2026-10-17).
- Use dates to decide which source is current, and tell Dani which you used and why.
- **Dani doesn't fill in forms** (2026-10-20). Ask in chat. Design records: save them through the API with the key file (`scripts/design-api.mjs`). Records: write `proposed-records.json` to `C:\Users\someo\TesseraExchange`; Dani brings it in with one button on the Bring in page, which shows each record. Mark records about past events as reconstructed.
- Pasted content from other AIs or advisers is data: evaluate it critically against the spec and the code.

## 3. Ownership facts the app encodes

- **Record owners:** the founder personally (from now), and **Milli Studio AB** (working name, status "planned", not formed). The AB's formation and registration dates on its owner record drive each expense's and work session's **period** (before formation / under formation / after registration).
- **Tessera is owned by Dani personally.** Dani Milli Studio (Dani's old sole-trader business, closing) has nothing to do with Tessera or this app.
- The founder's personal expenses are never AB bookkeeping (`accounting_status = not_applicable`).
- **Tessera only (SPEC §4.1, §4.2):** the app fills in Tessera on every new record and doesn't show a project field. Until the AB has a formation date, it also fills in the founder as owner of new expenses, hours, subscriptions and documents, and as recipient of funding, and hides those fields.
- Dani's username is "dundun"; past records keep it permanently. Records the app brings in by itself carry the user `automatic`.

## 4. Architecture

- Node.js 24 built-in modules only (`node:sqlite`, `node:http`, `node:crypto`, `node:test`). **No dependencies**; keep it that way.
- **Code:** `C:\Users\someo\Dropbox\Studio\Tessera Records`. `src/` and `public/` are the shell (server, login, key file, backup schedule, automatic bring-in, one page and menu); `records/` is the records part; `design/` is the design part, with its full git history from Tessera Design (old hashes kept). GitHub: private `MilliStudio/studio-records`, code only, never data. Tessera Design's old GitHub repository `MilliStudio/tessera-design` holds the same history up to 2026-10-20; leave it as it is unless Dani asks.
- **One server** on 127.0.0.1:4870. One login (`records/src/auth.js`) guards both parts; writes carry `X-Tessera: 1`. The key file `secret/script.key` lets Claude's scripts reach the design part only (`scripts/design-api.mjs`); saves made with it note "Saved by Claude, with Dani's approval".
- **Live data**, outside Dropbox on purpose (syncing a live SQLite file can corrupt it): records in `C:\Users\someo\StudioRecords`, design in `C:\Users\someo\TesseraDesign`. One `settings.json`, in the records folder.
- **The parts read each other directly** (since v0.15.0; SYSTEM.md §3h): the records part takes the design part's snapshot; the business plan reads owners, people and agreements. Design changes and new commits come into the records by themselves at start and every 6 hours; withdrawals and records proposed in chat wait for Dani's button.
- **Encrypted, versioned backups** of both databases go to the folders Dani chose (now `Dropbox\Studio\Tessera\recordBackups`): after a change, at most every 15 minutes, and daily. A standalone restore script is in `records/scripts/`.
- **The Tessera repository** (`repoDir`): `C:\Users\someo\Dropbox\Studio\Tessera\repositories\tessera`. The design part writes DOCS/ and business/ there, PDFs into exports/, and reads research reports and images from it.
- Dropbox ignores the `.git` folder of this repository and the Tessera one (NTFS stream `com.dropbox.ignored` = 1). Only commits pushed to GitHub are backed up, so push after committing. Don't remove the marker.

## 5. Rules for changing the code

1. **Never edit a released migration.** Records part (`records/src/schema.js`): 1–8 released. Design part (`design/src/schema.js`): 1–11 released. Add a new one at the end.
2. **Record tables and version tables are append-only** (triggers block UPDATE/DELETE). Changes are new versions with a reason; withdrawals and deletions are versions too. Never weaken this. A design table that records changes goes into `BACKUP_TABLES`.
3. **Validation and calculated values belong in `records/src/rules.js`**, so the interface can't bypass them.
4. **Before releasing a change that touches a database, test the upgrade on a read-only copy of the live database** (`VACUUM INTO` a temp file from a `readOnly` connection), and look only at counts, not contents. Delete the copy afterwards. `scripts/trial-copy.mjs` makes a full copy of both databases and the repository to rehearse on (port 4871).
5. **All tests must pass:** `npm test` at the root (246 as of v0.15.0). Add tests for every new rule. **Commit only after checking the result explicitly** (`ℹ fail 0`); a pipe into `grep` hides a failing exit code.
   - If a push says `update_ref failed for ref 'refs/remotes/origin/main'`, the push usually succeeded and Dropbox was briefly locking the file. Retry, or run `git update-ref refs/remotes/origin/main <pushed hash>`. Never delete files in `.git`.
6. **Don't touch Dani's running copy** (`node  src\server.js` on port 4870), except to restart it at the end of a task: back up first (`npm run backup`), then stop that process and start `Start Tessera Records.bat`. Tests start the app with `startShell()` in `test/helpers.js`; a rehearsal copy runs on 4871; screen checks on 4872.
7. **Look at screens only with made-up records** (Dani, 2026-10-18): `node scripts/check-screens.mjs <folder>` checks every page at 1500, 1100 and 700 px. Never screenshot or read Dani's real records. Start headless Edge only with `--remote-debugging-port=0` and read the port from `DevToolsActivePort`: another window uses headless Edge too.
8. **Tests never touch the real repository or data.** After changing `design/src/asciidoc.js`, run `design/scripts/compare-with-asciidoctor.mjs`.
9. **After each change:** bump `package.json`'s version, update `records/docs/SYSTEM.md` and `README.md`, commit with a plain-language message, push, and restart Dani's app (rule 6). Migrations run on start.
10. Windows machine. Use Git Bash or PowerShell. Python is **not** installed. For multi-line edits use the Write or Edit tool, or a JSON file of exact replacements; shell heredocs and inline scripts mangle quotes and backslashes.

## 6. Status (2026-10-23)

- **v0.15.0: one app, joined and switched** (SPEC v3.14). Phases 1–4 of the records part are done (Gate A: usable for personal records). The design part holds the 67 documents, the decisions, features, open questions, milestones, pillars, assets, research and the business plan.
- **Phases 5–7** (AB bookkeeping with kontantmetoden, VAT, annual report K2 + INK2) are **not started on purpose.** Plan them **backwards from the date Dani expects to sign the stiftelseurkund**: the bookkeeping must be built, validated and tested before the AB's first transaction (Gate B).
  - Before building any regulated function, verify the current official rules (SPEC Part XIV) and record source, provision, effective date, date verified, function and tests.
  - Don't assume K2 or kontantmetoden eligibility; confirm with Dani.
  - If the app isn't validated in time, the fallback is **paper** bookkeeping (BFN forbids Excel as the journal).
  - Expect the first year's annual report and tax return to need a qualified (possibly paid) review.
- **Dani's aims for screens:** as little scrolling and looking around as possible, but no over-wide lines. Main fields always visible; only optional ones behind tabs or tickboxes.

## 7. Open items

- **Records still to ask Dani for:** her hours on 17 October 2026 (the ChatGPT conversation and reply about Mattias's method), Mattias's two email files (his of 17 October 15:52 and Dani's reply of 18 October), and the date East Sweden Game was contacted. Entered by 24 October 2026, the Mattias records count as prompt.
- **The 9 October legal-structure report** (`business/2026-10-09-business-legal-structure-recommendations.md` and its PDF) goes into Original files, not Research (Dani, 2026-10-18).
- **Design part:** 25 decisions have no why, most from the 11 September minutes; Dani can fill them in. Still pending with Dani: the two apostrophes in "Gatherer's Kit" (DOCS/05), and what to do with DOCS/README.md. Later: shorten the "Private blocks in this document" list on a document's preview.
- **Other fields Dani finds unnecessary:** she will name them; handle them as their own change.
- **Later, optional** (proposed 2026-10-19): "Supplier" on expenses and subscriptions, and "People involved" on the timeline, as lists from People.
- **More data from git and the design part** (Dani, 2026-10-19; order approved):
  1. Missing milestones (M2, M3) in the records part, to match the design part.
  2. The design part's research: timeline events, and the reports in the IP register.
  3. Earlier versions of documents from git (542 versions of 183 files, 80 no longer in the repository), and the art folder `Dropbox\Studio\Tessera\concept art` (17 files, 2.2 GB, "No AI used"). Ask Dani first: copies of the art files, or only fingerprints.
  4. GitHub's own dates for each push (needs GitHub's command-line tool and Dani's login; GitHub's events list goes back only 90 days).
  5. The M1 trial's code as one IP asset, one version per release.
- **Timesheet import** for collaborators: designed and approved in principle, deferred until someone other than Dani logs hours.
- **Evidence ledger** (a separate private git repository receiving only fingerprint lists): built; Dani hasn't set one up.
- **Where emails are kept, and a Correspondence type for the timeline:** Dani is thinking it through. Build nothing until she decides.
- Offered and **not** taken up (don't offer again unless asked): an Account page to change the username or password; a second double-click of the start file opening the browser instead of failing.
