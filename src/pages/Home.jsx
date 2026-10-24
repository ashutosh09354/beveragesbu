import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, IndianRupee, MapPinned, Handshake, Warehouse, ChevronLeft, ChevronRight } from "lucide-react";
import PortfolioTeaser from "../components/PortfolioTeaser";
import PartnershipCTA from "../components/PartnershipCTA";
import { stats } from "../data";

const icons = [IndianRupee, MapPinned, Handshake, Warehouse];

const slides = [
  {
    eyebrow: "Beverage distribution & supply chain",
    title: (
      <>
        Moving Brands.<br />Connecting Markets.
      </>
    ),
    text: "Integrated beverage distribution and supply-chain capabilities connecting leading beverage portfolios with businesses across India.",
    primary: { label: "Explore Our Portfolio", to: "/portfolio" },
    secondary: { label: "Business Enquiry", to: "/contact" },
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=85"
  },
  {
    eyebrow: "Pan-India Warehousing & Logistics",
    title: (
      <>
        Nationwide Reach.<br />Next-Day Reliability.
      </>
    ),
    text: "15+ strategically located temperature-controlled hubs ensuring seamless fulfillment and delivery across 28+ states.",
    primary: { label: "Our Operations", to: "/operations" },
    secondary: { label: "View Network", to: "/network" },
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85"
  },
  {
    eyebrow: "Trusted Beverage Partnerships",
    title: (
      <>
        Powering India's<br />Top Beverage Brands.
      </>
    ),
    text: "End-to-end distribution partner for leading carbonated drinks, juices, energy beverages, and packaged drinking water.",
    primary: { label: "Partner With Us", to: "/contact" },
    secondary: { label: "About AquaMax", to: "/about" },
    image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=1800&q=85"
  }
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrent(prev => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [paused, nextSlide]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <>
      <section
        className="hero"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-roledescription="carousel"
        aria-label="AquaMax highlights"
      >
        <div className="hero-photos" aria-hidden="true">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`hero-photo ${i === current ? "active" : ""}`}
              style={{ backgroundImage: `url("${s.image}")` }}
            />
          ))}
        </div>

        <div className="container hero-copy">
          <div className="hero-slides-track">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`hero-slide ${index === current ? "active" : ""}`}
                aria-hidden={index !== current}
              >
                <span className="eyebrow">{slide.eyebrow}</span>
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <div className="btn-row">
                  <Link
                    to={slide.primary.to}
                    className="btn btn-primary"
                    tabIndex={index === current ? 0 : -1}
                  >
                    {slide.primary.label} <ArrowRight size={16} />
                  </Link>
                  <Link
                    to={slide.secondary.to}
                    className="btn btn-outline"
                    tabIndex={index === current ? 0 : -1}
                  >
                    {slide.secondary.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-controls">
            <div className="hero-dots" role="tablist" aria-label="Hero slide navigation">
              {slides.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Slide ${i + 1} of ${slides.length}`}
                  className={`hero-dot ${i === current ? "active" : ""}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
            <span className="hero-slide-num">0{current + 1} / 0{slides.length}</span>
            <div className="hero-arrows">
              <button
                className="hero-arrow"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="hero-arrow"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="stats">
          {stats.map(([value, label], i) => {
            const Icon = icons[i];
            return (
              <div key={label}>
                <Icon size={28} strokeWidth={1.5} />
                <span>
                  <b>{value}</b>
                  <small>{label}</small>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <PortfolioTeaser />
      <PartnershipCTA />
    </>
  );
}
