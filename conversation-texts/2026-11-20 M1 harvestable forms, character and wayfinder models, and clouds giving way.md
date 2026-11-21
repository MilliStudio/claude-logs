# M1 harvestable forms, character and wayfinder models, and clouds giving way

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Its pictures are in Tessera Records, in the original file "Pictures: 2026-11-20 M1 harvestable forms, character and wayfinder models, and clouds giving way", numbered as here. Private: never commit or share.

---

### Dani · 2026-11-20 12:15

can you make little decorative grass bits. i need them to have the same size and placing variation sliders.

---

### Claude · 2026-11-20 12:18

API Error: Can't reach the API server — check your internet or DNS (ENOTFOUND)

---

### Dani · 2026-11-20 12:18

remind me again how to export the game 3d objects to blender

[Request interrupted by user]

can you remind me again how to export the game 3d objects to blender

---

### Claude · 2026-11-20 12:25

Checked the past chats: exporting game objects to Blender was never built. Now looking up the harvestables' size and placing sliders so I can propose the grass bits.

Nothing exports the game's objects to Blender yet. You asked on 29 October. I said it could be done and offered two ways, but your next question was about the opposite direction, and only that got built.

**What exists: Blender into the game.** In Blender, use File → Export → glTF 2.0 and save a .glb into the trial's `models` folder. Name it after the object it replaces, for example `giant-flower.glb` or `rock.glb`. The game then shows your model in place of its own shape. The README has the size and facing rules.

**What's missing: the game into Blender.** The game builds every object in code each time it loads, so none of them exist as files. The 3D library the game uses can save any object as a .glb, and Blender opens that with File → Import → glTF 2.0. Two things to expect:
- The colours look flatter in Blender, because the game's lighting adds a glow the file doesn't keep.
- A file holds the object as it stands. A 7 m and a 10 m giant flower would be two different files.

**Q1.** Should I add an **Export** button to the selected object's pink box in the map editor, which saves that object as it stands on your map as a .glb in an `exports` folder? I recommend yes.

**Grass bits:** you interrupted that request, so I haven't started it. If you still want them, here is how I read it:

**Q2.** Should grass bits be placed with a map editor tool, like a harvestable, and grow in only once their tile turns green? I recommend yes. They would be decoration only: not harvested, and they don't block the way.

**Q3.** Should they look like the chunky grass in opened chests, the one you drew? I recommend yes, so the island's grass matches.

**Q4.** Are these the sliders you mean? I took them from the harvestables:
- **Average size**
- **Size variance**: how much bigger or smaller each bit can be
- **Per tile**: how many bits a tile has
- **Distance between, on average**: the space between bits
- **Spacing variance** (new): how much each bit's spacing varies, so some stand close together and some far apart. Flower bulbs have this fixed at 60% with no slider, so this would be its first slider.

I recommend these five.

---

### Dani · 2026-11-20 12:28

q1 why in pink box? every giant flower is manipulated through code no? so only the default one, or is that wrong?

---

### Claude · 2026-11-20 12:28

You're partly right. The giant flower is one recipe in code, but each flower on your map runs that recipe with its own settings. Those settings are what its pink box holds: Size, Bend, Stem length, leaf heights and the rest. For example, the flower on 15,0 at size 2.9 and the default flower come out as two different shapes, so they'd be two different files.

Exporting only the default is enough if what you want in Blender is one reference per kind of object, to model your own art over. That fits how models come back in, too: one `giant-flower.glb` in the `models` folder replaces every giant flower on the map. So one file per kind is the better way, and I'd drop the pink box idea.

**Q1 (revised).** Should I add one **Export all** button, next to Save in the map editor's top row, that saves one .glb of each kind of object into an `exports` folder? I recommend yes. Each kind would be exported like this:
- **Giant, arching and decorative flowers:** your default flower's settings (the ones Make default flower saved).
- **Harvestables and rocks:** one at its average size, not turned.
- **Machines, the Guardian, wayfinders, the player, key items and the kit:** one each, standing still, since a file holds one pose.

If you ever need the exact shape of one flower you built, I can export that one on its own when you ask. I wouldn't build a button for it.

---

### Dani · 2026-11-20 12:29

forget about the grass bits

---

### Claude · 2026-11-20 12:29

Okay, no grass bits. I hadn't changed anything for them, so there's nothing to undo.

Q1 is still open: should I add the Export all button?

---

### Dani · 2026-11-20 12:30

how are the objects imported back into the game?

---

### Claude · 2026-11-20 12:30

The import side is built: the game picks up any .glb file of the right name in its `models` folder. Here is how it works:

**How to bring a model in:**
1. In Blender, use File → Export → glTF 2.0 and choose the .glb format.
2. Save it in the trial's `models` folder (`tessera-m1\models`).
3. Give it the name of what it replaces, for example `puffball-tree.glb`. The open game reloads by itself and shows your model everywhere that object stands.

To go back to the game's own shape, delete the file or rename it.

**The 11 names the game knows:** `puffball-tree`, `mushroom-cap-tree`, `cone-trees`, `flower-bulbs`, `pod-stalks`, `ladder-vine-clump`, `giant-flower`, `arching-flower`, `wall`, `low-wall` and `slope`. Every other object can't be replaced from a file yet. That covers machines, the Guardian, wayfinders, the player, key items and porous rocks.

**How to build the model:**
- 1 Blender unit is 1 metre, and the model stands on the ground at 0. The player is 1.4 m tall and a tile is 3.75 m wide.
- The model's front faces Blender's Front view.
- Keep it to a few thousand triangles so phones can run it.
- A model only changes the look. Where the player can stand and what blocks the way stay as the code has them. So a giant flower model needs its leaves and head where the game's own flower has them.

**Two warnings:**
- **The README is out of date here.** It still lists `rock.glb`, which the code no longer uses since porous rocks were reworked, and it leaves out `ladder-vine-clump`. I'll fix it with the next version.
- **Nobody has tested a model since 30 October.** The giant flower has changed a lot since then: it bends, dries, regrows and is stood on as drawn. Those depend on the game's own flower, so a giant flower model probably wouldn't do any of them. Trees, plants and walls should still work.

---

### Dani · 2026-11-20 12:32

no need for a button i can just ask you. it's a one time thing. the import however will be iterative, so that might need a button (if possible)

(sent while Claude was working) The README is out of date here. It still lists rock.glb, which the code no longer uses since porous rocks were reworked, and it leaves out ladder-vine-clump. I'll fix it with the next version.
whatdo you mean

---

### Claude · 2026-11-20 12:32

I said the wrong thing earlier. I wrote that `rock.glb` stopped working when porous rocks were reworked. Git shows otherwise: `rock.glb` replaced the plain rocks (`R` on the map), and you had those removed on 31 October (v0.243.0: "you can remove rocks from the game"). Porous rocks never had a model file.

**What I meant about the README.** The README is the trial's manual, and its section "Models from files" lists the file names the game accepts. That list is wrong in two places:
- **It lists `rock.glb`.** The game ignores a file with that name, because the rocks it replaced are gone.
- **It doesn't list `ladder-vine-clump.glb`.** The game does accept that name; the list was never updated when the clump was added.

The code has the right names. I'll correct the list next time I save a version, so you don't get a version for the README alone.

**Import needs no button.** The `models` folder already works as one: every time you save from Blender into it, the open game reloads with the new model. To make each round one click, Blender 4.2 and newer have **Collection Exporters**:
1. Put the model in its own collection.
2. In the collection's properties, add an exporter (glTF 2.0) and set its file to `tessera-m1\models\puffball-tree.glb`.
3. From then on, the collection's **Export** button saves the model straight into the game.

**Warning: save models into the trial's folder, not M1 testing's.** Each time you press Update M1 testing, M1 testing's `models` folder is overwritten with the trial's. A model saved only in M1 testing's folder would be deleted. Saved in `tessera-m1\models`, it reaches M1 testing at your next Update.

---

### Dani · 2026-11-20 12:32

why isn't it up to date i don't understand

[Request interrupted by user]

don't do anything yet. why is tht read me thingie outdated?

---

### Claude · 2026-11-20 12:33

It's my mistake, from two earlier sessions. The rule is that the README changes with every change to the game, and both times one line was missed:

1. **31 October (v0.243.0):** you had the plain rocks removed. That session took them out of the code, including the code's list of model names, but left `rock.glb` in the README's list.
2. **14 November (v0.530.0):** the ladder vine clump was added. That session added `ladder-vine-clump` to the code's list of model names, but not to the README's.

**Why it was missed:** the README is long, and the list of model names sits in a paragraph about models, far from the sections those sessions were working on (rocks, chests). Each session updated the sections about its own feature and didn't search for other places that mention it. The tests check only the code, not the README, so nothing caught it.

**What it affects:** only the manual. The game itself is right. Following the wrong list, you could save a `rock.glb` that does nothing, or not know the clump can be replaced.

I've changed nothing. When you say so, I'll correct the list. I could also add a test that compares the README's list of model names with the code's, so the two can't drift apart again. I recommend both.

---

### Dani · 2026-11-20 12:34

then update it

---

### Claude · 2026-11-20 12:35

Updating the README's list of model names now, then I'll save it as a new version along with your two map imports from last night.

I've corrected the README's model list and saved it as v0.594.1. It's committed and pushed to GitHub, and all 245 tests pass.

**What changed in the README** (the "Models from files" section):
- `ladder-vine-clump.glb` is now on the list, and `rock.glb` is gone. The list now matches the names the game actually loads.
- It now says which things have no model file: machines, the Guardian, wayfinders, the player, key items, the kit, porous rocks and coal seams.
- It now warns to put models in the trial's `models` folder, not M1 testing's, because Update M1 testing deletes any file that is only in M1 testing's folder.

**Also in this version:** your two map imports from M1 testing last night, at 23:00 and 23:14, which weren't saved in git yet. They add twelve waypoints from 20,-4 onward, each needing more fruit by the formula, up to 116,802. They also move a forge and remove a chest, and your Phone running speed is 1.15. The trial's maps from before those imports are kept in `maps/before-import`.

One slip: the commit message says "the forge on 19,-?" because I left a placeholder where its tile should be. I didn't fix it, because the rules say never to change a saved version.

I didn't add the test that compares the README's list with the code's. Say yes if you want it.

M1 testing gets this version when you press Update M1 testing.

---

### Dani · 2026-11-20 12:38

there was something else you warned about in regards to importing objects

---

### Claude · 2026-11-20 12:39

Yes. The other warning was that **nobody has tested a model in the game since 30 October**, when model files were added.

Most objects haven't changed much since then: trees, plants, walls. Their models should still work.

**The giant flower has changed a lot.** It now bends when walked on, dries and burns, shatters, regrows, and is stood on exactly as drawn. All of that runs on the game's own flower. I checked the code just now, and it confirms part of the problem: a giant flower model always stays whole, so it never dries, burns or regrows. Bending and standing on a flower model have never been tried, so I can't say whether they work.

**Q1.** Before you start modelling, should I test one simple stand-in model of each of the 11 kinds on a copy of the trial (not your running one) and tell you what works? I recommend yes. It would take about half an hour, and you'd know what to expect before spending time in Blender.

---

### Dani · 2026-11-20 12:39

yes

---

### Claude · 2026-11-20 12:40

Starting: a copy of the trial in the scratchpad, 11 stand-in models, then each one tried in a hidden browser.

Writing the 11 stand-in models now (bright magenta and yellow boxes, so they're easy to spot).

Setting up the copy's server with the stand-in models.

Everything loads; now taking a picture of each model in place on your map, after raising and reviving everything in the copy.

The models load and show in place. Now checking how they line up (walls, flowers) and trying harvesting, a chest with a clump, and standing on a giant flower model's leaf.

Harvesting works with a model. Next: standing on a giant flower model's leaf, opening the chest with the clump, and a picture of a bent wall.

Done testing. Stopping the copy's server.

Trees, plants and straight walls work with models. Giant flowers, arching flowers and bent walls don't fit, because one model can't follow each one's own shape. I tested a copy of the trial in a hidden browser, with bright magenta stand-in boxes on your map; your running trial wasn't touched. It took about 15 minutes.

**What works:**
- All 11 model files loaded with no errors, and every object of those kinds on your map showed its model.
- **Puffball trees, mushroom-cap trees and flower bulbs** stand where they should. Each is turned its own way and sized by its own size.
- **Harvesting a model works.** I harvested a tile of flower bulbs: the hits counted, the fruit came in, and the bulbs were used up.
- **Walls, low walls and slopes** stand in place, turned with their piece.

**What doesn't fit:**
1. **Giant flowers.** Every giant flower shows the same model, at the model's own size and standing straight up. Your flowers each have their own Size (1.1 to 2) and Bend (2° to 90°), and the game ignores both for a model. The leaves the player stands on stay where the game's own flower has them. So with a model, the player stands on an invisible leaf in mid-air: `C:\Users\someo\AppData\Local\Temp\claude\653749dc61028eb9\7094586b-975b-4707-95ce-93db3aad0c7e\scratchpad\m4-leaf.png`. A giant flower model also never dries, burns or regrows, and doesn't dip when stood on.
2. **Arching flowers.** Every one shows the same straight model. The game's own vary each stem's length and how open the flowers are, and they arch over.
3. **Wall bends.** Five of the six wall pieces on your map are bends. There is only one `wall.glb`, so a bend shows as a straight piece, while the player walks against the game's bent wall: `C:\Users\someo\AppData\Local\Temp\claude\653749dc61028eb9\7094586b-975b-4707-95ce-93db3aad0c7e\scratchpad\m4-bent-wall.png`.
4. **Not seen in the game:**
   - Cone trees and pod stalks, because none are on your map.
   - The ladder vine clump, because I couldn't get its chest open in the hidden browser.

   All three use the same code as the flower bulbs, which worked.

**Q1.** Should I leave the import as it is for now? You can model trees, plants and straight walls today. Making giant flowers, arching flowers and bends take models would be a bigger change: the game would load separate files for a leaf, a head and a stem, and place and bend them by each flower's settings. I recommend leaving it until you're ready to model those, then we discuss how before I build anything.

Claude's picture 001

Claude's picture 002

---

### Dani · 2026-11-20 13:01

don't do anyting yet.
1. would it be better to export giant and bending flowers in pieces. stem, leaf, petal etc
2. i just remembered that we need to make transitions of harvestables being depleted from full to 0 in 4 steps it was i think, the first being the original object as it is to 0 which is the depleted form we have now. how would we make the two forms in between?

---

### Claude · 2026-11-20 13:02

I haven't changed anything.

**1. Yes, export giant and arching flowers in pieces.** The game already builds a giant flower in pieces: the stem, each leaf with its stalk, and the head. That's how leaves bounce, and how each flower gets its own size, bend and leaf heights.

So the useful export is one flower split into named parts: stem, leaf, stalk, one petal, and the head's middle. In Blender each part is its own object. When they come back, the game places each part by each flower's settings. For example, you model one petal; a flower with 5 petals uses it 5 times round its head, and one with 7 uses it 7 times. Leaves still bounce, and every flower keeps its own size and bend.

Three parts need a decision first:
- **The stem** bends along a curve, up to 90°, so a stiff stem from Blender can't follow it. I recommend the game keeps shaping the stem and takes only its look from your model: colour, texture and thickness.
- **The leaf** has to match the outline the player stands on, or they stand on air beside it. I recommend the game takes the standing outline from your leaf model, so what you see is what you stand on.
- **Dried flowers:** you'd either model a dried set of parts, or the game darkens and crumples yours, as it does its own now.

Arching flowers work the same way: a head, a petal and a leaf, placed along stems the game shapes.

**2. The four looks.** The documents agree with you. DOCS/09 says "A harvestable has at most 4 looks", and the asset list names them Full → Partial 1 → Partial 2 → Depleted. The trial has only two: full, then the depleted form after the last hit. Porous rocks are the exception: they pale a little with every hit.

**How to make the two looks in between: take parts away.** Most harvestables are already made of parts, and since 14 November each part drops its own resources. For example, a flower bulb clump of 4 bulbs:
- **Full:** 4 bulbs.
- **Partial 1:** 3 bulbs.
- **Partial 2:** 1 or 2 bulbs.
- **Depleted:** the stems it leaves now.

Puffball trees would lose puffs, cone trees cones, pod stalks pods, and arching flowers their side flowers. Porous rocks and coal seams would lose rocks from their cluster.

**When your models come:** four files per harvestable, for example `puffball-tree.glb`, `puffball-tree-1.glb`, `puffball-tree-2.glb` and `puffball-tree-depleted.glb`. The game would switch to the next file at each look.

**Hits:** every harvestable takes 6 hits now, so with four looks it would change look every 2 hits. DOCS/09 also says the hits from one look to the next depend on the tool's level and the harvestable's level ("sometimes 3 hits, sometimes 1"). That isn't built; it's a separate question for later.

**Q1.** Should the game make the two in-between looks now by taking parts away, ready for your four model files later? I recommend yes. That way you can test the steps and their timing before you model anything.

**Q2.** Should porous rocks and coal seams lose rocks at each look, keeping the paling for porous rocks? I recommend yes, so every harvestable changes the same way.

---

### Dani · 2026-11-20 15:17

the drops portions themselves among the 4 forms, depending on the level of the tool. 
this actually points to a flaw in our mechanics. 
a bush at tool level 1 drops let's say 10. so each hit is 10/4 per hit
at tool level 2 the bush would drop for example 15 resources, so it's 15 divided by 4 per hit
if it's level 3 but the harvestable only drops 4, then each hit is 1
don't do anything yet


q1 and 2
there will be more harvestables later like mushrooms or cactus which deplete withre the same style as stones or as fruit.
perhaps fruits can deplete the way they do now, but a depleted tree doesn't drop a whole puff at a time then leave behind the whole trunk, even the trunk  is removed in phase 4
i  think we need to have 2 reuasable animations. one similar to the fruit, and one to the rocks. 
question is, is it possible to have 2 reuable types of animation?

---

### Claude · 2026-11-20 15:19

I haven't changed anything.

## 1. The flaw

You're right, and here is where it comes from:
- Today a harvestable's drop is set per hit, and every harvestable takes 6 hits. So what you get in total is the drop per hit × 6.
- The documents say a better tool takes fewer hits: "sometimes 3 hits, sometimes 1" per look.
- With drops set per hit, fewer hits means fewer resources. A better tool would gather less. For example, at 2 a hit, a level 1 tool takes 9 hits and gets 18, but a level 3 tool takes 3 hits and gets only 6.

**Your way fixes it.** You set the total, and the game shares it among the hits. The total for each tool level can come from the forge's potency, as it does now: 10 at level 1, and 50% more makes 15 at level 2. So you'd set one number per harvestable.

**One correction, if I read you right:** 4 looks have only 3 changes between them, Full → Partial 1 → Partial 2 → Depleted. The depleted look drops nothing, so the total is shared by 3, not 4:
- 10 → 3, 3, 4
- 15 → 5, 5, 5
- 4 → 1, 1, 2

**Whole numbers:** a total rarely shares out evenly. Today each hit picks a random number round its average, so the same bush can give 8 one time and 12 the next. I recommend sharing in whole numbers, with the leftover on the last hit, so the total is always exact.

## 2. Two reusable types: yes

The game would have two depletion types. Each harvestable names one, and a mushroom or cactus later just picks one, with no new animation work.

- **Fruit type:** parts go at each look. Each part pops and bursts into its drops as it goes. The trunk or stem is a part too, the last to go, leaving today's stump. A puffball tree with 6 puffs:
  - Full: the whole tree.
  - Partial 1: 3 puffs gone.
  - Partial 2: the other 3 puffs gone, the bare trunk left.
  - Depleted: the trunk gone, the stump left.
- **Rock type:** the whole thing wears down at each look. It shrinks a step, pales as porous rocks do now, and chips fly off. Depleted is today's slab.

**With your Blender models:**
- **Fruit type:** you name each part by the look it goes in. That's one file per harvestable instead of four.
- **Rock type:** one file, which the game shrinks and pales.
- **A look you want to draw by hand,** such as a cracked rock, can have its own file in place of the game's step.

**Q1.** Should the total be shared among the 3 changes, not 4? I recommend yes.

**Q2.** Should drops be shared in whole numbers so the total is exact, instead of a random number at each hit? I recommend yes.

**Q3.** Should trees use the fruit type as in the example: puffs over the first two changes, then the trunk at the last, leaving the stump? I recommend yes.

---

### Dani · 2026-11-20 15:31

that's not completely the picture actually. let's say a harvestable can  be gathered as level 1. taking 4 hits even if it will drop more pet hit won't be super satisfying. decreasing the amount of hits in addition to increased yield is more satisfyiing. in that case, a low leveled harvestable should deplete in three steps. to solve that, we can for example go from phase 1, skip phase 2, phase 3, skip phase 4, phase 5, and then 6
it would be annoying to players otherwise

Rock type: one file, which the game shrinks and pales.
how do you mean by shrink? i was thinking a part of the rock would be removed every phase. like the rock is 1m tall and 1m wide, phase 2 is 0.7m tall and 1m wide, width never changes.

---

### Claude · 2026-11-20 15:32

I haven't changed anything.

## 1. Fewer hits as the tool gets better

Agreed: fewer hits with more in each feels better than more hits. Worked out, your idea is that **every hit moves the harvestable to a new look, and a better tool skips looks.** With 6 looks, where look 6 is depleted:

| Tool against the harvestable | Looks it shows | Hits |
|---|---|---|
| Same level | 1, 2, 3, 4, 5, 6 | 5 |
| 1 level higher | 1, 3, 5, 6 | 3 |
| 2 levels higher | 1, 4, 6 | 2 |
| 3 or more higher | 1, 6 | 1 |

**The total is shared among those hits.** Take a bush that gives 10 to a same-level tool, with a forge adding 50% a level:
- Same level: 10 in 5 hits, 2 a hit.
- 1 level higher: 15 in 3 hits, 5 a hit.
- 2 levels higher: 23 in 2 hits, 11 and 12.
- 3 levels higher: 34 in 1 hit.

**This changes the documents.** Gather a resource says: "A harvestable has at most 4 looks. The number of hits needed to move it from one look to the next depends on both levels: sometimes 3 hits, sometimes 1." Your idea replaces both sentences.

**How many looks:** 4 looks leave little room to skip, only 3, 2 and 1 hits. With 6 you get 5, 3, 2 and 1. Extra looks cost you little in Blender, because you name parts by the look they go in. A look drawn by hand as its own file does cost more: the asset list counts 4 per harvestable, 64 in all, and 6 would make 96.

## 2. Rocks

By "shrink" I meant the whole rock getting smaller, narrower too. Your way reads better: only the height goes down, so it looks broken, not shrunk.

- **The game's own rocks** (porous rocks, coal seams): the game builds these itself, so it can build each look lower with a rough top, at the same width. For example 1 m, then 0.7 m, and so on.
- **Your rocks from Blender:** the game can't break a model naturally. Slicing the top off would leave a flat, sawn face. So I recommend you split the rock into stacked pieces in Blender, each named by the look it goes in. You shape each break yourself, and the game crumbles each piece into chips as it goes.

That makes the two reusable types work the same way: parts named by the look they go in. Only the animation differs: a fruit part pops off whole, and a rock piece crumbles into chips.

**Q1.** Should Gather a resource's two sentences be replaced with "every hit moves it to a new look, and a better tool skips looks"? I recommend yes.

**Q2.** Should harvestables have 6 looks, as in your example? I recommend yes, for the 5, 3, 2 and 1 hits.

**Q3.** Is the table right, including 1 hit when the tool is 3 or more levels higher? I recommend yes: it makes upgrading pay off.

**Q4.** Should your Blender rocks be stacked pieces, each named by the look it goes in? I recommend yes.

My earlier questions still stand: whole numbers so the total is exact, and the trees' puffs going first and the trunk last.

---

### Dani · 2026-11-20 15:42

This changes the documents. Gather a resource says: "A harvestable has at most 4 looks. 
no no i exlpained it wrong. the document stays the same
my examplel was written wrong. It's always 4 forms, but what i meant is 4 can represtnt 3 hits in total by skipping a form, or repressent even 10 hits (examlple) in total through 4 forms by combining several hits using one form

then it's one type of animations. would it be more effective to make one object, with part removed through code? for example, the rock object is 1 file, but the object in the model has all 4 pieces stacked in place, each above the other. all 4 visible is form 1, first part removed is form 2, etc. i mean instead of 4 files

the important t hing is speed, device load and least bugs

---

### Claude · 2026-11-20 15:43

Got it: there are always 4 forms, and only the number of hits changes. The forms are spread over the hits:
- **10 hits:** the form changes at hits 4, 7 and 10. Between those, the hits only drop resources.
- **3 hits:** each hit moves it to the next form.
- **2 hits:** the first hit goes to form 2, and the second goes straight to depleted, skipping form 3.
- **1 hit:** it goes straight to depleted.

## One file with the pieces stacked

Yes, one file is better on all three things you named:

- **Speed:** the game loads one file instead of four. With four files, the piece that stays at the bottom is in every file, so there's more to download.
- **Device load:** hiding a piece is the cheapest change a game can make, because a hidden piece isn't drawn at all. Swapping files means building a new model in place of the old one at every change. The game already draws its own harvestables as separate parts, so 4 pieces adds no new cost.
- **Least bugs:** in one file, the pieces can't drift apart. With four files, if one form sits a little off in Blender, the rock jumps sideways when it changes. One model also keeps one position, turn, size and hitbox, and the code only hides pieces.

**How you'd name the pieces in Blender:** by the form they're gone in, `gone-2`, `gone-3` and `gone-4`. The piece left when depleted needs no special name. Several objects can share a name: three puffs can all be `gone-2`. Blender adds .001 to repeated names, and the game reads only the start of the name.

If a form ever needs something added rather than removed, such as a crack appearing, a piece can be named to appear in that form instead.

**Q1.** Should each harvestable be one file, with its pieces named `gone-2`, `gone-3` and `gone-4`? I recommend yes.

**Q2.** When a piece goes, should it break into chips that fly off as its drops burst, the same for fruit and rocks? I recommend yes: one animation for everything.

**Q3.** Should I first split the game's own harvestables into pieces this way, so you can test the forms and their timing before you model anything? I recommend yes. Before building, I'd list the settings it needs, such as how many hits at each level, for you to pick and name.

Still open from before: drops in whole numbers, so the total is always exact.

---

### Dani · 2026-11-20 15:47

don't forget that number of hits is also affected by level of plant and tool
your table was accurate except highest amount of forms is 4
don't do anything yet. need to make sure we're on the same page

i didn't understand q2
there should be a shatter for each form, and number of shattered resources each hit as we discussed before
3 elaborate pls

---

### Claude · 2026-11-20 15:48

Agreed, and I haven't changed anything. Here's the table with at most 4 forms. Both levels count through the gap between them: a tool below the plant's level can't harvest it at all, so "same level" takes the most hits.

| Tool against the plant | Hits | Forms it shows |
|---|---|---|
| Same level | 5 | 1, 2, 3, 4: changes at hits 2, 4 and 5 |
| 1 level higher | 3 | 1, 2, 3, 4: one hit each |
| 2 levels higher | 2 | 1, 2, 4: form 3 skipped |
| 3 or more higher | 1 | 1, 4: straight to depleted |

The hit counts are examples; you'd set them.

## Q2, said plainly

A hit can do two things:
- **Every hit:** the resources it drops burst out and fly to you, as now, by the burst formula we agreed (up to 7, then fewer).
- **A hit that changes the form:** the piece that goes also shatters.

Your answer is what I meant. The open part is what that shatter looks like. I'd reuse the dried giant flower's shatter: the piece breaks into small cubes in its own colours, which burst, tumble, sink and shrink away. The door's rocks already reuse it. When a hit skips a form, both pieces shatter at once.

## Q3, in more detail

Your Blender models don't exist yet. The game draws its harvestables from its own code: the puffball tree is a trunk and puffs, and a porous rock is one rock shape.

So I'd make the game split its own shapes into the same 4 forms, for example:
- **Puffball tree:** form 2 loses half the puffs, form 3 the rest, and form 4 the trunk, leaving today's stump.
- **Porous rock:** each rock is built as stacked slices. The top slice goes first, the width never changes, and form 4 is today's low slab.

Then the whole system works now: hits by level, the forms, the shatter, and the drops shared out. You can play it and tune the numbers before you model anything. When a model of yours arrives, it replaces the game's shape, and the same code hides its `gone-2`, `gone-3` and `gone-4` pieces. The code is written and tested once, and the models only plug in.

Before building, I'd show you how each harvestable splits and list the settings, for you to pick and name.

**Q1.** Does the number of hits depend only on the gap between the levels? Then a level 5 plant with a level 5 tool takes as many hits as a level 1 plant with a level 1 tool. I recommend yes: one table for the whole game, and the plant's level already decides which tool it needs and how much it gives.

**Q2.** Should a piece that goes shatter like a dried giant flower, in the piece's own colours? I recommend yes: it's built and tested already.

**Q3.** Should I first split the game's own harvestables this way, so you can test before modelling? I recommend yes.

Still open: drops in whole numbers, so the total is always exact.

---

### Dani · 2026-11-20 15:55

the amounts will need tuning until they feel right, so is it possible to enter the values insstead of making them static first?

q2 sorry i'm dumb so still not following
but basically, i think it might be best to shatter whenever a layer is depleted. so for 6 hits
1 no shatter, 2 shatter total amount etc. i think even this will need tuning. it's difficult to decide most satisfying values without seeing it

q1 i'm not sure. it's getting complex for me to gather thoughts
q2 what do you mean? the shattered objects are not cubes. they are leaves or drops of water. where did cubes come from?

---

### Claude · 2026-11-20 15:55

I haven't changed anything.

**Entering the values:** yes. Every number will be a setting you enter and change while you play: the hits, the resources, and when they burst. Nothing will be fixed in code. Before building, I'll list the settings with plain names for you to pick and rename, as usual.

**Cubes:** my fault, I used "shatter" for the wrong thing. You mean the resources bursting out, the leaves and water drops, as the Shatter settings do now. I was asking about something else: what happens to the piece itself, such as the trunk or the rock slice, when it goes. Your answer settles it. The piece vanishes as its resources burst out. No cubes.

**Q1 (hits and both levels):** no need to decide now. I'd start with the simplest rule: the bigger the gap between the tool's level and the plant's level, the fewer the hits. You enter the hits for each gap. If playing shows that high-level plants should take longer, we change it then.

## The whole picture, to check we're on the same page

1. Every harvestable has 4 forms: full, two in between, and depleted.
2. It's one Blender file, with its pieces named by the form they go in. The game hides pieces; it never swaps files.
3. The gap between the tool's level and the plant's level sets the number of hits. With few hits a form is skipped; with many, several hits share one form.
4. The levels also set the total resources, which are shared among the layers.
5. When a layer goes, it vanishes, and its share of the resources bursts out and flies to you. For 6 hits: hits 1, 3 and 5 burst nothing, and hits 2, 4 and 6 each burst their layer's share.
6. Until your models arrive, the game's own harvestables are split the same way, so you can play it now.

Point 5 changes the documents, which say "Every hit gives drops." So I'd make it a setting with two choices: burst at every hit, or only when a layer goes. You try both, and the documents change only once you've picked one.

**Q1.** Is this the whole picture? If yes, the next step is the settings list for you to pick and name. I still won't build anything until you say so.

---

### Dani · 2026-11-20 16:00

i think i prefer sliders wherever possible actually. there will be a lot of tuning and it's difficult to keep changing them via requests. takes too much time. and i'm not even sure if i would prefer the new shatter/form visuals, meaning following the document or changing it

can you propose all the necessary sliders if it's possible

---

### Claude · 2026-11-20 16:02

Yes, it all works as sliders. With the right settings it plays exactly as now, so you can compare the old and new side by side: Forms 2, Shatter at every hit, and all four Hits sliders at 6.

## Tuning › Harvesting (in place of Hits to use up)

| Name | What it does | Starts at |
|---|---|---|
| **Forms** | How many forms a harvestable has, depleted included. 2 is as now: full, then depleted. | 4 |
| **Hits at the same level** | Hits to deplete it when the tool's level is the plant's | 6 |
| **Hits, tool 1 level higher** | The same, with a tool 1 level above the plant | 3 |
| **Hits, tool 2 levels higher** | The same, 2 levels above | 2 |
| **Hits, tool 3 or more levels higher** | The same, 3 or more levels above | 1 |
| **Shatter** | Two choices: at every hit (the documents), or when a layer goes | At every hit |
| **Each shatter gives more by** | How much more each shatter gives than the one before. With 12 in 3 shatters: 0% gives 4, 4, 4; 50% gives 3, 4, 5. | 0% |
| **Total varies by** | How far the total can land from its number, at random. 0% is always exact. | 0% |
| **Layer vanishes in** | How long a layer takes to vanish as it goes. 0 is at once. | 0.2 s |

## In each harvestable's box (changed, not new)

| Name | What it does | Starts at |
|---|---|---|
| **Drops in all**, and the same for its second drop, in place of Drops per hit | What it gives in all when the tool is at its level | Today's per-hit number × 6, so it gives what it gives now |

## In the porous rocks' box

| Name | What it does | Starts at |
|---|---|---|
| **Pales by** | How far toward white it pales by the time it's depleted. 0 means no paling. | 55%, as now |

**Already there, unchanged:** each harvestable's Level box, and each forge's "Increase gathering potency by", which sets how much more a better tool gives.

**Hits that shatter nothing** still shake the plant or knock the rock, as now, so no hit feels dead.

**Not a slider:** how each harvestable splits into layers, such as which puffs go first. I'll show you that before building.

**The documents stay as they are** until you've played it and decided.

**Q1.** Which of these should I build, and under what names? I recommend all of them, with these names unless you rename them.

**Q2.** Should drops be set in all instead of per hit? I recommend yes: it fixes the flaw you found, where a better tool would gather less.

---

### Dani · 2026-11-20 16:04

how come the porous rock is different?

---

### Claude · 2026-11-20 16:04

Porous rocks are the only harvestable that changes colour as it's harvested. They pale toward white with each hit, because water comes out of them: your choice of 25 October. Coal seams don't pale; on 14 November you said "no no they can't go grey. water doesn't come out of them".

So Pales by is only in the porous rocks' box because only they pale. The amount has always been fixed at 55%, with no slider. I added one because the layers already show the rock wearing down, so you may want less paling, or none at 0.

**Q.** Should Pales by be on the list? I recommend yes: it's small, and it lets you compare paling with and without the layers.

---

### Dani · 2026-11-20 16:07

Q2. Should drops be set in all instead of per hit? 
That's too unclear. can you please phrase it better

porous rocks can be faded via the object. as long as the 4 parts are named correctly they can contain whatever no?

---

### Claude · 2026-11-20 16:07

## Q2, rephrased

Today each harvestable's slider says **how many it drops at each hit**. Take flower bulbs at 2 seeds a hit, which takes 6 hits: 12 seeds in all.

Now give the player a better tool, which takes only 3 hits. At 2 a hit they get only 6 seeds. The better tool gives less.

If the slider said **how many it gives in all** instead, say 12 seeds, the game would share those 12 among however many hits it takes. With 6 hits that's 2 a hit, and with 3 hits it's 4 a hit. The better tool then gets the same 12, faster, plus the forge's extra.

**Q2.** Should each harvestable's drop slider say how many it gives in all, instead of how many at each hit? I recommend yes.

## Porous rocks faded in the model

Yes: each part can contain anything, in any shape and colours, made of as many objects as you like. The game reads only the names.

One catch: a part that stays visible keeps its colour. Say you colour form 1 dark and form 2 pale. Hiding the top part reveals form 2, but the parts underneath are the same objects as in form 1, so they're still dark. To make them pale in form 2, you'd need a pale copy of each remaining part, set to appear when the dark one goes. That means more parts to model and name.

The game's paling does this by itself on any model, with no copies. So I recommend keeping it for the porous rocks and fading in the model only what the paling can't do.

---

### Dani · 2026-11-20 16:10

q2 yeah agreed

i can instead make form 1 a whole rock in normal color, then form 2 manipulate the colors of the remaining pieces, etc via blender

---

### Claude · 2026-11-20 16:11

Q2 noted: each harvestable's drop slider will say how many it gives in all.

**Recolouring the forms in Blender works, with one condition:** form 2's pieces have to be their own objects, not the same objects as form 1's whole rock. In one file, an object has one colour. So:
- **Form 1:** the whole rock, in its normal colour, as one object.
- **Form 2:** the remaining pieces as new objects, in paler colours.
- **Forms 3 and 4:** the same again.

The game shows only the objects of the current form. Against your three criteria:
- **Device load:** the same as before, because hidden objects aren't drawn.
- **Speed:** the file is a little bigger, since each form is modelled whole. For rocks this is small.
- **Bugs:** no new code, only the hiding. The one thing to watch is that each form lines up with the one before, or the rock jumps when it changes. Making each form from a copy of the one before, left in place, avoids that.

**Naming:** "gone-2" only covers pieces that disappear, so it can't handle this. A simpler rule covers both ways of working: **name each object by the forms it shows in.** A name with no form in it shows in every form.

| Stacked pieces | Recoloured forms |
|---|---|
| top piece: `forms-1` | whole rock: `forms-1` |
| next: `forms-1-2` | paler pieces: `forms-2` |
| next: `forms-1-2-3` | paler still: `forms-3` |
| base: no form, so every form | slab: `forms-4` |

**Pales by:** I now recommend leaving it out. Your models will carry their own colours, and the game shouldn't pale them on top. The game's own rock keeps today's fixed paling until your model replaces it.

**Q1.** Should each object be named by the forms it shows in, like `forms-1` and `forms-2-3`, with no form meaning every form? I recommend yes.

**Q2.** Should Pales by come off the list, with the game never paling your models? I recommend yes.

---

### Dani · 2026-11-20 16:19

here are the slider names

number of hits:
at similar level
1 level higher
2 levels higher
3 levels higher
4 levels higher
5 levels higher

shatter:
every hit / every form
Each shatter gives more by (i didn't understand this one)
rng
seconds / layer

You're reallyl making a too big deal about porous rocks. just make it like evey other object for simplicity and blender will contain the correct transition each layer. 
forget about the pale stuff

form-1
form-1

(sent while Claude was working) form-1
form-2
form-3
form-4

---

### Claude · 2026-11-20 16:21

Got it: `form-1`, `form-2`, `form-3`, `form-4`. I read that as each object showing only in the form its name gives, so each form is complete on its own. A piece that stays from form 1 to form 3 is copied into `form-2` and `form-3`. Hidden copies aren't drawn, so they cost nothing while playing.

## Your sliders

**Number of hits:** at similar level; 1, 2, 3, 4 and 5 levels higher. They start at 6, 3, 2, 1, 1 and 1. Tools go up to level 5 and plants start at level 1, so in the game the biggest gap is 4. "5 levels higher" matters only in the trial, where forges go past level 5, and it will cover any gap beyond 5.

**Shatter**, beside its two sliders that are there now: every hit / every form, rng, seconds / layer.

**Not on your list, so not built:**
- **Forms:** every harvestable always has 4.
- **Pales by:** the game stops paling porous rocks. They work like every other harvestable, and your Blender forms carry the change.

## "Each shatter gives more by", plainly

It decides whether every shatter gives the same amount, or the later ones give more, saving the biggest for last. A bush that gives 12 in all, in 3 shatters:
- 0%: 4, 4, 4
- 50%: 3, 4, 5
- 100%: 2, 3, 7

## How the game's own harvestables split, until your models replace them

Form 4 is today's depleted look in every case.

| Harvestable | Form 2 | Form 3 | Form 4 |
|---|---|---|---|
| Puffball tree (4 puffs) | 2 puffs gone | the other 2 gone | trunk gone, the stump left |
| Cone trees (3) | 1 tree cut down | another cut | the last cut, short trunks left |
| Flower bulbs (5) | 2 bulbs gone | 2 more gone | the last gone, stems left |
| Pod stalks | a third of the pods gone | another third | the rest gone, stalk feet left |
| Porous rocks, coal seams | each rock's top third gone | the next third | the slab left |
| Arching flower (3 flowers) | 1 side flower gone | the other side flower gone | the whole flower gone |
| Ladder vine clump (4 stems) | 2 stems bare | all 4 bare | bare stems cut short |
| Lantern tree | a third of its pods gone | another third | no pods |

**Q1.** Should an object with no form in its name show in all four forms, such as a base that never changes? I recommend yes, so you don't have to copy it four times.

**Q2.** Should "Each shatter gives more by" stay, and under what name? I recommend keeping it, starting at 0%, so all shatters are alike until you try more.

**Q3.** Are the splits in the table right? I recommend yes.

Once you've answered, I'll build all of it in one go.

---

### Dani · 2026-11-20 16:23

q1 2 3 ok go

---

### Claude · 2026-11-20 16:23

This is a big job, about 3–4 hours: hits by level, four forms for nine harvestables, the shatter settings, drops in all, model forms, tests, README and version.

Reading how the game draws and harvests each kind before I change anything.

Next: the arching flower and the lantern tree's pods, which work differently from the other plants.

I have the picture of how harvesting works now. Checking how a two-choice setting is stored and shown, then I'll write the code.

Writing the plan into code now: settings first, then the forms for each harvestable.

Settings are planned. Now checking the small shape helpers the forms will be built from.

Now the code. First the settings in src/key.js.

I removed constants that other files still import, so the open trial would break. Fixing the importing files right away.

The open trial loads again. Now the pure counting functions in src/drops.js.

Now the new counting functions, appended to src/drops.js.

Counting works. Now the Number of hits and Shatter settings in src/tuning.js.

The trial is broken by an apostrophe; fixing it now.

Settings load. Next, src/planet.js: each harvestable's parts by form. Checking where parts and the arching flower's mesh are used.

Building the parts-by-form table in src/planet.js, starting with the vine clump and BOTANICALS.

Harvestables now have their parts listed by form. Next I'm wiring that into hitting and drawing.

Now the arching flower's parts.

Now models: tags by form, and porous rocks and coal seams taking a model too.

Now thingMesh: the drawing each form swaps, and rocks with a model.

Paling goes now, as Dani asked.

Now what a model leaves behind, and the hit logic itself.

Hits now follow the new plan. Adding the layer that shrinks away and the form swap, so the open game doesn't fail when harvesting.

Now calling it each frame, the lantern pods, and cleanup when harvestables are placed again.

Updating the harvesting comment in the code to match.

Tests pass except one that only passes after the commit, as expected mid-change. Next, the i-icon texts for the new sliders, then a browser test.

Same apostrophe slip again; fixing it at once.

Now the harvestables' box texts in src/sizes.js, which still describe drops per hit.

Code is in place. Now testing on a scratch copy in a hidden browser, not on Dani's trial.

The copy runs. Writing the first test: flower bulbs harvested at the same level, checking the hits, forms and fruit.

Hits, forms and the plan work (6 hits, 5 fruit at each). But the bag gained twice what the hits gave, so I'm checking where fruit is counted.

The giant flowers block the view. Re-taking the pictures from higher, with the giant flowers hidden for the test.

The views are still blocked; I'll pick the harvestable farthest from any giant flower instead.

Puffball trees go through their forms as planned: full, two puffs gone, bare branches, then stumps. Checking the rocks and the arching flower next.

Rocks lose their top thirds as planned. The arching flower is hidden behind giant flowers, so I'll check it, the "every form" setting and the shrinking layers by numbers instead.

One fault: a model showed all its forms at once until the first change. Fixing it so each model starts in form 1.

Models now start in form 1, change form by form, and leave their form 4 behind. A look at the pictures:

Rocks with a model recolour and lower by form, the depleted slab stays with the pebble named for every form, and the tree drops to two puffs. Last check: the lantern tree's pods.

The lantern tree's pods go two at a time, shrinking away, one pod at each hit, 6 in all. Now a quick check that the map editor shows the new settings.

The editor has a new "Number of hits" tab beside Harvesting. Checking its contents and Shatter's.

The editor shows both: the Number of hits tab with Dani's six names, and the four new Shatter settings. Now unit tests for the counting.

Shell quoting got in the way; using the editor tool for the test file instead.

Tests pass. Now the README: the harvesting, shatter, porous rock and models sections.

Updating the README's harvesting text now; then version, tests and commit.

Now writing the README changes.

Bumping to v0.595.0, checking no other session took that number, then running all tests.

Only the commit-dependent test fails, as before. Committing, then re-running it.

Pushed as v0.595.0; all 250 tests pass. Stopping the scratch server and checking that Dani's own trial loads the new version.

v0.595.0 is done and pushed. Your open trial loads it with no errors, and all 250 tests pass.

**What you can try now:**
- **Harvestables go through 4 forms.** Each one follows the table you approved; form 4 is the depleted look from before. Before each form changes, the part that goes shrinks away.
- **Tuning › Number of hits**, with your six names: at similar level 6, 1 level higher 3, 2 levels higher 2, and 1 for 3, 4 and 5 levels higher.
- **Tuning › Shatter**, with your four names:
  - **every hit / every form** starts on "every hit", which is what the documents say.
  - **Each shatter gives more by** starts at 0.
  - **rng** starts at 0.
  - **seconds / layer** starts at 0.2 s.
- **Drop sliders now say "… in all".** They start at what each harvestable gave before. For example, flower bulbs give 30 fruit, whether that takes 6 hits or 3.
- **Your Blender models:** name each object `form-1` to `form-4`. An object with no form in its name shows in every form. Rocks now take a model too: `porous-rock.glb` and `coal-seam.glb`.
- **Porous rocks no longer pale.**

**Tested** on a copy in a hidden browser:
- Bulbs, porous rocks and puffball trees went through all four forms.
- On "every form", rocks shattered only at hits 2, 4 and 6.
- A knife one level higher took a puffball tree down in 3 hits.
- A lantern tree's pods went two at a time.
- The totals came out exact.
- Stand-in models named by form worked, including what they leave behind.

**Not seen:** cone trees, pod stalks and the ladder vine clump, because your map has none. The arching flower was checked by numbers only, because giant flowers hid it from view.

**Things to know:**
- **A correction:** I told you 50% on "Each shatter gives more by" gives 3, 4, 5. It actually gives 2, 4, 6. The slider's description has the right numbers.
- **Coal seams** can't be cut flat like porous rocks, so until your model replaces them they get lower each form instead. The ladder vine clump's depleted stems are now cut short, as in the table.
- **Update M1 testing** will bring the new "in all" totals. Any per-hit drop numbers you'd tuned in M1 testing are replaced. M1 testing keeps its own hit count for "at similar level".
- **Your open trial broke twice, for about a minute each,** while I edited: I removed numbers before the files using them were updated, and twice an apostrophe slipped into the code.
- **Nothing is entered in Tessera Records,** and the documents are unchanged until you pick "every hit" or "every form" after playing.

---

### Dani · 2026-11-20 18:49

i forgot to ask if thee character and bird pieces also have object files

---

### Claude · 2026-11-20 18:49

No, they don't. The character and the two wayfinders are built in code from simple shapes. Only the harvestables, the giant and arching flowers, the mushroom-cap tree, walls, low walls and slopes can come from a model file.

They were left out because they move in pieces:
- **The character:** the body, the legs, and the arms that hold the tools and swim the crawl.
- **The wayfinders:** the body, the wings that fold, spread and beat, the cogs that turn with the wings, and the head, which bows to wait and to peck.

The game moves each piece on its own, so one solid model would stand stiff.

They can take model files the same way the forms work. In Blender, you would name each moving piece, for example `arm-left`, `leg-right`, `wing-left`, `cog-right`, `head`. The game then moves your pieces the way it moves its own now. You wouldn't need to animate anything in Blender.

I recommend doing this when your first character or bird model is ready. Then we agree on the piece names and where each piece turns, for example where the arm meets the shoulder, before I build it. I haven't changed anything.

---

### Dani · 2026-11-20 18:52

that's why export each piece in a file. like the giant flowers

---

### Claude · 2026-11-20 18:53

Checking what I told you earlier today about exporting the giant flower in pieces, so my answer matches it.

Yes, that works. It's the same plan we made for the giant flowers. One correction: the giant flower in pieces isn't built yet. We agreed on the plan today, but three questions are still open: the stem, the leaf's outline and the dried look. Right now `giant-flower.glb` is still one whole model that doesn't bend.

**My recommendation: one file for the character and one for the wayfinder, with each piece a named object inside.** You get the same result as a file per piece, with fewer files to export and one file for the game to load. If you'd rather have one file per piece, that works too.

**The pieces the game moves:**
- **Character:**
  - the body, with the cloak, cap, scarf and head as one piece;
  - one leg;
  - one upper arm, and one forearm with its hand;
  - the satchel and strap, shown only once the kit is found;
  - the pruning knife and the rock pick, which go in the hand.
- **Wayfinder:**
  - the body, with the head, beak, tail and legs as one piece;
  - one wing;
  - one cog, with its glowing light as its own piece.

You model one leg, one arm, one wing and one cog. The game uses each one for both sides, as it does now.

**One more thing for Blender:** put each piece's origin where it turns. For example, the arm's origin goes at the shoulder, the forearm's at the elbow, and the wing's at the middle of its cog. The game then turns each piece there, so we don't need a list of joint positions.

**A correction to my last answer:** the wayfinder's head doesn't bow on its own. The whole bird tips forward to bow and peck, so the head can stay part of the body.

I haven't built anything. When your first model is ready, we agree on the names, and then I build it.

---

### Dani · 2026-11-20 18:55

that's great. go ahead

---

### Claude · 2026-11-20 18:56

This is about 2 hours of work. I'm starting by reading how the game builds and moves the character, its tools and the wayfinders.

---

### Dani · 2026-11-20 18:56

(sent while Claude was working) in terms of polygons what should i keep in mind?

(sent while Claude was working) and round objects

---

### Claude · 2026-11-20 18:57

I'm counting the triangles in the game's own character, bird and harvestables, so I can answer your polygon question with real numbers. Then I'll go back to building.

Here's the answer to your polygon question while I keep building. I counted the triangles in the game's own shapes on your map, on a copy.

**1. Count triangles, not faces.** Each square face is 2 triangles. In Blender, turn on Overlays → Statistics to see the count.

**2. How many copies stand on the map matters more than one model's count.** Each copy draws all its triangles. The lanterns' shadows draw the nearby ones again. From your map:

| What | Triangles each | On the map | In all |
|---|---|---|---|
| Character | 1,968 | 1 | 1,968 |
| Wayfinder | 11,042 | 2 | 22,084 |
| Flower bulb clump | 600 | 69 | 41,400 |
| Porous rock | 252 | 66 | 16,632 |
| Arching flower | 13,240 | 16 | 211,840 |
| Giant flower | 19,220 | 8 | 153,760 |

So:
- **Things that stand many times** (rocks, bulbs, trees): a few hundred triangles each.
- **Things that show once or twice** (the character, the wayfinders): up to about 3,000.
- My shapes are heavier than they need to be in places. The wayfinder's body alone is about 6,800 triangles, and the arching flowers are the heaviest thing on the map.

**3. Fewer separate objects and materials.** Each separate object with its own material is drawn on its own, once for every copy. A bulb clump made of 5 objects on 69 tiles costs 345 drawings instead of 69. Join the parts that never move apart into one object, and give them one material, with the colours in one small texture.

**4. Hidden forms cost nothing while playing,** only a bigger file.

**5. Check the Subdivision Surface modifier.** The glTF exporter applies modifiers by default, so one level of subdivision makes 4 times the triangles.

**Round objects:**
- **Shade Smooth** (right-click the object) hides the flat faces inside the shape. Only the outline still shows corners, so add segments only until the outline looks round.
- **How many segments depends on how big it shows on screen.** The camera is 9 m away, so on a phone the character is about 180 pixels tall:
  - a bulb about a quarter of a metre wide is about 30 pixels, and 8 segments round look round;
  - the bird's body or a giant flower's head need 16 to 24;
  - Blender's default sphere has 32 segments and 960 triangles, more than almost anything here needs.
- **Prefer the Ico Sphere for balls.** With 2 subdivisions it has 320 evenly spread triangles. A UV sphere bunches thin triangles at its top and bottom.
- **Rocks:** keep them flat-shaded, so their sharp edges stay sharp.

Back to building the character and wayfinder pieces now.

---

### Dani · 2026-11-20 19:00

(sent while Claude was working) can you give me a simple instructions list to remodel a file. let's say the knife refinery after this. the list should include how to make sure it's built correctly (specifications), how to round round objects, and how to use shaders or whatever it was to get the painterly look in the documents. in one of the documents there was a description of the method

(sent while Claude was working) when you're done

---

### Claude · 2026-11-20 19:01

I'm reading how the wayfinder's wings and cogs are hinged, so your model's pieces turn in the same places.

I'm writing the code that puts your pieces in place: the bird's wings and cogs first, then the character's body, legs, arms and tools.

Now hooking it in at the start and adding the panel note:

The code is in and all 250 tests pass. Next I'm making the reference files on the scratch copy, then loading them back in as if they were your models, to check that every piece lands where it should.

The game's own character looks right on the copy. Now I'm placing the birds in front of the camera for a close comparison.

Now with the reference files loaded as models:

The joints read back exactly: hip 0.42 m, shoulder 0.86 m, upper arm 0.17 m. Comparing the pictures:

The bird's model pieces sit exactly where the game's own do, to 14 decimal places, on both sides. The axle was read back exactly, and the wings and cogs move in flight. Looking at the picture:

Exact now, on both sides, while standing, walking and whistling. Looking at the test model:

The test model stands and walks, its A-posed arms hang straight, and the birds show with their wings. Last checks: the see-through copy used in the void, and that your running trial still loads.

Everything checks out, and your running trial loads unchanged. Now I'm saving the reference files into the project, adding a test, and updating the README.

The README is updated. Next: the version number, tests, commit and push.

Your map import from M1 testing at 18:49 is in the folder too, so it goes in with this version. Checking what it changed:

v0.596.0 is pushed. Now your instruction list. I'm searching the Tessera documents for the painterly-look method.

The painterly method is in DOCS/18 (Visual direction). Next I'm checking which parts of the Pruning Knife Forge the game moves, because the forge can't take a model file yet.

The character and wayfinders can now take model files made of pieces (v0.596.0). Your running trial loads unchanged, and all 251 tests pass. It took about 40 minutes, not the 2 hours I estimated, and was pushed at 19:27.

**What works:**
- **`character.glb`** has the pieces `body`, `leg`, `upper-arm`, `forearm` (with its hand), `satchel`, `pruning-knife`, `rock-pick` and `whistle`.
- **`wayfinder.glb`** has the pieces `body`, `wing`, `cog` and `cog-light`. An optional `wayfinder-2.glb` gives the second bird its own colours.
- **Each piece turns at its origin.** The game reads the hip, the shoulder and the arm lengths from your file, so all its moves (walk, swim, harvest, whistle) use your model's joints.
- **One side is enough.** Model one leg, one arm, one wing and one cog; the game mirrors them for the other side.
- **A cog turns on its axle as you drew it,** at any angle.
- **A missing or misplaced piece keeps the game's own,** and the panel says why.
- **Reference files to model over:** `model-references/character.glb` and `model-references/wayfinder.glb` are the game's own character and bird. Each piece is named, with its origin at its joint.

**Tested on a copy:**
- The reference files, loaded as models, put every piece exactly where the game's own stands, while standing, walking, harvesting, whistling and flying.
- A test model of boxes, with its arm drawn angled out and its leg, wing and cog modelled on the right side, read back exactly.

**Two things to know:**
- **Draw the arm straight at the elbow.** The angle at the shoulder can be anything.
- **Your map import from 18:49 went in with this version.** It sets the waypoint chain from 20,-5 to nectar and petals.

**A correction to my polygon answer:** in Blender, an Ico Sphere at its default 2 subdivisions has 80 triangles; 3 subdivisions gives 320, not 2.

---

## How to remodel an object

**Before you start: the Pruning Knife Forge can't take a model file yet.** Its cogs and big wheel turn while it forges, the gem is set into the wheel, its ginkgo stems grow, and its parts lie in a pile while it's in pieces. Like the character, it needs named pieces first. These steps already work for harvestables, flowers and walls, and now the character and wayfinders.

### 1. Set up
1. Open the reference file, or a model of the game's own, with File → Import → glTF 2.0, to check the size. The player is 1.4 m tall and a tile is 3.75 m wide.
2. Keep Blender in metres, which is its default.
3. Stand the model on the floor (Z = 0), centred on the world's middle, with its front facing the Front view (Numpad 1).

### 2. Build it correctly
1. **Names:** rename each object in the Outliner (double-click) to the exact piece name, such as `cog` or `form-2`.
2. **Origins:** put the 3D cursor on the joint (in Edit Mode, select the joint's vertices, then Shift+S → Cursor to Selected). Then use Object → Set Origin → Origin to 3D Cursor.
3. **Apply rotation and scale only:** Ctrl+A → Rotation & Scale. Don't use All Transforms, because it moves every origin to the world's middle.
4. **Normals:** turn on Overlays → Face Orientation. Everything should be blue. Red faces are inside out: fix them with Shift+N in Edit Mode.
5. **Triangles:** turn on Overlays → Statistics. Aim for a few hundred for something that stands many times, such as a rock or a bulb, and up to about 3,000 for something that shows once or twice. A machine shows once or twice.
6. **Join what doesn't move** into one object with one material (Ctrl+J). Each separate object costs an extra drawing.

### 3. Round objects
1. Use only as many sides as the outline needs. At the game's camera, a small round thing needs 8 sides and a large one 16 to 24.
2. Right-click → Shade Smooth. The surface then looks round, and only the outline shows corners.
3. If a round thing also has sharp edges, such as a cog, use Shade Auto Smooth at about 30°. Curves stay smooth and edges stay sharp.
4. For balls, use an Ico Sphere (2 or 3 subdivisions) rather than a UV Sphere.
5. A Bevel modifier with 1 or 2 segments softens hard edges so they catch light. Avoid Subdivision Surface: each level is 4 times the triangles.

### 4. The painterly look (DOCS/18, Visual direction)
The documents choose "simple geometry + UVs + hand-painted colour/value textures + extremely simple controlled lighting", rather than a complicated renderer. **The look comes from your painting, not from shaders.** The game keeps only each material's Base Color and its picture. Shader node setups, roughness, metal, normal maps and glow are dropped.

1. **Unwrap:** in Edit Mode, select all, then UV → Smart UV Project.
2. **Export the UV layout:** UV → Export UV Layout, as a PNG of 512 or 1024 pixels.
3. **Paint over it in your painting app:** broad colour and value shapes, soft irregular edges, and a few strong accents, as the document lists.
4. **Paint the light in softly:** lighter on top, darker underneath. The game adds its own light on top, so keep the painted shadows gentle.
5. **Load the painting:** in the Shading tab, connect an Image Texture of your PNG to the Principled BSDF's Base Color.
6. **Reuse one picture:** where you can, put several objects' colours in one picture (an atlas), as the document recommends.

### 5. Export and check
1. Use File → Export → glTF 2.0 with these settings:
   - Format: glTF Binary (.glb);
   - +Y Up: on;
   - Apply Modifiers: on;
   - Animation: off.
2. Save it in `tessera-m1\models` under the exact file name. The open game reloads by itself.
3. Check the menu panel. It names any file it couldn't read, and any piece it left out and why.
4. Walk round the model in the game next to the game's own objects, and compare size, front and joints.

---

**Q1. Should I add model files for the Pruning Knife Forge, in pieces like the character?** The pieces would be `base` (its flagstone), `body` (with the chimney), `cog-1` to `cog-3`, `wheel`, `gem` and `stems`. I'd also make a reference file of the game's own forge for you to model over. I recommend yes. Before building, I'd show you how each piece moves, as your rule for game changes asks.

---

### Dani · 2026-11-20 19:39

no   you need a better list. for example, polygons are not triabgles by default

---

### Claude · 2026-11-20 19:40

Your "no" was about the list, so the forge question (Q1) is still open. You're right: Blender builds models from polygons, which can have 3, 4 or more sides, while the game draws only triangles. A better list has to start from that. Here it is, checked against your Blender 5.2 and against what the game keeps from a file.

## Remodelling an object for the trial

### 1. Words used below
- **Face (polygon):** one flat side of a model. In Blender it can have 3 sides (a triangle), 4 (a quad) or more (an n-gon).
- **Triangle:** the only shape the game draws. On export, each face is split into triangles: a quad into 2, and a face with n sides into n − 2. For example, an 8-sided cap becomes 6 triangles.
- **Origin:** the orange dot of an object. The game places and turns the object from it.
- **Normal:** the direction a face looks. The game draws only the outside of a face.
- **UV:** the model's surface laid out flat, so a picture can be painted onto it.

### 2. Set up
1. Units: keep metres, Blender's default.
2. Size: the player is 1.4 m tall and a tile is 3.75 m across. To check, import the game's own version (File → Import → glTF 2.0), such as `model-references/character.glb`.
3. Standing: the bottom sits at height 0 and the middle at the world's middle.
4. Facing: the front faces the Front view (Numpad 1).

### 3. Polygons and triangles
1. **Count triangles, not faces.** Turn on Overlays → Statistics and read the Triangles line. Faces undercount: 100 quads are 200 triangles.
2. **Model in quads.** They split evenly and shade well.
3. **Use n-gons only on flat faces,** such as a cap or a flat bottom. On a curved surface they split into long thin triangles that shade badly.
4. **Read the count in Object Mode.** It includes modifiers such as Mirror, Array or Bevel, which the export applies.
5. **Starting budgets, in triangles:**
   - an object that stands many times (a rock, a bulb clump): 100–500;
   - a machine, the character or a wayfinder: up to about 3,000.

   DOCS/19 says not to fix firm budgets before measuring a real scene, so treat these as a starting point. I can measure your model in the game.
6. **To lower the count:**
   - use fewer segments on round parts (section 4);
   - delete faces that never show, such as a bottom on the ground or faces hidden inside another part;
   - try a Decimate modifier, Planar for flat areas.
7. **Join parts that never move apart** into one object with one material (Ctrl+J). Every separate object, or every extra material, is one more drawing for each copy on the map.

### 4. Round objects
1. **The outline and the shading are separate.** Shading can look round with few faces; only the outline shows corners.
2. **Sides round, by size** (at the game's default camera, 9 m away):
   - under 0.3 m across: 8;
   - 0.3–1 m: 12–16;
   - over 1 m: 16–24.
3. **Spheres:**
   - Ico Sphere, 2 subdivisions: 80 triangles, for small balls;
   - Ico Sphere, 3 subdivisions: 320 triangles, for large ones;
   - Blender's default UV Sphere is 960 triangles: lower its segments and rings, or use an Ico Sphere.
4. **Smooth shading:** Object → Shade Auto Smooth, at about 30°. Curves turn smooth and sharp edges stay sharp.
5. **Soft edges on hard objects** (a cog, the forge's stone): add a Bevel modifier with 1–2 segments, then a Weighted Normal modifier with Keep Sharp on. The object looks rounded and solid at a low count.
6. **Avoid Subdivision Surface.** Each level is 4 times the triangles.

### 5. The painterly look (DOCS/18, Visual direction)
The documents choose "simple geometry + UVs + hand-painted colour/value textures + extremely simple controlled lighting". The look comes from your painting, not from Blender's shaders. The game keeps only these:
- each material's Base Color, and the picture plugged into it;
- vertex colours;
- whether a face shows from both sides.

It drops shader node setups, roughness, metal, normal maps, glow and transparency.

1. **Unwrap:** in Edit Mode, select all, then U → Smart UV Project, with a small Island Margin so colours don't bleed between pieces.
2. **Picture size:** 512 × 512 for a rock or a plant, 1024 × 1024 for a machine. At the closest zoom, the screen shows about 300 pixels per metre, so more detail is never seen.
3. **Paint over the layout:** UV → Export UV Layout, then paint in your own painting app with broad colour and value shapes, soft irregular edges and a few strong accents.
4. **Paint the light softly in:** lighter on top, darker underneath. The game lights the model too, so painted shadows that are too dark come out twice as dark.
5. **Load it:** in the Shading tab, connect an Image Texture with your painting to the Principled BSDF's Base Color. Leave the rest of the node at its defaults.
6. **One picture for the whole model** where you can. The documents advise reusing pictures and palettes.
7. **Backface Culling on** (Material → Settings) for solid objects. Turn it off only for thin single sheets, such as a leaf or a petal, which then show from both sides.

### 6. Names and origins
1. **File name:** exactly as the README's "Models from files" lists it, for example `puffball-tree.glb`.
2. **Piece names:** rename in the Outliner, for example `form-1` to `form-4` for a harvestable, or `cog` and `wing` for the wayfinder.
3. **Origin at the joint:** in Edit Mode, select the joint's vertices, press Shift+S → Cursor to Selected, then use Object → Set Origin → Origin to 3D Cursor.
4. **Apply rotation and scale only:** Ctrl+A → Rotation & Scale. Don't use All Transforms, because it moves every origin to the world's middle.

### 7. Check before exporting

| Check | Rule | How |
|---|---|---|
| Size | right height and width | N panel → Item → Dimensions |
| Scale and rotation | scale 1, rotation 0 | N panel → Item |
| Facing | front to the Front view | Numpad 1 |
| Inside-out faces | no red anywhere | Overlays → Face Orientation; fix with Shift+N in Edit Mode |
| Doubled vertices | none (they cause shading seams) | Edit Mode → M → By Distance |
| Triangles | within budget | Overlays → Statistics, in Object Mode |
| UVs | not overlapping, not stretched | UV Editor |
| Materials | one, Base Color only | Material tab |
| Names and origins | exact, origins at joints | Outliner; the orange dots |

### 8. Export and test
1. File → Export → glTF 2.0, with these settings:
   - Format: glTF Binary (.glb);
   - +Y Up: on;
   - Apply Modifiers: on;
   - Animation: off.
2. Save it in `tessera-m1\models`. The open game reloads by itself.
3. Check the menu panel. It names any file it couldn't read, and any piece it left out and why.
4. Walk round the model in the game beside the game's own objects.
5. Tell me, and I'll measure its triangles and drawings on your map.

If a menu name differs in your Blender 5.2, tell me which step.

---

### Dani · 2026-11-20 19:43

so basically i'll just normally model using polygons with 4 points and the game splits into triangles?

---

### Claude · 2026-11-20 19:43

Yes. Model with 4-sided faces as usual. Blender splits every face into triangles when it exports the file, and the game draws those triangles. You never see or touch them.

Three things follow from that:
- **Count double.** 500 quads become 1,000 triangles, so read the Triangles line in Statistics, not Faces.
- **Triangles are fine where a shape needs them,** such as the tip of a cone or the top of a sphere.
- **Faces with more than 4 sides only on flat surfaces.** On a curve, the split comes out uneven and the shading shows streaks.

---

### Dani · 2026-11-20 19:43

you complicate things. why do i need to count the number though

---

### Claude · 2026-11-20 19:44

You don't, really. The count only matters for one reason: phones can draw only so many triangles each moment. If a model is too heavy and stands many times on the map, the game stutters on a phone.

Rocks are an example: your map has 66. A rock of 250 triangles costs about 16,500 for all of them, which is fine. A rock of 5,000 triangles would cost 330,000, which a phone may struggle with.

So skip counting. Model as you normally would, and put the file in the models folder. I'll measure it in the game and tell you if anything is too heavy and where to cut.

---

### Dani · 2026-11-20 19:44

how many triangles is considered too many on an object

---

### Claude · 2026-11-20 19:45

It depends on how many copies stand on the map, because the phone pays for all of them together. As a rough guide:

| Object | Fine | Too many |
|---|---|---|
| Stands many times (rocks, bulbs, trees) | up to about 500 | over about 1,000 |
| Stands once or a few times (a machine, the character, a wayfinder) | up to about 3,000 | over about 10,000 |

These are starting points, not firm limits. The documents say to set real limits only after measuring the game on a phone, which hasn't been done yet.

---

### Dani · 2026-11-20 19:46

so the more an object is used the better to have less polys. which objects make the list of used a lot

---

### Claude · 2026-11-20 19:46

On your map now, counted this evening:

**Used a lot, so keep them light:**
- flower bulb clumps: 69
- porous rocks: 66
- arching flowers: 16, at 13,240 triangles each, which already makes them the heaviest thing on your map

**Used a few times:**
- giant flowers: 8
- coal seams: 4
- puffball trees, ladder vine clumps and low walls: 3 each
- mushroom-cap trees, walls and wayfinders: 2 each
- the character and the slope: 1 each
- cone trees and pod stalks: none placed

Your map is a test map, so these numbers will change. My recommendation: treat every harvestable and every flower as "used a lot". A finished island will have far more of them to gather than it has machines or characters.

---

### Dani · 2026-11-20 20:04

transition of clouds needs to be smoother when new tiles arrise in their place. maybe let them fade out

---

### Claude · 2026-11-20 20:05

Clouds are flat painted discs, and the ones a new tile replaces simply vanish when the clouds are placed again. I'm checking when that happens relative to the tile's rise.

Now the per-frame part, where the fading puffs are drawn:

The numbers show the fade working: about 80 puffs stay whole until their tiles start rising, at times spread across the wave, then fade to nothing. Checking the pictures:

The hidden browser is too slow to catch the fade in the middle, so the copy now uses an 8-second fade to see it partway:

In the middle of the slow rise (1.2 s in), the puffs beside the rising tiles are partly faded, and they're gone once the tiles arrive. Nothing pops anymore. Now the README, tests and version:

Another map import of yours arrived at 19:41. Checking what it and key.js hold before committing:

Clouds now fade out when tiles rise in their place (v0.597.0, pushed at 20:14). All 251 tests pass, and your running trial loads it.

**Why it felt rough:** the clouds were redrawn the moment a waypoint, lantern or machine started its wave. The puffs over the coming tiles vanished at once and left holes in the clouds before the tiles got there.

**Now:** each of those puffs stays whole until the tile under it starts to rise. Then it fades out over 0.7 s, the time a tile takes to rise, while the tile comes up through it. Puffs beside a rising tile, at its corners, fade the same way. After a reload or Start over they still go at once, because those tiles are already standing.

**Tested on a copy:** I raised 12 waiting tiles next to the clouds. About 80 puffs stayed whole until their own tile's turn in the wave, then faded out. On a slowed-down run I could see the puffs beside the rising tiles partway faded, and gone once the tiles arrived. The fade can't cause a stall, because the game prepares its look in advance.

**Also in this version:** your map import from M1 testing at 19:41.

The fade time is a number in `src/key.js`, not a slider. If you want a slider, tell me and I'll propose its name.

---

### Dani · 2026-11-20 20:27

it's still not smooth. i attached these two images. the wide one 1271px shows before tiles are unlocked, and the other 869px shows just before the newly unlocked tiles are about to rise

Dani's picture 003

Dani's picture 004

---

### Claude · 2026-11-20 20:27

Your two pictures show two problems. Some puffs vanish completely, leaving dark holes. Others turn see-through before any tile has started rising, and their round edges show through each other. I'm reading how a waypoint's wave times its tiles, to see why.

Timing and depth are fixed. Now the back-to-front drawing order for the fading puffs:

Now testing on the copy. First with the real speeds, to count whether any puff still vanishes at once:

Your spot now: 137 puffs before, then 116 kept + 21 fading, so none vanish at once. Each starts fading 0.4–0.65 s after the raise, as the wave reaches it. The pictures:

The rule is that numbers go in `src/key.js`, so I'm moving the shrink there:

Checking the shrink on the slowed copy, at the same moment as the grey-disc picture:

---

### Dani · 2026-11-20 20:36

(sent while Claude was working) is it possible to fix this issue. dry giant flowers in the water shouldn't have a visible water tile until revival tile wave reaches it

(sent while Claude was working) after this tr and close the conversation please

---

### Claude · 2026-11-20 20:38

Another map import of yours (20:20) goes in with it:

v0.598.0 is pushed. Now the dry giant flowers in the water. I'm reading how a flower's water tile is shown.

The plan holds. Writing the change in one go, so your open trial never loads it half-done:

v0.599.0 is pushed. Checking that your trial loads it, then on to Tessera Records and closing up.

Before I propose the Tessera Records entries, I'm checking what the documents already say about hits, forms and rocks paling.

I fixed the clouds again (v0.598.0) and the dry giant flower's water tile (v0.599.0). Both are pushed (20:38 and 20:44), all 251 tests pass, and your running trial loads both.

**Clouds (v0.598.0).** Your two pictures showed three faults in v0.597.0:
- Puffs beyond the new tiles, and under the island's old edge, still vanished at once. That made the dark holes.
- The fading puffs didn't record how far away they were, so the Blur treated them as distant and smeared them. They also overlapped in the wrong order.
- The fade could start before the tiles showed above the void.

Now every puff that goes waits until the rising tiles reach it, then fades out over 0.7 s and shrinks a little. The clouds open outward with the wave. I reproduced your waypoint on 19,-2 with your map: of 137 puffs, 116 stay and 21 fade, and none vanish at once. Your map import of 20:20 went in with this version.

**Dry giant flower in the water (v0.599.0).** The dry flower now stands from the start, or rises with its waypoint, while its water tile waits in the void. When the revival wave reaches the tile, it rises green with its water, and the flower regrows. Tested on your flower on 1,-14. Until revival, its tile is an open gap in the pond, with the pond's light-blue sides showing round it. Tell me if you'd rather that look differently.

---

## Tessera Records

**1. New decision** (M1 M2 M3, Game › Gathering, resources and refining). It replaces "Each drop has an average per hit" of 3 November.
> **A harvestable gives a set total of each drop.** Each harvestable gives a set total of each of its drops, with its tool at its own level, shared out among the hits that burst out drops. A tool levels higher gives more in all, in fewer hits.
>
> *Why:* a better tool uses up a harvestable in fewer hits, which feels more satisfying on top of a bigger yield. With an amount per hit, fewer hits would give less in all.

**2. Gather a resource (version 28):**
- "Each drop has an average per hit, and each hit drops a whole number at random round it." becomes:
  > Each drop has a total for the whole harvestable, with the tool at its own level, shared out among its hits.
- The three table rows "… per hit, on average" (2, 1, 1) become one row:
  > Drops in all, at the tool's own level | set for each harvestable (in the trial, from 6 to 72)
- "A porous rock turns lighter with each hit; once depleted, it vanishes like the plants and leaves its bottom stone layer" becomes:
  > A porous rock loses its top layer at each new look, as wide as before; once depleted, it leaves its bottom stone layer
- "At most 4 looks" and the hits depending on both levels stay as they are, as you said.

**3. New open question** (M1 M2 M3, Game › Gathering, resources and refining):
> Does a harvestable burst out its drops at every hit, or only when it changes look?

Both are in the trial to try ("every hit / every form" under Tuning, Shatter).

**4. Giant flower (version 11).** This sentence goes into *In the water*:
> While it is dried, it stands over the void as one in the void does: its tile and its water wait in the void until the revival wave reaches the tile, then rise, green.

**5. Walk on clouds (version 9).** "Where a floating object raises unhappy tiles among the clouds, the clouds there go, and come back round them once they turn green." becomes:
> Where a floating object raises unhappy tiles among the clouds, the clouds there stay until the rising tiles reach them, then fade out, opening outward with the wave; they come back round the tiles once they turn green.

**No record for these:**
- the character and wayfinder model pieces, and the naming of harvestable model forms (models from files are a trial tool);
- the Number of hits values (tuning);
- the modelling guidance.

**Q1.** Is the set total a decision, rather than only a feature change? I recommend a decision: it replaces the decision of 3 November.

**Q2.** Should the open question in item 3 go in? I recommend yes, so the choice between every hit and every form isn't lost.

Once you answer, I'll do the rest at once:
- enter the records;
- update the handover;
- save the session text and picture book;
- commit and push.

---

### Dani · 2026-11-20 21:03

where can i find the object folder for models to import to blender

"A porous rock turns lighter with each hit; once depleted, it vanishes like the plants and leaves its bottom stone layer" becomes:
remove this one. they will still lose color just in a different way

look
don't use this term. call it "form". also each form is a layer less

e reaches the tile, then rise, green.
water not green

q1 feature change
q2 no sincee it's already established that it will be decided. so we'll update the feature when it's decided

---

### Claude · 2026-11-20 21:04

The reference files are in `Tessera\repositories\tessera-m1\model-references\`: `character.glb` and `wayfinder.glb`. That's the only folder of game objects for Blender so far. Your own finished models go in `tessera-m1\models`.

Entering the records with your changes now. First I'm checking how the API saves a feature, and where "look" appears in Gather a resource.

Now the full text of the three features, so I can place each change exactly:

The API records the change type itself, so I only send the new text. Saving all three in one go:

---

### Dani · 2026-11-20 21:05

(sent while Claude was working) sorry correction. i meant don't add this
A porous rock loses its top layer at each new look, as wide as before; once depleted, it leaves its bottom stone layer

and keep the old version

---

### Claude · 2026-11-20 21:05

Writing the handover in this project's CLAUDE.md: a new entry at the top of Status, and updates to Waiting for Dani, Tessera Records, Bring in, The map and Next.

Three more map imports of yours arrived (20:48, 20:51 and 20:57). I'm saving them as v0.599.1 and updating the handover's map line:

Now the session text, with a closing note and a prompt for the next session:

Everything is entered and saved, and the session is closed.

**Tessera Records**, as you answered:
- **Gather a resource (version 28):** each drop is now a total for the whole harvestable, shared out among its hits. "Looks" are now "forms", at most 4, each a layer less than the one before. The three per-hit table rows are now one row, "drops in all".
- **The porous rock sentence is unchanged:** it still says "turns lighter with each hit". I never added the new one.
- **Giant flower (version 11):** while it's dried, its tile and its water wait in the void until the revival wave reaches the tile, then rise. It doesn't say green.
- **Walk on clouds (version 9):** the clouds stay until the rising tiles reach them, then fade out, opening outward with the wave.
- **The printed documents** changed with them (Gather a resource is printed), and they're committed and pushed.
- **One thing to know:** since the totals went in as a feature change, the decision of 3 November, "Each drop has an average per hit", still stands even though the feature now differs. Decisions are never edited.

**Your three newest map imports** (20:48, 20:51 and 20:57) are saved as v0.599.1. The waypoint on 5,-14 now also raises 1,-14, the giant flower in the water. With v0.599.0, that waypoint brings up the dry flower, and its water tile waits until a revival wave reaches it.

**Closing up:**
- The handover is updated in the M1 trial's CLAUDE.md.
- The session text, with your 2 pictures and the 2 I showed you, is saved and pushed to claude-logs.
- The pictures are printed to a PDF, which waits in the Bring in file for your button.

**Still open:** model files for the Pruning Knife Forge in pieces, so you can remodel it. It's in the handover for next time.

---

### Dani · 2026-11-20 21:10

you can add in the appropriate gdd documents how the models were made from js code to files then files imported to blender. or in timeline maybe. 
no need for the pruning forge yet

---

### Claude · 2026-11-20 21:11

I'm checking what Tessera Records has for a timeline, and where the documents describe how art is produced, so I can recommend one place.

---

### Dani · 2026-11-20 21:11

(sent while Claude was working) oh and 8 hours today, 4 yestday

---

### Claude · 2026-11-20 21:11

The file's format is clear. Next, the timeline's table and fields as the Bring in page accepts them:

Checking the file the way the Bring in page will, without saving anything:

All fields match their tables. Now the handover: the forge question is off the list, and the hours and timeline event are noted as waiting in the Bring in file.

Saving the session text again so it holds these last messages, with the closing note updated:

---

Closing note (20 November 2026, about 21:30): v0.594.1 to v0.599.1 are in the trial (harvestables in 4 forms with the Number of hits, drops in all and the Shatter settings; character and wayfinder models in pieces, with the reference files in tessera-m1/model-references; clouds giving way to rising tiles; a dry giant flower's water tile waiting for the revival wave; Dani's map imports up to 20:57). Tessera Records has Gather a resource 28, Giant flower 11 and Walk on clouds 9 (Tessera DOCS 1714d7c); the porous rock's sentence stays as it was. The Bring in file holds 4 hours on 19 November, 8 on 20 November, the timeline event on the reference models (code to files to Blender) and this session's pictures, beside the older ones, for Dani's button. No models for the Pruning Knife Forge yet (Dani). The handover is the Status in tessera-m1/CLAUDE.md. Prompt for the next session: Continue the M1 trial in Tessera/repositories/tessera-m1 and read its CLAUDE.md Status (20 November). Ask Dani how the forms, the Number of hits and the Shatter settings play (v0.595.0), and whether she wants every hit or every form, then update Gather a resource; and how the clouds giving way (v0.598.0) and the dry flower in the water (v0.599.0) look. When she sends a model, measure its triangles in the game for her. v0.600.0 is free.
