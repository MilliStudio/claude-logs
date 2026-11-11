# M1 small wayfinders

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Its images are in images\2026-11-11 M1 small wayfinders\, shown or linked where they came. Private: never commit or share.

---

### Dani · 2026-11-11 14:46

i would like to add a new type of wayfinder, one that unlocks tiles but not awaken them. same design as the first wayfinders just smaller, slower, and they sway slowly from side to side while flying. like long sways that span over severl flaps. they're be the same beige but instead of the head being brown it'll be like 62b5b5. they should have their own sliders. flap speed, sway amount, sway speed, and speed and mane unlock range. of course what's they're fed too

---

### Claude · 2026-11-11 14:47

I'm reading how the wayfinders and waypoints work now, so I can tell you how the new small wayfinder would fit in before I build it.

Before I build it, two parts of your request can mean different things, and each leads to different work.

**Q1. Unlock range.** Right now a waypoint raises only the tiles you link to it with Link tiles. My reading of "unlock range" is that a small waypoint raises every tile within that many tiles across, counted the way Revives counts: 3 means the ring of 6 tiles round it, and 5 means two rings, 18 tiles. Those tiles would wait in the void until it's fed. I recommend that: one slider for all small waypoints, and a box where you can give one waypoint its own range, as Revives works. Did you mean something else, like keeping the links?

**Q2. How they travel.** I recommend they work like the big ones, with their own waypoints:
- A small wayfinder sits on its waypoint, you feed it, its tiles rise, and it flies on to the next small waypoint on those tiles.
- There are at most two small ones, as with the big ones.
- A big waypoint's tiles can hold a small waypoint, and the other way round. Each one calls its own kind of bird.

Unless you say otherwise, I'll build the rest like this:
- **Sway:** in flight, its path weaves slowly left and right of the straight line, and it leans into each sway. Sway amount is in metres. Sway speed is how long one sway takes, so one sway lasts several flaps.
- **Size:** it gets a Size slider too, starting at 60% of the big ones.
- **Colour:** beige body, #62b5b5 head. The shoulder cogs turn #62b5b5 as well, since today they share the head's colour.
- **Feeding:** each small waypoint has its own Needs box, plus its own Make default and Change to default values.
- **Whistle:** they answer it the way the big ones do.
- **Records:** "unlocks but doesn't revive" means its tiles rise white, and giant flowers on them stay dried until a lantern, machine, big wayfinder or Guardian revives them.

---

### Dani · 2026-11-11 14:55

q1 well yeah of course

[Request interrupted by user]

q2 also of course. i said like the original ones and gave the differences yes? they can have an extra slider for other mechanics that only speeds the actions up

---

### Claude · 2026-11-11 14:58

Got it. One extra slider then, which speeds up or slows down everything else a small wayfinder does: waking, hops, take-off and landing, pecking and its answer to the whistle. This is a large job, about 2–3 hours. I'll build it all, test it and commit.

Still reading the map editor's waypoint code, so the small waypoint can reuse it rather than duplicate it.

Now reading how the map editor's slider boxes attach to things, so the small wayfinder's sliders get their own box.

I've mapped the game side. Next I'm checking how waypoints on floating tiles are built, then I'll start writing.

Starting on the map's rules now: working out which tiles a small waypoint's unlock range raises, without hiding the start tile or a waypoint that comes before it.

Writing the map rules now (which tiles each small waypoint raises), then the game and the editor.

Now the plan's code.

The map rules are in. Now the comment describing the waypoint list, then the game's birds.

Adding the sliders and what their i icons say.

Now teaching the game's birds which waypoints are theirs (big birds to waypoints, small birds to small waypoints).

Still in the game code: now the birds flying to you after a whistle, and the signs pointing to a small waypoint.

The birds are done. Now the last game pieces: small waypoints don't revive, and the Unlock range slider rebuilds the map live.

The game side is written and passes a syntax check. Checking the rest of the game for places that still assume only two birds, then on to the map editor.

Now the map editor: reading and saving small waypoints.

I'm adding the small waypoint's own pieces to the map editor: its tool, its default needs and the tiles its range covers.

Now the boxes: the waypoint box and the Revives box learn to show a small waypoint's unlock range.

A name clash broke the editor for a moment; fixing it now.

Marking small waypoints on the editor's map in teal so they stand apart from the big ones.

Now the server, so Save writes small waypoints and their own default.

The server restarts itself when its file changes, so Dani's trial already has these changes. Running the tests now.

All 219 tests pass. Adding tests for the unlock range rules.

Tests pass (73 in the map file). Next I'll check it in a hidden browser on a scratch copy with a map holding small waypoints. Looking for the browser harness from earlier sessions.

Setting up the hidden-browser test: picking two tiles near your start tile on the copy for small waypoints.

The editor side works on the copy: placing, the Unlock range box, switching kinds, and Save writing `small: true, range: 7`. Checking the map picture.

Claude looked at [image 001](<../images/2026-11-11 M1 small wayfinders/001 Claude.png>)

The map shows the teal marks and the orange lines to the raised tiles. Now the game on the copy: feeding a small waypoint, white tiles rising, and the small bird's flight and sway.

Feeding works: 28 tiles rose white (nothing revived), and the small bird flies to the next small waypoint swaying about 0.35 m each way, leaning about 23°. Checking the pictures.

Claude looked at [image 002](<../images/2026-11-11 M1 small wayfinders/002 Claude.png>)

A live rebuild broke on code that still treated the bird shapes as a list. That would hit your trial on every map change, so fixing it now.

Fixed. Re-running the live rebuild check with the fix in the copy.

The live rebuild works now. Checking your running trial (game and editor) for errors in a hidden browser, without touching your saves.

Your trial runs without errors and the editor shows the new Small waypoint tool. Now the README, version and commit.

Writing the README entry is done; adding one line to its Reviving entry, then bumping the version and committing.

Committed and pushed as v0.475.0. Stopping the scratch copy's server.

I've built the small wayfinders (v0.475.0). Update M1 testing to get them there.

**In the map editor**
- A new **Small waypoint** tool sits next to Waypoint. Small waypoints show a teal dot and teal arrow on the map.
- A small waypoint has no Link tiles. When it's fed, it raises every tile in its **Unlock range**. Its box has its own range slider, and a tick box to follow the shared Unlock range slider instead. Orange lines show which tiles it will raise.
- Those tiles rise **white**, because the small wayfinder revives nothing.
- What it's fed works like a waypoint's. Small waypoints have their own **Make default** and **Change to default values**, separate from the big waypoints.
- Double-click a waypoint with the other kind's tool to switch its kind.

**Tiles a small waypoint never raises**
- the start tile
- tiles already linked to a waypoint
- tiles a small waypoint nearer the start already raises
- the tiles of waypoints that come before it in the chain

So two small waypoints can't hide each other.

**The small wayfinders**
- Up to two of them. Each kind of waypoint calls its own kind of bird, so big and small chains can lead into each other.
- Beige, with a #62b5b5 head and cogs. The cogs were plum like the head, so I made them teal too. Their whistle sign shows the teal head.
- They sway slowly side to side while flying and lean into each sway.

**Sliders** (in the "Every small waypoint" box):

| Slider | Starts at |
|---|---|
| Small wayfinder size | 60% of the big ones |
| Unlock range | 3 tiles across |
| Flies at a speed of | 5 m a second |
| Wing beats a second | 4 (big ones: 5) |
| Sways to each side by | 0.35 m |
| One sway, left and back, takes | 1.8 s |
| Everything else goes at | 0.8 × the big ones' speed |

A new small waypoint needs 5 porous rock fragments and 5 pine cones. All of these numbers are my guesses, so tune away. Moving Unlock range updates the game live.

**Something to watch:** a large range next to the start tile also hides the tiles between you and the waypoint. In my test, a range of 7 did exactly that.

**A slip on my side:** for about 20 minutes while I worked, map changes in the editor didn't reach your open game. If you saw "The map from the editor couldn't be built here", that was me. It's fixed, and a reload clears it.

I tested it on a copy of your map in a hidden browser:
- I placed, resized, switched and saved small waypoints in the editor.
- In the game, feeding one raised 28 white tiles, and the bird swayed about 0.35 m each way on its flight to the next one.
- The whistle made it shake and throw sparks, and its sign showed the teal head.

All 221 tests pass. It took about 35 minutes, not the 2–3 hours I estimated.

---

### Dani · 2026-11-11 15:28

super great thanks. can we tr and close up

---

### Claude · 2026-11-11 15:28

I'll do the wrap-up first, then list the Tessera Records entries for your yes. Reading how records are kept.

Still looking up how Tessera Records stores decisions and features, so I can find the existing wayfinder records to build on.

I have the existing wayfinder records. Checking the asset list and the two other features that mention wayfinders.

Records are mapped out. Now the wrap-up steps: reading how the session text and picture scripts are run.

Handover written. Committing it, then saving the session text and pictures.

---

The session ran on 11 November 2026 from about 14:45 to about 15:45. It built v0.475.0: small wayfinders and small waypoints. A small waypoint raises every tile within its unlock range, white, as its small wayfinder revives nothing; two small birds, beige with a #62b5b5 head and cogs, go from small waypoint to small waypoint, swaying as they fly, with seven sliders of their own and their own default needs. Tessera Records: entries proposed at Dani's "tr and close up", waiting for her answer. Waiting for Dani: Update M1 testing to v0.475.0.
