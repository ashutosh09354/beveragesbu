import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Download, MapPin, Search, Briefcase } from "lucide-react";
import PageHero from "../components/PageHero";
import PartnershipCTA from "../components/PartnershipCTA";
import { articles, cases, jobs, docs, depots, photos } from "../data";

const tabs = [["News & insights", "/news"], ["Case studies", "/case-studies"], ["Gallery", "/gallery"], ["Downloads", "/downloads"], ["Careers", "/careers"], ["Locations", "/locations"]];
function Shell({ eyebrow, title, text, image, children }) {
  return <>
    <PageHero eyebrow={eyebrow} title={title} text={text} image={image} />
    <div className="container"><nav className="subtabs" aria-label="Resources">{tabs.map(([l, p]) => <NavLink key={p} to={p}>{l}</NavLink>)}</nav></div>
    <section className="section tight"><div className="container">{children}</div></section>
    <PartnershipCTA />
  </>;
}
const Photo = ({ src, className = "" }) => <div className={`ph ${className}`} style={{ backgroundImage: src }} />;

export const News = () => <Shell eyebrow="News & insights" title="Practical guides for beverage businesses" text="Short, useful reads on stocking, storage and selling." image={photos.cola}>
  <div className="p-grid">{articles.map(([t, tag, d, img]) => <article className="post" key={t}><Photo src={img} /><div><span className="tag">{tag}</span><h3>{t}</h3><p>{d}</p></div></article>)}</div></Shell>;

export const Cases = () => <Shell eyebrow="Case studies" title="How we plan supply for different customers" text="Illustrative scenarios showing our approach by channel." image={photos.logistics}>
  <div className="case-list">{cases.map(([t, tag, a, b, img]) => <article className="card case" key={t}><Photo src={img} /><div><span className="tag">{tag}</span><h3>{t}</h3><p>{a}</p><p>{b}</p><Link to="/contact" className="text-link">Discuss your requirement <ArrowRight size={14} /></Link></div></article>)}</div>
  <p className="note">These are illustrative scenarios, not client testimonials. Replace them with approved, named case studies when available.</p></Shell>;

export const Gallery = () => {
  const items = [["Warehouse", photos.warehouse], ["Delivery fleet", photos.logistics], ["Carbonated drinks", photos.cola], ["Packaged water", photos.water], ["Juices", photos.juice], ["Energy drinks", photos.energy]];
  return <Shell eyebrow="Gallery" title="Inside our operations" text="Warehouses, vehicles and the products we move every day." image={photos.warehouse}>
    <div className="gallery">{items.map(([c, s]) => <figure key={c}><Photo src={s} /><figcaption>{c}</figcaption></figure>)}</div></Shell>;
};

export const Downloads = () => <Shell eyebrow="Downloads" title="Brochures and documents" text="Request any document and we will send the latest version." image={photos.logistics}>
  <div className="doc-list">{docs.map(([t, d]) => <div className="card doc" key={t}><Download size={22} /><div><h3>{t}</h3><p>{d}</p></div><Link to="/contact" className="btn btn-outline btn-sm">Request</Link></div>)}</div></Shell>;

export const Careers = () => <Shell eyebrow="Careers" title="Build your career in beverage distribution" text="Join a growing team that keeps markets supplied." image={photos.warehouse}>
  <div className="job-list">{jobs.map(([t, dept, loc, type]) => <div className="card job" key={t}><Briefcase size={20} /><div><h3>{t}</h3><small>{dept} · {loc} · {type}</small></div><a className="btn btn-primary btn-sm" href={`mailto:careers@example.com?subject=Application: ${encodeURIComponent(t)}`}>Apply</a></div>)}</div>
  <p className="note">Listed roles are examples. Update them to match current openings.</p></Shell>;

export const Locations = () => {
  const [q, setQ] = useState(""); const [zone, setZone] = useState("All");
  const zones = ["All", ...new Set(depots.map(d => d[1]))];
  const list = depots.filter(([c, z]) => (zone === "All" || z === zone) && c.toLowerCase().includes(q.toLowerCase()));
  return <Shell eyebrow="Locations" title="Find a distribution hub near you" text="Search by city to see where we operate." image={photos.logistics}>
    <div className="filter-bar loc"><label className="searchbox"><Search size={16} /><input value={q} onChange={e => setQ(e.target.value)} placeholder="Search city…" /></label><select value={zone} onChange={e => setZone(e.target.value)} aria-label="Zone">{zones.map(z => <option key={z}>{z}</option>)}</select></div>
    <div className="loc-grid">{list.map(([c, z]) => <div className="card loc-card" key={c}><MapPin size={20} /><div><h3>{c}</h3><small>{z} India · Address on request</small></div></div>)}</div>
    {!list.length && <p className="note">No hub listed for that search. <Link className="text-link" to="/contact">Ask about coverage</Link></p>}</Shell>;
};
