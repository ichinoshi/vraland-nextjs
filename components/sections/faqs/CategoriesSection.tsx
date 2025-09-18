"use client";

import { motion } from "framer-motion";
import {
  HomeIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  ClockIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

interface Category {
  icon: string;
  title: string;
  description: string;
}

interface CategoriesSectionProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoriesSection({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoriesSectionProps) {
  const iconMap = {
    HomeIcon,
    CurrencyDollarIcon,
    DocumentTextIcon,
    BuildingOfficeIcon,
    ClockIcon,
    PhoneIcon,
  };

  return (
    <section className="relative z-10 -mt-16 mb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
              const isActive = activeCategory === category.title;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-center hover-lift cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-accent-50 border-2 border-accent-200"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => onCategoryChange(category.title)}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                      isActive ? "bg-accent-100" : ""
                    }`}
                  >
                    <IconComponent
                      className={`h-8 w-8 ${
                        isActive
                          ? "text-accent-900"
                          : "text-accent-600"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      isActive ? "text-accent-900" : "text-text-primary"
                    }`}
                  >
                    {category.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {category.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
