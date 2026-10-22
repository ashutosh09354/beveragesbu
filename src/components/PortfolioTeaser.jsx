import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "../data";
import SectionIntro from "./SectionIntro";

export default function PortfolioTeaser() {
  return (
    <section className="section portfolio-section"><div className="container">
      <SectionIntro eyebrow="01 / THE PORTFOLIO" title={<>A varied world<br />of beverages.</>} text="A multi-brand approach designed to support the needs of different channels, occasions, and markets." link="Explore all categories" />
      <div className="category-grid">{categories.map((category, index) => <Link to="/portfolio" className={`category-card category-${index + 1}`} key={category.name}>
        <img src={category.image} alt={category.name} loading="lazy" /><span className="category-number">{category.count}</span><div className="category-overlay" /><div className="category-info"><span>{category.short}</span><h3>{category.name}</h3><ArrowUpRight size={19} /></div>
      </Link>)}</div>
    </div></section>
  );
}