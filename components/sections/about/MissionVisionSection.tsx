"use client";

import { motion } from "framer-motion";

export default function MissionVisionSection() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              To create exceptional living experiences that enhance the quality
              of life for individuals and families through innovative,
              sustainable, and thoughtfully designed real estate developments.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We believe that great communities are built on the foundation of
              quality, integrity, and a deep understanding of what makes a place
              truly special.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              To be the leading real estate developer recognized for creating
              iconic, sustainable communities that set new standards for modern
              living.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We envision a future where our developments serve as models for
              sustainable urban growth and community-centered living.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
