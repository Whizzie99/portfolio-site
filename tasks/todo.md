# Sanity CMS Setup Tasks

- [x] Initialize Sanity within Next.js (install `sanity`, `next-sanity`, `styled-components`)
- [x] Setup `sanity.config.ts` and `sanity.cli.ts` at the root
- [x] Create the embedded Studio route at `src/app/studio/[[...tool]]/page.tsx`
- [x] Create `hero` schema in `src/sanity/schemaTypes/hero.ts`
- [x] Create `about` schema in `src/sanity/schemaTypes/about.ts`
- [x] Create `tools` schema for skills/tech stack in `src/sanity/schemaTypes/tools.ts`
- [x] Create `project` schema in `src/sanity/schemaTypes/project.ts`
- [x] Create `writing` schema for blog posts in `src/sanity/schemaTypes/writing.ts`
- [x] Combine schemas in `src/sanity/schemaTypes/index.ts`
- [x] Update `next.config.ts` to allow Sanity CDN images 
- [x] Verify Studio compiles, renders, and allows document creation

---

# Preloader Implementation Tasks

- [x] Create `Preloader` component (`src/components/common/preloader.tsx`)
  - [x] Use `framer-motion` for exit animation
  - [x] Implement 0-100% loading counter with simulated progress
  - [x] Add visual loading bar UI using Tailwind CSS
  - [x] Manage body scroll lock during preloader
- [x] Integrate into `src/app/layout.tsx`
  - [x] Import and render `<Preloader />` just inside the layout body
- [ ] Verify functionality
  - [ ] Ensure percentage counts up correctly
  - [ ] Ensure exit animation runs smoothly after reaching 100%
  - [ ] Ensure user scroll is restored after loader disappears
