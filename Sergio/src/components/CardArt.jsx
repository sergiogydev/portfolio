import { SiOpenjdk, SiSpringboot } from "react-icons/si";
import sueldinIcon from "../assets/images/sueldin.png";

/* Ilustraciones de las "tarjetas" de app. Cada una llena su contenedor. */

export function SueldinArt() {
  return (
    <img
      src={sueldinIcon}
      alt=""
      draggable={false}
      className="object-cover w-full h-full select-none"
    />
  );
}

export function CodeCoachArt() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="cc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3d7a65" />
          <stop offset="1" stopColor="#1f4036" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#cc-bg)" />
      <g fill="none" stroke="#f2ecdd" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
        <path d="M78 72 L42 104 L78 136" />
        <path d="M122 72 L158 104 L122 136" />
        <path d="M108 62 L92 146" />
      </g>
      <path
        d="M162 34 l4 11 11 4 -11 4 -4 11 -4 -11 -11 -4 11 -4z"
        fill="#f7c873"
      />
      <path
        d="M40 158 l2.5 6.5 6.5 2.5 -6.5 2.5 -2.5 6.5 -2.5 -6.5 -6.5 -2.5 6.5 -2.5z"
        fill="#f7c873"
        opacity=".8"
      />
    </svg>
  );
}

export function BotArt() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="bot-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34d27b" />
          <stop offset="1" stopColor="#12904e" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#bot-bg)" />
      <g>
        <path d="M34 52 h86 a14 14 0 0 1 14 14 v28 a14 14 0 0 1 -14 14 H70 l-20 18 v-18 h-16 a14 14 0 0 1 -14 -14 V66 a14 14 0 0 1 14 -14z" fill="#fff" />
        <rect x="46" y="68" width="62" height="8" rx="4" fill="#12904e" opacity=".85" />
        <rect x="46" y="84" width="40" height="8" rx="4" fill="#12904e" opacity=".4" />
        <path d="M166 100 h-70 a14 14 0 0 0 -14 14 v24 a14 14 0 0 0 14 14 h50 l22 18 v-18 a14 14 0 0 0 14 -14 v-24 a14 14 0 0 0 -14 -14z" fill="#0b3d24" />
        <circle cx="104" cy="126" r="5" fill="#34d27b" />
        <circle cx="122" cy="126" r="5" fill="#34d27b" />
        <circle cx="140" cy="126" r="5" fill="#34d27b" />
      </g>
    </svg>
  );
}

export function StackArt() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-3 bg-[#17140f]">
      <div className="flex items-center gap-4 text-[#f2ede3]">
        <SiOpenjdk className="w-12 h-12 sm:w-20 sm:h-20" />
        <SiSpringboot className="w-12 h-12 sm:w-20 sm:h-20 text-[#6db33f]" />
      </div>
      <span className="font-display text-[#f2ede3] text-lg sm:text-2xl tracking-wide">
        Java · Spring
      </span>
    </div>
  );
}

export const artById = {
  sueldin: SueldinArt,
  codecoach: CodeCoachArt,
  bot: BotArt,
  stack: StackArt,
};
