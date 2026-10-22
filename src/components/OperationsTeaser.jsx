import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const warehouseImage = "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1400&q=85";

export default function OperationsTeaser() {
  const steps = [
    ["01", "Source & coordinate", "Supplier relationships and purchasing coordination."],
    ["02", "Store & manage", "Warehouse and inventory operations."],
    ["03", "Distribute & connect", "Moving products to business customers."]
  ];
  return (
    <section className="operations-teaser">
      <div className="ops-photo" style={{ backgroundImage: `url("${warehouseImage}")` }}><span className="image-caption">SUPPLY CHAIN / OPERATIONS</span></div>
      <div className="ops-content"><span className="eyebrow">02 / HOW WE OPERATE</span><h2>Built to move<br /><em>business forward.</em></h2><p>Distribution is more than transportation. It is the coordination of products, inventory, people, and delivery across a complex network.</p>
        <div className="ops-list">{steps.map(([number, title, text]) => <div key={number}><span>{number}</span><div><b>{title}</b><small>{text}</small></div><ArrowUpRight size={17} /></div>)}</div>
        <Link to="/operations" className="text-link">Explore our operations <ArrowUpRight size={16} /></Link>
      </div>
    </section>
  );
}