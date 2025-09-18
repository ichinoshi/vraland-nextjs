"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import {
  MapPinIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  HomeIcon,
  SunIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";

interface PropertyCard {
  id: string;
  name: string;
  tagline?: string;
  location: string;
  description: string;
  heroImage: string;
  status?: string;
  path?: string;
  features?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  highlights?: string[];
  specifications?: {
    units?: string;
    size?: string;
    floors?: string;
    completion?: string;
  };
  priceRange?: {
    from: string;
    to?: string;
    currency: string;
  };
  type?: string;
}

interface FeaturedPropertiesSliderProps {
  properties: PropertyCard[];
  title?: string;
  subtitle?: string;
  showStatus?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const iconMap = {
  BuildingOfficeIcon,
  HomeIcon,
  SunIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ClockIcon,
};

const getPropertyTypeColor = (type?: string) => {
  switch (type?.toLowerCase()) {
    case 'hotel':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'mall':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'restaurant':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'towers':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'hills':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export default function FeaturedPropertiesSlider({
  properties,
  title = "Featured Properties",
  subtitle = "Discover our exceptional developments",
  showStatus = true,
  autoPlay = true,
  autoPlayInterval = 5000,
}: FeaturedPropertiesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isHovered || isDragging || properties.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === properties.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isHovered, isDragging, properties.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle drag functionality
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);
    const threshold = 50;

    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  if (!properties || properties.length === 0) {
    return null;
  }

  const currentProperty = properties[currentIndex];

  return (
    <section className="py-16 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Slider Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl min-h-[300px] lg:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                whileDrag={{ cursor: "grabbing" }}
                className="grid lg:grid-cols-5 gap-0 min-h-[300px] lg:min-h-[400px] cursor-grab"
              >
                {/* Image Section */}
                <div className="lg:col-span-3 relative h-64 lg:h-auto lg:min-h-full overflow-hidden">
                  <Image
                    src={currentProperty.heroImage}
                    alt={currentProperty.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Status Badge */}
                  {showStatus && currentProperty.status && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent-600 text-white text-sm font-medium rounded-full">
                        {currentProperty.status}
                      </span>
                    </div>
                  )}

                  {/* Location Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <MapPinIcon className="h-4 w-4 text-accent-600" />
                      <span className="text-sm font-medium text-text-primary">
                        {currentProperty.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-between">
                  <div className="space-y-4 lg:space-y-5">
                    {/* Header with Type Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {currentProperty.type && (
                            <span className={`px-2 py-1 text-xs font-medium rounded-md border ${getPropertyTypeColor(currentProperty.type)}`}>
                              {currentProperty.type.charAt(0).toUpperCase() + currentProperty.type.slice(1)}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-text-primary mb-1 line-clamp-2">
                          {currentProperty.name}
                        </h3>
                        {currentProperty.tagline && (
                          <p className="text-primary-600 font-medium text-sm lg:text-base line-clamp-1">
                            {currentProperty.tagline}
                          </p>
                        )}
                      </div>
                      {currentProperty.priceRange && (
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-primary-600 mb-1">
                            <CurrencyDollarIcon className="h-4 w-4" />
                            <span className="text-xs font-medium">Starting from</span>
                          </div>
                          <div className="text-lg lg:text-xl font-bold text-text-primary">
                            {currentProperty.priceRange.currency}{currentProperty.priceRange.from}
                            {currentProperty.priceRange.to && (
                              <span className="text-sm font-normal text-text-secondary">-{currentProperty.priceRange.to}</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed text-sm lg:text-base line-clamp-3">
                      {currentProperty.description}
                    </p>

                    {/* Key Highlights */}
                    {currentProperty.highlights && currentProperty.highlights.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-text-primary">Key Highlights</h4>
                        <div className="grid grid-cols-1 gap-1.5">
                          {currentProperty.highlights.slice(0, 3).map((highlight, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckIcon className="h-3 w-3 text-green-600 flex-shrink-0" />
                              <span className="text-xs lg:text-sm text-text-secondary">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Specifications */}
                    {currentProperty.specifications && (
                      <div className="grid grid-cols-2 gap-3">
                        {currentProperty.specifications.units && (
                          <div className="flex items-center gap-2">
                            <UserGroupIcon className="h-4 w-4 text-primary-500" />
                            <div>
                              <div className="text-xs text-text-secondary">Units</div>
                              <div className="text-sm font-medium text-text-primary">{currentProperty.specifications.units}</div>
                            </div>
                          </div>
                        )}
                        {currentProperty.specifications.completion && (
                          <div className="flex items-center gap-2">
                            <ClockIcon className="h-4 w-4 text-primary-500" />
                            <div>
                              <div className="text-xs text-text-secondary">Completion</div>
                              <div className="text-sm font-medium text-text-primary">{currentProperty.specifications.completion}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Enhanced Features */}
                    {currentProperty.features && currentProperty.features.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {currentProperty.features.slice(0, 4).map((feature, index) => {
                          const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                          return (
                            <div
                              key={index}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-md border border-primary-100"
                              title={feature.description}
                            >
                              {IconComponent && <IconComponent className="h-3 w-3" />}
                              <span>{feature.title.split(" ")[0]}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* CTA Section */}
                  <div className="pt-4">
                    <Link
                      href={
                        currentProperty.path ||
                        `/developments/${currentProperty.id}`
                      }
                      className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300 group"
                    >
                      <span className="text-sm lg:text-base">Explore Property</span>
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Indicator */}
        {properties.length > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary-600 scale-125"
                    : "bg-primary-200 hover:bg-primary-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
