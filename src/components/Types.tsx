"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const types = [
  {
    image:
      "https://chashmah.com/wp-content/uploads/2025/02/geometric.webp",
  },
  {
    image:
      "https://chashmah.com/wp-content/uploads/2025/02/round.webp",
  },
  {
    image:
      "https://chashmah.com/wp-content/uploads/2025/02/square.webp",
  },
  {
    image:
      "https://chashmah.com/wp-content/uploads/2025/02/rectangle.gif",
  },
  {
    image:
      "https://chashmah.com/wp-content/uploads/2025/02/Wayfarer.webp",
  },
  {
    image:
      "https://chashmah.com/wp-content/uploads/2025/02/hexagonal.webp",
  },
  {
    image:
      "https://chashmah.com/wp-content/uploads/2025/02/HalfRim.webp",
  },
  {
    image:
      "https://chashmah.com/wp-content/uploads/2025/02/rimless.webp",
  },
];

// Motion presets (local to this file for clarity)
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Types = () => {
  return (
    <section id="frames" className="mx-auto max-w-6xl px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-14 max-w-xl"
      >
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
          Frame Styles
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Find frames that match your face shape, comfort, and everyday style.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {types.map((type, index) => (
          <motion.div key={index} variants={item}>
            <Link
              href="/"
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <div className="relative aspect-square">
                <Image
                  src={type.image}
                  alt="Eyewear frame style"
                  fill
                  unoptimized={type.image.endsWith(".gif")}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Types;

