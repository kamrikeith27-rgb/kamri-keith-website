# Kamri Keith Athlete Website — Implementation Complete

## Project Setup
- **Repository**: https://github.com/clintsanchez/kamri-keith-website
- **Local path**: `/Users/clintsanchez/pCloud Drive/Documents/BlakSheep Creative/Clients/Kamri Keith/`
- **Status**: Fully implemented and deployed

## What's Included

### Design System (Complete)
- **Brand Identity**: True red (#CE1B2D), night black (#0F1216), chalk white, gold accent (#E0A82E)
- **Typography**: Anton (display), Barlow Semi Condensed (labels/stats), Barlow (body)
- **Components**: Button, Badge, Card, StatCard, NumberMark (jersey device), Tag
- **Tokens**: Colors, typography scales, spacing (8px base), effects (shadows, radius, motion)
- **Guidelines**: Color palettes, type specimens, spacing scales, brand imagery rules

### Recruiting Site (Live)
A complete, ready-to-deploy athlete recruiting one-pager based on the BigSlam sports template:

**17 Sections:**
1. **TopBar** — Game ticker + contact info + social links
2. **Nav** — Header with number mark, wordmark, navigation, "Recruit Me" CTA
3. **Hero** — Full-bleed portrait with script intro and athlete name
4. **ScoreBand** — Featured match with score and game info
5. **Promos** — 3 promotional boxes (photo, red, dark) with CTAs
6. **Schedule** — Upcoming games with featured match
7. **Results** — Latest match results cards
8. **TopStories** — Featured post + headline list
9. **Standings** — District standings table (editable placeholders)
10. **Videos** — Featured videos grid
11. **Roster** — "The Arsenal" section (pitch types)
12. **About** — Special interview split layout + bio + stat cards
13. **CTA** — Recruiting call-to-action banner
14. **Sponsors** — Recognitions / sponsors strip
15. **Gallery** — Instagram-style full-bleed photo grid
16. **Footer** — Multi-column footer + links
17. **Contact Modal** — "Recruit Me" form with success state

### Assets Included
- **Photography**: 8 professional action photos (red uniform, black uniform, Dukes travel, field action)
- **Promotional Materials**: 52 images from Kim Spriggs (mother) — uniforms, stats, posters
- **Reference Design**: BigSlam template screenshot for style reference

### Social Graphics Kit
- **GameDay** graphics
- **Stat Highlight** cards
- **Spotlight** graphics
- Reusable template structure for social sharing

## How to Use

### View Live
```
http://localhost:8888/ui_kits/recruiting_site/
```

### Edit Content
All placeholder content is in the JSX files:
- **TopBar.jsx** — Edit game info, contact details, social links
- **Hero.jsx** — Customize intro text
- **ScoreBand.jsx** — Update featured game score
- **Schedule.jsx**, **Results.jsx** — Edit games/scores/dates
- **Standings.jsx** — Update district standings table
- **About.jsx** — Edit bio and stat cards
- **Roster.jsx** — Edit pitch type descriptions
- **Gallery.jsx** — Update Instagram photo grid
- **Contact.jsx** — Edit form labels/fields

### Customize Design
Design tokens and colors live in `tokens/`:
- `colors.css` — Primary red, black, white, gold
- `typography.css` — Font sizes, weights, line heights
- `spacing.css` — Margin/padding scales
- `effects.css` — Shadows, radius, motion timing

### Deployment
The site is fully static HTML + React. Ready to deploy to:
- **Netlify** (drag & drop the project folder)
- **Vercel** (connect the GitHub repo)
- **Any static host** (GitHub Pages, AWS S3, etc.)

## Key Design Decisions

✅ **Athletic red** (#CE1B2D) as primary color — matches Brusly uniform  
✅ **Night black + gold** accent — varsity/sticker look, high contrast  
✅ **Photography-first** — real action shots, no stock illustration  
✅ **Type wordmark** — "KAMRI KEITH" in Anton + #5 jersey device (CSS, not logo)  
✅ **BigSlam structure** — proven sports site layout, familiar to coaches  
✅ **Placeholder data** — all numbers/dates are editable, not hardcoded  

## Next Steps

1. **Fill in real data:**
   - Game schedule and results
   - Stats and performance metrics
   - District standings
   - Real social media photos for gallery

2. **Add real photos:**
   - Replace placeholder portraits with action shots from kim-spriggs-messages/
   - Update gallery with Instagram/action shots

3. **Deploy:**
   - Push to Netlify/Vercel or host on custom domain
   - Set up form submission backend for "Recruit Me" modal
   - Add Google Analytics

4. **Iterate:**
   - Test on mobile (fully responsive)
   - Gather feedback from coaches/recruiters
   - Adjust content and photos as season progresses

## Files & Structure

```
Kamri Keith/
├── styles.css                    # Global entry point
├── readme.md                     # Design system overview
├── _ds_bundle.js                 # Compiled components
├── tokens/                       # Design tokens (colors, type, spacing)
├── components/                   # Reusable UI components
│   ├── core/                     # Button, Badge, Card, Tag
│   ├── data/                     # StatCard, StatLine
│   └── brand/                    # NumberMark (jersey device)
├── guidelines/                   # Brand specimen cards
├── assets/photos/                # Action photography (8 images)
├── ui_kits/
│   ├── recruiting_site/          # Main athlete profile website
│   │   ├── index.html            # Entry point
│   │   ├── App.jsx               # Component tree
│   │   └── *.jsx                 # 16 section components
│   └── social_kit/               # Social graphics templates
├── kim-spriggs-messages/         # Promotional materials (52 images)
├── .git/                         # Git repository
└── README.md                     # This file
```

## Git Commits

```
8db635d Add Kamri Keith design system and recruiting site
fc4dc98 Initial commit: Kamri Keith athlete website project
```

Push changes anytime:
```bash
git add .
git commit -m "Update [section name]"
git push origin main
```

---

**Design System Author**: BlakSheep Creative  
**Athlete**: Kamri Keith, RHP #5, Class of 2027  
**School**: Brusly High School Lady Panthers  
**Travel Team**: Louisiana Lady Dukes  
**Region**: Louisiana, USA

Site built: July 15, 2026
