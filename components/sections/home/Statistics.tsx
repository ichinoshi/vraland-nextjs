"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Happy Families",
    description: "Trusted us with their dream homes"
  },
  {
    number: 15,
    suffix: "+",
    label: "Years Experience",
    description: "In Oriental Mindoro real estate"
  },
  {
    number: 25,
    suffix: "+",
    label: "Projects Completed",
    description: "Across residential and commercial"
  },
  {
    number: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on customer feedback"
  }
];

function AnimatedNumber({ number, suffix, inView }: { number: number; suffix: string; inView: boolean }) {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = number / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          setDisplayNumber(number);
          clearInterval(timer);
        } else {
          setDisplayNumber(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, number]);

  return (
    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-600">
      {displayNumber}{suffix}
    </span>
  );
}

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-gradient-to-br from-background-secondary to-background-primary">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Our Track Record
            <span className="block text-primary-600">Speaks for Itself</span>
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Numbers that reflect our commitment to excellence and the trust our clients place in us.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
                <AnimatedNumber 
                  number={stat.number} 
                  suffix={stat.suffix} 
                  inView={isInView} 
                />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {stat.label}
              </h3>
              <p className="text-text-secondary">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
