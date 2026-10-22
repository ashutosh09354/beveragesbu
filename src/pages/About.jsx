import React from "react";
import PageHero from "../components/PageHero";
import PartnershipCTA from "../components/PartnershipCTA";

const warehouseImage = "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1400&q=85";

export default function About() {
  return <>
    <PageHero eyebrow="ABOUT AQUAMAX / 02" title={<>A partner in the<br />journey to market.</>} text="A corporate identity concept for a beverage distribution business connecting products, partners, and markets." image={warehouseImage} />
    <section className="section"><div className="container story-grid"><div><span className="eyebrow">OUR POINT OF VIEW</span><h2>Distribution is the connection between a great product and its market.</h2></div><div><p className="large-copy">We bring a business-first perspective to beverage distribution: thoughtful coordination, strong commercial relationships, and an operational approach designed around the needs of customers and partners.</p><p className="muted-copy">This is placeholder company copy. Replace it with your real company history, capabilities, and approved corporate messaging.</p></div></div></section>
    <section className="values-band"><div className="container values-grid"><div><span>01</span><h3>Commercial focus</h3><p>Understand the needs of each market and customer.</p></div><div><span>02</span><h3>Operational discipline</h3><p>Coordinate the details that keep products moving.</p></div><div><span>03</span><h3>Long-term partnerships</h3><p>Build relationships that support sustainable business.</p></div></div></section>
    <PartnershipCTA />
  </>;
}