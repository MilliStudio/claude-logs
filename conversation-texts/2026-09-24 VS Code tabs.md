# VS Code tabs (2026-09-24)

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Its pictures are in Tessera Records, in the original file "Pictures: 2026-09-24 VS Code tabs", numbered as here. Private: never commit or share.

---

### Dani · 2026-09-24 17:59

is it possible to make all docs open in the middle tab again by default? and to stop the group and group 1 setting. it used to be like that but i don't kjnow what i've dont to change it

---

### Claude · 2026-09-24 17:59

This is a VS Code editor settings question, not something in the repo's code — it's about the IDE's tab/editor group behavior. Let me check the relevant settings.

This isn't something in the repo — it's VS Code's own editor layout/preview behavior. I checked your user settings and there's no override causing this; `workbench.editor.enablePreview` isn't set, so it's still on its default (`true`), which normally means single-clicked files reuse one "preview" tab in the center group instead of piling up as separate group splits.

Two separate things are likely going on:

1. **Docs opening as permanent tabs instead of reusing the preview tab** — this happens if you're opening files by double-clicking in the Explorer (double-click always pins a full tab) rather than single-clicking. If it's still happening on single-click, it's worth explicitly setting the preview options.
2. **"Group 1" / "Group 2" split panes** — this is editor *layout* state (which panel a tab lands in), not a setting stored in `settings.json`. It gets created when a tab is dragged, or opened with a "split right"/"open to the side" action, and VS Code remembers that split per-workspace. There's no config flag to "turn it off" — you collapse it back with a command.

To fix the group split right now: open Command Palette (`Ctrl+Shift+P`) → run **"View: Join All Editor Groups"** (`workbench.action.joinAllGroups`). That merges everything back into a single center group.

To stop it from splitting again by default, I can add these to your user `settings.json`:

I added those to your VS Code user settings (`workbench.editor.enablePreview`, `enablePreviewFromQuickOpen`, and `closeEmptyGroups: true` — the last one auto-removes leftover empty groups so they don't linger as "Group 2"). Now, to actually collapse your current split:

1. `Ctrl+Shift+P` → **"View: Join All Editor Groups"** — merges everything back into one center pane.
2. Going forward, single-click files in the Explorer (not double-click) so they reuse the same preview tab instead of opening new permanent ones.

If it splits again later, it's almost always from a drag-and-drop or an "Open to the Side" (`Ctrl+\`) action — worth checking if a keybinding got remapped to that.

---

### Dani · 2026-09-24 18:03

I just want documents to open in the middle regardless of what tab is active. it used to be like that

---

### Claude · 2026-09-24 18:04

Found it — there's a Claude Code-specific setting. Let me check it.

That's it — `claudeCode.lockEditorGroups` (default `true`) locks whatever editor group Claude's chat tab occupies, so opening a file while Claude's tab is focused pushes it into a *new* group instead of the main one. That's exactly the "opens in Group 1/Group 2 depending on what's active" behavior you're seeing.

Set `claudeCode.lockEditorGroups` to `false`. Now Claude won't lock its own tab's group, so files you open will always land in the main/center group regardless of which tab is active — no more spawning a separate Group.

One thing that won't undo itself: any group Claude already locked while the setting was on stays locked (per its own description) until you unlock it manually — right-click that tab → "Unlock Group", or run "View: Join All Editor Groups" once to flatten everything back to one group.

---

### Dani · 2026-09-24 18:06

they still open in this tab. i want the claude tab to always be only claude

---

### Claude · 2026-09-24 18:06

I had that backwards last turn — `lockEditorGroups: false` told Claude to never protect its own group, which is why files now land in the same tab as Claude. You want the opposite: Claude's group locked so other files can't land there. Reverting.

That setting only auto-locks groups Claude *starts* — it won't retroactively lock the tab you already have open. To fix the current tab:

1. Right-click the Claude tab → **"Lock Group"** (or Command Palette → "View: Lock Editor Group" while that tab is focused).
2. Open a doc — it should now skip that group and land in the main one instead.

If it still tries to open beside/in the Claude group afterward, it likely means there's currently only one group total (Claude's own), so there's nowhere else for a doc to go — open a doc once via "Open to the Side" to create the second group, then it'll have a real "middle" group to land in from then on.

---

### Dani · 2026-09-24 18:10

works now. what about the grou1 and group2. those weren't appearing before

---

### Claude · 2026-09-24 18:10

Could you clarify what "Group 1"/"Group 2" refers to exactly? A couple of things in VS Code show that text, and the fix differs:

Sounds good — go ahead and attach the image, and I'll take it from there.

---

### Dani · 2026-09-24 18:11

Dani's picture 001

---

### Claude · 2026-09-24 18:12

That's the **Open Editors** section in the Explorer sidebar — not a separate toggle. VS Code automatically adds "GROUP 1" / "GROUP 2" headers there whenever more than one editor group exists, purely to show which pane each open file belongs to.

Before, everything (docs + Claude's tab) lived in one single group, so there was nothing to label. Now that Claude's tab is locked into its own group (Group 2) and docs land in the other (Group 1), those headers show up as a side effect — it's VS Code reflecting the split you asked for, not a separate setting that turned on.

Two options:

Set `explorer.openEditors.visible` to `0`, which collapses that "Open Editors" section entirely in the sidebar. Your doc/Claude tab split stays exactly as it is now — this just removes the list (and its Group 1/Group 2 headers) from view.

If it's still showing after reloading the window, right-click the Explorer's title bar and uncheck "Open Editors" there as a manual fallback.

---

Written on 4 November 2026 from the backed-up log of session fe9a493d-f8a5-416b-8519-622dc61de3de (Tessera-repositories-tessera); this conversation had no text before.
