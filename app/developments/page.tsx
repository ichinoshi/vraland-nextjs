"use client";

import HeroSection from "@/components/sections/developments/HeroSection";
import FairfieldSection from "@/components/sections/developments/FairfieldSection";
import SoteraSection from "@/components/sections/developments/SoteraSection";
import LazuleSection from "@/components/sections/developments/LazuleSection";

const heroData = {
  title: "Our Developments",
  description:
    "Discover our portfolio of exceptional residential and commercial developments, each designed to enhance your lifestyle and investment potential.",
  image: "/images/developments/hero-bg.jpg",
};

export default function DevelopmentsPage() {

  return (
    <div className="bg-background-primary">
      <HeroSection
        title={heroData.title}
        description={heroData.description}
        image={heroData.image}
      />
      <FairfieldSection />
      <SoteraSection />
      <LazuleSection />
    </div>
  );
}
