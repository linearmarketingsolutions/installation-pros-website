"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Rancho Cucamonga",
    rating: 5,
    text: "Cody and his team were incredible! Our AC went out during a heatwave and they had a new system installed within 48 hours. Professional, clean, and the price was fair. Highly recommend!",
    date: "2 months ago",
  },
  {
    name: "Mike T.",
    location: "Upland",
    rating: 5,
    text: "We got quotes from 3 companies and Installation Pros was the most thorough. They explained everything, didn't try to upsell us, and the installation was flawless. Our energy bill dropped 30%!",
    date: "3 months ago",
  },
  {
    name: "Jennifer L.",
    location: "Ontario",
    rating: 5,
    text: "Family business that actually cares. Cody treated our home like his own—used drop cloths, cleaned up perfectly, and even helped us get a rebate we didn't know about. True professionals.",
    date: "4 months ago",
  },
  {
    name: "David R.",
    location: "Chino Hills",
    rating: 5,
    text: "Had them install a full HVAC system for our home addition. They coordinated with our contractor seamlessly and finished ahead of schedule. The system works perfectly—house is comfortable in every room.",
    date: "5 months ago",
  },
  {
    name: "Amanda K.",
    location: "Fontana",
    rating: 5,
    text: "Best HVAC experience we've ever had. Honest pricing, no pressure, and they showed up exactly when they said they would. Cody even followed up a week later to make sure everything was working great.",
    date: "6 months ago",
  },
  {
    name: "Robert H.",
    location: "Corona",
    rating: 5,
    text: "Replaced our 20-year-old furnace. The team was knowledgeable, efficient, and respectful of our home. Financing options made it affordable. Wish we had called them years ago!",
    date: "7 months ago",
  },
];

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="testimonial-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-10 h-10 text-blue-200" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-slate-700 mb-6 leading-relaxed">
        &quot;{review.text}&quot;
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <div>
          <p className="font-bold text-slate-900">{review.name}</p>
          <p className="text-sm text-slate-500">{review.location}</p>
        </div>
        <span className="text-xs text-slate-400">{review.date}</span>
      </div>
    </motion.div>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 rounded-full px-4 py-2 mb-4">
            <Star className="w-5 h-5 fill-orange-500" />
            <span className="font-semibold">5.0 Rating on Yelp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our Customers{" "}
            <span className="text-blue-600">Say About Us</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what homeowners across 
            Southern California are saying about Installation Pros SoCal.
          </p>
        </motion.div>

        {/* Yelp Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <a
            href="https://www.yelp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>
                <p className="text-xs text-slate-500">Based on 53 reviews</p>
              </div>
            </div>
            <div className="hidden sm:block h-10 w-px bg-slate-200" />
            <div className="hidden sm:block text-center">
              <p className="text-2xl font-bold text-slate-900">5.0</p>
              <p className="text-xs text-slate-500">Average Rating</p>
            </div>
          </a>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4">
            Join our satisfied customers in Rancho Cucamonga and beyond
          </p>
          <a
            href="#estimate"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold"
          >
            Get Your Free Estimate
          </a>
        </motion.div>
      </div>
    </section>
  );
}
