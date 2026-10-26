import React from "react";

export default function PageHero({ eyebrow, title, text, image, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-art" style={{ backgroundImage: (image.startsWith("url(") ? image : `url("${image}")`) }} />
      <div className="container page-hero-content"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p>{children}</div>
    </section>
  );
}
