"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  HandCoins,
  ShieldCheck,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

// --- Data Models ---

const mainServices = [
  {
    title: "Managed Accounts",
    icon: HandCoins,
    description:
      "Full discretionary management of your futures trading account with personalized portfolio construction and transparent reporting.",
    benefits: [
      "Discretionary Trade Execution",
      "Personalized Portfolio Construction",
      "Daily Performance Monitoring",
    ],
  },
  {
    title: "Trading Advisory",
    icon: TrendingUp,
    description:
      "Strategic trading recommendations and market insights for self-directed traders who prefer to execute their own trades.",
    benefits: [
      "Daily Market Commentary",
      "Entry & Exit Trade Levels",
      "Risk Management Guidance",
    ],
  },
  {
    title: "Hedging Solutions",
    icon: ShieldCheck,
    description:
      "Customized hedging programs for commercial entities and producers seeking to manage price risk in core business operations.",
    benefits: [
      "Price Risk Assessment",
      "Custom Hedge Strategies",
      "Ongoing Optimization",
    ],
  },
];



// --- Components ---



export default function ServicesPage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-white font-sans text-slate-900 selection:bg-trust-blue-50 selection:text-trust-blue-900">
      {/* 1. Header Section */}
      {/* <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent -z-10" />

        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <SectionLabel>Our Services</SectionLabel>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900 mb-6">
              Asset management for the <br />
              <span className="font-serif italic font-medium text-slate-800">
                modern economy.
              </span>
            </h1>
            <p className="text-xl text-slate-500 font-light max-w-2xl leading-relaxed">
              We provide institutional-grade infrastructure, proprietary
              research, and strategic hedging solutions designed to navigate
              complex market conditions.
            </p>
          </motion.div>
        </div>
      </section> */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center md:text-left"
      >
        <div className="flex items-center gap-6 mb-8 justify-center md:justify-start">
          <div className="h-[2px] w-16 bg-[#374B47]" />
          <span className="text-[#374B47] font-display text-2xl mb-3 font-bold tracking-[0.5em] uppercase">
            Our Services
          </span>
        </div>
        <h2 className="font-display font-semibold text-4xl md:text-7xl text-[#121826] tracking-tighter leading-[0.9]">
          Asset management for the <br className="hidden md:block" />
          <span className="italic text-[#374b47] ">modern economy.</span>
        </h2>
      </motion.div>


      <section className="py-24 relative overflow-hidden">

        <div className="container mx-auto max-w-[1600px] px-8 relative z-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mb-20 ">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col h-full bg-[#D1D2BC] rounded-md overflow-hidden hover:shadow-2xl hover:shadow-[#D1D2BC]/40 transition-all duration-500 hover:-translate-y-2 "
              >
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-trust-blue-900 via-gold-400 to-trust-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Subtle Gradient Blob on Hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4F1EE]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -translate-y-1/2 translate-x-1/2" />

                {/* Top Section: Value Prop */}
                <div className="px-10 py-5 relative z-10 flex-grow">
                  <div className="flex justify-between items-start mb-8">
                    {/* Icon with glowing backdrop */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-16 h-16 bg-[#F4F1EE]/60 border border-[#F4F1EE] rounded-full flex items-center justify-center text-trust-blue-900 shadow-sm group-hover:text-gold-600 group-hover:border-gold-500/30 transition-all duration-300">
                        <service.icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Decorative Arrow */}
                    <div className="relative overflow-hidden rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                      <ArrowRight className="w-5 h-5 text-trust-blue-800" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-trust-blue-950 mb-4 tracking-wide group-hover:text-gold-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-trust-blue-900/80 leading-relaxed text-base font-light group-hover:text-trust-blue-950 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Section: Features & Action */}
                <div className="bg-[#F4F1EE] border-t border-[#EAE7E4] p-10 pt-8 mt-auto relative z-10 group-hover:bg-[#F4F1EE]/90 transition-colors duration-500">
                  <div className="text-[10px] font-bold text-gold-600 uppercase tracking-[0.2em] mb-6 flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="w-8 h-[1px] bg-gold-600/50"></span>
                    Key Features
                  </div>

                  <ul className="space-y-4 mb-0">
                    {service.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-trust-blue-800 font-medium group-hover:text-trust-blue-950 transition-colors"
                      >
                        <div className="mt-1 mr-3 min-w-[16px]">
                          <Check className="w-4 h-4 text-gold-600" strokeWidth={2.5} />
                        </div>
                        <span className="leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center pb-8">
            <Link href="/services">
              <button className="group relative px-8 py-3 bg-white text-trust-blue-950 font-semibold rounded-full border border-gray-600 shadow-lg hover:shadow-xl hover:border-gold-400 hover:text-white hover:bg-[#202C2A] transition-all duration-300">
                <span className="flex items-center gap-2 text-sm tracking-wide uppercase">
                  View More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}
