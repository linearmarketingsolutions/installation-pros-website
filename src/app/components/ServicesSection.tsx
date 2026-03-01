"use client";

import { motion } from "framer-motion";
import { Snowflake, Flame, Wind, Thermometer, Home, Wrench, Check, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Snowflake,
    title: "AC Installation",
    description: "Complete air conditioning installation for new systems or replacements. Energy-efficient solutions for Southern California heat.",
    features: ["Central AC Systems", "Ductless Mini-Splits", "Heat Pumps", "Smart Thermostat Integration"],
  },
  {
    icon: Flame,
    title: "Furnace Installation",
    description: "Professional furnace and heating system installation. Stay warm during those chilly California winters.",
    features: ["Gas Furnaces", "Electric Heaters", "Heat Pump Systems", "Zone Control"],
  },
  {
    icon: Wind,
    title: "Ductwork Services",
    description: "Custom ductwork design and installation for optimal airflow and energy efficiency throughout your home.",
    features: ["New Duct Installation", "Duct Replacement", "Sealing & Repair", "Airflow Optimization"],
  },
  {
    icon: Home,
    title: "HVAC for Renovations",
    description: "Complete HVAC solutions for home additions, remodels, and new construction projects.",
    features: ["System Sizing", "Multi-Zone Setup", "Historic Home Solutions", "Code Compliance"],
  },
  {
    icon: Thermometer,
    title: "Thermostat Installation",
    description: "Smart thermostat installation and setup for better control and energy savings.",
    features: ["Smart Thermostats", "WiFi Enabled", "Programmable", "Zone Controls"],
  },
  {
    icon: Wrench,
    title: "System Upgrades",
    description: "Upgrade your existing HVAC system for better efficiency, comfort, and lower energy bills.",
    features: ["High-Efficiency Units", "SEER Rating Upgrades", "Rebates Assistance", "Financing Options"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Complete HVAC Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From installation to upgrades, we handle every aspect of your home&apos;s heating and cooling needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-brand p-8 rounded-2xl group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#estimate"
                className="inline-flex items-center gap-2 text-black font-semibold group/link"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gray-50 rounded-2xl">
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">Not sure what you need?</h3>
              <p className="text-gray-600">We&apos;ll assess your home and recommend the perfect solution.</p>
            </div>
            <a
              href="tel:9093454360"
              className="btn-brand px-8 py-4 rounded-full font-bold whitespace-nowrap"
            >
              <span>Call for Free Consultation</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
