import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2200&q=90";

export default function Hero() {
  return (
    <section className="hero" id="top" style={{ "--hero-image": `url("${heroImage}")` }}>
      <div className="hero-shade" />
      <div className="container hero-content">
        <span className="eyebrow light-eyebrow"><span className="eyebrow-dot" /> BEVERAGE DISTRIBUTION & SUPPLY CHAIN</span>
        <h1>Moving brands.<br /><em>Connecting markets.</em></h1>
        <p className="hero-copy">A distribution partner built around beverage portfolios, operational discipline, and the movement of products from source to market.</p>
        <div className="hero-actions"><Link to="/portfolio" className="btn btn-primary">Explore our portfolio <ArrowUpRight size={17} /></Link><Link to="/contact" className="btn btn-glass">Start a conversation <ArrowRight size={17} /></Link></div>
        <div className="hero-foot"><span><span className="pulse" /> CORPORATE DISTRIBUTION</span><span>01 / COMPANY OVERVIEW</span></div>
      </div>
    </section>
  );
}