"use client";

import { motion } from "framer-motion";

const brands = [
  "Ray-Ban",
  "Oakley",
  "Vogue Eyewear",
  "Carrera",
  "Polaroid",
  "Fastrack",
  "Titan Eye+",
  "IDEA Eyewear",
  "Tommy Hilfiger",
];

const BrandTicker = () => {
  return (
    <motion.section
      id="brands"
      className="relative overflow-hidden py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* subtle divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-black/10" />

      <div className="group flex overflow-hidden">
        {/* track */}
        <div className="ticker-track flex shrink-0 items-center gap-12 px-6 hover:cursor-pointer">
          {[...brands, ...brands].map((brand, index) => (
            <span
              key={index}
              className="text-sm md:text-base font-medium tracking-wide text-gray-600 whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BrandTicker;
