# SAHEL — Portfolio Blueprint
### Creative Director + Copywriter + UX Strategist — Full Brief

---

## THE CORE IDEA

**The Concept:** "The Engineer Behind the Desk"

Most IT support portfolios look like résumés with colours. Yours won't.
The concept is this: *every system you've touched runs smoother because of you — and the portfolio itself proves that.* It should feel like opening a terminal that happens to be beautiful. A recruiter at Accenture, TCS, Infosys, or Microsoft India should land on it and immediately think: *this person thinks like an engineer, not a technician.*

**The One Line They'll Remember:**
> "I don't just fix problems. I script them out of existence."

**Emotional Arc of the Visit:**
Arrive → Impressed by polish → Curious about the person → Convinced by the skills → Compelled to reach out.

---

## VISUAL IDENTITY

### Aesthetic Direction
**"Dark Terminal Editorial"** — This is not a developer portfolio, not a designer portfolio. It's a systems engineer's portfolio. It should feel like a high-end tech publication printed on black paper. Think: *Wired magazine met a Bloomberg terminal.*

### Colour Palette
- **Background:** Near-black `#080C0C` — not pure black, has a faint teal undertone. Feels deep, not flat.
- **Primary Text:** Off-white `#E8EDE9` — warm, not harsh white. Like paper in dim light.
- **Accent 1 — Electric Teal:** `#00E5CC` — the "system online" colour. Used for highlights, active states, key words.
- **Accent 2 — Amber/Warning:** `#F0A500` — used sparingly for emphasis, like a status light.
- **Surface:** `#0F1518` — card and section backgrounds, slightly lighter than base.
- **Muted:** `#3A4A4E` — borders, secondary text, dividers.

**Why this palette:** Teal reads as "infrastructure" and "networks." It's the colour of server status lights, terminal prompts, and network diagrams. It differentiates immediately from the typical purple/blue developer portfolios.

### Typography
- **Display Font:** `Clash Display` or `Cabinet Grotesk` — geometric, confident, slightly unusual. Not Bebas, not Inter. For section titles and the hero name.
- **Body Font:** `General Sans` — clean, readable, modern without being generic.
- **Mono Font:** `Geist Mono` — for code snippets, skill tags, terminal elements, and labels. This is crucial — it signals your world is systems and scripts.

### Textures & Atmosphere
- Subtle **scanline texture** across the entire page — 2% opacity horizontal lines, like a CRT monitor. Barely visible but adds depth.
- **Noise grain** overlay at 4% opacity — makes the dark background feel material, not digital void.
- **Faint grid lines** in the hero section only — like graph paper behind the content.
- **Glowing teal orb** in the hero — a large, blurred radial gradient behind the main heading, like a light source beneath frosted glass. Very subtle.

---

## LAYOUT PHILOSOPHY

**Single page, vertical scroll.** Seven distinct sections. Each section takes at minimum the full viewport height. The page should feel like flipping through a very high-end digital magazine — each scroll reveals something new and intentional.

**Grid System:** 12-column grid. Most content uses a 10-column container with 1-column gutters on each side. Some elements deliberately break the grid (the section numbers, the marquee, the hero name) to create tension.

**Spacing:** Extremely generous. Recruiters scan fast — white (or in this case, dark) space is what makes each element land with weight.

---

## SECTION-BY-SECTION BREAKDOWN

---

### SECTION 0 — LOADING SCREEN
**What it is:** A 1.5-second entrance that plays once on first load.

**What happens:**
A terminal prompt appears letter by letter in the centre of the screen:

```
> initialising sahel.exe...
> loading systems [████████████] 100%
> ready.
```

Then the entire loading screen **slides upward** and disappears, revealing the hero beneath. The slide-up is a smooth, fast cubic-bezier with slight spring. The hero content fades in underneath.

**Why:** It tells the recruiter immediately what world they're entering. It's 1.5 seconds — not annoying, but deeply memorable. Sets the "systems engineer" tone before they read a single word.

---

### SECTION 1 — HERO
**Placement:** Full viewport. Content anchored to bottom-left, with breathing room at top.

**Layout:**
- Top-right corner: A tiny monospaced status indicator — `● AVAILABLE FOR ROLES` blinking slowly in teal. Like a server status light.
- Centre-left: The main heading stack
- Bottom: A horizontal rule + three statistics

**Content — The Heading Stack (top to bottom):**

Line 1 (small mono label, teal):
`IT SUPPORT ENGINEER → DESKTOP ENGINEER`

Line 2 (massive display font, 3 lines, off-white):
```
SYSTEMS
THAT
WORK.
```
Each word is on its own line, staggered in size. "SYSTEMS" is the largest. "WORK." has a teal full stop — the only colour in the heading.

Line 3 (body text, muted, 16px, below the heading):
*"Based in Mumbai. Currently keeping enterprise infrastructure running — and automating everything I possibly can."*

Line 4 (two CTA buttons):
— `[ VIEW MY WORK ]` — teal outline button, mono font
— `[ DOWNLOAD CV ]` — solid teal fill button, mono font

**Bottom statistics bar** (full width, separated by a thin rule):
```
4+ YEARS         500+ ENDPOINTS         30+ SCRIPTS         99.9% UPTIME
IN IT SUPPORT    MANAGED                DEPLOYED             MAINTAINED
```
Each stat has the number in large display font and the label in tiny mono beneath.

**Background:**
- The faint grid lines
- A large teal radial glow centred behind "SYSTEMS" — very blurred, like 800px wide, 15% opacity
- The noise/scanline textures

**Animations on load:**
1. The status indicator `● AVAILABLE FOR ROLES` fades in first (after the loader exits)
2. "IT SUPPORT ENGINEER → DESKTOP ENGINEER" label slides up from below, 0.4s delay
3. "SYSTEMS" slides up from beneath its own baseline (overflow hidden, text moves up into view), 0.6s
4. "THAT" same treatment, 0.75s
5. "WORK." same treatment, 0.9s
6. The body paragraph fades in + moves up 20px, 1.1s
7. The two CTA buttons fade in staggered, 1.3s and 1.45s
8. The bottom stats bar slides up and fades in as one unit, 1.5s

**Cursor:** Custom cursor throughout the whole site. A small teal dot with a larger ring that lags behind it. When hovering over buttons or links, the dot scales up and the ring expands. When hovering over text, the cursor inverts briefly.

---

### SECTION 2 — IDENTITY / MARQUEE BREAK
**Placement:** Full-width strip between hero and about. Not a full section — just a breathing moment.

**What it is:** Two horizontal marquee bars scrolling in opposite directions.

**Top bar scrolls left:**
```
POWERSHELL  ·  PYTHON  ·  NODE.JS  ·  INTUNE  ·  SCCM  ·  ACTIVE DIRECTORY  ·  AZURE AD  ·  AUTOPILOT  ·
```

**Bottom bar scrolls right:**
```
DESKTOP ENGINEERING  ·  ENDPOINT MANAGEMENT  ·  GPO  ·  WSUS  ·  SCRIPTING  ·  AUTOMATION  ·  M365  ·
```

**Design:** All caps, Geist Mono, muted colour `#3A4A4E`. The dots between items are in teal. The bars have a very thin teal top and bottom border. Background is the surface colour `#0F1518`.

**Animation:** Constant, smooth, CSS-driven infinite scroll. No pause on hover — it's ambient, not interactive.

---

### SECTION 3 — ABOUT
**Placement:** Full viewport. Two-column layout, 5/7 split (left narrower, right wider).

**Left column:**
- Oversized section number: `03` in display font, absolutely positioned, massive, `#0F1518` colour (barely visible — like a watermark). About 20vw tall.
- Below it: a small mono label `// ABOUT`
- Then a medium heading in display font:
  ```
  The IT Guy
  Who Scripts
  Everything.
  ```
  "Everything." is in teal.

**Right column (the actual content):**

**Paragraph 1 — The Hook:**
*"My job title says IT Support. My job description says 'fix whatever's broken.' But the version of me that shows up to work has a different agenda — I'm here to make sure it never breaks the same way twice."*

**Paragraph 2 — The Depth:**
*"Over the past few years I've worked across the full endpoint stack: imaging machines with WDS and MDT, managing hundreds of devices through Intune and SCCM, writing PowerShell scripts that handle what used to take a technician an hour, and building Python tools that audit, report, and alert so the team always knows what's happening across the fleet."*

**Paragraph 3 — The Ambition:**
*"I'm at a point in my career where the support desk has taught me everything I need to know about what goes wrong — and now I want to apply that knowledge at the engineering level. Designing deployments. Owning the MDM strategy. Automating the entire lifecycle of a device from zero-touch provisioning to retirement."*

**Below the paragraphs — a simple key-value list:**
```
CURRENTLY          IT Support Engineer
TARGETING          Desktop / Systems Engineer
STACK              PowerShell · Python · Node.js
MDM                Intune · SCCM · WDS · MDT
IDENTITY           Active Directory · Azure AD · Entra ID
LOCATION           Mumbai, Maharashtra
AVAILABILITY       Open — Actively Looking
```
Each row is separated by a 1px teal line at 20% opacity. Labels in mono muted. Values in body font, off-white.

**Animation:**
- Section number fades in as you approach the section (ScrollTrigger, scrub)
- Left column slides in from the left, right column slides in from the right — simultaneously, 0.8s
- The key-value rows animate in one by one from top to bottom, 0.1s stagger each

---

### SECTION 4 — SKILLS
**Placement:** Full viewport. Dark surface background `#0F1518` — slight contrast from the base.

**Layout:** Three-column grid at the top, full-width skill bars beneath.

**Top — Three Skill Pillars:**

Each pillar has:
- A teal category icon (simple line icon, not emoji)
- A category heading in display font
- Pills of skills in mono font

**Pillar 1: AUTOMATE**
Skills: PowerShell, Python, Node.js, Batch Scripting, Task Scheduler, Regex, REST APIs, Graph API

**Pillar 2: DEPLOY**
Skills: Microsoft Intune, SCCM/MECM, Windows Autopilot, WDS/MDT, WSUS, Chocolatey, Winget, MSI/MSIX Packaging

**Pillar 3: SECURE & MANAGE**
Skills: Active Directory, Azure AD/Entra ID, Group Policy (GPO), Conditional Access, MFA, Defender for Endpoint, M365 Admin, Exchange Online

**Skill Pill Design:** Each pill is a rectangle (not rounded) with a 1px muted border. Mono font, small. On hover, the border turns teal and the background gets a 5% teal fill. The transition is instant (0ms) — snappy, like a keypress.

**Below the pillars — Proficiency Bars:**

Heading: `DEPTH OF KNOWLEDGE` in tiny mono, teal, with a line extending right

Six horizontal bars:
```
PowerShell                          ████████████████████  92%
Microsoft Intune / SCCM             ██████████████████    88%
Active Directory / Entra ID         █████████████████     85%
Python                              ███████████████       78%
Windows Server / GPO                ████████████████      82%
Node.js / Tooling                   █████████████         70%
```

**Bar design:** The track is 1px tall, muted colour. The fill is teal. The percentage is in mono, amber colour, right-aligned. The bars are NOT rounded — sharp ends. The fill animates from 0% to target width when the section enters viewport, with a 1.2s ease-out cubic-bezier per bar, each bar staggered by 0.1s.

**Animation:** The three pillars scale up from 0.9 and fade in on scroll. Pills inside each pillar animate in with a stagger. The bars animate once in viewport.

---

### SECTION 5 — PROJECTS / WORK
**Placement:** Full viewport. Back to the base dark background.

**Layout:** Full-width project list — NOT cards, NOT a grid. A numbered list of rows that feel like a command log.

**Section heading:**
Left: `04` watermark number
Centre-left: `WHAT I'VE BUILT` in display font, large
Right of heading: a small teal horizontal line fills the space

**Each project row:**

```
[ 01 ]   Automated Onboarding Pipeline         PowerShell · AD · Intune · Graph API     ↗
[ 02 ]   SCCM App Packaging Framework          SCCM · PowerShell · MSI/MSIX              ↗
[ 03 ]   Zero-Touch Autopilot Deployment       Autopilot · Intune · Azure AD             ↗
[ 04 ]   IT Helpdesk Automation Bot            Node.js · Teams Webhook · ServiceNow      ↗
[ 05 ]   Python Asset Inventory Tool           Python · WMI · CIM · Excel Export         ↗
[ 06 ]   Defender Hardening Script             PowerShell · M365 Defender · CIS          ↗
```

**Row design:**
- Each row is separated by a 1px line at 8% opacity
- The `[01]` number is in teal mono
- The project title is in medium display font, off-white
- The tags are in tiny mono, muted colour, comma-separated — NOT pills. Just plain text.
- The `↗` arrow is muted until hover

**Hover behaviour (the magic moment):**
When you hover a project row, three things happen simultaneously in 0.3s:
1. A teal background fills in from the **left edge** — `scaleX` from 0 to 1, `transform-origin: left`
2. The project title colour shifts to near-black (it's now on teal)
3. The `↗` arrow becomes near-black and translates `+4px, -4px`
4. The row pads left by `24px`

This gives a sense of "selecting a process" in a terminal. It's fast, tactile, and unlike anything on a typical IT portfolio.

**Each project expands** (optional click interaction):
Clicking a row expands a drawer below it (accordion style) showing:
- What the problem was (1 sentence)
- What you built (2 sentences)
- The outcome/impact (1 sentence)

The drawer slides open with a smooth height animation.

---

### SECTION 6 — TOOLS / DAILY STACK
**Placement:** Half viewport. Surface background. More compact — a palette cleanser between Projects and Contact.

**Layout:** Masonry-ish icon grid — 4 columns, uneven heights, tightly packed.

**Section heading:** `DAILY STACK` in display font left, `// TOOLS I LIVE IN` in small mono right.

**Each tool cell:**
A rectangle with:
- Tool logo / icon (SVG, teal monochrome)
- Tool name in mono
- Category tag in tiny muted mono beneath

```
[ PowerShell 7 ]  [ Python 3 ]    [ VS Code ]     [ Node.js ]
Automation        Scripting        Editor           Backend/CLI

[ Intune ]        [ SCCM ]        [ Azure AD ]    [ Autopilot ]
MDM               Deployment       Identity         Zero-Touch

[ Defender ]      [ ServiceNow ]  [ Git ]          [ Windows Server ]
Security          ITSM             Version Control  Infrastructure
```

**Cell design:** No rounded corners. A 1px muted border. On hover: border turns teal, a very faint teal glow appears (box-shadow), and the icon colour saturates to full teal. Transition: 0.2s ease.

**Animation:** The entire grid fades in as one unit when entering viewport, then each cell animates in with a stagger from top-left to bottom-right (0.05s per cell).

---

### SECTION 7 — CONTACT
**Placement:** Full viewport. The one section that breaks the dark theme — background switches to the teal accent colour `#00E5CC`. This is the single most unexpected moment in the scroll.

**Layout:** Centred, vertical stack.

**Top mono label:** `// LET'S TALK` — in dark ink colour, very small

**Giant heading:**
```
READY TO
HIRE AN
ENGINEER?
```
In massive display font, dark ink, full-width. "ENGINEER?" has a blinking cursor after it — `|` — that blinks every 0.8s. This is the typographic centrepiece.

**Below heading (body text, dark ink):**
*"I'm actively looking for Desktop Engineer, Systems Engineer, or Senior IT roles. If you need someone who can own your endpoint management strategy and automate the boring parts — I'm your person."*

**CTA row:**
```
[ ✉  SEND AN EMAIL ]    [ ↓  DOWNLOAD CV ]    [ in  LINKEDIN ]    [ ◆  GITHUB ]
```
All dark ink, rectangle buttons with dark ink borders. On hover: white fill, dark text. Fast transition.

**Bottom-left:** `Mumbai, Maharashtra · India`
**Bottom-right:** `© 2026 Sahel`

**Animation on entering this section:**
- The background colour transition from black to teal is scroll-driven — it doesn't snap, it fades in as you approach the section bottom
- The heading letters scale up from 0.8 and fade in, staggered word by word
- The buttons slide up from below the fold

---

## NAVIGATION

**Design:** Fixed top. Full width. Very thin — just one line.

**Left:** `S//` in display font — the logo mark. Clicking scrolls to top.

**Centre:** Nothing — empty space creates elegance.

**Right:** Five nav links in tiny mono, spaced generously:
`ABOUT   SKILLS   WORK   TOOLS   CONTACT`

**Behaviour:**
- On load, the nav is transparent (no background)
- After scrolling 80px, a very subtle `backdrop-filter: blur(12px)` + `background: rgba(8,12,12,0.85)` fades in over 0.3s
- The currently active section's nav link gets a teal underline — a 1px line that slides in from the left
- On mobile: the nav collapses to just the logo + a hamburger icon (three horizontal lines in teal)

---

## MICRO-INTERACTIONS & ANIMATION SYSTEM

### The Philosophy
*Purposeful, not decorative.* Every animation has a reason. Fast animations (under 0.3s) for feedback. Slower animations (0.8–1.2s) for reveals. Nothing loops unless it's ambient.

### Scroll Animation System
All scroll-triggered animations use the same pattern:
- **Start:** `opacity: 0` + one directional offset (Y: 40px for most, X: -60px for left items, X: 60px for right items)
- **End:** `opacity: 1` + offset back to 0
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — fast start, smooth settle. Feels physical.
- **Trigger:** When the element's top hits 80% down from the viewport top
- **Duration:** 0.8s base, 1.0s for headings, 0.5s for pills and small items

### Stagger Rules
- Section headings: no stagger, full entrance
- Lists of items: 0.08s stagger
- Skill bars: 0.12s stagger (so they cascade satisfyingly)
- Stat numbers in hero: count up from 0 to target over 1.5s when in view

### Hover States
- **Links:** Teal underline slides in from left (`scaleX: 0 → 1`, `transform-origin: left`)
- **Buttons:** Background fills from left (same technique)
- **Project rows:** Full teal background sweep from left (as described above)
- **Tool cards:** Border teal + box-shadow glow
- **Skill pills:** Border + faint background tint

### Ambient Animations
- The teal orb in the hero slowly pulses (scale 1 → 1.08 → 1, 6s loop, ease-in-out)
- The `● AVAILABLE FOR ROLES` dot blinks (opacity 1 → 0.2 → 1, 1.5s loop)
- The marquee scrolls at a constant pace
- The custom cursor ring has a 0.1s lag behind the dot

---

## MOBILE EXPERIENCE

**Breakpoints:**
- Desktop: 1280px+
- Tablet: 768px–1279px
- Mobile: below 768px

**Mobile changes:**
- Hero: Heading stacks vertically, font size scales to `clamp(3rem, 14vw, 5rem)`
- About: Single column
- Skills: Pillars stack vertically
- Project rows: Tags go below the title on a new line, arrow disappears
- Tools grid: 2 columns
- Contact: Heading scales down, buttons stack vertically
- Navigation: Logo + hamburger only, side drawer on open

---

## WHAT MAKES THIS UNFORGETTABLE

1. **The loading screen** — a terminal boot sequence. No other IT portfolio does this.
2. **The contact section colour flip** — going from black to full teal is a visual shock that's delightful, not jarring.
3. **The project row hover sweep** — feels like selecting a process in a real terminal.
4. **The stat counter in the hero** — numbers counting up on load make you stop and watch.
5. **The custom cursor** — shows polish that no recruiter expects from an IT candidate.
6. **The copy** — it sounds like a confident engineer, not a job applicant begging for a chance.

---

## CONTENT TONE GUIDE

**Do say:**
- "I script problems out of existence"
- "I own the endpoint lifecycle"
- "Zero-touch provisioning at scale"
- "Automation-first approach"
- "I think like an engineer, I work like a support pro"

**Don't say:**
- "Passionate about technology"
- "Team player with good communication skills"
- "Eager to learn"
- "Responsible for tickets"

**Recruiter reading time:** 45 seconds average. The hero, the stats, the skill bars, and the project list are the four things they'll actually read. Everything else is there to create an impression of depth and credibility.

---

*Blueprint complete. Ready to build.*