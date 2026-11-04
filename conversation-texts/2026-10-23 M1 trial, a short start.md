# M1 trial, a short start (2026-10-23)

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Its images are in images\2026-10-23 M1 trial, a short start\, shown or linked where they came. Private: never commit or share.

---

### Dani · 2026-10-23 21:57

Task: the M1 trial (Dropbox\Studio\Tessera\repositories\tessera-m1, page /planet), v0.35.0, synced.

The costly early decisions for the round world are done and recorded (23 October). Don't reopen them. The planet rules are in the TDD's "Building a planet": a round planet of hexagons with 12 pentagons, the void start, one planet per level, the same 3.75 m tile width on every planet, size 12 for M1, and walls, stairs and crates kept off pentagons. Saving progress and phones are decided. Room for two floors is decided but not built.

Still open: how planet maps are painted. A painting mode on the planet itself is proposed (pick from the colour key, tap tiles, save the same one-pixel-per-tile picture; about 2 hours). Dani wants it only after the important decisions. Two questions wait for Jousef: the pentagons' rings, and the M2 tile art.

Ask Dani what to work on next. Remaining M1 work: saving progress (decided, not built: number tiles the same way every time, so saves stay valid), the kit, the apparatus, and a phone test.

Testing: the hidden-browser scripts are in C:\Users\someo\AppData\Local\Temp\claude\c--Users-someo-Dropbox-Studio-Tessera-repositories-tessera-m1\d59e1d45-259a-46ca-8077-71be0ba34570\scratchpad\drive: node run.mjs <tests…> [shot.png] runs harness.js (helpers in window.T), then each test file, in a fresh page. Copy them to your own scratchpad. Walking runs on capped frame time, so measure it with T.until, not real time.

The prompt is also at the end of claude-logs\conversation-texts\2026

---

### Claude · 2026-10-23 21:57

I'll start by reading the end of the newest session log, as the rules ask.

The log matches the handover: v0.35.0, synced, nothing pending. Before I recommend, a quick look at what the README says about the kit and the apparatus:

I've read the end of the newest session log, and it matches the handover. The trial is at v0.35.0, synced, with no unsaved work. I copied the test scripts to this session's scratchpad.

Four pieces of M1 work are left:

1. **Saving progress:** the game remembers what you did after the browser closes.
2. **The kit:** you find it behind a rock. Until you have it, gathering does nothing.
3. **The apparatus:** you put in materials, a timer runs, and you claim the result.
4. **A phone test:** you play it on your phone over Wi-Fi.

**Q1.** What should I work on next? I recommend saving progress, for three reasons:
- It's decided, and it needs no design from you, so I can build it all in one go.
- The kit and the apparatus both depend on it. The TDD says the kit's contents must be saved, and the apparatus timer keeps running while the game is closed. If saving exists first, each of them can save from the day it's built.
- You can check it in a few seconds: gather something, close the tab, open it again, and it's still there.

After that, the kit, then the apparatus. The TDD says you design the kit window and the apparatus window, so I'd build simple stand-in windows that you can replace later. You can do the phone test whenever you have your phone nearby.

The README's opening line still says gathering and restoring aren't built. I'll correct it in the next version.

---

### Dani · 2026-10-23 22:01

yes the save

---

### Claude · 2026-10-23 22:01

Saving progress. It's a mid-sized task, about 2–3 hours. First I'll look at how the round world holds its state.

Now the TDD's rules on what gets saved, and the save-behaviour document:

The TDD lists what each feature saves. Let me check what was said about saving in earlier sessions, so I build what was decided:

The server is running. Now the README, to see where the round world's rules are described:

The numbering already follows the map picture exactly. Now the save module:

Now the game itself. Imports and the `restoring` flag first:

Now the saving section itself, after gathering and the dormant object:

Now the buttons and sliders:

Checking for name clashes with the new names:

No clashes. Now the page: the Start over button and a line in Controls.

Now the tile-numbering rule, written down in the grid code and guarded by tests:

The planet is turned after it's built, so the poles don't stay at the top. The test shouldn't check that. I'll check only the pixel:

All 98 tests pass. Now the real check in the hidden browser. First, how the earlier scripts pushed crates:

I'll write a test that makes progress, reloads the page, and checks that everything came back:

Progress survives closing the browser. Now the size slider and a damaged save:

Claude looked at [image 001](<../images/2026-10-23 M1 trial, a short start/001 Claude.png>)

Claude looked at [image 002](<../images/2026-10-23 M1 trial, a short start/002 Claude.png>)

Both buttons fit, on a computer screen and a phone held sideways. Now the previous session's checks, to make sure nothing else broke:

Same results as before. Now the README: the opening line, the Start over button, saving, tile numbers, and the settings note.

Now a look over the whole change before saving it:

The change reads right. Saving it as v0.36.0:

Progress is now saved in the browser. It's v0.36.0, synced to GitHub, and all 98 tests pass.

**What's saved:** what you carry, how many things the dormant object has, the tiles that have risen, and where each crate stands. Closing the browser keeps them, on a phone too.

**What isn't saved:** these follow the TDD.
- You start at the portal.
- The yellow things come back.
- The secret passage closes again.

**To try it:** pick up a yellow thing and push a crate. Then close the tab and open http://127.0.0.1:4890/planet again. The counter still says "Carrying 1", and the crate is where you left it.

**Tile numbers:** each tile's number already came from its pixel in the map picture, so it was the same every time. That rule is now written in the code. Two new tests fail if a later change renumbers the tiles or moves the island onto other tiles. Either change would make a save point at the wrong tiles.

I checked it in the hidden browser:
- reloading, and closing and reopening the browser;
- reloading while restored tiles were still rising;
- Restore all, then Start over;
- the size slider;
- a deliberately damaged save, which shows a short note and starts from the beginning.

**Changes you didn't ask for directly:**
- **Start over** is now its own button, next to Restore all, and it asks before clearing your progress. Before, you could only reach it by pressing Restore all first.
- **Restore all is saved too.** After you press it, the whole planet stays up until you press Start over.
- **The size and width sliders** no longer wipe everything. Each planet size keeps its own progress, which comes back when you return to that size.
- **Automatic reloads keep your progress:** the game reloads itself when code or maps change, and those reloads no longer reset it.
- The README's opening line said gathering and restoring weren't built. I corrected it.

I estimated 2–3 hours, and it was done by 22:11, well under that.

Next, I'd build the kit: you find it behind a rock, and gathering does nothing until you have it. Its window would be a simple stand-in until you design it.

---

Written on 4 November 2026 from the backed-up log of session ea8b91bf-5b96-47a2-b8f7-e6a9bc92a495 (Tessera-repositories-tessera-m1); this conversation had no text before.
