"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden">
      {/* soft ambient light (NO animation here) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute top-32 -right-40 h-[500px] w-[500px] rounded-full bg-sky-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-6 rounded-full bg-black/5 px-4 py-1 text-sm font-medium text-gray-700">
            Eyemax Optical Store
          </span>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-gray-900">
            Eyewear That Fits  
            <br />
            Your Vision & Lifestyle
          </h1>

          <p className="mt-8 max-w-xl text-lg text-gray-600 leading-relaxed">
            Eyemax Optical Store offers quality frames, precision lenses, and
            professional eye care services — all under one roof.
            Visit our store for personalized fitting and expert guidance.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Serving customers with care, comfort, and clarity.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/10 to-transparent" />
          <Image
            src="/store.webp"
            alt="Eyemax Optical Store interior"
            width={600}
            height={720}
            className="relative rounded-3xl object-cover shadow-xl"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

