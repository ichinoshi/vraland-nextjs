"use client";

import HeroSection from "@/components/sections/developments/fairfield-residence/HeroSection";
import KeyFeaturesSection from "@/components/sections/developments/fairfield-residence/KeyFeaturesSection";
import OverviewSection from "@/components/sections/developments/fairfield-residence/OverviewSection";
import GallerySection from "@/components/sections/developments/fairfield-residence/GallerySection";
import MasterPlanSection from "@/components/sections/developments/fairfield-residence/MasterPlanSection";
import LocationSection from "@/components/sections/developments/fairfield-residence/LocationSection";

const fairfieldData = {
  name: "Fairfield Residence",
  location: "Lalud, Calapan City",
  description:
    "Experience sophisticated urban living in our premium condominium development featuring modern amenities, stunning city views, and unparalleled convenience in the heart of Metro City.",
  longDescription:
    "Fairfield Residence represents the pinnacle of contemporary urban living, where architectural excellence meets modern convenience. This premium condominium development is meticulously designed to offer residents an elevated lifestyle experience, featuring state-of-the-art amenities, breathtaking city views, and thoughtfully crafted living spaces that cater to the discerning urban professional.",
  heroImage: "/images/developments/fairfield/hero.jpg",
  images: [
    {
      id: "fairfield-1",
      src: "/images/developments/fairfield/fairfield-1.jpg",
      alt: "Fairfield Exterior View",
      category: "exterior",
    },
    {
      id: "fairfield-2",
      src: "/images/developments/fairfield/fairfield-2.jpg",
      alt: "Fairfield Interior",
      category: "interior",
    },
    {
      id: "fairfield-3",
      src: "/images/developments/fairfield/fairfield-3.jpg",
      alt: "Fairfield Amenities",
      category: "amenities",
    },
    {
      id: "fairfield-4",
      src: "/images/developments/fairfield/fairfield-4.jpg",
      alt: "Fairfield Concept",
      category: "concept",
    },
    {
      id: "fairfield-5",
      src: "/images/developments/fairfield/fairfield-5.jpg",
      alt: "Fairfield Lobby",
      category: "interior",
    },
    {
      id: "fairfield-6",
      src: "/images/developments/fairfield/fairfield-6.jpg",
      alt: "Fairfield Pool",
      category: "amenities",
    },
  ],
  features: [
    {
      icon: "BuildingOfficeIcon",
      title: "Premium Architecture",
      description:
        "Award-winning design with contemporary aesthetics and premium materials",
    },
    {
      icon: "HomeIcon",
      title: "Smart Living",
      description:
        "Integrated smart home systems for modern convenience and security",
    },
    {
      icon: "SunIcon",
      title: "Natural Light",
      description: "Floor-to-ceiling windows maximizing natural illumination",
    },
    {
      icon: "MapPinIcon",
      title: "Prime Location",
      description:
        "Strategic location with excellent connectivity and urban amenities",
    },
  ],
  masterPlan: {
    description:
      "The master plan integrates residential towers with comprehensive amenities, creating a self-contained urban community that promotes both privacy and social interaction.",
    image: "/images/placeholder/placeholder.jpg",
    highlights: [
      "Two residential towers with optimal spacing for privacy",
      "Central amenity podium connecting both towers",
      "Landscaped gardens and water features throughout",
      "Dedicated retail and commercial spaces",
      "Multi-level parking with electric vehicle charging",
    ],
  },
  sustainability: {
    title: "Green Building Excellence",
    features: [
      "LEED Gold certification target",
      "Energy-efficient LED lighting systems",
      "Rainwater harvesting and recycling",
      "Solar panels for common area power",
      "Green roof systems and vertical gardens",
    ],
  },
};

export default function FairfieldResidencePage() {
  return (
    <div className="bg-background-primary">
      <HeroSection
        name={fairfieldData.name}
        location={fairfieldData.location}
        description={fairfieldData.description}
        heroImage={fairfieldData.heroImage}
      />

      <KeyFeaturesSection features={fairfieldData.features} />

      <OverviewSection
        name={fairfieldData.name}
        longDescription={fairfieldData.longDescription}
        overviewImage={fairfieldData.images[0]?.src}
      />


      <GallerySection images={fairfieldData.images} />

      <MasterPlanSection
        masterPlan={fairfieldData.masterPlan}
        developmentName={fairfieldData.name}
      />

      <LocationSection
        developmentName={fairfieldData.name}
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.2327749976007!2d121.17075907589138!3d13.39790820538695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bce90022404593%3A0x8ba5938196fe81e1!2sAGUDO%204PH!5e0!3m2!1sen!2sph!4v1757911628591!5m2!1sen!2sph"
      />
    </div>
  );
}
