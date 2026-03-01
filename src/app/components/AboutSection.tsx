"use client";

import { motion } from "framer-motion";
import { Users, Award, Heart, MapPin, Star, CheckCircle } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Family Owned",
    description: "A local family business serving our community with pride",
  },
  {
    icon: Award,
    title: "Licensed & Insured",
    description: "CAC #1041882 - Fully licensed and insured for your protection",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your comfort and satisfaction are our top priorities",
  },
];

const serviceAreas = [
  "Rancho Cucamonga",
  "Ontario",
  "Upland",
  "Fontana",
  "Chino",
  "Chino Hills",
  "Corona",
  "Riverside",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80')`,
                }}
              />
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-white rounded-lg px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-slate-900">5.0</span>
                  <span className="text-slate-600 text-sm">(53 Reviews)</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-blue-600">500+</span>
                  <span className="text-sm text-slate-600">Installations</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-orange-500">100%</span>
                  <span className="text-sm text-slate-600">Satisfaction</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Meet <span className="text-blue-600">Cody Watts</span> & Family
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Installation Pros SoCal is a family-owned HVAC company built on honesty, 
              quality workmanship, and genuine care for our customers. When you call us, 
              you&apos;re not just getting a contractor—you&apos;re getting a neighbor who treats 
              your home like their own.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Founded by Cody Watts, we&apos;ve grown from a one-person operation to a trusted 
              team serving all of Southern California. Our reputation is built on 5-star 
              reviews, referrals from happy customers, and a commitment to doing the job 
              right the first time.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-slate-900">Service Areas</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
