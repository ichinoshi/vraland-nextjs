"use client";

import HeroSection from "@/components/sections/developments/sotera-hotel/HeroSection";
import KeyFeaturesSection from "@/components/sections/developments/sotera-hotel/KeyFeaturesSection";
import OverviewSection from "@/components/sections/developments/sotera-hotel/OverviewSection";
import GallerySection from "@/components/sections/developments/sotera-hotel/GallerySection";

const soteraHotelData = {
  name: "Sotera Hotel",
  location: "Sotera Township, Salong, Calapan City",
  description:
    "Experience world-class hospitality at Sotera Hotel, featuring luxury accommodations, premium amenities, and exceptional service in the heart of Sotera Township.",
  longDescription:
    "Sotera Hotel stands as the crown jewel of hospitality within Sotera Township, offering guests an unparalleled luxury experience. This five-star hotel combines contemporary elegance with Filipino hospitality, featuring spacious suites, world-class dining venues, comprehensive business facilities, and a full-service spa. Located at the heart of the township, guests enjoy seamless access to shopping, dining, and entertainment while experiencing the tranquility of premium accommodations.",
  heroImage: "/images/developments/sotera/hotel/hero.jpg",
  images: [
    {
      id: "hotel-1",
      src: "/images/developments/sotera/hotel/hero.jpg",
      alt: "Sotera Hero",
    },
    {
      id: "hotel-2",
      src: "/images/developments/sotera/hotel/hotel-1.jpg",
      alt: "Sotera Hotel 1",
    },
    {
      id: "hotel-3",
      src: "/images/developments/sotera/hotel/hotel-1.jpg",
      alt: "Sotera Hotel 2",
    },
  ],
  features: [
    {
      icon: "BuildingOfficeIcon",
      title: "Luxury Accommodations",
      description:
        "Premium suites and rooms with modern amenities and stunning views",
    },
    {
      icon: "HomeIcon",
      title: "World-Class Service",
      description: "24/7 concierge and personalized guest services",
    },
    {
      icon: "SunIcon",
      title: "Premium Amenities",
      description:
        "Full-service spa, fitness center, and multiple dining venues",
    },
    {
      icon: "MapPinIcon",
      title: "Central Location",
      description:
        "Heart of Sotera Township with easy access to all facilities",
    },
  ],
  specifications: {
    totalRooms: "-",
    floors: "-",
    checkIn: "-",
    checkOut: "-",
    parking: "-",
    opening: "-",
  },
};

export default function SoteraHotelPage() {
  return (
    <div className="bg-background-primary">
      <HeroSection
        name={soteraHotelData.name}
        location={soteraHotelData.location}
        description={soteraHotelData.description}
        heroImage={soteraHotelData.heroImage}
      />

      <KeyFeaturesSection features={soteraHotelData.features} />

      <OverviewSection
        name={soteraHotelData.name}
        longDescription={soteraHotelData.longDescription}
        overviewImage={soteraHotelData.images[0]?.src}
        specifications={soteraHotelData.specifications}
      />

      <GallerySection images={soteraHotelData.images} />
    </div>
  );
}
