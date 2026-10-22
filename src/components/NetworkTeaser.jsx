import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import indiaOutline from "../assets/india-outline.svg";

export default function NetworkTeaser() {
  return (
    <section className="network-section"><div className="container network-layout">
      <div><span className="eyebrow light-eyebrow">03 / DISTRIBUTION NETWORK</span><h2>Local understanding.<br /><em>National perspective.</em></h2><p>Designed for a business operating across multiple markets, with a focus on dependable coordination between suppliers, distribution partners, and customers.</p><Link to="/network" className="btn btn-light">Explore our network <ArrowUpRight size={16} /></Link></div>
      <div className="network-visual"><div className="network-grid-bg" /><img className="india-map network-india-map" src={indiaOutline} alt="Outline map of India" /><span className="network-map-caption">INDIA DISTRIBUTION NETWORK</span></div>
    </div></section>
  );
}
