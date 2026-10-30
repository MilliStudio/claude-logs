# Start of every session

`CLAUDE.local.md` in this folder loads by itself at the start of every session; don't read it again. It is a private handover with the project's current status, decisions and working rules. Keep it up to date as it instructs.

# Writing Style

All prose written in this repository (design docs, README, comments, commit messages, PR descriptions) must follow the plain-language rules below, adapted from Paul J. Silvia's *How to Write a Lot*. These are restrictions, not suggestions.

## Rules

1. **Cut throat-clearing.** Delete openers like "It is interesting to note that," "It should be noted that," "In order to." Start with the actual point.
2. **Prefer verbs over nominalizations.** Write "decide," not "make a decision." Write "analyze," not "conduct an analysis."
3. **Use active voice by default.** Use passive voice only when the actor is unknown or irrelevant.
4. **Cut hedge words.** Remove "somewhat," "fairly," "rather," "quite," "seems to," "tends to" unless the uncertainty is real and load-bearing.
5. **Cut intensifiers that add no information.** Remove "very," "really," "extremely," "significantly" — state the fact plainly instead.
6. **One idea per sentence.** Split compound sentences that bury a second claim in a subordinate clause.
7. **Prefer short, common words over long, technical ones.** Write "use," not "utilize." Write "help," not "facilitate." Write "show," not "demonstrate." Exception: established project or domain terminology.
8. **Avoid jargon and buzzwords** unless the term is a defined project term (e.g. a named game mechanic) and its first use links or points to that definition.
9. **Cut redundant pairs and filler phrases.** Remove "each and every," "basic and fundamental," "in the process of," "due to the fact that" (write "because"), "at this point in time" (write "now").
10. **Avoid excessive qualification.** Don't stack hedges and caveats around a claim — state it, then note the one exception that matters if there is one.
11. **No unnecessary adverbs.** If cutting the adverb loses no meaning, cut it.
12. **Prefer concrete over abstract.** State the specific number, mechanic, or entity instead of an abstract category, when known.

## Application

- Applies to design docs (DOCS/), README, commit messages, PR descriptions, and any other prose Claude writes in this repo.
- Does not override a direct quote, existing proper noun, or established in-repo terminology.
- When editing existing text, fix violations of these rules in the sentences you touch; don't do a drive-by rewrite of untouched sections.
- Code identifiers and technical accuracy take priority over style when the two conflict.
