"use client";

import { motion } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function ContactSupportSection() {
  return (
    <section className="py-24 bg-primary-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <PhoneIcon className="h-16 w-16 text-accent-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our friendly team is
            here to help you with any questions about VRA Land developments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl"
            >
              Contact Our Team
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-primary-100">
            <div>
              <h4 className="font-semibold mb-2">Sales Hotline</h4>
              <p className="text-sm">+63 XXX XXX XXXX</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Email Support</h4>
              <p className="text-sm">info@vraland.com.ph</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Office Hours</h4>
              <p className="text-sm">Mon-Fri: 8AM-5PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
