"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/developments/HeroSection";
import FairfieldSection from "@/components/sections/developments/FairfieldSection";
import SoteraSection from "@/components/sections/developments/SoteraSection";
import LazuleSection from "@/components/sections/developments/LazuleSection";
import WhyChooseUsSection from "@/components/sections/developments/WhyChooseUsSection";
import { developmentsData } from "@/lib/developmentsData";

const statusColors = {
  "Pre-Launch": "bg-yellow-500",
  "Under Construction": "bg-blue-500",
  "Design Phase": "bg-gray-500",
};

const heroData = {
  title: "Our Developments",
  description:
    "Discover our portfolio of exceptional residential and commercial developments, each designed to enhance your lifestyle and investment potential.",
  image: "/images/developments/hero-bg.jpg",
};

const developments = developmentsData.map((dev) => ({
  id: dev.id,
  name: dev.name,
  location: dev.location,
  image: dev.heroImage,
  status: dev.status,
  units: 150, // Default value
  startingPrice: "₱2.5M", // Default value
  description: dev.description,
}));

export default function DevelopmentsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

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
