"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { NewspaperIcon } from "@heroicons/react/24/outline";

interface HeroSectionProps {
  title: string;
  description: string;
  image: string;
}

export default function HeroSection({
  title,
  description,
  image,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary-900/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            {title}
          </h1>
          <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
