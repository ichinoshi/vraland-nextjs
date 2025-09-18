"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  CalendarDaysIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  TrophyIcon,
  HeartIcon,
  SparklesIcon,
  MapPinIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

// Component to handle client-side only rendering
const ClientOnlyContent = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
}

export default function OurStorySection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="section-padding bg-primary-900 text-white">
      <div className="max-w-4xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl text-primary-50 md:text-4xl lg:text-5xl font-bold mb-6">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-primary-200 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt - ut labore et dolore magna aliqua enim ad
            minim veniam quis nostrud.
          </p>
        </motion.div>

        {/* Hero Story Section */}
        <motion.div
          className="bg-primary-800/30 p-8 lg:p-12 rounded-2xl backdrop-blur-sm mb-16 border border-primary-700/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
                Lorem Ipsum Dolor Sit Amet
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-primary-100 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat duis aute
                  irure.
                </p>
                <p className="text-lg text-primary-100 leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo nemo enim ipsam.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <CalendarDaysIcon className="h-5 w-5 text-primary-400" />
                    <span className="text-primary-200 font-medium">
                      17+ Lorem Ipsum
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <UserGroupIcon className="h-5 w-5 text-primary-400" />
                    <span className="text-primary-200 font-medium">
                      500+ Dolor Sit
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-900/40" />
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("/images/about/our-beginnings.jpg")',
                  }}
                />
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-primary-800/90 backdrop-blur-sm p-6 rounded-xl border border-primary-600/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-50">25+</div>
                  <div className="text-sm text-primary-300">Lorem Ipsum</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <ClientOnlyContent>
            {isExpanded && (
              <>
                {/* Innovation Section */}
                <motion.div
                  className="bg-primary-800/30 p-8 rounded-xl backdrop-blur-sm border border-primary-700/30"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-56 mb-6 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-primary-700/50" />
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: 'url("/images/about/innovation.jpg")',
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <div className="p-2 bg-primary-800/80 backdrop-blur-sm rounded-lg">
                        <SparklesIcon className="h-6 w-6 text-primary-300" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-50 mb-4">
                    Lorem Ipsum Dolor Sit
                  </h3>
                  <p className="text-primary-100 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-600/30 text-primary-200 text-sm rounded-full">
                      Lorem Ipsum
                    </span>
                    <span className="px-3 py-1 bg-primary-600/30 text-primary-200 text-sm rounded-full">
                      Dolor Sit Amet
                    </span>
                    <span className="px-3 py-1 bg-primary-600/30 text-primary-200 text-sm rounded-full">
                      Consectetur
                    </span>
                  </div>
                </motion.div>

                {/* Community Focus Section */}
                <motion.div
                  className="bg-primary-800/30 p-8 rounded-xl backdrop-blur-sm border border-primary-700/30"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-56 mb-6 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-primary-800/50" />
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: 'url("/images/about/community.jpg")',
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <div className="p-2 bg-primary-800/80 backdrop-blur-sm rounded-lg">
                        <UserGroupIcon className="h-6 w-6 text-primary-300" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-50 mb-4">
                    Consectetur Adipiscing Elit
                  </h3>
                  <p className="text-primary-100 leading-relaxed mb-4">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-600/30 text-primary-200 text-sm rounded-full">
                      Sed Ut
                    </span>
                    <span className="px-3 py-1 bg-primary-600/30 text-primary-200 text-sm rounded-full">
                      Perspiciatis
                    </span>
                    <span className="px-3 py-1 bg-primary-600/30 text-primary-200 text-sm rounded-full">
                      Unde Omnis
                    </span>
                  </div>
                </motion.div>

                {/* Future Vision Section */}
                <motion.div
                  className="bg-primary-800/30 p-8 lg:p-10 rounded-xl backdrop-blur-sm border border-primary-700/30 md:col-span-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-bold text-primary-50 mb-8 text-center">
                    Lorem Ipsum Dolor Sit Amet Consectetur
                  </h3>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="relative h-80 rounded-xl overflow-hidden order-last lg:order-first">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/40 to-primary-700/60" />
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: 'url("/images/about/future.jpg")',
                        }}
                      />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-primary-800/90 backdrop-blur-sm p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-lg font-bold text-primary-50">
                                Lorem Ipsum
                              </div>
                              <div className="text-sm text-primary-300">
                                2025-2030
                              </div>
                            </div>
                            <RocketLaunchIcon className="h-8 w-8 text-primary-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <p className="text-lg text-primary-100 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip.
                      </p>
                      <p className="text-lg text-primary-100 leading-relaxed">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="text-center p-4 bg-primary-700/30 rounded-lg">
                          <div className="text-2xl font-bold text-primary-400">
                            3
                          </div>
                          <div className="text-sm text-primary-300">
                            Lorem Ipsum
                          </div>
                        </div>
                        <div className="text-center p-4 bg-primary-700/30 rounded-lg">
                          <div className="text-2xl font-bold text-primary-400">
                            1000+
                          </div>
                          <div className="text-sm text-primary-300">
                            Dolor Sit
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </ClientOnlyContent>

          <ClientOnlyContent>
            <motion.div
              className="md:col-span-2 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-500 hover:to-primary-600 transition-all duration-300 w-full transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>
                    {isExpanded
                      ? "Lorem Ipsum Dolor"
                      : "Consectetur Adipiscing Elit"}
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </span>
              </button>
            </motion.div>
          </ClientOnlyContent>
        </div>
      </div>
    </section>
  );
}
