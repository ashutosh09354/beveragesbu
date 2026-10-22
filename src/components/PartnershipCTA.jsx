import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function PartnershipCTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div><span className="eyebrow">LET'S WORK TOGETHER</span><h2>Good partnerships<br />move markets.</h2><p>Have a supply requirement or a distribution opportunity? Let's start a conversation.</p></div>
        <Link to="/contact" className="btn btn-primary btn-large">Make a business enquiry <ArrowUpRight size={18} /></Link>
      </div>
    </section>
  );
}