"use client";

import Link from "next/link";
import {
  ArrowRightIcon,
  MapPinIcon,
  HomeIcon,
  BuildingOfficeIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/home/HeroSection";
import ProjectFeatures from "@/components/sections/home/ProjectFeatures";
import AboutCompany from "@/components/sections/home/AboutCompany";
import NewsPreview from "@/components/sections/home/NewsPreview";
import CTANewsletter from "@/components/sections/home/CTANewsletter";
import FeaturedPropertiesSlider from "@/components/ui/FeaturedPropertiesSlider";
import { allSoteraProperties } from "@/lib/soteraPropertiesData";

export default function Home() {
  return (
    <div className="bg-background-primary">
      {/* Hero Section */}
      <HeroSection />

      {/* Project Features */}
      <ProjectFeatures />

      {/* Featured Properties Slider */}
      <FeaturedPropertiesSlider
        properties={allSoteraProperties}
        title="Featured Properties"
        subtitle="Explore the diverse offerings within Sotera Township development"
        showStatus={true}
        autoPlay={true}
        autoPlayInterval={6000}
      />

      {/* About Company */}
      <AboutCompany />

      {/* News Preview */}
      <NewsPreview />

      {/* CTA and Newsletter Combined */}
      <CTANewsletter />
    </div>
  );
}
