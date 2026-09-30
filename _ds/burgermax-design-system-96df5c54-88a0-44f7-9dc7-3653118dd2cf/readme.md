# BurgerMax Design System

BurgerMax is a hamburger restaurant in Ciudad del Este, Paraguay (Lozada Echenique y Sarmiento, frente a Ruta 38), serving salón, take away and delivery. Menu: classic and palta (avocado) burgers, combos with fries, chicken nuggets/crispy, milkshakes (caramelo, oreo, pistacho, chocolate, dulce de leche, frutilla), natural lemonade and tostados. Orders and pricing are handled entirely over WhatsApp (wa.link/glqbbq) — the site never shows prices. Hours: martes a viernes, 11 AM–2 AM (weekends/holidays: consult WhatsApp). Instagram: @burgermaxcde.

## Sources
- **Code**: [github.com/umiiluni/burgermax](https://github.com/umiiluni/burgermax) (branch `main`) — the live one-page marketing site (Tailwind v4 + vanilla JS). This is the ground truth for every color, font, spacing and animation value in this system. Explore it further for build details (Tailwind config, exact JS behaviors) beyond what's captured here.
- **Brand notes**: client brief describing the Instagram identity (black backgrounds, poster-style condensed type, red/orange/yellow "fuego" palette). **Note:** the actual coded site uses a white/cream base with the fuego palette as accent (Plus Jakarta Sans, not a condensed poster face) — this design system follows the *code* as ground truth per instructions, since it's the real shipped artifact. See Visual Foundations below for the discrepancy.

## Products
Single product: the BurgerMax marketing site (`ui_kits/marketing-site/`) — hero, gallery, carta (menu), ubicación (location/hours), contacto (WhatsApp/Instagram), footer, floating WhatsApp button.

## Content Fundamentals
- **Language**: Spanish (Paraguay/river-plate register), informal "vos" — e.g. "Vení al local, retirá o pedí delivery", "Te respondemos al toque", "Escribinos".
- **Voice**: direct, low-friction, action-first. Every section ends in a WhatsApp CTA ("Pedir", "Pedir por WhatsApp"). No long copy — headlines are 1–4 words ("Carta", "Ubicación", "Escribinos").
- **No prices in-product**: pricing/order assembly happens exclusively in WhatsApp chat. Menu cards show only photo + name (+ optional flavor list for milkshakes) and a "Pedir" button.
- **Casing**: sentence case for body copy and headings ("Combos con papas"); CTAs and pills are UPPERCASE ("PEDIR POR WHATSAPP").
- **No emoji in copy.** The only pictograms are inline SVG icons (WhatsApp, Instagram, camera-placeholder).
- **Structure**: short section labels double as anchors/nav items (Carta, Ubicación, Contacto) — copy stays scannable on mobile, the primary device.

## Visual Foundations
- **Color**: white page background with a saturated "fuego" (fire/ember) accent system — `--bm-red #d7261e`, `--bm-deep #9f1d12`, `--bm-orange #f47c14`, `--bm-yellow #f9b208` — plus warm neutrals `--bm-cream #fff6ea` (card surfaces), `--bm-sand #fdebd3` (borders/pills), `--bm-ink #2a1a12` (text). WhatsApp green `#25D366` is reserved solely for the WhatsApp float/CTA-adjacent icon, never used decoratively.
- **Type**: Plus Jakarta Sans (400–800) throughout, no serif, no condensed display face. Headings are extrabold (800) and tight; body copy sits at 400–600. Buttons/pills are always uppercase, extrabold, with `+0.03em` tracking.
- **Backgrounds**: solid white or cream — no gradients, patterns or photo textures behind content. The one full-bleed image is the hero video/photo. No blur/glass except the sticky nav (95%-opacity white + backdrop-blur).
- **Imagery**: warm, saturated, close-up food photography (melted cheese macro shots, stacked patties) — no black-and-white, no heavy grain. Where a real photo is missing, a dashed diagonal-stripe "photo slot" placeholder stands in — never a stock photo or hand-drawn icon.
- **Animation**: sections fade+rise on scroll — `opacity 0→1` over 0.35s (`cubic-bezier(.25,.8,.4,1)`) while `translateY(150px)→0` settles over 0.6s with a slight overshoot (`cubic-bezier(.2,1.06,.36,1)`), triggered once via IntersectionObserver. The gallery additionally scales in from 80%. Directional variants slide in from 50px right. No spring/bounce beyond that overshoot; respects `prefers-reduced-motion`.
- **Hover/press**: primary buttons brighten (`filter: brightness(1.06)`) and lift 1px on hover; outline buttons invert (border → solid fill) on hover. No shrink/press effect is defined in source.
- **Shadows**: the primary CTA gets a warm "fire glow" (`0 6px 16px -6px rgba(244,124,20,.65)` + inset top highlight) — shadows are tinted orange, never neutral gray, on brand buttons. Floating/lifted UI (the location card over the hero, the WhatsApp float) uses a neutral soft shadow instead.
- **Corners**: generous rounding throughout — `0.75rem–1.5rem` on cards/images, full pill radius on every button, tag and badge. No sharp corners in UI chrome.
- **Cards**: flat cream fill, no border, no shadow, `1rem` radius — menu items and the promo/instagram callout box. The one shadowed "card" is the floating hero info panel (white, elevated).
- **Layout**: mobile-first single column that opens into 2–4 column grids at `sm`/`lg` breakpoints; sticky header; one fixed element (WhatsApp float, bottom-right, always on top).
- **Transparency/blur**: only on the sticky nav (`bg-white/95` + `backdrop-blur`) and the hero's floating info card (`bg-white/95`, no blur).

## Iconography
No icon library is used. The source repo defines exactly three custom SVGs as `<symbol>` sprites referenced via `<use>`: WhatsApp, Instagram, and a camera glyph (used inside photo-slot placeholders). This system recreates those same three glyphs as inline SVG paths (sourced from the repo's exact `<symbol>` markup) inside `PhotoSlot` and `WhatsAppFloat` — no emoji, no unicode-as-icon, no icon font. An Instagram glyph wasn't needed by any built component but should be recreated the same way if you add one.

## Components
- **Button** (`components/core/`) — `fire` (gradient primary CTA) / `outline` (secondary) variants, 3 sizes.
- **Pill** (`components/core/`) — `outline` mode-tags (Salón/Take away/Delivery) / `filled` location badge.
- **PhotoSlot** (`components/core/`) — dashed placeholder for missing product photography.
- **MenuCard** (`components/cards/`) — Carta grid item: photo/slot + title + note + Pedir CTA.
- **NavBar** (`components/navigation/`) — sticky header, logo + links + CTA.
- **CategorySelect** (`components/forms/`) — Carta category filter dropdown.
- **WhatsAppFloat** (`components/feedback/`) — fixed bottom-right WhatsApp button.

No component library existed in the source beyond these patterns (a static Tailwind page, not a componentized codebase) — this is the full inventory found; no extra primitives (Tabs, Toast, Dialog, etc.) were invented since the source never uses them.

## Index
- `styles.css` — root stylesheet, imports all tokens.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css` (shadows/motion), `fonts.css` (Plus Jakarta Sans via Google Fonts).
- `guidelines/` — 14 foundation specimen cards (Colors, Type, Spacing, Brand).
- `assets/logos/` — `burgermax-logo.png`. `assets/images/` — 4 product/hero photos from the source repo.
- `components/` — `core/` (Button, Pill, PhotoSlot), `cards/` (MenuCard), `navigation/` (NavBar), `forms/` (CategorySelect), `feedback/` (WhatsAppFloat).
- `templates/marketing-site/` — full interactive site template (hero, gallery, filterable carta, ubicación with map, contacto, footer, WhatsApp float), composed from the components above.
- `SKILL.md` — portable skill wrapper for use in Claude Code.
- `github.md` — source-repo sync record.

## Caveats
- No Figma or component-library source was provided — components above are the full pattern set the coded site actually uses, not a curated subset.
- Hero hosts a video (`assets/video/hero-burger.mp4`) in source that isn't in the repo tree (git-ignored); the UI kit uses the poster photo (`burger-final.jpg`) as a static stand-in.
- Instagram-derived brief (black bg, poster type) conflicts with the actual shipped site (white bg, Plus Jakarta Sans) — flagged for the user to confirm which direction to design future work against.
