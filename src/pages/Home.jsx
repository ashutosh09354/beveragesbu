import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Plus, IndianRupee, MapPinned, Handshake, Warehouse, ShieldCheck, Network as NetIcon, Settings, Gem, Truck, Boxes, Headset, MapPin, Search, Package, Store, ShoppingBag } from "lucide-react";
import PartnershipCTA from "../components/PartnershipCTA";
import Bottle from "../components/Bottle";
import { getProductImage } from "./Portfolio";
import { Pic, HeroScene, WorkerArt, ForkliftArt, ConveyorArt, SegmentArt } from "../components/Scenes";
import bottles from "../assets/coldrinkbottle.png";
import indiaOutline from "../assets/india-outline.svg";
import { stats, popular, partnerBrands, aboutPoints, homeWhy, homeProcess, homeRegions, careList, segments, homeFaqs, mapPins } from "../data";

const statIcons = [MapPinned, Handshake, Warehouse];
const aboutIcons = [ShieldCheck, NetIcon, Settings, Handshake];
const whyIcons = [Gem, Truck, Boxes, Headset];
const procIcons = [Search, Warehouse, Truck, Store];
const statLabels = [["28+", "States Served", "(Pan-India)"], ["100+", "Distribution Partners", ""], ["15+", "Warehouse Locations", ""]];

export default function Home() {
  return <>
    <section className="h-hero">
      <Pic name="hero-bg" className="h-hero-pic"><HeroScene /></Pic>
      <div className="container h-hero-copy">
        <span className="h-eyebrow center">Beverage distribution &amp; supply chain</span>
        <h1>Moving Brands.<br /><em>Connecting Markets.</em></h1>
        <p>Reliable distribution, efficient supply chain and strong market presence for leading beverage brands across India.</p>
        <div className="h-btns"><Link to="/products" className="btn btn-primary">Explore Our Products <ArrowRight size={14} /></Link><Link to="/contact" className="btn btn-white">Business Enquiry <ArrowRight size={14} /></Link></div>
      </div>
      <img className="h-hero-bottles" src={bottles} alt="Carbonated drinks, juice and packaged water on ice" />
    </section>

    <div className="container"><div className="h-stats">{statLabels.map(([v, l, s], i) => { const I = statIcons[i]; return <div key={l}><I size={34} strokeWidth={1.5} /><span><b>{v}</b><small>{l}{s && <><br />{s}</>}</small></span></div>; })}</div></div>

    <div className="container"><div className="h-brands"><span className="h-brands-label">Our Partner Brands</span>
      <div className="h-brands-list">{partnerBrands.map(([n, c]) => <span key={n} className={`wm ${c}`}>{n}</span>)}<span className="wm wm-more">and many more…</span></div></div></div>

    <section className="h-sec"><div className="container h-about">
      <div>
        <span className="h-eyebrow">About XYZ Beverages</span>
        <h2>A distribution partner built around your shelf.</h2>
        <p className="h-lead">XYZ Beverages is a trusted distribution partner, connecting leading beverage brands with markets across India. Through a strong supply chain, efficient operations and a customer-first approach, we ensure quality products reach consumers everywhere.</p>
        <Link to="/about" className="btn btn-primary">Know More About Us <ArrowRight size={14} /></Link>
        <div className="h-about-icons">{aboutPoints.map(([t], i) => { const I = aboutIcons[i]; return <div key={t}><span><I size={26} strokeWidth={1.6} /></span><b>{t}</b></div>; })}</div>
      </div>
      <div className="h-about-pics">
        <span className="h-blob" aria-hidden="true" />
        <img className="pic h-pic-a" src="https://thumbs.dreamstime.com/b/cases-coca-cola-products-wholesale-store-cases-coca-cola-products-wholesale-store-merrillville-usa-july-395160868.jpg" alt="Cases of beverages in a wholesale store" loading="lazy" />
        <img className="pic h-pic-b" src="https://media.istockphoto.com/id/1455920286/photo/group-of-bottled-juice-beverage-product-in-cardboard-box-package-in-manufacturing-factory.jpg?s=612x612&w=0&k=20&c=Dr3l9PXWISh2QNIW0oJROyaQEsBSdAYNmM-1pSzMAKE=" alt="Bottled juice beverages in cardboard boxes at a manufacturing factory" loading="lazy" />
        <div className="h-badge"><Handshake size={20} /><span><b>15+</b><small>Years of Market Presence</small></span></div>
      </div>
    </div></section>

    <section className="h-sec h-tight"><div className="container">
      <div className="h-head-row slim"><h3 className="h-h3">Popular Products</h3><Link to="/products" className="h-link">View All Products <ArrowRight size={14} /></Link></div>
      <div className="h-prods">{popular.map(p => { const productImage = getProductImage(p); return <Link key={p.slug} to={`/products/${p.slug}`} className="h-prod">
        <div className="h-prod-art">{productImage ? <img className="h-product-image" src={productImage} alt={`${p.name} beverage`} /> : <Bottle shape="bottle" color={p.color} abbr={p.abbr} />}</div>
        <h4>{p.name}</h4><small>{p.category}</small><small>{p.sizes}</small><span className="h-link sm">View Details <ArrowRight size={12} /></span></Link>; })}</div>
    </div></section>

    <section className="h-sec"><div className="container h-why">
      <div><span className="h-eyebrow">Why XYZ Beverages</span><h2>Why businesses choose us</h2><p className="h-lead">We deliver more than products — we deliver reliable partnerships, operational excellence and nationwide reach.</p></div>
      <div className="h-why-grid">{homeWhy.map(([t, d], i) => { const I = whyIcons[i]; return <div className="h-why-card" key={t}><span className={`h-ico ${i % 2 ? "red" : ""}`}><I size={24} strokeWidth={1.6} /></span><div><h4>{t}</h4><p>{d}</p></div></div>; })}</div>
    </div></section>

    <section className="h-process"><div className="container h-process-in">
      <div><span className="h-eyebrow light">Our supply chain process</span><h2>From source to shelf in four steps</h2><p>A streamlined supply chain that ensures quality, availability and timely distribution across India.</p></div>
      <ol className="h-steps">{homeProcess.map(([t, d], i) => { const I = procIcons[i]; return <li key={t}><span className={`h-ico solid c${i}`}><I size={22} /></span><h4>{t}</h4><p>{d}</p>{i < 3 && <ArrowRight className="h-step-arrow" size={16} />}</li>; })}</ol>
    </div></section>

    <section className="h-sec"><div className="container h-net">
      <div>
        <span className="h-eyebrow">Our network</span><h2>Local presence, national reach.</h2>
        <p className="h-lead">A growing distribution network to serve businesses across India, ensuring wide availability and consistent supply.</p>
        <div className="h-net-stats">{[[MapPin, "28+", "States Served"], [Handshake, "100+", "Distribution Partners"], [Warehouse, "15+", "Warehouse Locations"], [Store, "7", "Regional Offices"]].map(([I, v, l]) => <div key={l}><I size={26} strokeWidth={1.6} /><span><b>{v}</b><small>{l}</small></span></div>)}</div>
        <Link to="/network" className="btn btn-primary">Explore Our Network <ArrowRight size={14} /></Link>
      </div>
      <div className="h-map"><img src={indiaOutline} alt="Map of India showing our distribution reach" />{mapPins.map(([x, y, c], i) => <i key={i} className={`pin ${c}`} style={{ left: `${x}%`, top: `${y}%` }} />)}</div>
      <div className="h-regions">{homeRegions.map(([r, d], i) => <div key={r}><MapPin size={18} className={i % 2 ? "b" : "r"} /><span><b>{r}</b><small>{d}</small></span></div>)}</div>
    </div></section>

    <section className="h-sec h-tight"><div className="container h-care">
      <img className="pic h-care-pic" src="https://sagaciresearch.com/wp-content/uploads/2023/04/Coca-Cola-in-Cameroon-feature.jpeg" alt="Coca-Cola beverage products" loading="lazy" />
      <div><span className="h-eyebrow">Quality &amp; handling</span><h2>Careful handling, product after product.</h2>
        <p className="h-lead">We ensure every product is stored, handled and delivered with care, maintaining its quality from our warehouse to your shelf.</p>
        <ul className="h-checks">{careList.map(t => <li key={t}><Check size={13} strokeWidth={3} />{t}</li>)}</ul></div>
    </div></section>

    <section className="h-sec h-tight"><div className="container">
      <div className="h-head-row slim"><div><span className="h-eyebrow">Supply that fits every channel</span><h2 className="h-h2s">Serving every market segment</h2><p className="h-lead">We cater to a wide range of customers, ensuring the right product reaches the right market.</p></div><Link to="/operations" className="h-link">Explore Our Operations <ArrowRight size={14} /></Link></div>
      <div className="h-segs">{segments.map(([t, d, k, p]) => <div className="h-seg" key={t}><Pic name={p} className="h-seg-pic"><SegmentArt kind={k} /></Pic><b>{t}</b><small>{d}</small></div>)}</div>
    </div></section>

    <section className="h-sec h-tight"><div className="container h-faq">
      <div><span className="h-eyebrow">FAQ</span><h2 className="h-h2s">Questions we hear most</h2><p className="h-lead">Quick answers to common questions about our distribution, supply and partnership process.</p><Link to="/contact" className="btn btn-primary btn-sm">View All FAQs <ArrowRight size={13} /></Link></div>
      <div className="h-faq-list">{homeFaqs.map(([q, a]) => <details key={q}><summary>{q}<Plus size={16} /></summary><p>{a}</p></details>)}</div>
    </div></section>

    <PartnershipCTA />
  </>;
}
