"use client";

import HeroSection from "@/components/sections/developments/sotera-restaurant/HeroSection";
import KeyFeaturesSection from "@/components/sections/developments/sotera-restaurant/KeyFeaturesSection";
import OverviewSection from "@/components/sections/developments/sotera-restaurant/OverviewSection";
import GallerySection from "@/components/sections/developments/sotera-restaurant/GallerySection";

const soteraRestaurantData = {
  name: "Sotera Restaurant",
  location: "Sotera Township, Salong, Calapan City",
  description:
    "Indulge in exceptional fine dining at Sotera Restaurant, featuring contemporary Filipino cuisine, international dishes, and panoramic township views.",
  longDescription:
    "Sotera Restaurant elevates the culinary experience within Sotera Township, offering guests an exquisite fine dining destination that celebrates both local and international flavors. Led by renowned chefs, the restaurant features contemporary Filipino cuisine alongside international specialties, all prepared with the finest ingredients and presented with artistic flair. The elegant dining spaces offer panoramic views of the township and surrounding hills, creating an unforgettable atmosphere for special occasions, business dinners, and romantic evenings.",
  heroImage: "/images/developments/sotera/restaurant/hero.jpg",
  images: [
    {
      id: "restaurant-1",
      src: "/images/developments/sotera/restaurant/hero.jpg",
      alt: "Sotera Restaurant Exterior",
    },
    {
      id: "restaurant-2",
      src: "/images/developments/sotera/restaurant/resto-1.jpg",
      alt: "Main Dining Room",
    },
    {
      id: "restaurant-3",
      src: "/images/developments/sotera/restaurant/resto-2.jpg",
      alt: "Private Dining Room",
    },
    {
      id: "restaurant-4",
      src: "/images/developments/sotera/restaurant/resto-3.jpg",
      alt: "Outdoor Terrace",
    },
    {
      id: "restaurant-5",
      src: "/images/developments/sotera/restaurant/resto-4.jpg",
      alt: "Open Kitchen",
    },
    {
      id: "restaurant-6",
      src: "/images/developments/sotera/restaurant/resto-5.jpg",
      alt: "Wine Bar",
    },
  ],
  features: [
    {
      icon: "BuildingOfficeIcon",
      title: "Fine Dining Excellence",
      description:
        "Contemporary Filipino and international cuisine by renowned chefs",
    },
    {
      icon: "HomeIcon",
      title: "Elegant Ambiance",
      description: "Sophisticated dining spaces with panoramic township views",
    },
    {
      icon: "SunIcon",
      title: "Premium Experience",
      description: "Exceptional service and carefully curated wine selection",
    },
    {
      icon: "MapPinIcon",
      title: "Scenic Location",
      description: "Elevated position with stunning views of Sotera Township",
    },
  ],
  specifications: {
    seatingCapacity: "-",
    privateRooms: "-",
    cuisine: "-",
    dressCode: "-",
    reservations: "-",
    opening: "-",
  },
};

export default function SoteraRestaurantPage() {
  return (
    <div className="bg-background-primary">
      <HeroSection
        name={soteraRestaurantData.name}
        location={soteraRestaurantData.location}
        description={soteraRestaurantData.description}
        heroImage={soteraRestaurantData.heroImage}
      />

      <KeyFeaturesSection features={soteraRestaurantData.features} />

      <OverviewSection
        name={soteraRestaurantData.name}
        longDescription={soteraRestaurantData.longDescription}
        overviewImage={soteraRestaurantData.images[0]?.src}
        specifications={soteraRestaurantData.specifications}
      />

      <GallerySection images={soteraRestaurantData.images} />
    </div>
  );
}
