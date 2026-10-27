# Tejeshwaran Manoharan — Portfolio

A bilingual (English/German) portfolio for web development and data analytics, built with React and Vite.

## Run locally

Use Node.js 20.19+ or 22.12+ (required by the installed Vite version). Run npm install, then npm run dev. Use npm run build for a production build and npm run lint to check the source.

## Structure

- src/components/ — page sections and navigation
- src/i18n/translations.js — all English and German interface copy
- src/index.css — layout, visual system, responsive rules, and motion preferences
- src/assets/ — Pillo and Unterwegs logos, portrait cutout, and retained legacy images
- src/hooks/ — lightweight scroll reveals and reduced-motion handling
- public/ — résumé and site icon

The Vite base path is set to /portfolio-website/ for GitHub Pages. If deployed at a different path, update base in vite.config.js.

The visual direction is Signal: charcoal, warm orange, and a portrait with a cursor-following dotted hacker reveal. Pointer movement paints a short fading trail; keyboard focus reveals the whole illustration. Touch devices retain the portrait, and reduced-motion preferences use a stationary spotlight without a trail. The existing React, Vite, Tailwind, and Lucide stack is unchanged.

Pillo and Unterwegs are featured in matching project cards with their original logos and English/German copy. Their descriptions are based on the current local source and both are marked in development. Unterwegs is the GermanTeach project: a German learning app with a growing 3D village, 175 A1–B2 lessons, and speaking practice. Add public demo or repository links only when verified URLs are available.

Scroll reveals and the gentle hero movement use native browser APIs, with no animation dependency. They respect reduced-motion settings, retain native scrolling, and leave content visible if animation support is unavailable.

Experience & Education is a scroll-triggered pop-card trial. On sufficiently tall desktop screens, the title appears first, then a sticky stage shows one card at a time as scroll thresholds are crossed. Cards pop in with a short, subtle overshoot and staggered text. Reverse scrolling revisits earlier cards. Narrow/short screens use stacked pop-ins; reduced-motion preferences show a compact, fully visible chronology. No scrolling is intercepted, and there are no new dependencies.

The previous timeline animation is preserved in the local workspace folder `portfolio-before-pop-animation` (with the résumé download already removed). To revert only the animation, restore `Experience.jsx`, `useExperienceMotion.js`, `index.css`, the two `experience.scrollHint` translation values, and this animation note from that snapshot. Do not restore unrelated files or reintroduce the résumé link. The PDF itself remains untouched; only the download option has been removed.
