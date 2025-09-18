"use client";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  EnvelopeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function CTANewsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // API Endpoint Configuration:
      // Development (Node.js): Use "/api/newsletter" 
      // Production/cPanel (PHP): Use "/php/newsletter.php"
      const apiEndpoint = process.env.NODE_ENV === 'production' ? "/php/newsletter.php" : "/api/newsletter";
      
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Newsletter subscription error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to subscribe. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact CTA Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Ready to Find Your
              <span className="block text-accent-600">Dream Property?</span>
            </h2>

            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Get in touch with our expert team today. We&apos;re here to help you
              discover the perfect property that matches your lifestyle and
              investment goals.
            </p>

            <motion.a
              href="/contact"
              whileHover={{
                y: -2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300"
            >
              Contact Us Today
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* Newsletter Subscription Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <EnvelopeIcon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Stay Updated with
                <span className="block text-accent-600">VRA Land</span>
              </h3>

              <p className="text-lg text-text-secondary leading-relaxed">
                Be the first to know about new developments, exclusive offers,
                and important updates.
              </p>
            </div>

            {!isSubmitted ? (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 text-lg border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-200"
                  />
                </div>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-red-600 text-sm">{error}</p>
                  </motion.div>
                )}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-semibold text-text-primary mb-2">
                  Thank You!
                </h4>
                <p className="text-text-secondary">
                  You&apos;ve successfully subscribed to our newsletter. We&apos;ll keep
                  you updated with the latest news and opportunities.
                </p>
              </motion.div>
            )}

            <div className="mt-6 text-center text-sm text-text-secondary">
              <p>
                By subscribing, you agree to receive marketing emails from VRA
                Land. You can unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
