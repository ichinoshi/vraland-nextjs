"use client";

import HeroSection from "@/components/sections/developments/sotera-hills/HeroSection";
import KeyFeaturesSection from "@/components/sections/developments/sotera-hills/KeyFeaturesSection";
import OverviewSection from "@/components/sections/developments/sotera-hills/OverviewSection";
import GallerySection from "@/components/sections/developments/sotera-hills/GallerySection";

const soteraHillsData = {
  name: "Sotera Hills",
  location: "Sotera Township, Salong, Calapan City",
  description:
    "Exclusive hillside villas offering premium residential living with panoramic views, private gardens, and luxury amenities in a serene natural setting.",
  longDescription:
    "Sotera Hills represents the most exclusive residential offering within Sotera Township, featuring luxury villas nestled in the scenic hillside with breathtaking panoramic views of the township and surrounding landscape. Each villa is meticulously designed to blend seamlessly with the natural topography, offering residents privacy, tranquility, and unparalleled luxury. The development features winding pathways, lush landscaping, private gardens, and exclusive amenities that create a resort-like living experience while maintaining easy access to the township's commercial and hospitality facilities.",
  heroImage: "/images/developments/sotera/hills/hero.jpg",
  images: [
    {
      id: "hills-1",
      src: "/images/developments/sotera/hills/hero.jpg",
      alt: "Sotera Hills Hillside View",
    },
    {
      id: "hills-2",
      src: "/images/developments/sotera/hills/hills-1.jpg",
      alt: "Luxury Villa Exterior",
    },
    {
      id: "hills-3",
      src: "/images/developments/sotera/hills/hills-2.jpg",
      alt: "Villa Interior Living Space",
    },
    {
      id: "hills-4",
      src: "/images/developments/sotera/hills/hills-3.jpg",
      alt: "Private Garden",
    },
    {
      id: "hills-5",
      src: "/images/developments/sotera/hills/hills-4.jpg",
      alt: "Villa Infinity Pool",
    },
    {
      id: "hills-6",
      src: "/images/developments/sotera/hills/hills-5.jpg",
      alt: "Panoramic Township View",
    },
  ],
  features: [
    {
      icon: "BuildingOfficeIcon",
      title: "Luxury Villas",
      description:
        "Exclusive hillside villas with premium architecture and finishes",
    },
    {
      icon: "HomeIcon",
      title: "Private Living",
      description: "Spacious villas with private gardens and panoramic views",
    },
    {
      icon: "SunIcon",
      title: "Natural Setting",
      description:
        "Serene hillside location with lush landscaping and nature trails",
    },
    {
      icon: "MapPinIcon",
      title: "Exclusive Location",
      description: "Premium hillside position with stunning township views",
    },
  ],
  specifications: {
    totalVillas: "-",
    lotSizes: "-",
    elevation: "-",
    landscaping: "-",
    completion: "-",
    exclusivity: "-",
  },
};

export default function SoteraHillsPage() {
  return (
    <div className="bg-background-primary">
      <HeroSection
        name={soteraHillsData.name}
        location={soteraHillsData.location}
        description={soteraHillsData.description}
        heroImage={soteraHillsData.heroImage}
      />

      <KeyFeaturesSection features={soteraHillsData.features} />

      <OverviewSection
        name={soteraHillsData.name}
        longDescription={soteraHillsData.longDescription}
        overviewImage={soteraHillsData.images[0]?.src}
        specifications={soteraHillsData.specifications}
      />

      <GallerySection images={soteraHillsData.images} />
    </div>
  );
}
