import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import PartnershipCTA from "../components/PartnershipCTA";
import indiaOutline from "../assets/india-outline.svg";
import { stats } from "../data";

const img = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85";
const regions = ["North India", "West India", "East India", "South India"];

export default function Network() {
  return <>
    <PageHero eyebrow="Distribution network" title="Our Pan-India Presence" text="A growing network to serve businesses across India, ensuring wide availability and reliable supply." image={img} />
    <section className="section"><div className="container net-grid">
      <div className="card map-card"><img src={indiaOutline} alt="Outline map of India" /></div>
      <div className="stat-list">{stats.map(([v, l]) => <div className="card" key={l}><b>{v}</b><small>{l}</small></div>)}</div>
    </div></section>
    <section className="section tight"><div className="container"><div className="sec-head"><h2>Key Regions</h2></div>
      <div className="region-grid">{regions.map(r => <Link to="/contact" className="region" key={r}><span>{r}</span><ArrowRight size={16} /></Link>)}</div></div></section>
    <PartnershipCTA />
  </>;
}
