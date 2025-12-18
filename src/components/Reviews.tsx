"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* -------------------- DATA -------------------- */

const reviews = [
  {
    name: "Mohammed",
    review:
      "Excellent service and wide variety of frames. Staff helped me choose the perfect glasses for daily use.",
  },
  {
    name: "Abdul",
    review:
      "premium and trenddy collection with durable glasses.",
  },
  {
    name: "Kartik",
    review:
      "Affordable prices and lifetime free service is a big plus. Highly recommended optical store.",
  },
];

/* -------------------- ANIMATIONS -------------------- */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1], // ✅ TS-safe easing
    },
  },
};

/* -------------------- COMPONENT -------------------- */

const Reviews = () => {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="mb-14 max-w-xl"
      >
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
          What Our Customers Say
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Trusted by customers for quality eyewear and reliable service.
        </p>
      </motion.div>

      {/* Reviews */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-8 md:grid-cols-3"
      >
        {reviews.map((review) => (
          <motion.div
            key={review.name}
            variants={itemVariants}
            className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm"
          >
            {/* Stars */}
            <div className="mb-4 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Review text */}
            <p className="leading-relaxed text-gray-700">
              “{review.review}”
            </p>

            {/* Name */}
            <div className="mt-6 text-sm font-medium text-gray-900">
              — {review.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Reviews;

