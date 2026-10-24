import React from "react";
import { Target, Eye, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import PartnershipCTA from "../components/PartnershipCTA";

const img = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85";
const pillars = [[Target, "Our Mission", "To deliver leading beverage brands to every corner of India with reliability and excellence."], [Eye, "Our Vision", "To be the most trusted and preferred beverage distribution partner in the country."], [Users, "Our Values", "Integrity, reliability, customer focus and sustainable growth."]];
const journey = [["Foundation", "Started with a vision to build a strong distribution network."], ["Expansion", "Extended operations across multiple states in India."], ["Partnerships", "Collaborated with leading beverage manufacturers and brands."], ["Growth", "Continuing to strengthen our network and services across new markets."]];

export default function About() {
  return <>
    <PageHero eyebrow="About us" title="A Trusted Partner in Beverage Distribution" text="We connect leading beverage brands with businesses across India through a strong distribution network, efficient operations and a commitment to quality and service." image={img} />
    <section className="section"><div className="container card-trio">{pillars.map(([Icon, t, d]) => <div className="card icon-card" key={t}><Icon size={30} strokeWidth={1.5} /><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></section>
    <section className="section tight"><div className="container"><div className="sec-head"><h2>Our Journey</h2></div>
      <ol className="journey">{journey.map(([t, d], i) => <li className="card" key={t}><b>{String(i + 1).padStart(2, "0")}</b><h3>{t}</h3><p>{d}</p></li>)}</ol></div></section>
    <PartnershipCTA />
  </>;
}
