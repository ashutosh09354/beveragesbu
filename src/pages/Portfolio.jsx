import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { categories, products, brands } from "../data";
import PageHero from "../components/PageHero";
import Bottle from "../components/Bottle";
import PartnershipCTA from "../components/PartnershipCTA";
import bottles from "../assets/coldrinkbottle.png";

const cocaColaImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVS9b9UIFGcTUg_M1lJOwm2khn2wbfPl4gkx_ER-v9Q&s";
const pepsiImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_CBABuknbJK8AQM3Z37yvX0YXtlN3umc3QwTd2Cj2qA&s=10";
const spriteImage = "https://images.fastcompany.com/image/upload/f_webp,q_auto,c_fit,w_1024/wp-cms-2/2026/03/i-5-91510415-Design-Sprite-brand-refresh.jpg";
const fantaImage = "https://assets.turbologo.com/blog/en/2020/02/19084623/Fanta-logo.png";
const tropicanaImage = "https://logos-world.net/wp-content/uploads/2022/05/Tropicana-Logo.png";
const bisleriImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3z8phvuUf-1_yWtfROU0rOQ3Zff7GmE4mE8-EkhOpq2VbiJOcrK1oTx8&s=10";
const redBullImage = "https://i.pinimg.com/474x/d1/81/01/d18101bec6d74702c2464d512d71672c.jpg";
const mountainDewImage = "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Mountain_Dew_2025_logo.svg/1280px-Mountain_Dew_2025_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail";
const thumsUpImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgVrF19z7Bk476pNg1q9VU9Cy-ASE9BSwq7Eo6-bl5OdL0m_bSJGP-yrL&s=10";
const cocaColaZeroImage = "https://upload.wikimedia.org/wikipedia/commons/f/fb/Coke_Zero_2021.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original";
const schweppesImage = "https://schweppes.ca/wp-content/uploads/2021/01/OG_1200x630.jpg";
const mixedFruitImage = "https://mir-s3-cdn-cf.behance.net/projects/404/0ae040256930979.6acaa5e33b3c1.jpg";
const productImages = { "Coca-Cola": cocaColaImage, Pepsi: pepsiImage, Sprite: spriteImage, Fanta: fantaImage, Tropicana: tropicanaImage, Bisleri: bisleriImage, "Red Bull": redBullImage, "Mountain Dew": mountainDewImage, "Thums Up": thumsUpImage, "Coca-Cola Zero": cocaColaZeroImage, "Schweppes Tonic": schweppesImage, "Mixed Fruit Drink": mixedFruitImage };

export const getProductImage = product => productImages[product.name];

export function ProductCard({ p }) {
  const productImage = getProductImage(p);
  return <Link to={`/products/${p.slug}`} className="p-card"><div className="p-art" style={{ "--tint": p.color }}>{productImage ? <img className="p-product-image" src={productImage} alt={`${p.name} beverage`} /> : <Bottle shape={p.shape} color={p.color} abbr={p.abbr} />}</div><h3>{p.name}</h3><small>{p.category}</small><small>{p.sizes}</small><span className="text-link">View Details <ArrowRight size={14} /></span></Link>;
}

export default function Portfolio() {
  const [category, setCategory] = useState("All Products");
  const [brand, setBrand] = useState("All Brands");
  const [query, setQuery] = useState("");
  const list = useMemo(() => products.filter(p => (category === "All Products" || p.category === category) && (brand === "All Brands" || p.brand === brand) && `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase())), [category, brand, query]);
  const Side = ({ title, items, value, set }) => <div className="side-group"><h4>{title}</h4>{items.map(i => <button key={i} className={value === i ? "on" : ""} onClick={() => set(i)}>{i}</button>)}</div>;

  return <>
    <PageHero eyebrow="Our products" title="A Wide Range of Beverage Brands" text="From leading manufacturers to emerging brands, we deliver quality beverages across India." image={bottles} />
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
