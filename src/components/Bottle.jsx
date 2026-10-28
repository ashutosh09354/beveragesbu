import React, { useId } from "react";

// Shaded, glossy vector pack-shots. Replace with real product photos when available.
export default function Bottle({ shape = "bottle", color = "#d62a22", abbr = "", className = "" }) {
  const id = useId().replace(/:/g, "");
  const body = {
    bottle: "M42 22h16v22c0 14 20 18 20 42v128a16 16 0 0 1-16 16H38a16 16 0 0 1-16-16V86c0-24 20-28 20-42z",
    water: "M42 40h16v18c0 10 18 14 18 34v118a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V92c0-20 18-24 18-34z",
    tall: "M40 20h20v26c0 12 14 16 14 36v136a16 16 0 0 1-16 16H42a16 16 0 0 1-16-16V82c0-20 14-24 14-36z",
    can: "M28 40c0-8 44-8 44 0v192c0 10-44 10-44 0z"
  }[shape];
  const capY = shape === "water" ? 26 : 6;
  return (
    <svg className={`bottle ${className}`} viewBox="0 0 100 252" role="img" aria-label={abbr}>
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0"><stop offset="0" stopColor="#000" stopOpacity=".42" /><stop offset=".26" stopColor="#fff" stopOpacity=".3" /><stop offset=".42" stopColor="#fff" stopOpacity="0" /><stop offset=".78" stopColor="#000" stopOpacity=".1" /><stop offset="1" stopColor="#000" stopOpacity=".45" /></linearGradient>
      </defs>
      <ellipse cx="50" cy="246" rx="38" ry="5" fill="#000" opacity=".22" />
      {shape !== "can" && <><rect x="38" y={capY} width="24" height="17" rx="3" fill={shape === "water" ? "#1d6fb0" : "#1c1c24"} /><rect x="38" y={capY} width="24" height="17" rx="3" fill={`url(#${id})`} /></>}
      <path d={body} fill={color} /><path d={body} fill={`url(#${id})`} />
      {shape === "can" && <><ellipse cx="50" cy="40" rx="22" ry="4" fill="#fff" opacity=".35" /><ellipse cx="50" cy="232" rx="22" ry="4" fill="#000" opacity=".2" /></>}
      <rect x="23" y="112" width="54" height="74" fill="#fff" opacity=".95" /><rect x="23" y="112" width="54" height="8" fill={color} opacity=".85" /><rect x="23" y="178" width="54" height="8" fill={color} opacity=".85" />
      <rect x="23" y="112" width="54" height="74" fill={`url(#${id})`} />
      <text x="50" y="156" textAnchor="middle" fontSize="13" fontWeight="800" fill={color}>{abbr}</text>
      <path d="M32 96v108" stroke="#fff" strokeOpacity=".5" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
