"use client";

import { motion } from "framer-motion";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { ContactForm } from "../../forms/ContactForm";

export default function ContactInfoSection() {
  return (
    <section className="section-padding bg-background-primary">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-accent-600 mb-6">
                Contact Information
              </h2>
              <div className="w-16 h-1 bg-accent-500 mb-8"></div>
              <p className="text-text-secondary mb-8">
                Have questions about our developments or ready to start your
                next project? Our team is here to help you every step of the
                way.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent-100 p-3 rounded-lg">
                  <MapPinIcon className="h-6 w-6 text-accent-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-text-primary">
                    Our Office
                  </h3>
                  <p className="mt-1 text-text-secondary">
                    Lumangbayan
                    <br />
                    Calapan City, Oriental Mindoro
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent-100 p-3 rounded-lg">
                  <PhoneIcon className="h-6 w-6 text-accent-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-text-primary">
                    Phone
                  </h3>
                  <p className="mt-1 text-text-secondary">
                    <a
                      href="tel:+XXX XXXX XXXX"
                      className="hover:text-accent-600 transition-colors"
                    >
                      +63 XXX XXXX XXXX
                    </a>
                    <br />
                    <a
                      href="tel:+XXX XXXX XXXX"
                      className="hover:text-accent-600 transition-colors"
                    >
                      +63 XXX XXXX XXXX
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent-100 p-3 rounded-lg">
                  <EnvelopeIcon className="h-6 w-6 text-accent-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-text-primary">
                    Email
                  </h3>
                  <p className="mt-1">
                    <a
                      href="mailto:info@vraland.com.ph"
                      className="text-accent-600 hover:text-accent-700 transition-colors"
                    >
                      info@vraland.com.ph
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent-100 p-3 rounded-lg">
                  <ClockIcon className="h-6 w-6 text-accent-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-text-primary">
                    Business Hours
                  </h3>
                  <p className="mt-1 text-text-secondary">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
