# Theming (light / dark) and responsive layout

## How the theme works

The app was written dark-first with hard-coded Tailwind classes (`bg-slate-800`, `text-teal-300`, ...).
Rather than edit ~2,000 class names, the light theme is a generated CSS layer that re-points Tailwind's
own colour variables when `<html data-theme="light">` is set.

1. **Neutrals invert.** `--color-slate-*` is redefined so `bg-slate-900` becomes the page tint, `bg-slate-800` a white card, and `text-white` / `text-slate-*` dark ink.
2. **Deep hue shades become pale tints.** `--color-<hue>-800/900/950` map to the hue's 200/100/50, so `bg-teal-900/30` panels read as soft tints.
3. **Pale accent text gets readable ink.** `text-<hue>-100..400` (plus `hover:`, `focus:`, `group-hover:`, `disabled:` and `/opacity`) resolves through `--ink-*` variables, which are shade 800 in light mode.
4. **Saturated fills keep their dark look.** Inside `bg|from|via|to-<hue>-300..700` every variable above is restored, so buttons and gradient heroes keep the contrast their text was designed for. Deep `bg-*-500/600/700` fills with no `text-*` class of their own get white text.

`src/app/theme-light.css` is **generated** by `scripts/gen-theme-css.mjs`, which scans `src/` for the colour classes in use.

```bash
node scripts/gen-theme-css.mjs          # regenerate after adding colour classes
node scripts/gen-theme-css.mjs --check  # exit 1 if stale
```

`tests/theme.test.mjs` fails `npm test` when the committed file is stale, so CI catches a forgotten regeneration.

## Choosing the theme

- `src/lib/theme.ts` stores the choice (`light` | `dark` | `system`) in `localStorage` under `examsathi_theme`.
- An inline boot script in `src/app/layout.tsx` sets `data-theme` before first paint, so there is no flash.
- `ThemeToggle` is a three-way switch in the sidebar and a single cycling button in the phone header.
- `themeColor` is set for both schemes.

## Layout

| Width | Navigation | Content column |
| :--- | :--- | :--- |
| < 1024px | Sticky header + bottom tab bar (`BottomNav`) | up to 2xl |
| >= 1024px | Fixed sidebar (`SideNav`), no bottom bar | 4xl, 5xl at xl |

Nav entries live in `src/components/layout/navItems.ts` and feed both bars.

## Accessibility

- `:focus-visible` outline and `prefers-reduced-motion` handling are in `globals.css`.
- `pb-safe` pads the bottom bar for notched phones.
- Pinch zoom is allowed.

## Known contrast gaps

An automated audit (19 pages, both themes, 360px and 1280px) found no horizontal overflow and these remaining sub-AA items, shared by both themes:

- Emoji-only glyphs on gradient tiles (the logo tile, the profile icon), which are decorative.
- `text-indigo-200` on `bg-indigo-950/70` chip ("Study Vault") at 4.36:1.
- A dark-theme `text-indigo-400` on `bg-indigo-500/20` step number at 3.95:1.
- The profile tab `bg-teal-700` in dark mode at 4.35:1.
