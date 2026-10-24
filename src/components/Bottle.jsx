import React from "react";

// Original vector pack-shots, so the site needs no product photography to render.
export default function Bottle({ shape = "bottle", color = "#d62a22", abbr = "", className = "" }) {
  const body = {
    bottle: "M42 22h16v22c0 14 20 18 20 42v128a16 16 0 0 1-16 16H38a16 16 0 0 1-16-16V86c0-24 20-28 20-42z",
    water: "M42 40h16v18c0 10 18 14 18 34v118a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V92c0-20 18-24 18-34z",
    tall: "M40 20h20v26c0 12 14 16 14 36v136a16 16 0 0 1-16 16H42a16 16 0 0 1-16-16V82c0-20 14-24 14-36z",
    can: "M28 40c0-6 44-6 44 0v176c0 8-44 8-44 0z"
  }[shape];
  return (
    <svg className={`bottle ${className}`} viewBox="0 0 100 244" role="img" aria-label={abbr}>
      {shape !== "can" && <rect x="39" y={shape === "water" ? 28 : 8} width="22" height="16" rx="3" fill={shape === "water" ? "#2b8fd6" : "#1c1c24"} />}
      <path d={body} fill={color} />
      <rect x="22" y="118" width="56" height="62" fill="#fff" opacity=".93" />
      <text x="50" y="154" textAnchor="middle" fontSize="13" fontWeight="800" fill={color}>{abbr}</text>
      <path d="M34 90v120" stroke="#fff" strokeOpacity=".35" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
