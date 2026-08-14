import { useEffect, useRef } from "react";

/**
 * useReveal — Adds "is-visible" class to observed elements when they
 * enter the viewport. Works with .v-reveal CSS class for opacity/translateY.
 *
 * @param {object} options IntersectionObserver options
 * @returns {React.RefObject} Attach to the container ref
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion at the hook level
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      // Immediately make everything visible — no animation
      if (ref.current) {
        const targets = ref.current.querySelectorAll(".v-reveal");
        targets.forEach((el) => el.classList.add("is-visible"));
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Unobserve after reveal — single-fire
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
        ...options,
      }
    );

    const container = ref.current;
    if (container) {
      const targets = container.querySelectorAll(".v-reveal");
      targets.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
