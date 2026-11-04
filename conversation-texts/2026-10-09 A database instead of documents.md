# A database instead of documents (2026-10-09)

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Private: never commit or share.

---

### Dani · 2026-10-09 17:42

is it possible to create a database and work by entering data into fields instead of working with a lot of docs containing text?

---

### Claude · 2026-10-09 17:43

Yes. The best fit depends on what's in the fields. Prose like design reasoning and research write-ups works better as text. Repeated, record-shaped content works well as fields. In this repo, that includes:

- **Budget tables** (startup capital, liquidity, income statement) are numbers that feed each other.
- **Decision log entries** have a date, decision, reason, status and owner.
- **Research hypotheses** have a claim, source, confidence and status.
- **Contacts and collaborations** have a person, status and next step.

There are four main ways to set this up:

1. **Structured files in the repo (YAML/CSV).** You edit the fields, and a script turns them into the .adoc pages. Everything stays in git, and I can read and edit it directly. The downside is that you still edit in a text editor, not in a form.
2. **A form-based page I publish for you (Artifact with a database).** You get a private web page with input fields and tables. I can read and write the same records from here, but the data lives on claude.ai, not in git.
3. **A spreadsheet or Airtable/Notion.** These have the best editing experience and suit the budgets especially well. The downside is that I can't reach the data from here unless you export it into the repo.
4. **Local SQLite with a small UI.** This has the most structure, but it's overkill at this stage.

**My recommendation:** use a spreadsheet for the budget sections and option 1 or 2 for the decision log and hypotheses. Keep the narrative docs as text.

Which docs feel most like "this should be a form"? With that, I can propose a field layout for them.

---

Written on 4 November 2026 from the backed-up log of session df22a6df-c4f4-4dd3-8674-67830cc3b994 (Tessera-repositories-tessera); this conversation had no text before.
