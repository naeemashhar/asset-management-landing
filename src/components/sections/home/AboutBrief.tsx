"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "20",
    label: "Years of Experience",
    desc: "A decade of proven financial expertise.",
  },
  {
    value: "110",
    label: "Customers",
    desc: "Serving a thriving community of satisfied customers.",
  },
  {
    value: "20+",
    label: "Specialists",
    desc: "A dedicated team of financial experts at your service.",
  },
];

export default function AboutBrief() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 bg-white overflow-hidden w-[90%] mx-auto"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT COLUMN: Text Content (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-trust-blue-950 font-bold text-sm uppercase tracking-wide mb-6 block"
            >
              Why us
            </motion.span> */}
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-12 bg-gradient-to-r from-gold-600 to-gold-400" />
              <span className="text-gold-800 font-sans text-md font-semibold tracking-[0.3em] uppercase">
                Why us
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className=" font-display tracking-wider
              text-4xl md:text-5xl font-bold text-trust-blue-950 mb-8 leading-tight"
            >
              Trusted experts with years of experience and industry
              accreditations
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-trust-blue-600 space-y-6 text-lg leading-relaxed mb-10"
            >
              <p>
                At Valora, we are dedicated to guiding you on your financial
                journey with expertise, integrity, and a personalized approach.
                Our team of experienced financial consultants is committed to
                helping you unlock your full financial potential, one step at a
                time.
              </p>
              <p>
                Our mission is to empower you with the knowledge and tools to
                make informed decisions, secure your financial stability, and
                achieve lasting success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* <a
                href="/about"
                className="inline-flex items-center text-trust-blue-950 font-bold border-b-2 border-gold-400 hover:text-gold-500 transition-colors pb-1"
              >
                About us
              </a> */}
            </motion.div>
          </div>

          {/* CENTER COLUMN: Illustration/Image (Span 4) */}
          <div className="lg:col-span-4 flex justify-center items-center relative min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full h-full min-h-[400px]"
            >
              {/* Placeholder for the 'Running Man' sketch - using a clean abstract business visual for now as vector assets aren't local. 
                                 Ideally would use an SVG component here. */}
              <Image
                src="/image.png"
                alt="Financial Expertise Illustration"
                fill
                className="object-contain" // Removed mix-blend-multiply as SVGs usually have transparent backgrounds
              />
              {/* Decorative circles to mimic the 'motion lines' in the sketch */}
              <div className="absolute top-1/2 left-0 w-24 h-1 bg-gold-400/30 -translate-x-1/2 rounded-full" />
              <div className="absolute top-1/3 right-10 w-16 h-1 bg-trust-blue-900/20 translate-x-1/2 rounded-full" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Stats (Span 3) */}
          <div className="lg:col-span-3 flex flex-col justify-center pl-0 lg:pl-10 relative lg:items-end">
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{ marginRight: `${index * 4}rem` }} // Adjust "4" to make steps steeper or shallower
                className="relative py-8 first:pt-0 border-b border-gray-200 last:border-0 w-full lg:w-[340px] transition-all duration-300"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-left lg:text-right" // Aligns text to the right on desktop to match the steps
                >
                  <span className="block text-5xl font-bold text-trust-blue-950 mb-2 font-display">
                    {stat.value}
                  </span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-trust-blue-950 mb-2">
                    {stat.label}
                  </span>
                  <p className="text-gray-500 text-sm leading-snug">
                    {stat.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
