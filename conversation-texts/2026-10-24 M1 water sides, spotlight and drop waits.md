# M1 water sides, spotlight and drop waits

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Private: never commit or share.

---

### Dani · 2026-10-24 23:05

for m1 
1. can  you create sides for water tiles rather than keepthing them open. it should be the the translucent water material, as if the water is in an invisible container
2. getting off a create or rock is instant, there used to be .2 seconds before going down
3. can you flatten the character's beak. keep it the same but just not sticking out
4. when walking the opposite direction, the character takes too long to turn around. it dowsn't need to be instant but not that long
5. please remove the trees whle the area is still dormant, and they should appear when the object is testored and the tiles turn green. 
6. remove the rest of islands from the planet
7. can you move the clouds up by 20%

---

### Claude · 2026-10-24 23:10

Now making the changes. First the numbers in key.js:

Now removing the small north-east island from the drawing:

Now the trees that wait for the green:

---

### Dani · 2026-10-24 23:10

(sent while Claude was working) also decrease the crack;s wait period by .3 seconds

---

### Claude · 2026-10-24 23:11

Noted: the secret passage will open after 1.5 seconds instead of 1.8. Adding that too:

Now the beak, pushed back so only its front shows:

Now the water's sides. Each water tile gets a see-through side wherever its neighbour isn't water at the same level:

Tests pass. Now checking in the running game. Adding a read-out of the player's facing so the turn can be measured:

Everything behaves as intended before restoring: trees hidden and passable, a 0.2 s wait on the rock, the 1 m ledge still stepped at once, a 180° turn done in 0.3 s. Now restoring, then screenshots:

---

### Dani · 2026-10-24 23:15

(sent while Claude was working) just remove the beak from the character and instead color a white circle where it used to eb

---

### Claude · 2026-10-24 23:16

Got it: the beak goes, and a white circle takes its place. Looking at the screenshots first:

The water tiles now have sides, and the tree grew back with the green. The pond's edge with the void isn't in this view, so I'll take a closer one after swapping the beak for the white circle:

The white circle shows on the head's front. All seven changes plus the faster secret passage work in the game. Now the README:

---

### Dani · 2026-10-24 23:18

(sent while Claude was working) one of these show correct water side and other buggy water side

(sent while Claude was working) also you can adjust the water feature in tr. i think it used to be 1m and now 0,8?

---

### Claude · 2026-10-24 23:21

Both sides now show the same light see-through blue, as in your second picture. Updating the README:

Tests pass. Committing, labelling v0.56.0 and pushing:

v0.56.0 is synced. Now the feature in Tessera Records. Reading how records are entered:

---

### Dani · 2026-10-24 23:22

(sent while Claude was working) now a new addition. can you shine a spotlight onto the restored area? the light color is the same yellow as coulds

---

### Claude · 2026-10-24 23:22

Features live elsewhere than blocks. Finding their route:

---

### Dani · 2026-10-24 23:22

(sent while Claude was working) and the spotlight creates strong shadows

---

### Claude · 2026-10-24 23:22

Still updating the "Walk on clouds" feature in Tessera Records (finding how the app saves a changed feature). After that I'll build the spotlight with strong shadows.

Saved. Last time the feature also printed into three documents in the Tessera repository, so checking those:

Now looking at it in the game, before and after restoring:

The view calls returned errors. Checking the page for a script error:

Name clash: the code already has `spot` and `spotOn` for something else. Renaming mine to `spotlight` and `spotlightOn`:

Fixing the comment's line break:

Both versions are synced. One last check: which other features in Tessera Records these changes make out of date:

All done and synced: v0.56.0 has your seven changes plus the extras you sent while I worked, and v0.57.0 adds the spotlight. Reload the game to see them.

**v0.56.0**
1. **Water's sides:** water tiles now have see-through sides wherever they meet the void or lower ground. Your first screenshot was the buggy one: sides facing away from the soft sun were lit like a wall and turned dark grey. Now every side shows the same light, see-through blue as in your second screenshot, whichever way it faces.
2. **Stepping off:** getting off a rock or crate now waits 0.2 s at the edge. I gave the tops of walls the same wait. Stepping off the island onto the clouds is still instant, as the cloud feature says.
3. **Beak:** gone. A white circle, 14 cm across, sits where it was.
4. **Turning round:** now takes 0.3 s. Before, it took over a second, because turning to face the exact opposite way stalled before it started.
5. **Trees:** they aren't there while the island is dormant, and they block nothing. Each grows as its tile turns green. A tree whose spot a crate covers waits until the crate is moved off, so a crate can't get stuck inside a tree.
6. **Other islands:** I removed the two far islands and also the small island to the north-east. The planet now has only one island.
7. **Clouds:** 20% higher. Their tops now sit 0.8 m below the ground instead of 1 m.
- **Secret passage:** opens after 1.5 s instead of 1.8 s.

**v0.57.0: spotlight.** When the dormant object is restored, a spotlight 25 m above the island's middle shines down in the clouds' yellow (#f8ecb5). It fades in over 1.5 seconds and its edge is soft. The strong shadows needed one side effect: as the spotlight comes on, the soft sun and the dim light fade to 40% of their strength. Otherwise they filled the shadows in and left them pale. Because the light comes from straight above, shadows are dark but short, right under things.

I left out a visible light beam like the one in your storyboard. From the game's camera, it would cover the island. `DEMO_SPOT_LIGHT`, `DEMO_SPOT_HEIGHT` and `DEMO_SPOT_FILL` in `src/key.js` set its strength, its height and how far the other lights fade.

**Tessera Records:** I took "the water feature" to mean "Walk on clouds", since that's the one that said 1 m. It now says 0.8 m for the clouds' tops and the step down. Its three printed documents are committed and synced.

Three other features no longer match the trial:
- **Move** still says a turn rate of 12 per second.
- **Hop** still says a step down has no wait.
- **Find a hidden passage** still says 1.8 s.

The water's sides, the trees waiting for the green, the spotlight and the white circle aren't recorded anywhere yet. Should I draft those updates and new entries for you to check?

---

### Dani · 2026-10-24 23:28

the game is not working

---

### Claude · 2026-10-24 23:28

Checking the running game for errors:

A fresh page works. Your browser differs in two ways: it has saved progress (likely a restored island), and it may hold older copies of the files. Testing a reload with a restored save:

Testing that the page still loads and still reloads itself on a change:

The page loads and reloads itself on a change. Committing as v0.57.1:

**Press F5 once in the game's tab.** That should fix it: the game itself works. I opened it fresh and with a saved, restored island, and walking, the trees and the spotlight all work.

**What happened:** while I was adding the spotlight, the code briefly had a naming error, which I fixed a minute later. Your open tab reloaded at that moment, got the broken version and stopped. The bit that reloads the page when code changes was inside the broken code, so the tab never loaded the fix.

**Fixed for the future (v0.57.1, synced):** the reload listener now sits in the page itself, separate from the game's code. Even if the code breaks for a moment, the page reloads by itself once it's fixed. I checked here that it still reloads after a change.

If F5 doesn't fix it, tell me what you see: a blank screen, a frozen picture, or a character that won't move.

---

### Dani · 2026-10-25 00:39

wh*t did you do

---

### Claude · 2026-10-25 00:39

Something in my spotlight change broke the drawing: only the tile outlines show. Looking at the before-restore screenshot I took and didn't check:

The local address is down now: you've switched to the phone server (192.168.1.87). Using that address:

No game server is running on either address now; you may have closed it. I'll start my own copy on a separate port for testing, so it won't clash with yours:

(That opened a tab at 127.0.0.1:4891 in your browser; sorry, you can close it.) Testing on the real graphics card:

No more errors. Checking the pictures:

All three work on your graphics card: dormant, restored, and after a reload with a saved restored island. Committing v0.57.2 and stopping my test server:

It's fixed: v0.57.2 is synced. Start the trial again (it isn't running now), then reload the page.

**What I did wrong:** I added the spotlight but only turned it on once the island is restored. While the island was dormant, the spotlight's shadows were never drawn. Your graphics card (an RTX 3080 Ti) treats that as an error and refuses to draw anything that takes light: tiles, the player, trees. Only the tile outlines take no light, which is why they were all you saw.

**Why I missed it:** my hidden test browser draws in software, and software drawing lets this error pass. I checked the restored island but not the dormant one on a real graphics card.

**The fix:** the spotlight's shadows are now drawn once when the planet is built, then kept up to date only while it shines. I tested on your graphics card with the dormant island, the restored island, and a reload with your saved progress. No errors, and everything draws. From now on I'll test on the real graphics card too.

**Also:** starting my test copy opened a tab at 127.0.0.1:4891 in your browser. You can close it; that copy is stopped.

---

### Dani · 2026-10-25 00:43

give me the link

---

### Claude · 2026-10-25 00:43

The game is running again. Both links work:

- **On this computer:** http://127.0.0.1:4890/planet
- **On your phone (same Wi-Fi):** http://192.168.1.87:4890/planet

If the page you already have open still shows only outlines, reload it once (F5).

---

### Dani · 2026-10-25 00:45

you're messing with the game. what did you do. the walk speed forward is now slower than sideways

---

### Claude · 2026-10-25 00:46

Measuring it rather than guessing: walking in each direction on open ground, on your graphics card, in the current version and in v0.55.0 from before this session. My test copies run on separate ports and won't open tabs this time.

On a dormant island both versions walk 4.08 m/s in every direction at 60 frames a second. Now measuring on a restored island with the spotlight on, at your screen's size:

---

### Dani · 2026-10-25 00:47

(sent while Claude was working) what else could you have changed. pls revert to the version before asking for a spotlight

---

### Claude · 2026-10-25 00:48

No spotlight left. Checking that only the version number differs from v0.56.0, then testing on your graphics card:

Both draw correctly, with no spotlight. Committing as v0.58.0 and cleaning up my test copies:

The game is back to v0.56.0, the version before the spotlight. It's saved as v0.58.0 and synced; the spotlight versions stay in the history. Your open game should reload by itself; if it doesn't, press F5. I tested it on your graphics card, dormant and restored: everything draws, with no errors.

**Walking speed:** I didn't change it, and I measured to make sure. On your graphics card, v0.55.0 (the version from before this session) and the current game both walk about 4.1 m/s forward, back and sideways, at 60 frames a second.

**What else changed this session** (all still in, since you asked to keep the version before the spotlight):
- The water's sides
- A 0.2 s wait before stepping off a rock, crate or wall
- The white circle instead of the beak
- Turning round in 0.3 s
- Trees that wait for the green
- One island only
- Clouds 20% higher
- The secret passage opening after 1.5 s

None of these touches walking speed. The turning change only affects which way the character faces, not how it moves.

If walking still feels wrong, tell me which keys or what you see, and I'll measure that case.

---

### Dani · 2026-10-25 00:51

can you make it 0.4 secondds wait before stepping off rocks or walls

---

### Claude · 2026-10-25 00:51

Testing on your graphics card against the running game: stepping off a rock, and a 1 m ledge for comparison.

The character stops at the rock's edge and steps down 0.41 s later. The 1 m ledge is still stepped down without stopping. Committing:

Stepping off a rock or wall now waits 0.4 seconds at the edge. It's saved as v0.59.0 and synced, and your open game should reload by itself.

I tested it on your graphics card: the character stops at a rock's edge and steps down 0.41 seconds later. A 1 m step in the ground is still stepped down without stopping.

- **Crates:** they use the same rule, so stepping off a crate also waits 0.4 seconds. Tell me if crates should stay at 0.2.
- **Higher drops:** dropping off any edge higher than 1.1 m waits only 0.25 seconds, so getting down from a low rock now takes longer than from a high wall. Tell me if those should match.

---

### Dani · 2026-10-25 00:52

the water is messed up again

---

### Claude · 2026-10-25 00:53

Reproducing your view to see exactly what's wrong. Your camera is tilted lower than the default, so I'll stand at the pond's edge with a low camera and turn it all the way round:

---

### Dani · 2026-10-25 00:54

(sent while Claude was working) rocks and high walls should be the same. but i feel like it's still too easy to fall. so maybe revert to .2

(sent while Claude was working) cancel that. make them both 0.45 first

---

### Claude · 2026-10-25 00:56

Noted: both 0.45 s. Dropping off a rock, crate or wall, and dropping off any edge higher than 1.1 m, will wait the same 0.45 s:

The file now has Windows line endings, so I'll make these edits with the editor tool instead:

Testing all three kinds of drop on your graphics card:

The drop change is done and synced as v0.60.0. Dropping off a rock, crate or wall, or off any edge higher than 1.1 m, now waits 0.45 s. Tested on your graphics card: rock 0.45 s, 2 m plateau 0.47 s. A 1 m step in the ground is still stepped down without stopping.

**The water:** I haven't changed anything yet. I've already guessed wrong once, so I'd rather ask first. In your picture I can see two possible problems:

- **A. The light band along the sides.** Every water side shows as a light, whitish-blue band, lighter than the water's surface. I made them light after your two earlier screenshots. I took the dark-sided one as the bug, but you may have meant the light one.
- **B. The strip at the far edge.** Near the pond's far edge, the water's surface hangs over the void like a thin strip, with no bed under it. You see straight through the water there, because the far sides are drawn only from outside. This was there before the sides existed too.

**Q1.** Which one looks wrong to you: A, B, or both?

My recommendation for A: give the sides the same colour as the water's surface, neither lighter nor darker, so the water reads as one solid block. For B: draw the far sides from the inside too, so the water closes off at the edge.

---

### Dani · 2026-10-25 00:58

can you add a slider for the timing? just this one

---

### Claude · 2026-10-25 00:59

Now the README and the key.js comment, then a test:

My test redeclared a name (a test-script slip, not the game). Re-running the slider part:

Settings now has a **Drop wait** slider, under Speed. It's saved as v0.61.0 and synced, and your open game should reload by itself.

- **Range:** 0 to 1 second, in steps of 0.05. It starts at 0.45 s.
- **What it sets:** how long you walk at an edge before dropping off a rock, crate or wall, or off any edge higher than 1.1 m. Steps of up to 1.1 m in the ground are still stepped down at once.
- **Tested on your graphics card:** set to 0.8 s, the rock waited 0.79 s and the 2 m plateau 0.80 s.

Like the other settings, it isn't saved: it goes back to 0.45 s each time the page opens. When you've found the time you like, tell me and I'll make it the starting value.

The water question from before is still open: is the problem the light band along the sides, the strip at the far edge, or both?

---

### Dani · 2026-10-25 01:02

ok .2 is best. you can remove the sliders except speed. 
after that, can you make the tiles that turn green start their transformation before the tiles that get unlocked

---

### Claude · 2026-10-25 01:03

Two jobs: first the drop wait at 0.2 s with every slider gone except Speed, then green before rising. Checking where the sliders are used:

Now the README's Settings and drop text:

Only Speed is left, the wheel and T still zoom and tilt, and drops wait 0.2 s. Committing, then on to the green:

Both changes are done and synced. Your open game should reload by itself.

**v0.62.0: 0.2 s and one slider**
- Dropping off a rock, crate, wall or high edge now waits 0.2 s. Tested: rock 0.22 s, 2 m plateau 0.20 s.
- Settings now has only **Speed**. The other values stay in `src/key.js`. You can still zoom with the mouse wheel and tilt with T and G or by dragging up and down with the right mouse button.
- I added those camera controls to the Controls list, since the sliders no longer show them. While there, I fixed two wrong facts in that list: the secret passage now says 1.5 seconds (it said 2), and the dormant object is now called orange (it said grey).

**v0.63.0: green first, then the hidden tiles rise**
- Before, the hidden tiles started rising at the same moment the island started turning green.
- Now the island turns green in a wave from the dormant object, and the hidden tiles start rising only once it's fully green. On this island, that's 3.4 s after restoring, and they're all up about a second later.
- If 3.4 s feels too long, `DEMO_UNLOCK_PAUSE` in `src/key.js` moves the start. It's 0 now; a negative number, such as −2, starts the rising before the green has finished.

The water question is still open: does the problem look like the light band along the sides, the strip at the pond's far edge, or both?

---

### Dani · 2026-10-25 01:11

1. is it possible to return the original sunlight before we started changing all the colors, but limit it to the restored area?
2. i think we can forget about the water. it's not important and shouldn't waste our time or tokens
3. yes i think it's the unlocked tiles wait too long. they should appear when restoration is halfway. 
4. can you remove some cloude at the tiles next to the newly unlocked tiles

---

### Claude · 2026-10-25 01:11

Four answers:
- **Water:** dropped.
- **Unlocked tiles:** they'll start rising halfway through the green.
- **Clouds:** I'll look at the clouds beside the unlocked tiles before changing them.
- **Sunlight:** first, how the light looked before the colours changed.

v0.38.0 was already night. Looking further back for the daylight:

---

### Dani · 2026-10-25 01:12

(sent while Claude was working) ignore the daylight request sorry

---

### Claude · 2026-10-25 01:13

Understood, no daylight. Looking at the clouds:

Clouds no longer sit beside the white unlocked tiles; they now float on open void. Checking the timing of the rise, then committing:

The hidden tiles now start rising 1.7 s after restoring, halfway through the green, and are all up by 2.9 s. The island finishes turning green at 3.4 s. Updating the README and committing:

Both changes are in v0.64.0, synced. Your open game should reload by itself. I dropped the daylight and the water, as you said.

- **Unlocked tiles:** they now start rising halfway through the green, 1.7 s after restoring instead of 3.4 s, and are all up by 2.9 s. The island finishes turning green at 3.4 s. `DEMO_UNLOCK_AT` in `src/key.js` sets the moment: 0.5 is halfway, 0 is the start, 1 is when the island is fully green.
- **Clouds by the unlocked tiles:** void tiles that touch an unlocked (white) tile no longer turn to cloud, so the unlocked tiles float on open void. The clouds next to the green tiles stay. That's 72 cloud tiles instead of 76.

I tested both on your graphics card.

The "Walk on clouds" feature in Tessera Records says only that unrestored tiles have no clouds; it doesn't mention the void beside them. Should I add that?

---

### Dani · 2026-10-25 01:18

anything for tr? updates or new records?

---

### Claude · 2026-10-25 01:18

Checking which features and decisions in Tessera Records describe things changed this session:

Here's what I'd enter from this session. Nothing is entered yet. Say "yes", or tell me what to change.

**New decisions** (design part, all decided by you):

1. *Restoration, M1, 24 October 2026:* "While an island is dormant, its trees aren't there. When its dormant object is restored, each tree grows as its tile turns green."
2. *Restoration, M1, 25 October 2026:* "When a dormant object is restored, its island turns green in a wave from the object. The tiles it unlocks start to rise when the green is halfway through."
3. *Restoration, M1, 25 October 2026:* "The void beside tiles that aren't restored, such as the tiles a dormant object unlocks, has no clouds."
4. *Controls and camera, M1, 25 October 2026:* "Dropping off the top of a rock, a crate or a wall, or off an edge higher than 1.1 m, takes walking at the edge for 0.2 seconds. Rocks and high edges wait the same."

I put 1–4 under M1 only. Your earlier cloud decisions were M1 and M2, so tell me if any of these belong to M2 too.

**Feature updates:**

5. **Move:** "…and the character turns toward the way they walk at a rate of 12 per second." → "Top walking speed is 4.08 m/s. The character turns toward the way they walk, quickly at first and slower as the turn ends: turning right round takes 0.3 seconds."
6. **Hop**, three places:
   - In Input, "…or at an edge, for 0.25 seconds." → "…for 0.25 seconds, or at an edge for 0.2 seconds."
   - In the table's Step down row, the wait "None" → "None in the ground; 0.2 s off a walkable object".
   - In the Hop down row, the wait "0.25 s" → "0.2 s".
7. **Find a hidden passage:** "1.8 seconds" → "1.5 seconds", in both places it appears.
8. **Walk on clouds:** "Tiles that aren't restored, such as those the dormant object raises, have no clouds." → "…have no clouds, and neither does the void beside them."
9. **Restore an object or place:** add a paragraph: "In M1, the island turns green in a wave from the object, and its trees grow as their tiles turn green. The tiles it unlocks start to rise when the green is halfway through."

**Left out:** the water's sides (you said to drop the water), the white circle on the character (the character is a placeholder), the island being the planet's only one (it's a test island), the spotlight (reverted) and the Speed slider (a testing tool). The clouds' 0.8 m is already entered.

**Q1.** Do you want hours logged for 25 October, and is it a half day (4 hours) or a full day (8 hours)? You already entered 24 October yourself.

---

### Dani · 2026-10-25 01:19

the clouds are still too close to unlocked tiles

---

### Claude · 2026-10-25 01:19

Making the gap wider and adjustable. Right now only the void tiles touching the unlocked tiles stay clear, and the puffs from the next ring, and those under the green tiles beside them, still reach over. New rule: clouds keep 2 tiles away from unlocked tiles, both in the void and under the green edge. The number goes in key.js:

---

### Dani · 2026-10-25 01:19

(sent while Claude was working) also the timing of the unloocked tiles halfway is still too long. pls make it third

---

### Claude · 2026-10-25 01:20

Noted: the unlocked tiles will start a third of the way through the green. Making both changes:

Both changes are in v0.65.0, synced. Your open game should reload by itself.

- **Clouds:** they now keep 2 tiles away from the unlocked tiles, both in the void and under the green tiles beside them, so the unlocked tiles float on open void. That's 68 cloud tiles instead of 72. If 2 tiles is still too close or now too far, change `DEMO_CLOUD_CLEAR` in `src/key.js`.
- **Unlocked tiles:** they start rising a third of the way through the green: 1.1 s after restoring, all up by 2.4 s. The green finishes at 3.4 s.

I tested both on your graphics card.

This changes two of my proposed Tessera Records entries:
- **Decision 2:** "…The tiles it unlocks start to rise when the green is a third of the way through."
- **Decision 3:** "Clouds keep 2 tiles away from tiles that aren't restored, such as the tiles a dormant object unlocks."

Feature updates 8 and 9 change the same way. The rest of the list stands, along with Q1 about hours for 25 October.

---

### Dani · 2026-10-25 01:22

Find a hidden passage: "1.8 seconds" → "1.5 seconds", in both places it appears.
make it 1 second pls
q1 no

---

### Claude · 2026-10-25 01:22

Making it 1 second in the game too, so the feature and the trial match:

The secret passage now opens after 1 second in the game too (v0.66.0, synced). Tested: it opened 0.95 s after the character was stopped by it. No hours for 25 October.

Here's the full list with your changes. Say "yes" and I'll enter it all.

**New decisions** (M1, decided by you):
1. *Restoration, 24 October 2026:* "While an island is dormant, its trees aren't there. When its dormant object is restored, each tree grows as its tile turns green."
2. *Restoration, 25 October 2026:* "When a dormant object is restored, its island turns green in a wave from the object. The tiles it unlocks start to rise when the green is a third of the way through."
3. *Restoration, 25 October 2026:* "Clouds keep 2 tiles away from tiles that aren't restored, such as the tiles a dormant object unlocks."
4. *Controls and camera, 25 October 2026:* "Dropping off the top of a rock, a crate or a wall, or off an edge higher than 1.1 m, takes walking at the edge for 0.2 seconds. Rocks and high edges wait the same."

**Feature updates:**
5. **Move:** the turn becomes "…quickly at first and slower as the turn ends: turning right round takes 0.3 seconds."
6. **Hop:**
   - Input: "…for 0.25 seconds, or at an edge for 0.2 seconds."
   - Step down wait: "None in the ground; 0.2 s off a walkable object".
   - Hop down wait: "0.2 s".
7. **Find a hidden passage:** "1.8 seconds" → "1 second", in both places.
8. **Walk on clouds:** "…have no clouds, and clouds keep 2 tiles away from them."
9. **Restore an object or place:** add "In M1, the island turns green in a wave from the object, and its trees grow as their tiles turn green. The tiles it unlocks start to rise when the green is a third of the way through."

---

### Dani · 2026-10-25 01:26

update all records accordingly
also change: Restoration, 24 October 2026: "While an island is dormant, its trees aren't there. When its dormant object is restored, each tree grows as its tile turns green."
change to: While an island is dormant, most botanicals (is this the wrong term?) aren't there. When its dormant object is restored, botanicals grow..

---

### Claude · 2026-10-25 01:27

Answering your term question first: yes, "botanicals" is the wrong word. It means plant extracts and ingredients, as in herbal products, not living plants. I'll use "plants": "While an island is dormant, most plants aren't there. When its dormant object is restored, plants grow as their tiles turn green."

Entering everything now. First, how decisions are stored:

Entering the four decisions and five feature updates through the app's design API. Each replacement is checked to match exactly once before anything is saved:

Nothing was saved. The check stopped because the "Examples" sentence of "Find a hidden passage" is in its Input, not its Behaviour. Fixing that and running again:

All nine are in. Checking the documents they printed into in the Tessera repository:

Each change printed where expected: in the features document, the master file, the M1 TDD, and the topic documents for restoration, interactions, and controls and camera. Committing and syncing:

All records are entered in Tessera Records.

**4 new decisions** (M1, decided by you):
1. *Restoration, 24 October 2026:* "While an island is dormant, most plants aren't there. When its dormant object is restored, plants grow as their tiles turn green."
2. *Restoration, 25 October 2026:* "When a dormant object is restored, its island turns green in a wave from the object. The tiles it unlocks start to rise when the green is a third of the way through."
3. *Restoration, 25 October 2026:* "Clouds keep 2 tiles away from tiles that aren't restored, such as the tiles a dormant object unlocks."
4. *Controls and camera, 25 October 2026:* "Dropping off the top of a rock, a crate or a wall, or off an edge higher than 1.1 m, takes walking at the edge for 0.2 seconds. Rocks and high edges wait the same."

On your term question: I used "plants" in decision 1. "Botanicals" means plant extracts and ingredients, not living plants.

**5 updated features:**
- **Move:** turning right round takes 0.3 seconds.
- **Hop:** dropping off an edge or a walkable object waits 0.2 seconds.
- **Find a hidden passage:** 1 second, in both places.
- **Walk on clouds:** clouds keep 2 tiles away from tiles that aren't restored.
- **Restore an object or place:** a new paragraph on M1's timing of the green, the trees and the unlocked tiles.

The features printed into six documents in the Tessera repository: the master file, the features document, the M1 TDD, and the restoration, interactions, and controls and camera documents. I committed those and synced them. Like last time, the decisions aren't listed in any document yet.

No hours were logged for 25 October, as you said.

---

Saved afterwards, on 25 October 2026, at the end of a later session.
