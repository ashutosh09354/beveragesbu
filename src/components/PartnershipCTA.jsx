import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PartnershipCTA() {
  return <section className="container"><div className="cta-band"><div><h2>Let’s build stronger partnerships</h2><p>Have a supply requirement or a distribution opportunity? Start a conversation with our team.</p></div><Link to="/contact" className="btn btn-primary">Make a business enquiry <ArrowRight size={16} /></Link></div></section>;
}
