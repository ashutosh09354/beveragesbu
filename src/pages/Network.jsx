import React from "react";
import PageHero from "../components/PageHero";
import PartnershipCTA from "../components/PartnershipCTA";
import indiaOutline from "../assets/india-outline.svg";

const truckImage = "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85";

export default function Network() {
  const regions = ["North India","West India","South India","East & Central India"];
  return <>
    <PageHero eyebrow="OUR NETWORK / 04" title={<>Connected by<br />distribution.</>} text="A scalable network concept for a business serving customers across diverse Indian markets." image={truckImage} />
    <section className="section"><div className="container network-page-grid"><div><span className="eyebrow">A NATIONAL PERSPECTIVE</span><h2>One network.<br />Many markets.</h2><p className="muted-copy">Use this section to show active service areas, regional teams, depots, and warehouses. Do not publish illustrative locations as operational facts.</p><div className="region-list">{regions.map((region,index)=><div key={region}><span>0{index+1}</span><b>{region}</b><span className="region-status">Coverage data required</span></div>)}</div></div><div className="network-map-large"><div className="map-grid" /><img className="india-map" src={indiaOutline} alt="Outline map of India" /><span className="map-legend"><i/> Illustrative network visualization</span></div></div></section>
    <PartnershipCTA />
  </>;
}
