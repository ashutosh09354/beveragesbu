import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_FROM = { autoAlpha: 0, y: 24 };
const DEFAULT_TO = { autoAlpha: 1, y: 0 };

/**
 * Reveal descendants as their section enters the viewport.
 * Attach the returned ref to a wrapper and mark targets with `data-reveal`.
 *
 * `group: true` reveals all matching targets with one staggered trigger on
 * the wrapper. Set it to false to give each matching target its own trigger.
 */
export function useScrollReveal({
  selector = "[data-reveal]",
  from = DEFAULT_FROM,
  to = DEFAULT_TO,
  duration = 0.65,
  stagger = 0.08,
  ease = "power2.out",
  start = "top 86%",
  once = true,
  group = true,
  disabled = false,
  disableOnMobile = true,
} = {}) {
  const scopeRef = useRef(null);

  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope || disabled || typeof window === "undefined") return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 700px)").matches;
    if (reduceMotion || (disableOnMobile && isMobile)) return undefined;

    const context = gsap.context(() => {
      const targets = gsap.utils.toArray(selector, scope);
      if (!targets.length) return;

      const makeScrollTrigger = trigger => ({
        trigger,
        start,
        once,
        toggleActions: once ? "play none none none" : "play none none reverse",
      });

      if (group) {
        gsap.fromTo(targets, from, {
          ...to,
          duration,
          stagger,
          ease,
          scrollTrigger: makeScrollTrigger(scope),
        });
        return;
      }

      targets.forEach((target, index) => {
        gsap.fromTo(target, from, {
          ...to,
          duration,
          delay: index * stagger,
          ease,
          scrollTrigger: makeScrollTrigger(target),
        });
      });
    }, scope);

    return () => context.revert();
  }, [selector, from, to, duration, stagger, ease, start, once, group, disabled, disableOnMobile]);

  return scopeRef;
}

export default useScrollReveal;
