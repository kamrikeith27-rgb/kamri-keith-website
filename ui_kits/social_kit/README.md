# UI Kit — Social Graphics

Square (1080×1080) social templates for Kamri Keith. `index.html` is a switcher that previews each graphic scaled to fit; the underlying components render at full 1080² for export.

## Templates
- **GameDay** (`GameDay.jsx`) — action photo, protection gradient, giant "GAME DAY" + matchup details (VS / TIME / FIELD).
- **StatHighlight** (`StatHighlight.jsx`) — split layout: photo panel + a huge single stat (e.g. "14 STRIKEOUTS") with context line.
- **Spotlight** (`Spotlight.jsx`) — recruiting card: royal ground, faded action photo, wordmark, badges, and a 3-up `StatCard` row.

## Notes
Uses DS components (`Badge`, `StatCard`, `NumberMark`) and photos from `assets/photos/`. All copy/stats are placeholders. To export a graphic at full size, render its component alone at 1080×1080 and screenshot.
