import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "./Header";

const quick = [["Home", "/"], ["About Us", "/about"], ["Our Products", "/products"], ["Operations", "/operations"], ["Network", "/network"], ["Contact", "/contact"]];
const port = ["Carbonated Soft Drinks", "Fruit Juices & Fruit Drinks", "Packaged Drinking Water", "Energy Drinks", "Sodas & Mixers", "Other Beverages"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand"><Logo light /><p>Reliable distribution and supply chain for leading beverage brands across India.</p>
          <div className="social">{[[Facebook, "Facebook"], [Instagram, "Instagram"], [Linkedin, "LinkedIn"], [Youtube, "YouTube"]].map(([I, n]) => <a key={n} href="#" aria-label={n}><I size={16} /></a>)}</div></div>
        <div><span className="footer-label">Quick Links</span>{quick.map(([l, p]) => <Link key={l} to={p}>{l}</Link>)}</div>
        <div><span className="footer-label">Our Products</span>{port.map(l => <Link key={l} to="/products">{l}</Link>)}</div>
        <div><span className="footer-label">Resources</span><Link to="/news">FAQ</Link><Link to="/downloads">Downloads</Link><Link to="/news">News &amp; Updates</Link></div>
        <div><span className="footer-label">Contact Us</span>
          <p className="footer-contact"><MapPin size={15} /> Delhi, India (Head Office)</p>
          <p className="footer-contact"><Phone size={15} /> +91 11 4567 8900</p>
          <p className="footer-contact"><Mail size={15} /> enquiry@xyzbeverages.in</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} XYZ Beverages. All rights reserved.</span><nav aria-label="Legal"><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms &amp; Conditions</Link><Link to="/accessibility">Accessibility</Link></nav></div>
    </footer>
  );
}
