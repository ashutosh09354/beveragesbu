import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

const links = [["Home", "/"], ["About Us", "/about"], ["Our Portfolio", "/portfolio"], ["Operations", "/operations"], ["Network", "/network"], ["Contact", "/contact"]];

export function Logo({ light }) {
  return <Link to="/" className={`logo ${light ? "light" : ""}`}><span>Aqua<b>Max</b></span></Link>;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container nav-wrap">
        <Logo />
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="Main">
          {links.map(([label, path]) => <NavLink key={path} to={path} end={path === "/"} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <Link to="/contact" className="btn btn-primary btn-sm nav-cta" onClick={() => setOpen(false)}>Business Enquiry</Link>
        </nav>
        <button className="icon-btn mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
