# 28 October 2026: M1 on the web for Mattias and Jousef

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Private: never commit or share.

---

### Dani · 2026-10-28 01:35

i need to put m1 on my webstie for mattias and jousef to try it. how do we do that?

---

### Claude · 2026-10-28 01:35

I'll check the session notes and how the trial is served before recommending a route.

The game is plain files plus three save/reload features that only work on Dani's computer. Next I'll find out what Dani's website runs on.

No website is mentioned anywhere in the project files, so I'll check what a web copy of the game would need.

The web copy itself is simple. Before recommending where it goes, I'm checking one fact about the free password option I have in mind.

Short answer: I put a web copy of the game online behind a password, and Mattias and Jousef get a link and the password. Once you answer the two questions below, it's about an hour of work for me. Your part is to click "Allow" once.

**How it works:**

1. **A web copy.** The game is just files, about 2.5 MB. I copy them into a folder that runs without your computer. Three things only work on your computer, so the web copy leaves them out:
   - Save as defaults under Tuning
   - the map editor
   - the automatic reload

   Everything else stays, including Speed and Give 10,000 of each.
2. **Where it lives.** I recommend Cloudflare Pages. It's free, and I can upload each new version with one command. The address would be something like `tessera-m1.pages.dev`.
3. **A password.** The game hasn't been announced and the name hasn't been cleared, so strangers shouldn't be able to open it just by finding the address. Cloudflare's server asks for the password before it sends any file, so nobody can read the game's files without it. Cloudflare also has its own email-code login, but for Pages it only protects preview copies, not the main address. One user also reported last week that the code emails didn't arrive. A simple password is safer.
4. **Updates.** The online copy stays at the version you send them. I update it only when you tell me to, so they never get a half-finished change in the middle of testing.
5. **Computer, not phone.** The game hasn't been tested on a phone yet, so tell them to use a computer.

**Your part:** create a free Cloudflare account. When I log in from here, a browser window opens and you click Allow. Then you send them the link, and the password in a separate message.

**Q1.** Does it need to be on your website's address, or is a private link enough? I recommend the private link: your website is public, and this keeps the game apart from it. If you want your own address, tell me the website's address and what it's built with (for example Squarespace or WordPress).

**Q2.** Is one shared password for both of them fine? I recommend yes. I'll choose it and give it to you.

Sources:
- [Preview deployments · Cloudflare Pages docs](https://developers.cloudflare.com/pages/configuration/preview-deployments/)
- [Possible to enable Cloudflare Access on pages.dev? · Cloudflare Community](https://community.cloudflare.com/t/possible-to-enable-cloudflare-access-on-cloudflare-pages-myproj-pages-dev/529422)
- [One-time PIN emails not delivered · Cloudflare Community](https://community.cloudflare.com/t/one-time-pin-emails-not-delivered-to-emails-in-an-allow-policy/970596)

---

### Dani · 2026-10-28 01:41

1 it's fine with cloudfare. i can't think anymore any way so it would be great for yu to do it for mee
2 yes

---

### Claude · 2026-10-28 01:42

Doing it now: a web copy, a password, Cloudflare, then the version and handover. About an hour.

**While I work, one thing for you:** open https://dash.cloudflare.com/sign-up and create a free account with your email and a password, then confirm the email Cloudflare sends you. Write "done" here when it's finished.

The game needs only three changes for the web: hide Save as defaults, hide Map editor, and stop the reload listener. Checking for anything else it loads from the server:

Wrangler (Cloudflare's upload tool) runs through npx, so its roughly 100 MB never lands in the Dropbox folder. Checking the page head, the test style, and wrangler's release dates:

Writing the password check that runs on Cloudflare's server:

Now the game itself: the web copy hides Save as defaults and Map editor, and doesn't listen for reloads.

---

### Dani · 2026-10-28 01:44

(sent while Claude was working) [Dani's Cloudflare account password, left out]
this is the password

---

### Claude · 2026-10-28 01:45

All 135 tests pass. Adding the two commands to package.json and keeping the web copy out of git:

The web copy is 10 files, 2.5 MB. Next I'm running it on this computer exactly as Cloudflare will, with a test password, so I can check the password box and the game before anything goes online.

While that starts, I'm copying the hidden-browser test tools from the last session:

The local copy runs as Cloudflare will. Checking the password from outside:

The web copy plays normally. The Map editor link is gone from the panel. Checking that your own trial at 127.0.0.1:4890 still has Save as defaults and Map editor:

Your own trial is unchanged. (The reload listener doesn't show up in this list either way; the code only skips it on the web copy.) Stopping the local Cloudflare copy, then the README:

Adding the web copy to the README:

Wrangler left a working folder (.wrangler) in the project. It's only temporary local state, so I'm deleting it and keeping it out of git:

A leftover wrangler process still holds the folder. Checking what's still running:

Folder removed, 135 tests pass. Saving v0.166.0:

Moving the label needs your OK (the permission check blocked it). Pushing the commit itself, which is safe:

The commit is on GitHub. While I wait for you, I'm checking the Cloudflare commands I'll run:

Everything on my side is ready, and v0.166.0 is on GitHub. Nothing is online yet. Three things from you:

1. **Cloudflare account:** write "done" once you've created it and confirmed the email. Then I start the login, a Cloudflare page opens in your browser, and you click **Allow**. After that I set it up, put the game online and test it from outside.

2. **Q1. Which password did you send?** Is it your Cloudflare account password, or the one for Mattias and Jousef? If it's your account password, I won't use it, and you should change it later because it's now in this chat. In that case I'll make a separate password for the game.

3. **Q2. May I move a label in git?** My first save went wrong. The label "v0.166.0" landed on the save before it, and it's already on GitHub. Nothing was lost: the save itself went in correctly afterwards. Your rule says not to touch saved versions, so I need your OK to move the label onto the right save. I recommend yes: it's my mistake from a few minutes ago, and only the label moves.

**What's done (v0.166.0):**
- **Web copy:** only the game, 2.5 MB. It has no Map editor and no Save as defaults, because those need your computer. Everything else works as on your computer, including Give 10,000 of each.
- **Password check:** Cloudflare's server asks for the password before it sends anything. Any name works. I tested it on this computer: without the password, or with a wrong one, nothing opens. With the right one, the game plays normally.
- **Your own trial:** unchanged. It still has the Map editor and Save as defaults.
- **Address:** it will be `milli-m1.pages.dev`. "Tessera" stays out of the address, since the name isn't cleared yet.

---

### Dani · 2026-10-28 01:53

q1 done
2 that's cloudfare pw. let me make one for the team [the team password, left out]
3 ok

---

### Claude · 2026-10-28 01:53

Thanks. I'll use the team password for the game. I won't use your Cloudflare password or save it anywhere. Moving the label first:

The Cloudflare page should be open in your browser now. Click **Allow** there; if you don't see it, check your browser's tabs. I'll carry on as soon as you've clicked.

---

### Dani · 2026-10-28 01:53

<task-notification>
<task-id>bh5ws0n5o</task-id>
<tool-use-id>toolu_01CuQ8WdXsVKZEdSQUfkg1LV</tool-use-id>
<output-file>C:\Users\someo\AppData\Local\Temp\claude\c--Users-someo-Dropbox-Studio-Tessera-repositories-tessera-m1\de2f345b-5c80-4e89-a791-631e7259b626\tasks\bh5ws0n5o.output</output-file>
<status>completed</status>
<summary>Background command "Log this computer in to Dani's Cloudflare account" completed (exit code 0)</summary>
</task-notification>

---

### Claude · 2026-10-28 01:54

Logged in. Creating the site on Cloudflare:

Wrangler did something unexpected: instead of only creating the site, it changed package.json and installed itself into the project. Checking what else it touched before I undo it:

All of it is wrangler's, none of it yours or mine. Undoing it:

Some empty leftovers remain in node_modules. Checking them:

The project is back as it was, and the 135 tests pass. Now I'm switching the web copy from a Pages site to a Worker. The password check stays the same.

Updating the build script, the test and the npm commands to match:

It works on the second run. The first one failed because an old wrangler folder inside web-copy was still locked. Checking the result, then running it locally as Cloudflare will:

Same results as before, and an unknown address now correctly gives "not found". Playing it in the hidden browser:

A new "not found" appeared. Checking which file it was:

Only the browser's tab icon, which your own trial doesn't have either. Harmless. Stopping the local copy and putting it online. Until the password is set, the online copy stays closed to everyone:

Tests pass. Something still holds two folders in the old web copy. Looking for the process:

No wrangler is running, so it's Dropbox syncing that folder, which confirms the move out of Dropbox. Trying the delete again:

Gone. Now putting the game online for real. Until the password is set, it stays closed to everyone:

Exactly the 10 game files went up, nothing else. Checking that it's closed before the password exists:

Closed to everyone, as intended. Setting the team password:

Password set. Testing from outside, the way Mattias and Jousef will:

The game is online and plays behind the password. Updating the README to match:

Updating the M1 handover:

Saved and synced as v0.167.0. Checking how long it took against my estimate:

It's online and tested from outside: https://play.tessera-m1.workers.dev/

Without the team password nothing opens, not even the game's files. With it, the game plays normally. It took about 25 minutes. Everything is saved and synced as v0.167.0.

**Ready to send.** Written for Mattias and Jousef. Send the password in a separate message.

> Hi Mattias and Jousef,
>
> The M1 trial is ready to try in your browser: https://play.tessera-m1.workers.dev/
>
> Your browser will ask for a name and a password. Any name works. I'll send the password in a separate message.
>
> Please use a computer; it hasn't been tested on a phone yet. Your progress is saved in your browser. Under Settings, "Give 10,000 of each" gives you plenty of everything, and Controls lists the keys.

**Good to know:**
- **Change your Cloudflare password**, since it's now in this chat. In Cloudflare's dashboard, click the person icon at the top right, then Profile, then Authentication. I haven't saved it anywhere, and I'll leave both passwords out when I save tonight's conversation text.
- **The address contains "tessera-m1".** Earlier I said "Tessera" would stay out of the address. Cloudflare's tool picked that name by itself, and I can't change it from here. The password protects everything, so it's harmless. If you ever want a different name, you can change it in Cloudflare's dashboard.
- **One thing went wrong and is fixed.** Cloudflare has merged Pages into "Workers", and its tool tried to publish the whole project folder. It stopped before uploading anything. I undid its changes to the project and switched to a Worker, which does the same job.
- **The v0.166.0 label is still on the wrong save.** The permission check blocked moving it even after your OK. It's harmless: the right saves are all there, and the handover notes it. I've left it.
- **Updates:** the online copy stays at v0.167.0 until you tell me to update it.

---

### Dani · 2026-10-28 02:04

is it ok to show mattias and jousef snapshots of the map editor and runing interface to brag about what i designed XD

---

### Claude · 2026-10-28 02:05

Yes, go ahead. You've earned it.

- **Nothing new is exposed.** They're getting the game itself, and the editor and interface are your own design work. Showing them gives nobody a claim to anything.
- **Screenshots are the only way they'll see the editor.** The web copy leaves it out, so take them from your own trial on this computer.
- **Your authorship is already on record.** Git dates every version. Screenshots show your work without changing who owns it.

One small tip: mention that the colours and layout are tests, not final art. You're an illustrator, and you don't want them judging your art by placeholder boxes.

---

### Dani · 2026-10-28 02:16

One small tip: mention that the colours and layout are tests, not final art. You're an illustrator, and you don't want them judging your art by placeholder boxes.

of course i did XD i ahve a reputation to keep

---

### Claude · 2026-10-28 02:16

Of course. Good luck with the bragging; it's a lot of mechanics for one week.

When you stop for tonight, say so, and I'll save the conversation text without the two passwords.

---

### Dani · 2026-10-28 02:17

yeah i'm done. thanks

---

### Claude · 2026-10-28 02:17

Saving tonight's conversation text. First, checking how the script works:

Writing the closing note and a small wrapper that runs the script and then takes the two passwords out:

Saved. Tonight's conversation text is in `claude-logs\conversation-texts\2026-10-28 M1 on the web for Mattias and Jousef.md`, with a prompt for the next session at the end. Both passwords are left out of it, and I checked that neither appears anywhere in the file.

The M1 handover already has the web copy and v0.167.0, and it's synced to GitHub.

Remember to change your Cloudflare password when you get a chance. Good night, Dani!

---

### Dani · 2026-10-28 02:19

what's the username? is it asking for mine or the team's?

---

### Claude · 2026-10-28 02:19

Neither. It isn't a Cloudflare login, so the name can be anything: your own name, "dani", even a single letter. The site only checks the password.

- **Name:** anything.
- **Password:** the team password you made, not your Cloudflare one.

Tell Mattias and Jousef the same: any name, plus the team password. The message I drafted already says "Any name works".

---

### Dani · 2026-10-28 02:35

in the web version, the interface is blockking everything. i'm juust trying it out since the next step is phone testing. 
can you please make the finetuning bar an explandable button in thop left

---

### Claude · 2026-10-28 02:35

That means the panel at the top left, the one with Settings, Tuning and Controls. I'll turn it into a small button there that opens and closes it. It will start closed, so new players such as testers see the game, and the browser remembers whether you left it open. Looking at how the panel is built:

The warnings and counts in the panel are testing notes, so hiding them with the panel loses nothing in play. Checking how taps on buttons are kept from moving the player:

Taps on buttons never reach the game, so a new button is safe. Making the change:

Adding it to the README:

135 tests pass. Checking the button on a phone-sized screen in the hidden browser, closed and then open:

Works on a phone-sized screen: closed at the start, open with one tap, closed again with another. Saving it as v0.168.0 and putting it online:

Online. Checking that the password survived the update and the new button is there:

The online copy is now v0.168.0, and the password still works. Updating tonight's saved conversation text so it includes this change:

The panel now opens from a button with three lines at the top left. Reload the page to get it.

- **It starts closed,** so the game fills the screen, for you and for Mattias and Jousef.
- **One tap opens it,** with Restore all, Start over, Settings, Tuning and Controls. Another tap closes it.
- **Your browser remembers it open,** so on your computer it stays open once you've opened it.

I tested it on a phone-sized screen. The online copy is updated, and the password still works. This is v0.168.0, and your own trial at 127.0.0.1:4890 has the same button. I also added this change to tonight's conversation text, still without the passwords.

---

### Dani · 2026-10-28 12:54

great work thanks.
now tr and we finish the convo
i placed the email i sent yesterday in tessera docs (above the repository folder)

---

### Claude · 2026-10-28 12:55

I'm reading the email and Tessera Records' record types to build the list of records for you.

Still checking which fields the timeline, documents and tasks take, so the list I give you fits them.

Here are the records I'd enter from this conversation and your email. Confirm and I'll enter them, then finish the conversation.

**In the records part (they wait for your Bring in button):**

1. **Original file, Correspondence:** your email "M1 Trial" to Mattias and Jousef, sent 28 October 2026 at 02:30. The file `Tessera\docs\M1 Trial.eml` is stored unchanged, with its screenshot.
2. **Timeline event, Other:** "Dani sent Mattias and Jousef the link to the M1 trial online, with a screenshot; the password went in a separate email. She asked Jousef whether anything is missing from the documents for developing M2, and asked Mattias when and how to approach graphics production for M2." People: Mattias, Jousef. The email is attached.
3. **Timeline event, Technical development:** "The M1 trial put online for testers at https://play.tessera-m1.workers.dev/, behind a team password (v0.166.0 to v0.168.0). It runs on Dani's free Cloudflare account. The map editor and Save as defaults are left out."
4. **Task, high priority:** "Change the Cloudflare account password", because it was pasted in chat on 28 October 2026.
5. **Task, M1:** "Test the M1 trial on a phone." I'll skip it if a task with that title already exists.
6. **Contribution, Mattias:** "The colour-map method for quick layout testing (his email of 17 October 2026), used in the M1 trial's map editor." Rights status: "Not recorded yet". Your email now credits his method in writing. Recording it keeps the register clear about which part is his and which parts are yours.

**In the design part (I enter these myself):**

7. **Open question for Mattias, M2, private:** "When and how should we approach graphics production for M2, and how do we make sure the final 3D graphics reflect the visual direction we're aiming for?"
8. **Open question for Jousef, M2, private:** "Is anything missing from the documents, or needed in them, so that developing M2 goes smoothly?"

Private means they don't print in the documents, because these are conversations still in progress.

**Two questions:**

- **Q1.** The work after 01:35 last night (putting the trial online, the menu button, the email) came after you'd given 27 October as 12 hours. Should it go into the 27th, and how many hours should I add? I recommend the 27th, since you count the night as part of the day before. Either way, I'll add the work to that day's description.
- **Q2.** Have you changed the Cloudflare account password yet? If you have, I'll leave out record 4.

---

### Dani · 2026-10-28 14:16

can you make a prompt for another session  please, i want to make modifications to tr before answeing

---

### Claude · 2026-10-28 14:17

I'll write the prompt, update the handovers, and save the conversation text.

About 10 minutes: the prompt, the three handovers, and the conversation text.

Now the Tessera Records handover:

Now saving the conversation text, with both passwords taken out:

The session summary from the context limit landed inside your 12:54 message. It isn't your words, so I'm taking it out and fixing the closing time:

Clean: 24 messages, both passwords out, no summary. Deleting the wrapper and committing the two handovers:

The prompt is ready. Start the new session in the `Tessera Records` folder so its handover loads by itself, and paste this:

```
Task: Tessera Records. I want to make changes to the app first, then answer the list of records from my M1 Trial email. First read the prompt at the end of claude-logs\conversation-texts\2026-10-28 M1 on the web for Mattias and Jousef.md.
```

That file ends with the full prompt: the eight records, Q1 and Q2, and the rules for the passwords. The new session will ask which changes you want to make before it touches the list. Nothing is entered in Tessera Records yet.

What I saved:
- **Conversation text:** all 24 messages, without either password. I also took out the summary Claude Code inserted after hitting its context limit, which had landed inside your 12:54 message.
- **The M1 handover and Tessera Records' handover:** both point to the waiting list. Both are committed and pushed.
- **Your private Tessera file:** a short note on the M1 Trial email (who it went to and what you asked each of them). That file is never committed.

When you get a moment, double-click `Back up Claude logs.bat` in `Dropbox\Studio\claude-logs`.

---

### Dani · 2026-10-28 14:23

you got it wrong, but i think it's ok, just fix the prompts. i'm starting a new conversation because i want to upgrade tr features. then i'm going to open m1 trial folder again and want to continue the work here there

---

### Claude · 2026-10-28 14:23

Fixing it: one prompt for the Tessera Records feature session, one for coming back to the M1 folder to enter this session's records.

Saving the conversation text again, without the passwords or the summary:

---

Dani paused the session here (28 October 2026, about 14:30) to upgrade Tessera Records' features in a session of its own, and will come back to the M1 folder to continue this one. Done in this session:
- The M1 trial is online for Mattias and Jousef at https://play.tessera-m1.workers.dev/, behind the team password Dani made (any name works). It is a Cloudflare Worker named play, on Dani's free Cloudflare account, made tonight. Online: v0.168.0. It leaves out the map editor and Save as defaults, which need Dani's computer. Tested from outside: without the password nothing opens, not even the game's files.
- v0.166.0: the web copy (npm run web, npm run web:send) and the password check. v0.167.0: a Worker instead of a Pages site, because Cloudflare now gives new accounts Workers; the web copy is made outside Dropbox, in Windows' temporary folder.
- Wrangler, Cloudflare's tool, run once from the project folder, rewrote package.json, added wrangler.jsonc and installed itself into node_modules. All undone; nothing was uploaded then. It also named the account's part of the address tessera-m1, which only Cloudflare's dashboard can change.
- Both passwords are left out of this text. Dani pasted her Cloudflare account password in chat by mistake; Claude advised changing it (person icon at the top right, Profile, Authentication).
- The label v0.166.0 sits on f8863f2, the commit before v0.166.0's. The permission check blocked moving it even with Dani's OK, so it stays.
- v0.168.0, online too: the panel opens from a menu button at the top left and starts closed (Dani tried the web copy: "the interface is blocking everything"; "make the finetuning bar an explandable button in thop left"). The browser remembers it open. Tested on a phone-sized screen.
- Dani sent Mattias and Jousef the email "M1 Trial" on 28 October 2026 at 02:30, with the link and a screenshot, the password in a separate email. She saved it as `Dropbox\Studio\Tessera\docs\M1 Trial.eml`.
- Claude listed eight records from the email and this session for Tessera Records, with Q1 and Q2. Nothing is entered yet: Dani answers them in the next M1 session, after the Tessera Records session.

Waiting for Dani:
- The eight records and Q1, Q2 below.
- M1: Q3 (asked earlier, unanswered): whether the inventory and windows should also stop using the item pictures. Claude recommended keeping them there. Still open from before: what a puffball tree drops; level 2's real refining needs and time; the mechanical creatures' name; whether the refinery's cogs turn at each knock.

## Prompt for the Tessera Records session

> Task: Tessera Records (`Dropbox\Studio\Tessera Records`). Dani wants to upgrade the app's features; she will say which. Read its CLAUDE.md first, then run `git status`. Follow the app's rules for changing the code (its CLAUDE.md, section 4).
>
> Leave the eight records from Dani's M1 Trial email alone: they wait for an M1 session after this one. At the end, write what changed in the app in its CLAUDE.md, so that session can fit the records to it.

## Prompt for the next M1 session

> Task: continue the 28 October 2026 M1 session (`Dropbox\Studio\Tessera\repositories\tessera-m1`, v0.168.0, synced): enter the records from Dani's email "M1 Trial" in Tessera Records.
>
> Read the M1 handover (CLAUDE.md), "Recording things" in `Dropbox\Studio\Tessera\repositories\tessera\CLAUDE.local.md`, Tessera Records' CLAUDE.md (Dani upgraded its features in a session of its own after this one), and the end of `Dropbox\Studio\claude-logs\conversation-texts\2026-10-28 M1 on the web for Mattias and Jousef.md`. Then run `git status`.
>
> 1. Fit the list below to the upgraded app, show it to Dani again, and ask Q1 and Q2.
> 2. When Dani confirms, enter the records: 7 and 8 through Tessera Records' `scripts/design-api.mjs`; 1 to 6 in `C:\Users\someo\TesseraExchange\proposed-records.json`, next to the two hours records already waiting there (26 October, 8 hours; 27 October, 12 hours).
>
> The records, from Dani's email "M1 Trial" (`Dropbox\Studio\Tessera\docs\M1 Trial.eml`, sent 28 October 2026 at 02:30 to Mattias and Jousef) and the 28 October M1 session that put the trial online:
>
> Records part:
> 1. Original file, Correspondence: the email "M1 Trial", stored unchanged from the file, with its screenshot.
> 2. Timeline event, Other: "Dani sent Mattias and Jousef the link to the M1 trial online, with a screenshot; the password went in a separate email. She asked Jousef whether anything is missing from the documents for developing M2, and asked Mattias when and how to approach graphics production for M2." People: Mattias, Jousef. The email attached.
> 3. Timeline event, Technical development: "The M1 trial put online for testers at https://play.tessera-m1.workers.dev/, behind a team password (v0.166.0 to v0.168.0). It runs on Dani's free Cloudflare account. The map editor and Save as defaults are left out."
> 4. Task, high priority: "Change the Cloudflare account password", because it was pasted in chat on 28 October 2026.
> 5. Task, M1: "Test the M1 trial on a phone." Skip it if a task with that title exists.
> 6. Contribution, Mattias: "The colour-map method for quick layout testing (his email of 17 October 2026), used in the M1 trial's map editor." Rights status: Not recorded yet.
>
> Design part:
> 7. Open question for Mattias, M2, private: "When and how should we approach graphics production for M2, and how do we make sure the final 3D graphics reflect the visual direction we're aiming for?"
> 8. Open question for Jousef, M2, private: "Is anything missing from the documents, or needed in them, so that developing M2 goes smoothly?"
>
> Q1. The work after 01:35 on 28 October (putting the trial online, the menu button, the email) came after Dani gave 27 October as 12 hours. Does it go into the 27th, and how many hours more? Claude recommended the 27th, since Dani counts the night with the day before; the work goes into that day's description either way.
> Q2. Has Dani changed the Cloudflare account password? If yes, leave out record 4.
>
> Never write the team password or Dani's Cloudflare account password in any record, file or conversation text. Ask about 28 October's own hours only at the end of that day, before midnight.
>
> Then M1 continues as its CLAUDE.md says: it waits for Dani's answers listed there. The web copy is updated only when Dani asks, with `npm run web:send`; never run Wrangler from the project folder.
>
> Testing: the hidden-browser scripts are in `C:\Users\someo\AppData\Local\Temp\claude\c--Users-someo-Dropbox-Studio-Tessera-repositories-tessera-m1\de2f345b-5c80-4e89-a791-631e7259b626\scratchpad\drive`; copy only the .js and .mjs files to your own scratchpad. `GPU=1 node run.mjs <test files | js:code | shot.png>` runs `harness.js` in a fresh page; `node web.mjs <address> <password>` opens a web copy with a password, checks what it hides, walks and takes web.png. Run npm test and check it passed before every commit.

---

This conversation's 4 images are in images\2026-10-28 M1 on the web for Mattias and Jousef\. [The list of them](<../images/2026-10-28 M1 on the web for Mattias and Jousef/index.md>) gives each one's time.
