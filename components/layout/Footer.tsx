"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

const navigation = {
  main: [
    { name: "About Us", href: "/about" },
    { name: "Virtual Tour", href: "/virtual-tour" },
    { name: "Developments", href: "/developments" },
    { name: "Lifestyle", href: "/lifestyle" },
    { name: "News", href: "/news" },
    { name: "FAQs", href: "/faqs" },
    { name: "Gallery", href: "/gallery" },
  ],
  developments: [
    { name: "Fairfield Residence", href: "/developments/fairfield-residence" },
    { name: "Sotera Township", href: "/developments/sotera-township" },
    { name: "Lazule Resort", href: "/developments/lazule-resort" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com/vraland",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/vraland",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.02.43a5.105 5.105 0 00-1.852 1.207 5.105 5.105 0 00-1.207 1.852C1.734 4.02 1.612 4.594 1.578 5.541 1.544 6.489 1.53 6.896 1.53 10.517s.013 4.028.048 4.976c.034.947.156 1.521.43 2.021.225.719.602 1.33 1.207 1.852a5.105 5.105 0 001.852 1.207c.5.274 1.074.396 2.021.43.948.035 1.355.048 4.976.048s4.028-.013 4.976-.048c.947-.034 1.521-.156 2.021-.43a5.105 5.105 0 001.852-1.207 5.105 5.105 0 001.207-1.852c.274-.5.396-1.074.43-2.021.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.947-.156-1.521-.43-2.021a5.105 5.105 0 00-1.207-1.852A5.105 5.105 0 0016.021.478C15.521.204 14.947.082 14 .048 13.052.013 12.645 0 12.017 0zm0 1.44c3.383 0 3.787.012 4.12.048.994.045 1.533.207 1.893.344.475.184.813.404 1.169.76.356.356.576.694.76 1.169.137.36.299.899.344 1.893.036.333.048.737.048 4.12s-.012 3.787-.048 4.12c-.045.994-.207 1.533-.344 1.893-.184.475-.404.813-.76 1.169-.356.356-.694.576-1.169.76-.36.137-.899.299-1.893.344-.333.036-.737.048-4.12.048s-3.787-.012-4.12-.048c-.994-.045-1.533-.207-1.893-.344a3.165 3.165 0 01-1.169-.76 3.165 3.165 0 01-.76-1.169c-.137-.36-.299-.899-.344-1.893-.036-.333-.048-.737-.048-4.12s.012-3.787.048-4.12c.045-.994.207-1.533.344-1.893.184-.475.404-.813.76-1.169a3.165 3.165 0 011.169-.76c.36-.137.899-.299 1.893-.344.333-.036.737-.048 4.12-.048z"
            clipRule="evenodd"
          />
          <path d="M12.017 5.838a4.679 4.679 0 100 9.358 4.679 4.679 0 000-9.358zm0 7.718a3.04 3.04 0 110-6.078 3.04 3.04 0 010 6.078z" />
          <circle cx="16.948" cy="5.155" r="1.237" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/vraland",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@vraland",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ],
};

const contactInfo = [
  {
    icon: MapPinIcon,
    label: "Main Office",
    value: "Calapan City, Oriental Mindoro",
    subValue: "Philippines 5200",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+63 917 123 4567",
    subValue: "Mon-Sat 9AM-6PM",
  },
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "info@vraland.com.ph",
    subValue: "We reply within 24 hours",
  },
];

export default function Footer() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Handle navigation or show coming soon message
  };

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Handle social media links
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Handle contact actions
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-accent-300 to-accent-100 bg-clip-text text-transparent">VRA Land</div>
                  <div className="text-sm text-accent-200">
                    Development Inc.
                  </div>
                </div>
              </div>
              <p className="text-primary-100 leading-relaxed mb-6">
                Creating exceptional living experiences through innovative real
                estate developments in Oriental Mindoro and beyond.
              </p>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-primary-700/50 rounded-xl flex items-center justify-center text-primary-200 hover:text-white hover:bg-accent-500/80 transition-all duration-200 backdrop-blur-sm"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`transition-colors duration-200 flex items-center group ${
                        isActive(item.href)
                          ? "text-accent-300 font-medium"
                          : "text-primary-200 hover:text-primary-50"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full mr-3 transition-all duration-200 ${
                          isActive(item.href)
                            ? "bg-accent-300 opacity-100 scale-110"
                            : "bg-primary-400 opacity-0 group-hover:opacity-100"
                        }`}
                      ></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Developments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">
                Our Developments
              </h3>
              <ul className="space-y-3 mb-8">
                {navigation.developments.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`transition-colors duration-200 flex items-center group ${
                        isActive(item.href)
                          ? "text-accent-300 font-medium"
                          : "text-primary-200 hover:text-primary-50"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full mr-3 transition-all duration-200 ${
                          isActive(item.href)
                            ? "bg-accent-300 opacity-100 scale-110"
                            : "bg-primary-400 opacity-0 group-hover:opacity-100"
                        }`}
                      ></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-sm font-semibold text-primary-200 mb-3">
                Legal
              </h4>
              <ul className="space-y-2">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-300 hover:text-accent-300 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">
                Contact Us
              </h3>
              <ul className="space-y-6">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary-700/70 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <item.icon className="h-5 w-5 text-accent-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary-200">
                        {item.label}
                      </div>
                      <div className="text-white font-medium">{item.value}</div>
                      <div className="text-sm text-primary-300">
                        {item.subValue}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700/30">
          <div className="max-w-7xl mx-auto px-6 py-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-primary-300">
                &copy; 2024 VRA Land. All rights reserved. | Licensed Real
                Estate Developer
              </div>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-primary-700/50 rounded-xl flex items-center justify-center text-primary-200 hover:text-white hover:bg-accent-500/80 transition-all duration-200 backdrop-blur-sm"
              >
                <ArrowUpIcon className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
