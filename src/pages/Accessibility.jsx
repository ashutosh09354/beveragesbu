import React from "react";
import LegalPage from "../components/LegalPage";

export default function Accessibility() {
  return <LegalPage eyebrow="LEGAL / ACCESSIBILITY" title="Accessibility" intro="Our commitment to making this website useful for as many people as possible." updated="October 23, 2026" image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=85">
    <h2>Our approach</h2><p>We are working to provide a website that is clear, usable, and compatible with a range of devices and assistive technologies. We consider readable content, keyboard navigation, meaningful structure, and colour contrast as we build and maintain the site.</p>
    <h2>Using the site</h2><p>You can navigate the main content using a keyboard, resize text with your browser settings, and use supported screen readers. We recommend keeping your browser and assistive technology up to date for the best experience.</p>
    <h2>Feedback and support</h2><p>If you have difficulty using any part of this website or need information in another format, email <a href="mailto:hello@example.com">hello@example.com</a>. Please include the page you were using and a brief description of the issue so we can help.</p>
  </LegalPage>;
}
