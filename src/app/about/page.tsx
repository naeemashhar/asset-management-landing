"use client";

import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import CTABanner from "@/components/sections/home/CTABanner";
import { AlertTriangle } from "lucide-react"; // Optional: requires lucide-react, or remove icon if not needed

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
          <div className="flex flex-col md:flex-row gap-16 items-start">
            {/* Left Column: Text Content */}
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Main Heading & Intro */}
                <div>
                  <div className="flex items-center gap-6 mb-8 justify-center md:justify-start">
                    <div className="h-[2px] w-16 bg-[#374B47]" />
                    <span className="text-[#374B47] font-display text-sm font-bold tracking-[0.5em] uppercase">
                      About Us
                    </span>
                  </div>
                  <h2 className="font-display font-semibold text-3xl md:text-6xl text-[#121826] leading-tight mb-6">
                    Strategic Futures & <br />
                    <span className="text-[#374B47] italic">
                      Commodities Management
                    </span>
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Valora Asset Management provides guidance and portfolio
                    management in the dynamic world of futures and commodities
                    trading. We serve both institutional and individual clients
                    with personalized, professional advisory services.
                  </p>
                </div>

                {/* Mission Block */}
                <div className="border-l-4 border-[#374B47] pl-6 py-1 bg-slate-50/50 rounded-r-lg">
                  <h3 className="font-display font-bold text-lg text-[#121826] mb-2">
                    Our Mission
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We combine market expertise with personalized service to
                    help you navigate the complexities of futures and
                    commodities trading. We provide comprehensive fundamental
                    and technical analysis across all major commodity sectors.
                  </p>
                </div>

                {/* NFA Regulatory Disclosure */}
                <div className="mt-8 bg-slate-50 border border-slate-200 p-5 rounded-md">
                  <div className="flex gap-3">
                    {/* Visual Warning Indicator */}
                    <div className="shrink-0 w-1 h-full bg-amber-500 rounded-full" />

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-[#121826] uppercase tracking-widest flex items-center gap-2">
                        Limited Experience Disclosure
                        <span className="px-1.5 py-0.5 border border-slate-300 rounded text-[10px] text-slate-500 font-normal">
                          Required by NFA
                        </span>
                      </h4>
                      <p className="text-[11px] leading-5 text-slate-500 uppercase font-medium tracking-wide text-justify">
                        Valora Asset Management has had little or no experience
                        in trading actual accounts for customers. Because there
                        are no actual trading results to compare to any
                        hypothetical results, customers should be particularly
                        wary of placing undue reliance on these hypothetical
                        performance results.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Image Composition (Preserved) */}
            <div className="w-full md:w-1/2 relative sticky top-24">
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-trust-blue-950/20 mix-blend-multiply z-10" />
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                  alt="Meeting in a modern office"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Decorative Elements */}
              <div className="hidden md:block absolute -bottom-8 -left-8 w-48 h-48 bg-gray-50 -z-10" />
              <div className="hidden md:block absolute -top-8 -right-8 w-48 h-48 border border-amber-400/50 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Impact Section */}
      {/* <section className="py-20 bg-trust-blue-50">
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
      </section> */}

      {/* Our Values */}
      {/* How We Work Section */}
      {/* <section className="py-24 bg-[#F0F4F8] overflow-x-hidden">
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

          
            <div className="lg:col-span-4 flex justify-center relative min-h-[400px]">
              
              <svg className="absolute top-0 w-full h-full pointer-events-none hidden lg:block" viewBox="0 0 400 600" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M200 150 C 200 300, 250 400, 200 550" stroke="#374B47" strokeWidth="2" fill="none" />
                <line x1="200" y1="550" x2="200" y2="600" stroke="#374B47" strokeWidth="2" />
            
                <line x1="180" y1="590" x2="220" y2="590" stroke="#374B47" strokeWidth="2" />
              </svg>

              <div className="relative z-10 bg-[#C5E1C5] w-48 h-48 rounded-[3rem] rotate-45 flex items-center justify-center shadow-lg border-4 border-[#374B47]">
                <div className="-rotate-45">
                  <FaLightbulb className="text-5xl text-[#374B47]" />
                </div>
              
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#374B47] rounded-full" />
                <div className="absolute top-1/2 -left-3 w-3 h-3 bg-[#374B47] rounded-full" />
                <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-white border-2 border-[#374B47] rounded-full" />
              </div>
            </div>


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
      </section> */}

      <CTABanner />
    </>
  );
}
