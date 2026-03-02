"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Phone,
  DollarSign,
  Trash2,
  Truck,
  BadgeCheck,
} from "lucide-react";

const differentiators = [
  {
    icon: Clock,
    title: "2-Hour Arrival Windows",
    description: "Unlike competitors' 4–6 hour windows. We respect your time.",
  },
  {
    icon: Phone,
    title: "20–30 Min Call-Ahead",
    description: "We call before we arrive. No more guessing when we'll show up.",
  },
  {
    icon: DollarSign,
    title: "Flat-Rate Pricing",
    description: "No hidden fees. Know your price upfront. No surprises.",
  },
  {
    icon: Trash2,
    title: "Free Haul-Away",
    description: "We remove your old appliance at no charge. We clean up.",
  },
  {
    icon: Truck,
    title: "Delivery Available",
    description: "Need it delivered too? We've got you covered.",
  },
  {
    icon: BadgeCheck,
    title: "15% Hero Discount",
    description: "Military, Police & Fire — thank you for your service.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-red font-semibold text-sm tracking-widest uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-6">
            We Show Up. We Do It Right.
            <br />
            <span className="text-brand-red">We Clean Up.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No-nonsense service from a local crew with a big reputation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 p-8 rounded-2xl bg-brand-black/50 border border-white/10 hover:border-brand-red/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-7 h-7 text-brand-red" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            Plus: ASL proficient • Credit cards & cryptocurrency accepted •
            Verified License
          </p>
        </motion.div>
      </div>
    </section>
  );
}
