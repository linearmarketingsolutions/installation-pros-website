"use client";

import { motion } from "framer-motion";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

const cities = [
  "Rancho Cucamonga",
  "Ontario",
  "Upland",
  "Fontana",
  "Chino",
  "Chino Hills",
  "Corona",
  "Riverside",
  "San Bernardino",
  "Redlands",
  "Pomona",
  "Diamond Bar",
  "Anaheim",
  "Orange",
  "Irvine",
  "Palm Springs",
  "Temecula",
  "San Clemente",
  "Huntington Beach",
];

export function ServiceAreasSection() {
  return (
    <section
      id="service-areas"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: "#0A0A0A",
        boxShadow: "inset 0 0 120px rgba(204, 0, 0, 0.08)",
      }}
    >
      {/* Subtle red glow behind section */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(204,0,0,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible className="text-center mb-12">
          <span className="inline-block text-brand-red font-semibold text-sm tracking-widest uppercase mb-4">
            Service Areas
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            We Come To You
          </h2>
          <p className="text-xl text-gray-400">
            Serving Palm Springs to Huntington Beach
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {cities.map((city, index) => (
            <FadeInWhenVisible
              key={city}
              delay={index * 0.02}
              className="px-5 py-2.5 bg-brand-red rounded-full text-white font-semibold text-sm hover:bg-brand-red/90 hover:scale-105 transition-all cursor-default"
            >
              {city}
            </FadeInWhenVisible>
          ))}
        </FadeInWhenVisible>

        <FadeInWhenVisible className="text-center text-gray-500 mt-10 text-sm">
          <p>Inland Empire • Orange County • Southern California</p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
