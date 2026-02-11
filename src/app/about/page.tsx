"use client";

import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import { motion } from "framer-motion";

import { FaLightbulb, FaScaleBalanced } from "react-icons/fa6";
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
      <section className="py-24 bg-white">
        <div className="overflow-x-clip">
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
                      <span className="text-[#374B47] font-display text-2xl font-bold tracking-[0.5em] uppercase">
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

                  {/* Mission Block - Premium Card */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#374B47] to-gold-400 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#374B47]">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-[#374B47]/10 rounded-full">
                          <FaLightbulb className="text-2xl text-[#374B47]" />
                        </div>
                        <h3 className="font-display font-bold text-2xl text-[#121826] mt-1">
                          Our Mission
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-base pl-2 border-l-2 border-gold-400/30">
                        We combine market expertise with personalized service to
                        help you navigate the complexities of futures and
                        commodities trading. We provide comprehensive fundamental
                        and technical analysis across all major commodity sectors.
                      </p>
                    </div>
                  </div>

                  {/* Important Risk Disclosure - Critical Warning */}
                  <div className="mt-8 relative overflow-hidden bg-[#2C1818] rounded-lg border border-red-500/30 shadow-lg group hover:border-red-500/60 transition-colors duration-300">
                    <div className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 pt-1">
                          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/50 animate-pulse-slow">
                            <AlertTriangle className="text-red-500 w-5 h-5" />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                            Important Risk Disclosure
                          </h4>

                          <p className="text-xs leading-relaxed text-gray-300 font-light tracking-wide text-justify opacity-90 uppercase">
                            <span className="font-bold text-red-400">Commodity trading involves substantial risk of loss. Past results are not necessarily indicative of future results.</span> You should carefully consider whether such trading is suitable for you in light of your financial condition.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* NFA Regulatory Disclosure - High Contrast Warning */}
                  <div className="mt-4 relative overflow-hidden bg-[#1B2525] rounded-lg border border-gold-500/30 shadow-lg group hover:border-gold-500/60 transition-colors duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <FaScaleBalanced className="text-6xl text-white transform -rotate-12" />
                    </div>

                    <div className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 pt-1">
                          <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50 animate-pulse-slow">
                            <AlertTriangle className="text-amber-500 w-5 h-5" />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <h4 className="text-sm font-bold text-white uppercase tracking-widest">
                              Limited Experience Disclosure
                            </h4>
                            <span className="px-2 py-0.5 border border-gold-500/30 bg-gold-500/10 rounded text-[10px] text-gold-400 font-medium">
                              Required by NFA
                            </span>
                          </div>

                          <p className="text-xs leading-relaxed text-gray-300 font-light tracking-wide text-justify opacity-90">
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
        </div>
      </section>
    </>
  );
}
