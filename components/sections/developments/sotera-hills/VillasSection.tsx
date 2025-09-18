"use client";

import { motion } from "framer-motion";

interface VillaType {
  type: string;
  area: string;
  features: string[];
  priceRange: string;
}

interface VillasSectionProps {
  villaTypes: VillaType[];
}

export default function VillasSection({ villaTypes }: VillasSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Villa Types
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Choose from our exclusive collection of luxury hillside villas with panoramic views
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {villaTypes.map((villa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background-secondary p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                {villa.type}
              </h3>
              <p className="text-primary-600 mb-4 font-medium">{villa.area}</p>
              
              <div className="mb-4">
                <h4 className="font-medium text-primary-800 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {villa.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-primary-600">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-primary-200">
                <p className="text-lg font-semibold text-primary-900">
                  {villa.priceRange}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
