# Conversation, 18 October 2026: Mattias's method and an M1 app

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Private: never commit or share.

---

### Dani · 2026-10-18 22:12

Continue the Tessera Studio Records work from 18 October 2026.
Read CLAUDE.local.md first, then Dropbox\Studio\Tessera Studio Records\CLAUDE.md
(the folder was renamed from studio-records on 18 October).
Then read the messages of the last conversation, especially the end, to see where we left off:
C:\Users\someo\Dropbox\Studio\claude-logs\conversation-texts\2026-10-18 Tessera Studio Records restructure.md

Where things stand:
- Everything is committed and synced: Tessera Studio Records v0.6.0, Tessera Design v0.10.2,
  and both handovers.
- Step 1 (Tessera only, v0.5.0) and step 2 (screens in columns, v0.6.0) are in my app.
  The expense form now fits on one screen: main fields visible, optional parts in tabs,
  "Paid later" shows the payment date.

The task: the fields I find unnecessary, which I put off until the layout was done.
Go through one kind of record at a time, starting with expenses. Show me its fields as a
short list, say which you think could go or be hidden, and I'll tick. Same rules as before:
nothing deleted from the database, tried on a copy first, then one restart.

Keep questions few and short, with a recommendation, so I can answer "yes to all".
Start by telling me the size of the task and where you need my input.

---

### Claude · 2026-10-18 22:13

I'll read the Studio Records handover and the last conversation first.

Now the app's code, to see which kinds of records exist and the expense fields.

Now which expense fields the rules, reports and the spec rely on, so I know which can safely be hidden.

Checking what the spec says the expense must hold, since hiding a field the spec requires would need a spec change.

Checking how saving a changed record treats fields the screen doesn't show, so hidden fields keep their values.

---

### Dani · 2026-10-18 22:13

(sent while Claude was working) we're actually done with the apps for now. their new code was applied and synced yes?

---

### Claude · 2026-10-18 22:14

Stopping the field review. Checking that both apps' code is committed and on GitHub:

Yes, both apps' new code is in your app and on GitHub. I checked each one against GitHub just now, and they match:

- **Tessera Studio Records v0.6.0:** nothing is waiting to be saved. The last change went to GitHub on 18 October at 22:07.
- **Tessera Design v0.10.2:** the same, also synced at 22:07.

I hadn't changed anything this session, so there's nothing to undo. Your Studio Records handover already lists the unnecessary fields as an open item, so the next session will pick it up from there.

I found one thing while reading the expense form: **Notes** ended up inside the "Before the company existed" tab, where you wouldn't think to look for it. May I add a line about it to that open item, so it gets fixed with the field review? I recommend yes.

---

### Dani · 2026-10-18 22:18

[Attached: Review M1 Prototype.pdf]

last task for today. i have updates regarding the web app mattias suggested, and i would like to investigate it further. first, attacched is the updates. it's an entire conversation with chatGPT. unfortunately, it's very chatty so you'll have to work extra to get the important bits out. it has a tendency to jump to conclusions, as well do things it wasn't asked to do. you're gonna have to confirm its research, reasoning and conclusions. you can skip the beginning of the conversation until you reach a message from containing a letter from mattias

---

### Claude · 2026-10-18 22:19

**Size: medium** (one session). I'll read your current docs, check ChatGPT's technical claims against official sources, and report back. I don't need your input until the end, and I won't change any files.

Starting with what your current docs say about M1, since ChatGPT worked from copies dated 15 October or earlier.

The current M1 doc settles one of the points already. Now the claims ChatGPT made about the TDD, master and GDD (code reuse, vendor window, the "main attraction" quote, the rhythm quote):

Your docs already list "Is it OK for M1 to be 2D?" as an open question, so this is undecided rather than settled. Checking the rebuilt TDD's M1 feature list (vendor, movement, camera):

Docs checked. Now the technical claims. Loading the web tools to check them against official sources:

ChatGPT's technical facts mostly hold up. Three things are wrong with the rest: it worked from outdated copies of your docs, it presented questions your docs already list as open as if they were new findings, and it left out the option that best fits what you asked for. That option is simple 3D in a browser. I checked everything from Mattias's letter onward against your current docs and official sources, and I changed no files.

**What Mattias actually said**
- Building M1 yourself with an agent is "a good step in the right direction". It's cheaper, and you learn what working with an agent is like.
- As far as he knows, his approach isn't an established method. It has two parts:
  1. **A technique:** deciding what part of a game looks like with "just a few pixels" (his image).
  2. **An app:** an unreleased Skyfox app built on Unity. It fetches everything from a server, so they can load a new map or enemy behaviour while playing.
- He offered to make a Tessera example of part 1 and to share what he knows. He didn't offer a workshop or access to his app.

**What I confirmed**
- Part 1 is a known pattern: a small image is the level map, and each pixel colour stands for one kind of object. Tutorials describe it, and both Unity and browsers can read an image's pixels.
- The detailed art still has to be made. The technique saves time on putting levels together and rearranging them, not on drawing.
- Unity can load new images and maps from a server without a new build (Addressables), and change numbers remotely (Remote Config).
- Loading new *code* is different. Unity's downloadable bundles can't carry code that runs. So asking what Mattias means by "code" is fair. ChatGPT's answer to it ("Option B is much more likely") is a guess.
- Unity 6 games run in browsers, including on phones (Safari 15+ on iOS, Chrome on Android).
- Your worry about wandering is backed by your docs:
  - DOCS/02: "The main reason to play is the world itself".
  - DOCS/04: the rhythm quote matches word for word.
  - DOCS/33a: M1 can't show whether exploration is compelling.
- Its correction "method, not app" for part 1 is right. Mattias calls only part 2 an app.

**What was wrong, outdated or overreaching**
1. **Old sources.** It used the 15 October TDD and master, and an 18 September GDD. "Exploration is the primary pillar" comes from that GDD. Since 16 October your pillars are Art, Game first, Never punishes, The world is the reason to play, and Relaxing.
2. **Known open questions sold as findings.** Code reuse, 2D or 3D, browser or Unity, and saving progress are all already open in DOCS/43.
3. **The vendor "contradiction".** It compares your docs with ChatGPT's own review draft for Mattias, which isn't a decision. Your docs put the vendor in M1 (DOCS/23 lists the vendor's shop window).
4. **"The browser is required."** DOCS/33a says so, but DOCS/43 records that the 15 October meeting left browser or Unity open. I treated DOCS/43 as current because it's later.
5. **A missing option.** It framed the choice as "2D JavaScript or Unity". It left out simple 3D in the browser with a free library such as three.js: boxes to wander among, played from a link.
6. **"His image shows a side-view platform game."** It stated this as fact from a thumbnail. I can't confirm it from the PDF, and it doesn't matter.
7. **The "2D-only" worry is weak.** A pixel map works as a floor plan for a 3D world. A pixel's position says where something goes, its colour says what goes there, and a grey value can say how high it is. This kind of map (a heightmap) is standard, and Unity imports heightmaps saved from Photoshop. Mattias's app also runs on Unity, a 3D engine. So your email's question will most likely get a quick "yes".
8. **The agent question misses its main point.** An agent works with text.
   - A JavaScript game is all text, so the agent can do almost everything and you test in the browser.
   - Much of Unity's work is clicking in its editor, which you'd have to learn.
   - Unity now has a connector that lets agents like Claude Code work in its editor. It's new, and I couldn't confirm its current status or cost.
9. **Downsides it made up, then dropped** (detailed scenery, lighting), which you caught. It also switched its view on "wandering / manoeuvring" as soon as you pushed back, without giving a reason.

**My view**
- Your real decision is the open question "Is it OK for M1 to be 2D?", and you seem to be answering no. That would change DOCS/33a ("3D gameplay shown as 2D"), so decide it after Mattias replies.
- The tool depends on another open question in DOCS/43: "Is M1 a cheap test, or the start of production?"
  - **A cheap test** points to three.js. It's easiest for an agent and for testers, but the code stays behind if M2 uses Unity.
  - **The start of production** points to Unity. It's harder for you now, but the code can carry over.
- I lean to the cheap test, with levels painted as small colour maps in Photoshop. M2 then keeps the rules, numbers and maps, not the code. ChatGPT made this point too, and it holds. It would mean changing a line in DOCS/43: "M1's code should be reusable in M2 and M3 without rewriting".

**Two questions**
1. Has the email gone to Mattias? If not, I'd change "this simplified prototyping app" to "method". I'd also replace the 3D question with one his answer adds more to: what would he build a simple 3D M1 with, if you build it yourself with an agent? I recommend yes.
2. May I add Mattias's reply and this review to your private handover, so the next session knows about them? I'll show you the exact text first. I recommend yes.

Sources:
- [Generating a level from an image in Unity3D (HackerNoon)](https://medium.com/hackernoon/generating-a-level-from-an-image-in-unity3d-225b51a68172)
- [Unity: Texture2D.GetPixels](https://docs.unity.cn/6000.1/Documentation/ScriptReference/Texture2D.GetPixels.html)
- [MDN: getImageData()](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/getImageData)
- [Unity: Including scripts in AssetBundles (older manual)](https://docs.unity3d.com/530/Documentation/Manual/scriptsinassetbundles.html)
- [Unity Addressables: build artifacts](https://docs.unity3d.com/Packages/com.unity.addressables@2.1/manual/BuildArtifacts.html)
- [Unity Remote Config](https://docs.unity.com/en-us/remote-config)
- [Unity Web browser compatibility](https://docs.unity3d.com/Manual/webgl-browsercompatibility.html)
- [Unity 6 announcement](https://unity.com/en/blog/unity-6-features-announcement)
- [Unity: ProBuilder](https://docs.unity3d.com/Manual/com.unity.probuilder.html)
- [Unity: Terrain heightmaps](https://docs.unity3d.com/2020.2/Documentation/Manual/terrain-Heightmaps.html)
- [Unity 2D Tilemap Extras (Rule Tile)](https://docs.unity3d.com/Packages/com.unity.2d.tilemap.extras@1.8/manual/index)
- [Unity MCP overview](https://docs.unity3d.com/Packages/com.unity.ai.assistant@2.0/manual/unity-mcp-overview.html)
- [Unity AI beta: getting started with MCP](https://unity.com/en/blog/unity-ai-mcp-how-to-get-started)
- [three.js (Wikipedia)](https://Www.wikipedia.org/wiki/Threejs)
- [Phaser](https://github.com/sarvex/phaser) (a mirror of the official README)

---

### Dani · 2026-10-18 22:34

you misunderstood. the game features and whether they're up to date with the current docs is not in question. only the app. i want to know if it's something i can use. 

The research i want you to do is to answer

3D object placement at different heights and depths.
Free movement and collision around obstacles.
A camera following the character.
Translating a simple map into a 3D layout.
I'm concerned because a 2D prototype can test wandering and navigating around obstacles, but it cannot fully reproduce the depth, elevation and changing visibility of Tessera's 3D world.

or would this adaptation defeat the app's purpose as advantages?

-------------------------------------------
i gave you the document to get the updates on what happened, but the whether the text above can be true. i also cant for the life of me understand mattias' method. why it's in two parts not one, which one is the app, what on earth do they do. i need it dumbed down

---

### Claude · 2026-10-18 22:35

Understood: only the app and the four points. I'll check the three things Unity would need for them: movement with collision, a follow camera, and building 3D from a flat map.

Got it: only the app and your four points.

## Mattias's method, in plain terms

It has two parts because it handles two different chores. Only part 2 is an app.

**Part 1: a tiny colour map (a way of working, not software)**
- You paint a tiny picture, for example 30 × 20 pixels. Each colour means one thing: dark green = wall, cyan = monument, light green = ledge.
- A program reads the picture one pixel at a time and puts the matching finished piece of art in that spot.
- It works like a cross-stitch chart: each square says which thread goes where, and the finished piece is built from the chart.
- That's his image. The top half is the chart someone edits; the bottom half is what the game builds from it.
- **What it saves:** to move a wall, you repaint a few pixels instead of moving dozens of pieces by hand. The art itself still has to be drawn once.

**Part 2: Skyfox's app (the actual software)**
- Normally, every change to a game means building a new version and sending it to everyone who tests it. It's like reprinting a book to fix one word.
- Skyfox's app keeps the game's content (images, music, maps) online, and the game fetches it from there. It works like a website: you change the page, and visitors see the new version without installing anything.
- **What it saves:** a change reaches a game that's already running, without building a new version.

**Together:** repaint the tiny map, upload it, and the running game rebuilds the level from it. A level change takes seconds, even while someone is playing.

## Can you use it?

- **Part 1: yes.** It's an idea, not Skyfox's software. An AI agent can write the program that reads the map, whether the game is made in Unity or runs in a browser.
- **Part 2: only through Mattias.** It's unreleased, and he hasn't offered access.
  - You don't need it while you test on your own computer: you just restart the game.
  - It helps once outside testers play.
  - A browser game gets most of the benefit anyway: you put the new map file online, and testers get it the next time they open the link.

## Your four points

Only the last point is about Mattias's method. The other three are parts of any 3D game, and Unity has them built in.

1. **Objects at different heights and depths: yes.** The map is a floor plan seen from above: where a pixel sits says where the object goes, and its colour says what it is. Height needs one more thing, such as a second grey map where lighter means higher. Unity can build ground from a grey map like that, painted in Photoshop.
2. **Free movement and collision: yes, built into Unity.** Its character part walks on floors and stops at walls. This isn't part of Mattias's method.
3. **A camera following the character: yes, built into Unity.** Its camera package follows a character. It also has an add-on that moves the camera when something blocks its view. This isn't part of Mattias's method either.
4. **Turning a simple map into a 3D layout: yes, with one limit.** A flat map can't put two things in one spot, such as a bridge over a path or a cave under a cliff. Doom (1993) built its 3D levels from flat maps with heights and had exactly this limit. Places like that need a second map, or have to be placed by hand.

Your sentence about 2D is accurate. A 2D game seen from above can test wandering and walking around obstacles. It can't show height, or things hiding and revealing each other as you walk.

## Does 3D defeat the purpose? No.

- **Part 1:** you still change a level by repainting pixels, so each change stays just as quick. The extra work happens once: teaching the program to read height, and making simple 3D pieces. Plain boxes are enough for M1.
- **Part 2:** the app delivers files and doesn't care whether they're 2D or 3D. It's built on Unity, which is a 3D engine, so 3D is its normal use.

One limit on all this: only Mattias knows exactly what Skyfox's app can do. What I've written comes from his email and from how Unity works.

**One question:** have you sent the email yet? If not, I'd rewrite it to ask only whether his colour-map method works in 3D, since the other three points are standard Unity. I'd also change "app" to "method". I recommend yes.

Sources:
- [Generating a level from an image in Unity3D (HackerNoon)](https://medium.com/hackernoon/generating-a-level-from-an-image-in-unity3d-225b51a68172)
- [Unity: Terrain heightmaps](https://docs.unity3d.com/2020.2/Documentation/Manual/terrain-Heightmaps.html)
- [Unity: CharacterController](https://docs.unity3d.com/ScriptReference/CharacterController.html)
- [Unity Cinemachine reference (follow cameras, Deoccluder)](https://docs.unity3d.com/Packages/com.unity.cinemachine@3.1/manual/Reference.html)
- [Doom engine (Wikipedia)](https://en.wikipedia.org/wiki/Doom_engine)
- [Room over room (Doom Wiki)](https://doomwiki.org/wiki/Room_over_room)

---

### Dani · 2026-10-18 22:44

mattias wants me develop my own app, not give me access to his. 
would you be able to do it?

---

### Claude · 2026-10-18 22:44

Yes. That's what an AI coding agent does, and I'd be yours. It would work the way I built your two apps: I write the code, run it and check it on made-up content, then you try it and tell me what to change.

**What I'd build**
- A small browser game that reads a colour map you paint in Photoshop and builds a simple 3D level out of boxes. The colours say what goes where, and a grey map says how high.
- Walking with a joystick on a phone (keys on a computer), stopping at obstacles, and a camera that follows from above, as in DOCS/22.
- Live updates on your computer, which is what Mattias's app does for him. You save the map in Photoshop, and the open game rebuilds the level within a second. It needs no server and no Skyfox app.

**I recommend the browser, not Unity**
- A browser game is all text files, so I can do all the work and check it myself.
- Much of Unity's work is clicking in its editor. You'd have to install it and learn it, and I'd mostly be telling you where to click.
- The downside: browser code won't carry over if M2 is made in Unity. The rules, numbers and maps carry over, but the code doesn't.

**Size**
- **A first trial:** medium, one session. It covers map to boxes, walking, collision, camera and live updates. It shows whether the method works for Tessera before anything bigger.
- **The whole M1 loop:** large, several sessions. It adds the kit, gathering, the apparatus, restoring and saving.

**Where I need you**
- Paint a test map and choose what each colour means. I'll give you a starting key.
- Try it on your computer and phone, and judge how the wandering feels. I can't judge feel. Testing on your phone needs one extra setup step, which I'll do when we get there.
- Decide the open M1 questions as they come up.

**Two questions**
1. Should M1 be built for the browser as a cheap test, rather than in Unity? I recommend yes.
2. Should we start with the trial in a new session? I recommend yes.

---

### Dani · 2026-10-18 22:44

unfortunately i already sent the email

---

### Claude · 2026-10-18 22:44

No harm done. The email is fine as it is:

- **"App" instead of "method":** Mattias knows his own setup, so he'll know which part you mean.
- **The three standard points** (movement, collision, camera): he'll probably just confirm that Unity handles them. A quick "yes" still tells you something.
- **Your real question** was whether his colour-map method works in 3D without losing its speed. He'll answer that, and it's the one that matters.

There's nothing to correct or follow up. When he replies, paste his answer here and I'll go through it with you.

My two questions from before can wait until then: whether M1 becomes a cheap browser test, and whether we start with the trial in a new session.

---

### Dani · 2026-10-18 22:49

Much of Unity's work is clicking in its editor. You'd have to install it and learn it, and I'd mostly be telling you where to click.
but we don't need unity yes?

The downside: browser code won't carry over if M2 is made in Unity. The rules, numbers and maps carry over, but the code doesn't.
how long would it take to develop m1? would it cost anything if we were to use unity?

great work thanks. let's start again tomorrow. can you prep a prompt. i think just copy the conversation text without the code

---

### Claude · 2026-10-18 22:50

Checking Unity's current price terms before I answer the cost question:

Now the conversation text. There's no saved script from last time, so I'll write a small one that pulls your messages and mine out of this session's log, leaving out code and tool output:

**1. Unity:** Right. A browser M1 doesn't need Unity at all. Unity only matters if M2 is made in Unity and you want M1's code to carry over. M2's engine isn't decided yet.

**2. How long M1 would take**
- **The trial** (colour map to boxes, walking, collision, camera, live updates): one session.
- **The whole M1** (the 14 features in your docs, their 6 screens, saving): my rough estimate is 5–10 sessions. What decides it is how many rounds of changes follow your playtests.
- **Not included:** designing the first map and its puzzles. That's your part, and it's still open in DOCS/43.

**3. Cost**
- **Browser:** nothing beyond your Claude subscription. three.js is free, and there are free ways to put the game online for testers.
- **Unity:** free under Unity Personal while your income and funding over the last 12 months stay under $200,000. Above that, Unity Pro costs $2,200 a year per person. Unity's own connector for AI agents may need a paid plan; I couldn't confirm that. The bigger cost is time: you'd have to learn the editor, and I work more slowly in it.

Sources: [Unity pricing updates](https://unity.com/pricing-updates), [State of Unity licensing in 2026](https://enginesdatabase.com/blog/state-of-unity-licensing-in-2026/).

Claude then wrote the prompt for the next session.

---

## Appendix: the attached PDF ("Review M1 Prototype.pdf")

Dani attached a printout of a ChatGPT conversation from around 17 October 2026. Two parts of it matter and are copied here word for word, as the PDF shows them.

### Mattias's email to Dani

The PDF cuts the message off after "//M" ("Show more"), so a few lines may be missing.

> Hi Dani,
>
> That actually sounds like a good step in the right direction. It will definitely be cheaper, and you'll gain experience with the pros and cons of working with an agent.
>
> There may be others I'm not aware of who use this technique, but as far as I know, it's not an established method.
> Very briefly put, it primarily comes down to two things we do:
>
> The first is being able to control small changes with very small means. For example, being able to determine what a part of a game should look like using just a few pixels. (See image)
> If you like a can make an example of how this could work in Tessera.
>
> The second is that we've built an app that stands on the shoulders of Unity. We haven't released this app yet; instead, we work with it as a standalone tool or integrated into the apps we've tested. Its function is that it fetches all its data from a server. This means you can upload images, music, and code, and get immediate access to them. An example of this is that while playing a game, we can quickly load in a new version of, for instance, a map or an enemy's behavior.
>
> I think it's great to investigate and explore how far you can get on your own.
> With that said, I'm always happy to help or and share knowledge whenever I can
>
> Send my greetings to Janne! :)
>
> Best
>
> //M

His image: two small pictures, one above the other. The top one is a simple map in a few flat colours (a dark green stepped shape, a cyan bar in the middle, small bright green dots). The bottom one is the detailed game scene built from it.

### Dani's last draft of the reply, in the ChatGPT conversation

Dani sent the reply by 18 October 2026. The sent version may differ from this draft.

> Hi Mattias,
> Thanks for explaining and for offering to help!
> I need to ask though, is it possible to adapt this simplified prototyping app to work with basic 3D exploration (with simple shapes and boxes)?
> I'm thinking of:
> - 3D object placement at different heights and depths.
> - Free movement and collision around obstacles.
> - A camera following the character.
> - Translating a simple map into a 3D layout.
>
> I'm concerned that a 2D layout might not capture the experience of wandering / manoeuvring among the objects in the world, which is an important part of the game. I don't think 2D can fully capture.
> or would this adaptation defeat the app's purpose as advantages?
> I'll pass your greetings on to Janne! :)
> Best,
> Dani
