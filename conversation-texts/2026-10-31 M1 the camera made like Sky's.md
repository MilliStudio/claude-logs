# 31 October 2026 (afternoon): M1, the camera made like Sky's

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Private: never commit or share.

---

### Dani · 2026-10-31 14:11

so for the camera, is it possible to make move a little futher when the player stops moving (in the same direction it was going of course), then ease when stopping. also when player starts moving it can resiste a little bit.. i think like a stepe ease the follow plaayer.
You can add sliders to how farther it goes when stopping and how fast it stops, as well as when starting to move.

---

### Claude · 2026-10-31 14:16

Reading the camera code now; next I'll build the follow (lag on start, glide past on stop, come back) with sliders.

Writing the follow code now. Dani's newer saved camera values in src/key.js (Rotation ease out 0.65 s and others) will go in with this version.

Now the edits: key.js first (re-reading its current text), then planet.js.

Checking for name clashes (that broke the game last time) before opening it.

Tests pass. Now checking the camera in a hidden browser against the running game.

Calibrating: the game will work out, once per slider setting, how quickly the camera must slow so it ends exactly the slider's distance past the player.

Raising the version, running the tests, then a last check that the game starts, before committing.

The camera now follows you with some weight. This is v0.228.0, and it's saved to GitHub.

**What it does:**
- **When you start walking**, the camera picks up speed slowly, so you pull ahead of it a little. Then it catches up.
- **When you stop**, the camera keeps going the way you were walking, slows down, stops a little past you, then eases back to you.

**Three new sliders** under Tuning, Camera:
- **Starting: falls behind by**: how far you get ahead of the camera as you start. It starts at 0.4 m.
- **Stopping: goes on by**: how far past you the camera stops. It starts at 0.6 m.
- **Comes back to you over**: how long it takes to come back to you after it falls behind or goes past. It starts at 1 second.

There's no separate slider for how fast it stops. The camera is moving at your walking speed when you stop, so the distance decides how long it takes to slow down. For example, if you raise "goes on by" from 0.6 m to 1.5 m, the stop takes longer. A separate setting would make the camera jerk.

**What I checked:**
- The tests pass, and the game starts without errors.
- In the hidden browser, the camera fell behind, went past and came back. With both distances at 0, it stays exactly on you.
- Offline, with the same formulas, the camera falls behind and goes past by exactly the distances the sliders show, if you walk long enough first. If you stop before it has caught up, it goes past by less. When you run, it goes past by more.

Your newer camera settings from last night are in this version too: Rotation ease out 0.65 s, Tilt and zoom ease in and out 0.8 s each, the walking zoom at 13%, starting after 0.2 s and taking 0.5 s, and the farthest zoom at 10 m. So your saves did work.

---

### Dani · 2026-10-31 14:30

do you have the ability of extracting frames from videos? i can record the behavior and you can caluate?

---

### Claude · 2026-10-31 14:31

Yes. There's no video tool installed (no ffmpeg), but I can use the Chrome that's already on the computer: it can open a video, step through it frame by frame and save each frame as a picture. I can look at those pictures, and I can also measure them automatically.

**What I'd calculate:** in each frame, where the character sits compared with the middle of the screen. Here's an example of what that gives:

- The character drifts 40 pixels ahead of centre as they start walking.
- When they stop, the camera goes past them by 60 pixels, 0.3 s after the stop.
- The camera is back on them 1.2 s after the stop.

The character's height on screen gives the scale, so pixels turn into metres. From those numbers I can set the three new sliders to match.

**How to record it:**
1. Don't turn the camera, and walk sideways across the screen. Sideways movement shows the lag and the overshoot best.
2. Walk for 2–3 seconds, stop, and stand still for 3 seconds. Do this 3–4 times.
3. Save it as MP4. On the PC, Win+Alt+R records the game window. On an iPhone, set Settings → Camera → Formats to "Most Compatible" first: the default format may not open in Chrome.
4. Put the file somewhere in Dropbox and tell me the path.

If it's another game, like Sky, the same method works. That way the trial's camera can copy how that game's camera feels.

---

### Dani · 2026-10-31 14:33

what's the most efficient way to do this thoough? you mentioned plugins

---

### Claude · 2026-10-31 14:33

Small correction first: I didn't mention plugins. I mentioned **ffmpeg**, a free video program that isn't installed here. It's not needed.

**The most efficient way:**

1. **For our own trial, skip the video.** The game already reports where the camera is compared with the player, every frame. I can record those numbers directly while walking and stopping in the hidden browser. It's exact and costs almost nothing.
2. **For another game, like Sky, use a video, measured automatically.** A script in Chrome steps through the video, finds the character in each frame by its colour, and writes down only the numbers: how far the character sits from the screen's middle, frame by frame. I look at 2–3 frames to check it found the right thing. I don't look at hundreds of pictures, which would cost a lot of tokens. Then I turn the numbers into slider values.

ffmpeg is only worth installing (one command, a few minutes) if your recording won't open in Chrome. That's most likely with an iPhone video in its default format.

So: if you want the trial's camera to feel like Sky's, record Sky as I described and send me the path. If it's about our own camera, tell me what feels wrong and I'll measure it directly.

---

### Dani · 2026-10-31 14:39

i can't pinpoint what's wrong. on sky it supports the feel of motion, but on ours it feels like dizziness
Keep in mind that in our game we use invisibility behind objects not the same as sky. what i want is the zooms, timings, ease ins and ease outs
"C:\Users\someo\Dropbox\Studio\Tessera\references\videos\sky camera.mp4"

---

### Claude · 2026-10-31 14:40

Looking at the video first: its length and size, then a few overview sheets of frames.

The video is 40 seconds of Sky, at 1876×1010. Now denser sheets, 4 frames a second, to see the camera's moves.

30 frames a second. Now the automatic measuring: how fast the background slides (the camera turning) and where the character's red cape is on screen, frame by frame.

Measurements are in. Next, the exact frame-by-frame speeds during Sky's quick camera turns and tilts, to get their ease in and out.

I measured your Sky video frame by frame. Our camera keeps moving after you've stopped doing things, and Sky's doesn't. That's my best guess at the dizziness.

| | Sky (measured) | Ours, before this change |
|---|---|---|
| Turning: reaches full speed in | about 0.2 s | 0.3 s |
| Turning: stops after you let go in | about 0.3 s | 0.65 s |
| Tilting: speeds up in | about 0.25 s | 0.8 s |
| Tilting: stops in | about 0.5 s | 0.8 s |
| After the character stops | the camera eases to a stop in about 0.5 s and stays still | goes 0.6 m past, then comes back over about 1.6 s |
| Zoom while walking or running | none: the character stays the same size | zooms out 13% each time you walk, and back in each time you stop |

**Done (v0.229.0, saved to GitHub):** turning and tilting now use Sky's four timings (the first four rows). You asked for those directly. Your earlier values are noted in the README.

**Two changes would undo things you asked for, so I'm asking first:**

Q1. Sky's camera never goes past the character: while walking, it trails a little behind, and when the character stops, it eases onto them in about 0.5 s. Since today, ours goes 0.6 m past and comes back, so the picture moves two ways after every stop. Should I switch to Sky's way? I recommend yes. The three new sliders would become two: "Walking: trails behind by" (about 0.7 m) and "Stopping: settles over" (0.5 s).

Q2. Sky doesn't zoom out while walking or running in this video. The runs in it are short, 1–2 seconds, so it may still zoom out on longer runs. Ours zooms in and out with every walk and stop, so the picture keeps pumping. Should I set "Walking: zooms out by" to 0? I recommend yes; the slider stays, so you can turn it back on.

One more difference that isn't about timing: Sky's camera is close with a wide lens, so turning it feels like turning your head. Ours is about 72 m away with a narrow lens, so turning spins the whole picture flat, like a plate. If the dizziness stays after Q1 and Q2, that's the next thing to try.

---

### Dani · 2026-10-31 14:50

let's start by implementing your measurements

---

### Claude · 2026-10-31 14:50

Implementing both. One correction to what I proposed in Q1: "trails behind by" and "settles over" can't be two separate sliders. The camera is moving at walking speed when you stop, so how far behind it trails decides how long it takes to settle smoothly. Setting them apart would make it either pass you or jerk to a stop. So it becomes one slider: settles over 0.5 s, which trails about 0.7 m behind at walking speed.

Replacing the follow code with Sky's way.

Tests pass. Checking in the hidden browser: the game starts, the camera trails while walking and settles without passing.

The camera trails behind while walking, then settles onto the player without ever passing them, and the zoom stays the same. Saving v0.230.0.

I've added all of Sky's measured camera behaviour to the game, in v0.230.0. It's saved to GitHub, and the game you have open reloads by itself.

**What changed:**
- **Following:** while you walk, the camera trails a little behind you, 0.68 m at walking speed. When you stop, it eases onto you over about 0.5 s and never goes past you. The three sliders from earlier today (falls behind, goes on by, comes back) are replaced by one: **Follows you: settles over** (0.5 s). Beside the time, it shows how far the camera trails at that setting.
- **Walking zoom:** off. **Walking: zooms out by** is set to 0%, and the slider stays, so you can turn it back on.
- **Turning and tilting** use Sky's timings from v0.229.0: turning speeds up in 0.2 s and stops 0.3 s after you let go. Tilting speeds up in 0.25 s and stops in 0.5 s.

**Checks:** the tests pass and the game starts. In the hidden browser, the camera stayed behind while walking, eased onto the player after each stop without passing, and the zoom didn't change.

Following now works the way it did before v0.228.0, which already matched Sky's 0.5 s settle. So most of the dizziness probably came from three things: the camera going past you since today, the zoom pumping with every walk, and the slow turning and tilting eases.

If it still feels dizzy, the next thing to try is the lens and distance, so that turning looks less like the whole picture spinning.

---

### Dani · 2026-10-31 14:57

it's nothing like sky. try again "C:\Users\someo\Dropbox\Studio\Tessera\references\videos\sky camera 2.mp4" here is a new video

---

### Claude · 2026-10-31 14:57

Analysing the new video the same way: an overview first, then frame-by-frame measurements.

---

### Dani · 2026-10-31 14:58

(sent while Claude was working) if this way doesn't work find another one

---

### Claude · 2026-10-31 15:01

Making the code changes now: the lens, tilt and aim height get sliders, and the tilt can go lower. Then I'll set up a copy of the trial with the old island, so the screenshots have something in them.

Now the new starting numbers in src/key.js. Then the copy with the old island, for screenshots.

Two things to fix: the camera is a little too low, so the ground curves away right behind the character, and Sky shows more world. Trying a few tilts and lenses side by side.

The three variants look almost the same, so the tilt slider may not be taking effect. Checking.

My test picked the wrong slider: another one, earlier in the panel, also starts with "Tilt". Matching by the key name instead.

Tests pass. Checking that the real game starts with the new camera and that walking and turning raise no errors.

---

### Dani · 2026-10-31 15:05

(sent while Claude was working) looks nicer already

---

### Claude · 2026-10-31 15:05

Glad it's closer. No errors in the game. Saving it as v0.231.0.

The camera now looks like Sky's: close, low and wide. That's v0.231.0, saved to GitHub.

**What changed:**
- **A wide lens** instead of a narrow one: 55° instead of 8°. The camera now stands about 5 m behind you instead of 72 m away. Walking now moves you through the world instead of sliding a map under you, and turning feels like looking around.
- **Framing:** you're about 28% of the screen's height, with your feet about 70% of the way down. Sky's character is 28%, with its feet at 72%.
- **Tilt** starts at 28°, and you can now lower it to 10° (the lowest used to be 20°).
- **Four new sliders** under Tuning, Camera: **Lens**, **Tilt**, **Zoom** and **Looks at, above your feet**. Save as defaults keeps whatever you set.

Sky's measured turning and tilting timings, the soft follow, and no walking zoom all stay as before.

**Still different from Sky:**
1. **Sky's camera turns by itself to get behind you as you walk.** In your first video it takes about 0.7 s to get going and 2–3 s to ease to a stop. Ours never turns by itself: the team chose that at the first meeting (11 September), after Jousef advised against a camera that picks its own angle. Q1: Do you want to try Sky's way as an option, with a slider for how strongly it turns, where 0 is off? I recommend trying it, because it's a large part of Sky's feel of motion.
2. **Our planet is small.** From this low, the ground curves away about 10 m ahead, so things farther away rise over the edge as you walk toward them. Sky's ground is flat, so you see far. Tilting higher (T) shows more of the island.

---

### Dani · 2026-10-31 15:09

let's keey it like this for now thanks. can you save it and makke sure it's backed up

---

### Claude · 2026-10-31 15:09

Everything is saved and backed up:

- There are no unsaved changes in the game folder.
- GitHub has exactly the same latest version, v0.231.0, as the game folder.
- All four of today's versions are on GitHub with their labels: v0.228.0 to v0.231.0. You can go back to any of them.

I'll update the handover notes when you end the session.

---

### Dani · 2026-10-31 15:10

and i don't need to save the defaults?

---

### Claude · 2026-10-31 15:10

No. The new camera values are already the defaults: I wrote them into src/key.js, and they're saved on GitHub.

You only need **Save as defaults** if you moved sliders yourself since the new camera arrived and want to keep those positions. Your browser remembers moved sliders, but only in that browser. Nothing has been saved from the panel since my last version, so if you did move sliders and like them, press Save as defaults and I'll back them up.

---

### Dani · 2026-10-31 15:14

prep for a new convo and updates for tr please. this time we can mention sky where the similarities lie only though

---

### Claude · 2026-10-31 15:15

Reading how the last session wrote design records, so the list for Tessera Records matches what's already there.

The GitHub repository for claude-logs still doesn't exist, so the logs stay committed only on this computer for now. Updating the M1 handover next.

Saving this session's conversation text to claude-logs.

---

Closing note (31 October 2026, afternoon): Built v0.228.0 to v0.231.0 and pushed them. The camera first went past the player when they stopped (Dani's request), then took Sky's timings, soft follow and no walking zoom, measured frame by frame from Dani's first Sky recording; Dani found it still nothing like Sky, so the camera took Sky's shape from her second recording: close, low and wide (55° lens, tilt 28°, zoom 5 m). Dani: "looks nicer already", "let's keep it like this for now". Tessera Records: the camera records were proposed in chat, mentioning Sky only where ours copies it; waiting for Dani's yes. claude-logs' GitHub repository still doesn't exist.

Prompt for the next session: Task: continue the M1 trial (Dropbox\Studio\Tessera\repositories\tessera-m1, v0.231.0). Read its CLAUDE.md and run git status. If the camera records for Tessera Records are still waiting, show me the list again. If I've made the empty private repository MilliStudio/claude-logs on GitHub, push claude-logs. Then more mechanics, as I ask. Work only on what I ask. I'll tell you when I'm done for the day.
