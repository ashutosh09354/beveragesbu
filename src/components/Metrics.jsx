import React from "react";
import { metrics } from "../data";

export default function Metrics() {
  return (
    <section className="metrics"><div className="container metrics-grid">
      {metrics.map((metric, index) => <div className="metric" key={metric.label}><span className="metric-index">0{index + 1}</span><strong>{metric.value}</strong><span className="metric-label">{metric.label}</span><small>{metric.note}</small></div>)}
    </div></section>
  );
}