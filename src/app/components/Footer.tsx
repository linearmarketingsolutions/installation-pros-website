"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Star, ChevronRight } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  services: [
    { label: "AC Installation", href: "#services" },
    { label: "Furnace Installation", href: "#services" },
    { label: "Ductwork Services", href: "#services" },
    { label: "HVAC for Renovations", href: "#services" },
    { label: "Thermostat Installation", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Get Estimate", href: "#estimate" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  serviceAreas: [
    "Rancho Cucamonga",
    "Ontario",
    "Upland",
    "Fontana",
    "Chino",
    "Chino Hills",
    "Corona",
    "Riverside",
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready for a Comfortable Home?
              </h3>
              <p className="text-blue-100">
                Get your free estimate today. No obligation, just honest pricing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#estimate"
                className="btn-accent px-8 py-4 rounded-full text-white font-bold text-center"
              >
                Get Free Estimate
              </a>
              <a
                href="tel:9093454360"
                className="px-8 py-4 rounded-full bg-white/10 text-white font-bold text-center hover:bg-white/20 transition-colors"
              >
                (909) 345-4360
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IP</span>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Installation Pros</h4>
                <p className="text-orange-400 text-sm font-medium">SoCal</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6">
              Family-owned HVAC installation company serving Rancho Cucamonga and 
              all of Southern California with honesty and quality workmanship.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-slate-400">53 Yelp Reviews</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:9093454360"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-orange-400" />
                  (909) 345-4360
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@installationprossocal.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-orange-400" />
                  info@installationprossocal.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span>
                  Rancho Cucamonga, CA<br />
                  Serving all of Southern California
                </span>
              </li>
            </ul>

            {/* Service Areas */}
            <div className="mt-6">
              <h5 className="font-semibold text-white text-sm mb-3">Service Areas</h5>
              <div className="flex flex-wrap gap-2">
                {footerLinks.serviceAreas.slice(0, 4).map((area) => (
                  <span
                    key={area}
                    className="px-2 py-1 bg-slate-800 text-slate-400 rounded text-xs"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Installation Pros SoCal. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                Licensed: CAC #1041882
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Fully Insured & Bonded</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
