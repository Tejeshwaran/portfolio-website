import { useEffect, useId, useRef } from "react";
import SignalPortrait from "./SignalPortrait";

const WIDTH = 600;
const HEIGHT = 590;
const RADIUS = 90;
const LIFE = 900;
const POOL_SIZE = 80;

export default function PortraitReveal({ src, label }) {
  const stage = useRef(null);
  const trailGroup = useRef(null);
  const currentCircle = useRef(null);
  const maskId = useId().replaceAll(":", "") + "-portrait-reveal";

  useEffect(() => {
    const box = stage.current;
    const circles = Array.from(trailGroup.current.children);
    const spot = currentCircle.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let trail = [];
    let current = null;
    let previous = null;
    let frame = 0;

    const drawCircle = (circle, point, radius, opacity = 1) => {
      if (point) {
        circle.setAttribute("cx", point.x);
        circle.setAttribute("cy", point.y);
      }
      circle.setAttribute("r", radius);
      circle.setAttribute("opacity", opacity);
    };

    const draw = (now) => {
      trail = trail.filter((point) => now - point.t < LIFE);
      circles.forEach((circle, index) => {
        const point = trail[index];
        if (!point) return drawCircle(circle, null, 0);
        const fade = Math.max(0, (now - point.t - 140) / (LIFE - 140));
        drawCircle(circle, point, RADIUS * (1 - fade * .35), 1 - fade);
      });
      drawCircle(spot, current, current ? RADIUS : 0);
    };

    const tick = (now) => {
      frame = 0;
      draw(now);
      if (trail.length) frame = requestAnimationFrame(tick);
    };

    const paint = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const clear = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      trail = [];
      current = null;
      previous = null;
      draw(performance.now());
    };

    const onMove = (event) => {
      if (!finePointer.matches || !["mouse", "pen"].includes(event.pointerType)) return;
      const rect = box.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const now = performance.now();
      const point = {
        x: ((event.clientX - rect.left) / rect.width) * WIDTH,
        y: ((event.clientY - rect.top) / rect.height) * HEIGHT,
        t: now,
      };
      current = point;
      if (reducedMotion.matches) {
        drawCircle(spot, point, RADIUS);
        return;
      }

      // Sample round stamps along fast moves so the brush never develops gaps.
      if (previous) {
        const distance = Math.hypot(point.x - previous.x, point.y - previous.y);
        const steps = Math.min(POOL_SIZE, Math.max(1, Math.ceil(distance / (RADIUS * .3))));
        for (let step = 1; step <= steps; step++) {
          const amount = step / steps;
          trail.push({
            x: previous.x + (point.x - previous.x) * amount,
            y: previous.y + (point.y - previous.y) * amount,
            t: now,
          });
        }
      } else {
        trail.push(point);
      }
      trail = trail.slice(-POOL_SIZE);
      previous = point;
      paint();
    };

    const onLeave = () => {
      const now = performance.now();
      if (current && !reducedMotion.matches) {
        trail.push({ ...current, t: now });
        trail = trail.slice(-POOL_SIZE);
      }
      current = null;
      previous = null;
      paint();
    };
    const onVisibility = () => {
      if (document.hidden) clear();
    };
    const resize = new ResizeObserver(clear);
    resize.observe(box);
    box.addEventListener("pointerenter", onMove);
    box.addEventListener("pointermove", onMove);
    box.addEventListener("pointerleave", onLeave);
    box.addEventListener("pointercancel", clear);
    window.addEventListener("blur", clear);
    window.addEventListener("resize", clear);
    document.addEventListener("visibilitychange", onVisibility);
    finePointer.addEventListener("change", clear);
    reducedMotion.addEventListener("change", clear);

    return () => {
      clear();
      resize.disconnect();
      box.removeEventListener("pointerenter", onMove);
      box.removeEventListener("pointermove", onMove);
      box.removeEventListener("pointerleave", onLeave);
      box.removeEventListener("pointercancel", clear);
      window.removeEventListener("blur", clear);
      window.removeEventListener("resize", clear);
      document.removeEventListener("visibilitychange", onVisibility);
      finePointer.removeEventListener("change", clear);
      reducedMotion.removeEventListener("change", clear);
    };
  }, []);

  return (
    <div ref={stage} className="portrait-stage" tabIndex={0} role="img" aria-label={label}>
      <img className="portrait-photo" src={src} alt="" fetchPriority="high" decoding="async" />
      <svg className="portrait-reveal" viewBox="0 0 600 590" fill="none" aria-hidden="true">
        <defs>
          <mask id={maskId} x="0" y="0" width="600" height="590" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }}>
            <g ref={trailGroup} fill="white">
              {Array.from({ length: POOL_SIZE }, (_, index) => <circle key={index} r="0" />)}
            </g>
            <circle ref={currentCircle} r="0" fill="white" />
          </mask>
        </defs>
        <g className="portrait-hacker" mask={`url(#${maskId})`}>
          <rect width="600" height="590" fill="var(--bg)" />
          <SignalPortrait />
        </g>
      </svg>
    </div>
  );
}
