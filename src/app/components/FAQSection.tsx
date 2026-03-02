"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do you install dishwashers if there's no existing cutout?",
    answer:
      "Yes! Basic dishwasher installation starts at $205. Contact us for custom cutout situations.",
  },
  {
    question: "Do you haul away old appliances?",
    answer:
      "Yes, haul-away is free of charge (some exceptions for oversized appliances).",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the Inland Empire, Orange County, and surrounding areas including Rancho Cucamonga, Ontario, Upland, Riverside, Corona, Diamond Bar, Chino Hills, and more.",
  },
  {
    question: "Do you offer discounts?",
    answer:
      "Yes — 15% off for Military, Police, and Fire personnel.",
  },
  {
    question: "What payment do you accept?",
    answer: "We accept credit cards and cryptocurrency.",
  },
  {
    question: "Are you licensed?",
    answer: "Yes — Yelp-verified licensed business.",
  },
];

function FAQItem({
  faq,
  index,
}: {
  faq: (typeof faqs)[0];
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-brand-black text-lg pr-8 group-hover:text-brand-red transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
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
        <p className="pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-brand-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-red font-semibold text-sm tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black mb-6">
            Frequently Asked{" "}
            <span className="text-brand-red">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Still have questions? We&apos;re happy to help!</p>
          <a
            href="tel:9097683650"
            className="btn-brand inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold"
          >
            Call (909) 768-3650
          </a>
        </motion.div>
      </div>
    </section>
  );
}
