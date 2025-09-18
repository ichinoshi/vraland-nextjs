"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface OverviewSectionProps {
  name: string;
  longDescription: string;
  overviewImage?: string;
  specifications: {
    seatingCapacity: string;
    privateRooms: string;
    cuisine: string;
    dressCode: string;
    reservations: string;
    opening: string;
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
                <h4 className="font-semibold text-primary-900 mb-1">Seating</h4>
                <p className="text-primary-600">{specifications.seatingCapacity}</p>
              </div>
              <div className="bg-background-secondary p-4 rounded-lg">
                <h4 className="font-semibold text-primary-900 mb-1">Private Rooms</h4>
                <p className="text-primary-600">{specifications.privateRooms}</p>
              </div>
              <div className="bg-background-secondary p-4 rounded-lg">
                <h4 className="font-semibold text-primary-900 mb-1">Cuisine</h4>
                <p className="text-primary-600">{specifications.cuisine}</p>
              </div>
              <div className="bg-background-secondary p-4 rounded-lg">
                <h4 className="font-semibold text-primary-900 mb-1">Opening</h4>
                <p className="text-primary-600">{specifications.opening}</p>
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
