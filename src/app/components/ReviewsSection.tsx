"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { reviews } from "@/lib/reviews";

const YELP_URL = "https://www.yelp.com/biz/installation-pros-rancho-cucamonga-4";

function ReviewCard({
  review,
  className = "",
}: {
  review: (typeof reviews)[0];
  className?: string;
}) {
  return (
    <div
      className={`flex-shrink-0 w-[350px] max-w-[90vw] rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10 ${className}`}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-brand-red text-brand-red" />
        ))}
      </div>
      <p className="text-gray-300 text-sm mb-4 line-clamp-4 leading-relaxed">
        &quot;{review.text}&quot;
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div>
          <p className="font-semibold text-white">{review.author}</p>
          <p className="text-sm text-gray-500">{review.location}</p>
        </div>
        <a
          href={YELP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-red hover:text-brand-red/80 text-sm font-medium flex items-center gap-1 transition-colors"
        >
          Read on Yelp
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-brand-red/20 text-white rounded-full px-4 py-2 mb-4 border border-brand-red/40">
            <Star className="w-5 h-5 fill-brand-red text-brand-red" />
            <span className="font-semibold">5.0 Rating on Yelp</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-6">
            What Our Customers{" "}
            <span className="text-brand-red">Say</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            180 reviews. 5.0 stars. Real people, real results.
          </p>
          <a
            href={YELP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-red font-semibold hover:underline"
          >
            View all reviews on Yelp
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Marquee - auto-scrolling, hover to pause */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard
              key={`copy-${Math.floor(index / reviews.length)}-${review.id}`}
              review={review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
