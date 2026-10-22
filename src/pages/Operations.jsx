import React from "react";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import PartnershipCTA from "../components/PartnershipCTA";

const truckImage = "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85";
const warehouseImage = "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1400&q=85";
const steps = [
  ["01", "Source & coordinate", "Coordinate supplier relationships, product requirements, and purchasing workflows."],
  ["02", "Store & manage", "Manage goods, warehouse processes, and inventory visibility across operations."],
  ["03", "Plan & distribute", "Coordinate orders, dispatches, transport, and regional delivery partners."],
  ["04", "Serve & improve", "Support business customers and use operational insights to improve service."]
];

export default function Operations() {
  return <>
    <PageHero eyebrow="OPERATIONS / 03" title={<>Every connection<br />counts.</>} text="A clear view of the processes that connect suppliers, inventory, distribution, and business customers." image={truckImage} />
    <section className="section"><div className="container"><SectionIntro eyebrow="OUR OPERATING MODEL" title={<>From source<br />to destination.</>} text="A modular overview of supply-chain capabilities. Adapt each stage to the services your company actually provides." /><div className="process-list">{steps.map(([number,title,text])=><div className="process-item" key={number}><span className="process-num">{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={19}/></div>)}</div></div></section>
    <section className="ops-image-band"><img src={warehouseImage} alt="Warehouse operations" loading="lazy" /><div><span className="eyebrow light-eyebrow">OPERATIONAL PERSPECTIVE</span><h2>Capability is built<br />in the details.</h2><p>From product handling to dispatch coordination, reliable operations depend on clear processes and capable teams.</p></div></section>
    <PartnershipCTA />
  </>;
}