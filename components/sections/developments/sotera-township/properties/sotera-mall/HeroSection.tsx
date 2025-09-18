"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/outline";

interface HeroSectionProps {
  name: string;
  location: string;
  description: string;
  heroImage: string;
}

export default function HeroSection({
  name,
  location,
  description,
  heroImage,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            {name}
          </h1>
          <div className="flex items-center justify-center text-lg text-primary-200 mb-8">
            <MapPinIcon className="h-5 w-5 mr-2" />
            {location}
          </div>
          <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
