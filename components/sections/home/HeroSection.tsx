"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const heroImages = [
  {
    id: 1,
    src: "/images/developments/sotera.jpg",
    alt: "Sotera Development Master Site",
    title: "Sotera Township",
    subtitle: "Integrated Mixed-Use Development",
  },
  {
    id: 2,
    src: "/images/developments/fairfield.jpg",
    alt: "Fairfield Residence Premium Living",
    title: "Fairfield Residence",
    subtitle: "Premium Urban Condominium",
  },
  {
    id: 3,
    src: "/images/developments/lazule.jpg",
    alt: "Lazule Resort Luxury Experience",
    title: "Lazule Resort",
    subtitle: "Luxury Resort Experience",
  },
];

// Reduced floating elements for better performance
const floatingElements = [
  { id: 1, size: "w-2 h-2", delay: 0, duration: 15 },
  { id: 2, size: "w-1 h-1", delay: 5, duration: 20 },
  { id: 3, size: "w-1.5 h-1.5", delay: 10, duration: 18 },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };


  const scrollToNext = () => {
    const nextSection = document.querySelector("#about-company");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      ref={heroRef}
      className="relative h-screen min-h-[600px] max-h-[900px] sm:h-screen overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Simplified Floating Background Elements */}
      {isMounted && (
        <div className="absolute inset-0 z-0">
          {floatingElements.map((element) => (
            <motion.div
              key={element.id}
              className={`absolute ${element.size} bg-white/8 rounded-full`}
              initial={{
                x: Math.random() * (window.innerWidth * 0.8),
                y: Math.random() * (window.innerHeight * 0.8),
                opacity: 0,
              }}
              animate={{
                y: [window.innerHeight + 50, -50],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: element.duration,
                delay: element.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Optimized Background with Subtle Parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-0 z-1"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImages[currentSlide].src})`,
            }}
          />

          <div className="absolute inset-0 bg-primary-900/60" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full max-w-7xl mx-auto">
          {/* Current Project Title */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-primary-100 px-2">
              {heroImages[currentSlide].title}
            </h2>
          </motion.div>

          {/* Main Heading with Gradient Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              <span className="block text-white mb-1 sm:mb-2">
                Build Your Future with VRA Land
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Discover premium integrated communities designed for modern living,
            where luxury meets sustainability in the heart of Oriental Mindoro.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-accent-500/20 transition-all duration-200 overflow-hidden"
              onClick={() => router.push("/developments")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="relative flex items-center justify-center">
                <span className="text-base sm:text-lg">
                  Explore Developments
                </span>
                <ChevronRightIcon className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              onClick={() => router.push("/virtual-tour")}
            >
              <span className="text-base sm:text-lg">Virtual Tour</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-30 hidden sm:block"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.button
          onClick={scrollToNext}
          className="group flex flex-col items-center space-y-1 sm:space-y-2 text-white/70 hover:text-white transition-colors duration-200"
          whileHover={{ y: -1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDownIcon className="h-4 w-4 sm:h-5 sm:w-5 group-hover:text-primary-300 transition-colors duration-200" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Side Navigation */}
      <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-30 hidden md:block">
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <motion.button
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + heroImages.length) % heroImages.length
              )
            }
            whileHover={{ scale: 1.05, x: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="p-2 sm:p-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white hover:bg-primary-600/60 transition-all duration-200"
          >
            <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>
          <motion.button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % heroImages.length)
            }
            whileHover={{ scale: 1.05, x: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="p-2 sm:p-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white hover:bg-primary-600/60 transition-all duration-200"
          >
            <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 block sm:hidden">
        <div className="flex space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "tween", duration: 0.2 }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-white shadow-sm"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
