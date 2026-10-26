import React from "react";

export default function LegalPage({ eyebrow, title, intro, updated, image, children }) {
  return <>
    <section className="legal-hero" style={{ "--legal-image": (image.startsWith("url(") ? image : `url("${image}")`) }}><div className="container"><span className="eyebrow light-eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div></section>
    <section className="section"><div className="container legal-content"><p className="legal-updated">Last updated: {updated}</p>{children}</div></section>
  </>;
}
