import React from "react";

export default function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="page-hero" style={{ "--page-image": `url("${image}")` }}>
      <div className="page-hero-bg" />
      <div className="container page-hero-content">
        <span className="eyebrow light-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}