import { useId } from "react";

// A scalable dot-matrix drawing. Patterns keep the illustration light without
// creating thousands of animated elements or loading a portrait image.
export default function SignalPortrait() {
  const id = useId().replaceAll(":", "");
  const dots = id + "-dots";
  const fine = id + "-fine";
  const fade = id + "-fade";

  return (
    <svg className="signal-portrait" viewBox="0 0 600 590" fill="none" aria-hidden="true">
      <defs>
        <pattern id={dots} width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="currentColor" />
        </pattern>
        <pattern id={fine} width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r=".8" fill="currentColor" opacity=".5" />
        </pattern>
        <linearGradient id={fade} x1="300" y1="355" x2="300" y2="562" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity=".45" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="18" y="25" width="564" height="530" fill={"url(#" + fine + ")"} opacity=".16" />
      <path d="M68 137V62h75M457 62h75v75M532 426v75h-75M143 501H68v-75" stroke="currentColor" strokeOpacity=".2" />
      <circle cx="300" cy="268" r="210" stroke="currentColor" strokeOpacity=".1" strokeDasharray="2 12" />

      {/* Shoulders and the outer hood form one continuous dotted silhouette. */}
      <path d="M74 464C80 405 108 355 159 329L150 269C136 161 194 66 272 49C285 46 315 46 330 51C411 73 466 167 449 269L440 329C491 355 519 405 526 464L459 488H140Z"
        fill={"url(#" + dots + ")"} />
      <path d="M151 326C164 285 170 188 207 141C237 102 267 83 300 81C342 86 376 114 403 158C428 207 429 279 448 325"
        stroke="currentColor" strokeWidth="1.2" strokeOpacity=".45" strokeDasharray="1 7" />
      {/* Negative space makes the hood and obscured face legible at small sizes. */}
      <path d="M202 243C197 191 235 129 301 117C369 139 402 196 397 245L369 314L302 354L232 312Z"
        fill="var(--bg)" />
      <path d="M201 243C209 197 239 165 301 151C359 165 389 201 397 245L367 228L330 222L300 230L269 222L232 229Z"
        fill={"url(#" + fine + ")"} />
      <path d="M232 274L267 266L300 277L333 266L369 274L351 311L300 341L249 311Z"
        fill={"url(#" + dots + ")"} opacity=".85" />
      <path d="M235 248L274 252M326 252L365 248" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 6" />
      <path d="M185 350L149 435M415 350L451 435M243 341L226 374M357 341L374 374"
        stroke="currentColor" strokeOpacity=".65" strokeWidth="2" strokeDasharray="1 7" />

      {/* Laptop foreground. */}
      <path d="M126 373H474L450 491H151Z" fill="var(--bg)" stroke="currentColor" strokeOpacity=".5" />
      <path d="M138 383H462L443 482H158Z" fill={"url(#" + fine + ")"} opacity=".5" />
      <path d="M268 416L286 430L268 444M302 445H329" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M100 495H501L478 509H122Z" fill={"url(#" + dots + ")"} />
      <path d="M121 516H479L518 559H82Z" fill={"url(#" + fade + ")"} opacity=".3" />
      <g fill="currentColor">
        <circle cx="79" cy="219" r="2" opacity=".6" /><circle cx="512" cy="194" r="2" opacity=".5" />
        <circle cx="487" cy="306" r="1.5" /><circle cx="119" cy="303" r="1.5" />
        <circle cx="435" cy="99" r="2" opacity=".5" /><circle cx="176" cy="88" r="1.5" />
      </g>
    </svg>
  );
}
