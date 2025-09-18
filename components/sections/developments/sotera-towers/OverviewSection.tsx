"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface OverviewSectionProps {
  name: string;
  longDescription: string;
  overviewImage?: string;
  specifications: {
    totalUnits: string;
    towers: string;
    parking: string;
    elevators: string;
    completion: string;
    turnover: string;
  };
}

export default function OverviewSection({
  name,
  longDescription,
  overviewImage,
  specifications,
}: OverviewSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              About {name}
            </h2>
            <p className="text-lg text-primary-600 leading-relaxed mb-8">
              {longDescription}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background-secondary p-4 rounded-lg">
                <h4 className="font-semibold text-primary-900 mb-1">Total Units</h4>
                <p className="text-primary-600">{specifications.totalUnits}</p>
              </div>
              <div className="bg-background-secondary p-4 rounded-lg">
                <h4 className="font-semibold text-primary-900 mb-1">Towers</h4>
                <p className="text-primary-600">{specifications.towers}</p>
              </div>
              <div className="bg-background-secondary p-4 rounded-lg">
                <h4 className="font-semibold text-primary-900 mb-1">Parking</h4>
                <p className="text-primary-600">{specifications.parking}</p>
              </div>
              <div className="bg-background-secondary p-4 rounded-lg">
                <h4 className="font-semibold text-primary-900 mb-1">Completion</h4>
                <p className="text-primary-600">{specifications.completion}</p>
              </div>
            </div>
          </motion.div>

          {overviewImage && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src={overviewImage}
                alt={`${name} Overview`}
                fill
                className="object-cover"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
