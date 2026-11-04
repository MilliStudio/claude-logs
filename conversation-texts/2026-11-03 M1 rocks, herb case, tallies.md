# 3 November 2026, midday and afternoon, M1 trial and Tessera Records: porous rocks round the average size, the straw case of herbs, tallies within 3 tiles; decisions' whys rewritten to give their reasons

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Private: never commit or share.

---

### Dani · 2026-11-03 12:31

the rocks are unacceptable. i didn't want a single giant bolder when above a certain width.
if i want three big ones, then there should be three around the average size i set and different positionings. they can overlap and look like one, but never just one. they can't all look alike

---

### Claude · 2026-11-03 12:32

Reading the rock placement code and what Dani said last session, then I'll rework how a cluster picks its rock sizes and places.

Checking how today's rocks land at size 2.25 (my first script hung on a stray command; stopping it).

Writing the new cluster placement in src/sizes.js now.

Now key.js: the rock numbers and their notes.

Now the game side (src/planet.js): each rock takes its size, turn, length and height from the cluster.

First results: every tile keeps its count, at 2–3 ms a tile. At Dani's 2.25 some crowded tiles still shrink their rocks a little to fit. Measuring how often, before tuning the search.

Tiles keep their real corners, so the cluster can use each tile's true shape (hexagon, or pentagon near the planet's 12 pentagons) instead of the circle inside it.

Using the real hexagon helped a little. Testing whether the 4-rock tiles shrink because they truly can't fit, or because the search gives up too soon.

A longer search fits most 4-rock tiles at full size or 5% smaller, so it was partly the search. Picking a search length that stays fast.

Going with 60 starts × 200 tries once the rocks may sink all the way in: about 5–10 ms a crowded tile.

Now passing each tile's real sides from the game to the cluster.

Game side done. Now rewriting the rock tests in test/planet-plan.test.js to check what Dani asked: the count always kept, sizes round the average and all different, each rock on its tile and showing.

Now replacing the old rock tests (lines 73–144) with new ones.

The game runs with no errors and every rock tile keeps its 2–3 rocks. Taking pictures of the rock tiles at Dani's size 2.25.

---

### Dani · 2026-11-03 12:48

(sent while Claude was working) pleae remove the awakening herbs from the kit and instead make it a key object i can add on the map. it sohuld be inside a straw container that looks like a pencil case, and the herbs are sticking out from one end like the image

---

### Claude · 2026-11-03 12:49

Noted the herb pouch: I'll finish and save the rocks first, then do it. Looking at the rock pictures now.

The rocks read as separate rocks of different sizes, heights and turns, two or three a tile, none hidden. Updating the README, then saving v0.312.0.

Saving v0.312.0 now (the rocks plus Dani's 12:27 map import), then starting the herb pouch.

Only the expected check fails (it compares against the last commit). Committing.

v0.312.0 is saved and pushed; all 168 tests pass. Now the herb pouch: reading how the kit gives herbs and how key items are placed on the map.

The kit is placed and taken much like the wheels. Reading the key item code in the game: drawing, taking, shine and saving.

I'll add the straw case as a new key item, `herbs`, placed like the wheels; taking it gives the herb of awakening. Reading how the kit's satchel is modelled, to build the case the same way.

The key item system fits this well: wheels and the gem are placed in the editor, taken by coming close, shine, and are saved. Reading the save code and every place the herb appears.

Now the map editor's key item tools and the server's checks when Dani saves.

I have the whole picture. Building it now: the case's model, the key item, the save, the editor tool and the help text. Checking the vertex-coloured look first.

Now saving whether the case was taken.

Adding the case to the editor's key item tools and the help text.

Tests next, then a look at the case in a copy of the game on port 4891, with the case placed on a tile there (Dani's map stays as it is).

All 168 pass. Adding a test for the editor's new warning, then the copy on 4891.

Now a copy of the game in the scratchpad on port 4891, with the case placed on 12,5 beside the kit, to see it and take it.

The case is placed on 12,5 (tile 1110) but reads as hidden. Checking the pictures to see why.

The case doesn't show. Adding a debug readout to the copy only, to see which condition hides it.

The test tile 12,5 is still sunk in the void at the start of Dani's map (it rises later), so nothing there shows yet. Moving the copy's case to 14,3, which is up from the start.

Taking works: coming close took the case and gave one herb, with no errors. Looking at the pictures.

The case shows as a straw pouch with the red sprigs spilling out of one end, lying flat beside the third wheel. One close-up to check the details.

That angle stood in the void below the tile, so it shows nothing new; the first two pictures are enough. Stopping the copy and writing the README.

Tests pass. Checking Dani's running trial loads cleanly with the change before saving.

Both versions are pushed. Checking the real time taken against the commits.

I've fixed the rocks (v0.312.0) and added the herb case (v0.313.0). Both are pushed and all 168 tests pass. Press **Update M1 testing** to get them.

**Rocks (v0.312.0)**
- **What was wrong:** Average size set the biggest rock. At 2.25 that rock was 2.5 m long and sat in the tile's middle, and the two smaller rocks stood inside it. That's why you saw one boulder.
- **Now:** Average size is each rock's average size. On a tile with three rocks they're about 0.75, 1 and 1.25 times your size, so no two are the same size. Each one is also a bit longer or shorter, taller or flatter, and turned its own way.
- **Placement:** each rock stands at a random place, wholly on its tile. Rocks can sink into each other, but no rock's middle is ever inside another rock, so every rock shows. A tile always keeps its full count.
- **One side effect:** at 2.25, a tile with 2 or 3 rocks keeps your size. A tile with 4 can't fit four that big, so its rocks come out about 5% smaller, at most 15%. This version also includes your map import from 12:27.

I looked at the rock tiles in the running game: two or three separate rocks per tile, none hidden.

**Herb case (v0.313.0)**
- The kit doesn't give the herb any more.
- In the map editor, Key items now has **straw case of herbs**. It's a flat straw pouch, rounded at the closed end, with pale straw strips on top. Red sprigs with round buds spill out of the open end.
- Walking up to it takes it, the same way as the wheels, and gives one herb of awakening. That's the same amount the kit gave.
- **You need to place it.** It isn't on your map yet. Until it is, the apparatus can't make bottles, and the editor shows a warning saying so.

I tested it on a copy with the case placed. It shows, shines, and walking up to it gave one herb, with no errors. Here's a picture: C:\Users\someo\AppData\Local\Temp\claude\c--Users-someo-Dropbox-Studio-Tessera-repositories-tessera-m1\44fdc883-4a5d-4c1c-9014-d567c501df2a\scratchpad\h-case-1.png

**Tessera Records:** last night's list waiting for your go is now out of date. The decision "Porous rocks sink into each other where they don't fit" says fewer rocks stand where they don't fit, and that's no longer true. I'll rewrite that list, with the herb case added, when you want to enter records.

The whole job took about 35 minutes (12:27 to 13:00). I had estimated an hour.

---

### Dani · 2026-11-03 13:08

this isn't supposed to happen
the object tallies shouldn't be showing from that far away. three tiles away is the minimum

---

### Claude · 2026-11-03 13:08

Looking at the rule that decides when the tallies show.

Dani's import at 13:04 (rocks at 1.8 with Overlap 0.7, bulbs 1.95) came in; it goes in with this version. Now finding where the tally decides to show.

Adding the 3-tile rule, with a **Tally shows within** slider beside the other tally sliders under Deliveries.

Tests pass. Checking in the running game: counting the tallies on screen with the player 2 tiles and 5 tiles from the apparatus.

At 2 and 3 tiles from the apparatus its tally shows; at 5 tiles nothing shows. Looking at the picture from 5 tiles.

Same view as your screenshot, now with no tallies. Checking what your 13:04 import changed in the map, to note it with this version.

I put the import note in the wrong place in the list (before 01:32). Fixing that, and working out the exact tile names of the map changes instead of guessing.

Noting your 13:04 values in key.js, then saving v0.314.0.

Fixed in v0.314.0: tallies now show only while you're within 3 tiles of the object they're over. Before, there was no distance limit at all. A tally showed from anywhere once its tile was up.

- **Which tallies:** the ones over lanterns, the apparatus and refinery while in pieces, the Guardian, and diamonds.
- **How it counts:** tile by tile, with the object's own tile as 0.
- **Slider:** there's a new **Tally shows within** slider under Deliveries, next to the other tally sliders. It goes from 0 to 10 tiles and starts at 3.
- **Tested in your running trial:** the apparatus tally shows from 2 and from 3 tiles away. From 5 tiles, the spot where your picture was taken, nothing shows. All 168 tests pass.

Two other things:
- The apparatus's timer and its Claim button still show from anywhere. Tell me if they should follow the same 3-tile rule.
- This version includes your 13:04 import. That's the new diamond on 3,0 raising 4,0, the moved flowers, and rocks at 1.8 with Overlap 0.7. The straw case of herbs still isn't placed on your map, so the apparatus can't make bottles until you place it.

Press **Update M1 testing** to get it.

---

### Dani · 2026-11-03 13:21

still too fat. make two tiles away

(sent while Claude was working) poh nevermind

(sent while Claude was working) you added a slider that's fine

(sent while Claude was working) don't change

---

### Claude · 2026-11-03 13:21

Got it. I won't change anything; the slider is there for you to set yourself.

One thing to know about your new rock settings (2.7, 4 a tile): rocks that big don't fit on a tile at the size you set. At 2.7 an average rock is about 2.3 m long, and a tile is only 3.25 m across. So every rock tile comes out smaller than you set:

| Rocks on the tile | How much smaller |
|---|---|
| 3 | about 19% |
| 4 | about 26% |
| 5 | about 34% |

Every rock still shows and none overlaps another's middle. If you want rocks this big at their real size, use fewer per tile. Two a tile fits at about 2.25.

Your 13:16 import (the herb case on 4,0, the kit on 11,2, the new rock values) is in the folder. It'll be saved with the next version.

---

### Dani · 2026-11-03 13:26

tr and wwrapup pls

---

### Claude · 2026-11-03 13:26

I'll draft the Tessera Records list from today's work and do the wrap-up. First, reading how records are kept and what they say now.

Still drafting the records list: found the decision on how harvestables vary and the rock lines in "Gather a resource". Now finding what the records say about the kit, key items and the tallies.

I have what I need for the list. Checking how the session text is saved for the wrap-up.

Updating the handover (the M1 trial's CLAUDE.md) now.

Here's the Tessera Records list from today. Nothing is entered yet.

**Decisions (new, 3 November 2026, Dani, M1 M2 M3)**

**1. "A tile keeps all its porous rocks"** (Gathering, resources and refining)
> A tile always keeps as many porous rocks as its average number gives it. The average size is each rock's average: a tile's rocks share sizes from 30% smaller to 30% bigger, so no two are the same size, and each is also up to 15% longer or shorter and taller or flatter, turned its own way. Each rock stands at a random place, all of it on its tile. Rocks may sink into each other, but no rock's middle lies inside another, so each one shows. Where they fit, they don't touch, or sink in only as far as the overlap setting says. Where they don't fit, they sink in further. Only where even that doesn't fit do all the tile's rocks grow smaller until they fit. It replaces "Porous rocks take their cluster's sizes in turn, the biggest first, never stand closer than they touch" in "How harvestables vary in size, number and place".

Why: "let me see what it looks like when rocks overlap. perhaps they can be made to look combined"; "don't make the rocks combine into one. i want a cluster of combined rocks in different sizes and random placements still"; "if i want three big ones, then there should be three around the average size i set and different positionings. they can overlap and look like one, but never just one. they can't all look alike".

**2. "Harvestables keep their hitboxes on their tile"** (Gathering, resources and refining)
> Every harvestable keeps its hitbox on its tile, at its biggest size. Where a tile's harvestables don't all fit at their set distance apart, fewer stand there. Porous rocks keep their number instead (see "A tile keeps all its porous rocks"). What rises above the hitbox, such as an arching flower's arch, may lean over other tiles. It replaces "where they don't fit, farther out" in "How harvestables vary in size, number and place".

Why: "make sure objects don't extend their hitboxes outside their tiles"; "yes to fewer".

**3. "The herb of awakening is a key item placed on the map"** (Gatherer's Kit and tools)
> The herb of awakening doesn't come with the Gatherer's Kit. It is a key item: a straw case holding the herbs, placed on the map and taken like any other key item. It gives one herb of awakening.

Why: "pleae remove the awakening herbs from the kit and instead make it a key object i can add on the map. it sohuld be inside a straw container that looks like a pencil case, and the herbs are sticking out from one end like the image".

**4. "Tallies show only near the player"** (UI/UX)
> A tally shows only while the player is within 3 tiles of what it is over, counting tile by tile.

Why: "the object tallies shouldn't be showing from that far away. three tiles away is the minimum".

**Feature text**

- **Gather a resource:** after "Porous rocks stand in clusters of rocks of different sizes, and each rock is harvested on its own, with its own drops.", add:
  > A tile keeps all its rocks: each a different size round the average size, its own shape and turn; they may sink into each other, but each one shows. Every other harvestable keeps its hitbox on its tile; where they don't all fit, fewer stand there.
- **Take a key item:** in the input's examples, after "a golden fish scale", add "the straw case of herbs of awakening".
- **Supply a dormant object**, **Restore a machine in pieces**, **Unlock with a floating object** and **Feed a mechanical creature (a Guardian)**: after each tally sentence, add:
  > It shows only while the player is within 3 tiles.

**Dropped:** last night's "Porous rocks sink into each other where they don't fit". Decision 1 replaces it.

**No records for:** the case's look, or the rocks shrinking at sizes that don't fit. Looks are tests, and the shrinking is a trial fix.

Saving the session text now.

The records list is above, and nothing is entered yet. Say "ok" (or change any line) and I'll enter it all.

Wrap-up:
- **Handover:** the M1 trial's CLAUDE.md now covers v0.312.0 to v0.314.0, the records list waiting for your go, and your 13:16 import. It's committed and pushed.
- **Your 13:16 import** is not committed yet. It has the straw case on 4,0, the kit on 11,2 and rocks at 2.7, 4 a tile. It goes in with the next version.
- **Session text:** saved as `claude-logs\conversation-texts\2026-11-03 M1 rocks, herb case, tallies.md`. It has the records list and the prompt for the next session. It's committed on this computer, but the push to GitHub failed again because MilliStudio/claude-logs doesn't exist there yet. To fix it, create an empty private repository with that name at github.com/new, with no README. Then I can push.

---

### Dani · 2026-11-03 15:43

the "why" to wach decision are not correnctly used. they should state the reason the decision was made, not state my instructions alone. for example, why talliess show only near the player: because the screen would otherwise be cluttered
Unfortunately when i looked at all the decision in tr, this was mostly the case. why stated my request, not why i requested it. any way you can fix them?

4. "Tallies show only near the player" (UI/UX)
THis was in the game before. if not then add it. but i'm sure it worked this way before. no need to look that up. if the current design doc doesn't you can add it.

Take a key item: in the input's examples, after "a golden fish scale", add "the straw case of herbs of awakening".
not all examples need to be added. examples are there to clarify not to list everything. the herb case sohuld be mentioned in it's own section as a key object

Supply a dormant object, Restore a machine in pieces, Unlock with a floating object and Feed a mechanical creature (a Guardian): after each tally sentence, add:
It shows only while the player is within 3 tiles.
same issue. this is repetition. tally should have it's own sectioin in the design doc. otherwise you're repeating

---

### Claude · 2026-11-03 15:44

I'm checking whether Tessera Records lets a saved decision's "why" change, then reading all decisions.

Now I'm pulling every decision with its "why" to see how many need fixing.

I'm finding where key items and the UI are described in the design documents, to place the herb case and the tally sections.

Tessera Records' own screen says a saved decision can't be edited, only its title, so fixing the whys needs your yes. Now I'm listing exactly which decisions need a new why.

100 decisions need a new why. Before drafting them, I'm checking how the apparatus and the kit describe the herb, so the herb case section matches.

---

### Dani · 2026-11-03 15:49

(sent while Claude was working) i said they can't be changed, but this is an exception, because as they are now they are not complete and don't serve their purpose. so you can change them for this

---

### Claude · 2026-11-03 15:51

Drafting the 100 reasons now. First, a quick check in the game of when a tally disappears, so the new tally section describes it correctly.

The tally shows until its object wakes (or, for a floating object, until it vanishes). Writing the reasons file now.

Written for: you, to check before anything goes into Tessera Records.

This is a big batch: 100 decisions get a new "why". I've drafted all of them, and nothing is entered yet. Your exception is noted: the 25 October rule stays as it is, and each save will carry the note "Dani, 3 November 2026: exception, the whys were incomplete".

## The whys (open in VS Code's compare view)

The current "why" is on the left and my proposal is on the right.
- **23** take the reason from your own words. Example: "Key items are small and were hard to see. The shine makes them stand out wherever they lie."
- **77** are marked **(my reading)**. You never gave a reason for these, so I worked one out, and they need your check most. Example, for "No jump button": "Movement is the player's main input, and a phone leaves no thumb free for a jump button. Hopping by walking into a ledge keeps the controls to walking and suits a relaxing game."
- Your quotes leave the current text but stay in each decision's history.
- **Left alone:** 76 decisions have no "why" at all, and most of them are your own early ones with no reason on record. Whys that already give a reason also stay, such as "A result of the research on cozy games…".
- **One fix along the way:** "Plant/machine symbiosis… concentrated in… apparatuses" had a "why" copied from the refinery decision by mistake. It gets its own reason.

## The revised list

**Decisions 1–3:** the texts stay as before. Only their whys change:
1. "A tile keeps all its porous rocks": *One big boulder, or rocks that all look alike, doesn't look like a cluster. A cluster must show several rocks round the size set for them.*
2. "Harvestables keep their hitboxes on their tile": *(my reading) A hitbox reaching into the next tile blocks a way the map didn't plan. Maps are built tile by tile, so what blocks the way must stay on its own tile.*
3. "The herb of awakening is a key item placed on the map": *(my reading) Finding the herb becomes part of exploring the map, as with the other key items, and the map decides where the player gets it.*

**Decision 4 is dropped.** The 3-tile rule goes into the tally's own section instead.

**New feature "Show a tally"** (UI/UX, M1)
- Input: The player is within 3 tiles of something that still needs deliveries: a dormant object, such as a machine in pieces, a Lantern Sprout or a Guardian, or a floating object.
- Behaviour: A tally shows over it, with no window and no background: a tally line for each kind it needs. Each line has a count, such as 0/20 (what has come in of what is needed), and a token beside it. The token is a cube in the kind's colour for a resource, or a small model of the object for a key item. Each count goes up as each delivered item lands. The tally shows until the object wakes, or until a floating object vanishes. Farther than 3 tiles away, counting tile by tile, it doesn't show.
- Values: Shows within: 3 tiles.
- Saved: Nothing. Each object saves what it has been given.

**The four features with tallies then point to that section instead of describing the tally again:**
- Supply a dormant object: "Its tally shows on top of it (see Show a tally)."
- Restore a machine in pieces: "Its tally shows over the pieces, with a line for each key item (see Show a tally)."
- Unlock with a floating object: "…its tally shows over it (see Show a tally), and it takes what it needs from what the player carries."
- Feed a mechanical creature (a Guardian): "Its tally shows over it (see Show a tally)."

**New feature "Find the straw case of herbs"** (Environmental interactions and puzzles, M1)
- Input: The player comes close to the straw case of herbs and takes it like any other key item (see Take a key item).
- Behaviour: The straw case of herbs is a key item: a straw container like a pencil case, with herbs of awakening sticking out of one end. It lies on the map and shines like any other key item until the player takes it. It gives the player one herb of awakening, which the apparatus needs to make a bottle of awakening. The Gatherer's Kit doesn't come with the herb.
- Saved: Whether the case has been taken.

**Unchanged from before:** the sentence added to "Gather a resource". "Take a key item" is left as it is.

Change any line you like, or say "ok" and I'll enter everything at once.

---

### Dani · 2026-11-03 15:55

would you please place approve button under each green highlightd text in the doc file so that i can approve faster

---

### Claude · 2026-11-03 15:55

A Markdown file in VS Code can't hold buttons, so I'll make a small review page that runs on your computer. Each proposed reason gets an Approve button, and your clicks are saved to a file I can read. It stays local because a few of these decisions are private ones about Jousef.

---

### Dani · 2026-11-03 15:56

(sent while Claude was working) you can add text field in case i want to edit

---

### Claude · 2026-11-03 15:56

Each proposed reason already sits in a text field you can edit, and Approve saves your edited text. Starting the page now.

It loads all 103 reasons (100 old decisions and the 3 new ones), and a test click saved and undid itself. Taking a quick picture to check how it looks.

The page looks right. Opening it in your browser.

---

### Dani · 2026-11-03 15:56

(sent while Claude was working) so make the proposed text in a taxt box + an approvve button

---

### Claude · 2026-11-03 15:57

I've opened the review page in your browser at http://127.0.0.1:4895/. Each decision shows its proposed reason in a green text box with an **Approve** button under it, as you asked.

- **Editing:** click into the green box and change the text. Approve then saves your version.
- **Keep as now** leaves a decision's current "why" unchanged.
- **Undo** reverses a click.
- **"my reading"** marks the 77 reasons I worked out. The 23 without it come from your own words.
- **"The decision"** opens the full decision text, in case you need it to judge the reason.
- **The 3 new decisions** (rocks, hitboxes, herb case) are at the bottom.

Each click is saved straight away to a file on your computer, so you can stop and come back. Tell me when you're done, and I'll enter what you approved together with the rest of the list: the two new features and the tally changes.

---

### Dani · 2026-11-03 16:37

good job, thanks. yu can wrap up

---

### Claude · 2026-11-03 16:37

Checking what you approved on the page before I wrap up.

You approved 102 of the 103. Checking which one is left and which texts you edited.

Entering now. The script first checks that every change finds its exact text, then saves the whys and the feature edits in one go: all of them or none.

The check passed: 99 whys, 5 feature edits, 3 new decisions and 2 new features. The crash line at the end is Node closing on Windows after the check, not an error in the data. Saving now.

Saved. Verifying in Tessera Records that every why reads as you approved it.

All 99 match, and the new records are in place. Committing the DOCS files Tessera Records rewrote.

DOCS pushed. Backing up Tessera Records and closing the review page's server.

Now the handover in the M1 trial's CLAUDE.md.

Your 13:16 import isn't the only change in the folder any more. Several code files are modified too, so I'm checking what's going on before touching anything else.

That other session's commit is v0.315.0, and it already took in your 13:16 import. I'll correct those two lines in the handover so it doesn't say the import is still waiting.

Handover pushed. Now the session text, regenerated over the whole session so it includes this afternoon.

Done. Everything you approved is in Tessera Records, and the session is wrapped up.

**Entered in Tessera Records** (about 16:40):
- **99 decisions** now give a reason as their "why". Your 7 edits went in word for word. Each save carries a note saying it was your one-off exception, and the old whys stay in each decision's history. You didn't click "A secret passage opens a doorway", so its "why" is unchanged.
- **3 new decisions:** porous rocks, hitboxes, and the herb as a key item.
- **2 new features:** "Show a tally" and "Find the straw case of herbs".
- **The four tally features** now point to "Show a tally" instead of describing the tally each time, and "Gather a resource" has its new sentence.
- The DOCS files Tessera Records rewrote are committed and pushed, and Tessera Records is backed up.

**Something to know:** another Claude session is working in the M1 trial's folder at the same time. At 16:23 it made v0.315.0 ("big deliveries fly as fewer things"), and that version already includes your 13:16 import. It still has unsaved changes to the editor and the game. I left them alone and noted this in the handover.

**Saved:**
- **Handover:** the M1 trial's CLAUDE.md is updated, committed and pushed.
- **Session text:** saved and committed on this computer, with the prompt for the next session. The push to GitHub failed again because MilliStudio/claude-logs doesn't exist there yet. Create it as an empty private repository at github.com/new, with no README, and I'll push.

**Q1.** So future decisions get this right without you having to repeat it, may I add this rule under "Recording things" in the Tessera file? I recommend yes.
> A decision's why gives the reason it was made, not Dani's request. Where Dani gave no reason, Claude proposes one for her to check (Dani, 2026-11-03). In the design text, something several features share gets its own section, which they point to, and examples clarify rather than list everything (Dani, 2026-11-03).

---

### Dani · 2026-11-03 16:42

approved

---

Closing note (3 November 2026, about 16:55): Built and pushed v0.312.0 (porous rocks), v0.313.0 (the straw case of herbs) and v0.314.0 (tallies within 3 tiles). Then, in Tessera Records, entered with Dani's approval of each item on a local review page: the decisions A tile keeps all its porous rocks, Harvestables keep their hitboxes on their tile, and The herb of awakening is a key item placed on the map; the features Show a tally and Find the straw case of herbs; the four tally features pointing to Show a tally; the rocks and hitboxes sentence in Gather a resource; and 99 decisions' whys rewritten to give the reason instead of Dani's request, as her one-off exception to never editing decisions (7 with her own edits; A secret passage opens a doorway left as it was). Tessera DOCS f5df8f8. Dani approved a new rule in the Tessera file's Recording things: a decision's why gives the reason; shared things get their own section; examples clarify. Another Claude session made v0.315.0 in the same folder at 16:23 (big deliveries fly as fewer things, with Dani's 13:16 import) and still had uncommitted work at 16:45. Prompt for the next session: Task: continue the M1 trial (Dropbox\Studio\Tessera\repositories\tessera-m1). Read its CLAUDE.md and run git status; uncommitted changes belong to the other session unless it has finished and committed them. Next: as in the handover's Next.

---

This conversation's 12 images are in images\2026-11-03 M1 rocks, herb case, tallies\. [The list of them](<../images/2026-11-03 M1 rocks, herb case, tallies/index.md>) gives each one's time.
