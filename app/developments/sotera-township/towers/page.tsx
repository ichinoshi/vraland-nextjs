"use client";

import HeroSection from "@/components/sections/developments/sotera-township/properties/sotera-towers/HeroSection";
import KeyFeaturesSection from "@/components/sections/developments/sotera-township/properties/sotera-towers/KeyFeaturesSection";
import OverviewSection from "@/components/sections/developments/sotera-township/properties/sotera-towers/OverviewSection";
import GallerySection from "@/components/sections/developments/sotera-township/properties/sotera-towers/GallerySection";

const soteraTowersData = {
  name: "Sotera Towers",
  location: "Sotera Township, Salong, Calapan City",
  description:
    "Premium residential towers offering modern urban living with comprehensive amenities, stunning views, and integrated township lifestyle.",
  longDescription:
    "Sotera Towers represent the pinnacle of residential living within Sotera Township, featuring multiple high-rise towers that offer residents a sophisticated urban lifestyle. Each tower is designed with contemporary architecture and premium finishes, providing spacious units with panoramic views of the township and surrounding landscape. Residents enjoy exclusive access to world-class amenities including swimming pools, fitness centers, sky gardens, and direct connectivity to the township's commercial and hospitality facilities.",
  heroImage: "/images/developments/sotera/towers/hero.jpg",
  images: [
    {
      id: "towers-1",
      src: "/images/developments/sotera/towers/hero.jpg",
      alt: "Sotera Towers Exterior",
      category: "exterior",
    },
    {
      id: "towers-2",
      src: "/images/developments/sotera/towers/condo-1.jpg",
      alt: "Grand Lobby",
      category: "interior",
    },
    {
      id: "towers-3",
      src: "/images/developments/sotera/towers/condo-2.jpg",
      alt: "Premium Unit Living Room",
      category: "interior",
    },
    {
      id: "towers-4",
      src: "/images/developments/sotera/towers/condo-3.jpg",
      alt: "Swimming Pool Deck",
      category: "amenities",
    },
  ],
  features: [
    {
      icon: "BuildingOfficeIcon",
      title: "Modern Architecture",
      description:
        "Contemporary tower design with premium materials and finishes",
    },
    {
      icon: "HomeIcon",
      title: "Spacious Units",
      description: "Thoughtfully designed living spaces with panoramic views",
    },
    {
      icon: "SunIcon",
      title: "Premium Amenities",
      description: "Resort-style facilities and exclusive resident services",
    },
    {
      icon: "MapPinIcon",
      title: "Township Integration",
      description: "Seamless access to shopping, dining, and entertainment",
    },
  ],
  specifications: {
    totalUnits: "-",
    towers: "-",
    parking: "-",
    elevators: "-",
    completion: "-",
    turnover: "-",
  },
};

export default function SoteraTowersPage() {
  return (
    <div className="bg-background-primary">
      <HeroSection
        name={soteraTowersData.name}
        location={soteraTowersData.location}
        description={soteraTowersData.description}
        heroImage={soteraTowersData.heroImage}
      />

      <KeyFeaturesSection features={soteraTowersData.features} />

      <OverviewSection
        name={soteraTowersData.name}
        longDescription={soteraTowersData.longDescription}
        overviewImage={soteraTowersData.images[0]?.src}
        specifications={soteraTowersData.specifications}
      />

      <GallerySection images={soteraTowersData.images} />
    </div>
  );
}
