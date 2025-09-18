"use client";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    date: "2024-12-10",
    readTime: "4 min read",
    category: "Development",
    image: "/images/news/lorem-1.jpg",
  },
  {
    id: 2,
    title: "Sed Do Eiusmod Tempor Incididunt Ut Labore",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    date: "2024-12-05",
    readTime: "3 min read",
    category: "Updates",
    image: "/images/news/lorem-2.jpg",
  },
  {
    id: 3,
    title: "Ut Enim Ad Minim Veniam Quis Nostrud",
    excerpt:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    date: "2024-11-28",
    readTime: "5 min read",
    category: "News",
    image: "/images/news/lorem-3.jpg",
  },
];

export default function NewsPreview() {
  return (
    <section className="section-padding bg-background-primary">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Latest News
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Stay informed about our latest developments, achievements, and
            company news.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent-600 text-white text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-text-secondary mb-3 space-x-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {item.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-600 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-text-secondary leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                <Link
                  href={`/news/${item.id}`}
                  className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors duration-300"
                >
                  Read More
                  <ArrowRightIcon className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
