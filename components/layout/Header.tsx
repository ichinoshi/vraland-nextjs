"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About Us", href: "/about" },
  { name: "Virtual Tour", href: "/virtual-tour" },
  { name: "Developments", href: "/developments" },
  { name: "Lifestyle", href: "/lifestyle" },
  { name: "News", href: "/news" },
  { name: "FAQs", href: "/faqs" },
  { name: "Gallery", href: "/gallery" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the header
        setIsHidden(true);
      } else {
        // if scroll up show the header
        setIsHidden(false);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          controlHeader();
          ticking = null;
        });
        ticking = setTimeout(() => {}, 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (ticking) clearTimeout(ticking);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, controlHeader]);

  return (
    <>
      {/* Main Header: Fixed positioning, responsive margins and padding */}
      <header
        className={`fixed top-0 left-0 right-0 mt-2 sm:mt-3 md:mt-4 z-50 transition-all duration-300 ease-in-out mx-auto max-w-7xl rounded-2xl transform ${
          isHidden
            ? "-translate-y-[calc(100%+0.5rem)] sm:-translate-y-[calc(100%+0.75rem)] md:-translate-y-[calc(100%+1rem)]"
            : "translate-y-0"
        } ${
          mobileMenuOpen
            ? "bg-white/90 backdrop-blur-lg shadow-2xl border border-gray-100"
            : "bg-white/90 backdrop-blur-md shadow-lg border border-gray-50"
        }`}
      >
        <nav
          className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2 sm:py-3"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 group">
              <span className="sr-only">VRA Land</span>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-base sm:text-lg">
                    V
                  </span>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-accent-700 to-accent-500 bg-clip-text text-transparent">
                    VRA Land
                  </div>
                  <div className="text-[10px] sm:text-xs text-accent-600 -mt-1">
                    Development Inc.
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="relative -m-2 inline-flex items-center justify-center rounded-lg p-2 text-primary-700 hover:text-accent-600 hover:bg-accent-50 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-5 sm:h-6 w-5 sm:w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-xs xl:text-sm font-semibold leading-6 transition-all duration-200 px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg ${
                    isActive(item.href)
                      ? "text-accent-700"
                      : "text-gray-700 hover:text-accent-600"
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs xl:text-sm font-semibold px-4 xl:px-6 py-2 xl:py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-accent-200 hover:scale-[1.02] hover:from-accent-600 hover:to-accent-700 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-80 md:w-96 overflow-y-auto bg-white/95 backdrop-blur-lg px-4 sm:px-6 py-4 sm:py-6 border-l border-gray-100 rounded-l-2xl shadow-2xl">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">VRA Land</span>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-7 sm:w-8 h-7 sm:h-8 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm sm:text-base">
                      V
                    </span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-accent-700 to-accent-500 bg-clip-text text-transparent">
                    VRA Land
                  </div>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2 rounded-lg p-2 text-primary-700 hover:text-accent-600 hover:bg-accent-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  className="h-5 sm:h-6 w-5 sm:w-6"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div className="mt-6 sm:mt-8 flow-root">
              <div className="-my-4 sm:-my-6 divide-y divide-primary-100">
                <div className="space-y-2 py-4 sm:py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className={`-mx-3 block rounded-xl px-3 py-2 sm:py-3 text-sm sm:text-base font-semibold leading-7 transition-colors ${
                          isActive(item.href)
                            ? "text-accent-700 bg-accent-50"
                            : "text-gray-700 hover:text-accent-600 hover:bg-accent-50"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="py-4 sm:py-6">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white -mx-3 block rounded-xl px-3 py-2 sm:py-3 text-sm sm:text-base font-semibold leading-7 text-center shadow-lg hover:shadow-accent-200 transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
