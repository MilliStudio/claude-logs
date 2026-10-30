# M1: the apparatus, second drops, the rock's knock and the harvest pop

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Private: never commit or share.

---

### Dani · 2026-10-26 03:33

for m1, please
1. update the drops of each harvestabnle based on last conversation
2. add an aparatus. it should look like the horse but of course super simplified. both dormant and restored images are there. you can place it instead of the pourous rock at the top of the stairs. it requires 20 water drops and 1 herb of awakening (name tbd) which is in the kit
1.1. dormant item requires 1 bottle of awakening (name tbd) which will be made using the aparatus
3. don't bother with the kit inventory yet. just add the herbs to the items in the slider window when the kit is claimed, and hover the herb icon over the player. 
4. on top of the dormant aparatus, there should be 0/30 and the icon of the water drops, and 0/1 herbs with its icon
5. when fed,  leaves grow from the aparatus and it becomes active. we'll add the processing, timer and claim window later
6. it needs 30 seconds to to complete the bottle
7. bottle fed to the dormant object (instead of the 3 items)
8. don't worry about the crystals yet

---

### Claude · 2026-10-26 03:33

I'll start by reading the last session's closing note and the current code.

Reading the game code now to see how the kit, harvesting, the dormant object and the item panel work, so the apparatus fits in.

Still reading the game code (about two-thirds through); next I'll find the dormant object, kit and harvesting parts.

Checking what the asset list says about each harvestable's drops, to match "the last conversation".

I have the picture of how things work now. Next, the map editor files, since the apparatus needs to be a thing you can place there.

Now copying last session's browser test scripts to this session's scratchpad.

The file changed on disk since I read it. Checking what changed, so I don't overwrite anything of Dani's.

Now the map editor and the island pictures: the apparatus as a thing you can place.

Now the server: it will read the drawing's key at each save, so a new kind of thing saves without restarting the trial (the problem Dani hit last time).

Now saving: the apparatus's progress, and how older saves carry over.

Now the game itself, `src/planet.js`. First the imports and the apparatus's size for blocking.

Now the apparatus's shape, after the painting, placed after the crate's shape.

Now what the player carries: the kit's items (herb, bottle) are kept apart from gathered things, so the crystals and the Carrying slider never take them.

Indentation differed; retrying with the exact text.

Now the apparatus's state on the thing itself, and its look in the scene.

Now harvesting: the second drops, and the numbers over a harvestable showing both kinds.

The last edit added a stray empty line; undoing it.

Now the kit (it gives the herb), the dormant object (it takes the bottle), and the apparatus's own rules.

Now saving and loading the apparatus.

Reverting one change I didn't need, and tidying a comment.

Now the labels: over the apparatus, over the dormant object, the ready bottle, and the kit's items over the player.

Renaming my helper `fill` to `setHtml`, since `fill` is used elsewhere for colours.

Now the page: the new labels and their look, and the Controls text.

Code is in. Running the unit tests before updating them, to see what breaks.

Updating the save tests for the apparatus, and adding tests for older saves and for a second apparatus.

The 112 unit tests pass. Now the hidden browser against the running game, first a quick check that the page loads and the apparatus is there.

The apparatus reads as a horse, but its legs are too long and thin and the tub too small compared with the painting, whose legs are stubby and thick. Adjusting the proportions.

Taking close-up screenshots: the dormant apparatus with its label and the herb over the player, the label part-way, then restored with leaves.

The colours, label, herb icon and leaves work. But the head seems to point away from the camera (north-west) instead of toward it (south-west), so I'm checking which way it really faces.

It faces as intended, west-south-west (118° from north). The screenshot was misleading me. A closer shot to judge the shape properly:

The low view reads as a horse. To settle which way it faces, one shot from almost straight above:

From above, the head points left and a little toward the camera: west-south-west, as intended. A look at the close-up for the details:

The S, slots, holes and herb icon all show. Now the cone-tree check again, with a better standing spot, to confirm pine cones and tree bark.

The panel shows the new pictures (tree bark, porous rock fragments, herb). One screenshot of the numbers over a porous rock, with both pictures:

My second check was flawed: after the first save, the drawing no longer had `=a` on that line, so nothing was replaced. Redoing it with a character placed for certain.

Dani's trial on port 4890 still runs. Now a look at the map editor with the apparatus tool and tile:

The editor has the apparatus tool and shows it on 10,0, with no problems. Redrawing the island pictures in `maps/`, since the island changed:

The pictures carry the version number, so I'll raise the version to 0.104.0 first and redraw them.

The picture shows the apparatus on the plateau. Now the README: every changed rule and setting.

Checking the README and code for any leftover mention of the old rules:

Running the unit tests and the full browser test again after the shape and radius changes.

Everything passes, including after a reload. Reviewing the full change before saving the version:

One comment says the leaves rise to 1.8 m, the README says about 1.9 m; aligning it, then saving the version.

Saved as v0.104.0 and synced. Checking the real time taken against my estimate:

The apparatus and the new drops are in, saved as v0.104.0 and synced to GitHub. Your open game has already reloaded.

**What you'll see:**
1. **Drops** follow the asset list from last time. Cone trees drop pine cones plus 1 tree bark per hit. Porous rocks drop porous rock fragments plus 1 water drop per hit. Flower bulbs drop fruit and pod stalks drop seeds, with no second drop. Over a rock the numbers show as "+2 +1", each with its picture.
2. **The apparatus** stands at the top of the stairs (10,0), where the porous rock was. It's a simple clay horse: a tub on stubby legs, a neck and head, two red wheels with an S, and holes and slots. The map editor has it as a tool.
3. **The kit** comes with a herb of awakening. The herb shows in the panel's Carrying list, and its picture hovers over the player's head until you give it away.
4. **Over the dormant apparatus** a label shows "0/20" with the water drop picture and "0/1" with the herb picture. It counts up as you walk up and give.
5. **When it has everything**, leaves grow from its back and tail, and its eyes, slots and S turn glowing blue.
6. **After 30 seconds** a bottle of awakening bobs over it. Walk up to take it. The timer keeps running while the game is closed.
7. **The dormant object** now takes the bottle, and its label shows "0/1" with the bottle picture.
8. **Crystals** are unchanged. They never take the herb or the bottle, and neither does the Carrying slider.

I tested the whole loop in a hidden browser, including closing and reopening the page, and all 112 tests pass.

**Two things for you:**
- **Restart the trial.** Close its black window and double-click **Start M1 trial.bat**. Until you do, the map editor can't save, because the island now has the apparatus. From now on, new kinds of things save without a restart.
- **Press Start over** to play the new loop from the beginning. Your current save had the island restored already, so it stays restored and gives you the herb.

**Pacing:** water is now the rock's second drop, so a rock gives 3 water drops per harvest. 20 drops takes about 7 harvests. With 2 porous rocks before the restore and 30 seconds of regrowth, that's about 2 minutes of waiting by rocks. If that feels slow, I'd raise the second drop to 1–2 per hit rather than lower the 20.

I also committed the Light and sky defaults you saved this session (sun 0.45, sky light 0.55, sky 55%). The apparatus, the bottle and the herb are new mechanics for Tessera Records; I'll list them when you ask. The work took about 30 minutes, not the 1.5–2 hours I estimated.

**Q1.** Your message says the apparatus "requires 20 water drops" in point 2, but shows "0/30" in point 4. I used 20, which also matches the TDD's example "0/20". Is 20 right? To change it, edit `DEMO_APPARATUS_NEEDS` in `src/key.js`.

---

### Dani · 2026-10-26 05:30

the herb hovers over the character's head for a second not constant

---

### Claude · 2026-10-26 05:30

The herb will pop up over the head for one second when you take the kit, then vanish. It stays listed in the panel. The bottle stops hovering too and keeps its "+1" over the apparatus when taken. First, checking the map change on disk:

You added a porous rock on 10,6 in the map editor. I'll keep it and include it in this version. Now the change to the herb:

The herb shows over the head at 0.3 s and is gone at 1.2 s. The bottle doesn't hover, and the panel still lists both. Redrawing the island pictures, since your map changed, then saving:

The herb now shows over the head for one second only, when you take the kit. It pops up, floats and fades, the same way the harvest numbers do. After that it's listed only in the panel. This is saved as v0.104.1 and synced, and your game has reloaded.

- **The bottle** doesn't hover over the head any more either. When you take it, "+1" still floats up over the apparatus, and the panel lists it.
- **Your porous rock on 10,6** from the map editor is in this version, and the island pictures are redrawn. Since your edit saved, you must already be on a restarted trial.

I tested it in a hidden browser: the herb was over the head 0.3 seconds after taking the kit and gone at 1.2 seconds. The 112 tests pass.

**Q1 is still open:** I used 20 water drops for the apparatus. Your message also showed "0/30". Should it be 20?

---

### Dani · 2026-10-26 05:33

30 seconds to respawn is too long. make it 25 pls

(sent while Claude was working) 20 is fine

---

### Claude · 2026-10-26 05:33

Q1 is settled: 20 stays. Now checking in the hidden browser that a harvested rock grows back after 25 seconds:

The commit also picked up a change to the island's drawing that I didn't make. Checking what it was:

You'd placed another porous rock, on 10,5, and it went into v0.104.2. Adding it to the README and redrawing the island pictures:

Harvestables now grow back after 25 seconds. It's saved as v0.104.2 and synced, and your game has reloaded. A rock I harvested in the hidden browser came back after exactly 25 seconds, and the 112 tests pass.

- **Q1:** the apparatus stays at 20 water drops, as you said.
- **Your porous rock on 10,5** from the map editor went into v0.104.2. The README and island pictures now include it.

Tessera Records still says "grows back after 30 seconds", in the decision and in "Gather a resource". I'll include the change to 25 in the records list when you ask for it, along with the apparatus, the bottle and the herb.

---

### Dani · 2026-10-26 05:39

the plant in the back of the horse is fine, but the bunch in the middle shouhld be placed on head and neck
about the growth time, it's not a big deal.
you can put a timer above the aparatus while it's working and a claim button when it's done

---

### Claude · 2026-10-26 05:39

Three changes: the middle bunch of leaves moves onto the head and neck (the tail branch stays), a countdown timer shows over the apparatus while it works, and a Claim button replaces walking up to take the bottle. I'm reading the growth-time remark as no change needed. Reading the current apparatus code:

Now the timer and the Claim button in the labels, the Space key and the test hooks:

Now the README:

Testing in the hidden browser: the timer counts down, walking up no longer takes the bottle, the Claim button appears after 30 s, and tapping it takes the bottle. Then Space in a second page.

---

### Dani · 2026-10-26 05:41

(sent while Claude was working) also the aparatuss can be 20% smaller. the porous rock 33% smsaller

---

### Claude · 2026-10-26 05:42

The leaves sit on the head and neck now, and the tail branch stays. Adding the two sizes as settings in `src/key.js`:

Now the README's sizes:

Both look right: the smaller apparatus with the timer and its filling bar over it, and the smaller rock still harvesting with both numbers. One small fix to a test hook, then saving the version:

All four changes are in, saved as v0.105.0 and synced. Your game has already reloaded.

- **Timer:** while the apparatus makes its bottle, a small label over it counts down from 0:30 next to the bottle picture, with a light blue bar that fills.
- **Claim button:** when the bottle is ready, a **Claim** button with the bottle picture replaces the timer. Tap it, or press Space beside the apparatus, to take the bottle, and "+1" floats up. Standing next to it no longer takes the bottle by itself.
- **Leaves:** the middle bunch now grows from the head and up the neck. The tail branch is unchanged.
- **Sizes:** the apparatus is 20% smaller, about 1.4 m long and 1.2 m tall. Porous rocks are 33% smaller, about 1.5 m long and 1 m tall. Both sizes are settings in `src/key.js` (`DEMO_APPARATUS_SIZE` and `DEMO_POROUS_ROCK_SIZE`).

I tested it in the hidden browser:
- The timer counted down from 0:30 to 0:01.
- Standing next to the apparatus the whole time didn't take the bottle.
- Claim appeared on time, and both tapping it and pressing Space took the bottle.
- The smaller rock still harvests.

The 112 tests pass.

**Something you'll notice:** porous rocks are now about as tall as the 1 m rocks you hop onto. They still block the way and can't be hopped onto, so they may look hoppable when they aren't.

I took "the growth time isn't a big deal" to mean no change, so harvestables still grow back in 25 seconds.

---

### Dani · 2026-10-26 05:45

i said 33% smaller, they look way smaller than that

---

### Claude · 2026-10-26 05:46

I cut every side by a third (to 0.67), which leaves only about a third of the rock's bulk, so it looked far smaller than a third smaller. I'll set it so the rock covers two-thirds as much of the screen as before. That means 0.82, each side 18% shorter: about 1.9 m long, 1.4 m wide and 1.2 m tall.

Checking the rock in the game at the normal zoom, and that harvesting still works:

The rock now stands a bit taller than the player's head and is clearly bigger than before. In the shot it's depleted, so it's pale. Harvesting it still gave fragments and water. Saving:

You were right, I'd made them too small. I shortened every side by a third (to 0.67 of the size). That leaves only about a third of the rock, so it looked far more than 33% smaller.

Porous rocks are now at 0.82, so they cover two-thirds as much of the screen as the original. That's about 1.9 m long, 1.4 m wide and 1.2 m tall, a little taller than the player's head. They block the way 0.82 m round. The change is saved as v0.105.1 and synced, and your game has already reloaded. I checked in the hidden browser that harvesting still gives fragments and water drops, and the 112 tests pass.

The apparatus was shrunk the same way: every side 20% shorter, which leaves about half its bulk. If it also looks smaller than you meant, 0.89 would make it 20% smaller on screen. It's `DEMO_APPARATUS_SIZE` in `src/key.js`.

---

### Dani · 2026-10-26 05:48

the apparatus is fine. can you make the oporous rock animation a little less wobbly and more.. collision/y. iit's a rock not jello

---

### Claude · 2026-10-26 05:49

A rock should take a hit, not wobble. I'll swap its slow tipping for a knock: a quick jolt of a few centimetres away from you, which settles back in about 0.2 s with a short tremor and no swaying. A few small chips will also fly off the side you hit, to sell the impact. Reading the shake code:

---

### Dani · 2026-10-26 05:50

(sent while Claude was working) the apparatus can do a small rattle motion while working

---

### Claude · 2026-10-26 05:50

Also adding a rattle to the apparatus while it works. First I'll finish the rock: the chips, and the puff's height.

Now the rattle, in `showApparatus`:

Adding a reading of the apparatus's tilt to the test hook, so the rattle can be measured:

The chips fly toward the player, so from behind the player they're hidden. Taking the shot from the side instead:

The chips show as small tan bits flying off between the rock and the player. They're subtle, as intended. Saving:

I also fixed a bug in passing: when a cone tree was used up, its puff counted the tree's size twice, so it burst from up to about 5 m instead of the tree's 2.9 m. Checking that in the browser now:

Both changes are in, saved as v0.106.0 and synced. Your game has already reloaded.

**The porous rock** no longer sways like jelly when you hit it. Instead it gets knocked:
- It jumps about 6 cm away from you and settles straight back with a short shudder, all in about 0.2 seconds.
- It never swings back past where it stood.
- Each hit also knocks 4 small chips off the side you hit, in the rock's colours. They fly toward you and fall away.

**The apparatus** rattles while it makes the bottle: every 0.8 seconds it gives a short burst of small jolts, rocking about 1.5° side to side and lifting about 1 cm. It stops when the Claim button appears.

I measured both in the hidden browser:
- **Rock:** it moves away and comes back without ever passing its resting place.
- **Chips:** there are 4 per hit.
- **Rattle:** it reaches 1.4°.

The 112 tests pass.

**One fix along the way:** when a cone tree was used up, its puff burst from too high, up to about 5 m above a 2.9 m tree. I fixed it, and the puff now starts between about 0.9 and 2.4 m.

The chips are something I added for the knock. Say if you'd rather not have them.

---

### Dani · 2026-10-26 05:54

awsome work. the plant harvesting effect is not quite right through. the bubbles give the imression that the plants pop. they need to be chopped not popped

---

### Claude · 2026-10-26 05:56

Thanks! I'll change how a used-up plant goes, from a pop to a chop:

1. **Each hit is a chop.** The plant still shakes, and a couple of small, flat, pointed slivers fly off where it's being cut, tumbling as they go.
2. **On the last hit the top is cut off and falls over.** It falls away from you, faster as it goes, like a felled tree, onto the ground beside its stump. More slivers fly.
3. **It lies there a moment, then fades away.** The stump, stems or stalk ends stay, as now.

The round bubbles go for plants. The rock keeps its chips. Reading the plant shapes first:

Building the standing plants from the two parts, what stays and what's cut off, so the falling part lines up with its stump exactly:

Now the cut-off part in the scene, created beside what's left behind:

Replacing the puff with the fall and the slivers:

Now wiring the chops into the hits, the main loop and the test hooks:

Updating two older comments that still say plants shrink away:

Reflowing that comment, which ended up with short lines:

Checking in the hidden browser: the falling part's tilt and fade over time, the slivers, and screenshots of each plant mid-fall.

The motion is right for all three: the cut-off part falls to flat in 0.45 s, faster as it goes, lies still for 0.3 s, then fades over 0.4 s, and the stumps stay. Now screenshots mid-fall:

---

### Dani · 2026-10-26 05:58

(sent while Claude was working) last thinig, can you delay the growth of the plants when dormant object is restored until a little after the tiles turn green. i feel they pop a bit too early

---

### Claude · 2026-10-26 06:00

Now the README: the chop, and the plants' later growth.

Testing the delay in the hidden browser: for several plants, when their tile turns fully green, and when they start and finish growing.

Each tree starts growing 0.4 s after its tile is fully green, and is full grown about 0.65 s later. A quick check that harvesting after the restore still works, then saving:

Both are in, saved as v0.107.0 and synced. Your game has already reloaded.

**Plants are now chopped, not popped:**
- **Each hit is a chop.** The plant shakes, and 2 slivers fly from where it's cut. Slivers are flat, pointed shards in its stem colour or its own colours, and they tumble away from you.
- **On the last hit, the top part falls over** away from you, faster as it goes, like a felled tree, and 5 more slivers fly. That's the bulbs off their stems, the stalks above the stubs, and the cone trees above their stumps.
- **It lands flat** in under half a second, lies there for a moment, then fades away. The stumps, stems and stubs stay as before.
- **The round bubbles are gone** from plants. The rock keeps its chips.

**On a restored island**, each botanical now waits until its tile has turned fully green, then 0.4 seconds more, before it grows. It takes 0.7 seconds to grow. The 0.4 is `DEMO_GROW_DELAY` in `src/key.js`.

I checked all three plants in the hidden browser, with screenshots mid-fall. Each fell flat in 0.45 seconds, faded out within about 1.2 seconds of the last chop, and left its stumps. Trees began growing 0.4 seconds after their tile was fully green. The 112 tests pass.

When you want to end the session, tell me. I'll update the M1 status, save this conversation's text, and list today's mechanics for Tessera Records: the apparatus, the herb and the bottle, the 25-second regrowth, second drops, and chopping.

---

### Dani · 2026-10-26 06:03

1. the plants still appear a little too early. also they need to appear in a wave. perhaps the same time as the clouds
2. the chopping animation is not right at all. return the puffs but make them less bubbly and more poppy

---

### Claude · 2026-10-26 06:04

Two changes, and I'm reading both this way:

1. **Plants grow in their own wave after the green.** At the moment they trail just behind the green, which is why they seem early and don't read as a wave of their own. I'll start their wave when the whole island has turned green, which is when the last clouds rise. It will sweep out from the dormant object a bit slower than the green.
2. **The puff comes back, snappier.** The used-up plant vanishes again in a burst. Instead of round bubbles drifting out, it bursts into small pointed flecks that shoot out fast, stop short, spin, and are gone in under half a second. The falling over and the slivers go.

To bring the puff back cleanly, I'm restoring the game code from v0.106.0 and redoing the growth timing on top of it:

Now the plants' wave settings in `src/key.js`, in place of the delay:

Now the snappier puff. Reading the restored puff code:

---

### Dani · 2026-10-26 06:05

(sent while Claude was working) after that let's wrap up and update tr

---

### Claude · 2026-10-26 06:06

After this change I'll wrap up and prepare the Tessera Records list. Wiring the new puff in, and checking names:

---

### Dani · 2026-10-26 06:07

(sent while Claude was working) dude the plants appear with the clowds.. why are they appearing so late

---

### Claude · 2026-10-26 06:07

The new puff bursts into pointed flecks in the bulbs' colours, and they're all gone within half a second. Timing the new growth wave:

The trees now start between 1.9 and 4.2 seconds after the restore, about 2 seconds earlier, and still in a wave. Updating the README:

Saved as v0.108.0. Now the wrap-up. First, how records are entered in Tessera Records, so the list fits what's already there:

Tessera Records is running. Finding which kinds of records the design part holds, so I only read what's relevant:

Reading the relevant records (read-only): the features about gathering, supplying and the apparatus, the latest decisions, and the asset list's harvestables.

The Tessera Records list will go in this conversation's saved text too, so I'll save the text once the records are entered. First the M1 status in the handover:

I removed the note that 25 October's hours wait for your Bring in button, so checking whether that's still pending:

The file is still there, so it may still be waiting. Putting the note back:

Here is the Tessera Records list from this session. Nothing is entered yet.

Decisions are never edited, so where today changed an earlier decision, I've added a new one and left the old one as history.

**New decisions** (yours, 26 October 2026, M1):
1. Gathering, resources and refining: "A depleted harvestable grows back after 25 seconds. In the M1 trial, 30 seconds was too long."
2. Gathering, resources and refining: "In M1, the dormant object needs a bottle of awakening, which the apparatus makes. The dormant apparatus needs 20 water drops and a herb of awakening, which comes with the Gatherer's Kit. The names aren't final."
3. Restoration: "When a dormant object is restored, the island's plants grow in a wave of their own from the object, behind the green, not as their tiles turn green." The 24 October decision, "plants grow as their tiles turn green", stays as history.

**Feature changes:**

4. "Gather a resource":
   - Now: "It grows back after 30 seconds."
   - New: "It grows back after 25 seconds."
5. "Restore an object or place":
   - Now: "In M1, the island turns green in a wave from the object, and its trees grow as their tiles turn green."
   - New: "In M1, the island turns green in a wave from the object, and its plants grow in a wave of their own behind the green."
6. "Process in the apparatus": add the sentence "While it processes, the apparatus rattles." The timer and the Claim button you asked for are already in this feature, so nothing else changes.

**Hours:**

7. 26 October 2026, with this session's work in the description. It goes on the Bring in page. The 25 October hours change may still be waiting there, so I'll keep it in the same file.

**Left out**, as tests, looks or still in progress:
- the apparatus's look, leaves, size and placement
- the porous rock's size, knock and chips
- the pop of flecks
- the herb popping up over the head
- the look of the timer and the Claim button
- the trial's drops in the asset list, which still wait as you said

**Q1.** Was 26 October a half day (4 hours) or a full day (8 hours)?

Tell me "yes" with your Q1 answer, or what to change. I'll then enter 1–6 directly, put 7 on the Bring in page, and save this conversation's text with the closing note and the prompt for next time.

---

### Dani · 2026-10-26 14:47

Gathering, resources and refining: "In M1, the dormant object needs a bottle of awakening, which the apparatus makes. The dormant apparatus needs 20 water drops and a herb of awakening, which comes with the Gatherer's Kit. The names aren't final."
This is puzzle not game structure. remove

hours
not until the end of the day before 12. you can add that to decisions please
26th is today so not until 11 will i kno

---

### Claude · 2026-10-26 14:47

Understood: decision 2 is out, since it's puzzle design, not game structure. No hours today; you'll know about 26 October around 11 pm. The new rule, hours only at the end of the day before midnight, goes in as a decision. I'll also rewrite the rule I follow in the Tessera file, which still says to ask at the end of a session. Finding the right topic for the hours decision:

Writing the five approved entries into Tessera Records with the app's key script. It checks every text it changes is found before saving anything:

All five are entered: the two decisions, the three feature changes, and the hours decision, marked private. Now rewriting the hours rule in the Tessera file, so I follow it from now on:

A note said the README changed on disk since my last edit, so checking it before committing:

The README matches the saved version, so only the handover changed. Committing it, then saving this conversation's text:

---

Dani ended the session here (26 October 2026, about 14:50). Done in this session:
- M1 trial v0.104.0–v0.108.0, all synced.
- Drops as in Tessera Records' asset list: cone trees pine cones and tree bark (second drop, 1 a hit), flower bulbs fruit, pod stalks seeds, porous rocks porous rock fragments and water drops (second drop). New item pictures for tree bark, fragments, the herb and the bottle.
- The apparatus (`a` in the drawing), a simplified clay horse after Dani's painting, on the plateau at the top of the stairs (10,0), where a porous rock stood. Dormant, its label shows 0/20 water drops and 0/1 herb of awakening; walking up with the kit supplies it (test things don't count). Restored, its eyes, slots and S glow blue, leaves grow on its head and neck and from its tail (Dani moved the middle bunch there), and it makes one bottle of awakening in 30 s, also while the game is closed: a timer with a filling bar, the apparatus rattling, then a Claim button (tap, or Space beside it). 20% smaller at Dani's request (DEMO_APPARATUS_SIZE 0.8). Dani confirmed 20 water drops (Q1).
- The kit brings a herb of awakening: listed in the panel, and its picture pops up over the head for one second (Dani: not all the time). Kit items are never taken by crystals or the Carrying slider.
- The dormant object now takes 1 bottle of awakening instead of 3 things. Saves keep the apparatus; older saves carry over (3 things given count as the bottle; a found kit brings its herb).
- Grow-back 25 s (Dani: 30 was too long). Porous rocks 0.82 of their size (0.67 looked far smaller than "33% smaller"); a hit knocks the rock 6 cm and back with a tremor, with 4 chips (Dani: "a rock, not jello").
- The depleted botanicals' effect: chopping (slivers, the top falling over) was tried in v0.107.0 and Dani rejected it; v0.108.0 brings the puff back as a quick pop of 12 pointed flecks. A cone tree's puff had counted the trees' size twice; fixed.
- A restored island's plants grow in a wave of their own behind the green: from the dormant object when the green is 40% through, 0.1 s a metre (DEMO_GROW_AT, DEMO_GROW_WAVE). 0.4 s after each tile's green was a little too early; after the whole island was green, far too late.
- The map editor has the apparatus; its server reads the drawing's key at each save, so new kinds of things save without a restart. Dani's porous rocks on 10,5 and 10,6 and Dani's Light and sky defaults (sun 0.45, sky light 0.55, sky 55%) are saved.
- Tessera Records: decisions "A depleted harvestable grows back after 25 seconds…" and "…the island's plants grow in a wave of their own…, behind the green…" (26 October, M1); "Gather a resource" (25 seconds), "Restore an object or place" (plants in a wave behind the green) and "Process in the apparatus" ("While it processes, the apparatus rattles.") changed. Left out at Dani's request: the M1 recipe (puzzle, not game structure). A private Business decision: Dani's hours for a day are asked about only at the end of that day, before midnight; the rule in the Tessera file says so too.

## Prompt for the next session

> Task: the M1 trial (`Dropbox\Studio\Tessera\repositories\tessera-m1`, the round world at http://127.0.0.1:4890/), v0.108.0, synced.
>
> Read the M1 handover (CLAUDE.md) first. Dani is adding all the mechanics first. The map, the puzzles, placements, looks and colours aren't designed yet, so don't propose them as Tessera Records entries; puzzle recipes aren't game structure either.
>
> Waiting: 26 October's hours. Ask Dani at the end of the day, before midnight, whether it was a half day or a full day, and put it on the Bring in page with this session's work in its description, keeping 25 October's description change if it's still in `C:\Users\someo\TesseraExchange\proposed-records.json`. Next in the trial: harvestables' levels, as Dani planned; ask Dani how levels should work before building. Adding the trial's harvestables to the asset list waits until Dani turns to it.
>
> Testing: copy the hidden-browser scripts from `C:\Users\someo\AppData\Local\Temp\claude\c--Users-someo-Dropbox-Studio-Tessera-repositories-tessera-m1\f421204f-3226-4a2c-90f6-7261e23603c0\scratchpad\drive` to your own scratchpad. `GPU=1 node run.mjs <test files | js:code | shot.png>` runs `harness.js` (helpers in `window.T`) in a fresh page on the graphics card; `run-reload.mjs` reloads the page between two sets of steps, keeping the save. `apparatus.js` and `apparatus2.js` play the apparatus loop, `claim.js` the timer and Claim button, `pop.js` a depleted tile's pop, `knock.js` the rock's knock. `window.planet` has hooks: `carry(kind, n)`, `apparatus`, `held`, `bits`, `flecks`, `harvest`. Test a server change on a copy of the trial in the scratchpad, started with `PORT=4891 NO_BROWSER=1 node server.js`.
