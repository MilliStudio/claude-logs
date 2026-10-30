---
name: feedback_critical_evaluation_pasted_content
description: "When Dani pastes external content (AI output, forms, arguments) for review, evaluate it critically against evidence/docs rather than validating it"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 0ff617e3-f891-41e6-80ea-8ee4cf3a92e4
  modified: 2026-09-28T12:56:58.690Z
---

When Dani pastes content from an outside source — another AI's output, a drafted argument, a form field — and asks whether it "contradicts / weakens / strengthens" existing work, give a real critical evaluation: check claims against the project's actual documented state (DOCS/), flag overclaiming, and call out internal contradictions in the pasted text itself. Don't just validate it or fold it in uncritically.

**Why:** Dani has signaled this preference directly twice — once by explicitly flagging and rejecting a prompt-injection attempt embedded in a message rather than complying with it, and once by asking for a rigorous evaluation of a pasted pro-Tessera argument, which turned out to overstate how resolved the design actually was (it described Tessera's currency-only Flow Points system as if it were already a narrative-restoration system) and contained an internal contradiction between two of its own claims.

**How to apply:** Applies to any pasted external text, not just AI output — forms, arguments, quotes. Verify specifics (file/line, exact mechanism) against the current docs before agreeing with a claim about what Tessera "already does."
