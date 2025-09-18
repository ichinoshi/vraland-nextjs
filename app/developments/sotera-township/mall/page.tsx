"use client";

import HeroSection from "@/components/sections/developments/sotera-mall/HeroSection";
import KeyFeaturesSection from "@/components/sections/developments/sotera-mall/KeyFeaturesSection";
import OverviewSection from "@/components/sections/developments/sotera-mall/OverviewSection";
import GallerySection from "@/components/sections/developments/sotera-mall/GallerySection";

const soteraMallData = {
  name: "Sotera Mall",
  location: "Sotera Township, Salong, Calapan City",
  description:
    "The premier shopping and entertainment destination in Oriental Mindoro, featuring international brands, local retailers, dining options, and family entertainment.",
  longDescription:
    "Sotera Mall represents the pinnacle of retail and entertainment in Oriental Mindoro, bringing together international brands, local artisans, and diverse dining experiences under one roof. This modern shopping center features multiple levels of retail space, a dedicated food court, cinema complex, and family entertainment zones. Designed with contemporary architecture and sustainable features, the mall serves as the commercial heart of Sotera Township, providing residents and visitors with a comprehensive shopping and leisure experience.",
  heroImage: "/images/developments/sotera/mall/hero.jpg",
  images: [
    {
      id: "mall-1",
      src: "/images/developments/sotera/mall/hero.jpg",
      alt: "Sotera Mall Exterior",
    },
    {
      id: "mall-2",
      src: "/images/developments/sotera/mall/mall-1.jpg",
      alt: "Grand Atrium",
    },
    {
      id: "mall-3",
      src: "/images/developments/sotera/mall/mall-2.jpg",
      alt: "Retail Floors",
    },
    {
      id: "mall-4",
      src: "/images/developments/sotera/mall/mall-3.jpg",
      alt: "Food Court",
    },
    {
      id: "mall-5",
      src: "/images/developments/sotera/mall/mall-4.jpg",
      alt: "Cinema Complex",
    },
    {
      id: "mall-6",
      src: "/images/developments/sotera/mall/mall-5.jpg",
      alt: "Family Entertainment Zone",
    },
  ],
  features: [
    {
      icon: "BuildingOfficeIcon",
      title: "Modern Retail Space",
      description:
        "Contemporary design with flexible retail spaces for various business types",
    },
    {
      icon: "HomeIcon",
      title: "Diverse Shopping",
      description:
        "International brands, local retailers, and specialty stores",
    },
    {
      icon: "SunIcon",
      title: "Entertainment Hub",
      description:
        "Cinema complex, gaming zones, and family entertainment facilities",
    },
    {
      icon: "MapPinIcon",
      title: "Central Location",
      description: "Heart of Sotera Township with excellent accessibility",
    },
  ],
  specifications: {
    totalArea: "-",
    floors: "-",
    stores: "-",
    parking: "-",
    opening: "-",
    hours: "-",
  },
};

export default function SoteraMallPage() {
  return (
    <div className="bg-background-primary">
      <HeroSection
        name={soteraMallData.name}
        location={soteraMallData.location}
        description={soteraMallData.description}
        heroImage={soteraMallData.heroImage}
      />

      <KeyFeaturesSection features={soteraMallData.features} />

      <OverviewSection
        name={soteraMallData.name}
        longDescription={soteraMallData.longDescription}
        overviewImage={soteraMallData.images[0]?.src}
        specifications={soteraMallData.specifications}
      />

      <GallerySection images={soteraMallData.images} />
    </div>
  );
}
