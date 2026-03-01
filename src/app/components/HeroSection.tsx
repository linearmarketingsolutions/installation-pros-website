"use client";

import { motion } from "framer-motion";
import { Phone, Shield, Clock, Award, ChevronRight, Star, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-brand overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                Licensed CAC #1041882
              </div>
              <div className="flex items-center gap-1 text-sm font-medium">
                <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span>5.0 Yelp Rating</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-[1.1] mb-8"
            >
              Professional
              <br />
              <span className="text-orange-500">HVAC Installation</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-600">
                Southern California
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed"
            >
              Family-owned experts keeping homes comfortable across SoCal. 
              From AC installation to complete HVAC systems — done right the first time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#estimate"
                className="btn-brand px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 group"
              >
                <span>Get Free Estimate</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:9093454360"
                className="btn-outline px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                (909) 345-4360
              </a>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 text-gray-500"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Serving: Rancho Cucamonga • Riverside • Anaheim • Temecula • Palm Springs • All of SoCal</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="card-brand p-8 rounded-2xl"
              >
                <div className="text-5xl font-bold text-black mb-2">5.0</div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <div className="text-gray-600 text-sm">Yelp Rating</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="card-brand p-8 rounded-2xl bg-black text-white"
              >
                <div className="text-5xl font-bold mb-2">53+</div>
                <div className="text-gray-400 text-sm mb-2">Happy Customers</div>
                <div className="text-xs text-gray-500">And counting</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="card-brand p-8 rounded-2xl col-span-2"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-black mb-1">Same-Day Service Available</div>
                    <div className="text-gray-600">Emergency HVAC needs? We prioritize urgent calls and can often provide same-day installation.</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
