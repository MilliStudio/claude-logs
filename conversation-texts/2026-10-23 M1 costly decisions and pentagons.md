# M1: costly decisions and the pentagons

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Private: never commit or share.

---

### Dani · 2026-10-23 20:46

in the last m1 session i wanted to go over necessary things that need to be decided early on to avoid having to build things over if we have to change them. like costly changes. the first one was flat vs round map. 
now it's a round world, what do we need to put into consideration before we go forward to avoid costly do overs

---

### Claude · 2026-10-23 20:46

I'll check what the last session and the code already settle before I answer.

The flat-versus-round and tile-size questions are closed. The 22 October session named four costly decisions. Round settles the fourth, world shape. Three of the four are still open, and the round world adds more.

## Still open from 22 October

1. **Saving progress.** M1 doesn't save anything yet. Each feature (gathered items, restored objects, unlocked tiles, timers) has to say what it saves. This costs the most if added late.
   - **Recommendation:** decide now that M1 saves progress. Keep all progress as plain data in one place, keyed by tile number, so saving later is a single step.
2. **Phone or computer.** The docs say phone-first, but only the controls are built for it. Performance is untested.
   - **Recommendation:** test the round world on a real phone before building more. At size 12 the planet has 1,442 tiles. If a phone struggles, it's better to know before more art and content exist.
3. **One ground level per tile.** There is no walking under bridges or through tunnels. On a ball this is still true: "down" is toward the centre, and each tile has one height.
   - **Recommendation:** keep it. Pipes and passages that teleport cover what the docs list.

## New, because the world is round

4. **The 12 pentagons fix where islands can go.** They sit in fixed places on the ball. Every island, and later every real-world area, has to fit between them. If this isn't planned, a finished island can end up on a pentagon.
   - **Recommendation:** decide the whole world's layout now, as a plan with the 12 pentagons marked. Don't place islands one by one.
5. **Planet size is locked once real maps are painted.** The map picture (ten diamonds of size × size) depends on it. You've already settled 12 and 3.75 m tiles for now.
   - **Recommendation:** treat 12 as final for M1, and say so. Decide whether the whole game is one planet or several. That decides whether size can ever differ per map.
6. **How maps are painted.** Mattias's pixel method works, but the planet unfolds into ten diamonds, and an island that crosses a seam is hard to paint.
   - **Recommendation:** build a small tool that shows the painted map on the planet as you paint, or keeps islands away from seams. Painting blind in Photoshop will go wrong.
7. **Tile numbers must never change.** Saved progress, Tessera Records and later real-world links all point at tiles. If the numbering changes with a rebuild, everything breaks.
   - **Recommendation:** fix a numbering scheme now and write it down.
8. **Tile art has to fit round-world tiles.** Tiles near pentagons are smaller. Tiles also turn away from north across the planet (5° on average at the island, up to 29° at the far island at size 7). Edge pieces and tile-filling art can't assume every tile is a straight, same-size hexagon.
   - **Recommendation:** before any M2 art, decide whether tiles are generated from a few pieces or drawn one by one. Decide how art handles the 12 pentagons.
9. **Rules in tiles, not metres.** Hop reach, the small jump and similar rules are in metres. The tile width is the island's average, so rules in metres drift at tile size changes and near pentagons.
   - **Recommendation:** where a rule is really about tiles, write it in tiles. Keep metres for the player's body (height, hop height).
10. **The real-world layer.** You said it must be addable later. A ball maps naturally to the Earth, but only if tiles have a fixed place on the sphere. That follows from item 7, so no extra work now beyond keeping the numbering stable.

## What I'd do first

Items 1, 4 and 7 first. They shape everything else and are cheap now. Item 2, the phone test, is quick and could change the others.

**Q1.** Should I list items 1–10 as open questions and decisions, ready for you to confirm? Then I'd put them in Tessera Records through the Bring in page. I recommend yes, so they don't get lost between sessions.

---

### Dani · 2026-10-23 20:49

<command-name>/model</command-name>
            <command-message>model</command-message>
            <command-args>default</command-args>

<local-command-stdout>Set model to `claude-opus-5-5`</local-command-stdout>

we'll go back to the rest of the questions after you finish q1, so go ahead on q1. 
savings, yes for sure. 

The 12 pentagons fix where islands can go
i don't understand the issue. didn't we agree that they can be placed wherever and just not put stuff on them? can a tile not be there? explain pls

 Tessera Records and later real-world links all point at tiles.
why are links and tr relevant to the game?

---

### Claude · 2026-10-23 20:53

I'm checking which open questions and decisions Tessera Records already has, so the list doesn't repeat any.

Checking one more thing in the 22 October log: what you answered about walking under things.

## The pentagons: you're right, I overstated it

On 22 October we agreed the 12 pentagons are plain ground. You can walk on them, but nothing is ever placed on them. A pentagon could also be void instead. That option came up, and you chose plain ground. Either way, a pentagon blocks nothing.

The only fixed thing is the spacing. The pentagons always sit 12 tiles apart, about 45 m. Turning the planet moves all 12 together.

The one real effect is on the tiles right around a pentagon. Those tiles are smaller and turned away from north.
- **Example:** a crate's steps depend on tiles lined up with north. Next to a pentagon, its steps wouldn't land on tile middles.
- **Example:** a straight ruin wall built there would look crooked.

So puzzles and buildings should stay a couple of tiles away from pentagons. This is a rule for painting maps, not a costly decision. The pentagons sit at the corners of the painted diamonds, so you can see them while you paint. I'm taking this item off the costly list.

## Tessera Records and the real-world layer: I was wrong there too

- **Tessera Records** isn't part of the game. It didn't belong on the list.
- **The real-world layer** turns steps and focus time into in-game currency (DOCS/33a). It has nothing to do with real places, so it doesn't care how tiles are numbered. I'm withdrawing item 10.
- **What's left is saving.** For example, a save says "tile 1,203 is restored." If a later version numbered the tiles differently, that save would restore the wrong tile. The fix is to number the tiles the same way every time. That's a technical job, and I'll handle it as part of building saving. You don't need to decide anything.

## One more correction: walking under things

On 22 October you said yes to two floors: leave room in the map format now, and build it later. In my last message I recommended one ground level per tile. That contradicted your answer, so your answer stands.

## Q1: the records to enter

While checking, I found that your round-world decisions from 20 and 22 October never reached Tessera Records. Only the scale decision did. So they're on the list too.

**Decisions (all yours):**
1. **2026-10-20:** Every tile in the game is a hexagon ("hex tiles for sure").
2. **2026-10-22:** The world is a round planet of hexagon tiles, with the 12 pentagons a ball needs. This answers the open question "World curvature/presentation."
3. **2026-10-22:** A map is one planet. It starts as void, except the portal's tile and the six tiles around it. Everything else appears as it is restored.
4. **2026-10-22:** The 12 pentagons are plain ground. The player can walk on them, but nothing is ever placed on one. If a map paints something on a pentagon, the game leaves it out and warns you.
5. **2026-10-22:** Leave room for places with two floors, where the player can stand on something they can also walk under. Build it later.
6. **2026-10-23:** M1 remembers progress after the player closes the browser. This answers "Does M1 remember progress after the player closes the browser? Dani thinks so." It fits the decision of 11 September that progress uses a local save file.

**New open questions:**

7. Is planet size 12 final for M1?
8. Does the whole game happen on one planet, or does each map have its own?
9. How do you paint a planet's map: in Photoshop on the unfolded diamonds, or in a tool that shows the map on the planet while you paint?
10. How far from a pentagon must puzzles and buildings stay?
11. For M2: how does tile art handle the smaller, turned tiles around pentagons? Is it built from a few pieces, or drawn tile by tile?

The phone-or-computer question is already in Records, and it stays open.

Say yes and I'll enter all 11. Then we'll go back to the other questions.

---

### Dani · 2026-10-23 21:09

7 yes
8 each level is a planet. m1 will just be one planet
9 i don't have the knowledge for that yet. what do i need to study for this? and which tech matches the paintery style in the visual direction?
10 this is hard for me an ansswer. is there any way you can build a diagram or simple visual example to explain what and why?
11 that's jousef's thing to figure out. m2 will be built from scratch, and m1 is made to demonstate what we agreed on in the last email 

for the phone, it has to be phone. would i still be abbble to test on pc browser though?

---

### Claude · 2026-10-23 21:10

I'll build the pentagon picture from the real planet's tiles, so it shows what actually happens. First, a look at how the planet code describes its tiles.

Now computing how much tiles turn and shrink, ring by ring around a pentagon, on the real size-12 planet:

Clear result: tiles bend hard next to a pentagon and settle by the third ring. Now I'll draw it. First the page-design guidance:

The figures check out: the pentagons are 12 tiles apart, and the island's middle is 8 rings from the nearest one. One look at the page before I publish it:

The drawings show the bend clearly. One fix: the font's numbers sit low in the table, so I'm switching to upright numbers. Then publishing.

I made the picture for Q10: [Around a Pentagon](https://claude.ai/artifact/C3AZsrJ3xSo6TjwP1UVmg9). It's private, and it's drawn from the trial's real planet.

## 10. How far from a pentagon

The picture puts two patches side by side: the island's middle and the tiles around a pentagon. A short stroke on each tile shows which way its rows run.
- **On the island,** all the strokes point the same way. A row of tiles runs straight, so a crate stays on its row.
- **Beside a pentagon,** the strokes fan out, and the row bends as it passes. A crate moves in a straight line, so its steps stop landing on tile middles. A wall there comes out crooked.
- **How far it reaches:** rings 1 and 2 bend a lot (17° and 8°). From ring 3 on, tiles are close to normal.
- **Something I hadn't seen before:** the pentagon itself is only about a third of a normal tile's area. The README calls it "a little smaller". That's wrong, and I'll fix it.

**My recommendation:** keep crates, walls and buildings off the pentagon and its first two rings. That's 16 tiles around each pentagon, 13% of the planet. Trees, rocks, water and things to gather are fine there. Today's island is 8 rings from the nearest pentagon, so it's clear.

## 9. Painting maps: you don't need to study anything

- **Painting:** in Photoshop, each hexagon becomes a skewed square pixel inside a diamond. An island that crosses a diamond's edge gets split in two. Instead, I'd build a painting mode into the planet page: pick something from the key, then tap tiles on the planet. It saves the same one-pixel-per-tile picture, so Mattias's method stays.
- **The painterly look:** the map only says what stands where. The look comes from the art placed on top. DOCS/18 names the method: simple shapes with hand-painted textures and simple, controlled lighting, without heavy effects added on top. Building that in Unity is Jousef's job in M2. Your part is painting the textures, which is illustration work you already do.

## 11. Pentagon art for M2

Agreed, that's Jousef's to solve. I'd still record it as an open question for him, so he finds it with the M2 notes.

## Phones

Yes, you can keep testing on your computer. The same page runs in a computer browser with keyboard and mouse, and on a phone with touch controls. Since phones are the target, check how it feels and runs on your phone before you settle anything about the look or speed.

## Questions

**Q1.** Should crates, walls and buildings stay off each pentagon and its first two rings? I recommend yes.

**Q2.** Should I build the painting mode into the planet page? I recommend yes. It's about 2 hours.

**Q3.** Should I enter these records? With Q1, the list is final.

Decisions (yours):
1. 2026-10-20: Every tile in the game is a hexagon.
2. 2026-10-22: The world is a round planet of hexagon tiles, with 12 pentagons. This answers "World curvature/presentation."
3. 2026-10-22: A map is one planet. It starts as void, except the portal's tile and the six tiles around it.
4. 2026-10-22: The pentagons are plain ground. You can walk on them, but nothing is placed on them.
5. 2026-10-22: Leave room for places with two floors. Build them later.
6. 2026-10-23: M1 remembers progress after the browser closes. This answers the saving question.
7. 2026-10-23: Planet size 12 is final for M1.
8. 2026-10-23: Each level is a planet. M1 has one planet.
9. 2026-10-23: M1 is played on phones. This answers "Is M1 played on phones, on computers, or both?"
10. 2026-10-23: The pentagon rule from Q1, if you say yes.

Open questions:

11. How are planet maps painted? (This one closes if you say yes to Q2.)
12. For Jousef, M2: how does the tile art handle the pentagons and the smaller, bent tiles around them?

---

### Dani · 2026-10-23 21:20

Agreed, that's Jousef's to solve. I'd still record it as an open question for him, so he finds it with the M2 notes.
yes good thinking

1 i need to see it in practice to evaluate. would it be too difficult to mark though pentagons with the two rings in m1? is it too much work?  if not you can color them, and increase the character's walking speed so i can get there fast

---

### Claude · 2026-10-23 21:20

I'll mark the pentagons' two rings on the planet and add a speed setting, so the tuned walking speed stays as it is. First, where the planet page colours tiles and sets speed:

Fast walking needs care: at 5× speed one frame moves about a metre, so I'll split each move into short pieces. Now the planet build:

Making the changes: the ring count goes in key.js, the colours and speed go in planet.js, and the slider goes in planet.html.

Now the README: the pentagon rings, the Speed slider, and the correction about pentagon size.

All 91 tests pass. Now a look in a real browser: the pink rings around a pentagon, and the speed. Checking how the planet page takes a starting position:

---

### Dani · 2026-10-23 21:23

(sent while Claude was working) ill answer the rest of the qs
q2 what painting mode?
q3 let's wait until we resolve the pentagons
11 and 12, same as q3

---

### Claude · 2026-10-23 21:23

The rings show on the planet and on the corner map. Measuring speed again on open ground, in game time:

The speed works exactly: 4.1, 12.2 and 24.2 m per second at 1×, 3× and 6×. Saving it as v0.34.0:

I've coloured the pentagons' rings on the planet and added a Speed setting. It's saved as v0.34.0 and synced to GitHub.

## Try the pentagons

1. Open http://127.0.0.1:4890/planet. If it's already open, it reloads by itself.
2. Press **Restore all**. Otherwise the pentagons sit out in the void.
3. Open **Settings** and move **Speed** up. It goes to 6×, and it starts at 1× each time the page opens.
4. Walk to a pink patch. The nearest one is about 30 m south of the portal. The corner map shows all 12.

Each pentagon is orange, its first ring dark pink and its second ring light pink. Look at how the tile rows curve around the pentagon. That bend is what would throw a crate off its row or make a wall crooked.

In the hidden browser, I checked that:
- each pentagon has 5 tiles in its first ring and 10 in its second;
- speed is exactly 1×, 3× and 6×;
- at 6× you still stop at a wall instead of passing through.

All tests pass.

## Q2: what I mean by painting mode

Right now I draw the island as rows of letters in a code file, so you can't change it yourself.

Mattias's method has you paint a small picture in Photoshop. On a round world, that picture is the planet unfolded into ten diamonds. Two things make it hard to paint:
- **The tiles look skewed.** Each hexagon is one square pixel, but the rows of pixels run slanted to the real rows of tiles. A round pond painted there doesn't come out round on the planet.
- **Islands get split.** An island that crosses a diamond's edge ends up in two places in the picture.

A painting mode would let you paint on the planet itself, inside the game page:
1. Press **Paint**. A row of buttons appears with the colour key: grass, wall, rock, tree, crate, shallow water, deep water, and so on.
2. Pick one and tap tiles. Each tile changes right away. For example, pick deep water, tap three tiles, and you have a pond.
3. Raise or lower ground the same way, by tapping.
4. Press **Save**. It writes the same small one-pixel-per-tile picture, so the method stays Mattias's. You just never have to paint the skewed picture by hand.

This is the "about 2 hours" from my last message. It isn't urgent: it only matters once you want to make islands yourself.

The records wait until the pentagons are settled, as you asked.

---

### Dani · 2026-10-23 21:36

1 so those 12 have to be empty but only those 12 in the entire map?
2 we'll get there when we finish deciding the important things that can't be changed later

---

### Claude · 2026-10-23 21:37

1. Yes. On the whole planet, only those 12 tiles are kept free. Two details:
   - **They aren't holes.** They're plain ground that you walk across like any other tile. Nothing stands on them: no tree, rock, crate or wall.
   - **It's always exactly 12,** at any planet size. On a bigger planet the same 12 just sit farther apart. A ball can't be covered with hexagons alone, so these 12 are the only exceptions.

   The pink rings around them are different. They aren't empty, and they don't have to be. My recommendation is only that crates, walls and buildings stay off them. Trees, rocks, water and things to gather can go there. That's 180 ring tiles out of 1,442. Nothing is decided on the rings until you've tried them in the game.

2. Agreed. Painting can wait.

## What's left on the costly list

Most of it is settled now:
- **Decided:** saving, phones, room for two floors, and planet size 12.
- **I'll handle these myself** when the time comes: a fixed tile numbering for saves, and rules counted in tiles.
- **Jousef's:** the M2 pentagon art.

Two items remain:
- **The pentagon rings:** waiting for you to try them.
- **One tile width for every planet:** you said each level is its own planet, and planets can differ in size. The tile width shouldn't differ, because every piece of M2 ground art is made to fit one tile size. I recommend one width, 3.75 m, for all planets.

**Q1.** Should every planet use the same tile width, 3.75 m? I recommend yes.

---

### Dani · 2026-10-23 21:39

and we can't for example put a small object like a tree?

---

### Claude · 2026-10-23 21:39

Yes, we can. On 22 October you chose "nothing can be placed on them". That was a choice, not a limit of the round world.

What decides it is whether a thing follows the tile's shape:
- **Things that stand in the middle of a tile fit fine:** a tree, a rock, a plant, a thing to gather. A pentagon is smaller, about 2 m across against 3.75 m for a normal tile. The trial's tree crown is 1.4 m wide, so it fits.
- **Things built to the tile's shape don't fit:**
  - Walls are six-sided blocks, so they can't sit on a five-sided tile.
  - Stairs are shaped to their tile in the same way.
  - Crates move in rows of tiles, and a pentagon breaks the row.

It costs nothing extra in art. Each pentagon already needs its own ground piece, and a tree standing on it is the same tree as anywhere else.

One idea from 22 October fits here: a pentagon could hold something special, such as a particular tree, so its odd shape becomes a landmark.

**Q2.** Should trees, rocks, plants and things to gather be allowed on pentagons, with walls, stairs and crates kept off? This changes your 22 October rule. I recommend yes.

**Q1** is still open: should every planet use the same tile width, 3.75 m? I recommend yes.

---

### Dani · 2026-10-23 21:42

q1 yes
q2 good. don't specify the types of objects that can go on them, specify the ones that can't. that's a smaller list. 
you need to add this to tr because it should be noted in tdd that whenever a new planet is designed. where would this go? technical difficulties

---

### Claude · 2026-10-23 21:42

I'll check how the TDD is built in Tessera Records, to find where the pentagon rule belongs.

The TDD can list decision records directly, so the planet rules can sit in it without copying their text. Now the code change for Q2. Here is where things are left off pentagons:

The list of things that can't stand on a pentagon goes in key.js, where you can change it:

Testing at planet size 5, where pentagons fall inside the island, to check what stays and what's left out:

Both work: the wall is left out with the warning, and the tree and the thing to gather stay. Saving as v0.35.0:

Walls, stairs and crates are now the only things kept off pentagons. The list is in key.js, where you can change it. It's saved as v0.35.0 and synced.

I checked it on small planets, where pentagons fall inside the island:
- A wall drawn on a pentagon is left out, and the page shows a warning.
- A tree, a thing to gather, the portal, the dormant object and the monument stay on their pentagons.

All tests pass.

## Where it goes in the TDD

The TDD has no section on technical difficulties, and none on the world's shape or tiles either. I recommend a new section called **Building a planet**, placed just before "30. World assembly". Whoever places objects on a planet reads that part, so the rules would be in front of them at the right moment. They are rules to follow rather than problems, which is why I'd use that name rather than "technical difficulties".

The section would start with one line:

> Each level is one planet. Check these rules whenever a new planet is designed.

Below it, Tessera Records would list decisions 2–7 and open question 11 from the list below, straight from their records. The text stays written once, and the TDD updates whenever a record changes.

## The records

**Decisions (all yours):**
1. **2026-10-20:** Every tile in the game is a hexagon.
2. **2026-10-22:** The world is a round planet of hexagon tiles. A ball can't be covered with hexagons alone, so every planet has exactly 12 pentagons, at any size. This answers "World curvature/presentation."
3. **2026-10-22:** A planet starts as void, except the portal's tile and the six tiles around it.
4. **2026-10-23:** Each level is a planet. M1 has one planet.
5. **2026-10-23:** Every planet uses the same tile width, 3.75 m. Why: all ground art is made to fit one tile size.
6. **2026-10-23:** M1's planet is size 12 (1,442 tiles). This is final for M1.
7. **2026-10-23:** A pentagon is plain ground. Walls, stairs and crates can't stand on it; anything else can. Why: walls and stairs are built to a six-sided tile's shape, and crates move along rows of tiles, which a pentagon breaks. This replaces your 22 October rule that nothing stands on a pentagon.
8. **2026-10-22:** Leave room for places with two floors. Build them later.
9. **2026-10-23:** M1 remembers progress after the browser closes. This answers the saving question.
10. **2026-10-23:** M1 is played on phones. This answers "Is M1 played on phones, on computers, or both?"

**Open questions:**

11. Must crates, walls and buildings also stay off each pentagon's first two rings? (This waits for you to try them.)
12. How are planet maps painted?
13. For Jousef, M2: how does the tile art handle the pentagons and the smaller, bent tiles around them?

**Q1.** Should I add the "Building a planet" section to the TDD, just before "30. World assembly"? I recommend yes.

**Q2.** Should I enter all 13 records now, with the rings kept as an open question until you've tried them? I recommend yes. Otherwise they wait until the rings are settled, as you said earlier.

---

### Dani · 2026-10-23 21:48

open question 11, this q is outdated since we decided only specific i tems can't go there

---

### Claude · 2026-10-23 21:48

Not quite. Decision 7 covers only the 12 orange pentagons. Question 11 is about the pink tiles around them, which are a different set: 180 normal six-sided tiles, bent toward the pentagon.

For example, a crate could stand on a pink tile under decision 7, because a pink tile isn't a pentagon. But a crate pushed across pink tiles drifts off its row, because the rows bend there. That's what you wanted to try in the game before deciding.

To match the way you phrased decision 7, I'd write it as a short list of what's kept out:

11. Must walls, stairs and crates also stay off each pentagon's first two rings?

If you'd rather decide now without trying it, I recommend yes: then the pentagon and its rings follow one rule.

---

### Dani · 2026-10-23 21:48

q 1 and 2 yes

---

### Claude · 2026-10-23 21:48

Entering the records and adding the TDD section. First, the format the design part expects. I'll copy the fields from the scale decision of 22 October, which is the same kind of record:

Now how the server takes new records and edits:

Creating a record and editing one are separate calls. Documents list decisions by their text only, as docs 10 and 13 already do. Now the topics, so each record files under the right one:

Before writing, a check of how the TDD's open-questions list is built. I need to know whether answered questions leave it, and whether question 11 would show up twice:

An answered question still prints in the TDD's "not yet locked" list, so the phone and saving questions would look open there. Checking which documents list the three questions being answered:

---

### Dani · 2026-10-23 21:50

(sent while Claude was working) there isn't a create there to push. so put it as a question to jousef in the tdd yes

---

### Claude · 2026-10-23 21:50

All entered. Checking how the printed files came out in the Tessera repository:

All three files are right. DOCS/43 also picked up the M1 list, because it includes that list. Committing the printed files in the Tessera repository:

I've entered all 13 records in Tessera Records and added the new section to the TDD. The printed files are committed and synced to GitHub.

**In Tessera Records:**
- The 10 decisions are dated as you made them, each with its reason.
- The 3 new open questions: the rings and Jousef's tile art are both marked for Jousef, and painting is left open.
- Three old questions are now marked as answered by the new decisions: world curvature, phones and saving.

**In the TDD:**
- **Building a planet** sits just before "30. World assembly". It opens with "Check these rules whenever a new planet is designed." Six rules follow: the round planet and its 12 pentagons, the void start, one planet per level, the 3.75 m tile width, size 12 for M1, and what can't stand on a pentagon. The TDD reads them straight from the records, so a changed decision updates the TDD by itself.
- The rings question is in the TDD's open list as "For Jousef: must walls, stairs and crates also stay off each pentagon's first two rings?", with one sentence on why. The TDD prints only the question text, so the "For Jousef:" start is what shows him it's his.

**Things I changed that you didn't ask for directly:**
- The answered questions still printed in the "not yet locked" lists, so I took them out:
  - phones and saving from the TDD's M1 list;
  - world curvature from DOCS/34 and DOCS/43.
- Jousef's tile-art question went into DOCS/34, "M2 decisions still needed", where he'll find it with the M2 notes.

That closes the costly-decisions list, except painting, which you put off until later.

---

### Dani · 2026-10-23 21:52

prompt for next conversation please

---

### Claude · 2026-10-23 21:53

Wrapping up: I'll save the conversation text, update the M1 status, and write the prompt. First, how the conversation-text script is used:

Updating the M1 status in its handover file:

---

Dani ended the session here (23 October 2026, about 21:55). Done in this session:
- The costly early decisions for the round world are made and recorded in Tessera Records (10 decisions, 3 open questions). The phone, saving and world-curvature questions are answered.
- The TDD has a new section, "Building a planet", before "30. World assembly". It lists the planet rules straight from the decision records.
- M1 trial v0.34.0: the pentagons' first two rings are pink, and a Speed setting (up to 6×) helps with testing. v0.35.0: only walls, stairs and crates are kept off pentagons (`DEMO_NOT_ON_PENTAGON` in `src/key.js`).
- Corrections made in this session: the real-world layer is steps and focus time, not real places; Tessera Records has nothing to do with the game; and Dani's 22 October answer was yes to room for two floors.
- Picture explaining the pentagons' rings: https://claude.ai/artifact/C3AZsrJ3xSo6TjwP1UVmg9 (private).

## Prompt for the next session

> Task: the M1 trial (`Dropbox\Studio\Tessera\repositories\tessera-m1`, page /planet), v0.35.0, synced.
>
> The costly early decisions for the round world are done and recorded (23 October). Don't reopen them. The planet rules are in the TDD's "Building a planet": a round planet of hexagons with 12 pentagons, the void start, one planet per level, the same 3.75 m tile width on every planet, size 12 for M1, and walls, stairs and crates kept off pentagons. Saving progress and phones are decided. Room for two floors is decided but not built.
>
> Still open: how planet maps are painted. A painting mode on the planet itself is proposed (pick from the colour key, tap tiles, save the same one-pixel-per-tile picture; about 2 hours). Dani wants it only after the important decisions. Two questions wait for Jousef: the pentagons' rings, and the M2 tile art.
>
> Ask Dani what to work on next. Remaining M1 work: saving progress (decided, not built: number tiles the same way every time, so saves stay valid), the kit, the apparatus, and a phone test.
>
> Testing: the hidden-browser scripts are in `C:\Users\someo\AppData\Local\Temp\claude\c--Users-someo-Dropbox-Studio-Tessera-repositories-tessera-m1\d59e1d45-259a-46ca-8077-71be0ba34570\scratchpad\drive`: `node run.mjs <tests…> [shot.png]` runs `harness.js` (helpers in `window.T`), then each test file, in a fresh page. Copy them to your own scratchpad. Walking runs on capped frame time, so measure it with `T.until`, not real time.

---

This conversation's 2 images are in images\2026-10-23 M1 costly decisions and pentagons\. [The list of them](<../images/2026-10-23 M1 costly decisions and pentagons/index.md>) gives each one's time.
