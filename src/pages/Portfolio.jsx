import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight, ShieldCheck, Sparkles, SlidersHorizontal, PackageCheck } from "lucide-react";
import { categories, products } from "../data";
import PageHero from "../components/PageHero";
import PartnershipCTA from "../components/PartnershipCTA";

const pageImage = "https://images.unsplash.com/photo-1532634896-26909d0d4b0b?auto=format&fit=crop&w=2000&q=85";

export default function Portfolio() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const filters = ["All", ...categories.map(item => item.name)];
  const filtered = useMemo(() => products.filter(product =>
    (category === "All" || product.category === category) &&
    `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(query.toLowerCase())
  ), [category, query]);
  const displayedProducts = filtered.slice(0, 1);

  return <>
    <PageHero eyebrow="PRODUCTS / 01" title={<>Refreshment for every<br /><em>kind of moment.</em></>} text="A considered selection of beverages, pack formats, and categories designed to move with the needs of every market." image={pageImage} />
    <section className="section products-catalog"><div className="container">
      <div className="catalog-heading"><div><span className="eyebrow"><Sparkles size={13} /> DISCOVER THE RANGE</span><h2>Made for the shelf.<br /><em>Chosen for the moment.</em></h2></div><p>From everyday favourites to high-energy occasions, explore a flexible beverage range built around what customers reach for next.</p></div>
      <div className="catalog-panel"><div className="catalog-tools"><label className="searchbox"><Search size={18} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Find a product or category" /></label><span className="result-count"><PackageCheck size={15} /> {displayedProducts.length} sample product</span></div>
      <div className="filter-row"><span className="filter-label"><SlidersHorizontal size={14} /> Browse by</span>{filters.map(item => <button key={item} onClick={() => setCategory(item)} className={`filter-chip ${category === item ? "selected" : ""}`}>{item}</button>)}</div></div>
      {displayedProducts.length ? <div className="product-grid">{displayedProducts.map((product, index) => <article className="product-card" key={product.name}><div className="product-image"><img src={product.image} alt={product.name} loading="lazy" /><span className="product-no">{String(index + 1).padStart(2, "0")}</span><span className="product-category image-category">{product.category}</span></div><div className="product-body"><span className="product-kicker">AVAILABLE IN SELECT PACKS</span><h3>{product.name}</h3><p>{product.brand}</p><div className="product-bottom"><span>{product.pack}</span><Link to="/contact" aria-label={`Enquire about ${product.name}`}><ArrowUpRight size={18} /></Link></div></div></article>)}</div> : <div className="empty-products"><Search size={24} /><h3>No products found</h3><p>Try a different search or return to the full range.</p><button className="btn btn-primary" onClick={() => { setQuery(""); setCategory("All"); }}>Show all products</button></div>}
      <div className="catalog-note"><ShieldCheck size={18} /><p>Our product range is tailored to individual markets. Speak with our team to confirm local availability, pack sizes, and partnership opportunities.</p></div>
    </div></section><PartnershipCTA />
  </>;
}
