# M1: why the far giant flower looks upright (11–12 November 2026)

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Its images are in images\2026-11-11 M1 why the far giant flower looks upright\, shown or linked where they came. Private: never commit or share.

---

### Dani · 2026-11-11 23:49

i need to ask about the pespective in the game. as you can see in the snapshot, the flower head looks as if it's standing vertically, but it's actually laying flat horizontally as it should be.
the reason is the how the planet is round maybe, but is that something you can control at all?
can you generate an image showing how and why things farther away look the way they do

---

### Claude · 2026-11-11 23:52

Measured: your flower's head is about 50 m up (stem 17.5 × size 2.9), and it stands a quarter of the way round a planet only 32 m in radius. Checking the view from your start tile now.

Your view matches standing on -3,-7 (or a tile beside it): the flower's own ground is 90° round the planet from there, 93 m away. Now drawing the explanation picture to scale.

Writing the picture now: a side view of the planet to scale with your flower, and beside it what the camera sees.

The picture works, but two labels overlap a line and the tile figure should use the tile-to-tile distance (6° a tile, not 7°). Fixing those.

![Claude's image 001](<../images/2026-11-11 M1 why the far giant flower looks upright/001 Claude to Dani.png>)

Yes, it's because the planet is round. The camera can't fix it, but the flower's height and the planet's size can change it.

Your snapshot didn't come through with the message, so I used your newest screenshot (23:47). Your view matches standing on -3,-7 or a tile beside it. I measured the angles there in a hidden browser on the trial and changed nothing.

I've opened the picture in VS Code: C:\Users\someo\AppData\Local\Temp\claude\653749dc61028eb9\4114930c-8b6e-4aa3-b5e4-25a4e7c63485\scratchpad\why the far flower looks upright.png

**Why it looks upright:**
- **The planet is small.** It is 32 m from its middle to the ground. Each tile you cross turns "up" by about 6°.
- **Your flower on 15,0 is 90° round the planet from you**, about 15 tiles away. Its head lies flat on its own ground. But its ground faces a different way from yours, so from where you stand the head is on its edge.
- **Its head is 50 m up** (stem 17.5 m × size 2.9), which is taller than the planet is from its middle. So the head rises over your horizon while its stem stays hidden behind the curve.
- **The camera sees the head's underside almost straight on**, only 18° off. A flower facing you straight on is how an upright flower looks, so it reads as standing.

It's like a pin stuck in an orange: look at it from a quarter of the way round, and the pin points sideways.

**Can it be controlled?**
- **Not with the camera.** To see something that far round, the camera has to look across your ground. On this planet, that is straight along the flower's up. Changing the tilt or the lens moves this by only a few degrees.
- **The flower's height changes it.** From 15 tiles away, any head higher than about 28 m shows over the horizon on its edge. At size 1 (17.5 m), this flower would stay hidden from -3,-7, and you would see it only from closer, where it is tipped less.
- **A bigger planet changes it too.** But it would re-lay your whole map, which is a big change.
- **A trick could bend far things back toward the camera.** I'd advise against it: the planet would look flat, and things would swing as you walk.

**My recommendation:** leave it. This is how a small round world looks, and as you walk toward the flower, its head turns until it lies flat above you. If the upright look bothers you, lower the giant flowers rather than change the camera.

Again: [image 001](<../images/2026-11-11 M1 why the far giant flower looks upright/001 Claude to Dani.png>)

---

### Dani · 2026-11-12 00:02

i guess you're right thanks. can i close this window

---

### Claude · 2026-11-12 00:03

Before you close it, I'll save this session's text and picture and add a line to the handover. One moment.

---

Closed at about 00:05 on 12 November 2026. No change to the game: the far giant flower on 15,0 stands on its edge because it is 90° round the small planet, and Dani agreed to leave it. Handover line in tessera-m1 (267a374). Tessera Records: nothing, as it is an explanation.
