"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface MasterPlan {
  description: string;
  image: string;
  highlights: string[];
}

interface MasterPlanSectionProps {
  masterPlan: MasterPlan;
  developmentName: string;
}

export default function MasterPlanSection({
  masterPlan,
  developmentName,
}: MasterPlanSectionProps) {
  return (
    <section className="py-24 bg-primary-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Master <span className="text-accent-400">Site Plan</span>
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            {masterPlan.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="aspect-[16/9] relative rounded-2xl overflow-hidden">
            <Image
              src={masterPlan.image}
              alt={`${developmentName} Master Plan`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary-800/30 rounded-2xl p-8 border border-primary-700"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Master Plan Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {masterPlan.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-5 w-5 text-accent-400 mt-1 flex-shrink-0" />
                <span className="text-primary-100">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
