# Tessera M1 trial: handover for Claude sessions

Read the private handover first: C:\Users\someo\Dropbox\Studio\Tessera\repositories\tessera\CLAUDE.local.md. Then read the newest file in C:\Users\someo\Dropbox\Studio\claude-logs\conversation-texts, especially its end.

## What this is

A browser trial of Tessera's M1 in simple 3D (boxes), built from a colour map and a grey height map. Dani plays it and says what to change. The README describes every rule and setting; update it with each change.

## Status (2026-10-23)

- v0.33.0. Each version is one commit with a label, synced to the private GitHub repository MilliStudio/tessera-m1 when Dani says. `git status` shows how many commits aren't synced yet.
- All work happens in the round world demo (http://127.0.0.1:4890/planet). It has gathering, a dormant object that restores hidden tiles, and touch controls. Not built yet: the kit, the apparatus and saving progress.
- **The first prototypes are obsolete** (Dani, 2026-10-23): the square-map trial (/) and the shape demo (/hex). Don't work on them or spend tokens on them. Changing a shared setting that also affects them is fine.

## Working rules

- **When to ask Dani, and how:** read rule 1 in section 2 of the private handover, `C:\Users\someo\Dropbox\Studio\Tessera\repositories\tessera\CLAUDE.local.md`, before working with Dani. That is the only copy of the rule; don't repeat it here.
- Save each change as a new version: raise the version in package.json, update the README, run npm test, commit, and add a label (git tag -a vX.Y.Z). Old versions stay, so Dani can go back to any of them.
- Rules and numbers belong in src/key.js, where Dani can change them.
- Test before reporting: npm test, plus a hidden browser against the running game at http://127.0.0.1:4890/ for what the tests can't see. ?at=x,z&yaw=deg&pitch=deg places the player and camera, and window.trial reads the player's state. The open game reloads by itself when code or maps change.
- The plain-language writing rules in the Tessera repository's CLAUDE.md apply here too.
