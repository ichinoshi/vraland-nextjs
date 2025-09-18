"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1000);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-8">
              <EnvelopeIcon className="h-8 w-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Stay Updated with
              <span className="block text-primary-600">VRA Land</span>
            </h2>

            <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Be the first to know about new developments, exclusive offers, and important updates. 
              Join our newsletter and never miss an opportunity.
            </p>

            {!isSubmitted ? (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg max-w-lg mx-auto"
              >
                <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-text-primary mb-2">
                  Thank You!
                </h3>
                <p className="text-text-secondary">
                  You&apos;ve successfully subscribed to our newsletter. We&apos;ll keep you updated with the latest news and opportunities.
                </p>
              </motion.div>
            )}

            <div className="mt-8 text-sm text-text-secondary">
              <p>
                By subscribing, you agree to receive marketing emails from VRA Land. 
                You can unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
