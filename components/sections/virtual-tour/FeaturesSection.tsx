"use client";

import { motion } from "framer-motion";
import {
  CubeTransparentIcon,
  DevicePhoneMobileIcon,
  ClockIcon,
  GlobeAltIcon,
  EyeIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: CubeTransparentIcon,
    title: "360° Virtual Reality",
    description: "Immersive 360-degree views that let you explore every corner and detail of our developments.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile Compatible",
    description: "Access virtual tours on any device - desktop, tablet, or smartphone for maximum convenience.",
  },
  {
    icon: ClockIcon,
    title: "24/7 Availability",
    description: "Tour our properties anytime, anywhere. No scheduling required, no time restrictions.",
  },
  {
    icon: GlobeAltIcon,
    title: "Global Access",
    description: "Experience our developments from anywhere in the world with just an internet connection.",
  },
  {
    icon: EyeIcon,
    title: "Realistic Experience",
    description: "High-definition imagery and smooth navigation provide an authentic property viewing experience.",
  },
  {
    icon: CameraIcon,
    title: "Interactive Hotspots",
    description: "Click on interactive points to get detailed information about specific features and amenities.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-background-secondary">
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
            Virtual Tour Features
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Experience the future of property viewing with our cutting-edge virtual tour technology
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-background-primary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center mr-4">
                  <feature.icon className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  {feature.title}
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
