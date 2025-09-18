"use client";

import HeroSection from "@/components/sections/virtual-tour/HeroSection";
import VirtualTourSection from "@/components/sections/virtual-tour/VirtualTourSection";
import FeaturesSection from "@/components/sections/virtual-tour/FeaturesSection";

const heroData = {
  title: "Virtual Tours",
  description:
    "Take immersive virtual tours of our premium developments from the comfort of your home. Explore every detail with our cutting-edge 360° technology.",
  image: "/images/virtual-tour/hero-bg.jpg",
};

export default function VirtualTourPage() {
  return (
    <div className="bg-background-primary" suppressHydrationWarning>
      {/* Hero Section */}
      <HeroSection
        title={heroData.title}
        description={heroData.description}
        image={heroData.image}
      />

      {/* Virtual Tour Gallery */}
      <VirtualTourSection />

      {/* Features Section */}
      <FeaturesSection />
    </div>
  );
}
