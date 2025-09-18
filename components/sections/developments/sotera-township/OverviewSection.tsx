"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface OverviewSectionProps {
  name: string;
  longDescription: string;
  overviewImage?: string;
}

export default function OverviewSection({
  name,
  longDescription,
  overviewImage,
}: OverviewSectionProps) {
  return (
    <section className="py-24 bg-background-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              <span className="text-accent-600">Township</span> Overview
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {longDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {overviewImage && (
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <Image
                  src={overviewImage}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
