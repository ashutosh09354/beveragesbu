import React from "react";
import { Link } from "react-router-dom";
import { Network, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="logo light"><span className="logo-mark"><Network size={19} /></span><span>BEVERAGES<span className="logo-sub">BEVERAGE DISTRIBUTION</span></span></Link>
          <p>Connecting beverage portfolios with markets through distribution and supply-chain capabilities.</p>
        </div>
        <div><span className="footer-label">Explore</span><Link to="/about">About us</Link><Link to="/portfolio">Our portfolio</Link><Link to="/operations">Operations</Link><Link to="/network">Our network</Link></div>
        <div><span className="footer-label">Business</span><Link to="/contact">Business enquiry</Link><a href="mailto:hello@example.com">Email the team</a><a href="#top">Back to top ↑</a></div>
        <div><span className="footer-label">Contact</span><p className="footer-contact"><Mail size={15} /> hello@example.com</p><p className="footer-contact"><Phone size={15} /> +91 00000 00000</p><p className="footer-small">Replace demo contact details before publishing.</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Beverages. Demo brand identity.</span><span>Privacy · Terms · Accessibility</span></div>
    </footer>
  );
}
