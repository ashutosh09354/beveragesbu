import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return <section className="section"><div className="container"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>That page isn't on the map.</h1><Link className="btn btn-primary" to="/">Return home <ArrowRight size={16}/></Link></div></section>;
}