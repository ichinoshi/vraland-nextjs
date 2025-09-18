"use client";

import HeroSection from "@/components/sections/contact/HeroSection";
import ContactInfoSection from "@/components/sections/contact/ContactInfoSection";
import MapSection from "@/components/sections/contact/MapSection";

export default function ContactPage() {
  return (
    <div className="bg-background-primary">
      {/* Hero Section */}
      <HeroSection />

      {/* Contact Info & Form Section */}
      <ContactInfoSection />

      {/* Map Section */}
      <MapSection />
    </div>
  );
}
