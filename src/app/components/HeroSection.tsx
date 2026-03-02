"use client";

import { motion } from "framer-motion";
import { Phone, ChevronRight, Star, Wrench } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { value: 500, suffix: "+", label: "Installations" },
  { value: 5, suffix: ".0", label: "Yelp Rating", stars: true },
  { value: 180, suffix: "", label: "Reviews" },
  { value: 2, suffix: "-Hr", label: "Arrival Windows" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-black"
    >
      {/* Red gradient accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(204,0,0,0.4) 0%, transparent 60%)",
        }}
      />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="flex items-center gap-2 bg-brand-red/20 text-white px-4 py-2 rounded-full text-sm font-semibold border border-brand-red/40">
                <Wrench className="w-4 h-4" />
                Appliance & Plumbing Installation
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6"
            >
              The Pros You Call
              <br />
              <span className="text-brand-red">When You Want It</span>
              <br />
              <span className="text-brand-red">Done Right.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
            >
              Household Appliance & Plumbing Fixture Installation — Serving the
              Inland Empire & Orange County
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#contact"
                className="btn-brand px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 group"
              >
                <span>Get a Free Quote</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:9097683650"
                className="px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-brand-black transition-all"
              >
                <Phone className="w-5 h-5" />
                Call (909) 768-3650
              </a>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-brand-dark/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-brand-red/30 transition-colors"
              >
                <div className="text-4xl lg:text-5xl font-display font-extrabold text-white mb-2">
                  {stat.stars ? (
                    <span>5.0</span>
                  ) : (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                {stat.stars && (
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-5 h-5 fill-brand-red text-brand-red"
                      />
                    ))}
                  </div>
                )}
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-gray-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
