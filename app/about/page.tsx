"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/sections/about/HeroSection";
import MissionVisionSection from "@/components/sections/about/MissionVisionSection";
import OurStorySection from "@/components/sections/about/OurStorySection";
import ValuesSection from "@/components/sections/about/ValuesSection";
import CTASection from "@/components/sections/about/CTASection";
import PartnersSection from "@/components/sections/about/PartnersSection";


export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2009;

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-background-primary">
      {/* Hero Section */}
      <HeroSection yearsOfExperience={yearsOfExperience} />

      {/* Mission & Vision */}
      <MissionVisionSection />

      {/* Our Story Section */}
      <OurStorySection />

      {/* Values Section */}
      <ValuesSection />

      {/* Enhanced CTA Section */}
      <CTASection />

      {/* Our Partners Section */}
      <PartnersSection />
    </div>
  );
}
