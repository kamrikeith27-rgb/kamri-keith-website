# UI Kit — Recruiting Site

A single-scroll recruiting profile for Kamri Keith (RHP, #5, Class of 2027), built as a **faithful recreation of the GoodLayers "BigSlam" sport-club layout** (https://max-themes.net/demos/bigslam/bigslam/index.html) rethemed in the Kamri Keith brand: athletic red + night-black + chalk white, gold accent, Oswald condensed-uppercase headings, and a Grand Hotel brush-script accent. Only colors, fonts, and content changed — the section structure, rhythm, and component styling mirror BigSlam.

## Section order (top → bottom, matches BigSlam homepage)
1. **TopBar** (`TopBar.jsx`) — dark utility bar: upcoming-game ticker + email/phone + social letters.
2. **Nav** (`Nav.jsx`) — dark header, red bottom rule, number mark + wordmark + horizontal nav + Recruit Me.
3. **Hero** (`Hero.jsx`) — full-bleed portrait, script line ("Meet the ace!"), huge Oswald name, slider dots.
4. **ScoreBand** (`ScoreBand.jsx`) — light featured-match band: crest / boxed score / crest + Game Info.
5. **Promos** (`Promos.jsx`) — 3 promo boxes (photo / red / dark) with script eyebrow + CTA.
6. **Schedule** (`Schedule.jsx`) — dark "Upcoming Games": red featured match + matchup rows.
7. **Results** (`Results.jsx`) — light "Latest Results" cards with boxed scores.
8. **TopStories** (`TopStories.jsx`) — featured post + headline list.
9. **Standings** (`Standings.jsx`) — "District Standings" table (id=`stats`), Brusly row highlighted.
10. **Videos** (`Videos.jsx`) — dark "Featured Videos" grid with red play buttons.
11. **Roster** (`Roster.jsx`) — BigSlam roster-style tall cards → "The Arsenal" (pitch types).
12. **About** (`About.jsx`) — "Special Interview"-style dark split: photo + bio + `StatCard`s.
13. **CTA** (`CTA.jsx`) — red "Tickets"-style banner → recruiting CTA.
14. **Sponsors** (`Sponsors.jsx`) — recognitions strip (BigSlam sponsor band).
15. **Gallery** (`Gallery.jsx`) — "From Instagram" full-bleed 4-col square grid with hover overlay.
16. **Footer** (`Footer.jsx`) — dark multi-column footer + copyright bar.
17. **Contact** (`Contact.jsx`) — "Recruit Me" modal form with success state.
- **Bits** (`Bits.jsx`) — shared `KK` (font/color/width constants), `SectionHead` (script eyebrow + Oswald title), `GLButton` (flat BigSlam button), `Crest` (monogram team badge), all on `window`.

## Interactions
- "Recruit Me" (nav / promo / CTA / footer) opens the modal → submit shows confirmation.
- Nav links jump to `#home`, `#schedule`, `#stats`, `#highlights`, `#roster`, `#about`, `#contact`.
- Roster + Instagram tiles zoom on hover; nav links redden on hover; buttons darken.

## Composition
`index.html` loads React + Babel + the DS bundle, then `Bits.jsx`, each section script (each registers to `window`), then `App.jsx`. Sections reuse DS components `NumberMark` and `StatCard`; buttons/crests/heads are the local BigSlam-styled `GLButton`/`Crest`/`SectionHead`.

## Notes
- **No real team crests exist** — opponents are monogram `Crest` badges (initials), never invented logos.
- **Fonts**: Oswald (headings/scores) + Grand Hotel (script) added to match BigSlam's type; Barlow for body. Design choices, not supplied brand fonts — flagged in `tokens/fonts.css`.
- **Blue removed**: the two blue-uniform action shots are baked into red-duotone versions (`pitching-royal-duo.jpg`, `pitching-black-duo.jpg`) so no rival color appears.
- Games, stats, standings, and dates are **placeholder** — replace with real numbers.
