"use client";

import { motion } from "framer-motion";
import {
  BuildingOfficeIcon,
  UsersIcon,
  TrophyIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const values = [
  {
    icon: BuildingOfficeIcon,
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in construction, design, and materials to ensure lasting value for our clients.",
  },
  {
    icon: UsersIcon,
    title: "Customer First",
    description:
      "Our clients are at the heart of everything we do. We listen, understand, and deliver beyond expectations.",
  },
  {
    icon: TrophyIcon,
    title: "Innovation",
    description:
      "We embrace cutting-edge technology and sustainable practices to create future-ready developments.",
  },
  {
    icon: HeartIcon,
    title: "Community Impact",
    description:
      "We build not just properties, but communities that enhance the quality of life for residents.",
  },
];

export default function ValuesSection() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold ext-primary-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The principles that guide every decision we make and every project
            we undertake
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 hover-lift"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6">
                <value.icon className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {value.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
