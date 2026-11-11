# Tessera Records: session pictures only from the chat, and type menus

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Private: never commit or share.

---

### Dani · 2026-11-11 23:27

this is a work tree conversation, but for tessera records not the app.
i think i made a mistake when i asked for evvery image in a conversation to be saved in tessera records, because it included images you create while coding and testing. the images i meant were those in requests and responses, not the ones you generate while coding

---

### Claude · 2026-11-11 23:27

I'll start by reading the session notes and the two scripts that save the pictures.

---

### Dani · 2026-11-11 23:28

(sent while Claude was working) so basically only images that i attach or the images you generate for me when explaining things or showing me things

(sent while Claude was working) you don't have to remove the old ones. but i guess we can stop importing any new ones

---

### Claude · 2026-11-11 23:31

Now `picture-book.mjs`: it will leave out any old `NNN Claude.png` screenshot, and its description in each PDF and record will match.

Now the rule in `Dropbox\Studio\CLAUDE.md`, rewritten where it stands:

Now I'll test the changed script on last night's secret tiles session log. It should keep your 9 pictures and the 6 I showed you, and drop the 21 screenshots.

The old folder had 9 of your pictures and this run found 3. I'll run the old script on the same log, so I can see whether anything besides the screenshots changed.

I've fixed this. From now on, the session folders and Tessera Records get only the pictures you attach and the ones I make or show you to explain something. The screenshots I take for myself while coding and testing stay out. The raw session logs still hold them, so nothing is lost.

- **The rule** in `Dropbox\Studio\CLAUDE.md` now says this, with your words and today's date.
- **[conversation-text.mjs](../../../claude-logs/conversation-text.mjs)** no longer saves my screenshots. On last night's secret tiles session it kept your 3 pictures and the 6 I showed you, and dropped 21 screenshots.
- **[picture-book.mjs](../../../claude-logs/picture-book.mjs)** leaves my screenshots out of the PDFs, even in session folders saved before this change. It now describes my pictures as ones I made or showed you.
- Both are committed and pushed to claude-logs.

As you said, the 127 picture PDFs already in Tessera Records stay as they are.

You brought in everything that was waiting at 23:25 last night, so nothing new waits in the Bring in file. The M1 handover still says those records are waiting, so I'll correct it when this session ends.

Q1. The 31 session folders since 5 November are still in `claude-logs\images`, holding 446 of my screenshots (106 MB). Your rule says to delete each folder once Tessera Records has its PDFs. I tried, but Claude Code's automatic permission check blocked it: the screenshots aren't in git, so the deletion can't be undone. I recommend deleting them anyway. Your pictures are safe in git and Tessera Records, and the raw logs keep the screenshots. Say yes and I'll run it.

---

### Dani · 2026-11-11 23:33

go ahead

---

### Claude · 2026-11-11 23:34

All 31 folders are gone, and each session's text now names its PDF in Tessera Records. Committing and pushing that:

---

### Dani · 2026-11-11 23:34

(sent while Claude was working) by the way where can i view the images in tr

---

### Claude · 2026-11-11 23:34

Done, and pushed. Now I'll find where Tessera Records shows these PDFs, so I can tell you exactly where to click.

I deleted the 31 folders, and that change is committed and pushed. Each session text now names its PDF in Tessera Records instead of linking the pictures. All 446 of my screenshots are gone from `claude-logs\images`, but the raw session logs still hold them.

**Where to view the pictures in Tessera Records:**

1. Open the **Original files** page from the menu.
2. Click the month button, for example **November 2026**. The page shows one month at a time.
3. Find the row named **Pictures: <date> <session topic>**, for example "Pictures: 2026-11-11 M1 secret tiles, crumbling doors and cave mouths".
4. Click **Open** on that row. The PDF opens in a new tab, with every picture numbered as in the session text, the time it came and the chat line it came with.

The pages I made for you are in the same list, named **Page: <title>**, for example "Page: Unwrapping the Map". From today on, each session's PDF will hold only your pictures and the ones I made or showed you.

---

### Dani · 2026-11-11 23:36

you can't filter to show document by type?

---

### Claude · 2026-11-11 23:36

I'll check what the Original files page can filter by.

---

### Dani · 2026-11-11 23:36

(sent while Claude was working) like the pictures

---

### Claude · 2026-11-11 23:37

No, the Original files page can't filter. It only splits the list by month, using the buttons above the table. You can't narrow it by type either. The Category column shows each file's type, but even a category filter wouldn't isolate the pictures. The picture PDFs from M1 sessions share the category **Design document** with real design documents, and the ones from Tessera Records sessions share **Technical document**.

Every picture PDF's name starts with "Pictures:", and every page's starts with "Page:". So the simplest fix is a search box on the Original files page that looks through all months at once. Typing "Pictures" would then list all 127 picture PDFs together, and "Page" all 10 pages.

Q1. Shall I add that search box to the Tessera Records app? I recommend yes. It's a small change, about half an hour, done in the Tessera Records app's own folder. It needs no new tables or fields and changes no records.

---

### Dani · 2026-11-11 23:45

isn't a menu with types better?

---

### Claude · 2026-11-11 23:45

I'll check the current list of types for original files before I answer.

Yes, a menu of types is better. It's one click, and you don't have to remember what the files are called. But it only works once the pictures have a type of their own. Right now 112 of the picture PDFs are typed **Design document**, mixed in with 382 other design documents. Choosing "Design document" would still show you everything.

So it takes three changes:

1. **A type menu** on the Original files page. Choosing a type shows only that type's files, still sorted by month.
2. **A new type, "Session pictures and pages"**, for the 127 picture PDFs and the 10 pages. From now on, `picture-book.mjs` gives new ones this type.
3. **Retyping the 137 existing files**, through the Bring in file with your one button. Each file gets a new version with the new type, and the old version stays in its history. No file is changed or lost.

The type only labels a file; nothing else in the app depends on it.

Q1. Shall I build it this way? I recommend yes. It's about 45 minutes of work in the Tessera Records app.

---

### Dani · 2026-11-11 23:47

go ahead thanks. you can add that wherever applicable as well

---

### Claude · 2026-11-11 23:47

I'll start with the Tessera Records app's own rules, then the code that draws its lists.

Now I'll list which record lists have a type-like field and how many records each holds, to see where a type menu would help.

The category list lives only in the app's screen code, not the database, so adding a type needs no database change. I'll check the design part's lists too, since you said "wherever applicable".

The decisions list already has topic and milestone menus. I'll copy their look, so the new menu matches what you already use.

Hours can carry a second type of work, so an entry with two types will count under both. Next I'll check how the records part's `el()` handles `selected: false`:

Good, `false` is skipped. Now I'll write the menu into the records part's lists.

The file is open in the editor now, so I'll apply the same six changes again.

Now the new type for original files:

That last call was a mistake on my part, a wrong path that changed nothing. Now `picture-book.mjs` gives new PDFs the new type:

I'll add a test that retyping an original file through the Bring in file makes a new version with the new type, and leaves the file, its name and the earlier version as they were:

All 252 tests pass. Now the retype file for the Bring in page: one change for each of the 137 records. It replaces last night's file, which Tessera Records already keeps a copy of.

Bringing in leaves the Bring in folder alone. Running the rehearsal on a copy in my scratchpad:

The rehearsal needs the store's full set of folders. Using the app's own folder layout for the copy:

Updating the README, SYSTEM.md's version history and the version number:

I'll also update the app's handover: its version, the new menus, and what waits in the Bring in file. The old note about 31 October's hours is outdated, because those came in long ago.

All 252 pass. One look over the screen code's changes before committing:

The diff reads as intended. Committing and pushing the app's change:

Now the `picture-book.mjs` change in claude-logs, then the backup that the app's rules ask for:

Done. You'll see it after one restart and one press of Bring in.

1. **Restart Tessera Records:** close the app, then start **Start Tessera Records.bat** again. It's now v0.20.0.
2. **Press Bring in.** It gives your 137 picture PDFs and pages the new type **Session pictures and pages**. I tried it on a throwaway copy of your records first: all 137 changed, and nothing else did. Each record gets a new version, and its file stays as it is.
3. **On Original files**, choose **Session pictures and pages** in the new menu above the month buttons. Only those show, and the month buttons count only them.

**Where else the menu is:**
- **Now:** Timeline (by type of event), Hours (by type of work) and Assets (by category). An hours entry with two types of work shows under both.
- **Later:** Expenses, Subscriptions, Funding, Agreements and Contributions get the menu once they hold two types. Today each has only one.
- **Not added:** Owners and People. They're short lists of who.
- The design part's lists, such as Decisions, already had menus like this.

The menu looks like the topic and milestone menus on Decisions, so I didn't make examples for you to choose from first. Tell me if you want it to look different.

From now on, new picture PDFs get this type by themselves. All 252 tests pass, and the change is committed, pushed and backed up.

---

### Dani · 2026-11-11 23:56

thanks a bunch. can i close this conversation

---

### Claude · 2026-11-11 23:57

Yes. First I'll close the session the way your rules say: save its text, correct the M1 handover's Bring in note, and compare the real time with my estimate.

Something's off with the hours. Tessera Records has 8 hours on 6 November, 4 on the 7th and 4 on the 8th. The Bring in file asked for 12, 8 and 8. I'll check why they didn't come in:

The rehearsal folder was deleted after the last run, so I'll make it again and rerun:

The rehearsal says the 137 are already retyped, so you must have pressed Bring in already. I'll confirm on your real records, read-only:

You've already brought in both files. The 137 records are now Session pictures and pages, and the 3 hour corrections went in at 23:57. Checking the hours themselves:

The hours are right: 12 on 6 November and 8 each on the 7th and 8th. Now the M1 handover's three outdated lines:

Both handovers are committed and pushed. The M1 folder is clean now; the other session has committed its work. Last, I'll save this session's text:

---

Closed at about midnight on 11 November 2026. Session pictures from now on: only Dani's and the ones Claude makes or shows her (the rule in Dropbox\Studio\CLAUDE.md, conversation-text.mjs and picture-book.mjs); the old picture PDFs stay. Tessera Records v0.20.0: type menus on the records part's lists, and the type Session pictures and pages, which Dani's Bring in gave the 137 PDFs and pages. The 4 hours each that Bring in had skipped on 6, 7 and 8 November are in. Nothing waits for Bring in.
