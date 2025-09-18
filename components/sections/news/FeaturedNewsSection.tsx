"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";

interface FeaturedNews {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

interface FeaturedNewsSectionProps {
  featuredNews: FeaturedNews;
}

export default function FeaturedNewsSection({ featuredNews }: FeaturedNewsSectionProps) {
  return (
    <section className="py-24 bg-background-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Featured Story
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Stay updated with the latest developments and news from VRA Land
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden hover-lift"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-full min-h-[400px]">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {featuredNews.category}
                </span>
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-6 text-text-secondary mb-6">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-accent-600" />
                  <span className="text-sm">{featuredNews.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-accent-600" />
                  <span className="text-sm">{featuredNews.readTime}</span>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
                {featuredNews.title}
              </h3>

              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                {featuredNews.excerpt}
              </p>

              <div>
                <button className="bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
