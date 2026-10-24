# Portfolio redesign

This draft adapts the visual design of https://chibuike-analytics.tech/ to Kyrian's frontend portfolio: Space Mono headings, Outfit body text, a dark grid background, cyan and green accents, fixed navigation, a centred introduction, a facts strip, illustrated project cards, and light/dark themes.

## Content and features

- Keeps the four existing project destinations, GitHub links, LinkedIn profile, contact address, portrait, and ILS Hamburg training details.
- Uses screenshots from the Taskflow Studio, Job Application Tracker, and NovaShop repositories. The CityTaxi image is a cropped capture of its live demo.
- Describes project capabilities from the existing repositories' README files and visible demo interfaces.
- Adds category filters, project search, grid/list layouts, persistent theme preferences, a keyboard skip link, mobile navigation, and reduced-motion support.
- Includes page description, English document language, social sharing metadata, a custom favicon, and a generated social-preview image.
- The Request CV links open an email draft; no CV file was supplied.

## Run and build

Use the Node.js version specified in package.json.

```sh
npm ci
npm run dev
npm run build
npm test
npm run check:links
```

The build outputs static production files in `dist/`. The existing Vercel deployment URL remains the canonical URL in `index.html`. Update it and the social-image URLs if the production domain changes.

`npm test` validates project identifiers, categories, required descriptions, local screenshots, and URL formats without network access. `npm run check:links` requires network access and checks every demo/source URL plus each demo's JavaScript and CSS entry assets. HTTP availability does not replace browser testing of project workflows.

## Edit the content

- `src/data/projects.js`: project descriptions, features, screenshots, categories, and destinations.
- `src/App.vue`: introduction, navigation, education, and contact information.
- `src/components/ProjectCard.vue`: project presentation.
- `src/assets/portfolio.css`: colours, typography, spacing, and responsive behaviour.

The fonts load from Google Fonts with local fallback fonts. Project screenshots and the portrait are served locally as WebP images.

## Verification

- Production build completed successfully with `npm run build`.
- Checked project search, category filtering, empty results, reset, and list layout in the browser.
- Verified light/dark switching and preference persistence on a new page load.
- Verified the mobile menu, section navigation, and Escape focus return.
- Inspected desktop, tablet, and phone layouts, including a 320-pixel frame. The layout diagnostics found no horizontal overflow or overflowing headings at the checked widths.
- Confirmed all five content images load when their sections are reached.

This is a local draft. Publishing to the existing Vercel site is a separate deployment step.

## Code review — 24 October 2026

- Independent review found no critical runtime or build defects. Fixed mobile menu keyboard entry and section focus, and synchronized browser theme colour on toggling and reload.
- Replaced width-relative observer margins with viewport-height pixel margins. Reading progress now refreshes when filtering or image loading changes page height.
- Five offline tests and the production build pass. npm audit reported zero known vulnerabilities for the installed dependency tree.
- All four live demos render; all four source repositories and README files are accessible. All eight demo/source URLs and eight script/style URLs returned HTTP 200.
- Remaining minor issue in a separate project: Taskflow Studio's deployed browser title is still `Vite App`. No separate project repositories were modified.
- These checks establish the current state; rerun the build, tests and link check after content, dependency or hosting changes.
