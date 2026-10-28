import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";
import { categories } from "../data";
import Bottle from "./Bottle";
import { Pic } from "./Scenes";

const keys = ["cat-cola", "cat-juice", "cat-water", "cat-energy", "cat-mixers", "cat-other"];

export default function PortfolioTeaser() {
  return <section className="h-sec"><div className="container">
    <div className="h-head-row"><div><span className="h-eyebrow">Our beverage products</span><h2>A Wide Range of Beverage Brands</h2><p className="h-lead">From carbonated soft drinks to juices, packaged water and energy drinks, we distribute products that people love and trust.</p></div>
      <Link to="/products" className="h-link">View All Categories <ArrowRight size={14} /></Link></div>
    <div className="h-cats">{categories.map((c, i) => <Link to="/products" className="h-cat" key={c.name}>
      <Pic name={keys[i]} className="h-cat-art"><div className="h-cat-bottles" style={{ "--tint": c.colors[1] }}>{c.shapes.map((s, j) => <Bottle key={j} shape={s} color={c.colors[j]} />)}</div></Pic>
      <span>{c.short}</span><i><Plus size={14} /></i>
    </Link>)}</div>
  </div></section>;
}
