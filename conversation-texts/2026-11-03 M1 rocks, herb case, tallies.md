# 3 November 2026, midday, M1 trial: porous rocks round the average size, the straw case of herbs, tallies within 3 tiles

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

---

Closing note (3 November 2026): Built and pushed v0.312.0 (a tile keeps all its porous rocks, each round the Average size, no two alike, none hidden in another; Dani's import at 12:27), v0.313.0 (the herb of awakening in a straw case, a key item placed on the map, instead of coming with the kit) and v0.314.0 (tallies only within 3 tiles, with a Tally shows within slider; Dani's import at 13:04). Dani's import at 13:16 (rocks 2.7, 4 a tile; the kit on 11,2; the straw case on 4,0) waits uncommitted for the next version. Tessera Records: the list above waits for Dani's go. Prompt for the next session: Task: continue the M1 trial (Dropbox\Studio\Tessera\repositories\tessera-m1, v0.314.0). Read its CLAUDE.md and run git status. Next: Dani's go on the Tessera Records list in this session text, then enter it; commit her 13:16 import with the next version.
