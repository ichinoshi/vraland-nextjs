"use client";

import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const values = [
  {
    icon: BuildingOffice2Icon,
    title: "Excellence",
    description:
      "We deliver exceptional quality in every development, setting new standards in Oriental Mindoro's real estate landscape.",
  },
  {
    icon: HeartIcon,
    title: "Community",
    description:
      "Building more than properties - we create vibrant communities where families and businesses thrive together.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Trust",
    description:
      "Our commitment to transparency and reliability has earned us the trust of hundreds of satisfied clients.",
  },
  {
    icon: SparklesIcon,
    title: "Innovation",
    description:
      "Embracing modern design and sustainable practices to create developments for the future.",
  },
];

export default function AboutCompany() {
  return (
    <section id="about-company" className="section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Transforming Oriental Mindoro&apos;s
              <span className="block text-accent-600">
                Real Estate Landscape
              </span>
            </h2>

            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              For over a decade, VRA Land has been at the forefront of premium
              real estate development in Oriental Mindoro. We specialize in
              creating exceptional residential and commercial spaces that blend
              modern luxury with the natural beauty of our island paradise.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              From luxury condominiums in Calapan City to resort developments in
              Puerto Galera, our portfolio represents the finest in contemporary
              Philippine architecture and sustainable development practices.
            </p>

            <motion.a
              href="/about"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3  border-2 border-accent-500 text-accent-600 font-semibold rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-all duration-300"
            >
              Learn More About Us
            </motion.a>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
