"use client";

import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  UsersIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

interface HeroSectionProps {
  yearsOfExperience: number;
}

export default function HeroSection({ yearsOfExperience }: HeroSectionProps) {
  const stats = [
    {
      icon: BuildingOffice2Icon,
      value: "25+",
      label: "Projects Completed",
    },
    {
      icon: UsersIcon,
      value: "500+",
      label: "Families Served",
    },
    {
      icon: TrophyIcon,
      value: `${yearsOfExperience}+`,
      label: "Years of Excellence",
    },
  ];

  return (
    <section className="relative bg-primary-900 overflow-hidden pt-24 min-h-[60vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/about/hero-bg.jpg")',
        }}
      >
        {/* Simplified Overlay */}
        <div className="absolute inset-0 bg-primary-900/75" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              About VRA Land
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            Building exceptional communities and creating lasting value through
            innovative real estate development in Oriental Mindoro.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
