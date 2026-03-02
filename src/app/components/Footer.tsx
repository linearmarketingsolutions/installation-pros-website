"use client";

import { Phone, Mail, MapPin, Star, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

const footerLinks = {
  services: [
    { label: "Appliance Installation", href: "#services" },
    { label: "Plumbing Fixtures", href: "#services" },
    { label: "Dishwashers", href: "#services" },
    { label: "Toilets & Faucets", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  serviceAreas: [
    "Rancho Cucamonga",
    "Ontario",
    "Riverside",
    "Anaheim",
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-black text-gray-400">
      {/* CTA Banner */}
      <div className="bg-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Ready for a Professional Install?
              </h3>
              <p className="text-red-100">
                Get your free quote today. Flat-rate pricing, no surprises.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-white text-brand-red font-bold text-center hover:bg-brand-gray transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href="tel:9097683650"
                className="px-8 py-4 rounded-full bg-white/10 text-white font-bold text-center hover:bg-white/20 transition-colors"
              >
                (909) 768-3650
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Logo variant="light" />
            </Link>
            <p className="text-gray-400 mb-6">
              Family-owned appliance and plumbing fixture installation in
              Southern California. Flat-rate. 2-hour windows. 5.0 stars.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-red text-brand-red" />
                ))}
              </div>
              <span className="text-sm text-gray-400">180 Yelp Reviews</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-red transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-red transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:9097683650"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-brand-red" />
                  (909) 768-3650
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@installationprossocal.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-brand-red" />
                  info@installationprossocal.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>
                  Rancho Cucamonga, CA 91730
                  <br />
                  Inland Empire & Orange County
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold text-white text-sm mb-3">Service Areas</h5>
              <div className="flex flex-wrap gap-2">
                {footerLinks.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-2 py-1 bg-brand-dark text-gray-400 rounded text-xs"
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
      <div className="border-t border-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Installation Pros. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>Verified License</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Fully Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
