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

const iconMap = {
  BuildingOfficeIcon,
  HomeIcon,
  SunIcon,
  MapPinIcon,
};

export default function KeyFeaturesSection({ features }: KeyFeaturesSectionProps) {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Key <span className="text-accent-600">Features</span>
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Discover what makes this shopping destination exceptional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
