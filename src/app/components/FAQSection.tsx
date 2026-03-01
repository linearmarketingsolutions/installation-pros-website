"use client";

import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How much does AC installation cost in Rancho Cucamonga?",
    answer: "AC installation costs vary based on home size, system type, and efficiency rating. On average, homeowners in Rancho Cucamonga can expect to invest between $4,000-$8,000 for a complete installation. Factors that affect price include the SEER rating (higher efficiency costs more upfront but saves on energy bills), the size of your home, whether new ductwork is needed, and any necessary electrical upgrades. We offer free, detailed estimates with no obligation.",
  },
  {
    question: "How long does HVAC installation take?",
    answer: "Most residential HVAC installations are completed in 1-2 days. A straightforward AC or furnace replacement typically takes 4-8 hours. However, larger homes, complex ductwork modifications, or full system replacements may take 3-5 days. During your consultation, we'll assess your specific situation and provide a clear timeline so you know exactly what to expect.",
  },
  {
    question: "Do you offer financing for HVAC installation?",
    answer: "Yes! We understand that HVAC systems are a significant investment. We partner with financing providers to offer flexible payment options for qualified homeowners, including 0% interest plans and low monthly payments. During your consultation, we can discuss financing plans that work with your budget. We also help you identify any available rebates and tax credits for energy-efficient systems.",
  },
  {
    question: "What size AC unit do I need for my home?",
    answer: "AC unit size is measured in tons and depends on several factors: square footage, ceiling height, insulation quality, number of windows, and local climate. A general rule is 1 ton per 400-600 square feet, but this varies. A home that's 2,000 square feet typically needs a 3-4 ton unit. We perform a Manual J load calculation to determine the exact size you need—ensuring optimal efficiency and comfort without over or under-sizing.",
  },
  {
    question: "What areas do you serve in Southern California?",
    answer: "We proudly serve Rancho Cucamonga and surrounding areas throughout the Inland Empire, including Ontario, Upland, Fontana, Chino, Chino Hills, Corona, Riverside, Eastvale, and nearby communities. If you're unsure whether we service your area, just give us a call at (909) 345-4360 and we'll let you know.",
  },
  {
    question: "Should I repair or replace my old HVAC system?",
    answer: "Consider replacement if your system is over 10-15 years old, needs frequent repairs, has a refrigerant leak (especially R-22), or your energy bills are rising. The $5,000 rule is helpful: multiply the repair cost by the system's age. If over $5,000, replacement is usually better. New systems are also significantly more energy-efficient—often 20-40% more efficient than units from 10+ years ago.",
  },
  {
    question: "Do you offer warranties on your installations?",
    answer: "Absolutely! We stand behind our work with comprehensive warranties. Our labor warranty covers installation work for 2 years. Equipment warranties vary by manufacturer but typically include 10 years on parts for registered systems. We also offer extended warranty options for additional peace of mind. All warranty details are provided in writing with your quote.",
  },
  {
    question: "What brands do you install?",
    answer: "We work with all major HVAC brands including Carrier, Trane, Lennox, Goodman, Rheem, and Daikin. We don't push any particular brand—instead, we recommend the best system for your specific needs, budget, and home. We're happy to discuss the pros and cons of different brands and help you make an informed decision.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-slate-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-semibold text-slate-900 text-lg pr-8 group-hover:text-blue-600 transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-slate-400" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-slate-600 leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked{" "}
            <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. Here&apos;s everything you need to know 
            about HVAC installation in Southern California.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4">
            Still have questions? We&apos;re happy to help!
          </p>
          <a
            href="tel:9093454360"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold"
          >
            Call Cody: (909) 345-4360
          </a>
        </motion.div>
      </div>
    </section>
  );
}
