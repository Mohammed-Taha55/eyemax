"use client";

import { ShieldCheck, RefreshCcw, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Lifetime Free Service",
    description:
      "Free adjustments, cleaning, and basic maintenance for the lifetime of your eyewear.",
    icon: Wrench,
  },
  {
    title: "1 Month Free Replacement",
    description:
      "Replace your eyewear within 30 days in case of manufacturing defects.",
    icon: RefreshCcw,
  },
  {
    title: "3 Months Full Warranty",
    description:
      "Complete warranty coverage for frames and lenses against defects.",
    icon: ShieldCheck,
  },
];

// Motion presets
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-14 max-w-xl"
      >
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We don’t just sell eyewear — we support you long after your purchase.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={item}
            className="
              rounded-3xl
              bg-white
              p-8
              shadow-sm
              border border-black/5
              transition
              hover:shadow-md
            "
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/5">
              <service.icon className="h-6 w-6 text-gray-900" />
            </div>

            <h3 className="text-xl font-medium text-gray-900">
              {service.title}
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
