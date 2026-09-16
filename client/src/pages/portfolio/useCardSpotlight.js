import { useEffect } from "react";

/**
 * Feeds each hovered `.card` its local pointer position as --mx/--my, which
 * drives the radial spotlight in `.card::before` (see portfolio.css).
 *
 * One delegated listener rather than per-card handlers, so cards stay plain
 * markup. rAF-throttled because the handler reads layout.
 */
export default function useCardSpotlight() {
  useEffect(() => {
    let frame = 0;
    const onMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const card = e.target instanceof Element && e.target.closest(".portfolio-root .card");
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
        card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      });
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
