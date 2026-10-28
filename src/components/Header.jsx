import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search, ArrowRight } from "lucide-react";

const links = [["Home", "/"], ["About Us", "/about"], ["Our Products", "/products"], ["Operations", "/operations"], ["Network", "/network"], ["Resources", "/news"], ["Contact", "/contact"]];

export function Logo({ light }) {
  return <Link to="/" className={`logo ${light ? "light" : ""}`} aria-label="XYZ Beverages home"><span className="logo-word"><b>XYZ</b><small>BEVERAGES</small></span></Link>;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container nav-wrap">
        <Logo />
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="Main">
          {links.map(([label, path]) => <NavLink key={path} to={path} end={path === "/"} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <Link to="/contact" className="btn btn-primary btn-sm nav-cta mobile-only" onClick={() => setOpen(false)}>Business Enquiry <ArrowRight size={14} /></Link>
        </nav>
        <Link to="/products" className="icon-btn search-btn" aria-label="Search products"><Search size={18} /></Link>
        <Link to="/contact" className="btn btn-primary btn-sm desk-only">Business Enquiry <ArrowRight size={14} /></Link>
        <button className="icon-btn mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
