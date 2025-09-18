"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800 text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center px-6 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
            <span className="text-sm font-medium text-accent-300">
              Join Our Community
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Be Part of{" "}
            <span className="text-accent-300">Our Story</span>?
          </h2>

          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover what makes VRA Land developments truly exceptional. Join
            our community of satisfied homeowners today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="/developments"
              whileHover={{
                y: -3,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <span>Explore Our Projects</span>
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{
                y: -3,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:border-accent-400/60 hover:bg-accent-500/10 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <span>Get in Touch</span>
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </div>

          <div className="mt-10 flex items-center justify-center space-x-6 text-sm text-primary-200">
            <div className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-2 text-accent-400" />
              <span>No obligation consultation</span>
            </div>
            <div className="h-4 w-px bg-white/20"></div>
            <div className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-2 text-accent-400" />
              <span>Expert guidance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
