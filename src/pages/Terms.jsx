import React from "react";
import LegalPage from "../components/LegalPage";

export default function Terms() {
  return <LegalPage eyebrow="LEGAL / TERMS" title="Terms of use" intro="The terms that apply when you access or use this website." updated="October 23, 2026" image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=85">
    <h2>Using this website</h2><p>You may use this website for lawful, personal, and business-information purposes. Please do not interfere with the website, attempt to gain unauthorised access, or use its content in a way that infringes the rights of others.</p>
    <h2>Information on this site</h2><p>We aim to keep information accurate and current, but it is provided for general guidance and may change without notice. Product availability, specifications, and commercial arrangements are subject to separate confirmation.</p>
    <h2>Intellectual property</h2><p>The website design, text, graphics, and brand elements are owned by or licensed to XYZ Beverages. You may not copy, reproduce, or distribute them without prior written permission.</p>
    <h2>Contact</h2><p>For questions about these terms or to discuss use of our materials, contact <a href="mailto:hello@example.com">hello@example.com</a>.</p>
  </LegalPage>;
}
