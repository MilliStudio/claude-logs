# M1: clouds a look, each part's own drops, bursts by a formula, fragments in front and the apparatus bar

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Its images are in images\2026-11-14 M1 clouds a look, each part's own drops and bursts by a formula\, shown or linked where they came. Private: never commit or share.

---

### Dani · 2026-11-14 19:27

this is a worktree conversation. the other one working on map interface (removing objects and waypoints)
please make the clouds consmetic only. they create too many issues. 
the character keeps all the floating in the void mechanics and behavior. nothing different happens after revival of the area. only difference is the clouds which behave exactly the same

---

### Claude · 2026-11-14 19:28

I'm in a new worktree, `cosmetic-clouds`, based on v0.531.0. Next I'm reading how clouds work now.

Now the game's cloud code:

Found every place the game treats clouds as ground. This is a small job, about 30–45 minutes. Next I'll change the code so that over a cloud the game works exactly as it does over the void.

Now the code changes in src/planet.js:

Good, the fade follows `overVoid()`. Making the edits now.

Now the slider's note and its i text:

The code change is done. I'm finishing the README text, then I'll run the tests and try it in the hidden browser.

Docs done. Now raising the version, installing packages in the worktree and running the tests.

All 238 tests pass. Next I'm setting up a test copy of the game on a spare port to try floating over the clouds.

The test copy is running on port 4963. Now I'm writing the steps for the hidden browser: revive the island, then float out over the clouds.

Fixed: the player now starts behind the tree on the lantern's own tile when the tile behind it is void or cloud. Running the test again, and looking at the screenshot of the float over the clouds.

The player floats over the void beyond the clouds as before revival. Running test 2:

The hidden browser runs slowly, so the fade hadn't finished yet. Waiting longer:

Still coming back on tile 239. Checking whether 239 is the portal spot or the start tile itself:

`goToPortal()` also runs while the page first loads, before line 10720, so a `const` defined after it would fail there. Moving the number inside the function:

Now the player comes back on the lantern's tile, behind the tree, on ground, and fades back in. Adding this to the README, then tests and commit.

Tests pass (238 of 238) and nobody has taken v0.532.0. Committing now.

---

### Dani · 2026-11-14 19:41

(sent while Claude was working) crap.. i forgot to mention the clouds are cosmetic but the player doesn't fade above them

(sent while Claude was working) is that a problem?

---

### Claude · 2026-11-14 19:42

Now the README:

Testing: floating over a cloud (no fade), then out past the clouds (fade).

Over the cloud for 12 seconds: floating, no fade. Past the clouds: fading as before. A look at the screenshot:

Pushed. Now stopping my test copy and bringing v0.532.1 into the main folder, so your trial runs it.

The main folder has your unsaved-to-git work from about 19:27 (a map import and slider saves). Looking at it before I bring my versions in on top:

Pushed. Now removing my worktree and telling the other session where main stands.

A quick read-only check that your trial on port 4890 loads the new version cleanly:

Your clouds are now only a look, and you don't fade over them. The main folder and your trial run it as v0.532.2, and everything is pushed. To your question: no, the no-fade part wasn't a problem. It was a small extra change, v0.532.1.

**How it works now**
- **Over a cloud,** your character floats exactly as over the void before the area revives: same height, same floating pose, same speed. The only difference is that they don't fade.
- **Past the clouds,** over plain void, they fade and go back as before.
- **Gone:** wading in clouds, sinking to the shins, and the drop down to the clouds' tops with the hop back up. You can no longer get stuck in clouds that sit too deep.
- **The look is unchanged.** Clouds still come with the green, and the **Clouds' tops** slider now only moves where they're drawn.

**One side effect.** The lantern on -8,-7 has its back to the island's edge, so the tile behind it is cloud. Your start rule puts you on the tile behind the lantern tree, which would have left you floating in the air there. So when that tile has no ground, you now start behind the tree on the lantern's own tile, a little closer to it. Tell me if you'd rather start floating over the cloud.

**Also in this update:** your map import from M1 testing at 19:27 and your slider saves were sitting uncommitted in the main folder. I saved them as v0.532.2 (machine parts come together slower, harvest reach 1.6 m, harvest cone 150°).

I tested it on a copy with your map: over a cloud for 12 seconds, the character stayed fully visible; past the clouds, the fade started; your trial loads without errors. The other session will take v0.533.0 or later.

M1 testing needs **Update M1 testing** to get this. Walking on clouds is also in Tessera Records, so it needs a new decision and changes to the feature. When you want to do Tessera Records, I'll list the entries for you.

---

### Dani · 2026-11-14 21:14

thanks it works great!
the puff trees, i noticed not every puff drops resources. shouldn't it drop 4?

---

### Claude · 2026-11-14 21:15

I'm checking how a puffball tree's hit decides where its drops burst out. One more look at what the other multi-part harvestables drop, then I'll answer.

A puffball tree counts as one harvestable right now, so its puffs don't each drop their own.

**What happens now:** each hit drops 1 to 3 fresh leaves and 1 tree sap for the whole tree, so 2 to 4 things. They burst out of random spots in the tree's top half, not out of the puffs, so some puffs often burst nothing. Arching flowers work differently: since 6 November, each of their flowers drops its own.

**Q1.** Should each of the four puffs drop its own at every hit, with its own number over it, the way an arching flower's flowers do? I recommend yes. The side effect is that a tree gives 4 times as much: on average 8 leaves and 4 sap a hit, or 48 and 24 over its 6 hits (12 and 6 now). The per-hit sliders would then count per puff, so you may want to lower them.

**Q2.** Cone trees (3 cones), flower bulbs (5 bulbs) and pod stalks (5 to 7 pods) work the same way as the puffball tree does now. Should they also drop from each part? I recommend leaving them as they are for now. Their yields would jump 3 to 7 times, and the small plants' bursts would crowd together.

---

### Dani · 2026-11-14 21:15

can you alert the other worktree, it's still working on the map interface (removing objets on waypoints)

---

### Claude · 2026-11-14 21:16

I told the other session that I'll be changing how puffball trees drop things, in the harvesting code. It doesn't touch the map editor, so our work shouldn't clash. The other session keeps v0.533.0 for its waypoint work, and I take v0.534.0. Main is at v0.532.2 for it to build on.

One correction: my message told it the change is coming, but you haven't answered yet. I'll start once you do:

- **Q1.** Should each of the four puffs drop its own at every hit, with its own number over it? I recommend yes, but the tree then gives 4 times as much.
- **Q2.** Should cone trees, flower bulbs and pod stalks also drop from each part? I recommend no for now.

---

### Dani · 2026-11-14 21:16

q1 yes it should
q2 yes those too

---

### Claude · 2026-11-14 21:16

Starting now: each puff, cone, bulb and pod will drop its own. Reading how the plants' parts are placed first.

Working out where each puff, cone, bulb and pod sits on its plant, so each one's drops burst from it.

Writing the change now: the plant drawings' part positions get shared with the harvesting code.

Code for the drops is in. Now spreading the numbers so a row of many doesn't pile up, then the slider texts and README.

Slider texts done. Updating key.js's note and the README.

Syntax checks pass. Now testing in the hidden browser on your trial (read only): harvesting a puffball tree after Get harvestables and Max tools.

Probing your map for puffball trees, cone trees, bulbs and pods that can be harvested in the test browser.

Your map has puffball trees and flower bulbs but no cone trees or pod stalks. I'll add a test readout of each plant's parts, so the cones and pods can be checked too.

Running the harvest test on a puffball tree and a bulb clump.

Both work: 3 puffball trees gave 131 leaves and 72 sap over their 6 hits each, which is 4 puffs dropping every hit, and the bulbs showed 10 numbers for 2 clumps at one hit. Looking at the pictures.

Diff looks right. Bumping to v0.534.0, then tests.

238 of 238 pass. Re-running the pod test to see the numbers after the settle fix.

The overlap left in the middle comes from two hits' numbers on screen at once, 36 numbers for 3 pod clumps. The settle can't fix that. I'll commit and ask you about it.

Each puff, cone, bulb and pod now drops its own at every hit, with its own number over it and its drops bursting out of it. It's in v0.534.0 and pushed.

- **Yields went up a lot.** The per-hit sliders now count for each part. A puffball tree at 2 and 1 gives 4 to 12 fresh leaves and 4 tree sap a hit. A bulb clump gives 5 to 15 fruit. If that's too much, lower the sliders in each harvestable's box.
- **Tested in a test browser on your map, after Get harvestables and Max tools:** 3 puffball trees gave 131 leaves and 72 sap. Your map has no cone trees or pod stalks, so I swapped them in on a copy that only the test browser saw. 5 cone trees gave 90 bark, which is 3 cones on every hit.
- **The other session** finished its waypoint work as v0.533.0, and I've told it v0.534.0 is pushed.

**One problem: the small plants make too many numbers.** Three pod clumps put 18 numbers on screen at each hit. Hits come faster than the numbers fade, so up to 36 show at once and they overlap. Here is the picture: `C:\Users\someo\AppData\Local\Temp\claude\653749dc61028eb9\8822afe3-f150-4167-80f6-81115643be48\scratchpad\p5-pods-settled.png`

**Q1.** Should flower bulbs and pod stalks show one number per clump (the total of its bulbs or pods), while each bulb and pod still bursts its own drops? I recommend yes. Puffball trees and cone trees would keep one number per puff and per cone, as you asked: 9 to 12 numbers a hit, which still reads.

M1 testing needs **Update M1 testing** to get this.

![Claude's image 001](<../images/2026-11-14 M1 clouds a look, each part's own drops and bursts by a formula/001 Claude to Dani.png>)

---

### Dani · 2026-11-14 21:43

it's ok for the popup numbers to overlap when harvesting. each number appears above the hit object. also i forgot where the shatter settings that change the number of fragments shattering every hit

---

### Claude · 2026-11-14 21:44

No setting changes the number of fragments. Since 3 November it follows the drop: as many burst out as the hit drops, up to 10 a hit. Removing the side-by-side numbers now.

Now the code and README edits.

---

### Dani · 2026-11-14 21:47

(sent while Claude was working) up to 10 a hit
perhaps decrease the 10 to 7?

---

### Claude · 2026-11-14 21:47

You saved some slider values while I worked: leaves 140%, sap 100%, numbers 3.9 m up, and more. One test checks those starting sizes, so it needs your new values. Fixing it, then I'll answer the 7.

Now the commit for v0.535.0. I'll check the bulb picture first.

Each clump's numbers now pile up over that clump. Committing.

Two changes, both pushed as v0.535.0:

- **Each harvest number now stays over the puff, cone, bulb, pod, flower or rock it came from.** Numbers overlap where they meet. Before, numbers from one hit moved apart side by side. That was my choice from 8 November, after you asked for better placement.
- **Your slider saves from just now are committed:**
  - leaves 140% and sap 100%;
  - harvest reach 1.5 m and harvest cone 120°;
  - numbers at 3.9 m, staying 0.8 s, at 60%.

**Where the shatter settings are:** no slider sets how many fragments burst. Since 3 November, a hit bursts as many as it drops, so each harvestable's per-hit sliders in its box set it. The 10 is a cap with no slider, `DEMO_SHATTER_MOST` in key.js. Tuning › Shatter has only Reach, Fly to you after and Reach you in.

**About lowering it to 7:** since today's change the 10 counts for each part, not for the whole plant. At your sliders a puff bursts at most 4 (3 leaves and 1 sap) and a bulb or pod at most 3. So 7 per part would change nothing.

**Q1.** Should the cap count for the whole plant at each hit again, shared among its parts, at 7, with a slider under Tuning › Shatter? I recommend yes. Before today the 10 counted for the whole plant. 7 is also the most pods a clump has, so every pod still bursts at least one.

M1 testing needs **Update M1 testing** to get this.

---

### Dani · 2026-11-14 21:50

q1 sorry can you break it to simplet points

---

### Claude · 2026-11-14 21:50

Sure, one step at a time.

1. **Fragments** are the little things that burst out at each hit, like leaves, sap or fruit.
2. **There is a limit:** at most 10 fragments burst out at once.
3. **Until today,** the 10 counted for the whole plant. A puffball tree hit once: at most 10 fragments, from the whole tree.
4. **Since today,** each puff drops on its own, so the 10 now counts for each puff. One puff can burst 10, and the whole tree 40.
5. **A puff never drops 10.** At your sliders it drops at most 4 (3 leaves and 1 sap). So the limit never comes into play.
6. **That's why 7 alone does nothing.** A puff never reaches 7 either.
7. **What I suggest:** make the limit count for the whole plant again, at 7. A puffball tree hit once bursts at most 7 fragments, shared among its 4 puffs.
8. **Example:** the tree's 4 puffs drop 3 + 4 + 2 + 3 = 12 at one hit. All 12 still go into your bag, but only 7 fragments burst out on screen, at least one from each puff.
9. **A slider** under Tuning › Shatter would let you change the 7 yourself.

**Q1.** Shall I do that: at most 7 fragments a hit for the whole plant, shared among its parts, with a slider? I recommend yes.

---

### Dani · 2026-11-14 21:55

it doesn't reach now but at higher levels it could go up to  250+
So i think each puff should drop it's number still, but the max is 7 (or slider).  perhaps a slider. or we can make it scale with a formula like we did that other thing before

---

### Claude · 2026-11-14 21:55

Good point. At higher tool levels a puff can drop 250 or more, so the limit matters there. I recommend the formula, the same kind as Big deliveries:

1. **Each puff still drops its own number.** All of it goes into your bag, as now.
2. **Up to 7, every drop bursts out** as a fragment.
3. **Past 7, fragments grow slowly.** Each time the drop is ten times bigger, 3 more fragments burst out.
4. **Example, for one puff:**

   | The puff drops | Fragments that burst |
   |---|---|
   | 4 | 4 |
   | 7 | 7 |
   | 25 | 9 |
   | 70 | 10 |
   | 250 | 12 |

5. **Why the formula, not a plain limit of 7:** with a plain limit, level 1 and level 5 bursts look the same. With the formula you can see that a better tool gives more, without filling the screen.
6. **Two sliders under Tuning › Shatter:** "Every drop bursts, up to" (7) and "Ten times more adds" (3). The 3 is my number. Setting it to 0 turns the formula into a plain limit of 7.

**Q1.** Shall I build it this way? I recommend yes.

---

### Dani · 2026-11-14 21:56

yeah let's try that

---

### Claude · 2026-11-14 21:56

Building it. Reading how the Big deliveries sliders are set up, to match them.

The formula and both sliders are in. Now the README, then tests.

With 100 leaves a hit, one hit on 2 trees dropped 750 leaves, and 82 fragments burst: about 10 a puff, as the formula says. All 750 went into the bag. Committing.

The fragment formula is in, as v0.536.0, and pushed.

- **Each puff, cone, bulb, pod, flower or rock still drops its full number into your bag.** Only the number of fragments that burst out is limited.
- **Up to 7, every drop bursts out.** Past 7, fragments grow slowly: 25 drops burst 9, 70 burst 10, 250 burst 12.
- **Two sliders under Tuning › Shatter:**
  - **Every drop bursts, up to:** 7.
  - **Ten times more adds:** 3, my number. At 0 it becomes a plain limit of 7.
- **Tested in a test browser on your map:** I set fresh leaves to 100 a hit in that browser only. One hit on 2 puffball trees dropped 750 leaves, and 82 fragments burst out, about 10 per puff. All 750 went into the bag.
- **You won't see a difference yet.** At your current sliders a puff drops at most 4, so bursts look as before. The formula shows with a forged tool or higher per-hit sliders.

M1 testing needs **Update M1 testing** to get this. The sliders have new names, so the 7 and 3 come with the update.

---

### Dani · 2026-11-14 22:02

what about the slider that controlled how far fragments shattered around the harvestable befor flying to the player?
i noticed that fragments also are hidden behind the object when they shatter, they should be in front so they're visible while shattering and flying

---

### Claude · 2026-11-14 22:02

The slider is **Reach**, under Tuning › Shatter. Checking how the fragments are drawn now.

Fragments now show over the puffs, with Blur on and off. Running tests and committing.

Both answered, and the fix is pushed as v0.537.0.

**The slider is still there:** **Reach**, under Tuning › Shatter, at 110%. It sets how far the fragments burst out before they fly to you. In the same section:
- **Fly to you after:** how long they hang before they leave.
- **Reach you in:** how long the flight takes.
- The two new sliders from v0.536.0.

**Fragments now show in front of everything,** from the moment they burst out until they reach you. They're drawn the way deliveries in flight are, so the plant or rock they come from no longer hides them. In a test browser on your map, the leaves and sap showed over the puffball tree's puffs, with your Blur on and with it off.

**One thing I left out, my choice:** a dried giant flower's cubes still shatter among everything else. Its stem and leaves can still hide some of them, which I think looks right for a flower breaking apart. Tell me if you want them in front too.

M1 testing needs **Update M1 testing** to get this.

---

### Dani · 2026-11-14 22:14

is it just me or is the iron apparatus missing a slider in its window?

---

### Claude · 2026-11-14 22:14

Checking both machines' windows in the code.

You're not imagining it, but it isn't broken. The slider hides whenever you can make only one, and your map lets you make only one iron ingot at a time.

1. **The slider is the same for both apparatuses.** It lets you choose how many to make, and it shows only when you can make 2 or more.
2. **On your map, each iron ingot takes a lump of coal and 1,200 porous rock fragments.** That's the Iron Apparatus on -3,-7, in M1 testing.
3. **The lump of coal is a key item, and the map has only one.** So you can only ever afford 1 ingot, and the slider stays hidden. Get key items gives you that one lump too.
4. **This also blocks the Rock Pick Forge on -3,-6.** Its level 2 needs 20 iron ingots, and one lump of coal makes only one.

**What I recommend:** in the map editor, move the lump of coal from the Iron Apparatus's **For each iron ingot** needs to its **To come together** needs. The coal is then used once to wake the apparatus, and each ingot takes only fragments. With 24,000 fragments you could make all 20 ingots in one batch, and the slider would show. It's a change to your map, so I haven't touched M1 testing. If you'd rather keep coal in every ingot, tell me, and coal would need to be something you can harvest more of.

---

### Dani · 2026-11-14 22:25

no it shouldn't be hidden. otherwise the player won't nderstand. it should always show the same info even if they have one. the slider simply simply won't move if they are short
i'm wondering, is it possible to remove the lumps of coal key item and replace it with a certain quantity of the actual resource?
you can create the coal.. what do you call it.. (the coal thing that is mined) harvestable and its drops. is it possible to make the initial item in the chest before opening a resource?

---

### Claude · 2026-11-14 22:26

First the slider, which is a clear change. Then I'll look at how the lump of coal and chests work today before answering the rest.

---

### Dani · 2026-11-14 22:26

(sent while Claude was working) i should start a work tree for it, and you can fix the sliders yes?

---

### Claude · 2026-11-14 22:26

I'll fix the slider here, and the coal goes to your new worktree session. I'll give you a prompt for it at the end.

---

### Dani · 2026-11-14 22:26

(sent while Claude was working) the slider fix applies to all apparatuses yes?

---

### Claude · 2026-11-14 22:26

Yes, both apparatuses share one window, so the fix covers the Apparatus and the Iron Apparatus. Testing it in the game now.

Nothing was delivered: the test player stood too far from the apparatus. Moving closer.

The window now shows its bar even when only one can be made. Here, on the trial's map, the apparatus takes nothing per bottle, so it's one at a time and the bar stays at 1. Committing.

The slider fix applies to both apparatuses, and it's pushed as v0.538.0.

- **The bar always shows now,** in the Apparatus's window and the Iron Apparatus's, since they share one window. If you can make only one, or none, it stays at 1 and doesn't move.
- **Tested on your map:** the restored Apparatus showed its bar at 1, since it takes nothing per bottle there.
- M1 testing needs **Update M1 testing** to get it.

**Prompt for the coal worktree session.**

Written for: the new worktree session, a Claude session starting cold.

```
Worktree session for the M1 trial (tessera-m1). Main is at v0.538.0 (2e6e7e9). Take v0.539.0 or later, and agree version numbers by message with the main folder's session, tessera-m1-a2. A new worktree needs `npm ci --prefer-offline` before the tests and the editor work.

Dani's request (14 November 2026, her words):
"i'm wondering, is it possible to remove the lumps of coal key item and replace it with a certain quantity of the actual resource?
you can create the coal.. what do you call it.. (the coal thing that is mined) harvestable and its drops. is it possible to make the initial item in the chest before opening a resource?"

It has three parts:
1. A new harvestable that is mined with the rock pick, such as a coal seam, which drops coal as a resource.
2. The key item "lump of coal" (coalLump) replaced by an amount of coal.
3. A chest that holds an amount of a resource, given when it opens, in place of a key item.

What is known:
- coalLump came in v0.531.0 with the Iron Apparatus. Dani said then: "the first lump of coal is a just a key item, not a resource. it's used just once to assemble the apparatus" (the comment above KEY_ITEM_NAMES in src/planet-plan.js). The Iron Apparatus in pieces has the lump as its first part (addParts(... ['coalLump', 'pumpHandle', 'pumpCogs']) in src/planet.js).
- M1 testing's map (..\M1 trial 2 tuning\src\planet-plan.js) has the Iron Apparatus on -3,-7. It comes together with { pumpHandle: 1, pumpCogs: 1 }, and each ingot takes { coalLump: 1, fragment: 1200 }. The Rock Pick Forge on -3,-6 needs 20 iron ingots for level 2. No coalLump, pumpHandle or pumpCogs is placed in its KEY_ITEMS, so with one lump per ingot, at most one ingot can be made.
- Porous rocks (h) are the model for a mined harvestable: rocky(), the rock pick, chips, clusters (porousRocks() in src/sizes.js), the SIZE_TOOLS boxes, and DROP_SLIDERS in src/drops.js. Since v0.534.0 each rock drops its own. Since v0.536.0 bursts follow DEMO_SHATTER_UP_TO and DEMO_SHATTER_TENFOLD.
- Chests hold the key items placed in them (KEY_ITEMS at a chest's place).

Rule 5 in Dropbox\Studio\CLAUDE.md applies: settle how it will be built with Dani before starting anything. Ask her numbered questions, one plain sentence each with a recommendation, and build after her yes. Settle at least:
- the harvestable's name and look;
- whether coal goes in the pouch or the box (DEMO_KIT_HOLDS);
- whether the lump of coal stays as the key item that assembles the Iron Apparatus, as she said on 14 November, or goes entirely;
- how a chest's resource is set in the map editor, and how it reaches the player when the chest opens;
- how maps that name coalLump are read.
```

---

### Dani · 2026-11-14 22:32

ah it's ok i already gave it a prompt

---

### Claude · 2026-11-14 22:32

No problem, the coal work is the other session's then. It may not know two things from today, which I can send it if you want:

- On 14 November you said the lump of coal is a key item used once to assemble the Iron Apparatus. But M1 testing's map uses it for every ingot.
- With one lump per ingot, the forge's level 2 can't get its 20 iron ingots.

---

### Dani · 2026-11-14 22:32

yeah please do

---

### Claude · 2026-11-14 22:32

I sent both notes to the coal session.

- **The lump of coal:** I pointed out what you said today, that it's a key item used once to assemble the Iron Apparatus. M1 testing's map uses it for every ingot instead. I suggested it ask you which one you want.
- **The forge:** with one lump per ingot, the Rock Pick Forge's level 2 can't get its 20 iron ingots.
- **Coordination:** I told it main is at v0.538.0, so it takes v0.539.0 or later. I also listed today's harvesting changes, since a mined coal harvestable will touch them. I'm leaving coal and chests to that session.

---

### Dani · 2026-11-14 22:36

when i hot a porous rock that is set to drop only 1 rock, each part of the rock sometimes drop 2 instead of 1. if the drop is set to 1 i think it should only be 1 not avg

---

### Claude · 2026-11-14 22:36

Checking where the extra one comes from. I suspect the Rock Pick Forge's gathering boost rather than the average.

Your porous rocks are set to 1, and 1 always gives exactly 1. The average only spreads numbers of 2 or more. The likely cause is the rock pick's level, so I'll check it in the game.

I tested it. A drop set to 1 does give exactly 1. The extra comes from the rock pick's level.

1. **At rock pick level 1:** every rock dropped **+1** fragment, every hit. The second number on each pop-up is water drops, which average 2, so they vary from 1 to 3.
2. **At rock pick level 2,** after Max tools or forging, the same rocks dropped **+2** or **+3**.
3. **Why:** your Rock Pick Forge has **Increase gathering potency by 160%**. At level 2, every drop is multiplied by 2.6, so 1 becomes 2.6. The game can't drop 0.6 of a fragment, so it adds the extra one 60% of the time. That gives 2 or 3.
4. **That random extra was my choice** when I built the potency box on 12 November, so that small boosts still add up on average.

**Q1.** Should the forge's boost round to a whole number instead? 1 at 160% would then always give 3. I recommend yes, because players then see the same number every hit and can tell the tool got better. The side effect: a small boost on a small drop does nothing. For example, 1 at 20% would round to 1 and stay 1.

---

### Dani · 2026-11-14 22:37

no the level is still 1

---

### Claude · 2026-11-14 22:38

Then it's something else. At level 1 each rock should give exactly 1, so I'll count what a single hit really gives against how many rocks it hits.

Each hit gives exactly 1 per rock. Counted at level 1: a hit on 3 rocks put 3 fragments in the bag, every hit. What you're seeing is two hits' fragments in the air at the same time.

1. **A hit lands every 0.45 s.**
2. **Each fragment stays in the air 0.9 s:** it hangs 0.6 s (**Fly to you after**), then takes 0.3 s to reach you (**Reach you in**).
3. **So when the next hit lands, the last hit's fragment is still there.** Each rock then has two fragments in the air, the old one and the new one.
4. **The numbers stack the same way.** They stay 0.8 s, longer than the 0.45 s between hits, so two "+1"s sit on top of each other over each rock.
5. **Since v0.537.0 the fragments show in front of the rock,** so the old one is easier to notice now.

**Fix:** under Tuning › Shatter, set **Fly to you after** to 0.15 s, so the hang and the flight add up to 0.45 s. Each fragment then reaches you before the next hit bursts. Since tuning goes from M1 testing to the trial, set it in M1 testing. I can set it here if you prefer.

---

### Dani · 2026-11-14 22:42

great thanks!

---

### Claude · 2026-11-14 22:42

You're welcome. Everything from this session is pushed, up to v0.538.0, and M1 testing gets it with **Update M1 testing**.

---

### Dani · 2026-11-14 22:43

i think we can do tr and end the conversation

---

### Claude · 2026-11-14 22:43

I'll draft the Tessera Records entries first. Reading the recording rules and the current records.

Reading the texts of these records to see which ones today's changes make out of date.

I have the records and today's changes side by side. Here is what I propose for Tessera Records.

**New decisions** (all M1 M2 M3)

**D1. Clouds are only a look.** Topic: Game › Controls and camera.
- **Decision:** "Clouds are only a look. Over them the player floats as over the void, at the void's level, but doesn't fade, so they can stay over the clouds as long as they like. Past the clouds, over the void, they fade as before. It replaces 'Clouds are safe to walk on, unlike the void. Walking on them is the same as walking in shallow water.' (24 October 2026)."
- **Why (my proposal):** "Wading through clouds caused too many problems in play, such as getting stuck where the clouds lie deep. As a look, they keep the island's edge safe without changing how the player moves."

**D2. Each harvest number stands over what it came from.** Topic: Game › Gathering, resources and refining.
- **Decision:** "Each number a harvest hit drops pops up over what it came from: the puff, cone, bulb, pod, flower or rock. Numbers that meet overlap. It replaces 'numbers that would overlap stand side by side' in 'The numbers a harvest hit drops pop in and stay still, and water drops show as a drop' (8 November 2026)."
- **Why (my proposal):** "A number over its own part shows where each drop came from. Moved aside, it no longer sits over what gave it."

**D3. A big drop bursts out as fewer items, by a formula.** Topic: Game › Gathering, resources and refining.
- **Decision:** "From each part a hit drops from, every item bursts out, up to 7. Past 7, 3 more burst out each time the drop is ten times bigger: 25 bursts 9, 70 bursts 10, 250 bursts 12. All that drops still goes into the bag. It replaces the limit 'up to 10 all together' in 'As many items burst out as a hit drops, up to 10' (3 November 2026)."
- **Why (from your reason):** "At higher tool levels a hit can drop 250 or more. A burst that grows slowly shows that a better tool gives more, without filling the screen."

**Feature changes**

**F1. Walk on clouds → rename to "Float over clouds".** Your clouds are no longer walked on.
- **Input:** "walks off the island's edge onto the clouds" becomes "floats off the island's edge over the clouds".
- **Behaviour:** the third paragraph is replaced. It said: "Clouds are safe to walk on, unlike the void. The character wades through them: at 0.75 × walking speed (3.06 m/s), sunk 0.3 m, to the shins, and doesn't fade. Stepping off the island onto them drops the character to the clouds' tops at once. Walking back at the island hops the character up onto it. The character can float off a cloud into the void, and from the void back onto a cloud."
- **New third paragraph:** "The clouds are only a look. Over them the character floats as over the void, at the void's level, in the floating pose, but doesn't fade, so they can stay there as long as they like. Past the clouds, over the void, they fade as before."

**F2. Gather a resource:**
- **Added after the average per hit:** "A harvestable with several parts drops from each on its own at each hit: each puff of a puffball tree, each cone of a cone tree, each bulb of a flower bulb clump, each pod of a pod stalk clump and each flower of an arching flower, each with its own number over it."
- **"…burst out of a harvestable as the hit dropped, up to 10, each the size of its resource, and fly to the player."** becomes: "…burst out of each part as it dropped, up to 7, then fewer: 3 more each time the drop is ten times bigger. Each is the size of its resource and flies to the player. They show in front of everything while they burst and fly, so the harvestable never hides them."
- **"numbers that would overlap stand side by side"** becomes "each over what it came from, overlapping where they meet".
- **Table:** "Items that burst out at a hit, at most | 10" becomes two rows: "Items that burst out of a part at a hit, before fewer burst | 7" and "More items each time a drop is ten times bigger | 3".

**F3. Produce in the apparatus,** added to Input after "a bar to choose how many": "The bar always shows; when the player has enough for only one, or none, it doesn't move."

**F4. Lantern → lantern tree,** added after "the player starts on the tile below the lantern tree, with their back to it": "Where that tile has no ground, such as void or clouds, they start behind the tree on its own tile."

**F5. Hop:** "ground, a top, a cloud, water or the void" becomes "ground, a top, water or the void, clouds included".

**No record:** the new Shatter sliders and your slider saves (tuning), and the test readouts. Each part dropping its own gets no decision of its own, since you called the arching flower's version "a given" on 6 November.

Say yes, or change any of it, and I'll enter it and close the session.

---

### Dani · 2026-11-14 22:50

Why (my proposal): "A number over its own part shows where each drop came from. Moved aside, it no longer sits over what gave it."
it's because when they don't overlap they occupy too much space and draw attention. when everything generates the same amount of attention things get chaotic and hard to follow. the numbers overlapping decreases the amount of attention they generate

D3. A big drop bursts out as fewer items, by a formula. Topic: Game › Gathering, resources and refining.
can you include the formula. i think all formulas sohuld be included where applicable

otherwise all is yes

---

### Claude · 2026-11-14 22:50

Thanks. Your reason replaces my D2 why, and I'll write the formula into D3 and into Gather a resource. Checking how the records app takes new decisions and feature changes.

Writing the entries now. The script checks that each old sentence is found exactly once before it changes anything.

All the old sentences were found. Entering them now.

The app rewrote 6 DOCS files from the records. Checking the changes before committing them.

Tessera Records are in and DOCS is pushed. Now the session's end: handover, conversation text and the picture book. Reading how the scripts are used.

DOCS is pushed. Now the handover in the M1 file.

Handover updated. Now the conversation text and the picture book.

---

Closing note (about 23:05): v0.532.0 to v0.532.2 and v0.534.0 to v0.538.0 are pushed (v0.533.0 is the right-click session's); the main folder and Dani's trial run v0.538.0, M1 testing v0.535.0 until her next Update M1 testing. Tessera Records has this session's entries (three decisions, Float over clouds, Gather a resource 26, Produce in the apparatus 8, Lantern → lantern tree 17, Hop 19; Tessera DOCS b9a752c). Open: rounding a forge's potency, a dried giant flower's cubes in front, Fly to you after at 0.15 s, and a rule that records include formulas. Coal (a mined harvestable, coal as a resource, chests holding resources) is the worktree session tessera-m1-13's, from v0.539.0.
