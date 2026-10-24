import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "../data";
import Bottle from "./Bottle";

export default function PortfolioTeaser() {
  return <section className="section"><div className="container">
    <div className="sec-head"><h2>Our Beverage Portfolio</h2><Link to="/portfolio" className="text-link">View all products <ArrowRight size={15} /></Link></div>
    <div className="cat-grid">{categories.map(c => <Link to="/portfolio" className="cat-tile" key={c.name}>
      <div className="cat-art">{c.shapes.map((s, i) => <Bottle key={i} shape={s} color={c.colors[i]} />)}</div>
      <span>{c.short}</span><i><ArrowRight size={15} /></i>
    </Link>)}</div>
  </div></section>;
}
