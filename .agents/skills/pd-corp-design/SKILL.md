---
name: pd-corp-design
description: Corporate design guidelines for the freelance SAP developer & architect brand ("PD"). Use when designing, reviewing, or building any branded artifact — the website, documents, slide decks, PDFs, letters, diagrams, or new UI. Covers the visual language (colors, typography, spacing, shapes, motion, tone) AND its web/React implementation. Load when asked to "match the brand", "apply the corporate design", style a presentation/document, or keep visuals on-brand.
---

# PD Corporate Design

The brand blends **SAP Fiori** (clean, functional, blue accent, generous spacing)
with **Porsche Design** typography and restraint (premium, quiet, precise).
Guiding feeling: **clean, airy, high-end — whitespace before density, clear reading hierarchy.**

The skill has two independent parts:

1. **Design language** — medium-agnostic rules. Apply these to documents, slides, PDFs, print, diagrams, or any tool.
2. **Technical implementation** — how the language is realized in the Vite/React/UI5 website (design tokens, CSS patterns, components).

---

## PART 1 — Design language (technology-independent)

Use this section to bring the brand to Word, PowerPoint, Keynote, Google Slides, InDesign, Figma, PDFs, or anything else.

### 1.1 Color palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary ink (text) | Ink | `#0E1418` | Headlines, body text, dark surfaces |
| Soft ink | Ink Soft | `#4A5157` | Secondary text, captions, intros, labels |
| Background | White | `#FFFFFF` | Default page/canvas background |
| Subtle background | Subtle Grey | `#F4F4F4` | Alternating sections, quiet panels |
| Hero wash | Hero Grey | `#F7F9FB` | Very light top-of-page gradient start |
| Dark surface | Dark | `#0E1418` (footer `#0A0F12`) | Inverted CTA / footer blocks |
| Hairline | Line | `#E3E3E3` | Borders, dividers, table rules |
| **Primary accent** | Fiori Blue | `#0A6ED1` | Links, primary actions, highlights, active state |
| Accent hover/dark | Blue Dark | `#085CAF` | Hover/pressed state of blue |
| Secondary accent | Teal | `#0A8A7D` | The "mediating / connecting" role; sparingly |
| Tertiary accent | Porsche Red | `#B12B28` | Rare emphasis only; use very sparingly |

**Rules**
- Blue is *the* accent. Teal and red are supporting — never let red/teal dominate a layout.
- On dark surfaces: white text at full opacity for headings; body text at ~72% white (`rgba(255,255,255,0.72)`); a lighter blue `#6DB3F2` for eyebrows/links (better contrast than `#0A6ED1` on dark).
- Accent tints use the accent at low alpha for fills: blue fill ≈ 8–10% opacity, blue border ≈ 20% opacity. Same recipe for teal/red chips and icon tiles.
- Keep large areas neutral (white / subtle grey). Color appears in small, intentional doses.

### 1.2 Typography

- **Typeface:** Porsche Next → fallback SAP "72" → system sans (`-apple-system, Segoe UI, Roboto, Helvetica, Arial`). For documents where Porsche Next isn't licensed/available, use **"72"**, else Arial/Helvetica/Segoe UI. Never introduce a different display font.
- **Weights:** 400 (regular body), 600 (semibold — labels, links, emphasis), 700 (bold — headings).
- **Headings:** bold (700), tight leading (line-height ≈ 1.1), slightly negative letter-spacing (`-0.01em`).
- **Body:** regular, line-height ≈ 1.55 for comfortable reading.
- **Measure:** cap text width around **60–62 characters** per line for readability.
- **Eyebrow / kicker** (small label above a heading): 600 weight, UPPERCASE, letter-spacing ≈ `0.14em`, in Fiori Blue, small (~0.8rem / ~13px).
- **Meta labels / badges:** 600 weight, UPPERCASE, letter-spacing `0.08–0.10em`, in Ink Soft or accent.
- **Type scale (fluid on web, fixed guidance for print/slides):**
  - Display / hero: ~30–46px
  - Section heading: ~29–45px
  - Card title: ~24px
  - Lead paragraph: ~18–22px, weight 600
  - Body: ~16px
  - Small / caption: ~13–15px

### 1.3 Layout & spacing

- **Content width:** max ~1180px, centered, with comfortable side gutters.
- **Generous vertical rhythm:** large section spacing (web uses `clamp(4rem, 9vw, 8rem)`; for slides/docs translate to large, consistent top/bottom margins). Whitespace is a feature.
- **Alternating section backgrounds** to separate content: White ↔ Subtle Grey (`#F4F4F4`), with occasional Dark blocks for CTAs.
- **Grids:** 3-column card grids on wide layouts; collapse to 1 column when narrow. Consistent gaps (~1.4–1.6rem / ~22–26px).
- Align to a clear left edge; center only short hero/CTA blocks.

### 1.4 Shapes, surfaces & elevation

- **Cards:** white surface, 1px hairline border (`#E3E3E3`), rounded corners, soft shadow, inner padding ~1.8–2.4rem.
- **Corner radius:** large `18px` for cards/panels, medium `12px` for smaller tiles, `999px` (pill) for chips/tags, `6px` for tiny marks (logo badge).
- **Shadows (soft, cool-grey, never harsh black):**
  - Resting: `0 8px 30px rgba(14,20,24,0.08)`
  - Hover/raised: `0 16px 44px rgba(14,20,24,0.14)`
- **Accent top-bar:** cards can carry a 4px colored strip along the top edge (blue / teal / red) to categorize them.
- **Icon tiles:** ~54px rounded square, tinted accent background (10% alpha), accent-colored glyph.
- **Chips / tags:** pill shape, small semibold text, tinted accent background + subtle accent border; active chip = solid accent fill with white text.

### 1.5 Iconography

- Use **SAP Fiori icons** (line style, functional, consistent stroke). Keep icons simple and monochrome in an accent or ink color — no multicolor illustrations.
- Icons support meaning; they never become decoration for its own sake.

### 1.6 Imagery

- **Portrait:** circular crop, 3px white ring, soft card shadow. Photography is clean and professional.
- Prefer restrained, real imagery over stock clichés or heavy graphics.
- Background flourishes: extremely subtle radial gradient washes (blue ~12% alpha, red ~6% alpha) — barely perceptible, never busy.

### 1.7 Motion (where applicable)

- Transitions are **subtle and quick:** 0.18s–0.22s ease.
- Signature hover: card lifts ~4px (`translateY(-4px)`) and shadow deepens.
- Respect reduced-motion preferences; motion is an enhancement, never required to understand content.

### 1.8 Tone of voice (content)

- **German:** professional, precise, self-assured — **not arrogant**. Partnerschaftlich, "auf Augenhöhe" (as equals).
- Short, active sentences. Technical terms (ABAP, RAP, CAP, BTP, Fiori) spelled correctly and consistently.
- **English:** idiomatic and equally concise — convey meaning, don't translate word-for-word.
- Avoid marketing fluff. Lead with substance and concrete capability.
- Bilingual by default (DE/EN) — keep both in sync.

### 1.9 Quick recipe for a slide / document

1. White or `#F4F4F4` background, ~1180px-equivalent content column, wide margins.
2. Blue UPPERCASE eyebrow → bold near-black heading → soft-grey lead (≤62 chars/line).
3. Content in white cards: hairline border, 18px radius, soft shadow, optional 4px blue top strip.
4. One accent color (blue) carries links/emphasis; teal/red only for rare distinction.
5. Fiori line icons in tinted accent tiles. Pills for tags.
6. Close with a dark (`#0E1418`) block: white heading, 72%-white body, blue/`#6DB3F2` accents for the call to action.

---

## PART 2 — Technical implementation (website)

Stack: **Vite 5 + React 18 (function components/hooks) + `@ui5/webcomponents-react` + plain per-component CSS**. No CSS framework, no CSS-in-JS. i18n via own React context. Hosted on GitHub Pages (`base: '/'`).

### 2.1 Design tokens (source of truth)

All tokens live in `src/styles/global.css` under `:root`. **Never hardcode colors, radii, shadows, or section spacing in components — use the tokens.**

```css
:root {
  --pds-font: 'Porsche Next', '72', '72full', -apple-system, BlinkMacSystemFont,
              'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

  --color-bg: #ffffff;
  --color-bg-subtle: #f4f4f4;
  --color-bg-dark: #0e1418;
  --color-ink: #0e1418;
  --color-ink-soft: #4a5157;
  --color-line: #e3e3e3;
  --color-accent: #0a6ed1;        /* Fiori blue  */
  --color-accent-dark: #085caf;
  --color-teal: #0a8a7d;
  --color-gold: #b12b28;          /* Porsche red, secondary */

  --radius-lg: 18px;
  --radius-md: 12px;
  --shadow-card: 0 8px 30px rgba(14, 20, 24, 0.08);
  --shadow-card-hover: 0 16px 44px rgba(14, 20, 24, 0.14);

  --maxw: 1180px;
  --space-section: clamp(4rem, 9vw, 8rem);
}
```

Fonts are self-hosted via `@font-face` from the Porsche design-system CDN (weights 400/600/700, `font-display: swap`).

### 2.2 Global utilities & base

Defined in `global.css`:
- `.container` → `width: min(100% - 2.5rem, var(--maxw)); margin-inline: auto;`
- `.section` → `padding-block: var(--space-section);`
- `.eyebrow` → uppercase, 600, `letter-spacing: 0.14em`, accent color.
- `.section-heading` → `clamp(1.8rem, 3.6vw, 2.8rem)`.
- `.section-sub` → soft ink, `max-width: 60ch`.
- Base: `box-sizing: border-box`, smooth scroll, body uses `--pds-font`, `line-height: 1.55`; `h1–h3` bold with `letter-spacing: -0.01em`, `line-height: 1.1`.
- `@media (prefers-reduced-motion: reduce)` disables smooth scroll.

### 2.3 Component conventions

- **One component = one folder pair:** `ComponentName.jsx` + `ComponentName.css`; the CSS is imported at the top of the `.jsx`. PascalCase files, default export named the same.
- **CSS class naming = BEM-like:** `block`, `block__element`, `block--modifier` (e.g. `hero__title`, `pillar-card--gold`, `station__dot`).
- Components are React function components with hooks — no classes.
- Page assembly: `App.jsx` wires `ThemeProvider` + section order. A new section = new component pair + entry in `App.jsx` + strings in `translations.js`.

### 2.4 Fluid & responsive patterns

- Use `clamp()` for fluid font sizes and spacing (e.g. hero title `clamp(1.9rem, 3.4vw, 2.9rem)`).
- Mobile breakpoints via `@media (max-width: 820px)` (also 720/860/980/640px where a layout needs it). Multi-column grids collapse to a single column.
- Use `svh` alongside `vh` for full-height hero (`min-height: calc(100svh - 68px)`).

### 2.5 Recurring CSS recipes

**Card (Pillars / Stations / Blogs):**
```css
background: var(--color-bg);
border: 1px solid var(--color-line);
border-radius: var(--radius-lg);
box-shadow: var(--shadow-card);
transition: transform 0.22s ease, box-shadow 0.22s ease;
/* hover */
transform: translateY(-4px);
box-shadow: var(--shadow-card-hover);
```

**Accent top strip on a card:** `::before` absolutely positioned, `height: 4px`, background = `--color-accent` / `--color-teal` / `--color-gold` via a `--accent|--teal|--gold` modifier class.

**Icon tile:** ~54px, `border-radius: var(--radius-md)`, background = accent at 10% alpha, glyph in the matching accent color.

**Chip / tag:** `border-radius: 999px`, small 600 text; static tag = accent tint bg (`rgba(10,110,209,0.1)`); interactive filter chip = white bg + hairline border, `--active` modifier = solid accent bg + white text (hover → `--color-accent-dark`).

**Sticky header:** translucent white `rgba(255,255,255,0.82)` + `backdrop-filter: saturate(180%) blur(12px)`, hairline bottom border, `z-index: 50`, height 68px.

**Dark section (Contact/Footer):** `background: var(--color-bg-dark)` (footer `#0A0F12`), white headings, body at `rgba(255,255,255,0.72)`, eyebrow `#6DB3F2`, social buttons are 48px circles with `rgba(255,255,255,0.08)` bg that turn accent on hover.

**Timeline (Stations):** connecting 2px line drawn with `::before` on a marker row; 16px accent dot with a soft accent ring (`box-shadow: 0 0 0 5px rgba(10,110,209,0.14)`). Horizontal on wide screens, vertical (grid-areas) under 820px.

### 2.6 UI5 web components

- Buttons come from `@ui5/webcomponents-react`: `design="Emphasized"` for primary CTAs, `design="Transparent"` for secondary. Icons via the `icon="..."` prop.
- **Every icon must be explicitly imported in `main.jsx`** (`@ui5/webcomponents-icons/dist/<name>.js`) or it won't render. `main.jsx` also loads `@ui5/webcomponents-react/dist/Assets.js`.
- Keep the dependency surface deliberately small — don't add UI frameworks or CSS libraries.

### 2.7 Content & i18n

- **Never hardcode visible strings in components.** All text lives in `src/i18n/translations.js` under parallel `de` and `en` trees, mirroring section names (`nav`, `hero`, `pillars`, `contact`, `footer`, …).
- Lists/enumerations are arrays rendered via `.map()`.
- Access in a component: `const { t } = useLanguage();` → `t.hero.lead`. Default language is German (`getInitialLang` in `LanguageContext.jsx`).

### 2.8 Workflow

- `npm run dev` (dev), `npm run build` (build — keep it green before committing), `npm run preview`.
- Commits: short, scoped messages (`feat(hero):`, `content:`, `fix:`). Feature work on `feat/<thema>`, default branch `main`. Never commit `dist/` or `node_modules/`.
