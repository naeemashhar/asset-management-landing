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
      <section className="py-24 bg-white">
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
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gray-50 -z-10" />
              <div className="absolute -top-8 -right-8 w-48 h-48 border border-gold-400 -z-10" />
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="block text-gold-500 font-medium tracking-widest text-sm uppercase mb-3">
              Our Philosophy
            </span>
            <h2 className=" font-display  text-4xl md:text-5xl font-bold text-trust-blue-950 mb-6">
              Guided by Principles
            </h2>
            <p className="text-trust-blue-600 leading-relaxed">
              Our culture is defined by a relentless pursuit of excellence and
              an unshakeable commitment to our clients&apos; best interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-trust-blue-950 flex items-center justify-center text-gold-400 text-2xl">
                    <value.icon />
                  </div>
                </div>
                <div>
                  <h3 className=" font-display  text-2xl font-bold text-trust-blue-950 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-trust-blue-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
