"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    role: "Homeowner",
    location: "Fairfield Residence",
    content:
      "VRA Land exceeded our expectations in every way. The quality of construction, attention to detail, and customer service throughout the entire process was exceptional. Our family couldn't be happier with our new home.",
    rating: 5,
    image: "/images/testimonials/maria-santos.jpg",
  },
  {
    id: 2,
    name: "Roberto Cruz",
    role: "Business Owner",
    location: "Sotera Township",
    content:
      "As a business owner, location and accessibility are crucial. VRA Land's Sotera Township provided the perfect commercial space with excellent foot traffic and modern amenities. Our business has thrived since moving here.",
    rating: 5,
    image: "/images/testimonials/roberto-cruz.jpg",
  },
  {
    id: 3,
    name: "Jennifer & Mark Wilson",
    role: "Resort Investors",
    location: "Lazule Resort",
    content:
      "Investing in Lazule Resort was one of our best decisions. The stunning location, world-class facilities, and VRA Land's professional management have delivered returns beyond our projections.",
    rating: 5,
    image: "/images/testimonials/wilson-couple.jpg",
  },
  {
    id: 4,
    name: "Carlos Mendoza",
    role: "Retiree",
    location: "Fairfield Residence",
    content:
      "After years of searching for the perfect retirement home, VRA Land delivered exactly what we were looking for. The peaceful environment, modern amenities, and caring community make this place truly special.",
    rating: 5,
    image: "/images/testimonials/carlos-mendoza.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

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
            What Our Clients
            <span className="block text-primary-600">Say About Us</span>
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their VRA Land experience.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial Display */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <StarIcon key={i} className="h-6 w-6 text-accent-500" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-text-primary leading-relaxed text-center mb-8 italic">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-text-primary">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-text-secondary">
                {testimonials[currentIndex].role} •{" "}
                {testimonials[currentIndex].location}
              </p>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-accent-50"
            >
              <ChevronLeftIcon className="h-6 w-6 text-accent-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex
                      ? "bg-accent-600"
                      : "bg-gray-300 hover:bg-accent-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-accent-50"
            >
              <ChevronRightIcon className="h-6 w-6 text-accent-600" />
            </button>
          </div>
        </div>

        {/* All Testimonials Grid (Hidden on mobile, shown on larger screens) */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setCurrentIndex(index)}
              className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
                index === currentIndex ? "ring-2 ring-accent-500" : ""
              }`}
            >
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-accent-500" />
                ))}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>
              <div>
                <h5 className="font-semibold text-text-primary text-sm">
                  {testimonial.name}
                </h5>
                <p className="text-text-secondary text-xs">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
