import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PartnershipCTA() {
  return <section className="h-cta"><div className="container h-cta-in">
    <img className="pic h-cta-pic" src="https://pnghunter.com/get-logo.php?id=32919" alt="Partnership brand logo" loading="lazy" />
    <div className="h-cta-text"><h2>Let’s build stronger partnerships.</h2><p>Connect with our team to explore distribution opportunities and grow together.</p></div>
    <Link to="/contact" className="btn btn-white">Business Enquiry <ArrowRight size={15} /></Link>
  </div></section>;
}
