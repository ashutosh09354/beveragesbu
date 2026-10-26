import React, { useState } from "react";
import { CheckCircle2, Mail, Phone, MapPin, ArrowUpRight, Building2, Clock3 } from "lucide-react";
import PageHero from "../components/PageHero";

const heroImage = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2200&q=90";
const initialForm = {name:"",company:"",type:"Distributor / wholesaler",email:"",phone:"",city:"",state:"",message:""};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);
  const update = event => setForm(current => ({...current,[event.target.name]:event.target.value}));
  const [status, setStatus] = useState("");
  const submit = async event => {
    event.preventDefault(); setStatus("sending");
    const url = import.meta.env.VITE_FORM_ENDPOINT;
    if (!url) { const body = Object.entries(form).map(([k, v]) => `${k}: ${v}`).join("\n"); window.location.href = `mailto:hello@example.com?subject=${encodeURIComponent("Business enquiry from " + form.company)}&body=${encodeURIComponent(body)}`; setStatus(""); setSubmitted(true); return; }
    try { const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(form) }); if (!r.ok) throw new Error(); setStatus(""); setSubmitted(true); }
    catch { setStatus("error"); }
  };

  return <>
    <PageHero eyebrow="Business enquiry" title={<>Let's start a<br />business conversation.</>} text="Tell us about your supply requirements, distribution opportunity, or partnership enquiry." image={heroImage} />
    <section className="section contact-section"><div className="container contact-grid">
      <div className="contact-aside"><span className="eyebrow">Get in touch</span><h2>Good business<br />starts with a<br /><em>conversation.</em></h2><p>Share a few details and our team can understand the nature of your enquiry.</p>
        <div className="contact-detail"><Mail size={18}/><div><small>EMAIL</small><b>hello@example.com</b></div></div><div className="contact-detail"><Phone size={18}/><div><small>PHONE</small><b>+91 00000 00000</b></div></div><div className="contact-detail"><MapPin size={18}/><div><small>OFFICE</small><b>Add verified office address</b></div></div><p className="muted-copy tiny">Replies are sent to the business email you provide.</p>
        <div className="contact-visual" aria-hidden="true"><div className="contact-orb" /><div className="contact-visual-card"><Building2 size={28}/><b>Pan-India supply</b><small>Brands, products &amp; distribution</small></div><div className="contact-visual-pill"><Clock3 size={16}/><span>We respond within one business day</span></div></div>
      </div>
      <form className="enquiry-form" onSubmit={submit}>
        <div className="form-head"><span className="eyebrow">Business enquiry</span><span>Fields marked * are required</span></div>
        {submitted ? <div className="form-success"><CheckCircle2 size={36}/><h3>Thank you for reaching out.</h3><p>Our team will review your enquiry and reply by email.</p><button type="button" className="btn btn-primary" onClick={()=>{setSubmitted(false);setForm(initialForm);}}>Submit another enquiry</button></div> : <>
          <div className="form-row"><label>Full name *<input required name="name" value={form.name} onChange={update} placeholder="Your name"/></label><label>Company name *<input required name="company" value={form.company} onChange={update} placeholder="Business name"/></label></div>
          <label>Enquiry type *<select name="type" value={form.type} onChange={update}><option>Distributor / wholesaler</option><option>Manufacturer partnership</option><option>Retail / institutional supply</option><option>General enquiry</option></select></label>
          <div className="form-row"><label>Business email *<input required type="email" name="email" value={form.email} onChange={update} placeholder="name@company.com"/></label><label>Phone number *<input required name="phone" value={form.phone} onChange={update} placeholder="+91"/></label></div>
          <div className="form-row"><label>City<input name="city" value={form.city} onChange={update} placeholder="City"/></label><label>State<input name="state" value={form.state} onChange={update} placeholder="State"/></label></div>
          <label>Tell us about your requirements *<textarea required name="message" value={form.message} onChange={update} rows="4" placeholder="Products, volumes, locations, or partnership details..."/></label>
          {status==="error"&&<p role="alert" className="form-error">Could not send. Please try again or email us directly.</p>}<button className="btn btn-primary submit-btn" type="submit" disabled={status==="sending"}>{status==="sending"?"Sending…":"Submit enquiry"} <ArrowUpRight size={17}/></button>
        </>}
      </form>
    </div></section>
  </>;
}
