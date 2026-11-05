# M1: diamonds in the map editor, porous rock clusters and the kit's pop-up (26 October 2026)

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Private: never commit or share.

---

### Dani · 2026-10-26 16:08

m1
diamonds now require 
1st 20 porous rock fragments and 10 acorns
each one after is 1st * 1.3
add tuning bars pls for first value and multiplier amount

is it at all possible to allow me to add diamons and their required resources?
i think linking tiles to diamonds (1 or n number of tiles) might be needed
first how big would this job be?

---

### Claude · 2026-10-26 16:09

I'm reading how the crystals (the "diamonds"), the Tuning sliders and saving work before I change anything.

I've got the picture. Now making the change: the crystals' needs in [src/key.js](src/key.js), the giving and labels in [src/planet.js](src/planet.js), and the saved progress.

Now the edits.

The game code is changed; now updating saved progress so older saves still load, and its tests.

Tests pass (113). Now checking it in a hidden browser against the running game.

Running the crystal test in the hidden browser now.

Giving works: real fragments and pine cones go first, test things fill the gap, and the next crystal appears asking 26 and 13. Checking the screenshot, the sliders, and that a reload keeps it.

Save as defaults writes them correctly. Now the README.

Tests pass. Dani's saved Tuning values in [src/key.js](src/key.js) go into this version too, so checking the README's numbers match them.

Everything checks out. Fixing one code comment, then saving as v0.113.0 and pushing.

I've done the first part as v0.113.0 and pushed it to GitHub. The 113 tests pass, and I checked it in a hidden browser.

**The new needs**
- The first diamond needs 20 porous rock fragments and 10 pine cones. Each one after needs 1.3 × the one before, rounded: 26 and 13, then 34 and 17, 44 and 22, and 57 and 29.
- Each diamond's label shows what it has so far, like "0/20 [fragment picture] 0/10 [cone picture]".
- **Tuning → Floating objects** has three new sliders: "First, porous rock fragments", "First, pine cones" and "Each next ×". The labels change as you move them, and Save as defaults stores them.

**How I read your message** (correct me if I'm wrong)
- "Diamonds" are the orange floating crystals.
- "Acorns" are pine cones. The cone trees' drop was called acorns before the asset list renamed it.
- I read "each one after is 1st × 1.3" as growing each time (the one before × 1.3), not every later diamond at a flat 26 and 13.

**Side effects**
- Test things from Carrying now fill in for whatever a diamond is still missing. Your real fragments and cones go first. You start with 100 test things, which finish the first diamond and most of the second. Set Carrying to 0 to test the real numbers.
- If an older save had a diamond partly fed, that diamond starts again from 0. Finished diamonds stay finished.
- This version also includes the Tuning values you saved earlier (cone 170°, reach 1 m, 4 hits, the shatters, the apparatus's knocks). The README now matches them.

**Adding your own diamonds: yes, it's possible, and it's a large job.** It would take a whole session and one version. You're right that it needs tiles linked to each diamond. The work:
1. The island's file gets a list of diamonds. Each diamond has its tile, what it needs (any kinds, any numbers), and the tiles it raises (one or many). This replaces today's fixed path of 5.
2. The map editor gets a diamond tool:
   - you place a diamond, then set its needs in a small box, one row per kind;
   - "Link tiles" lets you click the tiles it raises, and they show its number;
   - a linked tile waits in the void until its diamond is fed.
3. The Problems list warns you about two mistakes: a diamond the player can never reach, and a tile linked to two diamonds.
4. The game raises a diamond's linked tiles in a wave from it. Today's 5 diamonds move into the list, so nothing changes in play.

**Q1.** Should a diamond without its own numbers follow the new sliders (first value × 1.3 each time), with the editor's numbers used only where you set them? I recommend yes: the sliders you just got stay useful, and you set numbers only where you want something different.

Say go, with your Q1 answer, and I'll build it.

---

### Dani · 2026-10-26 16:22

your correction are correct
how come diamonds start again from 0 after a save?
q1 yes

---

### Claude · 2026-10-26 16:23

Only saves made before v0.113.0 lose anything, and only for a diamond that was partly fed. The old save stored one number per diamond, like "4 things", with no kind. Diamonds now need fragments and pine cones, and "4 things" can't be split into those. Saves from now on keep each kind, and I checked that a reload keeps them. A finished diamond stays finished either way, because the game can see its tiles have risen.

Building the diamond editor now. It's a large job: the island's file, the map editor, the server's save, the game, tests and the README, all in one version. First I'm reading how the island's file and the editor work.

The current island's five diamonds and their tiles have to move into the new format. Listing them from the drawing:

Now rewriting the island's file: the diamonds become a list, each with its tile, what it needs and the tiles it raises.

The island's file now reads the diamonds list. Next: the Problems checks for diamonds (loops, a tile linked twice, a diamond raising nothing).

Same as before, so nothing new there. Now the game side in [src/planet.js](src/planet.js).

Now moving the item names and pictures into their own file, so the map editor can show them too.

Now the server's save, which writes the drawing and the diamonds list together.

The server can now save the diamonds. Tidying how it writes them, then building the editor part.

Now the map editor itself: the diamond tool, linking tiles, and the box for what a diamond needs. Rewriting [src/editor.js](src/editor.js):

Editor written. Updating the island-picture script so it understands diamonds too:

Syntax is fine everywhere. Now the tests for the island's file.

115 tests pass. Now the game in the hidden browser, to check the five diamonds still behave as before:

The game behaves exactly as before. Now checking all five in a row, that the round area rises, and that a reload keeps it:

All five work in a row, the round area rises after the fifth, and a reload keeps them done. Now the editor, on a copy of the trial at port 4891 (so Dani's trial isn't touched):

Every step works: placing, own numbers, adding and removing kinds, linking (including new tiles in the void), unlinking, undo and redo, and saving. Checking what the copy's file now holds:

Saved as expected. Now playing the new diamond in the copy's game:

The diamond made in the editor works in the game: it shows from the start, asks for its own numbers (15 fragments, 10 fruit), and raises its two tiles. Now a look at the editor itself:

The editor works and reads clearly, with one fix: tiles a diamond raises still look like solid ground. I'm making them pale, like the old path tiles, so it's clear they aren't there yet.

The editor looks right. Stopping the copy's server, then updating the README.

Regenerating the island pictures so they show the diamonds and their links:

Dani's running trial answers 404, so the editor will tell Dani to restart it. Saving as v0.114.0:

Diamonds can now be added and set up in the map editor. It's v0.114.0, pushed to GitHub, and the 115 tests pass. I checked it on a copy of the trial at port 4891 with real mouse clicks: I placed a diamond, gave it its own numbers, linked two new tiles in the void, saved, then played it in the game. It showed, took what it needed, and raised its tiles.

**Restart the trial once.** Close its black window and double-click Start M1 trial.bat. The trial that's running now can't save diamonds, and the editor will tell you so if you try.

**How to use it**
- **Place or pick a diamond:** use the **diamond** tool. Click an existing diamond with the diamond tool, or with Move, and its box opens above the tools.
- **What it needs:** "Needs what the Tuning sliders say" is ticked by default. Untick it to give the diamond its own numbers: one row per kind, with a list to change the kind, its number, and × to remove it. **Add a kind** adds another kind that harvesting drops.
- **Link tiles:** click tiles to link them, and click again to unlink. You can also drag across tiles. Click the diamond again, or press Esc, when you're done.
  - Clicking an empty spot in the void creates a tile there.
  - A tile that rose with the dormant object will rise with the diamond instead.
  - The start tile can't be linked.
- **Chains:** a diamond standing on a tile that another diamond raises comes next in that diamond's chain. That's how the sliders' "× 1.3 each time" counts.
- **What you see:** orange lines run from each diamond to its tiles, bold for the diamond you've picked. Linked tiles are pale and show ◆ plus the diamond's place.
- **Problems list:**
  - These block saving: a tile linked to two diamonds, diamonds that raise each other's tiles in a loop, and a linked start tile.
  - This is only a warning: a diamond that raises nothing.

Your five diamonds are now in this new list, so they play exactly as before, and your saved progress still fits. I also redrew the island pictures in `maps/` so they show the diamonds and their links.

---

### Dani · 2026-10-26 17:02

what does a tile when it's the type "rising"?

---

### Claude · 2026-10-26 17:03

A "rises" tile is ground that isn't there at the start. It waits down in the void, so you can't walk on it, and it comes up when the **dormant object** is restored.

- **When it rises:** you give the dormant object its bottle of awakening, and the island starts turning green. When the green is a third of the way across (`DEMO_UNLOCK_AT` in `src/key.js`), every "rises" tile comes up, in a wave outward from the dormant object.
- **What's on it rises too.** For example, the rock on 13,2 is on a "rises" tile, so it comes up with it.
- **After that it's ordinary ground,** part of the restored island.
- **Restore all** in the panel also raises it, for testing.

The difference from a tile linked to a diamond is what makes it rise:
- a "rises" tile comes up when the dormant object is restored;
- a linked tile comes up when its diamond gets all it needs.

A tile can be only one of the two. If you link a "rises" tile to a diamond, it switches to the diamond. If you paint "rises" on a linked tile, it switches to the dormant object.

In the island picture, 12,2, 13,3, 13,4, 14,3 and 14,5 are "rises" tiles. They're the pale grey ones with dashed edges.

I also see that you've added water tiles south of the island and saved some Tuning values. I'll include those in the next version.

---

### Dani · 2026-10-26 17:27

diamonds are walkable

---

### Claude · 2026-10-26 17:27

Diamonds block the way in the code right now (they're solid at radius 0.45 m). Checking in the game whether that actually happens:

It does block: walking straight at it, the player stops 0.74 m from its middle. So I read your message as "let the player walk through diamonds". Making that change:

Walking through works: the player gets right under it, 0.13 m from its middle. Checking your saved Tuning values before I save the version:

The failures come from the tests, not the game. Dani's saved island now has more diamonds than the five the tests assumed. Checking:

All 115 tests pass again. Moving the chain check into a test of its own, then saving the fix as v0.115.1:

Diamonds can now be walked through. I walked into one in the hidden browser and the player went right under it. That's in v0.115.0, which also includes your water tiles, your 12 diamonds and your saved Tuning values (sun 1.9, reach 1.1 m, 10 final cubes lasting 0.7 s).

**One mistake on my side.** I saved and pushed v0.115.0 with 3 tests failing; my command didn't stop when the tests failed. The game wasn't affected. The tests I wrote in v0.114.0 assumed the island's first five diamonds, and your new chain of 12 broke them. They now put down their own diamonds on a copy of the drawing, so they hold whatever you build in the editor. That fix is v0.115.1: all 116 tests pass, and it's pushed. It also includes the island you saved from the editor a moment ago.

**A look to check:** the diamond hangs at head height (its bottom tip is 1.05 m up, and the player is 1.38 m tall), so walking under it, its tip pokes through the head. I recommend raising diamonds to float at 1.95 m, so they clear the head by about 10 cm. Say yes and I'll change it.

---

### Dani · 2026-10-26 17:31

i would like pourous rocks to be a cluster varying in sizes. each rock in the cluster drop resources

---

### Claude · 2026-10-26 17:31

Before changing anything, I'm reading how porous rocks are built now.

---

### Dani · 2026-10-26 17:32

(sent while Claude was working) don't make the closter so big that the player can't walk on the side. i dont want it blocking paths

---

### Claude · 2026-10-26 17:33

Got it: the cluster stays compact in the tile's middle, no wider than the old single rock, so there's room to walk past it on every side. Checking how much room the player needs:

117 tests pass. Now in the hidden browser: what a cluster looks like, harvesting each rock, and walking past one along its tile's side:

The clusters are compact, with three sizes and clear room around each one. Walking past worked on both sides. My harvest check stood too far away, so I'm redoing it walking up to the cluster:

Readable now: one "+6 +3" over the cluster per hit. Updating the README:

Porous rocks now stand in clusters of three sizes, and each rock is harvested on its own. It's v0.116.0, pushed, and the 117 tests pass.

- **The cluster:** a big rock near the tile's middle (about 1 m long and 0.7 m tall), a medium one (0.75 m) and a small one (0.6 m). Each comes out up to 10% bigger or smaller, so no two clusters look the same.
- **Room to walk past:** no rock blocks the way more than 0.85 m from the tile's middle, which was the old single rock's footprint. That leaves at least 0.77 m on every side of the tile, and the player is 0.6 m wide. In the hidden browser I walked past a cluster on both sides without getting stuck. A new test fails if the rocks' numbers in [src/key.js](src/key.js) ever make the cluster wide enough to block a path.
- **Each rock drops its own things:** every rock takes 4 hits and pales on its own, knocks off its own chips, and drops 1–3 fragments and 1 water drop a hit.
- **Numbers:** the three rocks' numbers piled up into an unreadable stack, so a cluster now shows one sum per hit, like "+6 +3", over its biggest rock.

One side effect: a cluster gives three times what one rock did, 12–36 fragments (24 on average) and 12 water drops, against 4–12 and 4 before. So the first diamond (20 fragments) takes about one cluster, and the apparatus's 20 water drops take two. If that's too generous, I can make the smaller rocks drop less.

---

### Dani · 2026-10-26 17:39

no. the animation is jello again. no collission.
the rocks should be 20% larger (do it properly)
i said each rock has it's own drop, meaning three floating numbers

---

### Claude · 2026-10-26 17:39

Three changes, and checking two things in the code first: what the knock looks like on the smaller rocks, and whether the rocks still block the way.

Tests pass. Checking in the hidden browser that the player walks through, and how the three numbers look:

---

### Dani · 2026-10-26 17:42

(sent while Claude was working) dude ethey can't be walkable. what the heck
there is plenty of space around them on the tile

---

### Claude · 2026-10-26 17:42

Understood: the rocks block again. That also tells me I misread "no collision". You were reporting that something walks through the rocks, not asking for it. I'm finding where that can happen:

That shot is from the walk-through version, with the player standing inside the cluster. Putting collision back and spacing the rocks:

Tests pass, including the two new ones (rocks never overlap, room on the tile). Checking in the game: blocking, the look, and the numbers:

All three numbers are readable now, side by side, and the rocks block again: the player stops at each rock's edge. Updating the README:

Porous rocks block again. You only saw the walk-through for a few minutes: it was in the trial while I tested, and I never saved it as a version. It's now v0.117.0, pushed, and the 118 tests pass.

- **Collision:** I misread your "no collision" as "make them walk-through". I now read it as the rocks passing into each other. They stood partly inside each other, and on each hit each one was pushed its own way, into its neighbour. That's what looked like jelly.
  - The rocks are now spaced so they never overlap, however each one is turned. A test checks that.
  - All rocks hit together are knocked the same way, so the cluster moves as one solid piece.
  - The knock is 3.6 cm, down from 6 cm, which was tuned for the old 1.9 m rock.
  - In the game the player stops at each rock's edge.
  - The cluster still leaves room to pass along the tile's edge, and a second test checks that.
- **20% larger:** I followed what we did for "33% smaller" on the single rock, where 0.67 on every side looked far too small. So 20% larger means 20% more of the screen, every side 1.095 times as long. The rocks are now about 1.1 m, 0.85 m and 0.6 m long. If you meant 20% on every side, they'd be 1.2 m, 0.9 m and 0.7 m; say so and I'll change it.
- **Three numbers:** each rock shows its own number again. One hit's numbers now stand side by side instead of piling up, so all three are readable.

---

### Dani · 2026-10-26 19:08

when player obtains herb, i want the same icon effect and style as when getting items from harvesting.
when they grab the kit, there should be two icons, the kit and the her
aftet this, tr then new convo

---

### Claude · 2026-10-26 19:09

Doing the herb and kit change first, then Tessera Records, then the wrap-up. Reading how the kit and herb pop up now:

Clean. Checking it in the hidden browser:

"+1 [kit] +1 [herb]" pops up in the same style as harvesting's numbers, over where the kit lay. Saving as v0.118.0:

Now Tessera Records. Reading the recording rules in the Tessera file first:

Now reading the relevant records in Tessera Records (read-only), so the list fits what's already there:

I'm finding how to read the existing decisions and features in Tessera Records, so the list matches what's there.

Here's the Tessera Records list from this conversation. Nothing is entered yet. Decisions are never edited, so where today changes earlier design, I add a new decision and change the feature text.

**New decisions** (yours, 26 October 2026, M1):

1. Restoration: "A floating object needs particular kinds of resources, set for each one, not any kind. Further along a chain of floating objects, each needs more than the one before."
2. Restoration: "Floating objects don't block the way: the player walks through them."
3. Gathering, resources and refining: "Porous rocks stand in clusters of rocks of different sizes. Each rock is harvested on its own and has its own drops. The rocks block the way, but a cluster leaves room on its tile to walk past it."
4. Gathering, resources and refining: "Whatever the player gets pops up over where it came from as '+1' with its icon, one for each kind, and floats up and fades, all in one style: harvest drops, each rock of a cluster on its own, the Gatherer's Kit and what comes with it, and what the apparatus makes."

**Feature changes:**

5. "Unlock with a floating object":
   - Now: "…bobbing gently and turning. It blocks the way." and "…a counter over it shows what it has and what it needs, and it takes what the player carries."
   - New: "…bobbing gently and turning. The player walks through it." and "…a counter over it shows what it has of each kind it needs, and it takes those kinds from what the player carries."
6. "Gather a resource":
   - Now: "A porous rock turns lighter with each hit and stays."
   - New: "Porous rocks stand in clusters of rocks of different sizes, and each rock is harvested on its own, with its own drops. A porous rock turns lighter with each hit and stays. Each hit's drops pop up over each harvestable as '+1' with the kind's icon."
7. "Find the Gatherer's Kit": after "The kit vanishes, and its icon appears in the inventory at the bottom left of the screen." add "Over where it lay, '+1' with the kit's icon pops up, and one for each item that comes with it."

**Hours:** none yet. It's 19:09, and you said you'll know about 26 October around 11 pm. The handover will say to ask then.

**Left out**, as numbers, tests, looks or tools:
- the first diamond's 20 fragments and 10 pine cones, and the × 1.3 (balance, like the M1 recipe)
- the map editor's diamond tool and links
- your Tuning values
- the rocks' sizes and the knock
- test things filling in for missing resources

Tell me "yes", or what to change. I'll then enter 1–7, update the M1 status, save this conversation's text, and give you the prompt for the new conversation.

---

### Dani · 2026-10-26 19:30

the map is not saving. i edited a lot. can  you fix it then apply my changes

---

### Claude · 2026-10-26 19:31

Your unsaved edits live only in the open editor page, so I'll avoid anything that reloads it until they're safe. Finding the cause first, without changing files:

The text-read key matches the real one. Testing the fixed server on a copy at port 4891, including the case that broke: `src/key.js` gaining a new number after the trial has started.

Saving was broken by my mistake, and it's fixed: v0.118.1, pushed, 118 tests pass.

**What happened:** since v0.116.0, every save failed. The running trial had read `src/key.js` when you started it, and kept that old copy. v0.116.0 made the island's file need the porous rocks' sizes from `src/key.js`, which the old copy didn't have. Restarting the trial would have fixed it. The trial now reads what it needs at every save, so a change to `src/key.js` can't stop saves again. I checked that on a copy of the trial at port 4891.

**I restarted your trial for you,** without opening a new tab. Restarting doesn't reload open pages, so your edits should still be in the editor.

**Now press Save in the editor**, in the tab where you made your edits, and tell me when it's done. I'll then check your island, save it as a version, and go on with the Tessera Records list (still waiting for your "yes" on 1–7).

If that page has reloaded and your edits are gone, tell me. I'll rebuild them from your two screenshots.

---

### Dani · 2026-10-26 19:36

"Gathering, resources and refining: "Whatever the player gets pops up over where it came from as '+1' with its icon, one for each kind, and floats up and fades, all in one style: harvest drops, each rock of a cluster on its own, the Gatherer's Kit and what comes with it, and what the apparatus makes."
this one is already in features. and the addition is not worth noting

hours 8

add the editor somewhere . maybe in decisions. m1 has a constructioni built in feature. 

rest is fine

---

### Claude · 2026-10-26 19:36

Checking first whether your island was saved:

The 25 October description change is still in the file, so I'll keep it and add 26 October. Checking how a new hours record is written:

I'm finding how earlier days' hours were recorded, so 26 October matches them.

25 October's change was already brought in, so the file can be replaced. Reading 25 October's record in full to write 26 October the same way:

Writing the approved records in. The script checks that each feature text it changes is found exactly once before saving anything, and skips decisions already there:

Four decisions and the two features are entered. Now 26 October's hours for the Bring in page. Checking how a new hours record is proposed:

The file is written. Rehearsing it on a copy of the records database, so the Bring in button won't hit a problem:

The hours record passes the rehearsal with no problems: it will add 26 October, 8 hours, when you press Bring in.

Checking your island again before the wrap-up:

Now the Tessera Records handover line about what waits for the Bring in button:

Now saving this conversation's text. Checking how the tool ends the file:

---

Dani ended the session here (26 October 2026, about 19:45). Done in this session:
- M1 trial v0.113.0–v0.118.1, all synced.
- Diamonds (floating objects) need particular resources: by default the first 20 porous rock fragments and 10 pine cones, each one further along a chain 1.3 times as many as the one before, rounded; Tuning sliders for the first values and the multiplier. Test things stand in for what is missing. Older saves keep the diamonds that are done.
- The map editor has a diamond tool: place diamonds anywhere, give each its own needs or the sliders', and link the tiles it raises (Link tiles), with orange lines and pale linked tiles. The server writes the `DIAMONDS` list beside the drawing. The island's five diamonds moved into the list; Dani then built a chain of 12.
- Diamonds are walked through (Dani). Porous rocks stand in clusters of three sizes, each rock harvested on its own, with its own number over it (side by side), blocking the way, spaced so they never overlap, knocked together as one, and 20% larger by screen area (every side × 1.095). Dani rejected walk-through rocks: Claude had misread "no collision".
- Taking the kit pops up "+1 kit +1 herb" over where it lay, in harvesting's style, in place of the herb over the head.
- Mistakes: v0.115.0 was pushed with 3 failing tests (fixed in v0.115.1; the tests now put down their own diamonds); from v0.116.0 every map editor save failed in a trial started earlier, as the server ran src/planet-plan.js with the old src/key.js it had read at its start (fixed in v0.118.1; Claude restarted Dani's trial at 19:33). Dani's island edits of the evening may still wait for Save in the open editor.
- Tessera Records: decisions "A floating object needs particular kinds of resources…", "Floating objects don't block the way…", "Porous rocks stand in clusters…" and "M1 has a built-in construction feature: the map editor…" (26 October, M1); "Unlock with a floating object" (walked through; a counter for each kind) and "Gather a resource" (porous rock clusters) changed. Left out at Dani's request: the pop-up style (already in features). 26 October's hours, 8, are on the Bring in page.

## Prompt for the next session

> Task: the M1 trial (`Dropbox\Studio\Tessera\repositories\tessera-m1`, the round world at http://127.0.0.1:4890/), v0.118.1, synced.
>
> Read the M1 handover (CLAUDE.md) first. Start with `git status`: if src/planet-plan.js has changed, it's the island Dani saved after the session ended; run npm test (it checks the island) and save it as a version. If Dani says the edits were lost, rebuild them from Dani's two screenshots of 26 October.
>
> Two answers wait from Dani: whether porous rocks' "20% larger" meant the screen (done: every side × 1.095) or every side × 1.2, and whether diamonds should float at 1.95 m to clear the player's head. Next in the trial: harvestables' levels, as Dani planned; ask Dani how levels should work before building. Dani is adding mechanics first: the map, puzzles, placements, looks and colours aren't designed yet, and puzzle recipes and balance numbers aren't records.
>
> Waiting in Tessera Records: 26 October's hours (8) on the Bring in page, for Dani's button. Ask about each day's hours only at the end of that day, before midnight.
>
> Testing: the hidden-browser scripts are in `C:\Users\someo\AppData\Local\Temp\claude\c--Users-someo-Dropbox-Studio-Tessera-repositories-tessera-m1\1cea1abb-93ad-492a-ae5f-b39ec592a3ff\scratchpad\drive`; copy them to your own scratchpad. `GPU=1 node run.mjs <test files | js:code | shot.png>` runs `harness.js` in a fresh page; `run-reload.mjs` reloads between two sets of steps, keeping the save; `run4891.mjs` drives a copy of the trial on port 4891; `drive.mjs <url> '<steps>'` takes `{node}` steps with real mouse clicks, as `editor-diamond.mjs` does in the map editor. `floating.js` and `all5.js` play the diamonds, `cluster2.js` and `bump.js` a porous rock cluster, `kitpop.js` the kit's pop-up. Test a server change on a copy of the trial, started with `PORT=4891 NO_BROWSER=1 node server.js`. Run npm test and check it passed before every commit.

---

This conversation's 15 pictures are in Tessera Records, in the original file "Pictures: 2026-10-26 M1 diamonds in the map editor and porous rock clusters", in the order they came.
