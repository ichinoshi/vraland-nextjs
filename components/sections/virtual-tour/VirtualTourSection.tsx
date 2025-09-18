"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  PlayIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const virtualTours = [
  {
    id: "sotera-towers",
    title: "Sotera Towers",
    subtitle: "Premium Residential Living",
    description:
      "Experience elevated living in our premium residential towers with contemporary architecture and world-class amenities.",
    image: "/images/developments/sotera/sotera-towers.jpg",
    highlights: [
      "Multiple Swimming Pools",
      "Fitness Centers",
      "Sky Gardens",
      "Smart Home Technology",
    ],
    type: "360° Tour",
    duration: "5-8 min",
    views: "2.5K",
  },
  {
    id: "sotera-mall",
    title: "Sotera Mall",
    subtitle: "Premier Shopping & Entertainment",
    description:
      "Explore the premier shopping and entertainment hub with international brands, cinema, and dining options.",
    image: "/images/developments/sotera/sotera-mall.jpg",
    highlights: [
      "Retail Spaces",
      "Entertainment Complex",
      "Food Court",
      "Anchor Stores",
    ],
    type: "Walkthrough",
    duration: "6-10 min",
    views: "1.8K",
  },
  {
    id: "sotera-restaurant",
    title: "Sotera Restaurant",
    subtitle: "Culinary Excellence Experience",
    description:
      "Discover our signature dining establishments with panoramic views and premium cuisine prepared by renowned chefs.",
    image: "/images/developments/sotera/sotera-restaurant.jpg",
    highlights: [
      "Panoramic Views",
      "Private Dining",
      "Outdoor Terraces",
      "Premium Cuisine",
    ],
    type: "VR Experience",
    duration: "4-6 min",
    views: "3.1K",
  },
  {
    id: "sotera-hills",
    title: "Sotera Hills",
    subtitle: "Natural Sanctuary Experience",
    description:
      "Take a peaceful retreat into nature with winding trails, scenic viewpoints, and landscaped gardens.",
    image: "/images/developments/sotera/sotera-hills.jpg",
    highlights: [
      "Nature Trails",
      "Scenic Viewpoints",
      "Recreation Areas",
      "Landscaped Gardens",
    ],
    type: "Nature Walk",
    duration: "8-12 min",
    views: "1.2K",
  },
];

export default function VirtualTourSection() {
  return (
    <section className="section-padding bg-background-primary">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Sotera Township
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Explore our complete lifestyle destination from the comfort of your
            home. Experience every detail through immersive virtual tours.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {virtualTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-background-secondary rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Tour Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-accent-700">
                    {tour.type}
                  </span>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors group-hover:bg-accent-600/80"
                  >
                    <PlayIcon className="w-6 h-6 ml-1" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {tour.title}
                </h3>
                <p className="text-lg text-accent-600 font-medium mb-3">
                  {tour.subtitle}
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {tour.description}
                </p>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-600 to-accent-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-accent-700 hover:to-accent-800 transition-all duration-300 group"
                >
                  <span>Start Virtual Tour</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
