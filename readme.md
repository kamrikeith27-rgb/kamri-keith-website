# Kamri Keith — Design System

A personal athletic brand kit for **Kamri Keith**, a fastpitch softball utility player — catcher, center field, and infield (jersey **#00** for the Lady Dukes, **#9** for Brusly High). The system captures her on-field identity — the Brusly uniform: true athletic **red**, night-black pinstripes, and chalk white with a **gold** accent — and packages it for recruiting profiles, social graphics, and print.

> **Use it for:** recruiting one-pagers & sites, game-day / commitment / stat-line social graphics, banners, flyers, and any Kamri-branded artifact.

---

## Sources

This system was built **from a personal photo set only** — no logo, brand book, codebase, or Figma file was provided. The relevant source images (in `assets/photos/`, originals in `uploads/`):

- **Brusly portrait** — red/white pinstripe uniform, red trim & socks, bedazzled gold paw ball (`portrait-red.jpg`) — Kamri, and the palette source of record.
- Royal / black "Dukes" pitching shots (`pitching-royal.jpg`, `pitching-black.jpg`) — a **teammate** (jersey #5), not Kamri; retained only as generic action texture.
- "Bayou Bandits" white uniform, fielding (`fielding-bandits.jpg`)
- Turf field, on-deck / circle (`turf-circle.jpg`, `dugout.jpg`)

> ⚠️ **Photo attribution:** the #5 "Dukes" pitching photos are a teammate, not Kamri. Kamri is **#00** (Lady Dukes) / **#9** (Brusly). Use the verified Kamri photos (`portrait-red`, `hero-kamri`, `kamri-catcher*`, `kamri-brusly-*`, `cutout-*`) for anything Kamri-branded.

Teams represented: **Brusly High** (school — red/black/white, palette source) and travel-ball **Lady Dukes — Louisiana 16U**. Position: **utility** (catcher / center field / infield; also slapper and pinch runner). Region: Louisiana. The brand palette follows the Brusly identity.

The remaining uploads (a Vietnam-veteran emblem, a firefighters-association letter, a food-truck menu, phone screenshots) are unrelated camera-roll images and were intentionally excluded from the brand.

> ⚠️ **No logo exists.** The brand mark is a **type wordmark** ("KAMRI KEITH" in the display face) plus a **jersey-number device** (the "00" roundel / "K00" monogram) built in CSS type. Nothing was invented or drawn as a logo. If a real mark is created later, drop it in `assets/` and update `NumberMark` + the kits.

> ⚠️ **Fonts are chosen, not supplied.** Anton + Barlow (Google Fonts) were selected to match the athletic look. If official brand fonts are adopted, replace `tokens/fonts.css`.

---

## Content fundamentals

**Voice:** first-person and confident, but grounded — a recruit who lets the work speak. Short, punchy, active. Think dugout confidence, not hype-man.

- **Casing:** display headlines and labels are **ALL CAPS** (jersey/scoreboard energy). Body copy is sentence case.
- **Person:** "I" for bio/statements ("I compete every play."), "you" only when addressing coaches directly ("Let's talk — I'd love to compete for you.").
- **Numbers are loud.** Stats, jersey #, class year, and batting average are hero content — set big, condensed, tabular. A stat without a label is incomplete: always pair `.407` with `AVG`.
- **Tone words:** relentless, coachable, competitor, clutch, work. Avoid clichés like "God-given talent" and over-punctuation.
- **Emoji:** not used in the brand. (Camera-roll screenshots contained emoji; the brand does not.)
- **Examples:**
  - Eyebrow: `UTILITY · CLASS OF 2027 · #00`
  - Headline: `COMPETE. EVERY. PLAY.`
  - Stat: `.407` / `AVG` — `1.000` / `FPCT`
  - CTA: `WATCH THE TAPE` · `GET IN TOUCH`

---

## Visual foundations

**Color.** True athletic red (`--red-600 #CE1B2D`) is the primary; night black (`--ink-900 #0F1216`) is the structural partner (pinstripes, dark sections, hard borders, offset shadows); chalk white and a warm field off-white (`--field #F7F5F3`) are the grounds. **Gold** (`--gold-500 #E0A82E`, from the paw ball) is the single energy accent — highlights, focus, underlines, one word per headline — never a background wash. **Clay** (`#D2582E`, infield) and **spirit pink** (`#FF5FA2`) are tertiary pops used rarely. A **black-pinstripe-on-white** motif is a signature texture. Max **1–2 background colors per artifact** (white/field OR ink OR red); never gradient-wash the whole thing.

**Typography.** Three faces, tightly cast:
- **Anton** — all-caps impact display for headlines, jersey numbers, poster type. Tight line-height (`0.92`), near-zero tracking.
- **Barlow Semi Condensed** — uppercase eyebrows/labels and big **stat numerals** (tabular feel), tracked out `0.14em` for labels.
- **Barlow** — body and UI, 400–700.

**Layout.** Strong left-aligned or centered blocks; generous negative space; big type against calm grounds. 8px spacing base. Content maxes ~1080–1320px. Diagonal / cut edges are acceptable as a nod to speed but used sparingly.

**Backgrounds.** Solid color first (white, field, ink, or red). Real **photography** is the imagery — action shots, full-bleed, often duotoned toward red/black with a gold kiss, or darkened with an ink→transparent **protection gradient** so white type stays legible. No stock illustration, no hand-drawn SVG scenes, no purple gradients, no texture noise.

**Borders & cards.** Cards are white on field, radius `--radius-lg (16px)`, `--border-hair` (1px `--gray-200`) with `--shadow-md`. The **signature card** treatment is the **varsity hard shadow** (`--shadow-hard`, a 6px solid-black offset) with a 2px ink border — used for badges, stat callouts, and hero cards to feel like a printed patch/sticker. Borders are either hairline-subtle or bold 2px ink; nothing in between.

**Corners.** Buttons and tags are **pills** (`--radius-pill`); cards are 16px; media 10–16px; the number device is a hard-cornered or circular plate.

**Shadows.** Two systems: soft ambient (`--shadow-sm/md/lg`) for normal elevation, and the **hard offset** (`--shadow-hard`) for the varsity/sticker look. Gold **glow** ring for focus.

**Motion.** Quick and punchy — `120–180ms`, `--ease-out`. Hover lifts (translateY -2px) or shifts a hard-shadow; press shrinks slightly (`scale(.97)`). Minimal bounce, no long fades.

**Hover / press states.**
- Buttons: hover darkens fill (red→`--red-800`) or fills a ghost; hard-shadow buttons slide 2px into their shadow. Press: `scale(.97)`.
- Cards/links: hover lift + shadow deepen; gold underline grows on text links.

**Transparency & blur.** Sparingly — ink→transparent protection gradients over photos, and occasional frosted (`backdrop-filter: blur`) chips over imagery. Not a glassmorphism system.

**Imagery vibe.** Warm daylight field photography; can be pushed to duotone (red + black) with a gold accent for brand cohesion. Grain is fine at low amounts; keep it crisp.

---

## Iconography

- **No proprietary icon set or icon font exists** in the sources. The brand leans on **type, numerals, and photography** rather than decorative icons.
- **Chosen system: [Lucide](https://lucide.dev)** (CDN) — clean 2px stroke, rounded caps, which matches the modern-athletic tone. Used minimally for UI affordances (arrows, play, mail, calendar, map-pin, chevrons) in the kits. **This is a substitution flagged for review** — swap if a preferred set is chosen.
- **Softball glyphs** (ball, bat, diamond) should come from **photography or a real licensed mark**, not hand-drawn SVG. The one intentional brand *device* is the **jersey-number plate** (`#00` / `K00`), which is typographic, not an icon.
- **Emoji / unicode as icons:** not used.

Load Lucide in a kit: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`.

---

## Index / manifest

**Root**
- `styles.css` — entry point (imports all tokens/fonts).
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills-compatible usage guide.
- `thumbnail.html` — homepage tile.

**Tokens** (`tokens/`) — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.

**Guidelines** (`guidelines/`) — foundation specimen cards (Colors, Type, Spacing, Brand groups).

**Components** (`components/`)
- `core/` — `Button`, `Badge`, `Tag`, `Card`
- `data/` — `StatCard`, `StatLine`
- `brand/` — `NumberMark` (jersey-number / monogram device)

**UI kits** (`ui_kits/`)
- `recruiting_site/` — recruiting profile website (hero, stats, about, schedule, contact).
- `social_kit/` — square social graphics (game day, commitment, stat highlight).

**Assets** (`assets/photos/`) — action photography for backgrounds and hero art.
