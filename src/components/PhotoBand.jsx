import React from "react";
import { photos } from "../data";

export default function PhotoBand({ keys = ["warehouse", "logistics", "cola", "water"] }) {
  return <section className="section tight"><div className="container photo-band">{keys.map(k => <div key={k} style={{ backgroundImage: photos[k] }} role="img" aria-label={`${k} photo`} />)}</div></section>;
}
