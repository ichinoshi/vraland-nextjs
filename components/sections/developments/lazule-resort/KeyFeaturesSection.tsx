"use client";

import { motion } from "framer-motion";
import {
  BuildingOfficeIcon,
  HomeIcon,
  SunIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface KeyFeaturesSectionProps {
  features: Feature[];
}

export default function KeyFeaturesSection({
  features,
}: KeyFeaturesSectionProps) {
  const iconMap = {
    BuildingOfficeIcon,
    HomeIcon,
    SunIcon,
    MapPinIcon,
  };

  return (
    <section className="relative z-10 -mt-16 mb-16">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent =
                iconMap[feature.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center hover-lift"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
