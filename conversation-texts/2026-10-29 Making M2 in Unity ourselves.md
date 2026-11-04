# Making M2 in Unity ourselves (2026-10-29)

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Private: never commit or share.

---

### Dani · 2026-10-29 13:28

how likely is it for us to able to create m2 with unity myself, based on what we've beeen able to produce here?

---

### Claude · 2026-10-29 13:28

I'll check the context first: the latest session notes, the M1 trial and what M2 is.

Now the Tessera file, what M2 is, and the size of what the M1 trial already holds.

The key documents are M2's scope and Jousef's technical reply. Reading those:

Two more checks: the technical baseline, and who the documents say makes M2's 3D art.

**Short answer:** We can very likely build M2's *gameplay* in Unity ourselves. Shipping M2 *as your documents define it*, with no programmer at all, is unlikely to work. It would also turn you into the programmer and production manager you said you don't want to be.

**What the M1 trial proves.** In 10 days (19–28 October) we made 188 versions, about 10,000 lines of working code: a round planet, gathering, refining, restoration, deliveries, a map editor, phone controls and an online copy. Claude writes Unity's language (C#) as well as the trial's. The trial also works as a living spec: for each mechanic it shows what goes in, what happens, and what gets saved. That's the format Jousef asked for (DOCS/27).

**What M2 adds that M1 never tested:**

1. **Unity is mostly worked by hand in its editor.** In M1, everything was text files, and I tested in a hidden browser. In Unity, take a lantern tree: I write its script, but someone still has to drag in the model and set its collision, material and animation by clicking. Most of that clicking would fall on you.
2. **Phones.** Last night's two problems were a small taste: turning the camera on the phone was hard, and the phone couldn't reach the trial over Wi-Fi. I can't see or hold your phone. M2 has to run well on a range of devices.
3. **Step and focus tracking.** Your documents name it the project's biggest technical risk, and it's Jousef's biggest worry. It depends on the phone's permissions behaving as expected, and only testing on real devices shows whether they do.
4. **A public store release.** That means ads with consent screens, purchases, privacy rules and store review. iOS builds need a Mac, and you're on Windows. After release, someone has to keep the game updated, because Google Play requires newer Android versions every year.
5. **Code that has to last.** Most of the trial sits in one 6,286-line file. That's fine for a throwaway prototype, but not for a product you keep updating. You can't judge code quality, and I can't fully judge my own.
6. **Your focus.** DOCS/33b warns that whoever makes M2's art must stay on M2. You're the artist, and you do much of the 3D work. Running the Unity build too is exactly the split focus that document warns about.

Sound, music and character rigging need other people either way (DOCS/38).

**My rough odds** (a judgment, not a measurement):
- M1's mechanics working in Unity on your Android phone: about 85%.
- M2 as defined, public on both stores, with no programmer: about 25–35%.

**My recommendation:** a mix. We build the gameplay. Jousef gets paid, clearly limited pieces of work, which is how he prefers to work:
- setting up the project's structure at the start;
- the step and focus tracking;
- the ads, purchases and store setup;
- a code review before release.

That costs far less than his full estimate and puts a professional where the risk is.

**Before deciding, test it:** take one loop (gather, refine, restore one machine) into Unity and run it on your phone. That's a day or two of work. It would show how much editor work lands on you, and that's better evidence than my guess.

If you choose this path, it changes your 20 October decision that M2 is "professionally built in Unity from scratch". It would then need a new decision record.

**Sources:** the Tessera handover (the 20 October decision), DOCS/24–27, 33b, 34 and 38, and the M1 trial's code and history. None of them contradicted each other.

---

### Dani · 2026-10-29 13:36

i didn't mean based on the docs, i meant based on ability and experience

---

### Claude · 2026-10-29 13:36

I'll check our track record across the sessions rather than the documents.

The keyword count is crude, so I'll read what Dani actually reported in the sessions with the most problems.

Then my answer is more positive. The low number last time came from M2's store and tracking requirements in the documents, not from doubts about what we can do.

**Short answer:** Going by what we've done, I'd put it at about 70% that the two of us can make a good-feeling, polished M2 build in Unity that runs on your phone. The rest is uncertain because we haven't done anything like it yet.

**What our experience shows we're good at:**
- **Speed.** We built two working products in under three weeks. The M1 trial went through 188 versions in 10 days, and Tessera Records went through 122 commits.
- **Hard problems.** A round planet tiled with hexagons and 12 pentagons is difficult geometry. It works.
- **Your direction.** You test by playing, spot what's wrong ("one of these show correct water side and other buggy"), decide fast, and tune with the sliders yourself. That last one is the game-feel skill that matters most.
- **Recovery.** When something broke badly, like the spotlight that "messed up the entire game", we rolled back and tried another way the same day.

**Where we've struggled:**
- **Feel and looks take many rounds.** I can't see the game; you are my eyes. For example, the jump was "still super wonky" after several fixes, and the tally took about 15 versions in one day.
- **Phones are our weakest area.** Last night's two problems are still open: turning the camera by touch is hard, and the phone can't reach the trial over Wi-Fi. M2 is a phone game.
- **Tokens.** You ran out on 22 October. A Unity project would use more.

**What changes in Unity:**
- **The test loop gets slower.** Today the game reloads by itself a second after each change. In Unity, every code change waits for Unity to recompile, and putting a build on the phone takes minutes. Since our method is many small rounds, everything will take longer.
- **Your role changes.** In the browser, I did all the building and you only played. In Unity, part of the building happens by clicking in its editor, so some of it moves to you. You already work in 3D, so the editor may feel closer to your tools than code does. We don't know that yet.

**How to find out:** a short Unity test. We'd take one loop into Unity (gather, refine, restore one machine) and put it on your phone. That's a day or two of work. It turns my estimate into experience: how slow the loop really is, and how much of the clicking falls on you.

---

### Dani · 2026-10-29 13:39

thank you you've given me clarity

---

### Claude · 2026-10-29 13:39

Glad it helped. I didn't change any files. If you want to run the Unity test, just say so. It needs Unity Personal installed, which is free.

---

Written on 4 November 2026 from the backed-up log of session 98874c77-2082-48af-aec5-6762cdf2c873 (Tessera-Records); this conversation had no text before.
