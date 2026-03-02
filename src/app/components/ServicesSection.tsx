"use client";

import { motion } from "framer-motion";
import {
  Refrigerator,
  Flame,
  Microwave,
  Wind,
  Droplets,
  Bath,
  Check,
  ArrowRight,
} from "lucide-react";

const applianceServices = [
  {
    icon: Refrigerator,
    title: "Dishwashers",
    description:
      "Including cutout creation — $205 flat rate. We handle the full install from start to finish.",
    features: ["Standard & built-in", "Cutout creation", "All brands"],
  },
  {
    icon: Flame,
    title: "Ovens & Ranges",
    description:
      "Gas and electric ovens, ranges, cooktops, and built-in ovens. Professional installation every time.",
    features: ["Gas & electric", "Built-in ovens", "Cooktops"],
  },
  {
    icon: Microwave,
    title: "Microwaves & Hoods",
    description:
      "Over-the-range microwaves, range hoods, island hoods, and chimney hoods.",
    features: ["Over-range microwaves", "Range hoods", "Island hoods"],
  },
  {
    icon: Refrigerator,
    title: "Refrigerators",
    description:
      "Standard, built-in, and column refrigerators. Ice makers, mini fridges, and wine coolers.",
    features: ["All sizes", "Ice makers", "Wine coolers"],
  },
  {
    icon: Droplets,
    title: "Washers & Dryers",
    description:
      "Full installation of washers and dryers. We handle hookups, leveling, and testing.",
    features: ["Stacked or side-by-side", "Gas & electric dryers"],
  },
  {
    icon: Wind,
    title: "More Appliances",
    description:
      "Trash compactors and specialty appliances. If it needs installing, we can do it.",
    features: ["Trash compactors", "Specialty installs"],
  },
];

const plumbingServices = [
  {
    icon: Bath,
    title: "Toilets",
    description:
      "All brands including Toto. Professional installation with proper sealing and testing.",
    features: ["All brands", "Toto specialists", "Wax ring replacement"],
  },
  {
    icon: Droplets,
    title: "Faucets & Sinks",
    description:
      "Kitchen and bathroom faucets, sinks, and full plumbing hookups.",
    features: ["Kitchen & bath", "Pull-down faucets", "Disposal hookups"],
  },
  {
    icon: Wind,
    title: "Garbage Disposals",
    description:
      "Remove old units and install new garbage disposals. Clean, professional work.",
    features: ["All brands", "Electrical hookup", "Haul-away old unit"],
  },
  {
    icon: Droplets,
    title: "Water Heaters & RO",
    description:
      "Flat-rate water heater installation. Reverse osmosis systems.",
    features: ["Water heaters", "RO systems", "Flat-rate pricing"],
  },
];

const allServices = [...applianceServices, ...plumbingServices];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-red font-semibold text-sm tracking-widest uppercase mb-4">
            Our Services
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-black mb-6">
            Appliance & Plumbing
            <br />
            <span className="text-brand-red">Installation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We install — we don&apos;t repair. From dishwashers to toilets,
            we get it done right the first time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-brand-red/30 hover:shadow-brand-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-brand-gray rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-brand-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <Check className="w-4 h-4 text-brand-red flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-brand-red font-semibold group/link"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-brand-gray rounded-2xl">
            <div>
              <h3 className="text-2xl font-bold text-brand-black mb-2">
                Not sure what you need?
              </h3>
              <p className="text-gray-600">
                We&apos;ll assess your project and give you an honest quote.
              </p>
            </div>
            <a
              href="tel:9097683650"
              className="btn-brand px-8 py-4 rounded-full font-bold whitespace-nowrap"
            >
              Call for Free Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
