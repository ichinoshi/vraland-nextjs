"use client";

import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  TrophyIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const reasons = [
  {
    icon: ShieldCheckIcon,
    title: "Trusted Developer",
    description:
      "Over 15 years of experience in creating quality developments across Oriental Mindoro.",
  },
  {
    icon: TrophyIcon,
    title: "Award-Winning Projects",
    description:
      "Our developments have received recognition for excellence in design and construction.",
  },
  {
    icon: HeartIcon,
    title: "Community-Focused",
    description:
      "We build more than properties - we create communities where families thrive.",
  },
  {
    icon: StarIcon,
    title: "Premium Quality",
    description:
      "Every project is built to the highest standards with attention to detail and craftsmanship.",
  },
];

export default function WhyChooseUsSection() {
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
            Why Choose Our Developments?
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Experience the VRA Land difference in every project we deliver
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-accent-200 group-hover:to-accent-300 transition-all duration-300 border border-accent-300">
                <reason.icon className="h-10 w-10 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-accent-100 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:shadow-accent-200"
            >
              Schedule a Site Visit
            </a>
            <a
              href="/virtual-tour"
              className="bg-accent-100/20 backdrop-blur-sm border-2 border-accent-200/40 text-accent-500 hover:bg-accent-200/40 hover:border-accent-300/60 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center"
            >
              Take Virtual Tour
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
