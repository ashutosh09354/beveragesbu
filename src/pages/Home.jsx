import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Plus, IndianRupee, MapPinned, Handshake, Warehouse, ShieldCheck, Network as NetIcon, Settings, Gem, Truck, Boxes, Headset, MapPin, Search, Package, Store, ShoppingBag } from "lucide-react";
import PartnershipCTA from "../components/PartnershipCTA";
import Bottle from "../components/Bottle";
import { getProductImage } from "./Portfolio";
import { Pic, WorkerArt, ForkliftArt, ConveyorArt, SegmentArt } from "../components/Scenes";
import indiaOutline from "../assets/india-outline.svg";
import retailSegmentImage from "../assets/photos/seg-retail.jpg";
import horecaSegmentImage from "../assets/photos/seg-horeca.jpg";
import institutionsSegmentImage from "../assets/photos/seg-institutions.jpg";
import distributorsSegmentImage from "../assets/photos/seg-distributors.jpg";
import eventsSegmentImage from "../assets/photos/seg-events.jpg";
import { stats, popular, partnerBrands, aboutPoints, homeWhy, homeProcess, homeRegions, careList, segments, homeFaqs, mapPins } from "../data";

const statIcons = [MapPinned, Handshake, Warehouse];
const aboutIcons = [ShieldCheck, NetIcon, Settings, Handshake];
const whyIcons = [Gem, Truck, Boxes, Headset];
const procIcons = [Search, Warehouse, Truck, Store];
const statLabels = [["28+", "States Served", "(Pan-India)"], ["100+", "Distribution Partners", ""], ["15+", "Warehouse Locations", ""]];
// Keep route vertices tied to mapPins so every visible connection terminates at a location marker.
const mapRouteGroups = [
  [0, 1, 2, 3, 4, 7, 8, 11, 12, 13],
  [1, 6, 5, 9, 10, 11],
];
const heroSlides = [
  { src: "/herobg.png", alt: "Beverage distribution warehouse" },
  { src: "/coldrink.png", alt: "Assorted cold drink brands" },
  { src: "/coldrinkb.png", alt: "Beverage product collection" },
];
const heroProducts = [
  { src: "/coldrink.png", alt: "Assorted cold drink brands", name: "Beverage range", category: "Leading beverage brands", note: "A range made for every market", color: "#0b57d0", collection: true },
  { src: "/cocaCola.png", alt: "Coca-Cola bottles and can", name: "Cola", category: "Classic cola", note: "Original refreshment", color: "#d92831" },
  { src: "/fruitJuice.png", alt: "Fruit beverage bottle", name: "Fruit beverage", category: "Fruit refreshment", note: "Bright flavour for every occasion", color: "#f58220" },
  { src: "/sprite.png", alt: "Sprite bottles and can", name: "Lemon-lime soda", category: "Lemon-lime", note: "Crisp, clean refreshment", color: "#18a957" },
  { src: "/bisleri.png", alt: "Bisleri packaged drinking water bottles", name: "Packaged water", category: "Packaged water", note: "Pure everyday hydration", color: "#318bd6", wide: true },
];
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const homeRef = useRef(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const backgroundSlides = gsap.utils.toArray(".h-hero-slide");
    if (backgroundSlides.length > 1) {
      const setActiveHeroSlide = (index) => {
        backgroundSlides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === index));
        homeRef.current?.classList.toggle("has-hero-copy", index === 0);
      };
      setActiveHeroSlide(0);
      gsap.set(backgroundSlides.slice(1), { autoAlpha: 0 });
      const heroSlider = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });
      backgroundSlides.forEach((slide, index) => {
        const nextIndex = (index + 1) % backgroundSlides.length;
        const nextSlide = backgroundSlides[nextIndex];
        heroSlider
          .to({}, { duration: 4.5 })
          .to(slide, { autoAlpha: 0, scale: 1.03, duration: 0.85, ease: "power2.inOut" })
          .fromTo(nextSlide, { autoAlpha: 0, scale: 1 }, { autoAlpha: 1, scale: 1.015, duration: 0.85, ease: "power2.inOut", onStart: () => setActiveHeroSlide(nextIndex) }, "<");
      });
    }

    const productSlides = gsap.utils.toArray(".h-hero-product-slide");
    const productDots = gsap.utils.toArray(".h-product-dot");
    const setActiveProduct = (index) => productDots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
    if (productSlides.length > 1) {
      gsap.set(productSlides, { autoAlpha: 0, y: 90, scale: 0.92 });
      gsap.set(productSlides[0], { autoAlpha: 1, y: 0, scale: 1 });
      setActiveProduct(0);
      const productShowcase = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });
      productSlides.forEach((slide, index) => {
        const nextIndex = (index + 1) % productSlides.length;
        productShowcase
          .to(slide, { autoAlpha: 1, duration: 2.4 })
          .to(slide, { autoAlpha: 0, y: -24, scale: 1.02, duration: 0.48, ease: "power2.in" })
          .fromTo(productSlides[nextIndex], { autoAlpha: 0, y: 88, scale: 0.92 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out", onStart: () => setActiveProduct(nextIndex) });
      });
    }

    const scrollTrack = homeRef.current?.querySelector(".h-scroll-truck-track");
    const scrollTruck = homeRef.current?.querySelector(".h-scroll-truck-vehicle");
    const scrollIndicator = scrollTrack && scrollTruck ? ScrollTrigger.create({
      trigger: homeRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => gsap.set(scrollTruck, {
        y: self.progress * Math.max(0, scrollTrack.clientHeight - scrollTruck.clientHeight),
      }),
    }) : null;

    gsap.to(".h-hero-clouds .h-cloud-one", { x: 48, duration: 18, ease: "sine.inOut", repeat: -1, yoyo: true });
    gsap.to(".h-hero-clouds .h-cloud-two", { x: -38, duration: 22, ease: "sine.inOut", repeat: -1, yoyo: true });
    gsap.fromTo(".h-road-streaks", { x: -60, autoAlpha: 0.35 }, { x: 90, autoAlpha: 0.85, duration: 1.8, ease: "none", repeat: -1, yoyo: true });

    const mm = gsap.matchMedia();
    mm.add("(min-width: 701px)", () => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".h-hero-copy .h-eyebrow", { y: 18, autoAlpha: 0, duration: 0.55 })
        .from(".h-hero-title-line", { y: 34, autoAlpha: 0, stagger: 0.12, duration: 0.72 }, "-=0.25")
        .from(".h-hero-copy > p", { y: 18, autoAlpha: 0, duration: 0.6 }, "-=0.42")
        .from(".h-btns .btn", { y: 14, autoAlpha: 0, stagger: 0.12, duration: 0.5 }, "-=0.3")
        .from(".h-hero-trust > div", { y: 14, autoAlpha: 0, stagger: 0.09, duration: 0.48 }, "-=0.2")
        .from(".h-hero-product-reveal", { y: 50, scale: 0.94, autoAlpha: 0, duration: 0.8 }, "-=0.35");

      gsap.from(".h-about > div:first-child > *", {
        y: 22, autoAlpha: 0, stagger: 0.08, duration: 0.65, ease: "power2.out",
        scrollTrigger: { trigger: ".h-about", start: "top 78%", once: true },
      });
      gsap.from(".h-about-pics img, .h-badge", {
        y: 26, autoAlpha: 0, stagger: 0.14, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".h-about-pics", start: "top 80%", once: true },
      });
      gsap.from(".h-prod", {
        y: 32, autoAlpha: 0, scale: 0.97, stagger: 0.07, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".h-prods", start: "top 84%", once: true },
      });
      gsap.from(".h-why-card", {
        x: 22, autoAlpha: 0, stagger: 0.1, duration: 0.65, ease: "power2.out",
        scrollTrigger: { trigger: ".h-why-grid", start: "top 82%", once: true },
      });

      const process = gsap.timeline({
        scrollTrigger: { trigger: ".h-process", start: "top 72%", once: true },
        defaults: { ease: "power3.out" },
      });
      process.from(".h-process-in > div", { x: -24, autoAlpha: 0, duration: 0.7 })
        .from(".h-route-line", { scaleX: 0, transformOrigin: "left center", duration: 0.85 }, "-=0.25")
        .from(".h-steps li", { y: 28, autoAlpha: 0, stagger: 0.16, duration: 0.65 }, "-=0.55");

      gsap.from(".h-net > div:first-child > *", {
        x: -18, autoAlpha: 0, stagger: 0.08, duration: 0.6,
        scrollTrigger: { trigger: ".h-net", start: "top 78%", once: true },
      });
      gsap.from(".h-regions > div", {
        x: 22, autoAlpha: 0, stagger: 0.12, duration: 0.6,
        scrollTrigger: { trigger: ".h-regions", start: "top 82%", once: true },
      });
      gsap.from(".h-seg", {
        y: 22, autoAlpha: 0, stagger: 0.07, duration: 0.55,
        scrollTrigger: { trigger: ".h-segs", start: "top 84%", once: true },
      });

      gsap.to(".h-map-route", {
        strokeDashoffset: 0,
        duration: 2.2,
        ease: "power2.inOut",
        scrollTrigger: { trigger: ".h-map", start: "top 78%", once: true },
      });
      gsap.fromTo(".h-map .pin", { scale: 0, transformOrigin: "center center" }, {
        scale: 1, stagger: 0.07, duration: 0.35, ease: "back.out(2)",
        scrollTrigger: { trigger: ".h-map", start: "top 78%", once: true },
      });
      gsap.to(".h-map .pin", { boxShadow: "0 0 0 8px rgba(11,87,208,0.03)", duration: 1.2, stagger: 0.12, repeat: -1, yoyo: true, ease: "sine.inOut" });
    });

    mm.add("(max-width: 700px)", () => {
      gsap.from(".h-hero-copy > *", { y: 18, autoAlpha: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" });
      gsap.from(".h-prod", {
        y: 18, autoAlpha: 0, stagger: 0.06, duration: 0.45, ease: "power2.out",
        scrollTrigger: { trigger: ".h-prods", start: "top 90%", once: true },
      });
      gsap.from(".h-steps li", {
        y: 18, autoAlpha: 0, stagger: 0.08, duration: 0.5, ease: "power2.out",
        scrollTrigger: { trigger: ".h-process", start: "top 88%", once: true },
      });
    });

    return () => { scrollIndicator?.kill(); mm.revert(); };
  }, { scope: homeRef });

  return <div ref={homeRef} className="home-motion-root has-hero-copy">
    <aside className="h-scroll-truck" aria-hidden="true">
      <div className="h-scroll-truck-track"><span className="h-scroll-truck-vehicle"><Truck size={18} strokeWidth={2} /></span></div>
    </aside>
    <section className="h-hero">
      <div className="h-hero-slider" aria-label="Beverage distribution highlights">
        {heroSlides.map((slide, index) => <img key={slide.src} className={`h-hero-slide${index === 0 ? " is-active" : ""}`} src={slide.src} alt={slide.alt} />)}
      </div>
      <div className="container h-hero-copy">
        <span className="h-eyebrow center"><Truck size={24} strokeWidth={2.2} />Beverage distribution &amp; supply chain</span>
        <h1><span className="h-hero-title-line">Moving Brands.</span><em className="h-hero-title-line">Connecting Markets.</em></h1>
        <p>Reliable distribution, efficient supply chain and strong market presence for leading beverage brands across India.</p>
        <div className="h-btns"><Link to="/products" className="btn btn-primary">Explore Our Products <ArrowRight size={14} /></Link><Link to="/contact" className="btn btn-white">Business Enquiry <ArrowRight size={14} /></Link></div>
        <div className="h-hero-trust" aria-label="Our strengths">
          <div><ShieldCheck size={34} strokeWidth={1.8} /><span>Trusted<br />Distribution</span></div>
          <div><Truck size={34} strokeWidth={1.8} /><span>Pan-India<br />Network</span></div>
          <div><Handshake size={34} strokeWidth={1.8} /><span>Strong<br />Partnerships</span></div>
        </div>
      </div>
      {false && <div className="h-hero-product-reveal" aria-label="A rotating showcase of beverage varieties">
        {heroProducts.map((product, index) => (
          <div className={`h-hero-product-slide${index === 0 ? " is-first" : ""}${product.wide ? " is-wide" : ""}${product.collection ? " is-collection" : ""}${product.narrow ? " is-narrow" : ""}${product.large ? " is-large" : ""}`} style={{ "--product-glow": product.color }} key={product.name}>
            <span className="h-product-glow" style={{ "--product-glow": product.color }} aria-hidden="true" />
            <div className="h-hero-product-frame">
              <img className="h-hero-product-image" src={product.src} alt={product.alt} />
            </div>
            <span className="h-product-caption"><b>{product.name}</b><small>{product.category}</small></span>
            <div className="h-product-info"><b>{product.name}</b><span>{product.note}</span><small>{product.category}</small></div>
          </div>
        ))}
        <div className="h-product-selectors" aria-label="Featured beverage selector">{heroProducts.map((product, index) => <span key={product.name} className={`h-product-dot${index === 0 ? " is-active" : ""}`} aria-hidden="true" />)}</div>
        <span className="h-product-stage-label"><i /> Beverage range <b>01 — 06</b></span>
      </div>}
    </section>

    <div className="container"><div className="h-stats">{statLabels.map(([v, l, s], i) => { const I = statIcons[i]; return <div key={l}><I size={34} strokeWidth={1.5} /><span><b>{v}</b><small>{l}{s && <><br />{s}</>}</small></span></div>; })}</div></div>

    <div className="container"><div className="h-brands"><span className="h-brands-label">Our Partner Brands</span>
      <div className="h-brands-window"><div className="h-brands-track"><div className="h-brands-list">{partnerBrands.map(([n, c]) => <span key={n} className={`wm ${c}`}>{n}</span>)}<span className="wm wm-more">and many more…</span></div><div className="h-brands-list" aria-hidden="true">{partnerBrands.map(([n, c]) => <span key={`copy-${n}`} className={`wm ${c}`}>{n}</span>)}<span className="wm wm-more">and many more…</span></div></div></div></div></div>

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
      <div className="h-steps-wrap"><span className="h-route-line" aria-hidden="true" /><ol className="h-steps">{homeProcess.map(([t, d], i) => { const I = procIcons[i]; return <li key={t}><span className={`h-ico solid c${i}`}><I size={22} /></span><h4>{t}</h4><p>{d}</p>{i < 3 && <ArrowRight className="h-step-arrow" size={16} />}</li>; })}</ol></div>
    </div></section>

    <section className="h-sec"><div className="container h-net">
      <div>
        <span className="h-eyebrow">Our network</span><h2>Local presence, national reach.</h2>
        <p className="h-lead">A growing distribution network to serve businesses across India, ensuring wide availability and consistent supply.</p>
        <div className="h-net-stats">{[[MapPin, "28+", "States Served"], [Handshake, "100+", "Distribution Partners"], [Warehouse, "15+", "Warehouse Locations"], [Store, "7", "Regional Offices"]].map(([I, v, l]) => <div key={l}><I size={26} strokeWidth={1.6} /><span><b>{v}</b><small>{l}</small></span></div>)}</div>
        <Link to="/network" className="btn btn-primary">Explore Our Network <ArrowRight size={14} /></Link>
      </div>
      <div className="h-map"><img src={indiaOutline} alt="Map of India showing our distribution reach" /><svg className="h-map-routes" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{mapRouteGroups.map((route, index) => <polyline key={index} className={`h-map-route${index ? " secondary" : ""}`} points={route.map(pinIndex => mapPins[pinIndex].slice(0, 2).join(",")).join(" ")} />)}</svg>{mapPins.map(([x, y, c], i) => <i key={i} className={`pin ${c}`} style={{ left: `${x}%`, top: `${y}%` }} />)}</div>
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
      <div className="h-segs">{segments.map(([t, d, k, p]) => <div className="h-seg" key={t}>{k === "retail" ? <img className="pic h-seg-pic" src={retailSegmentImage} alt="Beverages displayed in a retail store" loading="lazy" /> : k === "horeca" ? <img className="pic h-seg-pic" src={horecaSegmentImage} alt="Hotel facade" loading="lazy" /> : k === "inst" ? <img className="pic h-seg-pic" src={institutionsSegmentImage} alt="Institutional building" loading="lazy" /> : k === "dist" ? <img className="pic h-seg-pic" src={distributorsSegmentImage} alt="Beverage distribution" loading="lazy" /> : k === "events" ? <img className="pic h-seg-pic" src={eventsSegmentImage} alt="Event venue" loading="lazy" /> : <Pic name={p} className="h-seg-pic"><SegmentArt kind={k} /></Pic>}<b>{t}</b><small>{d}</small></div>)}</div>
    </div></section>

    <section className="h-sec h-tight"><div className="container h-faq">
      <div><span className="h-eyebrow">FAQ</span><h2 className="h-h2s">Questions we hear most</h2><p className="h-lead">Quick answers to common questions about our distribution, supply and partnership process.</p><Link to="/contact" className="btn btn-primary btn-sm">View All FAQs <ArrowRight size={13} /></Link></div>
      <div className="h-faq-list">{homeFaqs.map(([q, a]) => <details key={q}><summary>{q}<Plus size={16} /></summary><p>{a}</p></details>)}</div>
    </div></section>

    <PartnershipCTA />
  </div>;
}
