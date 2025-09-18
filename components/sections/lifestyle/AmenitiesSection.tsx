"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface AmenityCategory {
  category: string;
  items: string[];
}

interface AmenitiesSectionProps {
  amenities: AmenityCategory[];
}

export default function AmenitiesSection({ amenities }: AmenitiesSectionProps) {
  return (
    <section className="py-24 bg-background-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            World-Class Amenities
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Experience luxury living with our comprehensive range of premium
            amenities and services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-elegant p-6 hover-lift"
            >
              <h3 className="text-xl font-bold text-text-primary mb-4 text-center">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center text-text-secondary"
                  >
                    <CheckCircleIcon className="h-4 w-4 text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
