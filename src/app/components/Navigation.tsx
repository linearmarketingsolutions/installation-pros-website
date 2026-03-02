"use client";

import { motion } from "framer-motion";
import { Phone, Menu, X, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#service-areas", label: "Areas" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Always visible */}
      <div className="bg-brand-black text-white py-2.5 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-brand-red text-brand-red" />
              ))}
            </div>
            <span className="hidden sm:inline text-gray-300">180 Reviews on Yelp</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline text-gray-400">Verified License</span>
            <span className="hidden sm:inline text-gray-500">|</span>
            <a
              href="tel:9097683650"
              className="flex items-center gap-2 font-semibold hover:text-brand-red transition-colors"
            >
              <Phone className="w-4 h-4" />
              (909) 768-3650
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Sticky, always black background */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-brand-black shadow-lg shadow-black/50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <Link href="/" className="flex items-center text-white">
              <Logo variant="light" />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:9097683650"
                className="btn-brand px-6 py-2.5 rounded-full font-semibold text-sm"
              >
                Call Now
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
          className="lg:hidden overflow-hidden bg-brand-black"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-300 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9097683650"
              className="btn-brand w-full py-3 rounded-full font-bold text-center mt-4 block"
            >
              Call (909) 768-3650
            </a>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}
