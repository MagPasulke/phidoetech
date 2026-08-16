# AGENTS.md — Dev Agent Guidelines

Guidelines für die Entwicklung an dieser Homepage. Diese Datei richtet sich an KI-Coding-Agents und Entwickler:innen.

## Projektüberblick

Statische Single-Page-Homepage für einen freiberuflichen SAP-Softwareentwickler & -Architekten.
Gehostet über **GitHub Pages** mit eigener Domain. Zweisprachig (Deutsch/Englisch), umschaltbar per Button.
Ziel: hochwertiger, moderner Auftritt im **SAP-Fiori-Look** mit **Porsche-Design**-Typografie.

## Tech-Stack

- **Build:** Vite 8 (`vite.config.js`, `base: '/'` wegen Custom Domain)
- **UI:** React 19 (function components + hooks, keine Klassen)
- **Komponentenbibliothek:** `@ui5/webcomponents-react` (Fiori Look & Feel), Icons on-demand aus `@ui5/webcomponents-icons`
- **Styling:** plain CSS pro Komponente + globale Design-Tokens (kein CSS-Framework, kein CSS-in-JS)
- **i18n:** eigener React-Context, keine externe Library

## Projektstruktur

```
index.html                     Einstiegspunkt, Meta/SEO
vite.config.js                 Vite-Konfiguration
src/
  main.jsx                     Root-Render, lädt UI5 Assets + benötigte Icons, LanguageProvider
  App.jsx                      Seitengerüst: ThemeProvider + Section-Reihenfolge
  i18n/
    LanguageContext.jsx        LanguageProvider + useLanguage()-Hook, Default-Sprache 'de'
    translations.js            ALLE Texte (de/en) — Single Source of Truth für Inhalte
  components/
    Header.jsx  + .css         Sticky-Nav, Marke, Ankerlinks, Sprach-Toggle
    Hero.jsx     + .css        Full-Height-Hero: Text links, Porträt + Stärke rechts
    Pillars.jsx  + .css        Die drei Schwerpunkte (Konzipieren / Übersetzen / Entwickeln)
    Stations.jsx + .css        Werdegang als horizontale Timeline (Bosch, cbs, Porsche, freiberuflich)
    Blogs.jsx    + .css        LinkedIn-Artikel als Karten mit Themenfilter
    Contact.jsx  + .css        CTA (E-Mail) + Social-Links (LinkedIn, GitHub)
    Impressum.jsx+ .css        Eigene Seite unter der Hash-Route #/impressum
    Footer.jsx   + .css        Marke + Copyright
  styles/
    global.css                 Design-Tokens, Reset, Typografie, .container/.section-Utilities
  assets/
    portrait.jpeg              Porträtbild
```

### Konventionen

- **Eine Komponente = ein Ordnerpaar** `ComponentName.jsx` + `ComponentName.css`. CSS wird oben in der `.jsx` importiert.
- Komponenten sind **PascalCase**, benannte Datei = Default-Export.
- CSS-Klassen folgen **BEM-ähnlich**: `block`, `block__element`, `block--modifier` (z. B. `hero__title`, `pillar-card--gold`).
- **Neue Icons** immer explizit in `main.jsx` importieren (`@ui5/webcomponents-icons/dist/<name>.js`), sonst rendern sie nicht.
- Keine neuen Dependencies ohne Not — Stack bewusst schlank halten.

## Inhalte & i18n

- **Niemals Texte in Komponenten hardcoden.** Alle sichtbaren Strings gehören nach `translations.js` unter `de` und `en` — beide Sprachen immer parallel pflegen.
- Struktur der Übersetzungen spiegelt die Sektionen (`nav`, `hero`, `pillars`, `career`, `blogs`, `contact`, `impressum`, `footer`).
- Aufzählungen/Listen als Arrays (`hero.modules`, `hero.stats`, `pillars.*.items`, `career.stations`) und im JSX per `.map()` rendern.
- Zugriff im Component: `const { t } = useLanguage();` → `t.hero.lead`.
- Default-Sprache ist **Deutsch** (`getInitialLang` in `LanguageContext.jsx`).

## Styling & Design

- **Design-Tokens** aus `:root` in `global.css` verwenden — keine Magic-Numbers/Hex-Werte in Komponenten:
  - Farben: `--color-ink`, `--color-ink-soft`, `--color-bg`, `--color-bg-subtle`, `--color-bg-dark`, `--color-line`
  - Akzente: `--color-accent` (Fiori-Blau `#0a6ed1`), `--color-gold` (Porsche-Rot `#b12b28`, sekundär, sparsam)
  - Radius: `--radius-md`, `--radius-lg`; Schatten: `--shadow-card`, `--shadow-card-hover`
  - Layout: `--maxw` (1180px), `--space-section`
- **Typografie:** `--pds-font` (Porsche Next → Fallback SAP „72" → System). Keine anderen Fonts einführen.
- **Responsivität:** `clamp()` für fluide Font-Größen/Abstände; Mobile-Breakpoints per `@media (max-width: 820px)`.
- **Utilities:** `.container` (zentriert, max-width) und `.section` (vertikales Padding) wiederverwenden.
- **Bewegung:** dezente Transitions (`0.18s–0.22s ease`), `prefers-reduced-motion` respektieren.
- Look bleibt **clean, luftig, hochwertig** — Weißraum vor Dichte, klare Lesehierarchie.

## Tonfall (Content)

- Deutsch: professionell, präzise, selbstbewusst — **nicht überheblich**. Partnerschaftlich, „auf Augenhöhe".
- Kurze, aktive Sätze; Fachbegriffe (ABAP, RAP, CAP, BTP, Fiori) korrekt und konsistent schreiben.
- Englische Version sinngemäß, nicht wörtlich — idiomatisch und gleichwertig knapp.
- Marketing-Floskeln vermeiden; Substanz und konkrete Fähigkeiten in den Vordergrund.

## Workflow

- **Dev-Server:** `npm run dev` — **Build:** `npm run build` — **Preview:** `npm run preview`.
- Nach Änderungen den Build grün halten (`npm run build`) bevor committet wird.
- **Commits:** kurze, präzise Messages, gern mit Scope-Präfix (`feat(hero):`, `content:`, `fix:`), Bulletpoints für Details.
- **Branches:** Feature-Arbeit auf `feat/<thema>`, Default-Branch ist `main`.
- Keine `dist/` oder `node_modules/` committen (siehe `.gitignore`).

## Deployment

- Ziel: **GitHub Pages** + Custom Domain, daher `base: '/'` beibehalten.
- Nur statische Assets — keine serverseitige Logik, keine Secrets im Repo.

## Do / Don't

- ✅ Neue Sektion = neues Komponentenpaar + Eintrag in `App.jsx` + Texte in `translations.js` (de/en).
- ✅ Farben/Abstände über Tokens, Icons in `main.jsx` registrieren.
- ❌ Keine hardcodierten Texte, keine Inline-Styles für Wiederverwendbares, keine zusätzlichen UI-Frameworks.
- ❌ Keine Über-Abstraktion — die Seite ist bewusst einfach und statisch.
