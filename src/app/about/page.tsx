"use client";

import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaLightbulb,
  FaScaleBalanced,
  FaUsers,
} from "react-icons/fa6";
import CTABanner from "@/components/sections/home/CTABanner";

const values = [
  {
    icon: FaHandshake,
    title: "Unwavering Integrity",
    description:
      "We hold ourselves to the highest ethical standards. Trust is the currency of our business, and we earn it every day through transparent, honest counsel.",
  },
  {
    icon: FaLightbulb,
    title: "Strategic Innovation",
    description:
      "The financial landscape is ever-evolving. We combine time-tested principles with forward-thinking strategies to keep you ahead of the curve.",
  },
  {
    icon: FaScaleBalanced,
    title: "Client-Centricity",
    description:
      "Your goals are our blueprint. We don't believe in one-size-fits-all; we build bespoke solutions rigorously aligned with your specific ambitions.",
  },
  {
    icon: FaUsers,
    title: "Collaborative Excellence",
    description:
      "We leverage the collective intelligence of our diverse team of experts to solve complex problems and uncover unique opportunities.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Valora"
        subtitle="Our Heritage & Vision"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
      />

      {/* Introduction Section */}
      <section className="py-24 bg-white overflow-x-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <span className="block text-gold-500 font-medium tracking-widest text-sm uppercase mb-3">
                Who We Are
              </span>
              <h2 className=" font-display  text-4xl md:text-5xl font-bold text-trust-blue-950 mb-6">
                Architects of Financial Fortitude
              </h2>
              <div className="space-y-6 text-trust-blue-700 leading-relaxed text-lg">
                <p>
                  Founded in 2003, Valora has established itself as a premier
                  destination for sophisticated wealth management and corporate
                  financial consulting. We were born from a simple yet powerful
                  belief: that true wealth stewardship requires more than just
                  market access—it requires vision, discipline, and a deep
                  understanding of human legacy.
                </p>
                <p>
                  Over two decades, we have guided ultra-high-net-worth
                  individuals, families, and corporations through volatile
                  markets and complex regulatory landscapes. Our approach is
                  holistic, integrating investment management, tax strategy, and
                  estate planning into a cohesive roadmap for generational
                  success.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-trust-blue-950/20 mix-blend-multiply z-10" />
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                  alt="Meeting in a modern office"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Decorative Element - Hidden on mobile to prevent overflow */}
              <div className="hidden md:block absolute -bottom-8 -left-8 w-48 h-48 bg-gray-50 -z-10" />
              <div className="hidden md:block absolute -top-8 -right-8 w-48 h-48 border border-gold-400 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Impact Section */}
      <section className="py-20 bg-trust-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-trust-blue-200/50">
            {[
              { label: "Assets Under Management", value: "$12B+" },
              { label: "Years of Excellence", value: "20+" },
              { label: "Corporate Partners", value: "500+" },
              { label: "Client Retention Rate", value: "98%" },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className=" font-display  text-4xl md:text-5xl font-bold text-trust-blue-950 mb-2">
                  {stat.value}
                </div>
                <div className="text-trust-blue-600 font-medium uppercase tracking-wider text-xs md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      {/* How We Work Section */}
      <section className="py-24 bg-[#F0F4F8] overflow-x-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-trust-blue-950 mb-6">
              How we work
            </h2>
            <p className="text-trust-blue-600 leading-relaxed max-w-2xl mx-auto">
              Transforming organizations sustainably. Unlocking performance excellence.
              Nurturing thriving workforces for generations. Partner with us for success.
            </p>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start max-w-7xl mx-auto">

            {/* Left Column */}
            <div className="lg:col-span-4 flex flex-col gap-16 lg:pt-12 text-left lg:text-right lg:items-end">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-sm"
              >
                <h3 className="font-display text-xl font-bold text-trust-blue-950 mb-3">
                  {values[0].title}
                </h3>
                <p className="text-trust-blue-600 text-sm leading-relaxed mb-4">
                  {values[0].description}
                </p>
                <div className="h-px w-full lg:w-full bg-gray-300" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-sm"
              >
                <h3 className="font-display text-xl font-bold text-trust-blue-950 mb-3">
                  {values[2].title}
                </h3>
                <p className="text-trust-blue-600 text-sm leading-relaxed mb-4">
                  {values[2].description}
                </p>
                <div className="h-px w-full lg:w-full bg-gray-300" />
              </motion.div>
            </div>

            {/* Center Graphic */}
            <div className="lg:col-span-4 flex justify-center relative min-h-[400px]">
              {/* Central Axis Line (SVG) */}
              <svg className="absolute top-0 w-full h-full pointer-events-none hidden lg:block" viewBox="0 0 400 600" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M200 150 C 200 300, 250 400, 200 550" stroke="#374B47" strokeWidth="2" fill="none" />
                <line x1="200" y1="550" x2="200" y2="600" stroke="#374B47" strokeWidth="2" />
                {/* Base of line */}
                <line x1="180" y1="590" x2="220" y2="590" stroke="#374B47" strokeWidth="2" />
              </svg>

              <div className="relative z-10 bg-[#C5E1C5] w-48 h-48 rounded-[3rem] rotate-45 flex items-center justify-center shadow-lg border-4 border-[#374B47]">
                <div className="-rotate-45">
                  <FaLightbulb className="text-5xl text-[#374B47]" />
                </div>
                {/* Decorative nodes */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#374B47] rounded-full" />
                <div className="absolute top-1/2 -left-3 w-3 h-3 bg-[#374B47] rounded-full" />
                <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-white border-2 border-[#374B47] rounded-full" />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 flex flex-col gap-16 lg:pt-12 text-left">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-sm"
              >
                <h3 className="font-display text-xl font-bold text-trust-blue-950 mb-3">
                  {values[1].title}
                </h3>
                <p className="text-trust-blue-600 text-sm leading-relaxed mb-4">
                  {values[1].description}
                </p>
                <div className="h-px w-full bg-gray-300" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-sm"
              >
                <h3 className="font-display text-xl font-bold text-trust-blue-950 mb-3">
                  {values[3].title}
                </h3>
                <p className="text-trust-blue-600 text-sm leading-relaxed mb-4">
                  {values[3].description}
                </p>
                <div className="h-px w-full bg-gray-300" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
