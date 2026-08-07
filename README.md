# LGPSM — Future Forward Fashion

Pure-white, minimal, futuristic fashion landing page. React 19 + TypeScript + Vite +
Tailwind CSS v4 + lucide-react.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/
    ImageRevealBackground.tsx   desktop-only dual-image mouse-spotlight reveal (canvas mask)
    MobileImageSection.tsx      static bordered image shown below `lg`
    Header.tsx                  logo + nav (SHOP / COLLECTIONS / JOURNAL / cart)
    Hero.tsx                    headline, checkerboard accent, CTA, feature block
    Drawer.tsx                  right-side drawer for all four nav destinations
    Toast.tsx                   black top-right toast notification
    icons/
      CornerBracket.tsx         L-shaped corner bracket (4 orientations)
      Checkerboard.tsx          checkerboard accent next to "FASHION"
      WireframeGlobe.tsx        wireframe globe SVG
  lib/
    constants.ts                image URLs + product/collection/journal copy
    types.ts                    CartItem / DrawerKind types
```

## Notes

- All fluid sizing runs through CSS custom properties defined in `src/index.css`
  (`--headline`, `--pad-x`, `--drawer-max`, etc.) — resize the window to see every
  element scale smoothly rather than snapping at breakpoints.
- The image-reveal effect only mounts its mousemove/rAF loop on `lg`+ (desktop);
  below that, `MobileImageSection` shows a static bordered image instead.
- Cart state lives in `App.tsx` and is passed down as props — no external state
  library, so it resets on refresh.
