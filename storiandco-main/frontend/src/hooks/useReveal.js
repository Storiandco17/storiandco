import { useEffect, useRef } from "react";

/**
 * Adds .is-visible to elements with [data-reveal] when they intersect the viewport.
 * Use the `reveal` class on the same element for the transition.
 */
export function useReveal() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current || document;
    const nodes = root.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return rootRef;
}
