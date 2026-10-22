import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Network, ArrowUpRight } from "lucide-react";

const links = [
  ["About", "/about"],
  ["Products", "/portfolio"],
  ["Operations", "/operations"],
  ["Our Network", "/network"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="header">
      <div className="container nav-wrap">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark"><Network size={19} /></span>
          <span>AQUAMAX<span className="logo-sub">BEVERAGE DISTRIBUTION</span></span>
        </Link>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, path]) => (
            <Link key={path} className={location.pathname === path ? "active" : ""} to={path} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>Business enquiry <ArrowUpRight size={15} /></Link>
        </nav>
      </div>
    </header>
  );
}
