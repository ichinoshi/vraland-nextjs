"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

interface RecentNewsSectionProps {
  recentNews: NewsItem[];
  newsCategories: string[];
}

export default function RecentNewsSection({ recentNews, newsCategories }: RecentNewsSectionProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Recent News
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore our latest updates, announcements, and insights
          </p>
        </motion.div>

        {/* News Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {newsCategories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 rounded-full border-2 border-accent-200 text-accent-700 hover:bg-accent-50 hover:border-accent-300 transition-all duration-300 font-medium"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentNews.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-text-secondary mb-4">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4 text-accent-600" />
                    <span className="text-sm">{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4 text-accent-600" />
                    <span className="text-sm">{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-3 line-clamp-2 group-hover:text-accent-700 transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-accent-600 font-semibold text-sm group-hover:text-accent-700 transition-colors duration-300">
                    Read More →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-white border-2 border-accent-200 text-accent-700 hover:bg-accent-50 hover:border-accent-300 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
            Load More Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}
