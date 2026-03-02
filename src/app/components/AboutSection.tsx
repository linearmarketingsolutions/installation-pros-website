"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Team Photo - from Yelp */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full">
              <Image
                src="/Installpros-New-Team.png"
                alt="Installation Pros team - Cody and crew in black uniforms"
                width={686}
                height={1024}
                className="w-full h-auto block"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-brand-red text-white rounded-lg px-4 py-2 font-bold flex items-center gap-2">
                <span>5.0</span>
                <span className="text-sm font-normal">180 Yelp Reviews</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="inline-block text-brand-red font-semibold text-sm tracking-widest uppercase mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black mb-6">
              Built on Reputation.
              <br />
              <span className="text-brand-red">Run by Family.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Installation Pros was founded by Cody Watts right here in Rancho
              Cucamonga. What started as a one-person operation has grown into
              a trusted team serving homeowners across Southern California —
              from the Inland Empire to Orange County and beyond.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We don&apos;t run on 4-hour windows and vague promises. We show up
              in your 2-hour window, call you 20–30 minutes before we arrive,
              and leave your home cleaner than we found it. Every install is
              flat-rate — no hidden fees, no surprises.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our reputation speaks for itself: 5.0 stars across 180 Yelp
              reviews. We&apos;re proud of that, and we work every day to earn
              it.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-brand px-8 py-4 rounded-full font-bold"
              >
                Get a Free Quote
              </a>
              <a
                href="https://www.yelp.com/biz/installation-pros-rancho-cucamonga-4"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border-2 border-brand-black text-brand-black font-bold hover:bg-brand-black hover:text-white transition-all"
              >
                Read Our Yelp Reviews
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
