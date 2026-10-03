import { useEffect, useRef } from "react";

const clamp = (value) => Math.min(1, Math.max(0, value));

export function useExperienceMotion(language) {
  const sectionRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const intro = section.querySelector(".experience-intro");
    const introContent = section.querySelector(".experience-intro-content");
    const story = section.querySelector(".experience-story");
    const track = section.querySelector(".journey-track");
    const steps = [...section.querySelectorAll(".journey-step")];
    const cards = steps.map((step) => step.querySelector(".journey-card"));
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let pinned = false;
    let introWidth = 0;
    let openingWidth = 0;
    let paddingTop = 0;
    let introTravel = 0;
    let stepTravel = 0;

    function update() {
      frame = 0;
      const viewport = window.innerHeight;
      let current = -1;
      let progress;
      let dock = 1;
      let revealed;

      if (pinned) {
        const distance = 118 - section.getBoundingClientRect().top - paddingTop;
        dock = 1 - Math.pow(1 - clamp(distance / introTravel), 3);
        current = Math.max(-1, Math.min(steps.length - 1, Math.floor((distance - introTravel) / stepTravel)));
        progress = clamp((distance - introTravel) / (steps.length * stepTravel));
        revealed = steps.map((_, index) => index <= current);
      } else {
        const positions = steps.map((step) => step.getBoundingClientRect().top);
        const trackRect = track.getBoundingClientRect();
        // On smaller screens cards pop as they enter, then stay readable.
        revealed = positions.map((top) => top < viewport * 0.86);
        positions.forEach((top, index) => { if (top < viewport * 0.68) current = index; });
        progress = clamp((viewport * 0.68 - trackRect.top) / trackRect.height);
      }

      section.style.setProperty("--journey-progress", String(progress));
      section.style.setProperty("--intro-width", `${introWidth + (1 - dock) * (openingWidth - introWidth)}px`);
      section.classList.toggle("has-active-card", current >= 0);
      section.dataset.chapter = current < 0 ? "intro" : steps[current].dataset.chapter;
      // Classes change only at chapter boundaries, so a pop is triggered once,
      // rather than replaying a timed animation on every scroll frame.
      steps.forEach((step, index) => {
        step.classList.toggle("is-revealed", revealed[index]);
        step.classList.toggle("is-current", index === current);
        step.classList.toggle("is-past", index < current);
      });
    }

    function queueUpdate() {
      if (!frame && !preference.matches) frame = window.requestAnimationFrame(update);
    }

    function measure() {
      const viewport = window.innerHeight;
      const styles = window.getComputedStyle(section);
      paddingTop = parseFloat(styles.paddingTop);
      const paddingBottom = parseFloat(styles.paddingBottom);
      introWidth = intro.clientWidth;
      openingWidth = story.clientWidth;
      // Measure the compact layout, never the animated full-width opening.
      // Reserving this height keeps pin eligibility and the card stage stable.
      section.style.setProperty("--intro-width", `${introWidth}px`);
      const introHeight = introContent.offsetHeight;
      section.style.setProperty("--intro-height", `${introHeight}px`);
      const contentHeight = Math.max(introHeight, ...cards.map((card) => card.offsetHeight));
      pinned = !preference.matches && window.innerWidth > 900 && viewport >= 700
        && contentHeight < viewport - 175;
      introTravel = viewport * 0.34;
      stepTravel = viewport * 0.6;
      section.style.setProperty("--experience-height", `${paddingTop + introTravel + steps.length * stepTravel + contentHeight + paddingBottom}px`);
      section.classList.toggle("is-pinned", pinned);
      queueUpdate();
    }

    function configure() {
      window.removeEventListener("scroll", queueUpdate);
      window.cancelAnimationFrame(frame);
      frame = 0;
      section.classList.toggle("is-motion-enabled", !preference.matches);
      if (!preference.matches) window.addEventListener("scroll", queueUpdate, { passive: true });
      measure();
    }

    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    resizeObserver?.observe(intro);
    cards.forEach((card) => resizeObserver?.observe(card));
    window.addEventListener("resize", measure, { passive: true });
    preference.addEventListener("change", configure);
    configure();
    if (!initialized.current && window.location.hash === "#experience") {
      section.scrollIntoView({ block: "start", behavior: "instant" });
      queueUpdate();
    }
    initialized.current = true;

    return () => {
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", measure);
      preference.removeEventListener("change", configure);
      resizeObserver?.disconnect();
      window.cancelAnimationFrame(frame);
      section.classList.remove("is-motion-enabled", "is-pinned", "has-active-card");
      delete section.dataset.chapter;
      ["--journey-progress", "--intro-width", "--intro-height", "--experience-height"].forEach((property) => section.style.removeProperty(property));
      steps.forEach((step) => step.classList.remove("is-current", "is-past", "is-revealed"));
    };
  }, [language]);

  return sectionRef;
}
