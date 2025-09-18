"use client";

import { motion } from "framer-motion";
import { WrenchScrewdriverIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function LifestylePage() {
  return (
    <div className="bg-background-primary min-h-screen">
      {/* Under Construction Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-primary-900 to-primary-700"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <WrenchScrewdriverIcon className="h-24 w-24 text-primary-400 mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              VRA Land&apos;s Lifestyle
            </h1>
            <p className="text-2xl md:text-3xl text-primary-100 mb-8 font-light">
              Lifestyle Page Coming Soon
            </p>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-12">
              We're working hard to bring you an amazing lifestyle experience
              page. Check back soon to discover the exceptional amenities and
              lifestyle offerings at VRA Land developments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/developments"
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl"
              >
                View Our Developments
              </Link>
              <Link
                href="/"
                className="border-2 border-primary-400 hover:bg-primary-400 hover:text-primary-900 text-primary-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center"
              >
                <HomeIcon className="h-5 w-5 inline mr-2" />
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
