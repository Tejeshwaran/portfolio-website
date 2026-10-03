import { useEffect, useRef } from "react";

export function usePageMotion() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = [...page.querySelectorAll("[data-reveal]")];
    const hero = page.querySelector("#home");
    let observer;
    let frame = 0;

    function updateScene() {
      frame = 0;
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / rect.height));
      hero.style.setProperty("--scene-shift", progress * 44 + "px");
      hero.style.setProperty("--scene-scale", String(1 - progress * 0.06));
    }

    function queueScene() {
      if (!frame) frame = window.requestAnimationFrame(updateScene);
    }

    function configureMotion() {
      observer?.disconnect();
      window.removeEventListener("scroll", queueScene);
      window.removeEventListener("resize", queueScene);
      window.cancelAnimationFrame(frame);
      frame = 0;
      targets.forEach((target) => target.classList.remove("reveal-pending"));
      hero.style.removeProperty("--scene-shift");
      hero.style.removeProperty("--scene-scale");
      if (preference.matches) return;

      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("reveal-pending");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

        targets.forEach((target) => {
          // Only offscreen content gets an entrance; initial content stays visible.
          if (target.getBoundingClientRect().top > window.innerHeight) {
            target.classList.add("reveal-pending");
            observer.observe(target);
          }
        });
      }
      window.addEventListener("scroll", queueScene, { passive: true });
      window.addEventListener("resize", queueScene, { passive: true });
      queueScene();
    }

    configureMotion();
    preference.addEventListener("change", configureMotion);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", configureMotion);
      window.removeEventListener("scroll", queueScene);
      window.removeEventListener("resize", queueScene);
      window.cancelAnimationFrame(frame);
      targets.forEach((target) => target.classList.remove("reveal-pending"));
    };
  }, []);

  return pageRef;
}
