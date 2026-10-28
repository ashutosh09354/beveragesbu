import React from "react";
import { Package, Warehouse, Truck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import PhotoBand from "../components/PhotoBand";
import PartnershipCTA from "../components/PartnershipCTA";

const img = "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=85";
const steps = [[Package, "Source", "Partnering with leading manufacturers for a consistent supply."], [Warehouse, "Store", "Modern warehouse operations with efficient inventory management."], [Truck, "Distribute", "Pan-India logistics with reliable transport partners."], [Users, "Connect", "Serving distributors, retailers and institutions across India."]];
const areas = ["Warehousing", "Transportation", "Inventory Management", "Market Distribution"];

export default function Operations() {
  return <>
    <PageHero eyebrow="Operations" title="From Source to Market" text="Efficient supply-chain operations ensuring product availability, quality and timely distribution across India." image={img} />
    <section className="section"><div className="container"><div className="sec-head"><h2>Our Supply Chain Process</h2></div>
      <ol className="steps">{steps.map(([Icon, t, d], i) => <li className="card" key={t}><span className="step-no">{i + 1}</span><Icon size={26} strokeWidth={1.5} /><h3>{t}</h3><p>{d}</p></li>)}</ol>
      <div className="tiles">{areas.map(a => <div key={a} className="tile">{a}</div>)}</div></div></section>
    <PhotoBand />
    <PartnershipCTA />
  </>;
}
