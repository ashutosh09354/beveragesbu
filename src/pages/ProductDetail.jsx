import React from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { products } from "../data";
import Bottle from "../components/Bottle";
import { ProductCard } from "./Portfolio";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const { slug } = useParams();
  const p = products.find(x => x.slug === slug);
  if (!p) return <NotFound />;
  const related = products.filter(x => x.slug !== p.slug && x.category === p.category).concat(products.filter(x => x.category !== p.category)).slice(0, 4);
  const rows = [["Brand", p.brand], ["Category", p.category], ["Available sizes", p.sizes], ["Packaging", "Bottle / Case / Pallet"], ["Manufacturer", "To be confirmed with the brand owner"]];
  return <>
    <div className="container"><nav className="crumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><Link to="/portfolio">Portfolio</Link><ChevronRight size={13} /><span>{p.name}</span></nav></div>
    <section className="container detail">
      <div className="detail-art" style={{ "--tint": p.color }}><Bottle shape={p.shape} color={p.color} abbr={p.abbr} /></div>
      <div className="detail-info">
        <h1>{p.name}</h1><strong className="detail-cat">{p.category}</strong>
        <p>{p.name} is available through our distribution network in multiple pack sizes for retail, HoReCa and institutional supply.</p>
        <table className="spec"><tbody>{rows.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table>
        <div className="btn-row"><Link to="/contact" className="btn btn-primary">Request a Quote</Link><Link to="/contact" className="btn btn-outline">Enquire Now</Link></div>
      </div>
    </section>
    <section className="section"><div className="container"><div className="sec-head"><h2>Related Products</h2></div><div className="p-grid four">{related.map(r => <ProductCard key={r.slug} p={r} />)}</div></div></section>
  </>;
}
