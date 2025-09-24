"use client";

import HeroSection from "@/components/sections/developments/lazule-resort/HeroSection";
import KeyFeaturesSection from "@/components/sections/developments/lazule-resort/KeyFeaturesSection";
import OverviewSection from "@/components/sections/developments/lazule-resort/OverviewSection";
import GallerySection from "@/components/sections/developments/lazule-resort/GallerySection";
import MasterPlanSection from "@/components/sections/developments/lazule-resort/MasterPlanSection";
import LocationSection from "@/components/sections/developments/lazule-resort/LocationSection";

const lazuleData = {
  name: "Lazule Resort",
  location: "Puerto Galera",
  description:
    "Escape to paradise at our exclusive resort development offering world-class amenities, private beach access, premier tennis and sports complex, and breathtaking natural beauty.",
  longDescription:
    "Lazule Resort represents the ultimate in tropical luxury living, where pristine natural beauty meets world-class hospitality. This exclusive resort development offers an unparalleled escape from the ordinary, featuring private beach access, premier tennis and sports facilities, and premium accommodations set within a breathtaking tropical paradise. Every element is designed to provide guests and residents with an extraordinary experience that celebrates the natural splendor of Puerto Galera while delivering the highest standards of luxury and service.",
  heroImage: "/images/developments/lazule/hero.jpg",
  images: [
    {
      id: "lazule-1",
      src: "/images/placeholder/placeholder.jpg",
      alt: "Beachfront Resort View",
      category: "exterior",
    },
    {
      id: "lazule-2",
      src: "/images/placeholder/placeholder.jpg",
      alt: "Luxury Villa Interior",
      category: "interior",
    },
    {
      id: "lazule-3",
      src: "/images/placeholder/placeholder.jpg",
      alt: "Tennis and Sports Complex",
      category: "amenities",
    },
    {
      id: "lazule-4",
      src: "/images/placeholder/placeholder.jpg",
      alt: "Spa and Wellness Center",
      category: "amenities",
    },
    {
      id: "lazule-5",
      src: "/images/placeholder/placeholder.jpg",
      alt: "Tropical Resort Concept",
      category: "concept",
    },
    {
      id: "lazule-6",
      src: "/images/placeholder/placeholder.jpg",
      alt: "Ocean View Dining",
      category: "amenities",
    },
    {
      id: "lazule-7",
      src: "/images/placeholder/placeholder.jpg",
      alt: "Ocean View Dining",
      category: "amenities",
    },
  ],
  architecturalConcept: {
    title: "Tropical Luxury Integration",
    description:
      "The architectural philosophy embraces the natural tropical environment, creating structures that complement rather than compete with the stunning landscape. Traditional Filipino design elements are seamlessly integrated with contemporary luxury standards.",
    principles: [
      "Harmony with natural tropical landscape",
      "Traditional Filipino architectural influences",
      "Sustainable materials and construction methods",
      "Maximized ocean and nature views",
      "Climate-responsive design for tropical comfort",
    ],
  },
  features: [
    {
      icon: "SunIcon",
      title: "Tropical Paradise",
      description:
        "Pristine beachfront location with crystal-clear waters and white sand beaches",
    },
    {
      icon: "HomeIcon",
      title: "Luxury Accommodations",
      description:
        "Premium villas and suites with world-class amenities and services",
    },
    {
      icon: "BuildingOfficeIcon",
      title: "Tennis & Sports Complex",
      description:
        "World-class tennis courts and multi-sport facilities designed for championship-level play",
    },
    {
      icon: "MapPinIcon",
      title: "Exclusive Location",
      description:
        "Private resort setting in one of the Philippines' most beautiful destinations",
    },
  ],
  amenities: [
    {
      category: "Beach & Water Sports",
      items: [
        "Private Beach Access",
        "Water Sports Center",
        "Diving & Snorkeling",
        "Yacht Marina",
        "Beach Clubs",
      ],
    },
    {
      category: "Tennis & Sports Recreation",
      items: [
        "Championship Tennis Courts",
        "Tennis Academy & Pro Shop",
        "Multi-Sport Courts (Basketball, Volleyball)",
        "Fitness Center & Gym",
        "Hiking & Jogging Trails",
      ],
    },
    {
      category: "Wellness & Spa",
      items: [
        "Luxury Spa",
        "Wellness Center",
        "Yoga Pavilion",
        "Meditation Gardens",
        "Health Clinic",
      ],
    },
    {
      category: "Dining & Entertainment",
      items: [
        "Fine Dining Restaurants",
        "Beach Bar & Grill",
        "Poolside Café",
        "Wine Cellar",
        "Entertainment Venues",
      ],
    },
  ],
  specifications: {
    totalArea: "50 hectares",
    units: "150 villas & suites",
    floors: "Low-rise development (2-4 floors)",
    parking: "Private villa parking",
    completion: "Q2 2027",
    priceRange: "₱15M - ₱75M",
  },
  masterPlan: {
    description:
      "The master plan preserves the natural beauty of the site while creating distinct zones for accommodation, recreation, and conservation, ensuring minimal environmental impact.",
    image: "/images/placeholder/placeholder.jpg",
    highlights: [
      "Beachfront villa clusters with private access",
      "Central resort facilities and amenities",
      "Tennis and sports complex with ocean views",
      "Conservation areas for environmental protection",
      "Sustainable infrastructure and utilities",
    ],
  },
  sustainability: {
    title: "Environmental Stewardship",
    features: [
      "Marine conservation and protection programs",
      "Renewable energy systems throughout",
      "Sustainable water management and treatment",
      "Native vegetation preservation and restoration",
      "Carbon-neutral operations target",
    ],
  },
  resortFacilities: [
    {
      name: "Beachfront Villas",
      description:
        "Exclusive oceanfront accommodations with private beach access and panoramic sea views.",
      details: [
        "50 luxury beachfront villas",
        "Private infinity pools",
        "Direct beach access",
        "Butler and concierge services",
        "Outdoor dining pavilions",
      ],
    },
    {
      name: "Tennis & Sports Complex",
      description:
        "Premier tennis and multi-sport facility designed to international tournament standards.",
      details: [
        "6 championship tennis courts (clay & hard court)",
        "Multi-sport courts for basketball and volleyball",
        "Tennis academy with professional coaching",
        "Sports clubhouse with dining and pro shop",
        "Ocean and mountain views from all courts",
      ],
    },
    {
      name: "Spa & Wellness Center",
      description:
        "Comprehensive wellness destination offering traditional and modern therapeutic treatments.",
      details: [
        "20 treatment rooms",
        "Hydrotherapy pools",
        "Yoga and meditation pavilions",
        "Fitness center with ocean views",
        "Wellness consultation services",
      ],
    },
    {
      name: "Marine Activities Center",
      description:
        "Complete water sports and marine recreation facility with professional instruction.",
      details: [
        "Diving and snorkeling center",
        "Kayaking and paddleboarding",
        "Deep-sea fishing charters",
        "Yacht and boat rentals",
        "Marine conservation programs",
      ],
    },
  ],
};

export default function LazuleResortPage() {
  return (
    <div className="bg-background-primary">
      <HeroSection
        name={lazuleData.name}
        location={lazuleData.location}
        description={lazuleData.description}
        heroImage={lazuleData.heroImage}
      />

      <KeyFeaturesSection features={lazuleData.features} />

      <OverviewSection
        name={lazuleData.name}
        longDescription={lazuleData.longDescription}
        overviewImage={lazuleData.images[0]?.src}
      />

      <GallerySection images={lazuleData.images} />

      <MasterPlanSection
        masterPlan={lazuleData.masterPlan}
        developmentName={lazuleData.name}
      />

      <LocationSection
        developmentName={lazuleData.name}
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.2327749976007!2d121.17075907589138!3d13.39790820538695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bce90022404593%3A0x8ba5938196fe81e1!2sAGUDO%204PH!5e0!3m2!1sen!2sph!4v1757911628591!5m2!1sen!2sph"
      />
    </div>
  );
}
