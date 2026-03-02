"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { ServiceAreaMap } from "./ServiceAreaMap";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-brand-red font-semibold text-sm tracking-widest uppercase mb-4">
              Contact Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black mb-6">
              Get In{" "}
              <span className="text-brand-red">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to get started? Call us for a free quote. We typically
              respond within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="tel:9097683650"
                className="flex items-center gap-4 p-4 bg-brand-gray rounded-xl hover:bg-brand-gray/80 transition-colors"
              >
                <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call or Text</p>
                  <p className="font-bold text-brand-black">(909) 768-3650</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-brand-gray rounded-xl">
                <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Business Hours</p>
                  <p className="font-bold text-brand-black">
                    Mon–Fri: 8:00 AM – 7:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-brand-gray rounded-xl">
                <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-bold text-brand-black">
                    Rancho Cucamonga, CA 91730
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-brand-red/10 rounded-xl border border-brand-red/20">
              <p className="font-semibold text-brand-black mb-1">Verified License</p>
              <p className="text-sm text-gray-600">
                Yelp-verified licensed business • Fully insured
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-brand-gray rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-brand-black mb-6">
                Request a Quote
              </h3>
              <p className="text-gray-600 mb-6">
                For the fastest response, call us directly. For a quote request,
                message us through Yelp.
              </p>
              <a
                href="https://www.yelp.com/biz/installation-pros-rancho-cucamonga-4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold"
              >
                Get Quote on Yelp
                <Send className="w-5 h-5" />
              </a>
              <div className="mt-6 text-center">
                <a
                  href="tel:9097683650"
                  className="text-brand-red font-semibold hover:underline"
                >
                  Or call (909) 768-3650 now
                </a>
              </div>
            </div>

          </motion.div>
        </div>

        <ServiceAreaMap />
      </div>
    </section>
  );
}
