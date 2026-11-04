# Getting to know Tessera's files (2026-10-09 to 2026-10-14)

The messages of this conversation, Dani's and Claude's, without the code, tool calls and tool output. Its images are in images\2026-10-09 Getting to know Tessera's files\, shown or linked where they came. Private: never commit or share.

---

### Dani · 2026-10-09 18:08

please go through all the files in the tessera folder. docs, business and reports to familliarise yourself with tessera. the game i'm developing. the business plan etc

---

### Claude · 2026-10-09 18:09

Around 400KB of text in total. I'll read it all directly, starting with the docs.

Docs done. Next the business folder.

Now the reports.

I've read all the text. Let me look at the art too, since art is a core pillar.

Claude looked at [image 001](<../images/2026-10-09 Getting to know Tessera's files/001 Claude.png>)

Claude looked at [image 002](<../images/2026-10-09 Getting to know Tessera's files/002 Claude.jpg>)

Claude looked at [image 003](<../images/2026-10-09 Getting to know Tessera's files/003 Claude.jpg>)

Claude looked at [image 004](<../images/2026-10-09 Getting to know Tessera's files/004 Claude.jpg>)

I've read everything in DOCS/, business/ and reports/, plus the four images. The one thing I skipped is the legal-structure PDF, since it looks like a rendered copy of the .md next to it. Here's what I took away.

## The game
- **What it is:** a calm, stylized 3D mobile exploration game. You restore dormant Tesserae (pieces of a broken world) that an unexplained Void has drained.
- **Main loop:** explore → gather or solve a small puzzle → refine materials → restore something → the world visibly changes → explore further. There's no combat. Restoration happens in normal play, not in cutscenes.
- **Art is a core pillar:** the story is told through what's dormant versus what's restored. The look is painterly: hand-painted textures and very simple lighting. The refinery, ladybug and storyboard images make that concrete.
- **Systems:**
  - the Botanist's Kit, with containers that hold limited amounts by category;
  - tool gemstones;
  - lantern plants that become portals;
  - one Guardian robot per map, and nobody has decided what it does after it wakes up;
  - Flow Points: earned by walking or focus time, and optionally swapped for coins.
- **Biggest design gaps:** first, whether the loop holds people with no real-world layer at all. After that, what keeps Flow Points worth earning over time. The 28 Sep research also found the current currency-only link is the weakest kind of gamification.
- **Milestones:**
  - M1: a cheap schematic web prototype;
  - M2: one polished slice, no real-world layer;
  - M3: the real-world layer goes live;
  - a separate throwaway test app for step and focus tracking.

## Business and team
- The 13 business-plan files (00–12, plus a checklist) are almost all empty templates. They describe Dani Milli Studio in general, not Tessera.
- You sent the Almi form on 8 Oct asking for advice, not money.
- The 9 Oct legal report recommends:
  - a wholly owned Tessera AB, set up once contracts justify it;
  - Mattias as a possible working co-founder, not Skyfox as a hired studio;
  - Jousef as a paid, scoped freelancer;
  - a list of the Tessera work you already own, written now.
- Two open questions come before anything else: whether Mattias wants a real partner role, and how M1 gets paid for.

## Where the files disagree or are out of date
I haven't changed anything. Each item is a candidate fix if you want one:
1. **DOCS/README.md:**
   - it says "43 sections → 43 files", but there are 45;
   - it links to `.md` names, but the files are `.adoc`;
   - some names are wrong, such as "research-still-needed" for doc 17 and "open-questions" for doc 43.
2. **Container name:** doc 43 says "Goard" but doc 10 says "Canteen".
3. **Health data rules:** doc 45 says step data always counts as GDPR Article 9 health data. The legal report says it depends on what the data reveals and how it's used.
4. **Apple approval:** doc 28 doesn't mention that Apple has to approve the Family Controls entitlement before iOS focus tracking can work. The legal report treats that approval as a go/no-go item.
5. **Almi in docs 37 and 42:** both still say "strengthen evidence before approaching Almi", but you've already approached them. Doc 39 doesn't record the submission either.
6. **Legal report not in DOCS:** docs 38, 41 and 42 don't reflect any of its recommendations yet.
7. **Summary log:** the last entry is 24 Sep. It doesn't cover the 28 Sep and 8 Oct research, the Almi form or the legal report.
8. **Almi form:** the "Vem står bakom idén?" (who is behind the idea) field was left blank.
9. **Git:** the business plan and reports were moved out of DOCS/ into business/ and reports/ at the repo root. That move isn't committed yet.

---

### Dani · 2026-10-09 18:11

you can iignore those errors they aren't going to cause issues

---

### Claude · 2026-10-09 18:11

Got it, I'll leave those alone. What would you like to work on?

---

### Dani · 2026-10-09 18:14

please make add these to your permanent rules:
1. never make changes to files without asking first. 
2. if you're editing text, you can improve the phrasing, wording, grammar and structure as long as the context remains the same. if there are errors however ask, explain why, and recommend fixes.

---

### Claude · 2026-10-09 18:14

Both rules overlap with two existing memories, so I'll update those instead of adding duplicates.

Both rules are saved and will carry over to future sessions. I folded them into two similar memories that were already there rather than adding duplicates.

1. **Ask before changing any file:** this now applies to every file. Before it only covered "see if X can be filled in" requests. I'll show you what would change and wait for your go-ahead.
2. **Editing text:** I can improve phrasing, wording, grammar and structure as long as the meaning stays the same. If I spot an error, I'll ask you, explain why it's wrong, and recommend a fix.

One change from before: the old memory told me not to restructure your text. Your new rule allows it, so that limit is gone.

---

### Dani · 2026-10-09 18:14

which ones do they overlap?

---

### Claude · 2026-10-09 18:14

They overlapped with these two memories:

1. **"Ask before filling in documents"** (`feedback_ask_before_filling.md`) covered your rule 1. It said that when you ask me to "see if X can be filled in", I should propose the entries and wait for your approval. It came from today, when I wrote into eight business-plan files without asking. Your new rule makes it apply to every file change.

2. **"Keep supplied text; no rewrites or padding"** (`feedback_edit_scope_and_brevity.md`) covered your rule 2. It said I could fix grammar and wording but not restructure, condense or rewrite your text, and that I should flag any other improvement separately. It came from today, when I rewrote an adviser's report more than you asked. Your new rule now allows structure changes and spells out how I handle errors. The part about keeping replies short is still in it.

---

### Dani · 2026-10-09 18:17

great. let's begin then :)


can you please go through the numbered files in the business folder, and list edits or additions  by extracting the info from files in the docs as well as business folders, including the almi submission form as well as the business legal structure documents.

Please do not refer to the location of text in any field, but include the text itself. 

Tessera is a game I'm developing and has nothing to do with my webshop. but you can extract MY BACKGROUND INFO from my website www.danimilli.om and linkedin profile pasted below

Linkedin info:

Dani Milli
Verify in 2 minutes 

Illustrator & Concept Artist

Norrköping, Östergötland County, Sweden

·

Contact info


Dani Milli


Mälardalen University

Dani Milli Studio 

23 followers

·

19 connections


Open to
Add section

Enhance profile

Tell non-profits you are interested in getting involved with your time and skills

Get started


Suggested for you
Private to you

Add projects that showcase your skills

Show recruiters how you put your skills to use by adding projects to your profile.

Add a project

Highlight your skills from Dani Milli

Make it easier for recruiters to find you by showing where and how you used your skills.

Edit experience

Analytics
Private to you

0 profile views

Update your profile to attract viewers.

0 post impressions

Start a post to increase engagement.

Past 7 days

0 search appearances

Update your profile to appear more in search.

Show all
About
The bored girl in class, filling textbooks with doodles (and awfully, I might add). The nerd who followed in her father’s footsteps by earning a degree in IT (with honors that time!). The daydreamer, who against the odds, landed on her feet as an illustrator.

I travelled, moved, and experienced. I chose to see the importance of gender equality as I grew up in Saudi Arabia, the beauty in nature while playing on my bicycle in Switzerland, the benefits of diversity while studying art & design foundations in London, the value of story at an Imaginism in-house workshop in Montreal, the power of visual communication as an Illustration graduate from Mälardalen University, and finally, the healing effects of a positive mindset after a negative work experience in Dubai.

My studio and I share a 100 year old house with my husband and two dogs– On top of a hill in Sweden, and my journey continues.… more

Activity
23 followers

Create a post
You haven’t posted yet

Posts you share will be displayed here.

Show all
Experience

Dani Milli logo
Owner

Dani Milli · Full-time

Apr 2016 - Present · 10 yrs 7 mos

Norrköpings kommun, Östergötland County, Sweden · Remote

Saba Consultants logo
Storyboard Artist, Graphic Designer & Animator

Saba Consultants · Full-time

Mar 2016 - Feb 2017 · 1 yr

Dubai, United Arab Emirates

Thumbnail for Social Media Shorts
Social Media Shorts

Share your videos with friends, family, and the world

Education
Mälardalen University logo
Mälardalen University

Bachelor's degree, Information Design, Informative Illustration

Aug 2010 – Present

Skills (11)
Digital Painting

Concept Art

---

### Claude · 2026-10-09 18:19

I've read the numbered business files against DOCS, the Almi form, the legal-structure report, your LinkedIn text and your website (I used danimilli.com, since .om looked like a typo). I haven't edited anything. Below are the questions to settle first, then the proposed text for each file.

## Questions before I write anything

1. **Whose business plan is this?** The master file says it's the plan "for Dani Milli Studio (www.danimilli.com)". You've said Tessera has nothing to do with the webshop, and the legal report recommends keeping Dani Milli Studio separate from Tessera. The Almi form still uses Dani Milli Studio as the company name, since that's the registered sole trader. **Recommendation:** make it a plan for Tessera, developed under the Dani Milli Studio sole trader until a Tessera AB exists. Drop the website link from the opening line. My proposals below assume this.
2. **Your education:** LinkedIn says "Bachelor's degree, Information Design, Informative Illustration, Aug 2010 – Present". "Present" can't be right if you graduated, and your website says you're an Illustration graduate. LinkedIn also mentions an IT degree with honours but doesn't name the school or year. **Recommendation:** tell me the graduation year and the IT degree details.
3. **Start date:** LinkedIn says you've owned Dani Milli since April 2016. Is that the sole trader's registration date? I'd rather not assume it.
4. **VAT and F-skatt:** no file says whether you're VAT-registered or hold F-skatt. You'll need to tell me.
5. **Budgets (09–12):** no file has revenue or cost forecasts. I can only list the cost items with known prices.
6. **Market size:** nothing has researched it. Doc 43 lists it as an open question. I can research it with citations if you want.
7. **Periodic-review ratings (08):** these would be my judgement, not something I can extract. Should I propose them?

## 00 Master
- **Title:** TESSERA — BUSINESS PLAN
- **Intro:** "Business plan for Tessera, a mobile game developed by Dani Milli Studio, an enskild firma registered in Sweden. Tessera is separate from Dani Milli Studio's illustration and print-product business. The plan covers Tessera only."

## 01 Company Overview
- **Legal name:** Dani Milli Studio
- **Trading name:** Dani Milli Studio
- **Website:** remove, or "None yet for Tessera"
- **Organisation number:** 780522-2804
- **Owner:** Dania Almilli Syrén
- **Registered address:** Jursla Lindväg 5 A, 616 34 Åby
- **Add a section, "Planned structure":** "The legal structure recommendations advise forming a wholly owned Tessera AB once contracts, ownership or financing justify it. A substantial M1 development contract can justify it as much as M2 can. An AB needs 25,000 SEK in share capital and costs 2,400 SEK to register online. Until then, Tessera stays under the sole trader. Dani Milli Studio's existing business stays separate from Tessera."

## 02 Business Idea and USP
- **The idea:** "Dani Milli Studio is developing and will publish Tessera, an artistic, relaxing mobile game for adults who want their screen time to feel meaningful. It brings together two markets that are separate today: relaxing, artistic games, and apps for movement and focus. The game must be worth playing on its own. Players who want to can let real walking or focus time drive progress in the game world."
- **Target customer:** "Adults who already play relaxing, exploration-style mobile games with a strong artistic identity, such as Sky: Children of the Light or Alto's Odyssey. This overlaps with, but isn't limited to, people who already use a step counter or focus-timer app and find those apps feel like an obligation rather than fun. It excludes people who only want a fitness app and have no interest in games."
- **Customer need:** "Many people want to unwind with screen time that feels meaningful rather than passive scrolling. A 2025 survey of 277 cozy-game players found their strongest motives were moral self-reflection (play feels like a sensible use of time), agency, escapism, meaningful affect (feeling moved, awe) and narrative. Fitness and habit apps, meanwhile, often struggle to stay fun over time."
- **The offer:** "A relaxing, stylized 3D exploration game. Players restore a world broken into tiles (Tesserae) by an unexplained Void. They explore, gather, refine materials and solve gentle environmental puzzles. Each restoration visibly transforms the world: light, plant life, working machinery and new routes return. There's no combat and no way to lose. An optional feature turns walking or focus time into Flow Points, which feed progress in the game. Ordinary play stays worthwhile without it."
- **Why buy from this studio:** "Other products each solve half the problem. Artistic games like Sky and Alto's Odyssey offer relaxation through art and world but have no link to real habits. Habit apps like Habitica and Finch link real activity to rewards but lack game quality and artistic depth. Tessera aims to do both: real movement or focus time should visibly change the artistic world the player already cares about, not only produce a generic score or currency. Art is a core pillar, not decoration. The story is told through the world changing as it's restored."
- **How customers find the studio:** "Through the App Store and Google Play. The go-to-market plan isn't decided yet."

## 03 Founder Background
- **Industry experience:** "Owner of Dani Milli (illustration, surface pattern design and print products) since April 2016. Storyboard Artist, Graphic Designer & Animator at Saba Consultants in Dubai, March 2016 – February 2017. On Tessera: concept, creative direction, visual development, 2D, UI/UX art and design, and a significant share of the 3D work."
- **Experience as a business owner:** "Has run Dani Milli as a sole trader since April 2016. The business sells original artwork on print products and accessories through its own webshop, Redbubble and Spoonflower, and takes trade and custom orders."
- **Education:** "Bachelor's degree in Information Design, Informative Illustration, Mälardalen University. IT degree with honours [school and year needed]. Art and design foundation studies in London. In-house course at Imaginism Studios in Montreal, focused on storytelling and character design."
- **Personal finances:** "There isn't enough capital for a conventional studio arrangement. Development is planned in small, separately approved milestones so spending matches what can be paid for." [Add your own figures if you want.]
- **Household situation:** "Lives with husband and two dogs in a 100-year-old house in Sweden, which also serves as the studio."
- **Motivation:** "The idea came from a personal need. After finishing a cozy game, Dani looked for another in the same spirit and found none. Next came a search for a game that encourages movement, but none was fun enough to keep using. The wish was for a cozy game worth playing for its own sake that could also connect to real health and productivity."
- **Personal network:** "Mattias (Skyfox), with game-development and production experience. Jousef, a programmer. Almi for business advice. East Sweden Game and NyföretagarCentrum Norrköping for regional games-industry and start-up support."
- **Fit between founder and idea:** "Tessera's main reason to play is its art and world, which is Dani's core skill as an illustrator and concept artist. Storyboard and animation work adds experience in visual storytelling. An IT degree and ten years running a business add technical and commercial grounding. Programming, sound/music and character animation/rigging come from collaborators."
- **Partners and co-owners:** "None currently. Mattias is a possible working partner and producer, and Jousef a possible paid freelance developer. No arrangement, ownership or equity has been agreed."
- **Business ethics, quality and sustainability:** "No pay-to-win. No progression locked behind payment. No aggressive forced video ads. No selling ways to skip movement or focus time. No FOMO timers or limited-time punishments. Collect only the personal data needed, process it on the device where possible, and never share health data for advertising. Socially, the game supports mental recovery in a digital, often sedentary life. Economically, the studio grows organically rather than through fast scaling or early external funding. Environmentally, a purely digital product has a low direct impact, and the game has no other environmental benefits at present."

## 04 Market and Customers
- **Industry:** "Mobile games, specifically relaxing or 'cozy' exploration games, sitting next to movement, fitness and focus apps."
- **Customers and confirmed work:** "None yet. Tessera hasn't been built. Development runs in three stages: M1 (a schematic browser prototype of the mechanics), M2 (one polished playable area) and M3 (the real-world layer live for real users)."
- **Typical customer:** the same text as Target customer in 02, plus: "Players fall into three groups. Game-first players mainly want the game. Combined-value players value both the game and the movement/focus layer. Lifestyle-first players mainly want the movement/focus tools. Tessera needs only the first two groups to be viable."
- **Market size:** "Not yet researched. The size and value of the game-first and combined-value groups is an open question."
- **Reaching the market:** "App store distribution. Audience research before launch: interviews, a disguised concept survey and a disguised ad smoke test."
- **Packaging:** "Not decided. Options under consideration: paid environmental theme packs for restored areas (for example a bioluminescent forest or cherry blossoms); special flora and wildlife; expanded focus tools; extra sanctuary or world areas as one-time purchases; and a 'Mindful Growth Pass' subscription whose rewards never expire. Possible later options: corporate wellness and educational licensing."
- **Payment:** "Through Apple App Store and Google Play purchases. On ordinary app-store sales, the marketplace accounts for VAT on the sale to the consumer."
- **Purchase frequency and size:** "Not yet known."
- **Competitors:**
  - "Sky: Children of the Light: the closest comparable, a calm, restoration-driven exploration game with no combat, but no link to real habits."
  - "Alto's Odyssey: art-led relaxing play, but no habit link."
  - "Genshin Impact and Animal Crossing: New Horizons: large exploration and cozy games. Animal Crossing's pull comes from world-building, not story."
  - "Kinder World: the closest game with a real-world wellbeing layer."
  - "Habitica and Finch: gamified habit apps that link real activity to rewards but lack game quality and artistic depth."
  - "Apple Fitness and Google Fit: track activity with no emotional or creative reward."
  - "StepN: a move-to-earn app that built everything around rewarding activity, with no artistic depth, and collapsed."
  - "Pokémon GO: shows a game can raise real activity, though novelty-driven gains faded within about three months."

## 05 Pricing
- **Cost basis:** "Not yet estimated. Each milestone needs its own estimate before work starts. The developer and Mattias agreed to set aside roughly 10–15% of development for balancing once systems are playable."
- **Other costs:** "Software licences (Unity Personal is free below US$200,000 in revenue or funding over 12 months), legal and accounting advice, trademark registration, and audience research tools."
- **Price:** "Not decided. The game's monetization will follow the business-ethics rules in Founder Background."
- **Customer value:** "Paid content changes how restored places look and feel, which is the game's main reward, without changing player power."
- **Competitor pricing:** "Not yet researched. The planned survey includes a four-question price-sensitivity exercise (Van Westendorp), which will be checked against what similar games actually charge."

## 06 Operations and Administration
- **Intro:** add "Dani doesn't take on programming or production management. Those roles go to collaborators."
- **Sales and delivery, Staff:** "None. Programming is planned as paid, scoped freelance work."
- **Contracts:** "Needed before M1: a scoped freelance development contract (scope, payment milestones, assignment of code rights, repository access controlled by Tessera, handover and termination terms); a short preliminary collaboration agreement with Mattias; confidentiality agreements; and a licence for any Skyfox tool used. Check each contractor's F-skatt status before paying them."
- **Add a line for advisers:** "Commercial/IP lawyer, accountant/tax adviser, privacy specialist and trademark specialist, hired in stages as needed."

## 07 SWOT
This file can't be filled by copying. It's my analysis built from the docs, so please check it.
- **Strengths:** "An art-led world where art is a core pillar. The founder combines illustration, concept art, storyboarding and IT. The game stands on its own, with the real-world layer optional. Staged milestones test one risk at a time. A research base of cited studies supports the design."
- **Weaknesses:** "No in-house programming, sound or animation. Limited capital. Team roles and agreements aren't settled. The long-term use of Flow Points is unsolved. Using scenery as the main reward creates a large environment-art workload."
- **Opportunities:** "No product combines an artistic game with a real-world habit layer at this depth. Possible corporate wellness and educational licensing. Possible grants: Creative Europe MEDIA (deadline 2 February 2027, narrative games only), plus educational and digital-health programmes. Regional support from East Sweden Game. A public M2 release could produce real retention data."
- **Threats:** "Step and focus tracking may not work reliably on iOS and Android, and Apple must approve the Family Controls entitlement before automatic iOS focus tracking can work. GDPR and app-store rules on health data. EU enforcement on in-game virtual currencies (Konsumentverket, 30 September 2026). Reward-only gamification weakens motivation over time. Games with real-world rewards often see novelty fade quickly. The Tessera trademark hasn't been checked."
- **Response plan:**
  - "Test the game's quality first (M1, M2) before building the habit layer."
  - "Test platform tracking in a separate throwaway app early."
  - "Keep the currencies Flow Points and coins separate from any paid currency."
  - "Get legal and privacy review at each stage."
  - "Commit to spending one milestone at a time."

## 08 Start Decision and Timeline
Milestones table:

| Date | Milestone | Status |
|---|---|---|
| 22 Sep 2026 | GDD and TDD finalized and sent to Mattias and Jousef | Done |
| 24 Sep 2026 | M1/M2/M3 milestone split agreed | Done |
| 8 Oct 2026 | Almi advisory request submitted | Done |
| 9 Oct 2026 | Business and legal structure recommendations received | Done |
| TBD | Almi consultation | Planned |
| TBD | Clarify Mattias's role and contribution | Open |
| TBD | Inventory of Tessera work Dani already owns | Open |
| TBD | Realistic M1 development estimate | Open |
| TBD | Step/focus tracking test app | Planned |
| TBD | M1 mechanics prototype | Planned |
| TBD | M2 polished slice | Planned |
| TBD | M3 real-world layer live | Planned |
| 2 Feb 2027 | Creative Europe MEDIA deadline, only if Skyfox qualifies | Optional |

## 09–12 Budgets
The sources have no figures for sales, liquidity or the income statement. The only known amounts are:
- AB: 25,000 SEK share capital, plus 2,400 SEK to register online.
- Trademark: 2,700 SEK for the first class, plus 1,000 SEK for each extra class.
- Research: Lyssna at about 2,000 SEK a month.
- Research: Prolific participant pay plus a 33–43% fee, for 24 interviews and 600 survey answers.
- Research: ad spend for the smoke test.
- Almi loans, if ever needed: Mikrolån up to 250,000 SEK, or Innovationslån 50,000–500,000 SEK.

I'd leave the tables empty until you have estimates.

## 13 Team Decision Checklist
**Items to tick,** because the 24 September milestone decision already settled them:
- old M1 becomes M2;
- new M1 is a schematic prototype;
- combat stays out of scope;
- the real-world layer stays out of the playable slice.

**New items to add,** taken from the legal report:
- [ ] Create the inventory of Tessera work Dani already owns.
- [ ] Decide whether to assign or license that existing work to a future Tessera AB, with legal and tax advice.
- [ ] Check contractors' F-skatt status before paying them.
- [ ] Put responsibility for Unity licences in the development agreement.
- [ ] Write a short preliminary agreement stating that exploratory work gives no one ownership, revenue rights or authority to spend on Tessera's behalf.
- [ ] Get Apple's approval for the Family Controls entitlement, as part of the tracking test app.
- [ ] Assess whether a data protection impact assessment (DPIA) is needed before testing the real-world feature with real users.
- [ ] Start a register of every third-party asset and software licence used.
- [ ] Run a trademark search for "Tessera".
- [ ] Ask Mattias whether Skyfox has a commercially released game from 2024 onwards (for Creative Europe).

Which questions can you answer, and which sections do you want me to write in?

---

### Dani · 2026-10-09 18:20

the studio is mine. so the owner is dani milli studio which is my company. but the game is a new project belonging to me as well as the webshop. they aren't linked though

---

### Claude · 2026-10-09 18:20

Understood: Dani Milli Studio is your company, and it owns two separate projects, the webshop and Tessera. That changes my proposals for files 00 and 01:

## 00 Master
- **Title:** DANI MILLI STUDIO — TESSERA BUSINESS PLAN
- **Intro:** "Business plan for Tessera, a mobile game developed by Dani Milli Studio, an enskild firma registered in Sweden. Dani Milli Studio also runs a webshop for illustration and print products. The two projects aren't linked, and this plan covers Tessera only."

## 01 Company Overview
- **Legal name:** Dani Milli Studio
- **Trading name:** Dani Milli Studio
- **Website:** https://www.danimilli.com
- **Owner:** Dania Almilli Syrén
- **Organisation number:** 780522-2804
- **Registered address:** Jursla Lindväg 5 A, 616 34 Åby
- **Add a section, "Projects":** "Dani Milli Studio runs two separate projects: Tessera, a mobile game in development, and a webshop selling illustration, surface pattern design and print products. They share the company but not customers, products or finances."

The planned-structure section stays as I proposed it. The legal report recommends a separate Tessera AB once contracts or funding justify one, which fits keeping the two projects apart.

Also worth knowing: the 09–12 budget tables cover the whole sole trader by default, so they'd mix in the webshop. I'd add a note that their figures are for Tessera only, unless you want them to cover the whole company.

The other questions from my last message are still open: your education details, the start date, VAT/F-skatt, market-size research and the review ratings.

---

### Dani · 2026-10-09 18:22

the webshop doesn't need to be mentioned. it's just part of my background story. it's not relevant to tessera

---

### Claude · 2026-10-09 18:22

Got it. The webshop comes out of the plan. It stays only in your founder background.

## 00 Master
- **Title:** DANI MILLI STUDIO — TESSERA BUSINESS PLAN
- **Intro:** "Business plan for Tessera, a mobile game developed by Dani Milli Studio, an enskild firma registered in Sweden."

## 01 Company Overview
- **Legal name:** Dani Milli Studio
- **Trading name:** Dani Milli Studio
- **Website:** remove the line (the site is the webshop)
- **Owner:** Dania Almilli Syrén
- **Organisation number:** 780522-2804
- **Registered address:** Jursla Lindväg 5 A, 616 34 Åby
- **Planned structure:** as I proposed it before, but with the webshop sentence removed.

## 03 Founder Background
These two entries mention your shop as part of your background, so I've kept the wording neutral:
- **Industry experience:** "Owner of Dani Milli Studio since April 2016, working in illustration and surface pattern design. Storyboard Artist, Graphic Designer & Animator at Saba Consultants in Dubai, March 2016 – February 2017. On Tessera: concept, creative direction, visual development, 2D, UI/UX art and design, and a significant share of the 3D work."
- **Experience as a business owner:** "Has run Dani Milli Studio as a sole trader since April 2016. The studio has sold original artwork on products through its own shop, Redbubble and Spoonflower, and taken trade and custom orders."

I've also dropped the note about separating the webshop from the budget tables, since it no longer applies.

These are still open: your education details, the start date, VAT/F-skatt, market-size research, and whether I should propose the review ratings.

---

### Dani · 2026-10-09 18:27

no you're not "thinking". 
please go over all the files again. all files in docs, the almi submission form, business legal structure and the team decisions checklist. some reserch files are outdated. for example, the lyssna expences became irrelevant after m2 became m1. there are dates showing what was the latest and what became obsolete. 
You're not using any reasoning.

---

### Claude · 2026-10-09 18:28

You're right. I treated every file as equally current and didn't check dates. Below I've worked out what's current from the dates, then redone the proposals. I still haven't changed any files.

## What the dates show is current

**Audience research before a prototype is out.** I was wrong to use it.
- **22–23 Sep:** the hypothesis reset and the two target-group documents planned paid research *before* anything was built: Lyssna/Prolific interviews, a 600-person survey, Van Westendorp pricing and an ad smoke test. At that point "M1" meant what is now M2.
- **24 Sep:** the milestone split replaced that plan. Free desk research and a few real conversations now. Paid research waits until a prototype or slice exists. Whether people want the real-world layer gets answered by M3's live data. The checklist says the same: "Do only light/free audience research before M1."
- **8 Oct:** the Almi form confirms it: "tester med målgruppen görs med spelbara versioner av spelet" (testing with the target group is done with playable versions of the game).
- **What I'm dropping:** Lyssna and Prolific costs, ad spend, the survey's pricing exercise, and "interviews, survey and smoke test" as a channel.
- **Question:** the 8 Oct art report still says "the Group A interviews will answer that." I'm treating that as left over from the old plan. Is that right?

**Almi.** Docs 37 and 42 say to build evidence *before* approaching Almi. The 8 Oct form overtook that: it asks for advice on structure, IP and agreements, and says "Jag söker inte finansiering i nuläget" (I'm not seeking financing at this stage). The 9 Oct legal report is the latest word on structure, Mattias, Skyfox and Jousef.

**Monetization.** The Almi form (8 Oct) is the latest framing: optional purchases that give no game advantage, for example visual themes and new areas. The exact model isn't decided, with wellness and education licensing possible later. Doc 36's other options (ads, sponsorship and so on) are still listed as under consideration, so I mention them second.

**Balancing allowance.** I wrongly said "the developer and Mattias agreed". Jousef alone agreed to 10–15%, and it was for the slice now called M2. His earlier estimate also came before the M1 split, so M1 needs a new estimate. The legal report says the same.

**Revenue timing.** Doc 33 says M3 is where revenue could start. A public M2 release is an option, not a plan. M1 is a browser prototype, not an app-store release.

**Funding.** You aren't seeking financing now. The legal report says to keep Creative Europe out of the assumed funding plan.

---

## Proposed edits

### 00 Master
- **Title:** DANI MILLI STUDIO — TESSERA BUSINESS PLAN
- **Intro:** "Business plan for Tessera, a mobile game developed by Dani Milli Studio, an enskild firma registered in Sweden."

### 01 Company Overview
- **Legal name:** Dani Milli Studio
- **Trading name:** Dani Milli Studio
- **Website:** remove the line
- **Legal form:** Enskild firma (Swedish sole trader) (unchanged)
- **Organisation number:** 780522-2804
- **Owner:** Dania Almilli Syrén
- **Start date:** April 2016 *(LinkedIn date; please confirm)*
- **Registered address:** Jursla Lindväg 5 A, 616 34 Åby
- **New section, "Planned structure":** "Tessera is developed under Dani Milli Studio for now. Forming a wholly owned Tessera AB is recommended once contracts, ownership or financing justify it. Signing a substantial paid M1 development contract would be enough to justify it. An AB needs 25,000 SEK in share capital and costs 2,400 SEK to register online."

### 02 Business Idea and USP
- **The idea:** "Dani Milli Studio develops and will publish Tessera, an artistic, relaxing mobile game for adults who want their screen time to feel meaningful. It brings together two markets that are separate today: relaxing, artistic games, and apps for movement and focus. The game must be worth playing on its own. Players who want to can let real walking or focus time drive progress in the game world. Tessera is built in stages: first a prototype, then a finished playable part, and last the link to real-world habits. Each stage is tested before the next is built."
- **Target customer:** "Players who already enjoy relaxing exploration games with a strong artistic identity, such as Sky: Children of the Light or Alto's Odyssey. Also people who use habit or fitness apps but find them a chore rather than fun. Not people who only want a fitness app and have no interest in games."
- **Customer need:** "Many people want to unwind with screen time that feels meaningful, not passive scrolling. Research on players of relaxing games shows they mainly look for freedom to play at their own pace, a break from everyday life, moments that move them, a story, and a sense that their time is well spent. Fitness and habit apps, meanwhile, often struggle to stay fun over time."
- **The offer:** "A relaxing, stylized 3D exploration game. Players restore a world broken into tiles (Tesserae) by an unexplained Void. They explore, gather, refine materials and solve gentle environmental puzzles. Each restoration visibly transforms the world: light, plant life, working machinery and new routes return. There's no combat. Players can earn Flow Points through optional walking or focus time and use them for progress in the game. Ordinary play stays worthwhile without them."
- **Why buy from this studio:** "Other products each solve half the problem. Artistic games like Sky and Alto's Odyssey offer relaxation through art and world but have no link to real habits. Habit apps like Habitica and Finch link real activity to rewards but lack game quality and artistic depth. None does both at the same depth. Tessera aims for real movement or focus time to visibly change the artistic world the player already cares about, not just give a generic score or currency. How deep that link must be to feel meaningful is an open design question. StepN, by contrast, built everything around rewarding activity with no artistic depth, and collapsed."
- **How customers find the studio:** "The game will be distributed through the App Store and Google Play. Go-to-market isn't decided."

### 03 Founder Background
- **Industry experience:** "Owner of Dani Milli Studio since April 2016, working in illustration and surface pattern design. Storyboard Artist, Graphic Designer & Animator at Saba Consultants in Dubai, March 2016 – February 2017. On Tessera: concept, creative direction, visual development, 2D, UI/UX art and design, and a significant share of the 3D work."
- **Experience as a business owner:** "Has run Dani Milli Studio as a sole trader since April 2016. The studio has sold original artwork on products through its own shop, Redbubble and Spoonflower, and taken trade and custom orders."
- **Education:** "Bachelor's degree in Information Design, Informative Illustration, Mälardalen University. IT degree with honours *[school and year needed]*. Art and design foundation studies in London. In-house course at Imaginism Studios in Montreal, focused on storytelling and character design."
- **Personal finances:** "There isn't enough capital for a conventional studio arrangement, and how M1's programming will be paid for is still unresolved. Development is planned in small, separately approved milestones so spending matches what can be paid for. Unpaid labour, loans and grants aren't assumed."
- **Household situation:** "Lives with husband and two dogs in a 100-year-old house in Sweden, which also serves as the studio."
- **Motivation:** "The idea came from a personal need. After finishing a cozy game, Dani looked for another in the same spirit and found none. Next came a search for a game that encourages movement, but none was fun enough to keep using. The wish was for a cozy game worth playing for its own sake that could also connect to real health and productivity."
- **Personal network:**
  - "Mattias (Skyfox), with game-development and production experience."
  - "Jousef, a programmer."
  - "Almi, for advice on structure, IP and agreements."
  - "East Sweden Game, for regional games-industry advice."
  - "NyföretagarCentrum Norrköping, for start-up guidance."
- **Fit between founder and idea:** "Tessera's main reason to play is its art and world, which is Dani's core skill as an illustrator and concept artist. Storyboard and animation work adds visual-storytelling experience. An IT degree and ten years running a business add technical and commercial grounding. Programming, production management, sound/music and character animation/rigging come from collaborators."
- **Partners and co-owners:** "None. Mattias is a possible working partner and producer. Jousef is a possible paid freelance developer. No arrangement, ownership or equity has been agreed."
- **Business ethics, quality and sustainability:**
  - "No paid advantages: no progression locked behind payment, no forced video ads that interrupt play, no selling ways to skip movement or focus time, and no FOMO timers."
  - "Collect only the personal data needed, process it on the device where possible, and never use health data for advertising."
  - "Socially, the game is built to be accessible without aggressive monetization, and it supports mental recovery in a digital, often sedentary life."
  - "Economically, it's a small Swedish studio with low start-up costs, built organically rather than through fast scaling or early external funding."
  - "Environmentally, a purely digital product has low direct impact, and it has no other environmental benefits at present."

### 04 Market and Customers
- **Industry:** "Mobile games, specifically relaxing exploration games with a strong artistic identity, sitting next to movement and focus apps."
- **Customers and confirmed work:** "None yet, because the game isn't built. M1 is a schematic browser prototype, M2 a polished playable area, and M3 makes the real-world layer live for real users."
- **Typical customer:** the Target customer text from 02, plus: "Players fall into three groups. Game-first players mainly want the game. Combined-value players value both the game and the movement/focus layer. Lifestyle-first players mainly want the tools. Tessera needs only the first two groups."
- **Market size:** "Not yet researched."
- **Reaching the market:** "Before launch: free desk research and conversations with potential players now; outside players test the M1 browser prototype; external players test M2. Paid research waits until there's a playable build. Whether players want the real-world layer is measured from M3's live use."
- **Packaging:** "Not decided. The plan is optional purchases that give no game advantage, such as visual themes for restored areas and new areas of the game world. Also under consideration: special flora and wildlife, expanded focus tools, a subscription pass whose rewards never expire, and optional ads. Possible later: licensing to employers and schools."
- **Payment:** "Through Apple App Store and Google Play purchases. On ordinary app-store sales, the marketplace accounts for VAT on the sale to the consumer."
- **Purchase frequency and size:** "Not yet known."
- **Competitors:**
  - "Sky: Children of the Light: the closest comparable, calm and restoration-driven with no combat, but no link to real habits."
  - "Alto's Odyssey: art-led relaxing play, but no habit link."
  - "Habitica and Finch: link real activity to rewards but lack game quality and artistic depth."
  - "Apple Fitness and Google Fit: track activity with no emotional or creative reward."
  - "StepN: built everything around rewarding activity with no artistic depth, and collapsed."
  - "Kinder World: the closest game with a real-world wellbeing layer."
  - "Pokémon GO: shows a game can raise real activity, though the activity gains faded within about three months."

### 05 Pricing
- **Cost basis:** "Not yet estimated. M1 needs its own estimate before any contract is signed. Each later milestone gets a new estimate based on the previous one's results. Plan on setting aside roughly 10–15% of development for balancing once systems are playable."
- **Other costs:** "Legal and accounting advice, using fixed-fee reviews where possible. Trademark registration. Unity licences: Unity Personal is free below US$200,000 in revenue or funding over 12 months. Apple and Google developer accounts."
- **Price:** "Not decided."
- **Customer value:** "Paid content changes how restored places look and feel, which is the game's main reward, without changing player power."
- **Competitor pricing:** "Not yet researched."

### 06 Operations and Administration
- **Intro, add:** "Dani doesn't take on programming or production management."
- **Staff:** "None. Programming is planned as paid, scoped freelance work."
- **Contracts:** "Needed before M1:
  - a scoped freelance development contract covering scope, payment milestones, assignment of code rights, repository access controlled by Tessera, handover and termination;
  - a short preliminary agreement with Mattias;
  - confidentiality agreements;
  - a licence for any Skyfox tool used.

  Check each contractor's F-skatt status before paying them."
- **New line, "Advisers":** "Commercial/IP lawyer, accountant/tax adviser, privacy specialist and trademark specialist, brought in stage by stage as needed."

### 07 SWOT
This is my analysis built from the docs, so please check it.
- **Strengths:**
  - "An art-led world where art is a core pillar."
  - "A founder with illustration, concept art, storyboarding and IT experience."
  - "A game that stands on its own."
  - "Staged milestones that test one risk at a time."
  - "A research base of cited studies."
- **Weaknesses:**
  - "No in-house programming, sound or animation."
  - "Limited capital."
  - "Team roles and agreements aren't settled."
  - "No lasting reason yet to keep earning Flow Points."
  - "Using scenery as the main reward creates a large environment-art workload."
- **Opportunities:**
  - "No product combines an artistic game with a real-world habit layer at the same depth."
  - "Possible licensing to employers and schools later."
  - "Regional support from East Sweden Game."
  - "A public M2 release could give real player data before M3."
- **Threats:**
  - "Step and focus tracking may not work reliably on phones."
  - "Apple must approve the Family Controls entitlement before automatic iOS focus tracking can work."
  - "Health-data rules under GDPR and the app stores."
  - "EU enforcement against unfair in-game currency practices."
  - "Reward-only mechanics weaken motivation over time."
  - "The Tessera trademark hasn't been checked."
- **Response plan:**
  - "Prove the game first (M1, M2) before building the habit layer."
  - "Test tracking early in a separate throwaway app."
  - "Keep earned currencies separate from any paid currency."
  - "Commit spending one milestone at a time."
  - "Get legal review before signing binding agreements."

### 08 Start Decision and Timeline

| Date | Milestone | Status |
|---|---|---|
| 22 Sep 2026 | GDD and TDD sent to Mattias and Jousef | Done |
| 24 Sep 2026 | M1/M2/M3 milestone split agreed | Done |
| 8 Oct 2026 | Almi advisory request submitted | Done |
| 9 Oct 2026 | Business and legal structure recommendations received | Done |
| TBD | Almi consultation | Planned |
| TBD | Clarify Mattias's role and contribution | Open |
| TBD | Inventory of existing Tessera IP | Open |
| TBD | M1 cost estimate and maximum budget | Open |
| TBD | Step/focus tracking test app | Planned |
| TBD | M1 mechanics prototype | Planned |
| TBD | M2 polished slice | Planned |
| TBD | M3 real-world layer live | Planned |

I left out the Creative Europe deadline, since that funding route isn't assumed.

### 09–12 Budgets
- **Note in 09:** "No sales are expected before M3, or before M2 if it's released publicly. M1 is a browser prototype and earns nothing."
- **Known cost amounts:**
  - AB share capital: 25,000 SEK (this becomes company capital, not a fee)
  - AB registration: 2,400 SEK
  - Trademark: 2,700 SEK for the first class, plus 1,000 SEK for each extra class
- **Financing table in 10:** Own capital only. No loans, since you aren't seeking financing.
- Everything else stays empty until M1 has an estimate.

### 13 Team Decision Checklist
**Tick:**
- §9 "Confirm the new M1 as a cheap schematic/mechanics prototype"
- §9 "Confirm that the old M1 becomes M2"
- §9 "Confirm combat remains outside the current scope"
- §9 "Keep the real-world movement/focus layer out of the playable slice for now"
- §10 "Do only light/free audience research before M1"
- §10 "Delay paid quantitative audience research until there is something stronger to test"

The milestone split on 24 September decided all six. If the checklist is meant to collect written confirmation from the team, leave them unticked.

**Add to existing sections:**
- §1: "[ ] Set the maximum M1 budget and who approves extra costs or scope changes."
- §1: "[ ] Write a short preliminary agreement stating that exploratory cooperation gives no one ownership, revenue rights or authority to spend on Tessera's behalf."
- §2: "[ ] Record the inventory as a dated document listing each asset, its creator, date, original file and any existing rights."
- §2: "[ ] Decide whether to assign or license the existing IP to a future Tessera AB, with legal and tax advice."
- §5.1: "[ ] Confirm F-skatt status before engaging and paying."
- §5.1: "[ ] Agree who pays for Unity licences."
- §9: "[ ] Include Apple's Family Controls entitlement approval in the technical spike."

**New section, "12. Before public testing or launch":**
- "[ ] Assess whether a data protection impact assessment is needed before real users test the real-world feature."
- "[ ] Keep a register of third-party assets and software licences."
- "[ ] Run a trademark search for 'Tessera'."
- "[ ] Get a consumer-law review before adding any purchasable currency."

---

**Still need from you:**
- Your education details: the IT degree's school and year, and when you finished at Mälardalen.
- Whether April 2016 is the right start date.
- Your VAT and F-skatt status.
- Whether I should research market size.
- Whether to confirm that the "Group A interviews" mention is outdated.

---

### Dani · 2026-10-09 18:43

Market size: "Not yet researched."
I this about how many similar apps already exist? if yes then the game is unique, meaning the market isn't saturated at all.

Packaging: "Not decided. The plan is optional purchases that give no game advantage, such as visual themes for restored areas and new areas of the game world. Also under consideration: special flora and wildlife, expanded focus tools, a subscription pass whose rewards never expire, and optional ads. Possible later: licensing to employers and schools."
Advertising should be present or no revenue exists from m2. where does is say there is no advertising? it won't be suffocating yes, butit should exist.


Competitors:
"Sky: Children of the Light: the closest comparable, calm and restoration-driven with no combat, but no link to real habits."
"Alto's Odyssey: art-led relaxing play, but no habit link."
"Habitica and Finch: link real activity to rewards but lack game quality and artistic depth."
"Apple Fitness and Google Fit: track activity with no emotional or creative reward."
"StepN: built everything around rewarding activity with no artistic depth, and collapsed."
"Kinder World: the closest game with a real-world wellbeing layer."
"Pokémon GO: shows a game can raise real activity, though the activity gains faded within about three months."


Aren't these inspirations or examples? this app has no competitors because it's a first. correct me if i'm wrong. 


Weaknesses:
"No in-house programming, sound or animation."
"Limited capital."
"Team roles and agreements aren't settled."
"No lasting reason yet to keep earning Flow Points."
"Using scenery as the main reward creates a large environment-art workload."


yeah these ones are speculation except for the first one. another is mattias collboration/partnership still undecided.
I have capital but no need to disclose that. perhaps just include my personal savings or whatever professional wording you have for that.  hiring skyfox is the only option out of the question.


Still need from you:
Your education details: the IT degree's school and year, and when you finished at Mälardalen.
Whether April 2016 is the right start date.
Your VAT and F-skatt status.
Whether I should research market size.
Whether to confirm that the "Group A interviews" mention is outdated.
it degree date not important. info design date is 2015
no
i have a company already so what do you think my f skatt status is?
go ahead
no need to mention the interviews at all. you're only editing the numbered files in business and nothing else.

---

### Claude · 2026-10-09 18:45

Answers to your points first, then the revised text. I haven't changed any files.

## Market size and competitors: I think you're wrong on two points

**1. Market size isn't how many similar apps exist.** It's how many potential customers there are and how much they spend. Having no direct rival doesn't make a market big. It can also mean you have to create the demand yourself.

**2. "No competitors" isn't accurate, and it would hurt you with Almi or a bank.** Advisers read "no competitors" as "hasn't looked." I also found two apps that each do one half of Tessera's real-world link:
- **Pikmin Bloom** (Niantic/Nintendo): walking grows Pikmin and plants flowers in a visible garden. Estimated player spending passed US$100M in total by late 2025.
- **Forest:** focus time grows a virtual tree, which withers if you leave the app. The developer claims 60 million users.

Neither is an artistic exploration game worth playing on its own, and neither combines walking *and* focus. That's what makes Tessera the first of its kind, not the absence of competitors.

**My recommendation:** rename the heading "Competitors and alternatives."
- **Direct competitors:** Pikmin Bloom, Forest and Kinder World, because they compete on the real-world link.
- **Alternatives for the same time and money:** Sky and Alto's Odyssey on the game side; Habitica, Finch, Apple Fitness and Google Fit on the habit side.
- **Leave out:** StepN and Pokémon GO. They're examples, not competitors.

## Advertising
Nothing in the files rules ads out. Here's what they say:
- Doc 36 lists "optional rewarded ads" and "one-time ad removal" as options, and its guardrail only bans "aggressive forced video ads that interrupt play."
- I wrote "optional ads" under "also under consideration," which made them sound minor. That was my wording, not yours.
- The Almi form says purchases "t.ex." (for example), and that the exact model isn't decided. So adding ads doesn't contradict the form.

**Ads earning from M2 means M2 is a public app-store release.** The docs still treat a public M2 as an option, not a plan. Is a public M2 now decided? Two smaller points:
- M2 has no real-world layer, so no health data is involved.
- Once health data arrives in M3, Apple forbids using HealthKit data for ads.

## Weaknesses
I've cut the list to your two. Two of the ones you cut aren't speculation, though:
- The missing long-term use for Flow Points is the single biggest open design gap in the docs.
- Doc 18 names environment-art workload as the main production risk.

Whether either belongs in a business SWOT is your call. Doc 43 also lists Jousef's final engagement as open, if you want that included.

## Your other answers
- **Education:** updated. Your IT degree has no school or date.
- **Start date:** what is the right date? I've left it TBD until you tell me.
- **F-skatt:** you're right that it's almost certainly F-skatt. One catch: an enskild firma can also have FA-skatt, if you're employed at the same time. I've put F-skatt; correct me if it's FA.
- **VAT:** your webshop sells products, so I'd expect you're VAT-registered. Firms with turnover under 120,000 SEK can be exempt since 2025, so I can't be sure. Please confirm.

---

## Revised text

**01, VAT status:** "Momspliktig (VAT-registered)." *(Confirm.)*
**01, Registration checklist:** tick "Registered with Skatteverket for F-skatt". Tick the moms (VAT) line once you've confirmed it.
**01, Start date:** TBD

**02, Why buy from this studio, add:** "Pikmin Bloom and Forest show that walking or focus time can visibly grow something in an app. Neither is a full exploration game worth playing on its own, and neither combines movement and focus."

**03, Education:** "Bachelor's degree in Information Design, Informative Illustration, Mälardalen University, 2010–2015. IT degree, with honours. Art and design foundation studies in London. In-house course at Imaginism Studios in Montreal, focused on storytelling and character design."

**03, Personal finances:** "Development is financed with the owner's own capital. Spending is committed one milestone at a time."

**04, Market size:**
"No research firm measures Tessera's exact segment. The related markets:
* Mobile games earned US$113.3 billion worldwide in 2025, 56% of all games spending (Newzoo).
* Estimates for cozy games range from about US$1 billion to US$1.9 billion a year (2024–2025), depending on how each firm defines 'cozy'.
* Most cozy players are adults aged 25–44, and 60% are women (Quantic Foundry).
* Both halves of Tessera have proven demand. Sky: Children of the Light passed 270 million mobile downloads. Pikmin Bloom, where walking grows flowers, passed an estimated US$100 million in player spending. Forest, where focus time grows trees, reports 60 million users."

**04, Packaging:** "Not decided. Revenue is planned from:
* advertising that doesn't interrupt play, such as optional rewarded ads, with a one-time purchase to remove ads;
* optional purchases that give no game advantage, such as visual themes for restored areas and new areas of the game world.

Also under consideration: special flora and wildlife, expanded focus tools, and a subscription pass whose rewards never expire. Possible later: licensing to employers and schools."

**04, Competitors and alternatives:**
* "Direct competitors on the real-world link: Pikmin Bloom (walking grows flowers in a garden), Forest (focus time grows trees) and Kinder World (a game with a wellbeing layer). None is a full artistic exploration game, and none combines movement and focus."
* "Alternatives on the game side: Sky: Children of the Light and Alto's Odyssey, which are artistic, relaxing and have no habit link."
* "Alternatives on the habit side: Habitica and Finch, which reward real activity but lack game quality and artistic depth; and Apple Fitness and Google Fit, which track activity with no emotional or creative reward."

**07, Strengths, add:** "Funded with the owner's own capital, with no loans or outside investors."
**07, Weaknesses:**
* "No in-house programming, sound or animation."
* "Partnership with Mattias isn't decided."

**07, Opportunities, add:** "A growing cozy-games market, worth about US$1 billion or more a year."

**09, Note:** depends on your answer about a public M2. If yes: "Revenue starts with M2's public release, from advertising and optional purchases. M1 is a browser prototype and earns nothing."

**10, Financing:** "Own capital (owner contribution)": amount not disclosed. No loans.

Sources:
- [Newzoo via GamesBeat: global games revenue passed $200B in 2025](https://gamesbeat.com/business/global-games-revenue-breached-200b-in-2025-newzoo/)
- [PocketGamer.biz: mobile generated $113bn](https://www.pocketgamer.biz/global-games-revenue-surpasses-200bn-for-the-first-time-mobile-generates-113bn/)
- [IndexBox: cozy games market and player demographics](https://www.indexbox.io/blog/cozy-games-market-surpasses-855-million-why-slow-gentle-gaming-is-booming-in-2026/)
- [Global Info Research: online cozy game market](https://www.globalinforesearch.com/reports/2581589/online-cozy-game)
- [HTF Market Insights: cozy gaming market](https://www.htfmarketinsights.com/report/4382814-cozy-gaming-market)
- [Outlook Respawn: Pikmin Bloom passes $100M](https://respawn.outlookindia.com/amp/story/gaming/gaming-news/pikmin-bloom-2025-revenue-hits-100m-milestone)
- [PocketGamer.biz: Pikmin Bloom record revenue](https://www.pocketgamer.biz/pikmin-bloom-skyrockets-to-record-revenue-as-taiwanese-spending-surges-902/)
- [Forest on the App Store](https://apps.apple.com/us/app/forest-focus-for-productivity/id866450515?l=vi)
- [Game Dev Reports: Sky passes 270M downloads](https://gamedevreports.substack.com/p/games-and-numbers-july-2-july-15)

---

### Dani · 2026-10-09 18:53

tart date: what is the right date? I've left it TBD until you tell me.
Sorry, it's 2026. not sure though, does the count begin when the ab is established or when work has become. i've already done all this work myself and started the concept art. i'm not working for free, but living off my savings. things like software, electricity, lawyers cost. 

F-skatt: you're right that it's almost certainly F-skatt. One catch: an enskild firma can also have FA-skatt, if you're employed at the same time. I've put F-skatt; correct me if it's FA.
It's just fskatt

VAT: your webshop sells products, so I'd expect you're VAT-registered. Firms with turnover under 120,000 SEK can be exempt since 2025, so I can't be sure. Please confirm.
I\m not because i don't make enough to be required to pay taxes

---

### Claude · 2026-10-09 18:53

## Start date
There are two different dates, and they belong in different places:
- **The company's start date** is when Dani Milli Studio was registered with Skatteverket. It already exists, since it has your org number and F-skatt. If it was registered in 2026, the date is in your F-skatt decision or on verksamt.se. A future Tessera AB would be a new company with its own start date, so it doesn't change this one.
- **Tessera's start date** is when you began the work: the concept, design and art. That's 2026 even though no AB exists yet. It matters because your existing work is part of what you'd later transfer or license to a Tessera AB.

**Proposal for 01:**
- **Start date:** the firm's registration date. *(Which month in 2026?)*
- **Add a line:** "Tessera project started: 2026." *(Add the month if you know it.)*

## Living off savings while paying the costs
This is normal, and the plan can say so:
- Tessera's costs (software, legal advice, equipment) are business costs of the firm and are tax-deductible.
- Business costs you pay from your private account are booked as an owner contribution ("eget insättning").
- Electricity and other home-office costs are deductible only under strict rules. Your accountant should check those.

**Recommendation:** keep receipts, and log your hours on Tessera from now on. The legal report advises recording the economic value of your work, and that log helps if the IP later moves into an AB.

**Proposal for 03, Personal finances:** "The owner lives on personal savings while developing Tessera and pays the project's costs, such as software, equipment and legal advice, with own capital. Spending is committed one milestone at a time."

## F-skatt
F-skatt it is. **01, Registration checklist:** tick "Registered with Skatteverket for F-skatt".

## VAT
One correction: VAT exemption isn't about income tax. Since 2025, a firm with turnover under 120,000 SEK a year can choose not to register for VAT. That's the rule that applies to you. You still declare the firm's income on your income tax return.

**Proposal for 01, VAT status:** "Icke momspliktig (not VAT-registered). Dani Milli Studio's turnover is under 120,000 SEK a year, the limit for VAT exemption. Register for VAT if turnover goes over this limit. Turnover includes Tessera's app-store and ad revenue."

**Registration checklist:** leave the moms (VAT) line unticked, and add "not required while turnover is under 120,000 SEK."

I can't tell how app-store and ad-network payments count when you're VAT-exempt. An accountant should check that before Tessera earns money.

---

### Dani · 2026-10-09 18:59

Tessera's start date is when you began the work: the concept, design and art. That's 2026 even though no AB exists yet. It matters because your existing work is part of what you'd later transfer or license to a Tessera AB.
Should this be documented aside from saving receipts?

Start date: the firm's registration date. (Which month in 2026?)
dani milli studio was registered 2016

---

### Claude · 2026-10-09 18:59

Yes. Receipts only prove what you spent. They don't show what you created or when. The legal report recommends a dated **pre-existing IP inventory**, and it's the main thing to set up. Write it before anyone else contributes to Tessera.

**Inventory columns:**
- the asset or document;
- who made it;
- when it was made, or its version date;
- where the original file is;
- any existing rights or licences, for example fonts or stock assets used;
- who should own it later, for example Tessera AB.

**Split the entries into four groups:**
1. work you made alone;
2. work made jointly, or supplied by others;
3. licensed third-party material;
4. general ideas, which copyright doesn't protect on their own.

**Evidence that backs up the dates:**
- **Original files with their metadata,** such as layered artwork files. Don't overwrite them; save new versions instead.
- **This repo's git history.** Every commit timestamps the docs.
- **Dropbox version history,** which also dates files.
- **Sent emails,** such as the GDD/TDD sent to Mattias and Jousef on 22 September. They show what existed before the collaboration began, and who received it.
- **A simple time log** of your hours on Tessera, which helps value your work.

The inventory is evidence. It doesn't create ownership. You already own your work through copyright, and the inventory makes that easy to prove. It also makes it easy to show which parts came before any collaboration.

**Start date:** "2016". Was it April, as LinkedIn says? If so, I'll put "April 2016".

Do you want me to draft the inventory as a new file? I'd fill it from the repo's files and dates and show it to you before saving.

---

### Dani · 2026-10-09 19:00

alright i think you can edit the numbered files in business now

---

### Claude · 2026-10-09 19:01

Writing the files now.

No Python here, so I'll use the edit tools.

I've edited the numbered files in business/ with the text we agreed. Files 11 and 12 are unchanged, since there are no figures for them yet. Nothing is committed.

A few things I decided myself, so check these:
- **Start date:** I wrote "2016" because you haven't confirmed the month.
- **Revenue in file 09:** it says revenue "can start at M2 if it is released publicly". You didn't confirm that M2 will be a public release, so I didn't state it as decided.
- **Website line:** removed from file 01.
- **Checklist ticks:** I ticked the six items in sections 9 and 10 that the 24 September milestone decision settled. I also added the new items and a new section 12.
- **Still TBD:** your bank, bookkeeping, insurance and similar lines in file 06, and the review ratings in file 08.
- **Template hint lines:** I kept the one-line hints that explain what each field is for, such as "The need the studio's work covers for that customer". Say if you want them removed.

---

### Dani · 2026-10-09 19:11

Start date: I wrote "2016" because you haven't confirmed the month.
for my studio or tessera? if my studio it isn't important

Revenue in file 09: it says revenue "can start at M2 if it is released publicly". You didn't confirm that M2 will be a public release, so I didn't state it as decided.
M2 being public sohuld be stated in the files, and clearly, because we'll be testing the rl layer?

---

### Claude · 2026-10-09 19:11

**Start date:** it's the studio's, so "2016" stays as it is.

**Public M2:** one correction first. M2 doesn't test the real-world layer. Doc 33 leaves it out of M2 on purpose: M2 tests whether the game itself is good, and the real-world layer is tested at M3. A public M2 still helps the real-world layer, in two ways:
- M3 can add the real-world layer as an update to a game that's already live. You then measure what real players do with it, instead of starting from zero.
- In the gap between M2 and M3, you get retention data and can survey players who already chose the game.

**What a public M2 adds to the work:**
- store listings and player support;
- ads and purchases working at M2;
- an ad-consent flow, which GDPR and Apple require for personalised ads;
- one small polished area has to be enough for a first release.

Doc 33 also warns about splitting focus away from making M2 good. Making M2 public changes doc 33, which still calls it an option. Do you want doc 33 updated too, or only the business files?

**Proposed edits to the business files:**

- **04, Customers and confirmed work:** "None yet, because the game isn't built. M1 is a schematic browser prototype. M2 is a polished playable area, released publicly on the App Store and Google Play without the real-world layer. M3 adds the real-world layer to the live game as an update."
- **04, Reaching the market:** "Before launch: free desk research and conversations with potential players now. Outside players test the M1 browser prototype. M2 is released publicly, which gives real player and retention data. M3 adds the real-world layer to the live game, and its use shows whether players want it."
- **07, Opportunities:** replace "A public M2 release could give real player data before M3" with "The public M2 release gives real player data before M3."
- **08, Milestones:** "M2 polished slice" → "M2 polished slice, public release"
- **09, Note:** "Revenue starts with M2's public release, from advertising and optional purchases. M1 is a browser prototype and earns nothing."
- **13, Checklist, new item in section 9:** "[ ] Release M2 publicly on the App Store and Google Play, without the real-world layer."

Shall I make these edits?

---

### Dani · 2026-10-09 19:12

M2 tests whether the game itself is good, and the real-world layer is tested at M3
m2 tests if the real world layer works technically by gathering info

---

### Claude · 2026-10-09 19:13

As the files stand, M2 doesn't do that. The technical test of the real-world layer is the **separate throwaway test app at the M1 stage**, not M2:
- **Doc 33:** M2 has "no combat, no real-world layer". The tracking risk "is tested as its own small, throwaway technical spike" during New M1.
- **Doc 28:** the spike runs "separately from the M2 polished-slice vertical slice and from the New M1 mechanics prototype".
- **Your checklist:** "Keep the real-world movement/focus layer out of the playable slice for now. Still run the separate technical spike."
- **The legal report:** the tracking test should happen early, "without turning M1 or M2 into M3 production".

If you now want the public M2 to collect tracking data, that's a new decision, and it costs a lot:
- **Privacy work moves forward to M2.** A public release that reads step or focus data needs a privacy policy, health-data disclosures in both stores, consent, and the GDPR assessment. The plan currently leaves all of that until M3.
- **App review risk.** Apple and Google expect an app to ask only for data it actually uses. Collecting step data that the game doesn't use yet risks rejection. I'm confident that's the policy direction, but check Apple's current guidelines before relying on it.
- **Apple's Family Controls approval** would be needed before M2 can ship, not just before M3.
- **It mixes the two tests together.** If M2 players leave, you couldn't tell whether the game failed or the permission requests put them off.

**My recommendation:** keep the files as they are. The throwaway app answers "does tracking work?" earlier, more cheaply, and without the privacy obligations. You can run it on your own and testers' phones through TestFlight and Google's internal testing. M2 then goes public as a game only, and M3 adds the real-world layer to the live game.

Which do you want?
- **(a)** M2 public, game only, with the separate tracking test app. This matches the docs.
- **(b)** M2 public and collecting tracking data. I'd then need to change docs 28 and 33, the checklist, and parts of the business plan.

---

### Dani · 2026-10-09 19:19

Real-world layer: handled separately
The real-world layer (steps/focus time as in-game currency) is not part of this build’s gameplay at all. Its platform risk — whether background step/focus tracking works reliably on iOS and Android — is tested as its own small, throwaway technical spike, independent of this prototype’s engineering and design budget. See platform integration for the full risk reasoning and recommended approach. The tracking risk is a distinct technical question, not a mechanics or desirability one.

M2 — polished slice (the original M1, renumbered)
Why it exists
Once the mechanical structure is proven, the open question is whether the actual game — real art, sound, animation — is something people genuinely enjoy, not just tolerate. Boxes and buttons can’t answer that; only something that looks and feels like the real game can.

What it’s for
One small, polished area demonstrating gathering, a complete restoration sequence, and representative painterly art, sound, and animation. No combat, no real-world layer, no unfinished systems — everything included has to be finished and representative, not a rough placeholder. Full technical goals: see M2 technical goals. Remaining scope decisions: see M2 decisions still needed.

Exit criteria
stable, demonstrable build;

known-risk / handoff notes;

player-testing evidence (method, pass/fail below);

platform-feasibility evidence;

performance evidence;

actual effort/cost evidence where available;

evidence-based next-stage scope decision.

Method
Internal playtesting first, then a small external playtest group who haven’t seen the concept before, recruited the same disguised, confidentiality-safe way used for the earlier audience research, and compared against a real successful comparable game tested under the same disguised conditions.

Record whether players bring up the art, the scenery or the world’s story on their own, without being asked. M2 is the first build that can show how much being artistic matters to players.

Pass / fail condition
Pass: players engage with the loop repeatedly without being told to, and say restoration is the reason they kept playing — not the mechanics around it.

Fail: players tolerate the loop but don’t return to it on their own. If that happens, the core loop gets redesigned before anything else moves forward.

What it cannot answer
Whether the real-world layer is something people actually want — it’s deliberately excluded from this build, same as New M1.

---

### Claude · 2026-10-09 19:20

You're right about one part, and I missed it: M2's exit criteria include **"platform-feasibility evidence"**. So M2 can't finish without proof that the real-world layer works on phones.

The same section also says M2 has "no real-world layer", and the M1 section says tracking is tested in the "small, throwaway technical spike". Read together, the two fit: the throwaway app produces the platform-feasibility evidence, and M2 can't close until that evidence exists. M2 owns the evidence, while the throwaway app does the testing. The M2 game itself doesn't track anything.

Is that what you meant? Or do you want the M2 game itself to track steps and focus time?

This text also shows something else. The **Method** section describes M2 as a "small external playtest group … recruited the same disguised, confidentiality-safe way", not a public release. A public M2 therefore changes doc 33 in two places:
- **Method:** a public release replaces the disguised playtest group. A disguised test of a public game is no longer possible, so the comparison against a disguised real game also goes.
- **"Where audience research fits":** the public-M2 option there becomes the plan instead of "not currently part of M2's exit criteria".

If you confirm the throwaway-app reading and a public M2, I'll propose the doc 33 wording along with the business-file edits from my last message.

---

### Dani · 2026-10-09 19:21

m2 tracks but only to test if it works. that is also in josef's section

---

### Claude · 2026-10-09 19:21

You're right, and I was wrong to say flatly that M2 doesn't track. Several docs put tracking tests in M2:
- **Doc 27:** Jousef's biggest concern is "the step-counting mechanic; platform/third-party integrations; especially iOS/Android permissions", and it "needs early prototyping". He also said his estimate had left out time for third-party integrations.
- **Doc 32:** M2 testing includes "permission/failure-state testing" and "platform integration testing".
- **Doc 23:** possible M2 screens include "movement/focus setup/status" and "permissions/errors".
- **Doc 33:** M2's exit criteria include "platform-feasibility evidence".

Read together: M2 tracks steps and focus time to test whether it works, but the game doesn't use the data yet. Two places say otherwise and need fixing:
- **Doc 33:** "no real-world layer" should read "the real-world layer isn't part of the gameplay".
- **Doc 28:** it says the spike runs "separately from the M2 polished-slice vertical slice".

**One risk with a public M2.** If the public version asks players for step or focus permissions, three things follow:
- the privacy work moves forward to M2: a privacy policy, health-data disclosures in both stores, and consent;
- Apple's Family Controls approval is needed before release;
- Apple may reject an app that asks for health data its features don't use.

**My recommendation:** run the tracking tests in M2's test builds (TestFlight and Google internal testing) with the team and invited testers. Release the public M2 without tracking. You'd still get the platform-feasibility evidence, and the public release would avoid those requirements.

**Proposed edits, if you agree:**

- **Doc 33, M2 "What it's for":** "No combat, no real-world layer, no unfinished systems" becomes "No combat, no unfinished systems. The real-world layer isn't part of the gameplay. M2's test builds track steps and focus time only to check that tracking works on real phones. The public release doesn't include tracking."
- **Doc 33, M2 Method:** replace it with "Internal playtesting first, then a public release on the App Store and Google Play without the real-world layer. Record whether players bring up the art, the scenery or the world's story on their own, without being asked."
- **Doc 28:** "run separately from the M2 polished-slice vertical slice and from the New M1 mechanics prototype" becomes "run separately from the New M1 mechanics prototype, and continued in M2's test builds."
- **Business files:** the edits from my earlier message, plus this line under Customers and confirmed work in 04: "M2's test builds also check that step and focus tracking works on real phones."
- **Checklist, section 9:** add "[ ] Test step/focus tracking in M2's test builds; keep it out of the public M2 release."

Do you agree with the test-builds-only approach? If so, shall I make these edits?

---

### Dani · 2026-10-09 19:25

you can edit 28 and 33. it's unclear so you're right to miss it actually. please address that it's important

it can go into open questions for now.

[Request interrupted by user]

you can edit 28 and 33. it's unclear so you're right to miss it actually. please address that it's important

The issues and problems you mentioned, they can be in open questions

---

### Claude · 2026-10-09 19:27

I've edited docs 28, 33 and 43.

**Doc 33, milestones:**
- **M2 is public:** it's now stated as decided, and a public release replaces the old disguised playtest group.
- **Tracking test:** a new section under M2, "Real-world layer in M2: tracking test only". M2 tracks steps and focus time to check that tracking works in the real game. It earns no Flow Points, gives no rewards and changes nothing in the world.
- **Exit criteria:** the "platform-feasibility evidence" line now names the M2 tracking test.
- **Other wording:** the M1, M3 and split-focus sections now say "out of gameplay" instead of "out of scope", and refer to the M2 tracking test. "Public M2 as a research window" replaces the old "option worth weighing".

**Doc 28, platform integration:** the recommended approach now has two stages. First the throwaway test app during M1, then the same tracking inside the M2 game. The doc also says M2's estimate must include time for this, since Jousef's earlier estimate left out third-party integrations.

**Doc 43, open questions:** a new list under M2 covering:
- whether tracking ships in the public release or only in test builds, and why that matters;
- what a public release needs: store listings, player support, ads and purchases, and an ad-consent flow;
- whether one small area is enough for a first release;
- how to survey public M2 players;
- how to keep M2 itself the main focus.

I also added an anchor so docs 33 and 43 can link to each other.

**Two docs now contradict the change.** I haven't edited either:
- **Doc 25** says tracking is tested "separate from M2's engineering and design budget".
- **Doc 34** says platform integration "is validated separately through an isolated technical spike".

**Proposed fixes:**
- **Doc 25:** replace "tested through its own isolated technical spike, separate from M2's engineering and design budget" with "tested first through an isolated technical spike during the M1 stage, then inside M2's builds as a tracking test that isn't connected to gameplay."
- **Doc 34:** replace "platform integration is validated separately through an isolated technical spike" with "platform integration is tested first through an isolated technical spike, then inside M2 as a tracking test. M2's estimate must include time for that test."

The business-file edits from earlier are also still waiting: public M2 in files 04, 07, 08, 09 and 13. Should I make those and the doc 25 and 34 fixes?

---

### Dani · 2026-10-09 19:29

25 and 43 are fine the way they are.
Can you list the changes in the business folder files

---

### Claude · 2026-10-09 19:30

I've left docs 25 and 34 as they are. I'm assuming you meant 34, since I'd already edited 43.

Below are the changes I propose for the business files, updated to include the M2 tracking test. Each shows the current text and the proposed replacement. Nothing is changed yet.

**04 Market and Customers**
- **Customers and confirmed work**
  - Now: "None yet, because the game isn't built. M1 is a schematic browser prototype, M2 a polished playable area, and M3 makes the real-world layer live for real users."
  - Proposed: "None yet, because the game isn't built. M1 is a schematic browser prototype. M2 is a polished playable area, released publicly on the App Store and Google Play. M2 also tests whether step and focus tracking works on real phones, without connecting it to gameplay. M3 adds the real-world layer to the live game as an update."
- **Reaching the market**
  - Now: "Before launch: free desk research and conversations with potential players now; outside players test the M1 browser prototype; external players test M2. Paid research waits until there's a playable build. Whether players want the real-world layer is measured from M3's live use."
  - Proposed: "Free desk research and conversations with potential players now. Outside players test the M1 browser prototype. M2's public release gives real player and retention data. Paid research waits until there's a playable build. Whether players want the real-world layer is measured from M3's live use."

**05 Pricing**
- **Cost basis, add:** "M2's estimate must include time for the step and focus tracking test."

**07 SWOT Analysis**
- **Opportunities**
  - Now: "A public M2 release could give real player data before M3."
  - Proposed: "The public M2 release gives real player data before M3."

**08 Start Decision and Timeline**
- **Milestones**
  - "Step/focus tracking test app" becomes "Step/focus tracking test app (M1 stage)".
  - "M2 polished slice" becomes "M2 polished slice: public release, with tracking test".

**09 Sales and Marketing Budget**
- **Note**
  - Now: "Revenue can start at M2 if it is released publicly, from advertising and optional purchases. M1 is a browser prototype and earns nothing."
  - Proposed: "Revenue starts with M2's public release, from advertising and optional purchases. M1 is a browser prototype and earns nothing."

**13 Team Decision Checklist, section 9**
- Reword a ticked item, since M2 now tracks for testing:
  - Now: "[x] Keep the real-world movement/focus layer out of the playable slice for now."
  - Proposed: "[x] Keep the real-world movement/focus layer out of the playable slice's gameplay for now."
- **Add, ticked:** "[x] Release M2 publicly on the App Store and Google Play."
- **Add:** "[ ] Test step/focus tracking inside M2, without connecting it to gameplay."

Shall I make these edits?

---

### Dani · 2026-10-09 19:30

yeah thanks. good work today

---

### Claude · 2026-10-09 19:31

All seven edits are made, in files 04, 05, 07, 08, 09 and the checklist. Nothing is committed yet.

Thanks, and good work to you too. One thing I'd like to save to memory for future sessions: when files disagree, check their dates to tell current decisions from outdated ones, as with the Lyssna plan the milestone split replaced. Shall I save it?

---

### Dani · 2026-10-09 19:33

yeah, that works, but add to that: notify dani of which one you picked

---

### Claude · 2026-10-09 19:33

That's saved to memory for future sessions. When files disagree, I'll use their dates to decide which is current, and I'll always tell you which version I used, which I treated as outdated, and why.

---

### Dani · 2026-10-09 19:33

great

---

### Claude · 2026-10-09 19:33

Thanks! One reminder: today's edits to business/ and DOCS/ aren't committed yet, and neither is moving those folders out of DOCS/. I can commit them whenever you're ready.

---

### Dani · 2026-10-09 19:34

if you can do that for me go ahead. wasn't aware it was possible

---

### Claude · 2026-10-09 19:34

Everything from today is committed on `main` as one commit, `7d12426`:
- the business/ and reports/ folders moved out of DOCS/;
- the legal-structure report, both the .md and the PDF;
- the filled-in business plan and checklist;
- the changes to docs 28, 33 and 43.

There's nothing left to commit. Git printed some warnings about line endings while committing. They're normal on Windows and don't affect the files.

The commit is only on your computer so far. Pushing sends it to the repo's online copy (the "remote"), and Dropbox doesn't do that for you. Do you want me to push it?

---

### Dani · 2026-10-09 19:35

you mean sync. that would be great too. and thanks

---

### Claude · 2026-10-09 19:35

Today's changes are synced to GitHub. I pulled first, there was nothing new there, and then pushed your commit, so your computer and GitHub now match.

GitHub also reported that the repository has moved from `millistudios/tessera` to `MilliStudio/tessera`. Syncing still works because GitHub forwards to the new address, but your local setup still uses the old one. Do you want me to switch it to the new address?

---

### Dani · 2026-10-09 19:36

i didn't understand that one. but let's do that tomorrow

---

### Claude · 2026-10-09 19:36

Sure, we'll do it tomorrow. In short: your repo on GitHub was renamed, so the address your computer uses to reach it is out of date. GitHub forwards the old address for now, so nothing is broken. Tomorrow it's a one-line fix.

Have a good evening!

---

### Dani · 2026-10-10 04:08

i want to create an application to use for documentation, accounting and book keeping, ip evidence and light project planning. here are the suggested specifications. can you review it 


# MILLI STUDIO
## Business, Development & IP Management Application
### Functional and Data Specification — Version 2.0

**Initial business:** Milli Studio AB (proposed name)  
**Initial project:** Tessera  
**Primary user:** Company founder and administrator  
**Application type:** Custom internal management system  
**Language:** English interface, Swedish accounting terminology where appropriate  
**Primary currency:** SEK  
**Operating jurisdiction:** Sweden

---

# PART I — PURPOSE AND ARCHITECTURE

## 1. Purpose

Develop a unified application to manage Milli Studio's business administration and Tessera's development.

The application must support:

1. Swedish bookkeeping and tax administration.
2. Development expenses, working hours, and contributions.
3. Intellectual property documentation and evidence preservation.
4. Basic project planning and scheduling.

The long-term objective is to replace commercial accounting software while maintaining accurate, accessible, and legally compliant records.

The application must be suitable for a small Swedish aktiebolag (AB), initially operated by one person.

It should support additional projects and contributors without requiring a complete redesign.

### Core principles

**Simplicity:** Everyday operations should require minimal manual work.

**Accuracy:** Financial calculations and accounting entries must be verifiable.

**Traceability:** Every important record must have a documented history.

**Separation:** Project-management information must not automatically become official accounting information.

**Data ownership:** All records and files must remain accessible independently of the application.

**Extensibility:** Additional functions may be introduced as the business grows.

---

# 2. Application Structure

The application has four primary sections.

| Section | Responsibility |
|---|---|
| A. Accounting & Taxes | Official financial records, VAT, taxation, financial reporting |
| B. Development & Contributions | Hours, costs, funding, and individual contributions |
| C. Intellectual Property & Evidence | Creative assets, authorship, development history, agreements |
| D. Project Planning | Tasks, milestones, schedules, progress |

A shared system provides:

- Dashboard
- Search
- Document storage
- Notifications
- User management
- Audit history
- Backups
- Data exports

All sections use a common database architecture but maintain distinct record types.

**Financial records must never be automatically created from informal project records without an appropriate accounting event and classification.**

---

# PART II — SHARED DATABASE DESIGN

## 3. General Record Requirements

Every database record must include:

| Field | Purpose |
|---|---|
| Record ID | Unique system-generated identifier |
| Created at | Timestamp of record creation |
| Created by | User responsible for creating the record |
| Updated at | Timestamp of latest modification |
| Record status | Draft, active, archived, or applicable status |
| Related project | Optional reference to Tessera or another project |
| Notes | Optional additional information |
| Attachments | Related documents or files |
| Audit reference | Link to the record's change history |

Financial records require additional accounting-specific controls.

Historical information must preserve the distinction between:

- The original event date.
- The date the information was entered into the application.
- The date the information was verified.

These dates must not be treated as interchangeable.

## 4. Shared Reference Tables

The database should contain reusable reference tables.

### 4.1 Projects

Fields:

- Project ID
- Project name
- Description
- Project owner
- Start date
- End date, if applicable
- Status
- Budget
- Notes

Initial project: Tessera.

### 4.2 People & Organizations

Fields:

- Contact ID
- Name
- Person or organization
- Role
- Contact details
- Start date of involvement
- End date, if applicable
- Agreement references
- Notes

Roles may include:

- Founder
- Contributor
- Contractor
- Supplier
- Customer
- Adviser

A person's role must not automatically establish employment, ownership, or payment obligations.

### 4.3 Documents

Fields:

- Document ID
- Document name
- Document category
- Original filename
- File format
- File size
- Storage location
- Upload date
- Original document date, if known
- File hash
- Related records
- Notes

Documents must be reusable across sections without unnecessary duplication.

### 4.4 Audit Events

Fields:

- Audit event ID
- Record reference
- User
- Action
- Timestamp
- Previous value or version reference
- New value or version reference
- Reason for change, where applicable

Audit records must be protected against ordinary editing or deletion.

---

# PART III — SECTION A: ACCOUNTING & TAXES

## 5. Company Profile

### Purpose

Store the information required to configure the accounting system for the actual company.

### Fields

- Registered company name
- Organization number
- Registered address
- Company registration date
- Company formation date
- Financial year
- Accounting method
- Accounting framework
- VAT registration status
- VAT reporting frequency
- F-tax status
- Employer registration status
- Primary currency
- Bank account references
- Relevant reporting deadlines

### Functions

- Configure company information.
- Configure accounting periods.
- Configure applicable accounting rules.
- Maintain historical changes to company settings.
- Prevent changes to closed periods without an authorized correction process.

The application must not assume that Milli Studio AB has been registered before registration is confirmed.

---

## 6. Chart of Accounts

### Purpose

Provide the structure used to classify financial transactions.

### Fields

- Account number
- Account name
- Account category
- Account description
- Active/inactive status
- Applicable tax or reporting mappings
- Effective date
- Notes

### Functions

- Support the Swedish BAS chart of accounts.
- Allow appropriate account configuration.
- Prevent invalid account references.
- Preserve historical account mappings.

The BAS chart should be versioned so updates do not silently alter historical reporting.

---

## 7. Expense Register

### Purpose

Record every relevant purchase, subscription, service, and business-related expenditure.

This includes expenses paid personally before the AB exists.

### Required and Optional Fields

| Field | Description |
|---|---|
| Expense ID | Unique identifier |
| Expense date | Date the expense occurred |
| Invoice date | Date shown on invoice |
| Payment date | Actual payment date |
| Description | What was purchased |
| Business purpose | Why the purchase was necessary |
| Project | Tessera or another project |
| Expense category | Software, equipment, services, etc. |
| Supplier | Name of supplier |
| Supplier country | Relevant for VAT treatment |
| Invoice number | Supplier's invoice reference |
| Net amount | Amount excluding VAT, if known |
| VAT amount | VAT charged, if applicable |
| Gross amount | Total amount |
| Currency | Original transaction currency |
| SEK amount | Accounting currency equivalent |
| Exchange rate | Rate and source, where applicable |
| Paid by | Individual or company |
| Payment method | Card, bank transfer, etc. |
| Payment account | Relevant bank or payment account |
| Purchase period | Before or after company formation/registration |
| Business-use percentage | Documented business use |
| Receipt/invoice | Supporting document |
| Accounting status | Unreviewed, pending, posted, etc. |
| Tax treatment | Pending, reviewed, applicable classification |
| VAT treatment | Pending or confirmed classification |
| Reimbursement status | Not applicable, pending, approved, paid |
| Notes | Additional explanation |

### Functions

- Add expenses manually.
- Upload invoices and receipts.
- Support recurring subscriptions.
- Identify potentially duplicated expenses.
- Search and filter expenditure.
- Link expenses to development projects.
- Generate expense summaries.
- Track reimbursement requests.
- Flag uncertain accounting and tax treatment.

### Important rule

An expense's business purpose does not automatically establish that the future AB may deduct it.

---

## 8. Pre-Incorporation Expenses

### Purpose

Maintain a separate register for expenses incurred before Milli Studio AB is established.

This is particularly important for Tessera's existing AI-agent subscriptions.

### Additional Fields

- Original purchaser
- Original payment source
- Purchase date
- Intended business
- Intended business activity
- Evidence of intended business use
- Company formation status at purchase
- Company registration status at purchase
- Invoice recipient
- Potential reimbursement arrangement
- Review status
- Review notes
- Supporting documentation

### Functions

- Record expenses before incorporation.
- Preserve their original dates.
- Identify who legally incurred each expense.
- Link expenses to Tessera.
- Track possible future reimbursement.
- Flag expenses requiring accounting or tax review.

### Accounting rule

These records must initially remain outside the AB's official bookkeeping unless an appropriate accounting basis is established.

The system must not automatically treat pre-incorporation purchases as deductible AB expenses.

### Example

**Expense:** AI coding-agent subscription  
**Project:** Tessera  
**Purpose:** Software development and project documentation  
**Paid by:** Founder personally  
**Business use:** 100% Tessera, as declared by the founder  
**Period:** Before AB formation  
**Supporting evidence:** Invoice, payment confirmation, subscription records  
**Tax treatment:** Pending review  
**Accounting status:** Historical project expense; not yet posted to AB accounts

This information must remain available even if the expense is ultimately not deductible by the AB.

---

## 9. Bookkeeping Journal

### Purpose

Maintain the company's official accounting transactions.

### Voucher Fields

- Voucher ID
- Voucher number
- Voucher series
- Transaction date
- Posting date
- Description
- Counterparty, where applicable
- Supporting document reference
- Accounting period
- Posting status
- Correction reference
- Created by
- Posted by
- Posting timestamp

### Journal Line Fields

- Journal line ID
- Voucher reference
- BAS account
- Debit amount
- Credit amount
- Currency information, where relevant
- Project reference, where relevant
- VAT code, where relevant
- Description

### Functions

- Double-entry bookkeeping.
- Validate balanced transactions.
- Assign voucher numbers.
- Attach supporting documentation.
- Maintain chronological records.
- Maintain account-based records.
- Produce general ledger reports.
- Support opening balances.
- Support corrections and reversals.
- Lock closed accounting periods.

### Mandatory behavior

Posted accounting entries must not be silently overwritten or deleted.

Corrections must preserve the original entry and provide a traceable explanation.

The application must also maintain the system documentation and processing history required by applicable Swedish bookkeeping rules.

---

## 10. Bank Transactions & Reconciliation

### Purpose

Compare accounting records with actual financial transactions.

### Fields

- Bank transaction ID
- Bank account
- Transaction date
- Value date
- Description
- Counterparty
- Amount
- Currency
- Bank reference
- Imported statement reference
- Matching voucher
- Reconciliation status
- Notes

### Functions

- Manual transaction entry.
- Bank statement import.
- Transaction matching.
- Duplicate detection.
- Reconciliation reports.
- Unmatched transaction warnings.

Automatic bank connections are not required initially.

---

## 11. VAT — Moms

### Purpose

Calculate and prepare Swedish VAT reporting information.

### Fields

- VAT record ID
- Related transaction
- Transaction type
- Supplier/customer country
- VAT jurisdiction
- VAT rate
- Taxable amount
- VAT amount
- VAT reporting category
- Reverse-charge status
- Deductibility status
- Reporting period
- Review status
- Supporting documentation

### Functions

- Domestic VAT calculations.
- EU transaction handling.
- Non-EU transaction handling.
- Reverse-charge VAT where applicable.
- VAT summaries.
- VAT reporting data.
- Transaction-level validation.
- Manual review of uncertain transactions.

### Requirements

The system must distinguish:

- VAT charged by suppliers.
- Deductible input VAT.
- Output VAT.
- Reverse-charge transactions.
- Transactions outside the scope of VAT.
- Exempt transactions.

VAT calculations must follow the rules applicable to the transaction date.

The system must not assume that every purchase qualifies for VAT recovery.

---

## 12. Corporate Tax Administration

### Purpose

Support tax calculations and reporting for the AB.

### Fields

- Tax record ID
- Tax year
- Tax type
- Related accounting period
- Accounting result
- Tax adjustments
- Estimated taxable income
- Applicable tax rate
- Estimated tax
- Preliminary tax paid
- Tax account transactions
- Reporting deadline
- Payment deadline
- Filing status
- Supporting calculations
- Review status

### Functions

- Track preliminary tax.
- Track tax payments.
- Calculate provisional corporate tax.
- Record adjustments between accounting and taxable results.
- Track deadlines.
- Prepare supporting tax schedules.
- Preserve calculation histories.

Tax rates and rules must be date-sensitive and configurable.

The application must not present provisional calculations as confirmed tax liabilities.

---

## 13. Financial Reports

### Required Reports

- General ledger
- Trial balance
- Income statement
- Balance sheet
- Expense report
- VAT summary
- Tax summary
- Bank reconciliation report
- Project expenditure report

### Year-End Functions

- Closing checklist
- Accruals and adjustments
- Depreciation support
- Reconciliation checks
- Annual accounts support
- Annual report preparation
- Corporate income tax return preparation

### Requirements

Annual reporting must follow the accounting framework applicable to the company.

The agent must not assume that K2 is always available or appropriate.

The application must support verification of calculations against source records.

Official electronic submission is not required in the first version.

---

## 14. Accounting Archive

### Purpose

Preserve legally required accounting information.

### Functions

- Store vouchers.
- Store receipts and invoices.
- Preserve accounting histories.
- Maintain system documentation.
- Maintain processing histories.
- Apply legally required retention periods.
- Support independent backups.
- Support restoration testing.
- Export accounting data.
- Support SIE exports.
- Export human-readable reports.

### Requirements

Retention and archiving must comply with applicable Swedish rules.

The application must not automatically delete records when an arbitrary storage period expires.

The agent must verify current requirements concerning electronic storage, accessibility, integrity, and permitted disposal of original documents.

---

# PART IV — SECTION B: DEVELOPMENT & CONTRIBUTIONS

## 15. Working Hours

### Purpose

Record the time spent developing Tessera.

### Fields

- Work session ID
- Date
- Contributor
- Project
- Task
- Activity category
- Start time, optional
- End time, optional
- Hours worked
- Description
- Development phase
- Paid/unpaid status
- Historical/pre-incorporation indicator
- Notes

### Activity Categories

- Concept development
- Game design
- Art and illustration
- 3D development
- Programming
- Technical research
- Business administration
- Meetings
- Testing
- Documentation
- Other

### Functions

- Add time manually.
- Associate time with tasks.
- Generate weekly and monthly summaries.
- Calculate total development hours.
- Compare estimated and actual time.
- Report hours by activity and contributor.

### Important Rule

Unpaid hours are project-management information.

They must not automatically become company expenses, shareholder investments, compensation obligations, or ownership rights.

---

## 16. Development Costs

### Purpose

Calculate the resources spent developing Tessera.

### Fields

- Development cost ID
- Project
- Cost category
- Related expense
- Amount
- Currency
- Date
- Development phase
- Funding source
- Budget category
- Notes

### Functions

- Link to expense records.
- Summarize costs by category.
- Summarize costs by milestone.
- Compare actual costs with budgets.
- Generate monthly reports.

Expenses should be entered once and referenced across sections.

---

## 17. Contributor Records

### Purpose

Document individual participation.

### Fields

- Contributor ID
- Person
- Role
- Start date
- End date
- Project
- Contribution type
- Related work sessions
- Related expenses
- Agreement references
- Notes

### Contribution Types

- Creative work
- Technical work
- Financial contribution
- Equipment
- Services
- Advice
- Other

### Functions

- Summarize individual contributions.
- Link contributions to supporting records.
- Track agreements.
- Distinguish paid and unpaid work.
- Generate contribution reports.

### Important Rule

A contribution record is not a legal determination of ownership, employment, or compensation.

---

## 18. Funding & Reimbursements

### Purpose

Track who has provided money or paid expenses on behalf of the project or company.

### Fields

- Funding record ID
- Contributor
- Date
- Amount
- Currency
- Funding type
- Recipient
- Related expense
- Supporting agreement
- Reimbursement status
- Accounting reference
- Notes

### Functions

- Track personal expenditure.
- Track documented company funding.
- Track agreed reimbursements.
- Distinguish funding from revenue.
- Distinguish loans from capital contributions.
- Prevent automatic accounting classifications.

The system must require appropriate documentation before classifying a payment as a shareholder loan, capital contribution, reimbursement, or another legal transaction.

---

# PART V — SECTION C: INTELLECTUAL PROPERTY & EVIDENCE

## 19. IP Asset Register

### Purpose

Create an inventory of original Tessera material.

### Fields

- Asset ID
- Asset name
- Asset category
- Description
- Creator
- Creation date, if known
- Date confidence level
- Project
- Original file reference
- Current version
- Related assets
- Claimed rights holder
- Rights status
- Third-party components
- Supporting evidence
- Notes

### Asset Categories

- Illustrations
- Concept art
- Character designs
- Environment designs
- Storyboards
- Game design documents
- Technical documents
- Source code
- Audio
- Other creative material

### Functions

- Register assets.
- Associate creators.
- Attach original files.
- Link related assets.
- Search by creator, category, and date.
- Generate asset inventories.

The system must distinguish copyright-protected expression from general concepts, ideas, and mechanics.

---

## 20. File Versions & Integrity

### Purpose

Preserve the development history of creative work.

### Fields

- Version ID
- Asset reference
- Version number
- File reference
- Original filename
- Original metadata
- Recorded creation date
- Import date
- File hash
- Change description
- Previous version
- Contributor
- Notes

### Functions

- Preserve original files.
- Store historical versions.
- Calculate SHA-256 hashes.
- Verify file integrity.
- Prevent silent overwriting.
- Export version histories.

### Important Rule

A cryptographic hash helps demonstrate file integrity.

It does not independently establish who created the file or when.

---

## 21. Development Evidence Timeline

### Purpose

Document how Tessera developed over time.

### Fields

- Timeline event ID
- Event date
- Event type
- Description
- People involved
- Related project
- Related assets
- Supporting documents
- Evidence source
- Date reliability
- Notes

### Event Types

- Initial concept
- Design decision
- Artwork creation
- Document revision
- Meeting
- Technical development
- Milestone
- Agreement
- Other

### Functions

- Create chronological timelines.
- Link events to original files.
- Import historical records.
- Record uncertainty about dates.
- Generate development-history reports.

Historical information must never be assigned fabricated creation dates.

---

## 22. Ownership & Rights Register

### Purpose

Document the available evidence concerning authorship and legal rights.

### Fields

- Rights record ID
- Asset
- Creator
- Claimed rights holder
- Rights type
- Basis of claim
- Supporting agreement
- Effective date
- Expiration date, if applicable
- Territorial scope, if applicable
- Restrictions
- Verification status
- Notes

### Rights Types

- Authorship
- Economic copyright
- Licence
- Assignment
- Third-party permission
- Other documented rights

### Functions

- Track authorship.
- Track rights holders.
- Record transfers.
- Record licences.
- Identify missing agreements.
- Generate rights summaries.

### Important Rule

Database records must not be treated as conclusive legal proof.

The underlying original material and valid agreements remain essential.

---

## 23. Agreements Archive

### Purpose

Preserve documents establishing contractual rights and obligations.

### Fields

- Agreement ID
- Agreement title
- Agreement type
- Parties
- Signature date
- Effective date
- Expiration date
- Related project
- Related assets
- Signed document
- Status
- Notes

### Agreement Types

- IP assignment
- Licence
- Contributor agreement
- Contractor agreement
- Confidentiality agreement
- Partnership agreement
- Other

### Functions

- Store signed agreements.
- Link agreements to contributors and assets.
- Track relevant dates.
- Identify missing documentation.
- Export agreements.

The application must not automatically create or execute legal transfers of intellectual property.

---

## 24. Evidence Export

### Purpose

Produce an independently inspectable archive of Tessera's development history.

### Export Contents

- Selected original files
- File metadata
- File hashes
- Version history
- Timeline records
- Authorship records
- Relevant agreements
- Evidence index

### Requirements

Exports should be readable without the application.

Important milestones should support independently verifiable timestamps where available.

Evidence archives must preserve the distinction between original evidence and later descriptions entered into the database.

---

# PART VI — SECTION D: PROJECT PLANNING

## 25. Project Register

### Purpose

Manage Tessera and future projects.

### Fields

- Project ID
- Name
- Description
- Owner
- Start date
- Target completion date
- Status
- Budget
- Notes

### Functions

- Create projects.
- Update project status.
- View associated tasks.
- View hours and expenditure.
- View milestones.

---

## 26. Task Management

### Purpose

Organize day-to-day development.

### Fields

- Task ID
- Task title
- Description
- Project
- Milestone
- Category
- Priority
- Assigned person
- Start date
- Due date
- Estimated hours
- Actual hours
- Status
- Completion date
- Attachments
- Notes

### Statuses

- Not started
- In progress
- Blocked
- Completed

### Functions

- Create tasks.
- Assign tasks.
- Update progress.
- Set deadlines.
- Attach documents.
- Record time.
- Filter and search tasks.

---

## 27. Milestone Management

### Purpose

Organize development into manageable stages.

### Fields

- Milestone ID
- Name
- Description
- Project
- Start date
- Target date
- Completion date
- Status
- Related tasks
- Budget
- Notes

### Functions

- Create milestones.
- Associate tasks.
- Track progress.
- Track deadlines.
- Generate milestone summaries.

Milestone completion should be determined by explicit status updates or defined completion criteria, not merely by elapsed time.

---

## 28. Calendar & Schedule

### Purpose

Provide a simple overview of upcoming work.

### Functions

- Calendar view.
- Task deadlines.
- Milestone deadlines.
- Upcoming activities.
- Overdue task indicators.
- Basic timeline view.

Complex dependency management is not required initially.

---

# PART VII — HOW THE SECTIONS CONNECT

## 29. Shared Relationships

The application should use linked records rather than duplicate information.

### Example 1 — AI-Agent Subscription

One expense is entered into the expense register.

It can then be associated with:

**Accounting & Taxes**
- Expense information
- Invoice
- Payment
- Tax-review status

**Development**
- Tessera
- Software development costs
- Relevant development period

**Project Planning**
- Relevant project or milestone

The accounting record is created only when its proper treatment has been established.

### Example 2 — New Illustration

An illustration is registered in the IP archive.

It can then be linked to:

**Development**
- Hours spent creating it

**Project Planning**
- The task requiring the illustration

**IP Documentation**
- Original file
- Creator
- Versions
- Creation history
- Rights information

### Example 3 — Contributor Work

A contributor records development hours.

The record may be linked to:

- A task
- A milestone
- A creative asset
- A contributor agreement

It must not automatically generate salary, company debt, or ownership rights.

---

# PART VIII — DASHBOARD & USER EXPERIENCE

## 30. Main Dashboard

The dashboard should provide four panels.

### Accounting

- Current financial position
- Recent expenses
- Unpaid bills
- Upcoming tax deadlines
- Items awaiting review

### Development

- Hours worked this month
- Total development hours
- Current expenditure
- Budget remaining

### IP Documentation

- Recently added assets
- Missing supporting documentation
- Recent versions
- Agreements requiring attention

### Project Planning

- Current milestone
- Active tasks
- Upcoming deadlines
- Overdue tasks

The dashboard must distinguish confirmed figures from estimates.

---

## 31. Data Entry

Forms should:

- Use clear labels.
- Explain unfamiliar accounting terms.
- Mark required fields.
- Validate amounts and dates.
- Support attachments.
- Avoid duplicate entry.
- Allow saving drafts.
- Flag incomplete records.

Where useful, the interface should provide short explanations of why particular information is required.

---

## 32. Search & Reporting

Users must be able to search by:

- Date
- Project
- Contributor
- Supplier
- Expense
- Document
- Task
- Asset
- Accounting account

Reports should support filtering and export.

---

# PART IX — SECURITY, BACKUPS & DATA OWNERSHIP

## 33. Security

Requirements:

- Administrator authentication.
- Secure credential storage.
- Encrypted connections where applicable.
- Protected financial and personal information.
- Access permissions for future users.
- Audit logs.
- Secure configuration management.

The system must not store passwords or API credentials in ordinary database fields.

---

## 34. Backups

Requirements:

- Automatic backups.
- Manual backup option.
- Independent backup location.
- Backup integrity checks.
- Restore testing.
- Recovery instructions.

The system must not depend on a single device or storage location for preserving important records.

---

## 35. Data Export

Required formats:

- CSV for structured data.
- PDF for readable reports.
- SIE for accounting interoperability.
- Original formats for creative assets.
- Structured database backups.
- Portable evidence archives.

All exported information must remain understandable without access to the original application.

---

## 36. System Documentation

The agent must produce and maintain:

- Database schema documentation.
- Description of accounting workflows.
- Voucher-numbering rules.
- Processing-history documentation.
- Tax calculation rules.
- Backup and recovery procedures.
- Data export documentation.
- Software version history.
- Applicable legal-rule references.

Changes affecting accounting calculations or record integrity must be documented.

---

# PART X — AUTOMATION RULES

## 37. Permitted Automation

The application may automatically:

- Generate record IDs.
- Calculate totals.
- Validate bookkeeping balance.
- Detect duplicates.
- Generate reports.
- Calculate provisional taxes.
- Flag missing receipts.
- Identify approaching deadlines.
- Calculate recorded working hours.
- Summarize project costs.
- Generate file hashes.
- Create backups.

## 38. Actions Requiring Review

The application must not independently:

- Determine uncertain tax deductibility.
- Claim VAT deductions without sufficient basis.
- Transfer IP ownership.
- Create shareholder rights.
- Establish compensation obligations.
- Submit tax declarations.
- Delete accounting history.
- Alter signed agreements.

These actions require appropriate authorization and, where necessary, professional review.

---

# PART XI — DEVELOPMENT PLAN

## 39. Implementation Phases

### Phase 1 — Foundation

Build:

- Database
- Shared reference tables
- Authentication
- Document storage
- Audit history
- Backup system
- Export functions

### Phase 2 — Development & Expense Records

Build:

- Expense register
- Pre-incorporation expense register
- Working hours
- Development costs
- Contributor records

**Objective:** Begin recording Tessera activity immediately without incorrectly posting historical expenses to the future AB.

### Phase 3 — IP Documentation

Build:

- Asset register
- Original file archive
- Version history
- Development timeline
- Ownership records
- Agreement archive

**Objective:** Preserve Tessera's existing creative history and supporting evidence.

### Phase 4 — Project Planning

Build:

- Projects
- Tasks
- Milestones
- Calendar
- Progress reports

**Objective:** Support basic production management.

### Phase 5 — Accounting Engine

Build:

- Chart of accounts
- Bookkeeping journal
- Vouchers
- Bank reconciliation
- Financial statements
- Accounting archive

**Objective:** Establish a tested bookkeeping system.

Accounting requirements must be researched and documented before this phase begins.

### Phase 6 — Tax & Annual Reporting

Build:

- VAT calculations
- Tax administration
- Year-end adjustments
- Annual reporting support
- Tax declaration preparation

**Objective:** Support the company's statutory reporting requirements.

These features must undergo separate validation before official use.

---

# PART XII — TESTING & ACCEPTANCE

## 40. Functional Tests

The agent must demonstrate that:

1. Records can be created and retrieved.
2. Required fields are validated.
3. Linked records remain consistent.
4. Files are stored without corruption.
5. Original file versions remain accessible.
6. Reports reflect underlying records.
7. Exports preserve essential information.
8. Backups can be restored.
9. Audit histories remain intact.
10. Financial records cannot be silently altered.

## 41. Accounting Tests

The agent must verify:

- Balanced journal entries.
- Correct voucher sequencing.
- Accurate account balances.
- Correct period allocation.
- Traceable corrections.
- Reconciliation accuracy.
- Correct handling of relevant VAT scenarios.
- Accurate financial reports.
- Appropriate record retention.
- Required system documentation.

Testing must use documented examples and independently verified expected results.

## 42. Tax Tests

Tax calculations must be checked against:

- Current Swedish legislation.
- Skatteverket guidance.
- Relevant transaction examples.
- Applicable reporting periods.

Rules must be versioned by effective date.

Uncertain situations must be flagged rather than resolved through unsupported assumptions.

## 43. IP Evidence Tests

The application must demonstrate that:

- Original files remain unchanged.
- Hash verification works.
- Historical dates are preserved.
- Import dates are distinguishable.
- Version histories are complete.
- Evidence exports are independently readable.
- Ownership records link to supporting documentation.

---

# PART XIII — EXCLUDED FEATURES

The first version does not require:

- Payroll administration.
- Employee scheduling.
- Inventory management.
- Customer relationship management.
- Advanced project dependencies.
- Automated bank connections.
- Automatic tax submission.
- Investor management.
- Shareholder administration.
- AI-generated legal agreements.
- Advanced financial forecasting.
- Multiple company accounting environments.

These features should only be added when there is a demonstrated business need.

---

# PART XIV — OFFICIAL REFERENCE REQUIREMENTS

The coding agent must verify all applicable legal requirements against current official sources before implementing regulated functionality.

### Accounting

**Bokföringsnämnden (BFN)**
- Bokföring guidance
- Applicable accounting framework
- System documentation
- Processing history
- Accounting information retention

**Applicable legislation**
- Bokföringslagen (1999:1078)
- Årsredovisningslagen (1995:1554)

### Taxation

**Skatteverket**
- Corporate taxation
- VAT
- Pre-incorporation expenditure
- Tax declarations
- Tax-account administration

**Applicable legislation**
- Inkomstskattelagen (1999:1229)
- Mervärdesskattelagen (2023:200)

### Intellectual Property

**Patent- och registreringsverket (PRV)**
- Copyright
- Intellectual property agreements
- Intellectual property management

**Applicable legislation**
- Upphovsrättslagen (1960:729)

### Personal Data

**Integritetsskyddsmyndigheten (IMY)**
- GDPR guidance
- Personal data protection

The agent must record:

- Source
- Applicable provision or guidance
- Effective date
- Date verified
- Implemented function
- Test cases

A source list alone is not sufficient evidence that the implementation complies with the law.

---

# PART XV — FINAL REQUIREMENTS

The application must:

1. Support a small Swedish AB.
2. Provide complete and traceable financial records.
3. Maintain separate project-development records.
4. Preserve Tessera's pre-incorporation history.
5. Track working hours and contributions.
6. Preserve original creative assets and supporting evidence.
7. Document authorship and contractual ownership history.
8. Provide basic project planning.
9. Generate understandable reports.
10. Support independent backups and exports.
11. Remain simple enough for one administrator.
12. Avoid unnecessary ongoing costs.
13. Support future expansion without compromising existing records.

**Final objective:** Create a unified management application that helps Milli Studio administer its business, manage Tessera's development, preserve its intellectual property history, and maintain reliable financial records.

The application must prioritize legal compliance, data integrity, maintainability, and practical daily use over unnecessary complexity.

---

### Claude · 2026-10-10 04:09

## Verdict
The thinking behind the spec is careful. It separates records from legal conclusions throughout, it says plainly that a hash doesn't prove authorship, and it never fabricates dates. But it rests on a company setup that doesn't exist yet, and its biggest part, a self-built accounting system, is the part I'd recommend against. I'd cut the scope to the parts that existing tools don't already cover.

## Main problems

**1. It's written for an AB, but your books today are Dani Milli Studio's.**
- **Today:** Dani Milli Studio is an enskild firma (since 2016), not VAT-registered, with F-skatt. As a business it must keep books under Bokföringslagen *now*, not from when an AB exists.
- **Tessera's costs so far are already the firm's business costs,** including the AI-agent subscription, if it's for Tessera. Legally, you and the firm are the same person, so "paid by founder personally" isn't a separate category. The spec's "pre-incorporation register outside the books" treats them as personal purchases waiting for review. As the business plan now states, they belong in the firm's books.
- **Multiple companies are excluded in Part XIII,** but you'll have at least two: the firm now and an AB later. They follow different rules. A sole trader files a simplified year-end and an NE appendix; an AB files an annual report and a corporate tax return.

**2. The name conflicts with the legal report.**
- The spec says "Milli Studio AB", a studio company that could hold several projects.
- The 9 Oct legal report recommends a dedicated **Tessera AB**, with Dani Milli Studio kept separate.
- The spec has no date, so I can't tell which is newer. I'm treating the legal report as current until you tell me otherwise. Is "Milli Studio AB" a new decision?

**3. Building your own accounting system is the highest-risk, lowest-value part.**
- **The law sets requirements on the system itself:** system documentation, processing history, and keeping records until the end of the seventh year after the financial year. Accounting software already meets these, and typically costs a few hundred SEK a month or less.
- **Tax and VAT rules change every year,** so a homemade system needs ongoing maintenance just to stay correct.
- **Someone has to build and maintain it.** The business plan says you don't do programming. That leaves an AI agent writing your official books, with you responsible for errors you can't easily check.
- **The spec's own "data ownership" goal is met by SIE export,** which every Swedish accounting program offers.
- **It contradicts itself:** it aims to "avoid unnecessary ongoing costs" but puts the most expensive part to build and maintain at the centre.

**Recommendation:** use standard accounting software for sections A (accounting, VAT, tax, reports and archive). Build only what no off-the-shelf tool does well:
- the IP evidence register;
- hours and contributions;
- a light planning view;
- links from these to the accounting software's vouchers by voucher number.

That cuts the scope by roughly half and removes the legal-compliance risk.

**4. The phase order is backwards for your needs.**
- **Most urgent is IP evidence.** The legal report says to create the inventory *before* anyone else contributes. The spec puts it third.
- **Accounting is needed now, not last.** With bought software, that's solved on day one.
- **Suggested order:** IP register and hours first, then planning, and connect accounting software from the start.

## Smaller points
- **The IP timestamps need to be concrete.** "Independently verifiable timestamps where available" is vague. You already have two sources: git commits pushed to GitHub, and Dropbox version history. For key milestones, a formal timestamping service would add more proof.
- **The same table appears twice:** the shared Projects table and the Project Register in section D.
- **Hosting isn't specified.** Will it run on your computer or online? That decides cost, backups, login security, and who can reach it.
- **Contributor data falls under GDPR.** The spec mentions IMY but has no handling rules: what you store about Mattias, Jousef or interns, and for how long.
- **It mixes two kinds of document.** Some lines instruct the coding agent ("The agent must not assume K2…", "The agent must verify…"). Those belong in a separate build brief, not the functional spec.
- **Taking over pre-AB costs needs an accountant.** Whether a future AB can take over costs from the firm or from the founders is a tax question, and so is moving existing IP into an AB. The spec is right to flag it, so keep that rule.
- **Planning tools already exist.** GitHub Projects and Trello cover tasks and milestones for free. Section D only adds value if hours link to tasks, so keep it small.

## What's good and should stay
- No automatic accounting, ownership or pay obligations created from informal records (Part X).
- The event date, entry date and verification date are kept separate.
- "A hash proves integrity, not authorship", and "database records aren't legal proof".
- Evidence exports readable without the app.
- Audit history that can't be edited.

**Questions before revising:**
- Is "Milli Studio AB" a new decision, or should the spec follow the legal report's Tessera AB?
- Are you open to buying accounting software and building only the IP, hours and planning parts?

If useful, I can turn this review into a revised spec for you to approve.

---

### Dani · 2026-10-10 04:10

i don't want to spend money on existing tools so i would like to develop my own app

---

### Claude · 2026-10-10 04:11

Okay, building your own app it is. One thing to know first: the law sets requirements for the bookkeeping itself (system documentation, processing history, a 7-year archive), and those stay your responsibility no matter who builds the app. The spec can be designed around them, and since your current situation is simple, that's doable.

## Your situation makes version 1 much smaller
Dani Milli Studio is an enskild firma, isn't VAT-registered and has low turnover. That means:
- **No VAT module for now.** You don't report VAT, so section 11 can wait until you register.
- **Simple bookkeeping.** A sole trader with turnover this low can probably record income and expenses when they're paid (the cash method, "kontantmetoden"). Check that's allowed for you, but it would make section 9 much simpler.
- **The year-end is a simplified one,** plus the NE appendix to your income tax return. The AB's annual report, corporate tax and K2/K3 can wait until an AB exists.
- **It can cost nothing to run.** It can run on your own computer, with backups to Dropbox and GitHub, which you already use.
- **Free help to check it:** NyföretagarCentrum's advisers and Skatteverket's guidance cost nothing. Having one of them check your first year's output would catch mistakes before they matter.

## What I'd change in the spec
1. **Model two companies from the start:** Dani Milli Studio now, and an AB later. Version 1 handles the sole trader only, but the data structure shouldn't need rebuilding when the AB comes.
2. **Replace the pre-incorporation register.** Tessera's costs so far go into Dani Milli Studio's books as normal business costs. The real open question is moving costs and IP to a future AB. That stays a "flag for review" item.
3. **Change the phase order:**
   1. foundation, IP evidence register and hours, because the IP inventory is the most urgent;
   2. sole-trader bookkeeping, because you need books now;
   3. light planning;
   4. VAT and AB accounting, built only when you register for VAT or form the AB.
4. **Make the timestamps concrete:** git commits pushed to GitHub, plus Dropbox version history, for the IP evidence.
5. **Small fixes:** merge the two duplicate project tables, add basic GDPR rules for contributor data, and move the instructions to the coding agent into a separate build brief.

**Two questions before I revise it:**
- Is "Milli Studio AB" a new decision, or should the spec follow the legal report's Tessera AB? (Version 1 is unaffected either way.)
- Shall I write the revised spec as a new file in the repo, for example under business/? I'll show it to you before saving.

---

### Dani · 2026-10-10 04:19

yes it needs to adhere to sweden's bookkeeping requirements. i want to be able to enter data and have the app produce the documents required by swedish law

My new studio's name is dani milli ab, i'm planning to establish it. and since work has already started documentation and bookkeeping need to begin now even before registering. the intended company name is milli studio but it might change. 
i actually prefer for tessera to be my personal property and avoid connecting it to dani milli studio. dani milli studio will be closed. tessera\s development so far has not been conducted under dani milli studio and it's better for it to remain that way until the ab is established.

---

### Claude · 2026-10-10 04:20

That changes the picture. Part of my last review was wrong: I assumed Tessera ran under Dani Milli Studio. Since it doesn't, your spec's **separate pre-incorporation register was the right design**, so it stays.

## What this means

**1. The app has two "owners" of records, not two companies:**
- **You personally, until the AB exists.** This covers Tessera's IP evidence, your hours, and costs you've paid privately. It's documentation, not official bookkeeping.
- **The AB, from registration onwards,** with full bookkeeping under Bokföringslagen.

Dani Milli Studio doesn't need to be in the app at all, since you're closing it and it isn't part of Tessera.

**2. When the AB's books start (please verify this).** As I understand Swedish company law, the company exists "under bildande" (in formation) from the moment the founding document, the stiftelseurkund, is signed. From then on, costs incurred *on the company's behalf* can be taken over by the AB once it's registered. Costs from before that point are private. I'm fairly but not fully sure of the details, so check this with Skatteverket, Bolagsverket or NyföretagarCentrum before relying on it. The app should record which period each cost falls in, which your spec already does.

**3. Keeping Tessera personal fits one of the legal report's options.** The report's option B is that you own the IP and license it to the AB. The alternative is to assign it to the AB once it's formed. That decision can wait until the AB exists. It's still worth a short legal and tax check at that point.

**4. The legal documents the app should produce for an AB:**
- **Bookkeeping:** journal and general ledger (grundbok, huvudbok), vouchers (verifikationer), system documentation and processing history. These are required continuously.
- **Year-end:** the annual accounts and annual report (årsredovisning, K2 or K3), filed with Bolagsverket.
- **Tax:** the AB's income tax return (INK2), plus VAT returns once the AB is VAT-registered.

**The app produces the figures and documents, and you file them yourself for free.** INK2 can be filled in through Skatteverket's e-service, and the annual report goes to Bolagsverket. Check whether Bolagsverket still accepts paper filing or requires digital filing through approved software. That affects whether filing stays free.

## Where your records now disagree
Yesterday's business plan and the Almi form both say Dani Milli Studio develops Tessera:
- **business/00 and 02:** "Tessera, a mobile game developed by Dani Milli Studio".
- **business/01:** Dani Milli Studio's details, plus "Tessera is developed under Dani Milli Studio for now".
- **business/06 and 12:** set up for a sole trader. For example, file 12 deducts egenavgifter (sole-trader social fees), which an AB doesn't pay.
- **business/13, section 1:** "Decide whether Tessera remains under Dani Milli Studio" is now decided: it doesn't.
- **The Almi form (8 Oct):** "Dani Milli Studio utvecklar och ger ut Tessera" (Dani Milli Studio develops and publishes Tessera). That form is already submitted, so it can't change. Correct it at the Almi meeting.

These documents are also part of your IP evidence trail, so they should match how you hold Tessera.

**Questions:**
1. **Company name.** Your message says both "Dani Milli AB" and "Milli Studio". I'll use **"Milli Studio AB (working name)"**, since you called that the intended name. Is that right?
2. **Has Dani Milli Studio ever paid for, or booked, any Tessera cost?** For example the AI-agent subscription or software. If so, those entries sit in the firm's books and need sorting out with an accountant.
3. Shall I propose updates to the business plan files so they say Tessera is your personal project, to be developed under a future AB?
4. Shall I then draft the revised app spec as a new file?

---

### Dani · 2026-10-10 04:20

correction sorry. the new studio's name is milli studio ab

---

### Claude · 2026-10-10 04:20

Noted: **Milli Studio AB**, still a working name until you register it. I'll use that from now on.

Before I start, are questions 2–4 still open?
- **2.** Has Dani Milli Studio ever paid for or booked any Tessera cost?
- **3.** Should I propose updates to the business plan so it says Tessera is your personal project, to be developed under Milli Studio AB?
- **4.** Should I then draft the revised app spec as a new file?

---

### Dani · 2026-10-10 04:27

it's ok for contradictions with the business plan. i want this app to be something i'll be using regardless of what's in the business plan. i just want it to keep records, do book keeping, produce reports and tax stuff, document expences and work hours (not only to keep a log but also strengthen ownership if the need rises) and do light project planning. my future plan is to use it whether for tessera or any other project i'll be developing through the ab i'm going to start. it's better to start documenting and keeping records from now since work has begun. i know for a fact that documentation doesn't have to wait until the ab is approved.

---

### Claude · 2026-10-10 04:27

Agreed. Documentation doesn't have to wait for the AB, and starting now gives you the strongest records. Here's what I'll change in the spec:

1. **Two record owners:** "you personally" from now, and "Milli Studio AB" from formation. Every project, cost, hour and asset belongs to one of them. Tessera starts under you personally. The AB's name is a setting you can change.
2. **Record-keeping starts on day one:** expenses, working hours, IP evidence and planning come first, because work has already begun.
3. **Hours and expenses built to work as evidence:**
   - Entries are append-only; changes are added, never overwritten.
   - Each entry is timestamped when you make it.
   - Entries made later are marked as reconstructed, because a log written at the time is stronger evidence than one rebuilt afterwards.
   - Exports carry file hashes and are pushed to GitHub, which gives a third-party timestamp.
4. **The AB bookkeeping engine is ready before the AB's first transaction.** It produces journal and general ledger (grundbok, huvudbok), vouchers, system documentation and processing history, annual report figures (K2), INK2 figures and SIE export. VAT is added when the AB registers for it. You file everything yourself, for free.
5. **Several projects,** not only Tessera.
6. **No running costs:** it runs on your computer, with backups to Dropbox and GitHub.
7. **Smaller fixes from my review:**
   - merge the duplicate project tables;
   - add GDPR rules for contributor data;
   - move the instructions to the coding agent into a separate build brief;
   - make the timestamps concrete.

**One recommendation on location:** keep the app in its own private folder and repo, outside the Tessera repo. It will hold your personal finances and is meant to serve every future project. If Jousef or Mattias ever get access to the Tessera repo, they shouldn't see your books.

Shall I write the revised spec as a new file? If so, where do you want the new app folder?

---

### Dani · 2026-10-10 04:31

to answer your questions:
2. Has Dani Milli Studio ever paid for or booked any Tessera cost?
dani milli studio has not been involved in any way. no funds, purchased, logged hours or anything. The only involvement is that i placed dani milli studio's name on the gdd, tdd, and artwork for copyright purposes.. but it wasn't official. i don't know. i still own it all personally and no funds or purchases were issued by it. if that's an issue let me know

3. Should I propose updates to the business plan so it says Tessera is your personal project, to be developed under Milli Studio AB?
let's keep that to later

4. Should I then draft the revised app spec as a new file?
Yeah go ahead

---

### Claude · 2026-10-10 04:32

I'll put the app in its own folder, `Dropbox/Studio/milli-studio-app/`, outside the Tessera repo, as I recommended. Writing the spec now.

The revised spec is saved at `Dropbox/Studio/milli-studio-app/SPEC.md`, as version 3.0. A short "Changes from version 2.0" list sits at the top. Everything else keeps your structure and wording.

**Main changes:**
- **Two record owners:** you personally from now, and Milli Studio AB from formation. The AB's name is a setting you can change.
- **Hours, expenses and IP records work as evidence.** They're append-only, timestamped by the system, and marked as "contemporaneous" (entered within 7 days of the event) or "reconstructed" (entered later, with a source).
- **Three cost periods:** before the stiftelseurkund is signed, while the company is under formation, and after registration. The exact rules are flagged for checking against official sources.
- **The app produces the legal documents** (journal, general ledger, annual report, INK2 figures, SIE export), and you file them yourself.
- **VAT is built only when the AB registers for VAT.**
- **New phase order:** expenses and hours, then IP evidence, then planning, then AB bookkeeping, then year-end, then VAT.
- **Concrete timestamps:** git commits pushed to GitHub, Dropbox history, and an optional formal timestamp for milestones.
- **No running costs:** it runs locally, with encrypted backups to Dropbox and GitHub.
- **Also added or changed:** GDPR rules for contributor data, the duplicate project table merged, and a separate build brief for the coding agent (Part XVI).

**About "© Dani Milli Studio" on the GDD, TDD and artwork:** it's a minor point, not a problem. An enskild firma isn't a separate legal person, so the notice still points to you. Copyright belongs to the creator automatically, and the notice doesn't transfer anything. Three suggestions:
1. Record it in the IP register as a dated note: the notice was a trading name only, and the firm paid nothing, bought nothing and logged no hours for Tessera.
2. From now on, use "© Dania Almilli Syrén" on new versions.
3. Leave the old files unchanged. They're part of the history, so save new versions instead of editing them.

When you close Dani Milli Studio, tell the accountant or Skatteverket that Tessera was never part of it.

One more question: shall I save these facts to memory, so future sessions know them?
- Tessera is your personal property.
- Dani Milli Studio will close.
- Milli Studio AB is planned.
- The app lives in `milli-studio-app/`.

---

### Dani · 2026-10-10 04:38

yes to all. but the app should have a name that indicaate its function. not sure what to call it.

---

### Claude · 2026-10-10 04:38

I've saved those facts to memory.

For the name, it helps if it covers all four jobs (books, hours, evidence, planning) or names the one that matters most. Some options:

| Name | What it says |
|---|---|
| **Studio Records** | Plain, and covers everything: records for the studio. |
| **Studio Ledger** | Leans on bookkeeping, though a "ledger" is also any formal record. |
| **Ledger & Origin** | Both main jobs: the books, and proof of where the work came from. |
| **Provenance** | The art-world word for a documented origin and ownership history. Fits the IP side well, the accounting side less. |
| **Verifikat** | Swedish for an accounting voucher, a document that proves a transaction. Strongly bookkeeping. |

**My recommendation: Studio Records.** It's clear to anyone, it covers all four sections, and it fits any future project, not just Tessera. If you'd like more character, Ledger & Origin best captures the two things that make your app different from ordinary accounting software.

Once you've picked one, I can rename the folder and update the spec title. I'll ask before changing either.

---

### Dani · 2026-10-10 04:40

ok go with your recommendation. i want to examine your revised specs document before you start anything

---

### Claude · 2026-10-10 04:40

I've named the app **Studio Records**. The changes:
- The folder is now `Dropbox/Studio/studio-records/`.
- The spec's title and its "Changes from version 2.0" list include the name.
- Memory has the new name and path.

The spec is ready for you to review at `Dropbox/Studio/studio-records/SPEC.md`. I won't start building anything until you've been through it. Tell me what you'd like changed.

---

### Dani · 2026-10-10 04:42

i meant the entire document

---

### Claude · 2026-10-10 04:42

Here's the full document; click to open it in the editor: [SPEC.md](file:///C:/Users/someo/Dropbox/Studio/studio-records/SPEC.md)

It's the complete revised version 3.0, all sixteen parts, at about 1,000 lines. Everything in my summaries is in there in full. If you'd rather read it here in the chat, I can paste it a few parts at a time.

Or did you mean the name should appear throughout the document, not only in the title? Right now the text says "the application" everywhere else, and I can change that to "Studio Records".

---

### Dani · 2026-10-10 04:46

i meant, that i gave you the spec document pasted below and i asked you to review it. then i answered all your questions and now i want to read your revised version after getting all the answers from me
-----------------------------------------------------------------------


# MILLI STUDIO
## Business, Development & IP Management Application
### Functional and Data Specification — Version 2.0

**Initial business:** Milli Studio AB (proposed name)  
**Initial project:** Tessera  
**Primary user:** Company founder and administrator  
**Application type:** Custom internal management system  
**Language:** English interface, Swedish accounting terminology where appropriate  
**Primary currency:** SEK  
**Operating jurisdiction:** Sweden

---

# PART I — PURPOSE AND ARCHITECTURE

## 1. Purpose

Develop a unified application to manage Milli Studio's business administration and Tessera's development.

The application must support:

1. Swedish bookkeeping and tax administration.
2. Development expenses, working hours, and contributions.
3. Intellectual property documentation and evidence preservation.
4. Basic project planning and scheduling.

The long-term objective is to replace commercial accounting software while maintaining accurate, accessible, and legally compliant records.

The application must be suitable for a small Swedish aktiebolag (AB), initially operated by one person.

It should support additional projects and contributors without requiring a complete redesign.

### Core principles

**Simplicity:** Everyday operations should require minimal manual work.

**Accuracy:** Financial calculations and accounting entries must be verifiable.

**Traceability:** Every important record must have a documented history.

**Separation:** Project-management information must not automatically become official accounting information.

**Data ownership:** All records and files must remain accessible independently of the application.

**Extensibility:** Additional functions may be introduced as the business grows.

---

# 2. Application Structure

The application has four primary sections.

| Section | Responsibility |
|---|---|
| A. Accounting & Taxes | Official financial records, VAT, taxation, financial reporting |
| B. Development & Contributions | Hours, costs, funding, and individual contributions |
| C. Intellectual Property & Evidence | Creative assets, authorship, development history, agreements |
| D. Project Planning | Tasks, milestones, schedules, progress |

A shared system provides:

- Dashboard
- Search
- Document storage
- Notifications
- User management
- Audit history
- Backups
- Data exports

All sections use a common database architecture but maintain distinct record types.

**Financial records must never be automatically created from informal project records without an appropriate accounting event and classification.**

---

# PART II — SHARED DATABASE DESIGN

## 3. General Record Requirements

Every database record must include:

| Field | Purpose |
|---|---|
| Record ID | Unique system-generated identifier |
| Created at | Timestamp of record creation |
| Created by | User responsible for creating the record |
| Updated at | Timestamp of latest modification |
| Record status | Draft, active, archived, or applicable status |
| Related project | Optional reference to Tessera or another project |
| Notes | Optional additional information |
| Attachments | Related documents or files |
| Audit reference | Link to the record's change history |

Financial records require additional accounting-specific controls.

Historical information must preserve the distinction between:

- The original event date.
- The date the information was entered into the application.
- The date the information was verified.

These dates must not be treated as interchangeable.

## 4. Shared Reference Tables

The database should contain reusable reference tables.

### 4.1 Projects

Fields:

- Project ID
- Project name
- Description
- Project owner
- Start date
- End date, if applicable
- Status
- Budget
- Notes

Initial project: Tessera.

### 4.2 People & Organizations

Fields:

- Contact ID
- Name
- Person or organization
- Role
- Contact details
- Start date of involvement
- End date, if applicable
- Agreement references
- Notes

Roles may include:

- Founder
- Contributor
- Contractor
- Supplier
- Customer
- Adviser

A person's role must not automatically establish employment, ownership, or payment obligations.

### 4.3 Documents

Fields:

- Document ID
- Document name
- Document category
- Original filename
- File format
- File size
- Storage location
- Upload date
- Original document date, if known
- File hash
- Related records
- Notes

Documents must be reusable across sections without unnecessary duplication.

### 4.4 Audit Events

Fields:

- Audit event ID
- Record reference
- User
- Action
- Timestamp
- Previous value or version reference
- New value or version reference
- Reason for change, where applicable

Audit records must be protected against ordinary editing or deletion.

---

# PART III — SECTION A: ACCOUNTING & TAXES

## 5. Company Profile

### Purpose

Store the information required to configure the accounting system for the actual company.

### Fields

- Registered company name
- Organization number
- Registered address
- Company registration date
- Company formation date
- Financial year
- Accounting method
- Accounting framework
- VAT registration status
- VAT reporting frequency
- F-tax status
- Employer registration status
- Primary currency
- Bank account references
- Relevant reporting deadlines

### Functions

- Configure company information.
- Configure accounting periods.
- Configure applicable accounting rules.
- Maintain historical changes to company settings.
- Prevent changes to closed periods without an authorized correction process.

The application must not assume that Milli Studio AB has been registered before registration is confirmed.

---

## 6. Chart of Accounts

### Purpose

Provide the structure used to classify financial transactions.

### Fields

- Account number
- Account name
- Account category
- Account description
- Active/inactive status
- Applicable tax or reporting mappings
- Effective date
- Notes

### Functions

- Support the Swedish BAS chart of accounts.
- Allow appropriate account configuration.
- Prevent invalid account references.
- Preserve historical account mappings.

The BAS chart should be versioned so updates do not silently alter historical reporting.

---

## 7. Expense Register

### Purpose

Record every relevant purchase, subscription, service, and business-related expenditure.

This includes expenses paid personally before the AB exists.

### Required and Optional Fields

| Field | Description |
|---|---|
| Expense ID | Unique identifier |
| Expense date | Date the expense occurred |
| Invoice date | Date shown on invoice |
| Payment date | Actual payment date |
| Description | What was purchased |
| Business purpose | Why the purchase was necessary |
| Project | Tessera or another project |
| Expense category | Software, equipment, services, etc. |
| Supplier | Name of supplier |
| Supplier country | Relevant for VAT treatment |
| Invoice number | Supplier's invoice reference |
| Net amount | Amount excluding VAT, if known |
| VAT amount | VAT charged, if applicable |
| Gross amount | Total amount |
| Currency | Original transaction currency |
| SEK amount | Accounting currency equivalent |
| Exchange rate | Rate and source, where applicable |
| Paid by | Individual or company |
| Payment method | Card, bank transfer, etc. |
| Payment account | Relevant bank or payment account |
| Purchase period | Before or after company formation/registration |
| Business-use percentage | Documented business use |
| Receipt/invoice | Supporting document |
| Accounting status | Unreviewed, pending, posted, etc. |
| Tax treatment | Pending, reviewed, applicable classification |
| VAT treatment | Pending or confirmed classification |
| Reimbursement status | Not applicable, pending, approved, paid |
| Notes | Additional explanation |

### Functions

- Add expenses manually.
- Upload invoices and receipts.
- Support recurring subscriptions.
- Identify potentially duplicated expenses.
- Search and filter expenditure.
- Link expenses to development projects.
- Generate expense summaries.
- Track reimbursement requests.
- Flag uncertain accounting and tax treatment.

### Important rule

An expense's business purpose does not automatically establish that the future AB may deduct it.

---

## 8. Pre-Incorporation Expenses

### Purpose

Maintain a separate register for expenses incurred before Milli Studio AB is established.

This is particularly important for Tessera's existing AI-agent subscriptions.

### Additional Fields

- Original purchaser
- Original payment source
- Purchase date
- Intended business
- Intended business activity
- Evidence of intended business use
- Company formation status at purchase
- Company registration status at purchase
- Invoice recipient
- Potential reimbursement arrangement
- Review status
- Review notes
- Supporting documentation

### Functions

- Record expenses before incorporation.
- Preserve their original dates.
- Identify who legally incurred each expense.
- Link expenses to Tessera.
- Track possible future reimbursement.
- Flag expenses requiring accounting or tax review.

### Accounting rule

These records must initially remain outside the AB's official bookkeeping unless an appropriate accounting basis is established.

The system must not automatically treat pre-incorporation purchases as deductible AB expenses.

### Example

**Expense:** AI coding-agent subscription  
**Project:** Tessera  
**Purpose:** Software development and project documentation  
**Paid by:** Founder personally  
**Business use:** 100% Tessera, as declared by the founder  
**Period:** Before AB formation  
**Supporting evidence:** Invoice, payment confirmation, subscription records  
**Tax treatment:** Pending review  
**Accounting status:** Historical project expense; not yet posted to AB accounts

This information must remain available even if the expense is ultimately not deductible by the AB.

---

## 9. Bookkeeping Journal

### Purpose

Maintain the company's official accounting transactions.

### Voucher Fields

- Voucher ID
- Voucher number
- Voucher series
- Transaction date
- Posting date
- Description
- Counterparty, where applicable
- Supporting document reference
- Accounting period
- Posting status
- Correction reference
- Created by
- Posted by
- Posting timestamp

### Journal Line Fields

- Journal line ID
- Voucher reference
- BAS account
- Debit amount
- Credit amount
- Currency information, where relevant
- Project reference, where relevant
- VAT code, where relevant
- Description

### Functions

- Double-entry bookkeeping.
- Validate balanced transactions.
- Assign voucher numbers.
- Attach supporting documentation.
- Maintain chronological records.
- Maintain account-based records.
- Produce general ledger reports.
- Support opening balances.
- Support corrections and reversals.
- Lock closed accounting periods.

### Mandatory behavior

Posted accounting entries must not be silently overwritten or deleted.

Corrections must preserve the original entry and provide a traceable explanation.

The application must also maintain the system documentation and processing history required by applicable Swedish bookkeeping rules.

---

## 10. Bank Transactions & Reconciliation

### Purpose

Compare accounting records with actual financial transactions.

### Fields

- Bank transaction ID
- Bank account
- Transaction date
- Value date
- Description
- Counterparty
- Amount
- Currency
- Bank reference
- Imported statement reference
- Matching voucher
- Reconciliation status
- Notes

### Functions

- Manual transaction entry.
- Bank statement import.
- Transaction matching.
- Duplicate detection.
- Reconciliation reports.
- Unmatched transaction warnings.

Automatic bank connections are not required initially.

---

## 11. VAT — Moms

### Purpose

Calculate and prepare Swedish VAT reporting information.

### Fields

- VAT record ID
- Related transaction
- Transaction type
- Supplier/customer country
- VAT jurisdiction
- VAT rate
- Taxable amount
- VAT amount
- VAT reporting category
- Reverse-charge status
- Deductibility status
- Reporting period
- Review status
- Supporting documentation

### Functions

- Domestic VAT calculations.
- EU transaction handling.
- Non-EU transaction handling.
- Reverse-charge VAT where applicable.
- VAT summaries.
- VAT reporting data.
- Transaction-level validation.
- Manual review of uncertain transactions.

### Requirements

The system must distinguish:

- VAT charged by suppliers.
- Deductible input VAT.
- Output VAT.
- Reverse-charge transactions.
- Transactions outside the scope of VAT.
- Exempt transactions.

VAT calculations must follow the rules applicable to the transaction date.

The system must not assume that every purchase qualifies for VAT recovery.

---

## 12. Corporate Tax Administration

### Purpose

Support tax calculations and reporting for the AB.

### Fields

- Tax record ID
- Tax year
- Tax type
- Related accounting period
- Accounting result
- Tax adjustments
- Estimated taxable income
- Applicable tax rate
- Estimated tax
- Preliminary tax paid
- Tax account transactions
- Reporting deadline
- Payment deadline
- Filing status
- Supporting calculations
- Review status

### Functions

- Track preliminary tax.
- Track tax payments.
- Calculate provisional corporate tax.
- Record adjustments between accounting and taxable results.
- Track deadlines.
- Prepare supporting tax schedules.
- Preserve calculation histories.

Tax rates and rules must be date-sensitive and configurable.

The application must not present provisional calculations as confirmed tax liabilities.

---

## 13. Financial Reports

### Required Reports

- General ledger
- Trial balance
- Income statement
- Balance sheet
- Expense report
- VAT summary
- Tax summary
- Bank reconciliation report
- Project expenditure report

### Year-End Functions

- Closing checklist
- Accruals and adjustments
- Depreciation support
- Reconciliation checks
- Annual accounts support
- Annual report preparation
- Corporate income tax return preparation

### Requirements

Annual reporting must follow the accounting framework applicable to the company.

The agent must not assume that K2 is always available or appropriate.

The application must support verification of calculations against source records.

Official electronic submission is not required in the first version.

---

## 14. Accounting Archive

### Purpose

Preserve legally required accounting information.

### Functions

- Store vouchers.
- Store receipts and invoices.
- Preserve accounting histories.
- Maintain system documentation.
- Maintain processing histories.
- Apply legally required retention periods.
- Support independent backups.
- Support restoration testing.
- Export accounting data.
- Support SIE exports.
- Export human-readable reports.

### Requirements

Retention and archiving must comply with applicable Swedish rules.

The application must not automatically delete records when an arbitrary storage period expires.

The agent must verify current requirements concerning electronic storage, accessibility, integrity, and permitted disposal of original documents.

---

# PART IV — SECTION B: DEVELOPMENT & CONTRIBUTIONS

## 15. Working Hours

### Purpose

Record the time spent developing Tessera.

### Fields

- Work session ID
- Date
- Contributor
- Project
- Task
- Activity category
- Start time, optional
- End time, optional
- Hours worked
- Description
- Development phase
- Paid/unpaid status
- Historical/pre-incorporation indicator
- Notes

### Activity Categories

- Concept development
- Game design
- Art and illustration
- 3D development
- Programming
- Technical research
- Business administration
- Meetings
- Testing
- Documentation
- Other

### Functions

- Add time manually.
- Associate time with tasks.
- Generate weekly and monthly summaries.
- Calculate total development hours.
- Compare estimated and actual time.
- Report hours by activity and contributor.

### Important Rule

Unpaid hours are project-management information.

They must not automatically become company expenses, shareholder investments, compensation obligations, or ownership rights.

---

## 16. Development Costs

### Purpose

Calculate the resources spent developing Tessera.

### Fields

- Development cost ID
- Project
- Cost category
- Related expense
- Amount
- Currency
- Date
- Development phase
- Funding source
- Budget category
- Notes

### Functions

- Link to expense records.
- Summarize costs by category.
- Summarize costs by milestone.
- Compare actual costs with budgets.
- Generate monthly reports.

Expenses should be entered once and referenced across sections.

---

## 17. Contributor Records

### Purpose

Document individual participation.

### Fields

- Contributor ID
- Person
- Role
- Start date
- End date
- Project
- Contribution type
- Related work sessions
- Related expenses
- Agreement references
- Notes

### Contribution Types

- Creative work
- Technical work
- Financial contribution
- Equipment
- Services
- Advice
- Other

### Functions

- Summarize individual contributions.
- Link contributions to supporting records.
- Track agreements.
- Distinguish paid and unpaid work.
- Generate contribution reports.

### Important Rule

A contribution record is not a legal determination of ownership, employment, or compensation.

---

## 18. Funding & Reimbursements

### Purpose

Track who has provided money or paid expenses on behalf of the project or company.

### Fields

- Funding record ID
- Contributor
- Date
- Amount
- Currency
- Funding type
- Recipient
- Related expense
- Supporting agreement
- Reimbursement status
- Accounting reference
- Notes

### Functions

- Track personal expenditure.
- Track documented company funding.
- Track agreed reimbursements.
- Distinguish funding from revenue.
- Distinguish loans from capital contributions.
- Prevent automatic accounting classifications.

The system must require appropriate documentation before classifying a payment as a shareholder loan, capital contribution, reimbursement, or another legal transaction.

---

# PART V — SECTION C: INTELLECTUAL PROPERTY & EVIDENCE

## 19. IP Asset Register

### Purpose

Create an inventory of original Tessera material.

### Fields

- Asset ID
- Asset name
- Asset category
- Description
- Creator
- Creation date, if known
- Date confidence level
- Project
- Original file reference
- Current version
- Related assets
- Claimed rights holder
- Rights status
- Third-party components
- Supporting evidence
- Notes

### Asset Categories

- Illustrations
- Concept art
- Character designs
- Environment designs
- Storyboards
- Game design documents
- Technical documents
- Source code
- Audio
- Other creative material

### Functions

- Register assets.
- Associate creators.
- Attach original files.
- Link related assets.
- Search by creator, category, and date.
- Generate asset inventories.

The system must distinguish copyright-protected expression from general concepts, ideas, and mechanics.

---

## 20. File Versions & Integrity

### Purpose

Preserve the development history of creative work.

### Fields

- Version ID
- Asset reference
- Version number
- File reference
- Original filename
- Original metadata
- Recorded creation date
- Import date
- File hash
- Change description
- Previous version
- Contributor
- Notes

### Functions

- Preserve original files.
- Store historical versions.
- Calculate SHA-256 hashes.
- Verify file integrity.
- Prevent silent overwriting.
- Export version histories.

### Important Rule

A cryptographic hash helps demonstrate file integrity.

It does not independently establish who created the file or when.

---

## 21. Development Evidence Timeline

### Purpose

Document how Tessera developed over time.

### Fields

- Timeline event ID
- Event date
- Event type
- Description
- People involved
- Related project
- Related assets
- Supporting documents
- Evidence source
- Date reliability
- Notes

### Event Types

- Initial concept
- Design decision
- Artwork creation
- Document revision
- Meeting
- Technical development
- Milestone
- Agreement
- Other

### Functions

- Create chronological timelines.
- Link events to original files.
- Import historical records.
- Record uncertainty about dates.
- Generate development-history reports.

Historical information must never be assigned fabricated creation dates.

---

## 22. Ownership & Rights Register

### Purpose

Document the available evidence concerning authorship and legal rights.

### Fields

- Rights record ID
- Asset
- Creator
- Claimed rights holder
- Rights type
- Basis of claim
- Supporting agreement
- Effective date
- Expiration date, if applicable
- Territorial scope, if applicable
- Restrictions
- Verification status
- Notes

### Rights Types

- Authorship
- Economic copyright
- Licence
- Assignment
- Third-party permission
- Other documented rights

### Functions

- Track authorship.
- Track rights holders.
- Record transfers.
- Record licences.
- Identify missing agreements.
- Generate rights summaries.

### Important Rule

Database records must not be treated as conclusive legal proof.

The underlying original material and valid agreements remain essential.

---

## 23. Agreements Archive

### Purpose

Preserve documents establishing contractual rights and obligations.

### Fields

- Agreement ID
- Agreement title
- Agreement type
- Parties
- Signature date
- Effective date
- Expiration date
- Related project
- Related assets
- Signed document
- Status
- Notes

### Agreement Types

- IP assignment
- Licence
- Contributor agreement
- Contractor agreement
- Confidentiality agreement
- Partnership agreement
- Other

### Functions

- Store signed agreements.
- Link agreements to contributors and assets.
- Track relevant dates.
- Identify missing documentation.
- Export agreements.

The application must not automatically create or execute legal transfers of intellectual property.

---

## 24. Evidence Export

### Purpose

Produce an independently inspectable archive of Tessera's development history.

### Export Contents

- Selected original files
- File metadata
- File hashes
- Version history
- Timeline records
- Authorship records
- Relevant agreements
- Evidence index

### Requirements

Exports should be readable without the application.

Important milestones should support independently verifiable timestamps where available.

Evidence archives must preserve the distinction between original evidence and later descriptions entered into the database.

---

# PART VI — SECTION D: PROJECT PLANNING

## 25. Project Register

### Purpose

Manage Tessera and future projects.

### Fields

- Project ID
- Name
- Description
- Owner
- Start date
- Target completion date
- Status
- Budget
- Notes

### Functions

- Create projects.
- Update project status.
- View associated tasks.
- View hours and expenditure.
- View milestones.

---

## 26. Task Management

### Purpose

Organize day-to-day development.

### Fields

- Task ID
- Task title
- Description
- Project
- Milestone
- Category
- Priority
- Assigned person
- Start date
- Due date
- Estimated hours
- Actual hours
- Status
- Completion date
- Attachments
- Notes

### Statuses

- Not started
- In progress
- Blocked
- Completed

### Functions

- Create tasks.
- Assign tasks.
- Update progress.
- Set deadlines.
- Attach documents.
- Record time.
- Filter and search tasks.

---

## 27. Milestone Management

### Purpose

Organize development into manageable stages.

### Fields

- Milestone ID
- Name
- Description
- Project
- Start date
- Target date
- Completion date
- Status
- Related tasks
- Budget
- Notes

### Functions

- Create milestones.
- Associate tasks.
- Track progress.
- Track deadlines.
- Generate milestone summaries.

Milestone completion should be determined by explicit status updates or defined completion criteria, not merely by elapsed time.

---

## 28. Calendar & Schedule

### Purpose

Provide a simple overview of upcoming work.

### Functions

- Calendar view.
- Task deadlines.
- Milestone deadlines.
- Upcoming activities.
- Overdue task indicators.
- Basic timeline view.

Complex dependency management is not required initially.

---

# PART VII — HOW THE SECTIONS CONNECT

## 29. Shared Relationships

The application should use linked records rather than duplicate information.

### Example 1 — AI-Agent Subscription

One expense is entered into the expense register.

It can then be associated with:

**Accounting & Taxes**
- Expense information
- Invoice
- Payment
- Tax-review status

**Development**
- Tessera
- Software development costs
- Relevant development period

**Project Planning**
- Relevant project or milestone

The accounting record is created only when its proper treatment has been established.

### Example 2 — New Illustration

An illustration is registered in the IP archive.

It can then be linked to:

**Development**
- Hours spent creating it

**Project Planning**
- The task requiring the illustration

**IP Documentation**
- Original file
- Creator
- Versions
- Creation history
- Rights information

### Example 3 — Contributor Work

A contributor records development hours.

The record may be linked to:

- A task
- A milestone
- A creative asset
- A contributor agreement

It must not automatically generate salary, company debt, or ownership rights.

---

# PART VIII — DASHBOARD & USER EXPERIENCE

## 30. Main Dashboard

The dashboard should provide four panels.

### Accounting

- Current financial position
- Recent expenses
- Unpaid bills
- Upcoming tax deadlines
- Items awaiting review

### Development

- Hours worked this month
- Total development hours
- Current expenditure
- Budget remaining

### IP Documentation

- Recently added assets
- Missing supporting documentation
- Recent versions
- Agreements requiring attention

### Project Planning

- Current milestone
- Active tasks
- Upcoming deadlines
- Overdue tasks

The dashboard must distinguish confirmed figures from estimates.

---

## 31. Data Entry

Forms should:

- Use clear labels.
- Explain unfamiliar accounting terms.
- Mark required fields.
- Validate amounts and dates.
- Support attachments.
- Avoid duplicate entry.
- Allow saving drafts.
- Flag incomplete records.

Where useful, the interface should provide short explanations of why particular information is required.

---

## 32. Search & Reporting

Users must be able to search by:

- Date
- Project
- Contributor
- Supplier
- Expense
- Document
- Task
- Asset
- Accounting account

Reports should support filtering and export.

---

# PART IX — SECURITY, BACKUPS & DATA OWNERSHIP

## 33. Security

Requirements:

- Administrator authentication.
- Secure credential storage.
- Encrypted connections where applicable.
- Protected financial and personal information.
- Access permissions for future users.
- Audit logs.
- Secure configuration management.

The system must not store passwords or API credentials in ordinary database fields.

---

## 34. Backups

Requirements:

- Automatic backups.
- Manual backup option.
- Independent backup location.
- Backup integrity checks.
- Restore testing.
- Recovery instructions.

The system must not depend on a single device or storage location for preserving important records.

---

## 35. Data Export

Required formats:

- CSV for structured data.
- PDF for readable reports.
- SIE for accounting interoperability.
- Original formats for creative assets.
- Structured database backups.
- Portable evidence archives.

All exported information must remain understandable without access to the original application.

---

## 36. System Documentation

The agent must produce and maintain:

- Database schema documentation.
- Description of accounting workflows.
- Voucher-numbering rules.
- Processing-history documentation.
- Tax calculation rules.
- Backup and recovery procedures.
- Data export documentation.
- Software version history.
- Applicable legal-rule references.

Changes affecting accounting calculations or record integrity must be documented.

---

# PART X — AUTOMATION RULES

## 37. Permitted Automation

The application may automatically:

- Generate record IDs.
- Calculate totals.
- Validate bookkeeping balance.
- Detect duplicates.
- Generate reports.
- Calculate provisional taxes.
- Flag missing receipts.
- Identify approaching deadlines.
- Calculate recorded working hours.
- Summarize project costs.
- Generate file hashes.
- Create backups.

## 38. Actions Requiring Review

The application must not independently:

- Determine uncertain tax deductibility.
- Claim VAT deductions without sufficient basis.
- Transfer IP ownership.
- Create shareholder rights.
- Establish compensation obligations.
- Submit tax declarations.
- Delete accounting history.
- Alter signed agreements.

These actions require appropriate authorization and, where necessary, professional review.

---

# PART XI — DEVELOPMENT PLAN

## 39. Implementation Phases

### Phase 1 — Foundation

Build:

- Database
- Shared reference tables
- Authentication
- Document storage
- Audit history
- Backup system
- Export functions

### Phase 2 — Development & Expense Records

Build:

- Expense register
- Pre-incorporation expense register
- Working hours
- Development costs
- Contributor records

**Objective:** Begin recording Tessera activity immediately without incorrectly posting historical expenses to the future AB.

### Phase 3 — IP Documentation

Build:

- Asset register
- Original file archive
- Version history
- Development timeline
- Ownership records
- Agreement archive

**Objective:** Preserve Tessera's existing creative history and supporting evidence.

### Phase 4 — Project Planning

Build:

- Projects
- Tasks
- Milestones
- Calendar
- Progress reports

**Objective:** Support basic production management.

### Phase 5 — Accounting Engine

Build:

- Chart of accounts
- Bookkeeping journal
- Vouchers
- Bank reconciliation
- Financial statements
- Accounting archive

**Objective:** Establish a tested bookkeeping system.

Accounting requirements must be researched and documented before this phase begins.

### Phase 6 — Tax & Annual Reporting

Build:

- VAT calculations
- Tax administration
- Year-end adjustments
- Annual reporting support
- Tax declaration preparation

**Objective:** Support the company's statutory reporting requirements.

These features must undergo separate validation before official use.

---

# PART XII — TESTING & ACCEPTANCE

## 40. Functional Tests

The agent must demonstrate that:

1. Records can be created and retrieved.
2. Required fields are validated.
3. Linked records remain consistent.
4. Files are stored without corruption.
5. Original file versions remain accessible.
6. Reports reflect underlying records.
7. Exports preserve essential information.
8. Backups can be restored.
9. Audit histories remain intact.
10. Financial records cannot be silently altered.

## 41. Accounting Tests

The agent must verify:

- Balanced journal entries.
- Correct voucher sequencing.
- Accurate account balances.
- Correct period allocation.
- Traceable corrections.
- Reconciliation accuracy.
- Correct handling of relevant VAT scenarios.
- Accurate financial reports.
- Appropriate record retention.
- Required system documentation.

Testing must use documented examples and independently verified expected results.

## 42. Tax Tests

Tax calculations must be checked against:

- Current Swedish legislation.
- Skatteverket guidance.
- Relevant transaction examples.
- Applicable reporting periods.

Rules must be versioned by effective date.

Uncertain situations must be flagged rather than resolved through unsupported assumptions.

## 43. IP Evidence Tests

The application must demonstrate that:

- Original files remain unchanged.
- Hash verification works.
- Historical dates are preserved.
- Import dates are distinguishable.
- Version histories are complete.
- Evidence exports are independently readable.
- Ownership records link to supporting documentation.

---

# PART XIII — EXCLUDED FEATURES

The first version does not require:

- Payroll administration.
- Employee scheduling.
- Inventory management.
- Customer relationship management.
- Advanced project dependencies.
- Automated bank connections.
- Automatic tax submission.
- Investor management.
- Shareholder administration.
- AI-generated legal agreements.
- Advanced financial forecasting.
- Multiple company accounting environments.

These features should only be added when there is a demonstrated business need.

---

# PART XIV — OFFICIAL REFERENCE REQUIREMENTS

The coding agent must verify all applicable legal requirements against current official sources before implementing regulated functionality.

### Accounting

**Bokföringsnämnden (BFN)**
- Bokföring guidance
- Applicable accounting framework
- System documentation
- Processing history
- Accounting information retention

**Applicable legislation**
- Bokföringslagen (1999:1078)
- Årsredovisningslagen (1995:1554)

### Taxation

**Skatteverket**
- Corporate taxation
- VAT
- Pre-incorporation expenditure
- Tax declarations
- Tax-account administration

**Applicable legislation**
- Inkomstskattelagen (1999:1229)
- Mervärdesskattelagen (2023:200)

### Intellectual Property

**Patent- och registreringsverket (PRV)**
- Copyright
- Intellectual property agreements
- Intellectual property management

**Applicable legislation**
- Upphovsrättslagen (1960:729)

### Personal Data

**Integritetsskyddsmyndigheten (IMY)**
- GDPR guidance
- Personal data protection

The agent must record:

- Source
- Applicable provision or guidance
- Effective date
- Date verified
- Implemented function
- Test cases

A source list alone is not sufficient evidence that the implementation complies with the law.

---

# PART XV — FINAL REQUIREMENTS

The application must:

1. Support a small Swedish AB.
2. Provide complete and traceable financial records.
3. Maintain separate project-development records.
4. Preserve Tessera's pre-incorporation history.
5. Track working hours and contributions.
6. Preserve original creative assets and supporting evidence.
7. Document authorship and contractual ownership history.
8. Provide basic project planning.
9. Generate understandable reports.
10. Support independent backups and exports.
11. Remain simple enough for one administrator.
12. Avoid unnecessary ongoing costs.
13. Support future expansion without compromising existing records.

**Final objective:** Create a unified management application that helps Milli Studio administer its business, manage Tessera's development, preserve its intellectual property history, and maintain reliable financial records.

The application must prioritize legal compliance, data integrity, maintainability, and practical daily use over unnecessary complexity.


-----------------------------------------

---

### Claude · 2026-10-10 04:48

The revised version, with all your answers in, is already saved at `Dropbox/Studio/studio-records/SPEC.md`. Here's the full text:

---

# STUDIO RECORDS
## Records, Bookkeeping & IP Management Application for Milli Studio
### Functional and Data Specification — Version 3.0

**Date:** 10 October 2026
**Record owners:** Dania Almilli Syrén (founder, personally) from now; Milli Studio AB (working name, not yet formed) from its formation
**Initial project:** Tessera, owned personally by the founder
**Primary user:** Founder and administrator
**Application type:** Custom internal management system, run locally
**Language:** English interface, Swedish accounting terminology where appropriate
**Primary currency:** SEK
**Operating jurisdiction:** Sweden

### Changes from version 2.0

- The application is named Studio Records.
- Records now have an owner: the founder personally, or Milli Studio AB. Record-keeping starts now, before the AB exists.
- The AB's name is a setting, since it may change before registration.
- The application supports several projects, not only Tessera.
- Hours and expenses are built to serve as ownership evidence: append-only, timestamped at entry, with later entries marked as reconstructed.
- The application produces the bookkeeping documents and reports Swedish law requires. The founder files them.
- VAT is built only when the AB registers for VAT.
- The phase order now starts with what is needed today: expenses, hours and IP evidence.
- The application runs locally with no running costs.
- The duplicate project tables are merged.
- Personal-data (GDPR) rules for contributor records are added.
- Instructions to the coding agent moved to Part XVI, the build brief.

---

# PART I — PURPOSE AND ARCHITECTURE

## 1. Purpose

Develop one application to keep the founder's and Milli Studio AB's records, and to manage projects such as Tessera.

The application must support:

1. Swedish bookkeeping, financial reports and tax administration for Milli Studio AB.
2. Expenses, working hours and contributions, from now on, for every project.
3. Intellectual property documentation and evidence preservation.
4. Basic project planning and scheduling.

Expense and hour records serve two purposes: a working log, and evidence of who created and funded each project, should ownership ever be questioned.

The application replaces commercial accounting software. It must produce the bookkeeping records and documents Swedish law requires, so the founder can file them without paid tools.

The application must be suitable for a small Swedish aktiebolag (AB), initially operated by one person.

It should support additional projects and contributors without requiring a complete redesign.

### Core principles

**Simplicity:** Everyday operations should require minimal manual work.

**Accuracy:** Financial calculations and accounting entries must be verifiable.

**Traceability:** Every important record must have a documented history.

**Evidence:** Records made at the time of an event carry more weight than records made later. The application must keep the two apart.

**Separation:** Project-management information must not automatically become official accounting information. The founder's personal records must not automatically become the AB's records.

**Data ownership:** All records and files must remain accessible independently of the application.

**Extensibility:** Additional functions may be introduced as the business grows.

**No running costs:** The application runs on the founder's computer and uses free storage the founder already has for backups.

---

# 2. Application Structure

The application has four primary sections.

| Section | Responsibility |
|---|---|
| A. Accounting & Taxes | Milli Studio AB's official financial records, VAT, taxation, financial reporting |
| B. Development & Contributions | Hours, costs, funding, and individual contributions |
| C. Intellectual Property & Evidence | Creative assets, authorship, development history, agreements |
| D. Project Planning | Tasks, milestones, schedules, progress |

A shared system provides:

- Dashboard
- Search
- Document storage
- Notifications
- User management
- Audit history
- Backups
- Data exports

All sections use a common database but keep distinct record types.

**Financial records must never be automatically created from informal project records without an appropriate accounting event and classification.**

**Sections B, C and D work from day one. Section A applies only to Milli Studio AB.**

---

# PART II — SHARED DATABASE DESIGN

## 3. General Record Requirements

Every database record must include:

| Field | Purpose |
|---|---|
| Record ID | Unique system-generated identifier |
| Record owner | The founder personally, or Milli Studio AB |
| Created at | Timestamp of record creation, set by the system |
| Created by | User responsible for creating the record |
| Updated at | Timestamp of latest modification |
| Record status | Draft, active, archived, or applicable status |
| Related project | Optional reference to a project |
| Notes | Optional additional information |
| Attachments | Related documents or files |
| Audit reference | Link to the record's change history |

Financial records require additional accounting-specific controls.

Historical information must preserve the distinction between:

- The original event date.
- The date the information was entered into the application.
- The date the information was verified.

These dates must not be treated as interchangeable.

### 3.1 Contemporaneous and reconstructed entries

Every hour, expense, timeline and asset record must show whether it was entered at the time of the event or reconstructed later.

- **Contemporaneous:** entered within 7 days of the event date. The application sets this automatically.
- **Reconstructed:** entered later, for example when recording work done before the application existed. The entry must name its source, such as a file date, an email, or memory.

The application must never present a reconstructed entry as contemporaneous.

### 3.2 Append-only evidence records

Once saved, hour, expense, IP and timeline records are append-only:

- Corrections add a new version linked to the old one, with a reason.
- The original version stays readable.
- Deleting a record marks it as withdrawn, with a reason. It stays in the history.

## 4. Shared Reference Tables

### 4.1 Record Owners

Fields:

- Owner ID
- Owner type: person or aktiebolag
- Name
- Personal or organization number
- For an AB: status (planned, under formation, registered, closed)
- For an AB: date the stiftelseurkund (memorandum of association) was signed
- For an AB: registration date
- Notes

Initial owners:

- Dania Almilli Syrén (person).
- Milli Studio AB (aktiebolag, status: planned). The name can change until registration.

The application must not assume that Milli Studio AB has been formed or registered before the founder records it.

### 4.2 Projects

Fields:

- Project ID
- Project name
- Description
- Record owner
- Start date
- Target completion date
- End date, if applicable
- Status
- Budget
- Notes

Initial project: Tessera, owned by the founder personally.

A change of project owner, for example if Tessera's rights later move to Milli Studio AB, must be recorded as a dated event linked to the agreement that made it. The earlier ownership history stays visible.

### 4.3 People & Organizations

Fields:

- Contact ID
- Name
- Person or organization
- Role
- Contact details
- Start date of involvement
- End date, if applicable
- Agreement references
- Notes

Roles may include:

- Founder
- Contributor
- Contractor
- Supplier
- Customer
- Adviser

A person's role must not automatically establish employment, ownership, or payment obligations.

### 4.4 Documents

Fields:

- Document ID
- Document name
- Document category
- Original filename
- File format
- File size
- Storage location
- Upload date
- Original document date, if known
- File hash
- Related records
- Notes

Documents must be reusable across sections without duplication.

### 4.5 Audit Events

Fields:

- Audit event ID
- Record reference
- User
- Action
- Timestamp
- Previous value or version reference
- New value or version reference
- Reason for change, where applicable

Audit records must be protected against ordinary editing or deletion.

---

# PART III — SECTION A: ACCOUNTING & TAXES

Section A applies to Milli Studio AB only. The founder's personal records stay in sections B, C and D.

## 5. Company Profile

### Purpose

Store the information required to configure the accounting system for the actual company.

### Fields

- Registered company name
- Organization number
- Registered address
- Date the stiftelseurkund was signed
- Company registration date
- Financial year, including a first financial year that may be shorter or longer than 12 months
- Accounting method
- Accounting framework (K2 or K3)
- VAT registration status
- VAT reporting frequency
- F-tax status
- Employer registration status
- Primary currency
- Bank account references
- Relevant reporting deadlines

### Functions

- Configure company information.
- Configure accounting periods.
- Configure applicable accounting rules.
- Maintain historical changes to company settings.
- Prevent changes to closed periods without an authorized correction process.

---

## 6. Chart of Accounts

### Purpose

Provide the structure used to classify financial transactions.

### Fields

- Account number
- Account name
- Account category
- Account description
- Active/inactive status
- Applicable tax or reporting mappings
- Effective date
- Notes

### Functions

- Support the Swedish BAS chart of accounts.
- Allow appropriate account configuration.
- Prevent invalid account references.
- Preserve historical account mappings.

The BAS chart must be versioned so updates do not silently alter historical reporting.

---

## 7. Expense Register

### Purpose

Record every relevant purchase, subscription, service, and project-related expenditure, for both record owners.

### Fields

| Field | Description |
|---|---|
| Expense ID | Unique identifier |
| Record owner | Founder personally, or Milli Studio AB |
| Expense date | Date the expense occurred |
| Invoice date | Date shown on invoice |
| Payment date | Actual payment date |
| Description | What was purchased |
| Purpose | Why the purchase was necessary |
| Project | The related project |
| Expense category | Software, equipment, services, etc. |
| Supplier | Name of supplier |
| Supplier country | Relevant for VAT treatment |
| Invoice number | Supplier's invoice reference |
| Invoice recipient | Name on the invoice |
| Net amount | Amount excluding VAT, if known |
| VAT amount | VAT charged, if applicable |
| Gross amount | Total amount |
| Currency | Original transaction currency |
| SEK amount | Accounting currency equivalent |
| Exchange rate | Rate and source, where applicable |
| Paid by | Founder personally, or the AB |
| Payment method | Card, bank transfer, etc. |
| Payment account | Relevant bank or payment account |
| Period | Before AB formation, AB under formation, or after AB registration |
| Business-use percentage | Documented use for the project |
| Receipt/invoice | Supporting document |
| Entry type | Contemporaneous or reconstructed |
| Accounting status | Not applicable (personal), unreviewed, pending, posted |
| Tax treatment | Pending, reviewed, applicable classification |
| VAT treatment | Pending or confirmed classification |
| Reimbursement status | Not applicable, pending, approved, paid |
| Notes | Additional explanation |

### Functions

- Add expenses manually.
- Upload invoices and receipts.
- Support recurring subscriptions.
- Identify potentially duplicated expenses.
- Search and filter expenditure.
- Link expenses to projects.
- Generate expense summaries, per owner and per project.
- Track reimbursement requests.
- Flag uncertain accounting and tax treatment.

### Important rule

An expense's purpose does not automatically establish that Milli Studio AB may deduct it or take it over.

---

## 8. Expenses Before the AB

### Purpose

Keep the founder's project expenses from before Milli Studio AB exists, and show which ones the AB might later take over.

Three periods matter, and each expense must record which one it falls in:

1. **Before formation:** before the stiftelseurkund is signed. These are the founder's private expenses.
2. **Under formation ("under bildande"):** after the stiftelseurkund is signed, before registration. Costs incurred on the company's behalf may be taken over by the AB once registered.
3. **After registration:** the AB's own expenses, recorded in section A.

The exact rules for periods 1 and 2 must be verified with official sources (Part XIV) before the application treats any of them as an AB cost.

### Additional Fields

- Original purchaser
- Original payment source
- Purchase date
- Intended project
- Evidence of intended project use
- Period (as above)
- Invoice recipient
- Potential takeover or reimbursement arrangement
- Review status
- Review notes
- Supporting documentation

### Functions

- Record expenses before the AB exists.
- Preserve their original dates.
- Identify who legally incurred each expense.
- Link expenses to projects.
- Track possible future takeover or reimbursement.
- Flag expenses requiring accounting or tax review.

### Accounting rule

These records stay outside the AB's official bookkeeping unless an appropriate accounting basis is established and the founder approves it.

The system must not automatically treat founder-paid purchases as deductible AB expenses.

### Example

**Expense:** AI coding-agent subscription
**Project:** Tessera
**Purpose:** Software development and project documentation
**Paid by:** Founder personally
**Business use:** 100% Tessera, as declared by the founder
**Period:** Before AB formation
**Supporting evidence:** Invoice, payment confirmation, subscription records
**Tax treatment:** Pending review
**Accounting status:** Founder's personal project expense; not posted to AB accounts

This information must remain available even if the expense is never taken over by the AB.

---

## 9. Bookkeeping Journal

### Purpose

Maintain Milli Studio AB's official accounting transactions.

### Voucher Fields

- Voucher ID
- Voucher number
- Voucher series
- Transaction date
- Posting date
- Description
- Amount
- Counterparty, where applicable
- Supporting document reference
- Accounting period
- Posting status
- Correction reference
- Created by
- Posted by
- Posting timestamp

### Journal Line Fields

- Journal line ID
- Voucher reference
- BAS account
- Debit amount
- Credit amount
- Currency information, where relevant
- Project reference, where relevant
- VAT code, where relevant
- Description

### Functions

- Double-entry bookkeeping.
- Validate balanced transactions.
- Assign voucher numbers without gaps.
- Attach supporting documentation.
- Produce the journal in date order (grundbok).
- Produce the ledger by account (huvudbok).
- Support opening balances.
- Support corrections and reversals.
- Lock closed accounting periods.

### Mandatory behavior

Posted accounting entries must not be silently overwritten or deleted.

Corrections must preserve the original entry and provide a traceable explanation.

The application must maintain the system documentation (systemdokumentation) and processing history (behandlingshistorik) that Bokföringslagen requires.

---

## 10. Bank Transactions & Reconciliation

### Purpose

Compare accounting records with actual financial transactions.

### Fields

- Bank transaction ID
- Bank account
- Transaction date
- Value date
- Description
- Counterparty
- Amount
- Currency
- Bank reference
- Imported statement reference
- Matching voucher
- Reconciliation status
- Notes

### Functions

- Manual transaction entry.
- Bank statement import from the bank's CSV export.
- Transaction matching.
- Duplicate detection.
- Reconciliation reports.
- Unmatched transaction warnings.

Automatic bank connections are not required.

---

## 11. VAT — Moms

**Build this section only when Milli Studio AB registers for VAT.** A company whose turnover stays under the exemption limit (120,000 SEK a year in 2026) may choose not to register. Until registration, the application records VAT paid on purchases as part of the cost and produces no VAT returns.

### Purpose

Calculate and prepare Swedish VAT reporting information.

### Fields

- VAT record ID
- Related transaction
- Transaction type
- Supplier/customer country
- VAT jurisdiction
- VAT rate
- Taxable amount
- VAT amount
- VAT reporting category
- Reverse-charge status
- Deductibility status
- Reporting period
- Review status
- Supporting documentation

### Functions

- Domestic VAT calculations.
- EU transaction handling.
- Non-EU transaction handling.
- Reverse-charge VAT where applicable.
- VAT summaries.
- VAT return figures (momsdeklaration) for the founder to file.
- Transaction-level validation.
- Manual review of uncertain transactions.

### Requirements

The system must distinguish:

- VAT charged by suppliers.
- Deductible input VAT.
- Output VAT.
- Reverse-charge transactions.
- Transactions outside the scope of VAT.
- Exempt transactions.

VAT calculations must follow the rules applicable to the transaction date.

The system must not assume that every purchase qualifies for VAT recovery.

App-store sales, where Apple or Google is normally the supplier to the consumer, and ad-network income need their own treatment. This must be verified before revenue starts.

---

## 12. Corporate Tax Administration

### Purpose

Support tax calculations and reporting for Milli Studio AB.

### Fields

- Tax record ID
- Tax year
- Tax type
- Related accounting period
- Accounting result
- Tax adjustments
- Estimated taxable income
- Applicable tax rate
- Estimated tax
- Preliminary tax paid
- Tax account transactions
- Reporting deadline
- Payment deadline
- Filing status
- Supporting calculations
- Review status

### Functions

- Track preliminary tax (F-skatt).
- Track tax account (skattekonto) payments.
- Calculate provisional corporate tax.
- Record adjustments between accounting and taxable results.
- Track deadlines.
- Produce the figures for the AB's income tax return (inkomstdeklaration 2, with its appendices) for the founder to enter in Skatteverket's e-service.
- Preserve calculation histories.

Tax rates and rules must be date-sensitive and configurable.

The application must not present provisional calculations as confirmed tax liabilities.

---

## 13. Financial Reports and Legal Documents

### Ongoing reports

- Journal (grundbok)
- General ledger (huvudbok)
- Trial balance
- Income statement (resultatrapport)
- Balance sheet (balansrapport)
- Expense report, per owner and per project
- VAT summary, once VAT-registered
- Tax summary
- Bank reconciliation report
- Project expenditure report

### Year-end documents

- Closing checklist
- Accruals and adjustments
- Depreciation support
- Reconciliation checks
- Year-end accounts (årsbokslut)
- Annual report (årsredovisning) under the chosen framework, laid out ready to sign and file with Bolagsverket
- Income tax return figures (inkomstdeklaration 2)

### Requirements

Annual reporting must follow the accounting framework applicable to the company. K2 is the likely choice for a small AB, but the application must not assume it.

The application must support verification of calculations against source records.

The founder files all returns and reports. Electronic submission from the application is not required.

---

## 14. Accounting Archive

### Purpose

Preserve legally required accounting information.

### Functions

- Store vouchers.
- Store receipts and invoices.
- Preserve accounting histories.
- Maintain system documentation.
- Maintain processing histories.
- Apply legally required retention periods.
- Support independent backups.
- Support restoration testing.
- Export accounting data.
- Support SIE exports.
- Export human-readable reports.

### Requirements

Accounting records must be kept for at least the period Bokföringslagen requires, currently until the end of the seventh year after the calendar year in which the financial year ended. This must be verified before implementation.

The application must never delete records automatically. When a retention period ends, it may only flag records as eligible for disposal.

---

# PART IV — SECTION B: DEVELOPMENT & CONTRIBUTIONS

## 15. Working Hours

### Purpose

Record the time spent on each project. Hours are both a planning log and evidence of who did the work.

### Fields

- Work session ID
- Record owner
- Date
- Contributor
- Project
- Task
- Activity category
- Start time, optional
- End time, optional
- Hours worked
- Description of what was produced
- Related assets or files
- Development phase
- Paid/unpaid status
- Period: before AB formation, AB under formation, or after AB registration
- Entry type: contemporaneous or reconstructed
- Source, for reconstructed entries
- Notes

### Activity Categories

- Concept development
- Game design
- Art and illustration
- 3D development
- Programming
- Technical research
- Business administration
- Meetings
- Testing
- Documentation
- Other

### Functions

- Add time manually.
- Start/stop timer, optional.
- Associate time with tasks and assets.
- Generate weekly and monthly summaries.
- Calculate total hours, per project and per contributor.
- Compare estimated and actual time.
- Report hours by activity and contributor.
- Include hours in the evidence export (section 24).

### Important Rule

Unpaid hours are project and evidence information.

They must not automatically become company expenses, shareholder investments, compensation obligations, or ownership rights.

---

## 16. Development Costs

### Purpose

Calculate the resources spent on each project.

### Fields

- Development cost ID
- Project
- Cost category
- Related expense
- Amount
- Currency
- Date
- Development phase
- Funding source
- Budget category
- Notes

### Functions

- Link to expense records.
- Summarize costs by category.
- Summarize costs by milestone.
- Compare actual costs with budgets.
- Generate monthly reports.

Expenses are entered once, in the expense register, and referenced here.

---

## 17. Contributor Records

### Purpose

Document individual participation.

### Fields

- Contributor ID
- Person
- Role
- Start date
- End date
- Project
- Contribution type
- Related work sessions
- Related expenses
- Agreement references
- Notes

### Contribution Types

- Creative work
- Technical work
- Financial contribution
- Equipment
- Services
- Advice
- Other

### Functions

- Summarize individual contributions.
- Link contributions to supporting records.
- Track agreements.
- Distinguish paid and unpaid work.
- Generate contribution reports.

### Important Rule

A contribution record is not a legal determination of ownership, employment, or compensation.

---

## 18. Funding & Reimbursements

### Purpose

Track who has provided money or paid expenses on behalf of a project or the AB.

### Fields

- Funding record ID
- Contributor
- Date
- Amount
- Currency
- Funding type
- Recipient
- Related expense
- Supporting agreement
- Reimbursement status
- Accounting reference
- Notes

### Functions

- Track the founder's personal expenditure on projects.
- Track documented company funding.
- Track agreed reimbursements.
- Distinguish funding from revenue.
- Distinguish loans from capital contributions.
- Prevent automatic accounting classifications.

The system must require documentation before classifying a payment as a shareholder loan, capital contribution, reimbursement, or another legal transaction.

---

# PART V — SECTION C: INTELLECTUAL PROPERTY & EVIDENCE

## 19. IP Asset Register

### Purpose

Keep an inventory of original material for each project, starting with Tessera.

### Fields

- Asset ID
- Asset name
- Asset category
- Description
- Creator
- Creation date, if known
- Date confidence level
- Entry type: contemporaneous or reconstructed
- Project
- Original file reference
- Current version
- Related assets
- Claimed rights holder
- Rights status
- Copyright notice used on the asset, if any
- Third-party components
- Supporting evidence
- Notes

### Asset Categories

- Illustrations
- Concept art
- Character designs
- Environment designs
- Storyboards
- Game design documents
- Technical documents
- Source code
- Audio
- Other creative material

### Functions

- Register assets.
- Associate creators.
- Attach original files.
- Link related assets.
- Search by creator, category, and date.
- Generate asset inventories.

The system must distinguish copyright-protected expression from general concepts, ideas, and mechanics.

---

## 20. File Versions & Integrity

### Purpose

Preserve the development history of creative work.

### Fields

- Version ID
- Asset reference
- Version number
- File reference
- Original filename
- Original metadata
- Recorded creation date
- Import date
- File hash
- Change description
- Previous version
- Contributor
- Notes

### Functions

- Preserve original files.
- Store historical versions.
- Calculate SHA-256 hashes.
- Verify file integrity.
- Prevent silent overwriting.
- Export version histories.

### Important Rule

A cryptographic hash helps demonstrate file integrity.

It does not independently establish who created the file or when.

---

## 21. Development Evidence Timeline

### Purpose

Document how each project developed over time.

### Fields

- Timeline event ID
- Event date
- Event type
- Description
- People involved
- Related project
- Related assets
- Supporting documents
- Evidence source
- Date reliability
- Entry type: contemporaneous or reconstructed
- Notes

### Event Types

- Initial concept
- Design decision
- Artwork creation
- Document revision
- Meeting
- Technical development
- Milestone
- Agreement
- Ownership change
- Other

### Functions

- Create chronological timelines.
- Link events to original files.
- Import historical records, such as git commit history.
- Record uncertainty about dates.
- Generate development-history reports.

Historical information must never be assigned fabricated creation dates.

---

## 22. Ownership & Rights Register

### Purpose

Document the available evidence concerning authorship and legal rights.

### Fields

- Rights record ID
- Asset
- Creator
- Claimed rights holder
- Rights type
- Basis of claim
- Supporting agreement
- Effective date
- Expiration date, if applicable
- Territorial scope, if applicable
- Restrictions
- Verification status
- Notes

### Rights Types

- Authorship
- Economic copyright
- Licence
- Assignment
- Third-party permission
- Other documented rights

### Functions

- Track authorship.
- Track rights holders.
- Record transfers, such as a later assignment or licence from the founder to Milli Studio AB.
- Record licences.
- Identify missing agreements.
- Generate rights summaries.

### Important Rule

Database records must not be treated as conclusive legal proof.

The underlying original material and valid agreements remain essential.

---

## 23. Agreements Archive

### Purpose

Preserve documents establishing contractual rights and obligations.

### Fields

- Agreement ID
- Agreement title
- Agreement type
- Parties
- Signature date
- Effective date
- Expiration date
- Related project
- Related assets
- Signed document
- Status
- Notes

### Agreement Types

- IP assignment
- Licence
- Contributor agreement
- Contractor agreement
- Confidentiality agreement
- Partnership agreement
- Other

### Functions

- Store signed agreements.
- Link agreements to contributors and assets.
- Track relevant dates.
- Identify missing documentation.
- Export agreements.

The application must not automatically create or execute legal transfers of intellectual property.

---

## 24. Evidence Export and Timestamps

### Purpose

Produce an independently inspectable archive of a project's development history.

### Export Contents

- Selected original files
- File metadata
- File hashes
- Version history
- Working hours
- Expense records
- Timeline records
- Authorship records
- Relevant agreements
- Evidence index listing every file and its hash

### Third-party timestamps

The application timestamps exports in ways the founder does not control:

- **Git:** the evidence index is committed and pushed to a private GitHub repository. GitHub records when each commit arrived.
- **Dropbox:** the export folder sits in Dropbox, which keeps its own version history.
- **Optional, for important milestones:** a trusted timestamp (RFC 3161) on the evidence index from a timestamping service.

### Requirements

Exports must be readable without the application.

Evidence archives must preserve the distinction between original evidence and later descriptions entered into the database.

---

# PART VI — SECTION D: PROJECT PLANNING

## 25. Project Overview

Projects are defined once, in the shared Projects table (section 4.2).

### Functions

- Create projects.
- Update project status.
- View associated tasks.
- View hours and expenditure.
- View milestones.

---

## 26. Task Management

### Purpose

Organize day-to-day development.

### Fields

- Task ID
- Task title
- Description
- Project
- Milestone
- Category
- Priority
- Assigned person
- Start date
- Due date
- Estimated hours
- Actual hours (calculated from working-hour records)
- Status
- Completion date
- Attachments
- Notes

### Statuses

- Not started
- In progress
- Blocked
- Completed

### Functions

- Create tasks.
- Assign tasks.
- Update progress.
- Set deadlines.
- Attach documents.
- Record time.
- Filter and search tasks.

---

## 27. Milestone Management

### Purpose

Organize development into manageable stages.

### Fields

- Milestone ID
- Name
- Description
- Project
- Start date
- Target date
- Completion date
- Status
- Completion criteria
- Related tasks
- Budget
- Notes

### Functions

- Create milestones.
- Associate tasks.
- Track progress.
- Track deadlines.
- Generate milestone summaries.

Milestone completion should be determined by explicit status updates or defined completion criteria, not merely by elapsed time.

---

## 28. Calendar & Schedule

### Purpose

Provide a simple overview of upcoming work.

### Functions

- Calendar view.
- Task deadlines.
- Milestone deadlines.
- Tax and filing deadlines from section A.
- Upcoming activities.
- Overdue task indicators.
- Basic timeline view.

Complex dependency management is not required.

---

# PART VII — HOW THE SECTIONS CONNECT

## 29. Shared Relationships

The application uses linked records rather than duplicate information.

### Example 1 — AI-Agent Subscription, before the AB

One expense is entered into the expense register, owned by the founder personally.

It can then be associated with:

**Development**
- Tessera
- Software development costs
- Relevant development period

**IP Documentation**
- Evidence that the founder funded Tessera's development

**Project Planning**
- Relevant project or milestone

No accounting record is created. If Milli Studio AB later takes the cost over, that is a separate, reviewed accounting event.

### Example 2 — New Illustration

An illustration is registered in the IP archive.

It can then be linked to:

**Development**
- Hours spent creating it

**Project Planning**
- The task requiring the illustration

**IP Documentation**
- Original file
- Creator
- Versions
- Creation history
- Rights information

### Example 3 — Contributor Work

A contributor records development hours.

The record may be linked to:

- A task
- A milestone
- A creative asset
- A contributor agreement

It must not automatically generate salary, company debt, or ownership rights.

---

# PART VIII — DASHBOARD & USER EXPERIENCE

## 30. Main Dashboard

The dashboard has four panels.

### Accounting (once the AB exists)

- Current financial position
- Recent expenses
- Unpaid bills
- Upcoming tax and filing deadlines
- Items awaiting review

### Development

- Hours worked this month
- Total hours, per project
- Current expenditure, per owner
- Budget remaining

### IP Documentation

- Recently added assets
- Missing supporting documentation
- Recent versions
- Agreements requiring attention
- Date of the last evidence export

### Project Planning

- Current milestone
- Active tasks
- Upcoming deadlines
- Overdue tasks

The dashboard must distinguish confirmed figures from estimates.

---

## 31. Data Entry

Forms should:

- Use clear labels.
- Explain unfamiliar accounting terms in plain language.
- Mark required fields.
- Validate amounts and dates.
- Support attachments.
- Avoid duplicate entry.
- Allow saving drafts.
- Flag incomplete records.

Where useful, the interface should briefly explain why particular information is required.

---

## 32. Search & Reporting

Users must be able to search by:

- Date
- Record owner
- Project
- Contributor
- Supplier
- Expense
- Document
- Task
- Asset
- Accounting account

Reports should support filtering and export.

---

# PART IX — SECURITY, PRIVACY, BACKUPS & DATA OWNERSHIP

## 33. Security

Requirements:

- Runs locally on the founder's computer.
- Administrator authentication.
- Secure credential storage.
- Protected financial and personal information.
- Access permissions for future users.
- Audit logs.
- Secure configuration management.

The system must not store passwords or API credentials in ordinary database fields.

## 34. Personal Data (GDPR)

The application stores personal data about contributors, suppliers and advisers.

Requirements:

- Store only what each record needs.
- Record why each kind of personal data is kept.
- Keep personal data no longer than needed, except where accounting or evidence retention requires it.
- Be able to export everything held about one person, if they ask.
- Never send personal data to outside services.

## 35. Backups

Requirements:

- Automatic backups.
- Manual backup option.
- At least two independent backup locations, for example Dropbox and a private GitHub repository.
- Backups that leave the computer are encrypted.
- Backup integrity checks.
- Restore testing.
- Recovery instructions.

The system must not depend on a single device or storage location for important records.

## 36. Data Export

Required formats:

- CSV for structured data.
- PDF for readable reports.
- SIE for accounting interoperability.
- Original formats for creative assets.
- Structured database backups.
- Portable evidence archives.

All exported information must remain understandable without the application.

## 37. System Documentation

The application must come with, and keep up to date:

- Database schema documentation.
- Description of accounting workflows.
- Voucher-numbering rules.
- Processing-history documentation.
- Tax calculation rules.
- Backup and recovery procedures.
- Data export documentation.
- Software version history.
- Applicable legal-rule references.

Bokföringslagen requires the system documentation and processing history. Changes affecting accounting calculations or record integrity must be documented.

---

# PART X — AUTOMATION RULES

## 38. Permitted Automation

The application may automatically:

- Generate record IDs.
- Set entry timestamps and mark entries as contemporaneous or reconstructed.
- Calculate totals.
- Validate bookkeeping balance.
- Detect duplicates.
- Generate reports.
- Calculate provisional taxes.
- Flag missing receipts.
- Identify approaching deadlines.
- Calculate recorded working hours.
- Summarize project costs.
- Generate file hashes.
- Create backups and evidence exports.

## 39. Actions Requiring Review

The application must not independently:

- Post the founder's personal expenses to the AB's books.
- Determine uncertain tax deductibility.
- Claim VAT deductions without sufficient basis.
- Transfer IP ownership.
- Create shareholder rights.
- Establish compensation obligations.
- Submit tax declarations or annual reports.
- Delete accounting history.
- Alter signed agreements.

These actions require the founder's authorization and, where necessary, professional review.

---

# PART XI — DEVELOPMENT PLAN

## 40. Implementation Phases

### Phase 1 — Foundation

Build:

- Database
- Record owners and shared reference tables
- Authentication
- Document storage
- Audit history
- Backup system
- Export functions

### Phase 2 — Expenses and Hours

Build:

- Expense register
- Expenses before the AB
- Working hours
- Development costs
- Contributor records
- Funding records

**Objective:** Start recording project activity now, with evidence-grade records.

### Phase 3 — IP Evidence

Build:

- Asset register
- Original file archive
- Version history
- Development timeline, including git history import
- Ownership records
- Agreement archive
- Evidence export and timestamps

**Objective:** Preserve each project's creative history and supporting evidence.

### Phase 4 — Project Planning

Build:

- Project overview
- Tasks
- Milestones
- Calendar
- Progress reports

**Objective:** Support basic production management.

### Phase 5 — AB Bookkeeping

Build:

- Company profile
- Chart of accounts
- Bookkeeping journal and vouchers
- Bank reconciliation
- Ongoing reports
- Accounting archive

**Objective:** A tested bookkeeping system, ready before the stiftelseurkund is signed.

### Phase 6 — Year-End and Tax

Build:

- Tax administration
- Year-end adjustments
- Year-end accounts and annual report
- Income tax return figures

**Objective:** Produce the AB's statutory year-end documents, ready before the end of its first financial year.

### Phase 7 — VAT

Build when Milli Studio AB registers for VAT.

Phases 5–7 must be validated separately before official use. The first year's year-end documents should be checked by a free adviser, such as NyföretagarCentrum, before filing.

---

# PART XII — TESTING & ACCEPTANCE

## 41. Functional Tests

The application must demonstrate that:

1. Records can be created and retrieved.
2. Required fields are validated.
3. Linked records remain consistent.
4. Files are stored without corruption.
5. Original file versions remain accessible.
6. Reports reflect underlying records.
7. Exports preserve essential information.
8. Backups can be restored.
9. Audit histories remain intact.
10. Financial records cannot be silently altered.
11. Evidence records are append-only, and reconstructed entries are always marked.

## 42. Accounting Tests

Verify:

- Balanced journal entries.
- Gap-free voucher sequencing.
- Accurate account balances.
- Correct period allocation.
- Traceable corrections.
- Reconciliation accuracy.
- Correct handling of relevant VAT scenarios, once built.
- Accurate financial reports.
- Correct annual report and tax return figures for documented example years.
- Appropriate record retention.
- Required system documentation.

Testing must use documented examples with independently verified expected results.

## 43. Tax Tests

Tax calculations must be checked against:

- Current Swedish legislation.
- Skatteverket guidance.
- Relevant transaction examples.
- Applicable reporting periods.

Rules must be versioned by effective date.

Uncertain situations must be flagged rather than resolved through unsupported assumptions.

## 44. IP Evidence Tests

The application must demonstrate that:

- Original files remain unchanged.
- Hash verification works.
- Historical dates are preserved.
- Import dates are distinguishable.
- Contemporaneous and reconstructed entries are distinguishable.
- Version histories are complete.
- Evidence exports are independently readable.
- Third-party timestamps can be checked.
- Ownership records link to supporting documentation.

---

# PART XIII — EXCLUDED FEATURES

The first version does not require:

- Payroll administration.
- Employee scheduling.
- Inventory management.
- Customer relationship management.
- Advanced project dependencies.
- Automated bank connections.
- Automatic tax or annual report submission.
- Investor management.
- Shareholder administration.
- AI-generated legal agreements.
- Advanced financial forecasting.
- Bookkeeping for more than one company.

Add these only when there is a demonstrated business need.

---

# PART XIV — OFFICIAL REFERENCE REQUIREMENTS

All applicable legal requirements must be verified against current official sources before regulated functionality is implemented.

### Accounting

**Bokföringsnämnden (BFN)**
- Bookkeeping guidance
- Applicable accounting framework (K2/K3)
- System documentation
- Processing history
- Accounting information retention

**Bolagsverket**
- Company formation and registration
- Annual report filing, including whether paper filing is accepted

**Applicable legislation**
- Bokföringslagen (1999:1078)
- Årsredovisningslagen (1995:1554)
- Aktiebolagslagen (2005:551), for costs incurred while the company is under formation

### Taxation

**Skatteverket**
- Corporate taxation
- VAT
- Costs incurred before formation and while under formation
- Tax declarations
- Tax-account administration

**Applicable legislation**
- Inkomstskattelagen (1999:1229)
- Mervärdesskattelagen (2023:200)

### Intellectual Property

**Patent- och registreringsverket (PRV)**
- Copyright
- Intellectual property agreements
- Intellectual property management

**Applicable legislation**
- Upphovsrättslagen (1960:729)

### Personal Data

**Integritetsskyddsmyndigheten (IMY)**
- GDPR guidance
- Personal data protection

For each rule implemented, record:

- Source
- Applicable provision or guidance
- Effective date
- Date verified
- Implemented function
- Test cases

A source list alone is not sufficient evidence that the implementation complies with the law.

---

# PART XV — FINAL REQUIREMENTS

The application must:

1. Keep the founder's project records from now, before the AB exists.
2. Support a small Swedish AB once formed.
3. Provide complete and traceable financial records.
4. Produce the bookkeeping records, reports and year-end documents Swedish law requires, for the founder to file.
5. Maintain separate project-development records.
6. Track working hours, expenses and contributions as evidence-grade records.
7. Preserve original creative assets and supporting evidence.
8. Document authorship and contractual ownership history.
9. Provide basic project planning.
10. Generate understandable reports.
11. Support independent backups and exports.
12. Remain simple enough for one administrator.
13. Have no running costs.
14. Support future projects and expansion without compromising existing records.

**Final objective:** One application that keeps the founder's and Milli Studio AB's records, manages project development, preserves intellectual property history, and maintains reliable financial records.

The application must prioritize legal compliance, data integrity, maintainability, and practical daily use over unnecessary complexity.

---

# PART XVI — BUILD BRIEF FOR THE CODING AGENT

These instructions are for whoever builds the application, not functional requirements.

1. Verify every legal requirement in Part XIV against current official sources before building the function that depends on it. Record the result as Part XIV describes.
2. Do not assume K2, the cash method, or any other framework or method. Confirm the applicable choice with the founder.
3. Do not resolve uncertain tax or accounting questions with assumptions. Flag them for the founder.
4. Explain technical and accounting terms in plain language when asking the founder to decide something.
5. Build phases in order. Each phase must pass its tests (Part XII) before the next starts.
6. Keep the application, its data and its backups outside any project repository that other people can access.
7. Choose a technology stack that runs locally with no running costs, keeps data in an open format, and can be maintained by another developer.

---

Tell me what you'd like changed. I won't start building until you approve it.

---

### Dani · 2026-10-10 04:53

<command-name>/model</command-name>
            <command-message>model</command-message>
            <command-args>fable</command-args>

<local-command-stdout>Set model to `claude-fable-5-1`</local-command-stdout>

Confirmed corrections
These are substantive issues, not stylistic preferences.
Section	Problem	Required correction
§11 — VAT	It says to build VAT only when the company registers, and implies a business below SEK 120,000 can simply operate without VAT reporting.	Incorrect as a general rule. A Swedish business buying certain services from foreign suppliers may have to register and account for Swedish VAT even when its own sales qualify for the small-business exemption. This is particularly relevant to software subscriptions. 

Skatteverket
+2
§13 — Year-end documents	It lists both årsbokslut and årsredovisning as required year-end outputs for the AB.	An AB must close its accounts with an årsredovisning. An ordinary årsbokslut is not an additional, separate statutory filing obligation for that AB. Internal closing schedules are still necessary. 

Sveriges riksdag
§12 — Corporate tax filing	It describes preparing figures for entry into Skatteverket's e-service without identifying the required declaration components or changing submission methods.	Specify INK2, INK2R and INK2S, with additional schedules when relevant. Skatteverket has announced that its older Inkomstdeklaration 2 service will close on 29 December 2026, so the app must not depend on a particular portal workflow. 

Skatteverket
§5 / §13 — K2 or K3	The framework is configurable, but the version applicable to each financial year is not sufficiently specified.	Select and retain the appropriate dated version of K2 or K3. BFN's updated rules apply to financial years starting after 31 December 2025, with special transitional provisions. 

BFN
§13 — Annual-report submission	“Ready to sign and file” lacks the necessary signing, approval and submission workflow.	Include board signatures, annual general meeting approval, the fastställelseintyg, filing deadlines and a supported paper submission workflow. Paper filing remains possible as of October 2026; digital submission requires compatible software. 

Bolagsverket
+2
§34–35 — GDPR and backups	“Never send personal data to outside services” conflicts with the specified Dropbox/GitHub cloud backups.	Replace the absolute prohibition with a documented, controlled cloud-processing policy covering encryption, access, legal basis, retention and applicable processor/transfer obligations. 

IMY
Two numbers in the specification are verified: the SEK 120,000 small-business VAT threshold for 2026 and the seven-year statutory accounting retention rule. The problem is the conditions and exceptions surrounding those rules, not the numbers themselves. 

Skatteverket
+1



Important omissions for your particular business
These are the additions I would prioritize before implementation.
Priority	Missing requirement	Why it matters
Critical	Customer invoices, incoming revenue, unpaid invoices, partial payments, refunds and credit notes	The specification handles expenses well but does not adequately define the sales side of bookkeeping. Even a small AB needs a complete record of its business transactions. Invoice requirements are specifically regulated. 

Skatteverket
Critical	Accounting for game development costs and intellectual assets	Under K2, internally developed intangible assets generally cannot be capitalized. The application must distinguish project development costs from assets recognized in the accounts. This distinction is particularly important for Tessera. 

Skatteverket
Critical	Capital-loss warning (kontrollbalansräkning)	If there is reason to believe that the AB's equity has fallen below half its registered share capital, the board must act promptly. A game studio spending money before generating revenue could encounter this. A dashboard warning should help, without pretending to replace the legally required assessment. 

Bolagsverket
+1
High	Statutory archive storage location	Dropbox or GitHub cannot simply be assumed suitable as the sole accounting archive. Swedish rules impose conditions on storing accounting information outside Sweden. 

BFN
High	AI-assisted creation and third-party asset provenance	An IP record should distinguish human-created work, AI assistance, generated material, licensed assets and contributions from contractors. PRV confirms that fully AI-generated images cannot simply be treated as human-authored copyright works. 

PRV
High	Contributor rights separated by asset	Who worked on a project, who owns an individual creative contribution, and who has permission to use it are different questions. Swedish law also contains a specific rule for software created by employees. 

Sveriges riksdag
One more correction concerns §3.1: the seven-day definition of a “contemporaneous” record is the agent's chosen convention, not a legal evidentiary rule. Keep the seven-day indicator if useful, but also preserve the actual delay, source, original document dates and whether the entry was based on direct evidence or recollection.

---

### Claude · 2026-10-10 05:00

The reviewer is right about nearly all of it, and several points correct mistakes I made. v3.1 is the newer and more accurate version, so I'd use it as the base. It does have some problems of its own, listed below. I haven't changed any files.

## Corrections I accept (my errors in v3.0)
- **VAT on foreign services.** I wrote that VAT could wait until the AB registers. That's wrong. Buying services from foreign suppliers, such as software subscriptions, can require the AB to register and report VAT even when its own sales are exempt. This matches my understanding of the rules. My quick search didn't turn up the Skatteverket page saying so, but the reviewer links it, and it's worth checking there.
- **The AB doesn't file an årsbokslut** (year-end accounts). An AB closes its books with an årsredovisning (annual report). Listing both was wrong.
- **GDPR contradicted the backups.** I wrote "never send personal data to outside services" and then specified cloud backups.
- **The 7-day rule is my own convention, not a legal standard.** Storing the actual delay and the source is better.
- **Git isn't a backup or an archive,** and NyföretagarCentrum isn't a qualified accounting reviewer. Both are fair points.
- **The omissions are all real:**
  - the sales side: invoices, payments received, credit notes;
  - K2 not allowing self-developed IP to be recorded as an asset;
  - the warning when equity falls below half the share capital (kontrollbalansräkning);
  - rules on where the accounting archive may be stored;
  - tracking whether assets are AI-made or AI-assisted, which matters for you because you use AI tools.

## Problems in v3.1
1. **One claim I couldn't verify:** "the older Inkomstdeklaration 2 service closes on 29 December 2026". My search found no source for it. Mark it "verify" or remove the date.
2. **It contradicts itself, because Part XVII was bolted on instead of worked into the body:**
   - The tests still demand "gap-free voucher sequencing", but the new §9 allows documented gaps.
   - Part XV still says "no running costs", but the new core principle only rules out subscriptions.
   - Phase 7 reads as an editing instruction ("Reorder to before…") rather than a requirement, and the phases weren't actually reordered.
   - The "Changes" list doesn't mention most of the 3.1 changes.
   - The header lines have run together into one paragraph.
3. **It's bigger than it needs to be.** §46.7 asks for both bookkeeping methods. An AB whose turnover is normally under 3 million SEK may probably use the cash method (kontantmetoden), recording transactions when they're paid. Check this against BFN's guidance (BFNAR 2013:2). Building one method roughly halves that work.
4. **"Use a compliant interim solution" doesn't have to cost money.** If the app isn't validated when the AB forms, manual bookkeeping can comply: a spreadsheet journal and ledger, numbered vouchers and a proper archive, as long as it meets Bokföringslagen's requirements. Your no-cost goal holds.
5. **Not all of the source links were checked,** including by me. Spot-check them before relying on them.

## The honest picture
Taken together, the reviewer's additions show what "replacing accounting software" really means: a full accounting system for the sales side, payments, fixed assets, VAT and the annual report. Its build gates handle that well:
- **Gate A,** which covers expenses, hours, IP evidence and planning, is safe to use now.
- **The accounting gates** only go live once they're validated.

You should also expect that the first year's annual report and tax return may need a paid review by a qualified accountant.

Shall I write version 3.2? It would use 3.1 as the base, work Part XVII into the body, fix the contradictions above, settle on one bookkeeping method (pending your confirmation), and mark the unverified date. It would replace the current SPEC.md, and I'd keep 3.0 alongside as SPEC-v3.0.md for the record.

Sources:
- [Skatteverket — important dates, Inkomstdeklaration 2](https://www.skatteverket.se/foretag/etjansterochblanketter/viktigadatumocharkiv/viktigadatumforetag/duskahaskickatininkomstdeklaration2.5.77f3e230191ef88bf1d7f8.html)
- [Fortnox — declaration dates for companies](https://www.fortnox.se/fortnox-foretagsguide/driva-foretag/bokforing/deklarationsdatum-for-foretag)
- [Ekobrottsmyndigheten — postponing the bookkeeping date (cash method, 3 million SEK)](https://www.ekobrottsmyndigheten.se/wp-content/uploads/2021/07/arf-2016-3-senarelaggning-av-bokforingstidpunkten-reviderad-181001.pdf)
- [Företagarna — year-end for sole traders vs ABs](https://www.foretagarna.se/driva-eget-foretag/deklaration-och-bokslut/bokslut-i-enskild-firma-eller-aktiebolag/)
- [Skatteverket — bookkeeping and year-end](https://skatteverket.se/foretag/drivaforetag/bokforingochbokslut.4.58d555751259e4d661680006527.html)

I checked v3.2. It fixes everything I raised, and on two points it corrects me:

- **The 29 December 2026 date is real.** Skatteverket's page says: "Tjänsten Inkomstdeklaration 2 avvecklas 29 december 2026" (the Inkomstdeklaration 2 service closes on 29 December 2026). My search missed it, so I was wrong to call the date unverified.
- **I was wrong about spreadsheets.** I said a spreadsheet journal and ledger could serve as interim bookkeeping. BFN says the opposite: "Det är inte tillåtet att bokföra i ett program där registreringen kan ändras i efterhand, till exempel Excel." That means bookkeeping in a program where entries can be changed afterwards, such as Excel, isn't allowed. Manual bookkeeping on paper is allowed, and BFN provides printable journal sheets for it. v3.2 says exactly this, and it means your no-cost fallback is paper, not a spreadsheet.

## Remaining issues in v3.2
These are all about structure and clarity. None is a legal error.
1. **It isn't fully integrated.** Many sections keep the old text and then add a new block below a divider that repeats it:
   - §11: the VAT intro and "Detailed VAT treatment" say much the same thing.
   - §12: the INK2 bullet and the paragraph after it.
   - §13: the annual-report requirements and "Annual report and corporate-capital safeguards".
   - §14: the requirements and "Archive controls".
   - §3.1 and §24: the date distinctions.

   A builder could read the two versions as different requirements.
2. **Misplaced sections:**
   - "Shared-record legal distinctions" has no number and sits loose after §4.5.
   - "Zero-cost manual fallback" sits under §37 System Documentation. It belongs with the accounting sections or Phase 5.
3. **One small tension.** "Shareholder administration" is excluded, but §13 requires the AGM, board signatures and fastställelseintyg workflow. For a one-person AB that's a short minuted decision. The exclusion should say it means share registers and investor matters, not the annual meeting.

The rest holds up well:
- the kontantmetoden-only scope;
- VAT screening from day one;
- the K2 condition;
- the build gates;
- the paper fallback.

**Recommendation:** adopt v3.2 as the spec. Shall I save it as `studio-records/SPEC.md`, keeping 3.0 as `SPEC-v3.0.md` for the record? I can also fix the three issues above while saving: merge the repeated blocks, move the two loose sections, and clarify the exclusion. That would make it version 3.3, with the content otherwise unchanged. Your call either way.

---

### Dani · 2026-10-10 05:10

will the issues be minor bugs or simple inefficiency in the app or will it cause loss of data or legal issues?

---

### Claude · 2026-10-10 05:10

None of the three would cause data loss on its own, and legal problems are unlikely. Here's what each could realistically do:

1. **Repeated blocks.** This is the most likely to cause trouble, but the trouble is wasted work, not lost data. The two versions say the same thing in different words, so the builder could implement one and miss a detail from the other. For example, it might skip one of the five date fields for evidence, which would make an evidence record weaker rather than wrong. The duplication is mostly in the archive and tax sections. There, the tests (Part XII) and the rule that nothing goes into official use before validation should catch a missed detail before it matters.
2. **Misplaced sections.** These have no effect on the app. The paper fallback is something you'd do by hand, not a feature. The "legal distinctions" block applies anyway, just less visibly.
3. **The exclusion tension.** At worst, the builder leaves out the annual-meeting and fastställelseintyg steps. The legal duty stays with you whatever the app does. You'd notice before filing anyway, because Bolagsverket won't accept an annual report without the fastställelseintyg.

**The real risk** is relying on the app's output without the checks the spec requires. That's true of any version of the spec. These issues only make it slightly more likely that something slips through.

Fixing them now is quick, and it's cheaper than finding out during the build. My recommendation is to save the spec as v3.3 with the fixes. Shall I go ahead?

---

### Dani · 2026-10-10 05:11

can they be fixed later without losing any data or risking having to start development over again from 0?

---

### Claude · 2026-10-10 05:11

Mostly yes. Fixing the document itself is easy at any time. What matters is whether the app gets built from the unclear version first.

- **Starting over:** that won't happen. These are small gaps. At worst, a missing field or step gets added later, which is a normal change, not a rebuild.
- **Losing data:** existing records stay safe, since the spec makes everything append-only. There's one catch, in the date fields from issue 1. If the database is built without one of the five evidence dates, for example a document's own date, every record entered before the fix lacks it. You can add the field later, but for the older records the information was never captured. That's not lost data, but those records would be less complete as evidence.
- **The other two issues** can be fixed later at no cost.

So it's safe to fix them later, with one exception: settle the date fields before the database is built in Phase 1, since that's when they'd start being missed. Since that means fixing the spec before building anyway, I'd do all three now in one go. It only takes a few minutes.

---

### Dani · 2026-10-10 05:12

ok then safe to say you can start creating my app?

---

### Claude · 2026-10-10 05:12

Nearly. Two small things come first: saving the spec, and a couple of setup choices only you can make. Let me check what's installed on your computer, since that affects the setup.

You already have Node.js and Git installed, which is all the app needs, so nothing new to install. Before I start Phase 1, I need four decisions from you:

Saving the spec as v3.3 first.

I've saved the spec as v3.3 in `studio-records/SPEC.md`, with version 3.0 kept as `SPEC-v3.0.md`. The new "Changes through version 3.3" list at the top names the fixes. The main one is that §3.1 now defines all five evidence dates in one place, before anything gets built.

## Technology: my recommendation
**Node.js + SQLite, with the app opening in your web browser.**

| What | Why |
|---|---|
| **Node.js** | A free, widely used programming platform. It's already on your computer, so there's nothing to install, and almost any developer can maintain it. |
| **SQLite** (the database) | Everything lives in one file on your computer, so there's no server and no account. It's free, and many free tools can open the file (DB Browser for SQLite, for example), which means your data stays readable even without Studio Records. |
| **Browser interface** | You double-click a start file, and the app opens as a page in your browser. It runs only on your computer, not on the internet. |

**Alternatives I ruled out:**
- **Python:** just as good technically, but it isn't installed on your computer.
- **A desktop app** (Electron): heavier, and more work to build and update, for no real benefit to you.
- **Excel or Google Sheets:** BFN forbids bookkeeping in software where entries can be changed afterwards.
- **Microsoft Access:** it costs money.

## What starting means
- **Phase 1 is the foundation:** database, record owners, audit history, file storage, evidence dates and backups. It has almost nothing to click yet.
- **Phase 2 is the first part you'll use day to day:** entering expenses and hours.
- **After each phase,** I'll show you what was built and wait for your OK before starting the next one.

The setup, once you confirm the technology:
- **Code** in `Dropbox/Studio/studio-records`, plus a new private GitHub repository called `studio-records` under your account. The repository holds code only, never your data.
- **Live data** in `C:\Users\someo\StudioRecords`, which Dropbox doesn't sync.

Shall I go ahead with Node.js + SQLite?

---

### Dani · 2026-10-10 05:21

I've saved the spec as v3.3 in studio-records/SPEC.md, with version 3.0 kept as SPEC-v3.0.md. The new "Changes through version 3.3" list at the top names the fixes. The main one is that §3.1 now defines all five evidence dates in one place, before anything gets built.

I really doon't understand all this. as long as you're following the specs of the last file i attached all is well.

---

### Claude · 2026-10-10 05:22

I'm working from the spec you sent. The saved version 3.3 is your file plus the three small fixes you approved, so nothing in it changed. From here on I'll make the technical decisions myself, follow my recommendations, and just tell you what I did.

I'm starting with Phase 1, the foundation. First, a quick check of the tools:

The built-in database works, and nothing extra needs installing. GitHub's command-line tool isn't installed, so I'll set up the private repository at the end. Writing the foundation now.

Making errors clearer: a user mistake will show a plain message instead of a technical error.

Fixing a misplaced import line and updating the server's error handling:

Now the tests. They check that records can't be secretly changed, that tampering is detected, and that backups really restore:

The screens are written. I'm now running the whole app against a test data folder to check that it works end to end.

Everything works except the backup step, and that failed because of a quoting mistake in my test command, not in the app. Rerunning that part:

Backups and restore tests work through the app too. Last step for Phase 1: a start file, the instructions and the system documentation.

Phase 1, the foundation, is built and working, and all 25 automated tests pass.

**Try it:** open `Dropbox/Studio/studio-records` and double-click **Start Studio Records.bat**. A black window opens and the app opens in your browser. Keep the black window open while you use it.

1. **Create your login.** The app then adds your first records: you, Milli Studio AB (marked as planned), and Tessera, owned by you.
2. **Set up backups first,** under **Backups & checks**. Until then, your records exist only on this computer.
   - Add two backup folders, for example one in Dropbox and a USB drive.
   - Choose a backup passphrase and **write it on paper**. Without it, nobody can open the backups, including you.
   - Click **Back up now**, then **Test restore**.
3. **Try storing a document,** such as a piece of Tessera art, under **Documents**.

**What's in Phase 1:**
- **Edits never erase anything.** Each change is saved as a new version with your reason, and the old version stays in the history.
- **The change log is protected.** If anyone altered it afterwards, the check under Backups & checks would show it.
- **Files are kept unchanged, with their dates,** and each one is fingerprinted so later damage or changes are detectable.
- **Backups are encrypted,** and the app keeps backing up every 24 hours while it's open.

There's not much for daily use yet. Phase 2 adds expenses and working hours, which you'll use every day.

**GitHub:** the code is saved with its history on your computer, but I couldn't create the private repository because GitHub's command-line tool isn't installed. The simplest way is to create it yourself:
1. Go to github.com/new.
2. Name it `studio-records`.
3. Choose **Private**, and don't tick "Add a README".
4. Click Create and tell me. I'll send the code up.

Have a look, and tell me when you're happy for me to start Phase 2.

---

### Dani · 2026-10-10 18:58

repository created

---

### Claude · 2026-10-10 18:58

The code is on GitHub now, in your private `MilliStudio/studio-records` repository. It holds only the app's code. Your records and files stay on your computer and in your encrypted backups.

From now on, I'll sync each phase to GitHub when it's done. Try the app whenever suits you, and tell me when to start Phase 2 (expenses and working hours).

---

### Dani · 2026-10-10 19:02

on to phase 2

---

### Claude · 2026-10-10 19:02

Starting Phase 2: expenses (including the ones from before the AB), working hours, contributions, funding, and the summaries built on them. I'll follow spec sections 7, 8 and 15–18.

Adding the Phase 2 tables to the database:

Phase 1 still passes after the restructure. Now the founder as a contributor (so hours can be logged to you), then the summaries:

Writing tests for Phase 2's rules:

All 37 tests pass, Phase 1 and Phase 2 together. Now the screens for expenses, hours, subscriptions, contributions, funding and summaries:

I'm rewriting the interface file so the new record types fit in cleanly:

Port 4870 is taken, so the app may already be running. If it's yours, I'll leave it alone. Checking:

That's your copy of Studio Records, started at 16:02 today, so I'll leave it running. I'll run my test copy on a different port:

Phase 2 is finished, and all 37 tests pass. It's saved to GitHub too.

**First, restart the app.** Your copy has been running since 16:02 on the old code, but the pages it shows already come from the new version, so some screens may give errors until you restart:
1. If you've set up backups, click **Back up now** first, just to be safe.
2. Close the black window.
3. Double-click **Start Studio Records.bat** again.

When it starts, the app adds the new sections to your database. Everything you've already entered stays as it is.

**What's new:**
- **Expenses:**
  - You can attach the receipt file directly, and any currency is converted to SEK using the rate you enter.
  - Each expense is sorted automatically into **before the AB**, **AB under formation** or **after registration**.
  - Your personal expenses are always kept as project records, never as company bookkeeping.
- **Duplicate warning:** if an expense looks like one you've already entered, the app asks before saving it.
- **Subscriptions:** register one, such as your AI subscription, and the app reminds you when a charge is due to be recorded.
- **Hours:** log them with start and end times, or press **Start timer** when you begin working.
- **Contributions and funding:** who did what, and the rights to their work. Loans or capital contributions can't be recorded without a supporting document.
- **Summaries:** spending by project, category and month, and hours by week, activity and person.
- **Overview:** a list of things that need attention, such as expenses missing a receipt.

**One thing to remember:** when you sign the stiftelseurkund, and again when the AB is registered, enter those dates under **Owners → Milli Studio AB**. The app uses them to sort new records into the right period.

Next is Phase 3, the IP and evidence register: assets, versions, the development timeline, rights and agreements. Tell me when to start.

---

### Dani · 2026-10-11 15:22

it pops a prompt when i doubleclick the bat file. when i press any key the prompt window closes

---

### Claude · 2026-10-11 15:23

I found the cause: yesterday's copy of the app is still running in the background. It started at 16:02 and is still holding the app's address, so the new copy can't start, and it closes straight away. The black window from yesterday is probably still open somewhere, maybe minimised.

**To fix it:** find that old black window and close it, then double-click the .bat file again. If you can't find it, I can stop the old copy for you. It's safe to do, and your records won't be affected. Shall I?

I'd also like to make a small change so this can't confuse you again. If the app is already running when you double-click the file, it would just open the app in your browser, instead of closing with no explanation. Shall I make that change too?

---

### Dani · 2026-10-11 15:24

fixed. how do i change my username. i regret using dundun

---

### Claude · 2026-10-11 15:24

There's no way to change it in the app yet. I can add an **Account** page where you change your username and password, after confirming your current password. It's a small change.

One thing to know: records you've already made will keep showing "dundun" as the person who made them. The change log and version history can't be edited, so they stay as they were. The log will record the change, for example "username changed from dundun to Dani", which makes the history read clearly. Everything from then on uses the new name.

Shall I add the Account page? I'd make the small "already running" fix from my last message at the same time, unless you'd rather I didn't.

---

### Dani · 2026-10-11 15:25

no it's fine. question, is it complicated to bring in more people to log their hours? mattias for example

---

### Claude · 2026-10-11 15:25

It depends on whether Mattias enters the hours himself or you enter them for him.

**You enter them: works today, no changes needed.**
1. Add Mattias under **People**.
2. He sends you his hours, for example a short email or a simple list each week.
3. You log them under **Hours**, with Mattias as "Who did the work".
4. Store his email or list under **Documents**, so the record shows where the numbers came from.

That's the normal way for a small studio. Saving his own message as the source also makes the record stronger as evidence than your entry alone.

**He enters them himself: much more complicated, and I'd hold off.**
- The app runs only on your computer and can't be reached from anywhere else. That's on purpose, because it holds your finances. Letting Mattias in would mean putting it online, which brings security risks and probably hosting costs.
- It would also need separate logins with limits, so he could see and log only his own hours and never your expenses or books. The spec requires exactly that, and it's a substantial piece of work.

**A middle way, if the first option gets tedious:** Mattias fills in a simple timesheet file, and the app imports it in one go, with his file kept as the source. That's a moderate amount of work and keeps everything local. It could come later, once more people are logging hours.

---

### Dani · 2026-10-11 15:26

the middle works great

---

### Claude · 2026-10-11 15:27

Good. Here's how it would work:

1. **The app gives you a timesheet template,** a simple file that opens in Excel or Google Sheets, with these columns:
   - date
   - start and end time, or just hours
   - activity
   - what he worked on
   - project
2. **Mattias fills it in** and sends it to you, weekly or monthly, whatever suits you both.
3. **You import it under Hours:** choose Mattias, choose the file, and the app shows a preview with any problems marked, such as a missing date or impossible hours.
4. **When you confirm,** his file is stored unchanged under Documents as the source, and each row becomes an hours entry in his name, linked to that file.
5. **The duplicate warning applies:** if a row looks like hours already logged for the same day, the app flags it.

Shall I build this now, before Phase 3?

---

### Dani · 2026-10-11 15:28

is it better to build it now before phase 3?

---

### Claude · 2026-10-11 15:28

I'd do Phase 3 first, for two reasons:

1. **Phase 3 is the more urgent one for protecting Tessera.** The legal report recommends recording what you already own before anyone else starts contributing. Phase 3 is the register that does that. It's best in place before Mattias's work starts mixing with yours.
2. **The import doesn't depend on Phase 3, and nothing is lost by waiting.** If Mattias works in the meantime, he can keep his hours in any simple list and send them to you. They can go in by hand now, or be imported later.

One trade-off to know: hours imported weeks after the work are marked "reconstructed", because they were entered late. His own dated timesheet stored as the source document makes up for much of that.

The exception is if Mattias is already working on Tessera regularly. Then the import is worth doing now, since it's a small job. Is he working on it yet?

---

### Dani · 2026-10-11 15:29

he hasn't put in any hours at all yet. if nothing else is a problem, you can start phase 3

---

### Claude · 2026-10-11 15:29

Starting Phase 3: the IP and evidence register, covering assets, versions, contributors per asset, rights, agreements, the development timeline and evidence packages (spec §19–24). Nothing else needs doing first.

Now the validation rules and links between records:

Now the evidence package: an export folder you can hand to a lawyer, which can be checked without the app.

Now importing the history from a git repository, such as the Tessera repo, into the timeline:

Adding the new server routes:

Writing tests for Phase 3, covering the spec's IP evidence tests (§44):

I'm still on Phase 3. The backend and its tests are done, and I'm now building the screens: the asset page with versions, contributors and rights, the git import, and evidence export.

Nearly done. I'm updating the README, then saving Phase 3 to GitHub.

Phase 3 is finished. All 46 tests pass, and it's saved to GitHub.

**To get it, restart the app the same way as last time:**
1. Click **Back up now**.
2. Close the black window.
3. Double-click the .bat file.

The app adds the new sections when it starts, and your existing records stay as they are.

**What's new:**
- **IP register:** one entry for each creative item, such as the refinery concept, the storyboard or the ladybug designs. Each entry holds:
  - its files and versions, kept unchanged;
  - who contributed what;
  - whether AI was used, and how;
  - the rights to it.
- **Rights:** what you *claim* and what a *signed document* supports are kept apart. The app won't let you mark something as "documented" without the signed agreement behind it.
- **Agreements:** stored with their signed copies.
- **Timeline:** how Tessera developed. It can import your Tessera repository's history in one go. I tested it read-only on your repo, and it found 19 commits going back to 20 September.
- **Evidence packages:** a folder you can hand to a lawyer. It holds exact copies of your originals, every version of the records, and a small checker that proves nothing was changed afterwards.

**Suggested first steps, which fit what the legal report recommends:**
1. Under **Timeline**, import the Tessera repository's history.
2. Under **IP register**, add your existing Tessera art and documents with their original files. Where a file shows "© Dani Milli Studio", type that into the "Copyright notice shown on it" field. That records that the notice was there, alongside the rest of the asset's history.
3. Under **Evidence**, create a package for Tessera.

Things you'll register now were made weeks ago, so the app marks them as "reconstructed". That's expected, and it's honest.

The **evidence ledger** under Evidence is optional. It needs a second private GitHub repository, set up the same way as before, and I can help when you want it.

Next is Phase 4, simple planning: tasks, milestones and a calendar. Tell me when to start.

---

### Dani · 2026-10-11 18:13

ok go

---

### Claude · 2026-10-11 18:13

Starting Phase 4: projects overview, tasks, milestones, calendar and progress (spec §25–28). Hours and expenses will also be linkable to a task or milestone, so time and costs can be summed per milestone (spec §16).

That edit was a mistake: it changed an existing database migration, which must never change once it's been applied. Reverting it:

Confirmed unchanged. Now adding Phase 4 as a new migration:

SQLite views do pick up added columns, so my comment was wrong and the view rebuild isn't needed. Removing it:

Now the rules for tasks and milestones:

The number check lost its escaping, so it would reject every estimate. Fixing:

Now the planning summaries and the calendar:

The upgrade works on a copy of your real database: it moves from version 3 to 4, all your records are kept, and the change log stays intact. The copy has been deleted. Now the screens:

The shell tripped over the quotes in my script. I'll write the script as a file instead:

Phase 4 works end to end. The "�" in the output is only how this console shows a dash. Updating the documentation and saving to GitHub:

Phase 4 is finished. All 51 tests pass, and it's saved to GitHub. I also ran the upgrade on a read-only copy of your real database first: all your records were kept and the change log stayed intact.

**To get it,** restart the app as before: **Back up now**, close the black window, then double-click the .bat file.

**What's new:**
- **Planning:** milestones and tasks for each project, such as M1, M2 and M3 for Tessera. Each milestone shows:
  - a progress bar;
  - estimated hours against hours actually logged;
  - money spent against its budget.

  You can change a task's status straight from the list.
- **Hours and expenses** can now be linked to a task or milestone. Use the **Log hours** button on a task, and its details are filled in for you.
- **Calendar:** upcoming deadlines (tasks, milestones, agreements expiring, subscription charges), with overdue items at the top.
- **Overview:** now shows the current milestone, tasks in progress, overdue items and the next 14 days.
- **Completion is explicit:** a milestone or task only counts as finished when you mark it, with a date. A passed deadline never finishes it on its own.

**That completes everything you can use before the AB exists:** expenses, hours, the IP and evidence register, and planning. The spec calls this "Gate A".

**Phases 5–7 are the company's bookkeeping, VAT, annual report and tax.** I'd wait to start them until forming Milli Studio AB is in sight, for two reasons:
- Before building each part, the spec requires checking the current official rules, and those can change between now and then.
- The bookkeeping must be built and tested before the AB's first transaction, not before.

When you know roughly when you'll sign the stiftelseurkund, tell me and I'll plan backwards from that date. Until then, use the app, and tell me if anything is awkward or missing.

---

### Dani · 2026-10-11 18:52

what if the prompt becomes too long in this conversation window by the time the ab is created

---

### Claude · 2026-10-11 18:52

Nothing will be lost. Three things protect it:

1. **Long conversations are summarised automatically.** When this one gets too long, the older parts are condensed and the work carries on. Details fade, though, so the important decisions shouldn't live only in this chat.
2. **The important things are already saved in files:**
   - the spec (`SPEC.md`);
   - the system documentation (`docs/SYSTEM.md`), which records how everything works and every version;
   - the README;
   - the full history on GitHub.

   A new conversation can read those and pick up where we left off.
3. **My memory notes** carry over into new conversations. They hold the key facts: Tessera is yours personally, Milli Studio AB is planned, the app and where it lives, and your preferences for how I work.

There's one gap. My memory is tied to the folder the conversation starts in, which is the Tessera folder right now. If you later open Claude Code in the `studio-records` folder, those notes won't load.

**To close it, I'd do two things:**
- **Update my memory notes** with the current status: Phases 1–4 done, and Phases 5–7 to be planned backwards from the stiftelseurkund date.
- **Add a short handover file** (`CLAUDE.md`) to the `studio-records` folder. Claude reads it automatically in any conversation started there. It would cover:
  - what the app is, and the decisions behind it;
  - the rules I've followed, for example that existing database migrations are never changed, and that I must never stop your running copy;
  - what's done;
  - how Phase 5 should start: verify the current official rules first.

When the AB is near, start a fresh conversation in the `studio-records` folder and say "let's plan Phase 5". It will have everything it needs.

Shall I do both?

---

### Dani · 2026-10-11 18:54

i want handover files for both tessera and studio records app from now actually.
just a few days ago the previous tessera conversation became too long. and the new conversation i started had 0 knowledge about tessera

---

### Claude · 2026-10-11 18:54

I'll set up both, keeping one thing in mind. The Tessera repository may be shared with Mattias or Jousef one day, so anything about ownership decisions, negotiations or your preferences goes into a **private** handover file that never goes to GitHub. The Studio Records repository is yours alone, so its handover file can sit in the repo.

Reading my existing memory notes, so the handover contains everything and not just this conversation:

Now writing the private Tessera handover:

The private file is confirmed ignored by git. Now a one-line pointer in the shared Tessera CLAUDE.md, so every session reads the handover first. It reveals nothing private:

Now saving the "keep the handovers updated" rule to memory too, so it holds even if a file is missed:

Both handovers are in place.

**Tessera:**
- **`CLAUDE.local.md`** in the Tessera folder is the full handover:
  - who you are and how you want me to work (every rule you've given me);
  - what Tessera is;
  - every major decision with its date, including what's now outdated;
  - where things stand with Mattias and Jousef;
  - your business facts and open items.

  It's **private**: git ignores it, so it can never end up on GitHub, even if collaborators get access to the repository one day.
- **`CLAUDE.md`** now starts with one line telling every new session to read the private handover first. It reveals nothing private.

**Studio Records:**
- **`studio-records/CLAUDE.md`** covers:
  - what the app is and where everything lives;
  - the safety rules for changing it, such as never editing an existing database upgrade and never touching your running copy;
  - what's built, and exactly how Phase 5 should start.

  It's committed to its private GitHub repository.

**Keeping them current:** I've saved a standing rule that whenever a session changes decisions or status, the handover files are updated before finishing, without you having to ask. That rule also sits inside both files themselves, so a brand-new session follows it.

**When you start a new conversation:**
- Open it in the **Tessera** folder for Tessera work.
- Open it in the **studio-records** folder for the app.

Either way, the new session reads the right handover automatically.

The two small Tessera changes (the pointer line in CLAUDE.md, and the git-ignore entry) aren't committed yet. Shall I commit and sync them?

---

### Dani · 2026-10-11 18:58

can you brief me on them first

---

### Claude · 2026-10-11 18:58

They're both small. Here is exactly what changed:

**1. `CLAUDE.md`:** a new section added at the very top. Your writing-style rules below it are untouched:

> **Start of every session**
>
> Read `CLAUDE.local.md` in this folder before doing anything else, if it exists. It is a private handover with the project's current status, decisions and working rules. Keep it up to date as it instructs.

This is the file every Claude session reads automatically. The line makes sure the private handover gets read too. It says nothing about the handover's contents, so it's safe for anyone with repository access to see. Someone without the private file simply skips it.

**2. `.gitignore`:** two lines added at the end:

```
# Private handover for Claude sessions (never commit)
CLAUDE.local.md
```

`.gitignore` is the list of files git must never upload. This entry keeps the private handover off GitHub permanently, even if someone runs "add everything". It still sits in your Dropbox, so it's backed up there.

Committing saves both changes in the repository's history, and syncing sends them to GitHub. The private file itself is never included. Shall I go ahead?

---

### Dani · 2026-10-11 19:06

can you scan all the business folder and doc folder documents for details that might belong in the private local file

---

### Claude · 2026-10-11 19:06

I'll check every file in DOCS and business for two kinds of things:
- **sensitive details** sitting in files that go to GitHub, which may need to move to the private file;
- **useful context** the private handover is still missing.

I've checked every file in DOCS and business. Two kinds of findings: sensitive details already on GitHub, and context the handover is still missing.

## 1. Sensitive details in files that are on GitHub

The business folder was committed and synced on 10 October, so everything below is already in your Tessera repository on GitHub.

**Personal data, the most sensitive:**
- **`business/almi-submission-form.adoc`:** your full name, organisation number (it's your personal identity number), home address and phone number.
- **`business/01-company-overview.adoc`:** your name, organisation number and address.
- **`business/03-founder-background.adoc`:** your household (husband, two dogs, your home) and that you live on personal savings.

**Negotiating position, which would hurt you if Mattias or Jousef read it:**
- **`business/2026-10-09-business-legal-structure-recommendations.md`:** the whole report. For example, it says hiring Skyfox isn't affordable, "don't grant shares just to secure interest", "don't offer Jousef shares to avoid paying him", and gives a fallback plan if Mattias doesn't want a partnership.
- **`business/13-team-decision-checklist`:** your open questions about Mattias's role, Skyfox's tool, and vetting Jousef's interns.
- **`business/07-swot-analysis.adoc`:** lists "Partnership with Mattias isn't decided" as a weakness.
- **`DOCS/38-team-status.adoc`:** what Jousef said he does and doesn't want, and the unresolved points about Mattias.
- **`DOCS/43-current-major-open-questions.adoc`, Team/legal section:** Mattias's arrangement, Jousef's final engagement, ownership and equity.

**Fine to share as they are:** the game design, technical and research docs (02–37, 39–40, 44–45). Doc 41's ownership principles and doc 42's funding notes are general, with nothing tactical.

**My recommendation depends on one question: will Mattias, Jousef or anyone else ever get access to the Tessera repository?**
- **If yes:** move the whole `business/` folder out of the repository, to a private folder or its own private repository. Also move the team-status details in docs 38 and 43 into the private handover, leaving neutral wording in the docs. One catch: removing files today doesn't erase them from git history. Anyone given access later could still dig them up, unless that history is cleaned first. It's doable, but it's a deliberate step I'd explain before doing.
- **If no:** nothing needs moving now. Just decide this before anyone is invited in.

## 2. Context the handover is missing

These are worth adding to `CLAUDE.local.md`:
- **Legal report points still pending:**
  - write the pre-existing IP inventory before anyone else contributes;
  - Jousef's contract must give you repository access and regular code delivery;
  - Apple's Family Controls approval is a go/no-go for automatic iOS focus tracking;
  - EU enforcement against unfair in-game currency practices (Konsumentverket, 30 September 2026);
  - the "Tessera" trademark hasn't been checked.
- **Creative Europe:** deadline 2 February 2027. It's only possible if Skyfox has a commercially released game, and it isn't part of the funding plan.
- **The Almi meeting is still to come.** The legal report has a ready list of questions for it (section 16).
- **Jousef may bring interns,** and the checklist covers the conditions.
- **Your own work has economic value** and shouldn't be counted as zero, as both doc 38 and the legal report point out.
- **Regional support:** East Sweden Game and NyföretagarCentrum Norrköping.

Two questions:
1. Will others get access to the Tessera repository?
2. Shall I add the items in section 2 to the private handover?

---

### Dani · 2026-10-11 19:10

let's just decide that this repo is meant for me only. when more people are involved, we'll create a new repo for the team that excludes the private stuff. will this cause any issues later?

---

### Claude · 2026-10-11 19:11

That plan works, and it's the common way to do it. There are three things to get right when the day comes, and one to check now.

**When you create the team repository:**
1. **Start it fresh: copy the files in, don't clone this repository.** A clone carries the full history, including every private file ever committed. A fresh repository starts with a clean history.
2. **Keep this repository; never delete it.** Its history (who wrote what, and when, pushed to GitHub) is part of your evidence that Tessera's concept, design and art existed before anyone else joined. The team repository's history would only start on the day it's created.
3. **Pick one home for the shared docs, so they don't drift apart.** I'd make the team repository the master for the game design docs from then on, and keep this one for business, private notes and the archive. Before copying, read through docs 38 and 43, the team-status and open-questions files, since they mention Mattias and Jousef's positions.

**To check now:**
- **GitHub:** open the Tessera repository on github.com, go to Settings → Collaborators, and confirm nobody else is listed. Two-factor login on your GitHub account also matters, since the repository holds your personal details.
- **Dropbox:** the Tessera folder sits in Dropbox. If that folder is ever shared with anyone in Dropbox, they'd see everything, including the private handover. Keep it unshared.

I've added this decision to the private handover, as the standing rule requires, so future sessions know the repository is yours alone and how the team repository should be set up.

Two questions are still open:
1. Shall I add the missing context from my last message to the handover (the legal report's pending points, Creative Europe, the Almi meeting, interns, regional support)?
2. Shall I commit and sync the two small changes, the pointer line in `CLAUDE.md` and the git-ignore entry?

I've recorded the decision in the private handover.

The questions from my last message are still open:
1. Should I add the missing context to the handover: the legal report's pending points, Creative Europe, the Almi meeting, interns and regional support?
2. Should I commit and sync the two small changes, the pointer line in `CLAUDE.md` and the git-ignore entry?

---

### Dani · 2026-10-11 19:15

what is the missing context exactly, can yoou show me the text itself or where it's located?
don't commit now let's do it all later. unless it's important now then go ahead.

---

### Claude · 2026-10-11 19:15

Nothing needs committing now. The git-ignore entry already works from the moment it was saved, so the private file is protected whether or not it's committed. We'll do it all later.

Here is the exact text I'd add to `CLAUDE.local.md`, as a new section 8. The source of each point is in brackets at the end of the line, and stays in the handover so future sessions can find it.

---

**## 8. Pending items from the legal report and other documents**

- **Pre-existing IP inventory:** write it before anyone else contributes. List each asset with its creator, date, original file and any existing rights. Record it in Studio Records' IP register. *(legal report §3.2 and §15 "Priority 1"; checklist §2)*
- **Jousef's contract,** when it comes: Tessera controls the repository from the start, code is delivered regularly (not only after the final invoice), and Jousef's existing code and tools are listed separately. *(legal report §5.2)*
- **Apple Family Controls approval:** automatic iOS focus tracking needs Apple to approve a special permission, and approval isn't guaranteed. It's a go/no-go for that feature, not for Tessera. Apply during the tracking test. *(legal report §12.4)*
- **In-game currency rules:** the EU and Konsumentverket are enforcing rules against unfair in-game currency practices (announced 30 September 2026). Keep Flow Points and coins free of real money. Before ever selling a currency, get a consumer-law review. *(legal report §13.1)*
- **Trademark:** nobody has checked whether "Tessera" can be registered. Check before spending on marketing the name. *(legal report §11.1)*
- **Creative Europe MEDIA grant:** deadline 2 February 2027. It's only possible if Skyfox has a commercially released game from 2024 onwards, and it isn't part of the funding plan. *(legal report §14.2)*
- **Almi meeting:** not held yet. A ready list of questions is in the legal report, section 16. Correct the form's claim that Dani Milli Studio develops Tessera. *(legal report §16; Almi form)*
- **Jousef's interns:** possible. Before any of them join, confirm their role, supervision, legal status, signed confidentiality and IP terms, and that Jousef reviews their code. *(checklist §5.2; legal report §8)*
- **Dani's own work has economic value.** Don't treat it as zero just because it isn't invoiced. Log the hours in Studio Records. *(DOCS/38; legal report §10.2)*
- **Regional support:** East Sweden Game (games-industry advice) and NyföretagarCentrum Norrköping (company formation, free advice). *(legal report §14.3; DOCS/37)*

---

Shall I add it as written, or would you like anything changed first?

---

### Dani · 2026-10-11 19:16

where did all these come from? the business plan?

---

### Claude · 2026-10-11 19:16

No, none of it comes from the business plan. Almost all of it comes from **the legal-structure report**, `business/2026-10-09-business-legal-structure-recommendations.md`, the advisory assessment dated 9 October. The rest comes from three places:
- **`business/13-team-decision-checklist`:** your checklist (the interns, the IP inventory).
- **`DOCS/38-team-status.adoc`:** the line that your own work shouldn't be counted as zero.
- **`DOCS/37-business-and-audience-work.adoc`:** East Sweden Game.

The business plan files (00–12) contain only summaries, which I wrote yesterday partly from that same report.

**One caveat about the report:** it describes itself as "an independent business-advisory assessment… not official advice from Almi or a substitute for contract-specific legal advice". I haven't checked all of its facts myself. Last time, my own search failed to confirm a date that turned out to be real, so the report has a decent track record. But some items are specific claims I haven't verified:
- the Konsumentverket announcement of 30 September 2026;
- the Creative Europe deadline of 2 February 2027 and its conditions.

The handover shouldn't present them as confirmed facts. I'd change the opening line to:

> **## 8. Pending items from the legal report (9 October 2026) and other documents**
> Points from the report are its advice, not verified facts. Check the official source before acting on any of them.

Shall I add section 8 with that opening line?

---

### Dani · 2026-10-11 19:18

some weren't reviewed by a lawyer yet though. better keep them in the report. unless you think otherwise?

---

### Claude · 2026-10-11 19:18

I agree. Restating its advice in the handover would make it look more settled than it is, and two copies can drift apart. The report should stay the only place that advice lives.

The handover still needs to tell a new session two things: that the report exists, and how much to trust it. Right now it says the report is "still the reference" for structure and contracts, which overstates its status. I'd replace that entry with:

> - **2026-10-09** Legal-structure report received (`business/2026-10-09-business-legal-structure-recommendations.md`). It is advisory and **not yet reviewed by a lawyer**. Consult it for questions on company structure, IP, contracts, platform rules and funding, but present its points as recommendations to check, never as settled facts. Where the 2026-10-10 decisions differ (studio AB, Tessera held personally), those decisions win.

And under open items, two facts that are status rather than advice:

> - The Almi meeting has not happened yet. Correct the form's claim that Dani Milli Studio develops Tessera when it does.
> - Dani's own hours have economic value: log them in Studio Records.

I'd drop the rest of section 8. Shall I make those two changes?

---

### Dani · 2026-10-11 19:19

yeah thanks

---

### Claude · 2026-10-11 19:19

I've made both changes to the private handover:
- **Report entry:** it now says the report is advisory, not yet reviewed by a lawyer, and that its points are recommendations to check.
- **Open items:** the Almi meeting and logging your own hours are added. So is the deferred commit, so a future session will remind you about it.

---

### Dani · 2026-10-11 19:20

you can commit now

---

### Claude · 2026-10-11 19:20

I've committed the two changes and synced them to GitHub, since syncing was part of the plan we'd put off.
- I checked that the private handover is **not** in the repository, and it isn't.
- I removed the "commit later" reminder from the handover, now that it's done.

---

### Dani · 2026-10-11 19:27

2026-10-09-business-legal-structure-recommendations
Is the pdf matching the original file

---

### Claude · 2026-10-11 19:27

No Python on this machine, so I'll check for a command-line text extractor first:

The PDF was printed from a browser 12 seconds after the .md file was saved, so it's almost certainly a print of it. I'll compare the text itself to be sure:

Yes, the PDF matches the original, word for word. Here's how I checked:
- **Every piece of the .md file is in the PDF:** all 811 paragraphs, list items and table cells. The only two "misses" are phrases where a hyphenated word broke across a line in the PDF ("purchased-currency", "digital-purchase"). They're a reading glitch, not a difference.
- **The word counts agree:** 8,636 words in the .md and 8,634 in the PDF. The difference of two is exactly those two joined words.
- **The 45 PDF lines my check flagged all come from tables.** The text extractor reads tables column by column rather than row by row. Every table cell itself was found.
- **The PDF was printed from a browser 12 seconds after the .md was last saved,** on 9 October at 17:03, so it's a print of the final version.

The two files say the same thing, so you can treat either as the original.

---

### Dani · 2026-10-11 19:30

oh yes. the game's name has been altered to Tessera: Sleeping Atlas
For copyright issues and such

---

### Claude · 2026-10-11 19:30

Thanks, I've noted it. Here's what follows from it.

**A correction on the reason:** in Sweden, as almost everywhere, a game's title isn't protected by copyright. Titles are too short to count as a creative work. What protects a name, and what can cause conflicts with other names, is **trademark law** (*varumärke*). The rename may well have been the right move, but the check that matters is a trademark search:
- **PRV's search** for Sweden;
- **TMview** for the EU;
- the **App Store and Google Play,** for games with similar names.

That covers "Sleeping Atlas" and the full title. Do it before you use the name publicly. The legal report also flagged that "Tessera" had never been checked.

**Things to update, when you're ready:**
1. **The docs and business plan:** the GDD title, README, business plan and so on. How do you want the game named in them? I'd suggest the full title **"Tessera: Sleeping Atlas"** in titles and first mentions, and **"Tessera"** as the short name in running text. The world's tiles stay "Tesserae". I'll propose the exact edits once you confirm.
2. **Studio Records:** rename the project yourself under **Projects → Tessera → Edit**, with the reason "Game renamed". The old name stays in the history, which keeps your evidence continuous.
3. **The timeline:** add an event for the rename with its date, so the evidence explains why older files say only "Tessera". When was the name changed?

I've recorded the new name in the private handover, as the standing rule requires.

The new name is recorded in the private handover, marked as pending until you choose how it should be used in the docs.

---

### Dani · 2026-10-11 19:33

in Sweden, as almost everywhere, a game's title isn't protected by copyright. Titles are too short to count as a creative work. What protects a name, and what can cause conflicts with other names, is trademark law (varumärke). The rename may well have been the right move, but the check that matters is a trademark search:

PRV's search for Sweden;
TMview for the EU;
the App Store and Google Play, for games with similar names.


Can you do the trademark search?

---

### Claude · 2026-10-11 19:33

I can do a first screening with web search: existing games, apps and companies using the name. The official trademark databases (PRV, TMview) are interactive search tools that usually block automated access, but I'll try them too.

TMview refused the connection, as expected. A couple more searches, including one that matters: "Sleeping Atlas" sounds almost the same as a well-known band name.

I ran a first screening on the open web: games, apps, companies, and any trademark records that show up in search results. The official trademark databases refused automated access, so that part still needs a manual search, and I've put the steps at the end.

## What I found

**"Tessera" on its own was a crowded name, so the rename looks like a good call.** Other products already use it:
- three games: a jigsaw puzzle game on Steam ([Charlie Batten](https://store.steampowered.com/app/3351360/Tessera/)), a tactics game entering early access on Steam in August 2026 ([MUGI Games](https://store.steampowered.com/app/4525690)), and a logic puzzle on Google Play since 2014 ([Tarkus](https://play.google.com/store/apps/details?id=com.tarkus.tessera.android&hl=en));
- [Tessera Multimedia](https://tessera.gr/en/), a Greek company that makes games and apps and says it owns its trademarks.

**"Sleeping Atlas": no game or app with that name, and no trademark found.** The nearest names:
- [Atlas Is Sleeping](https://thelesserkey.itch.io/atlas-is-sleeping), a one-page poetry game on itch.io;
- [Waking Atlas](https://frostedfears.itch.io/wakingatlas/community), a small itch.io game;
- [Dream Atlas](https://apps.apple.com/us/app/id6470039596), a dream-journal app.

Different enough that none of them is a real concern.

**One to have a specialist look at: the band "Sleeping At Last".**
- **The name:** said aloud, "Sleeping Atlas" and "Sleeping At Last" sound almost identical, and the band even has a well-known music series called *Atlas*.
- **The trademark:** a [US trademark registration](https://trademark.justia.com/781/63/sleeping-at-78163532.html) for SLEEPING AT LAST covers musical sound recordings (class 9, registered 2003, held by Ryan O'Neal). I found no EU registration.
- **Why it's probably fine:** music and games are different goods, it's a US registration, and your full title starts with "Tessera", which sets it apart.
- **Why I'd still check:** trademark conflicts turn on how marks *sound* as well as how they look, and class 9 also covers downloadable games. Ask a trademark specialist this specific question before launch, especially for the US market.

## The official searches to do yourself

These take a few minutes and can't be done from here:
1. **[TMview](https://www.tmdn.org/tmview)** covers the EU and the national offices, including Sweden's PRV. Search "Sleeping Atlas", "Tessera" and "Tessera Sleeping Atlas".
2. **[WIPO Global Brand Database](https://branddb.wipo.int)** covers international registrations.
3. **Filter on classes 9 (downloadable games and software) and 41 (online games and entertainment).**

If anything comes up, send me a screenshot or the result and I'll help you read it. A web screening like this, or a search you run yourself, is a first filter, not clearance. Before you spend on marketing the name, a trademark specialist should do a proper clearance search, as the legal report also recommends.

I've added the screening result to the private handover.

The screening result is saved in the private handover too, so a future session knows what's been checked and what's still outstanding.

---

### Dani · 2026-10-11 19:53

can you walk me through all the data i need to fill into studio records

---

### Claude · 2026-10-11 19:53

Here's everything to enter, in the order I'd do it. Steps 1–3 are quick setup. Steps 4–6 are the important evidence work. After that it's routine.

## 1. Backups (5 minutes, do first)
**Backups & checks:**
1. Add two backup folders, such as one in Dropbox and a USB drive.
2. Set the passphrase and write it on paper.
3. Click **Back up now**, then **Test restore**.

## 2. Check the starter records (5 minutes)
- **Projects → Tessera → Edit:** change the name to **Tessera: Sleeping Atlas**, with the reason "Game renamed". Optionally add a start date and a budget.
- **Owners:** you and Milli Studio AB are already there. Leave the personal and organisation numbers empty. Add the AB's dates only when they happen.

## 3. People (only who's involved)
**People:** add **Mattias** and **Jousef**:
- **Name and role:** for example "Possible producer/partner" and "Programmer".
- **Why you keep their details:** for example "Collaboration on Tessera: Sleeping Atlas".
- **Contact details:** only what you actually need.

## 4. Timeline: Tessera's history (most important)
1. **Timeline → "Import history from a git repository"**, with the folder `C:\Users\someo\Dropbox\Studio\Tessera\repositories\tessera`. That brings in 20 or so dated commits in one go.
2. **Add the key events by hand** with **Add an event**. These are the ones I know, with dates from the docs:

| Date | Event |
|---|---|
| *your date* | Initial concept, when the Tessera idea started (as best you know, marked "approximate") |
| 2026-09-14 | Scope-safe Master Inventory written |
| 2026-09-17 | Research and design direction document |
| 2026-09-18 | GDD and TDD ("Library" versions) |
| 2026-09-22 | GDD and TDD sent to Mattias and Jousef |
| 2026-09-24 | Milestone split agreed (based on Mattias's proposal) |
| 2026-10-08 | Almi advisory request submitted |
| 2026-10-09 | Legal-structure report received |
| *your date* | Game renamed "Tessera: Sleeping Atlas" |

When you don't know a date for certain, mark it "approximate" rather than guessing an exact day.

## 5. IP register: your existing work (the biggest job)
**IP register → Register an asset** for each creative item: the refinery concept, the storyboard sheet, the ladybug designs, the world and character concepts, the GDD, the TDD, and so on. For each one:
1. **Fill in the basics:**
   - category and creation date (the file's own date is a good source);
   - "Concrete expression" for artwork and documents;
   - claimed holder: you.
2. **Copyright notice:** where the file shows "© Dani Milli Studio", type exactly that.
3. **AI use:** say honestly whether AI was used, and if it was, which tool and what you did yourself.
4. **Open it → Add a version:** upload the **original working file**, such as the PSD or Blender file, not just an export. Add exports as further versions if you like.
5. **Contributors:** add yourself, with "own work".

Your originals are scattered: the repository's `images/` folder, `Dropbox/Studio/Tessera` and possibly other Studio folders. Collect them first, then register them one by one.

## 6. Expenses and subscriptions
- **Subscriptions:** add your AI-agent subscription, plus any other ongoing project costs.
- **Expenses:** add each past project purchase you have a receipt for, with the receipt file attached. They'll show as "reconstructed", which is expected.

## 7. Hours
- **From now on:** log your hours as you work. The timer makes it easy. Be specific about what you produced.
- **Earlier work (optional, but it strengthens the evidence):** reconstruct sessions where you can back them up with file dates or git commits, and tick "reconstructed". Only enter hours you can reasonably stand behind.

## 8. Contributions
**Contributions:** one record each for the input others have given so far:
- **Mattias:** proposed the milestone split. Type: advice.
- **Jousef:** technical feedback on the TDD. Type: advice.

For both, set the rights to **"not needed"**: advice and ideas don't create rights in your work.

## 9. Planning (whenever you like)
**Planning:** milestones **M1 (mechanics prototype)**, **M2 (polished slice, public release)** and **M3 (real-world layer)**, plus the **tracking test app**. Add tasks as they come up.

## 10. Wrap up
**Evidence → Create package** for Tessera: Sleeping Atlas. Do it once now, and again after any big batch of new records.

Not needed yet: agreements (none signed so far) and funding (your expenses already record that you paid them).

Steps 4 and 5 are the ones that protect Tessera most. If you'd like, I can help list the asset files before you start: tell me which folders hold your originals, and I'll make a checklist with each file's date.

---

### Dani · 2026-10-11 19:57

i think my github userid is millistudio, which doesn't yet exist. will that cause any complications

---

### Claude · 2026-10-11 19:57

Let me check what GitHub actually sees, rather than guess:

No complications from the name, but I found one small real issue.

**The name is fine.**
- Your GitHub account is **MilliStudio**. It exists, and your computer logs in to it, which is why syncing has been working.
- "millistudio" is only a label written into each commit to say who made it. It doesn't need to match an account, and nothing depends on it.

**The issue: a typo in the email address on the Tessera commits.** Your Tessera repository has been recording commits under **dani.syre*m*@gmail.com** (m instead of n): 19 of its 20 commits. GitHub links a commit to an account by its email, so those commits aren't linked to your GitHub account. Everything was still saved and synced normally.

**Why it matters a little:** the commit history is part of your evidence that Tessera's work is yours. A mistyped email weakens that link slightly, and in theory someone else could own that address.

**What I'd do:**
1. **Fix the setting** in the Tessera repository, so future commits use dani.syren@gmail.com. The Studio Records commits already used the right address.
2. **Add a small `.mailmap` file** that records "dani.syrem@gmail.com is a typo for dani.syren@gmail.com". Git and its tools then show the old commits under the right address, without changing them.
3. **Leave the old commits themselves alone.** Rewriting them to fix the email would change their fingerprints and push dates, which is exactly what makes them useful as evidence.

I'd also add a note to the private handover and, later, to the Studio Records timeline, so the typo is explained wherever the history is used as evidence.

Shall I do steps 1 and 2?

---

### Dani · 2026-10-11 20:00

if you can that would be great

---

### Claude · 2026-10-11 20:00

Both steps are done:
1. **The email is fixed.** New commits in the Tessera repository use **dani.syren@gmail.com**.
2. **The `.mailmap` file is in place.** The 19 old commits now show under your correct address. I checked that the commits themselves are untouched and still contain the original typo, so their evidence value is intact.

I've also added a note to the private handover explaining the typo, so future sessions never "fix" the old commits.

**When you import the Tessera history into Studio Records' timeline,** add a note to one of the imported events, such as the first commit: "Commits before 2026-10-11 used the mistyped address dani.syrem@gmail.com; the real address is dani.syren@gmail.com." That way the evidence explains itself.

The new `.mailmap` file isn't committed yet. Shall I commit and sync it, or keep it for the next batch?

---

### Dani · 2026-10-11 20:00

well done thanks

---

### Claude · 2026-10-11 20:00

You're welcome. I've noted in the handover that `.mailmap` still needs committing, so it'll go in with the next batch and won't be forgotten.

When you're ready, start with backups, then the timeline import and the IP register.

---

### Dani · 2026-10-11 20:08

is this chatlog saved?

---

### Claude · 2026-10-11 20:08

Yes. This conversation is saved on your computer as a log file, `9f748344-….jsonl`, in `C:\Users\someo\.claude\projects\…tessera\`. Your earlier Tessera conversations are there too. You can reopen it with `/resume` in Claude Code.

There are two limits:
1. **Old conversations get deleted automatically.** As far as I know, Claude Code clears conversation logs after **30 days** by default. Your settings don't change that, so this log would disappear in about a month.
2. **It isn't backed up.** That folder sits outside Dropbox, so a disk problem would lose it.

The important content is already safe elsewhere: the handover files, my memory notes, the docs, and the Studio Records spec and system documentation. The log matters only if you want the full conversation itself.

**If you want to keep it,** I can do either or both:
- **Turn off the automatic cleanup,** or extend it to, say, a year. That's a small change to your Claude Code settings.
- **Copy the conversation logs into a private Dropbox folder,** for example `Dropbox/Studio/claude-logs`, so they're backed up. They contain everything we've discussed, including your personal details, so keep that folder unshared.

Would you like either?

---

### Dani · 2026-10-11 20:09

the second please

---

### Claude · 2026-10-11 20:09

All 10 Tessera conversation logs are now copied to `Dropbox/Studio/claude-logs/tessera/`, about 90 MB, together with my 12 memory notes. The memory notes weren't backed up anywhere before either.

**The good news:** the copy includes your earlier Tessera conversations, going back to 21 September. That includes the long one from 9 October that ran out of room. Nothing from it was actually lost; the new conversation just couldn't see it.

**The catch:** this is a snapshot.
- The originals are still deleted after about 30 days.
- Anything said after today, including the rest of this conversation, needs copying again.

The easiest way: I can put a small file in that folder, **Back up Claude logs.bat**. You'd double-click it now and then, for example when you make a Studio Records backup. It copies only new and changed logs and memory notes, and never deletes anything. Shall I add it?

---

### Dani · 2026-10-11 20:12

shoot

---

### Claude · 2026-10-11 20:12

Your conversation logs are now backed up properly. Everything is in `Dropbox/Studio/claude-logs/`:
- **`Back up Claude logs.bat`:** double-click it now and then. It copies new and changed conversation logs and memory notes, then shows "Done". It never deletes anything.
- **`projects/`:** the backed-up logs and memory notes. It already holds all of today's files, and it will also pick up conversations started in other folders later, such as studio-records.

A good habit is to run it whenever you make a Studio Records backup. I've also noted in the private handover where the logs are, so a future session can look things up in your old conversations, including the long one from 9 October.

Keep the `claude-logs` folder unshared. It contains everything we've discussed.

---

### Dani · 2026-10-11 20:13

almost the entire dropbox is private so no worries

---

### Claude · 2026-10-11 20:13

Good, then you're covered. The only folders to watch are the few you do share: keep `Studio/claude-logs`, `Studio/Tessera` and `Studio/studio-records` out of them.

---

### Dani · 2026-10-11 20:53

this is way over the top detail on the expense form. the vat i can understand, but the conversion rate

---

### Claude · 2026-10-11 20:54

Fair point. The exchange rate is the wrong question to ask you.

**Why the app needs a SEK amount at all:** totals and, later, the company's books are in SEK. Your AI subscription is billed in dollars, so the app needs to know what it cost you in kronor.

**The better way:** your bank statement already shows what you paid in SEK. The app should ask for that, and work out the rate itself. That's simpler for you and more accurate than a published rate, because it's what actually left your account.

**What I'd change:**
1. **Exchange rate → "Amount in SEK (from your bank statement)".** It only appears when the currency isn't SEK. The app calculates the rate and stores both.
2. **Shorter form.** By default it shows only:
   - date;
   - what was bought;
   - total and currency (plus the SEK amount if it's not SEK);
   - whose expense;
   - project;
   - paid by;
   - the receipt.

   Everything else goes under **"More details"**, closed until you open it: supplier and invoice, VAT, payment details, evidence, review, and before-the-AB notes.

Nothing about how expenses are stored changes, and all your existing records stay as they are. Shall I go ahead?

---

### Dani · 2026-10-11 20:55

it won't let me save without it. how on earth am i supposed to k now what the conversion rate was on the 20th

---

### Claude · 2026-10-11 20:56

Sorry, that's a real problem, and the fix I suggested solves it. I'll make it now, so you're not stuck.

Your bank statement or bank app shows what the charge cost in SEK, and that's the best number. If you can't find it, the app will also have a **"Look up rate"** button that fetches the Swedish central bank's (Riksbanken) official rate for that date. First, checking that Riksbanken's free rate service answers:

Riksbanken's service works. 20 September was a Sunday, so the app will use the last banking day before it (18 September: 9.85 SEK per dollar). Now making the changes:

Now the form: short by default, with the rest under "More details", and the SEK amount plus a "Look up rate" button:

My script dropped one field, "possible later takeover by the AB". Putting it back:

Updating the tests for the new behaviour:

All 56 tests pass. A quick live check of the look-up through the app:

It's fixed and saved to GitHub. **Close the black window and start the app again.** Nothing in your database changes this time, so a restart is all it needs. Anything you'd typed into the expense form before is lost, so re-enter that one.

**The form now:**
- **Shows only the essentials:**
  - date;
  - what was bought;
  - total and currency;
  - whose expense;
  - project;
  - paid by;
  - receipt.

  Everything else sits under **"More details"**, closed and optional.
- **For dollars or euros, it asks what it cost you in SEK,** the figure on your bank or card statement, instead of an exchange rate. The app works out the rate itself.
- **No statement at hand?** Press **"Look up rate"**. It fetches Riksbanken's official rate for that date and fills in the SEK amount. For 20 September, a Sunday, it uses Friday the 18th: 9.85 SEK per dollar. Your bank's actual charge will be slightly different, so replace it if you find the statement later. You can always edit it afterwards, and the old version stays in the history.

I've also noted in the app's handover that you want everyday forms kept short, so future additions follow the same pattern.

---

### Dani · 2026-10-11 20:59

i saved it. it will be lost?

---

### Claude · 2026-10-11 20:59

No, a saved expense is safe. Saved records live in your database, and updating or restarting the app never touches them. Only something typed into a form but *not* saved would be lost.

Checking, by count only, that it's there:

It's there: 1 saved expense, in a foreign currency. It's unaffected by the update.

You probably entered an exchange rate to get it to save. If you later find the real SEK amount on your bank statement, open the expense, click **Edit**, and put that figure in **"What it cost in SEK"**. The app then recalculates the rate from it, and the first version stays in the history.

---

### Dani · 2026-10-11 20:59

ok thanks

---

### Claude · 2026-10-11 20:59

You're welcome. Tell me if anything else in the app feels like too much.

---

### Dani · 2026-10-11 21:03

the amount in sek changed from 220something to 254,06 when i pushed the look up rate button. is it correct?

---

### Claude · 2026-10-11 21:03

I'll look at the saved expense's figures, read-only, and work out what the button did:

Yes, **254,06 is correct**, and the old 221,63 was wrong. Here's why:
- **Your expense is 22,50 in euros,** dated 20 September.
- **The saved version used a rate of 9,85.** That's the *dollar* rate from my example in my earlier message, not the euro rate. Sorry, my example invited that mix-up.
- **The euro rate for that date is 11,29.** The look-up used Riksbanken's euro rate for Friday 18 September, the last banking day before the 20th: 22,50 × 11,29 = 254,06 SEK.

**The look-up only fills in the form. It doesn't save anything.** To keep the corrected amount, finish the edit: give a reason, such as "Wrong exchange rate (USD rate used for EUR)", and click **Save new version**.

If your card statement shows a slightly different SEK figure, use that instead. It's what you actually paid.

---

### Dani · 2026-10-11 21:06

Part of a subscription
the list is empty

---

### Claude · 2026-10-11 21:06

The list is empty because no subscriptions are registered yet. It only shows ones you've created under **Subscriptions** in the menu.

1. Go to **Subscriptions → Add new.** Fill in:
   - **name:** for example your AI tool;
   - **supplier;**
   - **usual amount and currency:** for example 22,50 EUR;
   - **billed:** monthly or yearly;
   - **first charge date:** 20 September.
2. **Link your existing expense:** open it under **Expenses → Edit**, choose the subscription in **"Part of a subscription"**, and save with a reason such as "Linked to subscription".

From then on, use **Record a charge** on the Subscriptions page for each new monthly charge. It opens a new expense with the subscription, amount and supplier already filled in, and you just add the date, the SEK amount and the receipt. The app also reminds you on the Overview when a charge is due.

---

### Dani · 2026-10-11 21:27

is it possible to arrange history pages so last record is listed first

---

### Claude · 2026-10-11 21:27

Yes, that's a small change. Doing it now:

History pages now show the newest version at the top. This change only affects the page itself, so there's no need to restart the app: press **Ctrl+F5** in your browser to reload it.

---

### Dani · 2026-10-11 21:42

Amount excluding VAT plus VAT does not add up to the total
I copied what was found on the receipt

---

### Claude · 2026-10-11 21:42

That check is meant to catch typing mistakes, but receipts can legitimately differ from it. Could you tell me the three numbers you typed: the total, the amount excluding VAT, and the VAT amount? Then I can see what's going on.

The usual causes:
- **A rounding difference of 1 cent.** Some receipts calculate VAT in a way that leaves the parts 0,01 off the total. In that case the app is too strict, and I'd let it accept differences up to 1 cent.
- **A discount or credit on the receipt.** The total is then lower than the amount excluding VAT plus the VAT.
- **The VAT percentage typed instead of the amount,** for example "25" rather than "4,50".

**To save it right now,** leave the two VAT fields empty. They're optional, and the receipt you attach has the details anyway. You can add them later with Edit once we've sorted it out.

This receipt does add up: 199,20 + 49,80 = 249,00 kr. So the problem is in what went into the form. My best guess is one of these:
- **The euro figure ended up in the VAT field.** Right under the 49,80 kr, the receipt shows "(€4,42)", and 199,20 + 4,42 doesn't make 249,00.
- **The receipt's figures went into a euro expense.** Your saved expense is 22,50 **EUR** on 20 September. This receipt is a different charge: **249,00 SEK** on **17 September** (ChatGPT Plus). Kronor parts can't add up to a euro total.

**What to fill in for this receipt (as a new expense):**

| Field | Value |
|---|---|
| Date | 2026-09-17 |
| What was bought | ChatGPT Plus subscription, 17 Sep – 17 Oct 2026 |
| Total paid | 249,00 |
| Currency | **SEK**, so no conversion is needed |
| Paid by | Me personally |
| *More details →* Supplier | OpenAI Ireland Limited |
| Supplier country | Ireland |
| Invoice / receipt number | GRVBYZIA-0011 / 2380-1168 |
| Invoice date | 2026-09-17 |
| Amount excluding VAT | 199,20 |
| VAT amount | 49,80 |
| Payment method | Mastercard …1014 |

Attach the PDF as the receipt. Then register **ChatGPT Plus** as its own monthly subscription, so the app reminds you of the next charge on 17 October.

**Is the 22,50 EUR expense from the 20th a different subscription?** If it is, it needs its own receipt. If you'd attached this ChatGPT receipt to it by mistake, edit it and swap in the right one.

---

### Dani · 2026-10-11 21:45

yea i entered 199 without the .20

---

### Claude · 2026-10-11 21:45

That explains it: 199,00 + 49,80 = 248,80, which is 0,20 short of the 249,00 total. With 199,20 in the field, it'll save.

The error message could have made that obvious. I can change it to show the sum, for example "199,00 + 49,80 = 248,80, but the total is 249,00", so you can spot the wrong figure at a glance. Want me to?

---

### Dani · 2026-10-11 21:47

yes that would be great. also a question. i am unable to open multiple windows, is it problematic to allow that? another one, shouldn't expences and subscriptions be under one category? those are super minor issues though

---

### Claude · 2026-10-11 21:47

Doing the error message first:

All 56 tests pass, and GitHub received both commits ("503ad6f..4078251 main -> main"). Only the local note of what's on GitHub failed to update, probably a file Dropbox is holding. Checking:

Still blocked. That file is only git's local note of where GitHub is, and it can always be rebuilt. I'll move it aside and let git recreate it:

That didn't work either, so I'm putting the file back first:

I've added two lessons from just now to the app's handover. Future sessions will commit only after checking that the tests passed, and will know how to handle the Dropbox lock.

Shall I go ahead with the separate tabs and windows, and the grouped menu?

---

### Dani · 2026-10-11 21:50

if they're not complicated to apply.

---

### Claude · 2026-10-11 21:50

Neither is complicated. Building both now.

Now the grouped menu, with every page as its own address:

Tests pass. The style change didn't apply because I'd changed that file earlier without re-reading it. Redoing it:

Both work. Saving the change with documentation, checking the test result before committing:

Both are done and saved to GitHub. All 57 tests pass, and I checked that before committing. **Close the black window and start the app again** to get them.

**The menu now has five entries:**
- **Overview**
- **Money:** Expenses, Subscriptions, Funding, Summaries
- **Work:** Hours, Planning, Calendar
- **IP & evidence:** IP register, Timeline, Agreements, Documents, Contributions, Evidence packages
- **Settings:** Projects, Owners, People, Change log, Backups & checks

Click a heading to open it.

**Multiple windows:**
- **Opening a page elsewhere:** right-click any menu item and choose "Open in new tab" or "new window", or middle-click it.
- **Addresses:** each page has its own address, such as `localhost:4870/#expenses`, so you can bookmark one. The browser's back button works too.
- **Protection:** if you edit the same record in two windows, the second save is refused with "This record was changed in another window… reload it first". So one window can never quietly undo the other.

---

### Dani · 2026-10-11 22:00

i wonder if adding a photoshop sub is valid. i'm only using it for tessera but, i would always have photoshop regardless since i'm an illustrator, and not sure how proof can be documented

---

### Claude · 2026-10-11 22:00

Recording it is valid. Whether the company could ever deduct it is a separate question, and the app keeps those two apart.

**Recording it is fine,** because the record only states facts: you pay for Photoshop, and you use it for Tessera. That's useful both as evidence that you funded Tessera's tools and for knowing what Tessera really costs. Your personal expenses are never treated as company bookkeeping, so recording it claims nothing about tax.

**Be honest about the share.** You said yourself you'd have Photoshop anyway as an illustrator. Saying "100% Tessera" is the claim most likely to be questioned, and you can't prove that you *didn't* use it for anything else. So:
- set **"Share used for the project"** to an honest estimate of how much of your Photoshop time goes to Tessera. If it's genuinely all of it right now, 100 is fine, but say so in the notes;
- add a note such as: "General illustration tool; currently used only for Tessera; would be kept regardless";
- leave **Tax treatment** as "Not reviewed yet". When Milli Studio AB exists, mixed-use software is a question for the accountant, and the usual answer is that only the business share counts.

**How to back up the use:** you can't prove a negative, but you can show positive use:
- **Hours:** log your Tessera work with "Photoshop" in the description, for example "Refinery concept painting (Photoshop)".
- **IP register:** store your Tessera PSD files. Each one carries the Photoshop version and its dates in its own metadata.

Together they show steady Tessera use of the tool, which is the realistic standard.

**One thing to check first: is Photoshop currently paid through Dani Milli Studio,** for example booked as a business expense of the firm? If so, don't record it as a Tessera expense you paid personally, because that would contradict the firm's books. Record it once the firm is closed and you pay for it privately, or leave it out. If you pay for it privately now, go ahead.

---

### Dani · 2026-10-11 22:02

nothing i bought was ever paid through dani milli studio

---

### Claude · 2026-10-11 22:02

Then there's no conflict, so go ahead:
1. **Money → Subscriptions → Add new:** Adobe Photoshop, supplier Adobe, the usual amount and currency, billed monthly or yearly, with the first charge date.
2. **Record a charge** for each payment, with the receipt from your Adobe account. Under More details, add the honest project share and the note: "General illustration tool; currently used only for Tessera; would be kept regardless".

I've also noted in the handover that everything you buy is paid privately, never through Dani Milli Studio, so future sessions don't raise this again.

The handover now records that you've always paid privately, and how to handle tools you use for more than Tessera.

---

### Dani · 2026-10-11 22:21

i am unable to add an invoice to a payment when i'm editing it

---

### Claude · 2026-10-11 22:21

The upload button only exists on the "new expense" form, so you can't add a receipt when editing. Adding it to the edit form, along with a link to the current receipt if there is one:

The Dropbox lock again. The push itself went through, so I'll just sync git's local note:

The fix for receipts is live and on GitHub. Press **Ctrl+F5** in the app, since it's a page-only change. When you edit an expense, the top of the form now has **"Add the receipt or invoice"**, or **"Replace…"** with a link to the current one if there is one. A replaced receipt isn't deleted: it stays under Documents, and the expense's history shows the switch.

**About the Dropbox lock:** it's harmless. GitHub has everything (I checked: both sides are on the same version). Only git's local note of that fact is stuck, so git wrongly says "ahead 1", and the next sync will clear it.

The cause is that the app's code folder sits in Dropbox, and Dropbox briefly grabs git's internal files while syncing. The tidy fix is to tell Dropbox to ignore the hidden `.git` folders in `studio-records` and the Tessera repository:
- **Your files stay synced as normal.** Only git's internal bookkeeping is excluded.
- **GitHub still keeps the full history,** so nothing loses its backup.
- **It also removes a small risk:** Dropbox syncing git's internals mid-write can, rarely, corrupt a repository.

Shall I set that up?

---

### Dani · 2026-10-11 22:29

i think there's another bug. when i use the record a charge button from a subscription, if the new expence is reconstruced it still adds the current date at the top instead of the date of the invoice

---

### Claude · 2026-10-11 22:29

Yes, that's a bug. "Record a charge" always filled in today's date. It should use the date the charge was due, from the subscription. Fixing it so the date is the subscription's next charge date (or today, if that's still in the future):

Fixed and on GitHub. Press **Ctrl+F5** in the app to get it.

**Record a charge** now fills in both the date and the invoice date with **the day the charge was due**:
- the subscription's first charge date, for the first charge;
- one month or year after the last recorded charge, after that.

If that day is still ahead, it uses today. Check it against the receipt, since a charge can land a day or so off, and correct it if needed.

The question from before is still open: shall I set Dropbox to ignore git's internal folders, which stops that sync hiccup?

---

### Dani · 2026-10-11 22:33

yes

---

### Claude · 2026-10-11 22:33

Setting it up now, using Dropbox's own "ignore" marker on the two hidden `.git` folders:

Done. Dropbox now ignores the hidden `.git` folders in both `studio-records` and the Tessera repository.
- **Checked:** both repositories are intact, with no problems found, and they match GitHub. The push I just made went through cleanly, with no lock error this time.
- **Your files still sync** to Dropbox exactly as before. Only git's internal history folder is excluded, and GitHub keeps the full history.
- **One habit matters a bit more now:** history only reaches GitHub when it's synced, so a commit made but not synced exists only on this computer. I sync after every change I make, so this only matters if you ever commit yourself.
- **If you use Dropbox on another computer too:** the `.git` folders will disappear from that copy, which is normal for ignored folders. You'd fetch the history from GitHub there instead.

Both handover files note the change, so future sessions leave the marker in place.

---

### Dani · 2026-10-14 13:44

the almi meeting was a bust. it was all out of their expertese. they recommended east sweden games instead. but here is the transcript from the meeting. can you extract the useful things and list them for me

---

### Claude · 2026-10-14 13:45

Here's what's useful from the meeting. I've grouped it into advice, next steps, and new facts that change the records.

## Henrik's advice
1. **Equity split:** there's no standard formula. He suggested you write your own proposal first: list the tasks, put a value on each (including your idea and all the work so far), then use it as the starting point with Mattias. Expect some back and forth.
2. **How to think about funding:** work from the goal down: milestones, then the actions each one needs, then the resources. He splits resources into **time, competence and money**. For each milestone, decide who covers what: your own time, the studio's time, and either paying the programmer or giving him shares. Money gets easier to raise at later milestones, once there's something to show.
3. **Ask Mattias directly** how he wants to fund the work: his time, money, or something else. That's the way to get past his vagueness.
4. **Expenses before the AB:** "hopefully" they can be filed as the company's expenses later, but ask an **accountant**. A regular *redovisningskonsult* is enough; you don't need an authorised auditor. He thinks buying some accountant time early is money well spent. This matches what the app already does: it records the expenses and leaves the tax question for later.
5. **Ownership:** as long as only you do the work, it's yours. Once you pay a programmer, or interns take part, have a **lawyer** write down that everything they produce is yours.
6. **Enkelt bolag:** avoid it. With several parties, an **AB** is the better way. That matches the legal report.

## Next steps
1. **Contact East Sweden Game first, before a lawyer.** They help with:
   - starting and running a game studio;
   - publishers and investors;
   - when to start spending;
   - possible funding.

   They also have co-working, coaching and events (fika on Thursdays, says Henrik). He sent you the link in the meeting chat.
2. **Book a free consultation with NyföretagarCentrum.** It's free, and it's the right place for startup questions, not Almi. You've done their courses but not the advice sessions.
3. **Valla folkhögskola** teaches game development. Its students could help more cheaply, though slower than a professional.
4. **Almi only fits later:** for running companies, or for truly new innovations. Henrik thinks Tessera wouldn't count as "innovative" in Almi's sense, though he called it a really good idea.

## New facts that change the records
- **Dani Milli Studio:** you told Henrik you've already **dissolved** it and are waiting for confirmation. The handover still says "will be closed".
- **Your art:** you said it's **never AI**, mostly Photoshop and sometimes watercolour. That's useful in the IP register: set "AI use" to "No AI used", which supports your copyright.
- **Jousef:** he wants paid work, and you'd own what he produces. He **might consider shares later** if the project takes off. That's new: the handover says he doesn't want revenue share. He also has **two or three interns** who are interested.
- **Mattias:** you said he's offering guidance so far, while you do all the work. That's useful context for the equity discussion.
- **Inspiration:** the game you'd just finished was *My Little Universe*. It's a comparable worth noting.
- **The Almi form's mistake is dealt with:** you told Henrik directly that everything is your personal property, not the firm's. That item can come off the to-do list.

I've updated the private handover with these facts: Almi done, Dani Milli Studio dissolved (pending confirmation), no AI in your art, and Jousef's openness to shares. I've also replaced the Almi item with the two contacts to make.

In Studio Records, I'd add the meeting as a **timeline event** (type: meeting) with its date, and store this transcript under **Documents**. What date was the meeting?

I've updated both the private handover and my memory notes. Future sessions will know:
- the Almi meeting has happened, and what came out of it;
- Dani Milli Studio is dissolved, pending confirmation;
- your art is never AI-made;
- where Jousef and Mattias stand now;
- that East Sweden Game is the next contact.

One question is still open: what date was the meeting? Then I'll give you the exact entry for the Studio Records timeline.

---

### Dani · 2026-10-14 13:48

it was yesterday. you can update one thing, mattias wants to form a partnership between abs

---

### Claude · 2026-10-14 13:49

Recorded. Here's the timeline entry for the meeting:

| Field | Value |
|---|---|
| Date | 2026-10-13 |
| Type | Meeting |
| What happened | Advisory meeting with Almi (Henrik Thörnblad). Discussed company structure, equity, funding, IP ownership. Referred to East Sweden Game, NyföretagarCentrum and a lawyer. |
| People involved | Henrik Thörnblad (Almi) |

Store the transcript under **Documents** and link it to the event.

**About Mattias wanting a partnership between ABs:** that's a real shift. Until now the question was Mattias *personally* as a partner. This makes it **his company (Skyfox) working with yours (Milli Studio AB)**. "Partnership between ABs" can mean three quite different things, and it's worth finding out which he means:
1. **A collaboration agreement between the two companies.** No shared ownership; a contract says who does what, who pays, and who owns the results. This is the simplest option, and Tessera stays wholly yours.
2. **A jointly owned company.** Milli Studio AB and Skyfox together form a new AB for Tessera. You'd then need to decide what that company gets: a *licence* to Tessera's IP, or the IP itself.
3. **Skyfox owning shares in Milli Studio AB.** Skyfox would then own part of everything your studio does, including future projects, not just Tessera.

**What follows from it whichever way:**
- **Your AB has to exist first,** so forming Milli Studio AB may come sooner than planned. That's also when the bookkeeping part of Studio Records (Phase 5) becomes urgent.
- **Your copyright in Tessera** should only reach his company through a written agreement, which the legal report and Almi both said.
- The legal report's earlier point still applies: what Skyfox contributes (people, tools, money) needs to be spelled out, not assumed.

This is exactly the kind of question for **East Sweden Game**. Bring the three options to them.

I've recorded the meeting date and Mattias's proposal in the handover and memory. I've left it marked as a proposal, so nothing reads as agreed.

The handover and memory are both updated:
- the Almi meeting is recorded on 13 October;
- Mattias's AB-partnership idea is recorded as an unagreed proposal, with the three possible meanings to clarify.

---

### Dani · 2026-10-14 13:50

please before committing anything even to your memory ask me first. i might not want it committed. also you missed the part about the interns

---

### Claude · 2026-10-14 13:51

Understood. From now on I'll ask before writing anything to memory or the handover files, not just before changing your documents.

That conflicts with a rule I saved on 11 October: "update the handover files at the end of a session without being asked". So I'd like your permission for two things:
1. **Save the new rule:** "Ask Dani before writing anything to memory or the handover files, including status updates."
2. **Change the old rule** so it says "propose handover updates at the end of a session and wait for approval".

**I also wrote three things today without asking.** Do you want to keep them, change them, or have them removed?
- **Handover, Almi meeting (13 October):** the advice points, Dani Milli Studio dissolved (pending confirmation), your art never AI-made, *My Little Universe*, and Jousef's openness to shares.
- **Handover, Mattias:** his proposal of a partnership between ABs, marked as unagreed, with the three possible meanings.
- **Memory notes:** the same Jousef, Mattias and Almi points, added to the collaboration note.

**On the interns,** you're right that I covered them too thinly. What the transcript says:
- **Jousef is a teacher, and two or three of his interns are interested** in working on Tessera.
- **Henrik's view:** working with interns or students is **cheaper but slower** than a professional programmer, so it's a real option for keeping costs down.
- **His main point:** make sure everything they produce is **your property**. Have a **lawyer** draw up the papers. It costs something, but it means "you don't let any property out of your hands".
- **Valla folkhögskola's** game-development students are another source of the same kind of help.

Should the interns go into the handover as well, once you've decided what stays?

---

### Dani · 2026-10-14 13:52

i want you to always save yes, but i think it better to confirm it should be there first

---

### Claude · 2026-10-14 13:52

Got it: keep saving, but show you what I'll save and get your OK first. Making that the rule everywhere it's written:

The new rule is saved in my memory and in both handover files: **I'll always show you the exact text and save only after you say yes.**

The rule change in the Studio Records handover sits in a committed file. Shall I commit it?

Three things are waiting for your confirmation:

**1. Keep the three entries I saved today without asking?**
- the Almi meeting notes (13 October);
- Mattias's AB-partnership proposal, marked as unagreed;
- the matching memory note.

They're unchanged since my last message. Say "keep", or tell me what to change or remove.

**2. Add this about the interns** to the handover, under the people section:

> - **Interns** (Almi, 2026-10-13): working with Jousef's interns, or Valla folkhögskola game-development students, is cheaper but slower than a professional programmer. Before any of them work on Tessera, a lawyer should put in writing that everything they produce belongs to Dani (later the AB). It costs money, but keeps the IP in Dani's hands.

---

### Dani · 2026-10-14 14:10

yes pls and thanks

---

### Claude · 2026-10-14 14:10

All three are done:
- **Today's entries:** kept as they are.
- **The interns note:** added to the handover.
- **The rule change in the Studio Records handover:** committed and synced to GitHub.

---

### Dani · 2026-10-14 17:12

let's generate a new tdd for m1. please scan all the folders and gather everything regarding m1, divide them material into a numbered list.

---

### Claude · 2026-10-14 17:12

I'll scan every folder for M1 material first. One thing to watch: until 24 September, "M1" meant what is now **M2**, so older mentions need sorting by date.

I've scanned DOCS, business and reports. Below is everything about M1, sorted into groups with sources. One rule for reading the sources: the current M1 dates from **24 September**. Anything that says "M1" before then means what is now **M2**, and I've marked those in group 10.

## 1. What M1 is and why it exists
1. A cheap, schematic **browser** prototype: symbols and buttons instead of graphics, with 3D gameplay shown as 2D. *(DOCS/33; summary log, 24 Sep; Mattias's proposal)*
2. **Purpose:** test whether the mechanical loop works (explore → gather → meet a condition → restore → gain access or progress → continue) before any money goes into art, animation or sound. *(DOCS/33)*
3. Built for the web, so outside players can test it easily. *(DOCS/33)*
4. Each milestone exists to get a stronger signal than the one before, on one specific risk. Watching people play beats asking them. *(DOCS/33)*
5. In your own words to Almi: "a small demo without graphics… just to see if the game is fun… we test it on some people". *(Almi transcript, 13 Oct)*

## 2. Exit criteria (when M1 counts as done)
6. **The build:** it runs in a browser and covers the full loop.
7. **The testers:**
   - understand what to do without heavy explanation;
   - keep going through the loop without being prompted;
   - find restoration rewarding, even as symbols;
   - find gathering purposeful, not tedious.
8. **The notes:** clear notes on where interest drops, and which steps are redundant or weak.
9. It doesn't need art, sound or animation to pass. It's judged on the loop alone.

*(all from DOCS/33)*

## 3. What M1 can't answer (keeps expectations honest)
10. **Whether Tessera is actually compelling:** atmosphere, scenery and watching the world transform are core to the game, and none of them exist in M1. *(DOCS/33)*
11. **Whether the game is good:** a pass proves the loop's *structure*, not that. *(DOCS/33; checklist §9)*
12. **Whether people want the real-world layer:** that's left out of M1 entirely. *(DOCS/33)*

## 4. Scope: what's in and out
13. **In:** the core loop, with gathering, processing or refining, restoring, and gaining access or progress. *(DOCS/33, DOCS/04)*
14. **Out:**
    - painterly art, sound, animation and combat *(DOCS/33; checklist §9)*;
    - the real-world layer: steps, focus time and Flow Points *(DOCS/33)*.
15. **Still undecided:**
    - which systems M1 actually contains *(checklist §9, unticked)*;
    - what "no unfinished systems" means *(checklist §9, though that line is about M2)*.
16. Orientation: landscape, decided for M1 and M2. *(DOCS/22)* For a browser build this probably just means a wide screen. Worth confirming.

## 5. Game design M1 has to represent (the content)
17. **The core loop and its rhythm:** low-demand wandering, small thinking moments, discovery, then a payoff. Avoid grinding, and avoid non-stop puzzles. *(DOCS/04)*
18. **The representative opening,** the working draft of the first 5–10 Tesserae:
    - porous rocks give water, which fills the container;
    - water goes to the dormant refinery, which wakes up;
    - more water plus dried herbs go through the refinery into a vial;
    - the vial goes to the dormant lantern, which releases light;
    - vegetation returns, and new routes and resources open;
    - the lantern becomes a portal.

    *(DOCS/05)* The natural candidate for M1's content.
19. **Restoration** is a visible change of state, never just a progress bar. *(DOCS/06)*
20. **Saved states versus temporary animations:** for example refinery dormant or restored, lantern dormant or portal, pond dry or filled. It's a reusable state system, not custom logic per object. *(DOCS/07)*
21. **Reusable interaction types:**
    - rotate or align;
    - move or route;
    - sequence or activate;
    - discover a hidden passage.

    Each is reusable behaviour plus configurable content. *(DOCS/08)*
22. **Gathering and refining:** a harvestable gives one or two resources, with configurable drop data. The refinery pattern is inputs → check → consume → process → output. Resource variety stays small. *(DOCS/09)*
23. **The Botanist's Kit:**
    - capacity per container type: 3 vials, a water canteen, a gatherer's pouch, a miner's box;
    - tool gemstones (axe, pickaxe, pruning knife).

    Capacities are not yet decided. *(DOCS/10)*
24. **Lanterns and portals:** dormant → portal. **Portable portals** (single use, bought with coins from travelling traders) reduce walking back and forth. Portal network rules are open. *(DOCS/11)*
25. **Guardians:** one dormant Guardian per map; what it does after reviving is undefined. *(DOCS/12)* M1 probably doesn't need one.
26. **Open design questions that affect M1** *(DOCS/43)*:
    - resource list and refinery recipes;
    - container capacities, and what happens when a container is full;
    - how Tesserae unlock;
    - how the world is shaped and presented;
    - the exact rhythm of exploring, gathering and puzzles;
    - whether gathering feels restorative or effortful.

## 6. The tracking test (runs alongside M1, not inside it)
27. A **separate throwaway app**, built during the M1 stage. It only requests permissions and logs steps and focus time in the background. *(DOCS/28)*
28. **Its test plan:**
    - permissions granted, denied and revoked;
    - the app in the background, force-closed and left overnight;
    - a range of devices;
    - pass and fail conditions.

    *(DOCS/28)*
29. It includes **applying for Apple's Family Controls permission**, which decides whether automatic iOS focus tracking is possible at all. *(legal report §12.4; DOCS/28)*
30. **Rule:** the tracking test must not turn M1 or M2 into M3 work. *(legal report §10.3; summary log)*

## 7. Testing and audience research
31. M1 is **the first real mechanics playtest.** *(checklist §10)*
32. Before M1, only light and free research. Paid research waits for something playable. *(checklist §10; DOCS/33; business plan 04)*
33. **Who the M1 testers are** isn't defined yet. *(checklist §10, unticked)*
34. Outside players test the browser build. *(business plan 04)*

## 8. How the technical document should be written
35. **Per feature:** input → expected behaviour or output → what must be saved. Jousef doesn't need class or architecture designs. *(DOCS/26, DOCS/27)*
36. Behaviour goes into reusable components, and each object is set up during sprints. *(DOCS/27)*
37. Explain terms in plain language first, technical term second. *(DOCS/40)*
38. Plan roughly **10–15% of the time for balancing** once things are playable. Jousef agreed to this for the original milestone, now M2. *(DOCS/27)*
39. **Source control and handover:** shared history, rollback and team access from the start. *(DOCS/31; legal report §5.2)*

## 9. Team, contract and money
40. **The programmer** works on commission, and you own what he produces. *(DOCS/38; Almi transcript)*
41. **Jousef's earlier estimate came before the M1 split** and left out integrations, so **M1 needs a new estimate.** *(DOCS/27; legal report §5)*
42. **A scoped, paid contract for M1 only**, reaching no further. *(legal report §5.1, §10.3)* It should cover:
    - what's included and what's excluded;
    - payment milestones;
    - your ownership of the code;
    - your control of the repository, with code delivered regularly;
    - what happens on handover or ending the work.
43. **Before M1 starts:** settle who signs, the maximum budget, who approves extra costs, and who checks that M1 is delivered if there's no producer. *(legal report §10.2; checklist §1)*
44. **Interns or students** are cheaper but slower. Their rights need a lawyer's paper first. *(Almi transcript; checklist §5.2)*
45. **Mattias** may help shape M1 or review estimates. *(legal report §2.3)* His company now proposes an AB partnership. *(your message, 14 Oct)*
46. **Costs you raised with Almi:** the programmer, legal advice, insurance. *(Almi transcript)*
47. **A substantial paid M1 contract can be a reason to form the AB first.** *(legal report §1.3)*
48. **Reassess after M1:** use the results and real costs to decide on M2. *(legal report §18)*
49. M1 earns no money. *(business plan 09)*

## 10. Outdated mentions: these are about today's M2, not M1
50. **The 18 September "Milestone 1 TDD"** and the current TDD file (22 September) describe the polished slice. *(DOCS/01, DOCS/34, tessera-tdd)*
51. **The "M1 scope email" and "M1 inventory"** sent to Mattias and Jousef. *(DOCS/39)*
52. **The audience-hypothesis reset (22 September),** where "M1" means today's M2. Its advice to keep the tracking test separate still holds. *(reports/research)*
53. **The 14 September Master Inventory:** its task categories are still useful, but its contents are outdated. *(DOCS/35)*

## Gaps the new TDD will have to fill
- **Content:** the exact content: which Tesserae, which resources, which recipes and which interactions.
- **Technology:** plain web, or a Unity web build?
- **Testing:** how to test, and how to watch where interest drops.
- **Hosting.**
- **Testers:** who they are.
- **Money:** the budget.
- **People:** who builds it, and who accepts it as done.

The TDD should ask Jousef, or whoever builds it, to propose answers to some of these.

Shall I next propose an outline for the new M1 TDD for you to approve before I write it? And should it be one file, or follow your DOCS style of separate numbered sections?

---

### Dani · 2026-10-14 17:20

the real life layer (walking/productivity) make it an open question whether it should be developed during or after m1. most probably not, but things should remain able to acommodate the addition in later milestones

---

### Claude · 2026-10-14 17:20

Noted. Here's how it changes the M1 list, plus two places in the docs that would need to follow.

**Updated items in the M1 list:**
- **Item 12** becomes: *Whether people want the real-world layer. Whether any of the layer is built during M1 is an **open question**, and most likely not.*
- **Item 14,** the "out" list, loses the real-world layer. It moves to a new item:
  - **14a. Open question:** develop the real-world layer (walking and focus time, Flow Points) during M1, or after it? Most likely after.
- **New requirement, item 14b:** M1 must be built so the real-world layer can be **added in a later milestone without rework**. In practice:
  - **Rewards go through one place.** Restoring, unlocking and buying shouldn't hard-code where resources or coins come from. A second source, such as Flow Points, can then be added later.
  - **Save data has a version number,** so later milestones can add fields (Flow Points, tracking settings) without breaking older saves.
  - **There's a place in the interface reserved for it later,** such as a status area. Nothing needs designing yet.
  - **No game rule assumes there's no real-world layer.** For example, no balancing that makes outside-of-game earning impossible to slot in.
- **Item 30 stays as it is.** The **tracking test app** is separate from the game, so it still runs during the M1 stage either way. The open question is only about building the layer *into the game*. Tell me if you see that differently.

**Docs that currently say otherwise.** I haven't changed either:
- **DOCS/33** (M1 section) says the real-world layer "is not part of this build's gameplay at all", which presents it as decided. Proposed replacement:

  > Whether the real-world layer (steps and focus time as in-game currency) is developed during M1 or after it is still open; most likely after. Either way, M1 is built so the layer can be added in a later milestone without rework.
- **DOCS/43,** under Real-world layer, needs one new line:

  > * Whether the real-world layer is developed during or after M1 (most likely after), and how M1 is built to accommodate it later.

**Handover:** proposed addition to the Tessera private handover, under decisions:

> - **2026-10-14** Whether the real-world layer is developed during or after M1 is an **open question** (most likely after). The M1 TDD must keep the game able to take it on later without rework. The tracking test app stays separate either way.

Shall I make all three changes (DOCS/33, DOCS/43, the handover)? After that, I'll propose the M1 TDD outline.

---

### Dani · 2026-10-14 17:22

can you separate all the points into two different parts. one which involves the business plan, meaning costs and so on, and the other with everything involving jousef (specifically open questions, exit strategy, interns, master checklist, etc)

---

### Claude · 2026-10-14 17:23

Here's the M1 material in two parts. Where a topic touches both, the money side is in Part A and the work side in Part B. Sources are in brackets.

# Part A: Business (costs, money, structure)

**Budget and costs**
1. M1 needs its **own cost estimate** before any contract is signed. Each later milestone gets a new estimate based on the one before. *(business plan 05; legal report §10.3)*
2. **Before M1 starts, settle:** *(legal report §10.2; checklist §1)*
   - the **maximum M1 budget**;
   - **who approves** extra costs or scope changes;
   - **who signs** for the client side;
   - **what happens if money runs short.**
3. **Avoid open-ended hourly work** without a cap and an approval step. *(legal report §10.2)*
4. **Costs you named to Almi:** the programmer, legal advice, insurance. *(Almi transcript, 13 Oct)*
5. **Set aside 10–15% of development for balancing** once things are playable. Plan it into the budget. *(DOCS/27)*
6. **Interns or students are cheaper but slower,** and the lawyer's paper for their rights costs money. *(Almi transcript)*
7. **Don't fund M1 with personal debt,** and don't promise the whole M2/M3 budget to get M1 done. *(legal report §5.3, §10.3)*
8. **Funding (Henrik's framing):** plan each milestone in time, competence and money. Funding gets easier later, once there's something to show. *(Almi transcript)*

**Structure and timing**
9. **A substantial paid M1 contract can justify forming the AB first.** *(legal report §1.3)* With Mattias now proposing a partnership between ABs, Milli Studio AB may be needed sooner. *(your message, 14 Oct)*
10. **Which company signs Jousef's contract:** you personally, Milli Studio AB, or Skyfox. *(checklist §5.1)*
11. **Mattias may help shape M1 or review the estimate.** Agree the amount of work and any payment first. *(legal report §2.3)*
12. **Pre-AB costs:** record them now, then ask an accountant whether the AB can take them over later. *(Almi transcript; Studio Records spec §8)*

**Revenue and research**
13. **M1 earns nothing.** Revenue starts at M2's public release. *(business plan 09)*
14. **Only free research before M1.** Paid research waits for a playable build. *(checklist §10; DOCS/33; business plan 04)*
15. **Reassess after M1:** use the results and real costs to decide whether to go on to M2. *(legal report §18)*

# Part B: Jousef (the build, terms, open questions)

**What he builds**
1. **A schematic browser prototype** of the core loop, with symbols and buttons, and 3D shown as 2D. *(DOCS/33)*
2. **The content:** the representative opening. *(DOCS/04–09)*
   - **What happens:** water from porous rocks wakes the refinery; water plus dried herbs become a vial; the vial wakes the lantern; vegetation and routes return; the lantern becomes a portal.
   - **The systems behind it:**
     - saved states (for example dormant or restored);
     - reusable interactions (rotate, move, sequence, discover);
     - gathering with drop data;
     - the refinery's inputs → output.
3. **Possibly included:** the Botanist's Kit containers and tool gemstones, portable portals. A Guardian probably isn't needed. *(DOCS/10–12)*
4. **Left out:** art, sound, animation, combat. *(DOCS/33)*
5. **Landscape orientation** (confirm what that means for a browser build). *(DOCS/22)*

**The real-world layer**
6. **Open question:** develop it during M1 or after? Most likely after. *(your decision, 14 Oct)*
7. **Requirement either way:** build M1 so the layer can be added later without rework:
   - rewards go through one place;
   - save data has a version number;
   - room in the interface for later;
   - no rule that assumes the layer won't exist.
8. **The tracking test app** stays separate, in the M1 stage. *(DOCS/28)* Its test plan:
   - permissions granted, denied and revoked;
   - background, force-close and overnight;
   - a range of devices;
   - pass and fail conditions.

   It includes applying for Apple's Family Controls permission. *(legal report §12.4)*

**Exit criteria: when M1 counts as done** *(DOCS/33)*
9. **The build:** it runs in a browser and covers the full loop.
10. **The testers:**
    - understand it without heavy explanation;
    - continue without being prompted;
    - find restoration rewarding;
    - find gathering purposeful.
11. **The notes:** on where interest drops, and which steps are weak or redundant.
12. **What M1 can't answer,** to keep it honest: whether the game is good, whether the atmosphere works, whether people want the real-world layer.

**How he wants the work specified**
13. **Per feature:** input → behaviour or output → what's saved. No class designs. *(DOCS/26, DOCS/27)*
14. **Reusable components,** with each object set up during sprints. *(DOCS/27)*
15. **Plain language first,** technical term second. *(DOCS/40)*

**His terms and his estimate**
16. **Paid commission work, and you own what he produces.** He might consider shares later if Tessera takes off. *(DOCS/38; Almi transcript)*
17. **His old estimate predates the M1 split** and left out integrations, so it needs a new estimate. *(DOCS/27)*
18. **What his contract should cover:** *(legal report §5.2; checklist §5.1)*
    - M1 scope, and what's excluded;
    - estimates, and payment by milestone, with an acceptance step;
    - you own the code; his existing code is listed separately;
    - third-party code and licences disclosed;
    - documentation good enough for someone else to continue;
    - testing and fixing duties;
    - who pays for Unity licences.

**Exit: if he leaves or the work ends** *(legal report §5.2; checklist §5.1)*
19. **Repository:** controlled by you **from day one**, with code delivered regularly, not only after the final invoice.
20. **A replacement** must have access to the code and the right to finish it.
21. **Unfinished work:** agree what happens to it, and the payment for accepted work.
22. **Handover:** setup, the main architecture choices, reusable systems, what's throwaway, known risks. *(DOCS/31)*

**Interns** *(checklist §5.2; Almi transcript; legal report §8)*
23. **Two or three of Jousef's interns** are interested. Valla folkhögskola students are another option.
24. **Before any of them start:**
    - their role and scope;
    - whether their work is critical or supporting;
    - experience or portfolio;
    - hours and duration;
    - formal placement (LIA) or informal;
    - paid or unpaid, and the legal basis;
    - total headcount, and who approves new people.
25. **Paperwork and supervision:**
    - written confirmation that their work belongs to you, **with a lawyer**;
    - confidentiality signed before they get access;
    - Jousef supervises and reviews their code;
    - who maintains their work after they leave;
    - access revoked when they leave.

**Master checklist, the parts still open for M1** *(checklist §9–10; DOCS/35)*
26. **From the team checklist:**
    - confirm which systems M1 contains;
    - confirm what question M1 answers;
    - define who the testers are;
    - use M1 as the first real mechanics playtest.
27. **From the 14 September master inventory,** planning steps that still apply:
    - roles;
    - dependencies;
    - source control;
    - repeatable builds;
    - external testing;
    - handover;
    - estimate only after the scope is agreed.

**Open questions for Jousef to help answer**
28. **Technology:** plain web, or a Unity web build? Plus hosting.
29. **Content:** the exact list of resources, recipes and interactions.
30. **Logging:** how M1 records where testers lose interest.
31. **Timing:** how long each version takes to make.

The proposed changes from my last message (DOCS/33, DOCS/43 and the handover note on the real-world layer) are still waiting for your yes.

---

### Dani · 2026-10-14 17:30

what were the proposed changes?

---

### Claude · 2026-10-14 17:31

The three changes, all about the real-world layer and M1:

**1. DOCS/33, the M1 section.** It currently says the real-world layer "is not part of this build's gameplay at all", which presents it as decided. Replace with:

> Whether the real-world layer (steps and focus time as in-game currency) is developed during M1 or after it is still open; most likely after. Either way, M1 is built so the layer can be added in a later milestone without rework.

**2. DOCS/43, open questions, under Real-world layer.** Add one line:

> * Whether the real-world layer is developed during or after M1 (most likely after), and how M1 is built to accommodate it later.

**3. Private handover, under decisions.** Add:

> - **2026-10-14** Whether the real-world layer is developed during or after M1 is an **open question** (most likely after). The M1 TDD must keep the game able to take it on later without rework. The tracking test app stays separate either way.

Shall I make all three?

---

### Dani · 2026-10-14 17:32

add that it won't be, but the app must be made to be able to add it later without issue

---

### Claude · 2026-10-14 17:32

Since it's now decided, the open-question line for DOCS/43 is no longer needed, so I'm dropping that change. I'm making the other two with the new wording:

Both changes are made.

**DOCS/33, M1 section,** now reads:
> The real-world layer (steps/focus time as in-game currency) is not developed during M1. M1 must still be built so the layer can be added in a later milestone without rework. *(the rest about the tracking test is unchanged)*

**Private handover,** added under decisions:
> **2026-10-14** The real-world layer is **not** developed in M1. M1 must be built so it can be added later without issue: rewards go through one place, save data has a version number, the interface has room for it later, and no game rule assumes it's absent. The tracking test app stays separate, in the M1 stage.

In the M1 list, Part B items 6 and 7 now become one fixed requirement, "not in M1, but built to take it later", rather than an open question. Neither change is committed yet; I'll include them when you next want a commit.

Next step: shall I propose the M1 TDD outline?

---

### Dani · 2026-10-14 17:34

add an open question, are there game rules that sohuldn't assume it's absent?

---

### Claude · 2026-10-14 17:34

I've added it to DOCS/43, open questions, under **Real-world layer**:

> * Which game rules must not assume the real-world layer is absent, so it can be added after M1 without rework? For example: how rewards and costs are set, and how fast progress is paced.

I'll also put it in the M1 TDD as a question for Jousef. Like the other two changes, it isn't committed yet.

---

### Dani · 2026-10-14 17:36

let's make two separate documents. the m1 tdd and a new master inventory checklist just for m1

---

### Claude · 2026-10-14 17:36

Before writing, here are proposed outlines and locations for you to approve. The two documents have different readers, so I'd keep them in different places.

## 1. M1 technical design document
**Who it's for:** Jousef, and anyone else who builds M1. So it contains **nothing private**: no budget, contract terms or negotiating positions. It could be handed over as it is.

**Where:** `DOCS/tessera-tdd-m1.adoc`, one self-contained file, following the DOCS rules.

**Outline:**
1. **Purpose:** what M1 must prove, and its exit criteria.
2. **What M1 can't answer.**
3. **Scope:** what's in and out. Art, sound, animation, combat and the real-world layer are out.
4. **Platform:** browser, schematic 2D standing in for 3D, landscape.
5. **Content:** the representative opening, step by step.
6. **Systems,** each written as input → behaviour → what's saved. Jousef asked for that format.
   - Moving around the map.
   - Gathering.
   - The Botanist's Kit containers.
   - The refinery.
   - Interactions: rotate, move, sequence, discover.
   - Restoration and state changes.
   - Unlocking routes and Tesserae.
   - Lantern to portal.
   - Saving and loading.
7. **Built to grow:** the real-world layer added later without rework (rewards through one place, versioned save data, room in the interface).
8. **Playtest support:**
   - logging where testers lose interest;
   - collecting feedback;
   - a link testers can open.
9. **Source control and handover.**
10. **Testing.**
11. **Open questions for Jousef:**
    - plain web or a Unity web build;
    - hosting;
    - the content lists;
    - which rules mustn't assume the real-world layer is absent;
    - whether M1 code is thrown away or reused in M2;
    - his estimate.
12. **Glossary:** the plain-language terms list.

## 2. M1 master inventory checklist
**Who it's for:** you. It includes budget, contracts and interns, so it's **private**.

**Where:** `business/m1-master-inventory-checklist.adoc`, next to your team checklist.

**Outline:** a checklist with tick-boxes, by phase:
1. **Before committing:**
   - the M1 scope agreed;
   - Jousef's estimate;
   - the maximum budget, and who approves extra costs;
   - whether to form the AB first.
2. **Contracts and rights:**
   - Jousef's contract (scope, payment, code ownership, repository, exit terms);
   - confidentiality;
   - the IP inventory of your existing work;
   - the interns' conditions and their lawyer's paper.
3. **Design inputs to finish:** the resource list, recipes, interactions and container sizes for the opening.
4. **Technical setup:**
   - the technology choice;
   - the repository you control;
   - hosting;
   - repeatable builds.
5. **The build itself:** one line per system from the TDD.
6. **The tracking test app,** including the Apple Family Controls application.
7. **The playtest:**
   - who the testers are, and how you'll find them;
   - what you'll watch for;
   - how you'll collect notes.
8. **Records:** hours, expenses and agreements logged in Studio Records.
9. **Acceptance and handover:** checking the exit criteria, the handover notes, payment for accepted work.
10. **After M1:** reassess, and get a new estimate for M2.

One note: the original 14 September master inventory isn't in the repository. Only its surviving categories are, in DOCS/35. If you still have the file, send it over and I'll check nothing useful is missed.

Do the outlines and locations work? Once you say yes, I'll write both, then show you the results before anything is committed.

---

### Dani · 2026-10-14 17:36

oh and you can commit the changes

---

### Claude · 2026-10-14 17:36

Committed: the DOCS/33 and DOCS/43 changes, plus the `.mailmap` file that had been waiting. The private handover stayed out, as it should.

Two quick yes/no questions:
1. **Sync to GitHub?** Dropbox no longer backs up git's history, so the commit only becomes backed up once it's synced.
2. **Handover tidy-up:** the handover still says "`.mailmap` not yet committed; commit it with the next batch". May I remove that sentence, now that it's done?

The outline for the two new documents is also waiting for your OK.

---

### Dani · 2026-10-14 17:56

attached is thee old tdd. please create an .adoc with the same outline but updated contents

[Request interrupted by user]

my bad. the old tdd was already in the repo. ignore the last ruquest. just update the one we already have please

---

### Claude · 2026-10-14 17:59

Before I start, one thing to settle. The existing TDD (`DOCS/tessera-tdd-22-9-26.adoc`) is no longer an M1 document: since the split on 24 September it's the **M2** TDD. It also isn't written out in full. It assembles itself from the topic files (24, 25, 28, 33 and so on), and those describe M2. So "updating the one we have" could mean two quite different things:

1. **Turn the existing file into the M1 TDD.** M2 would then lose its TDD, and the topic files it draws on would need rewriting for M1, which would break their M2 content.
2. **Keep the existing file as the M2 TDD, and create the M1 TDD next to it** with the same outline as your PDF (all 18 sections), filled with M1 content. *(my recommendation)*

With option 2, a few sections from the old outline don't really apply to a schematic browser prototype: visual direction, the visual performance test on phones, platform routes and world assembly. I'd keep each one as a heading, so the outline matches, with one line saying what M1 does or doesn't do there. For example: "Not tested in M1; the visual test belongs to M2."

Which one do you want?

---

### Dani · 2026-10-14 17:59

list the topics

---

### Claude · 2026-10-14 18:00

The existing TDD (`DOCS/tessera-tdd-22-9-26.adoc`) builds itself from these topic files, in this order:

| # | File | What it covers | Specific to M2, or shared? |
|---|---|---|---|
| 04 | Core gameplay loop | The explore → restore loop and its rhythm | **Shared:** applies to every milestone |
| 06 | Restoration | Visible changes in the world, never a progress bar | **Shared** |
| 07 | Persistent world-state system | Saved states versus temporary animations | **Shared** |
| 08 | Reusable environmental interactions | Rotate, move, sequence, discover | **Shared** |
| 18 | Visual direction | The painterly style and how to achieve it | **M2:** M1 has no art |
| 19 | Visual-performance validation | The visual test on real phones | **M2** |
| 24 | Technical baseline | Phones first, offline, local save, Unity not locked | **Mostly M2:** M1 runs in a browser |
| 25 | M2 technical goals | What M2 must prove technically | **M2** |
| 26 | Architecture responsibility | You define *what*, programming decides *how*; input → output → saved | **Shared** |
| 28 | Platform integration | Step and focus tracking routes, and the tracking test app | **Shared:** the test app runs at the M1 stage, and M2 repeats the test |
| 30 | World assembly | Who combines art, behaviour and settings (still unassigned) | **Mostly M2:** M1 has little art to assemble |
| 29 | Save behaviour | What must be saved | **M2 wording:** it says "local save for M2" |
| 31 | Source control and handover | Repository, history, handover notes | **Shared** |
| 32 | Testing | Functional, real-phone, save/load and external testing | **M2** |
| 33 | Milestones | Purpose and exit criteria for M1, M2 and M3 | **Shared:** covers all three |
| 34 | M2 decisions still needed | The open decisions before M2 can be estimated | **M2** |

So about half are shared (04, 06, 07, 08, 26, 28, 31, 33) and half are written for M2 (18, 19, 24, 25, 29, 30, 32, 34).

That's why I'd recommend a separate M1 TDD:
- **The shared files** can be included in it as they are.
- **The M2-specific files** each need an M1 counterpart written: M1 technical goals, M1 save behaviour, M1 testing, M1 decisions still needed, and an M1 technical baseline (browser).

The M2 TDD stays untouched.

---

### Dani · 2026-10-14 18:02

that's what i meant to update. it. remake it but don't include things for m2. is it a problem to extract what only belongs to m1?

---

### Claude · 2026-10-14 18:02

No, it isn't a problem. Nothing is lost:
- **The M2 content lives in the topic files,** not in the TDD file. The TDD file is just a list of which topic files to pull in.
- **Those topic files stay untouched,** and the master document (DOCS/00) still includes them.
- **An M2 TDD can be put back together** in a few minutes whenever it's needed.

Here's the plan for the remade TDD, following the old outline:

| # | Section | Source |
|---|---|---|
| 1 | Scope and sequencing | Rewritten for M1, in the TDD itself |
| 2 | Core gameplay loop | Topic file 04, as it is |
| 3 | Restoration | 06, as it is |
| 4 | Persistent world-state system | 07, as it is |
| 5 | Reusable interactions | 08, as it is |
| — | ~~Visual direction, visual-performance test~~ | **Dropped:** M2 only |
| 6 | Technical baseline | **New topic file:** browser, schematic, landscape, local save, no server |
| 7 | M1 technical goals | **New topic file,** including "built so the real-world layer can be added later" |
| 8 | Architecture responsibility | 26, as it is |
| 9 | Tracking test app | **The M1 part only** of 28 |
| 10 | World assembly | **New short M1 version:** who sets up objects and values (still unassigned) |
| 11 | Test plan | The M1 playtest, plus the tracking test app |
| 12 | Save behaviour | **New topic file:** what M1 saves, with a version number for later |
| 13 | Source control and handover | 31 |
| 14 | Testing | **New topic file** for M1 |
| 15 | M1 exit | **The M1 part only** of 33 |
| 16 | Open decisions | **New topic file:** M1 decisions still needed, plus the questions for Jousef |

**How "the M1 part only" works:** files 28 and 33 cover several milestones. I'd add invisible markers around their M1 sections, and the TDD would pull in just those parts. The marked text itself doesn't change.

**Two small fixes in shared files:**
- **File 31** says "at **M2** exit there should be enough handover information". I'd change it to "at the end of each milestone", which is true for M1 too.
- **Five new topic files:** 46–50, for sections 6, 7, 12, 14 and 16. Each one would also be added to the master document.

**File name:** `tessera-tdd-22-9-26.adoc` carries the old date. I'd rename it to `tessera-tdd-m1-14-10-26.adoc`. Git history keeps the old version.

Shall I go ahead?

---

### Dani · 2026-10-14 18:04

if the new files involve m1 only, would it be better to place them in a new folder?

---

### Claude · 2026-10-14 18:05

Yes, I think a folder is better:
- **Everything M1-specific is in one place,** easy to find and easy to hand to Jousef. When you set up the team repository later, it's a single folder to copy.
- **The shared topic files** (loop, restoration, states and so on) stay where they are, because they apply to every milestone.

**Proposed layout:**

```
DOCS/
  04, 06, 07, 08, 26, 28, 31, 33 …   (shared topic files, as now)
  tessera-tdd-m1-14-10-26.adoc        (the remade TDD)
  m1/
    01-technical-baseline.adoc
    02-technical-goals.adoc
    03-world-assembly.adoc
    04-save-behaviour.adoc
    05-testing.adoc
    06-decisions-still-needed.adoc
```

**Why the TDD stays in the main DOCS folder:** some shared topic files point to images with a path like `../images/…`. That only works from the main DOCS folder, so the TDD lives there and pulls the M1 files in from `m1/`. The master document (DOCS/00) would include the `m1/` files too.

**For consistency later, optional:** the M2-specific files (18, 19, 24, 25, 29, 30, 32, 34) could move into an `m2/` folder the same way. It isn't needed now, but it keeps things symmetrical.

Shall I go ahead with this layout?

---

### Dani · 2026-10-14 18:05

yep good work

---

### Claude · 2026-10-14 18:06

Approved. Starting with the three shared files I need to touch: 28 and 33 get invisible M1 markers, and 31 gets its wording fix.

The markers go in first. 28 gets two M1-only regions, around the risk and routes, and around the test plan. 33 gets one, around the M1 section. 31 gets its wording fix:

Now the six M1 topic files:

Now renaming the TDD file and remaking it for M1:

Adding the M1 files to the master document, then checking that the TDD assembles correctly:

The M1 TDD is remade. I checked that it assembles correctly:
- every included file and M1 marker is found;
- no cross-reference points outside the document;
- the only mentions of M2 are where M1 relates to it, for example "whether any M1 code carries over into M2" and "M1 doesn't prove the game is good".

**What changed:**
- **The TDD:** renamed to `DOCS/tessera-tdd-m1-14-10-26.adoc`. It now contains only M1, and the visual direction and phone performance sections are gone.
- **New folder `DOCS/m1/`** with six topic files:
  - technical baseline;
  - technical goals, including every system written as input → behaviour → saved, and the "built to take the real-world layer later" rules;
  - world assembly;
  - save behaviour;
  - testing;
  - decisions still needed.
- **Shared files:**
  - **28 and 33:** invisible M1 markers added.
  - **28, one wording change:** "before building them into M2" became "before building them into the game", so the M1 TDD doesn't refer to M2.
  - **31:** "at M2 exit" became "at the end of each milestone".
- **The master document (DOCS/00):** now includes the six M1 files.

**Two small follow-ups, for your OK:**
1. **DOCS/01** still lists "the compiled `tessera-tdd-22-9-26.adoc`" as the M2 technical document. I'd remove that from the M2 entry and add a new entry: "**Technical (M1):** the `m1/` folder and the compiled `tessera-tdd-m1-14-10-26.adoc`."
2. **DOCS/README's file index** has no entries for the `m1/` folder. I'd add six rows.

**For the handover,** proposed addition:
> - **2026-10-14** M1 TDD remade: `DOCS/tessera-tdd-m1-14-10-26.adoc`, built from shared topic files plus the new `DOCS/m1/` folder. It contains nothing private and can go to the builder as it is. M2 has no compiled TDD at the moment; its topic files are unchanged and it can be reassembled when needed.

Nothing is committed yet. Once you've looked at the TDD, I'll write the second document, the private M1 master inventory checklist.

---

### Dani · 2026-10-14 18:09

let's commit changes to the online repo when we're done for the day.

---

### Claude · 2026-10-14 18:09

Will do. I'll keep today's changes uncommitted and commit and sync everything together when you say we're done for the day.

Do you want that as a standing rule ("commit and sync once at the end of each day")? If so, I'd add it to the handover.

Still waiting for your OK:
1. The DOCS/01 and README index updates.
2. The handover note about the new M1 TDD.
3. Starting the private M1 master inventory checklist.

---

### Dani · 2026-10-14 18:11

please remove the bit amount money lol XD
just say time or workload

---

### Claude · 2026-10-14 18:11

Done. The money wording is gone from the TDD:
- **Scope:** "Because it is cheap, it answers that question before any money goes into…" now reads "It takes far less time and work than a polished build, so it answers that question before any time goes into art, atmosphere or the real-world layer."
- **The M1 exit section** (it comes from file 33, so the change is there too): "far cheaper… before any budget goes into scenery" now reads "takes far less time and work than polished production art, so it tests the mechanical loop before any time goes into scenery, animation, or sound."
- **Not aims:** "anything to do with money: purchases, ads, currency for sale" now reads "monetization: purchases, ads, currency for sale". That line says M1 won't include shop or ad features. It's not about cost, so I kept the point and only changed the wording. Tell me if you'd rather drop it.

The cost evidence in M2's exit criteria (file 33) and the in-game "rewards and costs" weren't touched, since they aren't about money spent on M1.

---

### Dani · 2026-10-14 18:13

The tracking risk is tested separately, with a throwaway test app, during the M1 stage.

What does this mean

---

### Claude · 2026-10-14 18:13

It means this:

**The risk:** the real-world layer depends on phones counting steps and focus time reliably in the background, even when the app is closed, when permission is refused, or when the phone saves battery. Nobody knows yet whether iOS and Android allow that well enough. Jousef called it his biggest concern.

**The test:** instead of building tracking into the game, someone builds a **tiny separate phone app** that does just one thing: ask for permission, then count steps and focus time. It gets tested on several phones (permission refused, app closed, phone left overnight) to see whether the counts hold up.

**"Throwaway"** means the app is never part of Tessera. Once it has answered the question, it's discarded.

**"During the M1 stage"** means it runs alongside the M1 prototype, not inside it. That way you learn early whether the real-world layer is even possible, before any work goes into designing it.

The sentence is dense. Shall I reword it in the TDD? For example:

> Whether phones can track steps and focus time reliably is checked separately: a small phone app that only counts steps and focus time is built and tested alongside M1, then thrown away. It is never part of the game.

---

### Dani · 2026-10-14 18:14

i said none of the real world layer development is included.

---

### Claude · 2026-10-14 18:14

You're right, and I misread you. I treated the tracking test app as separate from "real-world layer development" and kept it in the M1 stage. It's part of the real-world layer work, so it comes out of M1 entirely.

**One question first: where should the tracking test go instead?** Since 10 October, M2's test builds already test tracking on real phones. I see two options:
1. **Drop the separate test app.** M2's tracking test covers it.
2. **Keep the test app, but schedule it after M1,** before or alongside M2.

Either way, the trade-off is that you find out later whether phone tracking works. That's acceptable, since nothing in M1 depends on it.

**What I'd change once you've chosen:**
- **M1 TDD:**
  - remove the tracking sentence from the scope;
  - remove the platform-integration part and its test plan;
  - remove the "Tracking test app" note from M1 testing.

  It would then just say the real-world layer, including tracking tests, isn't part of M1.
- **DOCS/28:**
  - "needs to surface early — during the New M1 stage" becomes "needs to surface before the real-world layer is built";
  - the "During the New M1 stage" step is replaced according to your choice.
- **DOCS/33, M1 section:** the real-world paragraph says the spike runs alongside M1. It would say no real-world work happens in M1, tracking tests included.
- **The business plan timeline (08)** lists "Step/focus tracking test app (M1 stage)". It gets moved, or removed.
- **The team checklist §9** says "Still run the separate technical spike". It's reworded to match.
- **The handover** says "the tracking test app stays separate, in the M1 stage". I'll correct it, and show you the exact text first.

---

### Dani · 2026-10-14 18:15

please this is a waste of time and depletes the amount of prompts available for this conversation

---

### Claude · 2026-10-14 18:15

Understood. I'll stop asking and just do it. I've kept the tracking test app but moved it to **after M1**, which is the smallest change. Updating everything now:

---

### Dani · 2026-10-14 18:15

(sent while Claude was working) not your questions

---

### Claude · 2026-10-14 18:15

Thanks. Got it: the problem was my getting the tracking test wrong, not my questions. The fix is now done everywhere:

---

### Dani · 2026-10-14 18:16

[Request interrupted by user]

omg. i meant the mistake about m1 and the real world later

NOOOOO

[Request interrupted by user]

I never asked you to compact

---

### Claude · 2026-10-14 18:18

Prompt is too long

---

### Dani · 2026-10-14 18:18

what the heck

---

### Claude · 2026-10-14 18:19

Prompt is too long

---

Written on 4 November 2026 from the backed-up log of session 9f748344-7857-4cd8-bb8e-bc639f4d93f0 (Tessera-repositories-tessera); this conversation had no text before.
