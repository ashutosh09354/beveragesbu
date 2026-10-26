import React from "react";
import LegalPage from "../components/LegalPage";

export default function Privacy() {
  return <LegalPage eyebrow="LEGAL / PRIVACY" title="Privacy policy" intro="How we collect, use, and protect information shared with XYZ Beverages." updated="October 23, 2026" image="https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=1800&q=85">
    <h2>Information we collect</h2><p>We collect the information you choose to send through our enquiry form, such as your name, company, email address, phone number, and message. We may also collect limited technical information, including browser type and pages visited, to keep this website reliable and improve it.</p>
    <h2>How we use your information</h2><p>We use your information to respond to enquiries, discuss potential business relationships, operate our website, and meet legal or regulatory obligations. We do not sell personal information.</p>
    <h2>Sharing and retention</h2><p>Information is shared only with service providers and business partners where needed to support these purposes, or where required by law. We retain it only for as long as necessary for the purpose it was collected.</p>
    <h2>Your choices</h2><p>You may request access to, correction of, or deletion of personal information we hold about you, subject to applicable law. To make a request, contact us at <a href="mailto:hello@example.com">hello@example.com</a>.</p>
  </LegalPage>;
}
