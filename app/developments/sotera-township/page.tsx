"use client";

import HeroSection from "@/components/sections/developments/sotera-township/HeroSection";
import KeyFeaturesSection from "@/components/sections/developments/sotera-township/KeyFeaturesSection";
import OverviewSection from "@/components/sections/developments/sotera-township/OverviewSection";
import GallerySection from "@/components/sections/developments/sotera-township/GallerySection";
import MasterPlanSection from "@/components/sections/developments/sotera-township/MasterPlanSection";
import LocationSection from "@/components/sections/developments/sotera-township/LocationSection";
import FeaturedPropertiesSlider from "@/components/ui/FeaturedPropertiesSlider";
import { allSoteraProperties } from "@/lib/soteraPropertiesData";

const soteraData = {
  name: "Sotera Township",
  location: "Salong, Calapan City",
  description:
    "A complete lifestyle destination featuring residential towers, shopping mall, luxury hotel, fine dining restaurants, and scenic hills. Live, work, shop, and play all in one integrated community.",
  longDescription:
    "Sotera Township is an ambitious mixed-use development that redefines integrated living. This comprehensive township combines residential excellence with commercial vibrancy, creating a self-sustaining community where residents can live, work, shop, and play without leaving the development. The project features multiple residential towers, a world-class shopping mall, luxury hotel accommodations, and premium dining establishments, all set against the backdrop of scenic hills and meticulously landscaped grounds.",
  heroImage: "/images/developments/sotera/hero.jpg",
  images: [
    {
      id: "sotera-1",
      src: "/images/developments/sotera/sotera-entrance.jpg",
      alt: "Sotera Entrance",
      category: "entrance",
    },
    {
      id: "sotera-2",
      src: "/images/developments/sotera/sotera-towers.jpg",
      alt: "Sotera Towers",
      category: "towers",
    },
    {
      id: "sotera-3",
      src: "/images/developments/sotera/sotera-hotel.jpg",
      alt: "Sotera Hotel",
      category: "hotel",
    },
    {
      id: "sotera-4",
      src: "/images/developments/sotera/sotera-mall.jpg",
      alt: "Sotera Mall",
      category: "mall",
    },
    {
      id: "sotera-5",
      src: "/images/developments/sotera/sotera-restaurant.jpg",
      alt: "Sotera Restaurant",
      category: "restaurant",
    },
    {
      id: "sotera-6",
      src: "/images/developments/sotera/sotera-hills.jpg",
      alt: "Sotera Hills",
      category: "hills",
    },
  ],
  features: [
    {
      icon: "BuildingOfficeIcon",
      title: "Mixed-Use Development",
      description: "Comprehensive township with residential and commercial.",
    },
    {
      icon: "HomeIcon",
      title: "Integrated Living",
      description:
        "Live, work, shop, and play all within one cohesive community",
    },
    {
      icon: "MapPinIcon",
      title: "Strategic Location",
      description:
        "Prime location with excellent accessibility and natural beauty",
    },
    {
      icon: "SunIcon",
      title: "Scenic Environment",
      description: "Beautiful hill views and premium landscaping throughout",
    },
  ],
  masterPlan: {
    description:
      "The master plan creates distinct districts within the township, each with its unique character while maintaining seamless connectivity and shared infrastructure.",
    image: "/images/developments/sotera/sotera-master-site.jpg",
    highlights: [
      "Residential district with multiple tower configurations",
      "Central commercial hub with shopping and dining",
      "Hospitality zone with luxury hotel and event facilities",
      "Recreational areas with parks and sports facilities",
      "Integrated transportation and parking systems",
    ],
  },
};

export default function SoteraTownshipPage() {
  return (
    <div className="bg-background-primary">
      <HeroSection
        name={soteraData.name}
        location={soteraData.location}
        description={soteraData.description}
        heroImage={soteraData.heroImage}
      />

      <KeyFeaturesSection features={soteraData.features} />

      <OverviewSection
        name={soteraData.name}
        longDescription={soteraData.longDescription}
        overviewImage={soteraData.images[0]?.src}
      />

      {/* Featured Properties Slider for Sotera Sub-Properties */}
      <FeaturedPropertiesSlider
        properties={allSoteraProperties}
        title="Featured Properties"
        subtitle="Discover the diverse range of properties within our integrated township development"
        showStatus={false}
        autoPlay={true}
        autoPlayInterval={7000}
      />

      <GallerySection images={soteraData.images} />

      <MasterPlanSection
        masterPlan={soteraData.masterPlan}
        developmentName={soteraData.name}
      />

      <LocationSection
        developmentName={soteraData.name}
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1940.4136113194302!2d121.19344733475728!3d13.42301942703002!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1757900483443!5m2!1sen!2sph"
      />
    </div>
  );
}
