"use client";

import { motion } from "framer-motion";
import { Phone, Menu, X, Star, Wrench, Home } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#estimate", label: "Get Estimate" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white py-2.5 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
              ))}
            </div>
            <span className="hidden sm:inline text-gray-300">53 Reviews on Yelp</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline text-gray-400">Licensed CAC #1041882</span>
            <a 
              href="tel:9093454360" 
              className="flex items-center gap-2 font-semibold hover:text-orange-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (909) 345-4360
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg border-b border-gray-100"
            : "bg-white/95 backdrop-blur-sm border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo - Matches Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex items-center justify-center">
                {/* House outline with tools */}
                <div className="absolute inset-0 border-2 border-black rounded-lg group-hover:border-orange-500 transition-colors" />
                <div className="flex items-center gap-0.5">
                  <Wrench className="w-4 h-4 text-black" />
                  <div className="w-0.5 h-4 bg-black" />
                  <Wrench className="w-4 h-4 text-black rotate-180" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-xl text-black leading-tight tracking-tight">
                  INSTALLATION
                </h1>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-8 bg-gray-300" />
                  <p className="text-sm text-gray-500 font-medium tracking-widest">PRO&apos;S</p>
                  <div className="h-0.5 w-8 bg-gray-300" />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-black font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:9093454360"
                className="btn-brand px-6 py-2.5 rounded-full font-semibold text-sm"
              >
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-black transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
          className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-800 hover:text-orange-500 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9093454360"
              className="btn-brand w-full py-3 rounded-full font-bold text-center mt-4 block"
            >
              <span>Call (909) 345-4360</span>
            </a>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}
