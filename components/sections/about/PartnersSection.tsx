"use client";

import { motion } from "framer-motion";

export default function PartnersSection() {
  const partners = [
    { name: "Partner 1", logo: "/images/partners/partner1.svg" },
    { name: "Partner 2", logo: "/images/partners/partner1.svg" },
    { name: "Partner 3", logo: "/images/partners/partner1.svg" },
    { name: "Partner 4", logo: "/images/partners/partner1.svg" },
    { name: "Partner 5", logo: "/images/partners/partner1.svg" },
    { name: "Partner 6", logo: "/images/partners/partner1.svg" },
  ];

  return (
    <section className="py-16 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We collaborate with industry-leading partners to deliver
            exceptional results and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 grayscale hover:grayscale-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto object-contain"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="120" height="48" xmlns="http://www.w3.org/2000/svg">
                      <rect width="120" height="48" fill="#f3f4f6" rx="4"/>
                      <text x="60" y="28" text-anchor="middle" fill="#6b7280" font-family="Arial, sans-serif" font-size="12">${partner.name}</text>
                    </svg>
                  `)}`;
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
