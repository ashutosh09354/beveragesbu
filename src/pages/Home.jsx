import React from "react";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import PortfolioTeaser from "../components/PortfolioTeaser";
import OperationsTeaser from "../components/OperationsTeaser";
import NetworkTeaser from "../components/NetworkTeaser";
import PartnershipCTA from "../components/PartnershipCTA";

export default function Home() {
  return <><Hero /><Metrics /><PortfolioTeaser /><OperationsTeaser /><NetworkTeaser /><PartnershipCTA /></>;
}