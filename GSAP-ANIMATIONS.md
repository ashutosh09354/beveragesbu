# Homepage GSAP motion update

The homepage now uses GSAP + ScrollTrigger for business-focused motion effects.

## Included

- Two branded delivery trucks travel continuously in opposite directions across the hero road, looping at different speeds.
- Road lane markings and subtle road-light streaks move to reinforce the sense of forward motion.
- Background clouds drift gently at different speeds for layered depth.
- Hero text enters in a staggered timeline.
- Beverage artwork has a restrained floating motion and scroll parallax on desktop.
- Homepage statistic values count up when they enter view.
- About, product, value proposition, and market-segment content reveal as the visitor scrolls.
- The four-stage supply-chain section uses a connecting route line and staggered step reveals.
- Distribution routes draw over the India map, followed by animated location markers.
- Partner brands move in a seamless horizontal marquee; hovering pauses the marquee.
- Mobile uses lighter reveal animations, while `prefers-reduced-motion` disables the GSAP motion and the marquee animation.

## Dependencies

`gsap` and `@gsap/react` are already declared in `package.json` and `package-lock.json`.

If setting up a fresh checkout:

```bash
npm install
npm run dev
```

Build for production with:

```bash
npm run build
```

## Tuning

Homepage animation code lives in `src/pages/Home.jsx`; the route, marquee, and reduced-motion styling lives near the end of `src/styles.css`. Keep motion subtle for a B2B distribution website, and test on a real mobile device before publishing.

## Hero beverage showcase

The homepage hero now cycles through six beverage types (cola, orange soda, lemon-lime, energy drink, packaged water, and fruit juice) using a GSAP looping timeline. Each product scales and rises into view, holds briefly, then fades/slides away before the next product enters. The carousel uses lightweight local SVG bottle illustrations so it does not depend on additional remote images. Reduced-motion users see a static first product.
