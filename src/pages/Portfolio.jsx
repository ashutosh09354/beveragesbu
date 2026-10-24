import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { categories, products, brands } from "../data";
import PageHero from "../components/PageHero";
import Bottle from "../components/Bottle";
import PartnershipCTA from "../components/PartnershipCTA";
import bottles from "../assets/coldrinkbottle.png";

export function ProductCard({ p }) {
  return <Link to={`/portfolio/${p.slug}`} className="p-card"><div className="p-art"><Bottle shape={p.shape} color={p.color} abbr={p.abbr} /></div><h3>{p.name}</h3><small>{p.category}</small><small>{p.sizes}</small><span className="text-link">View Details <ArrowRight size={14} /></span></Link>;
}

export default function Portfolio() {
  const [category, setCategory] = useState("All Products");
  const [brand, setBrand] = useState("All Brands");
  const [query, setQuery] = useState("");
  const list = useMemo(() => products.filter(p => (category === "All Products" || p.category === category) && (brand === "All Brands" || p.brand === brand) && `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase())), [category, brand, query]);
  const Side = ({ title, items, value, set }) => <div className="side-group"><h4>{title}</h4>{items.map(i => <button key={i} className={value === i ? "on" : ""} onClick={() => set(i)}>{i}</button>)}</div>;

  return <>
    <PageHero eyebrow="Our portfolio" title="A Wide Range of Beverage Brands" text="From leading manufacturers to emerging brands, we deliver quality beverages across India." image={bottles} />
    <section className="section"><div className="container">
      <div className="filter-bar">
        <label className="searchbox"><Search size={16} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products, brands or categories…" /></label>
        <select value={category} onChange={e => setCategory(e.target.value)} aria-label="Category">{["All Products", ...categories.map(c => c.name)].map(c => <option key={c}>{c}</option>)}</select>
        <select value={brand} onChange={e => setBrand(e.target.value)} aria-label="Brand">{["All Brands", ...brands].map(b => <option key={b}>{b}</option>)}</select>
      </div>
      <div className="catalog">
        <aside className="side"><Side title="Categories" items={["All Products", ...categories.map(c => c.name)]} value={category} set={setCategory} /><Side title="Brands" items={["All Brands", ...brands]} value={brand} set={setBrand} /></aside>
        {list.length ? <div className="p-grid">{list.map(p => <ProductCard key={p.slug} p={p} />)}</div>
          : <div className="empty"><h3>No products found</h3><p>Try a different search, or clear the filters.</p><button className="btn btn-primary" onClick={() => { setQuery(""); setCategory("All Products"); setBrand("All Brands"); }}>Show all products</button></div>}
      </div>
      <p className="note">Range varies by market. Speak with our team to confirm local availability and pack sizes.</p>
    </div></section>
    <PartnershipCTA />
  </>;
}
