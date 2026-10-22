import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function SectionIntro({ eyebrow, title, text, link, to = "/portfolio", dark = false }) {
  return (
    <div className={`section-intro ${dark ? "on-dark" : ""}`}>
      <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
      <div className="intro-side"><p>{text}</p>{link && <Link className="text-link" to={to}>{link}<ArrowUpRight size={16} /></Link>}</div>
    </div>
  );
}