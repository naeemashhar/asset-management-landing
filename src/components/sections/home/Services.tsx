"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Landmark,
  HandCoins,
  ShieldCheck,
  Globe,
  GraduationCap,
  FileText,
  ArrowRight,
  Check,
  ChevronRight,
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

const additionalServices = [
  {
    title: "Portfolio Consulting",
    icon: Landmark,
    category: "Analysis",
    description:
      "Independent analysis and actionable recommendations for existing positions.",
  },
  {
    title: "Education & Training",
    icon: GraduationCap,
    category: "Learning",
    description:
      "Comprehensive educational programs for individuals and institutions.",
  },
  {
    title: "Research Services",
    icon: FileText,
    category: "Intelligence",
    description:
      "In-depth research reports and market intelligence across commodity sectors.",
  },
];

// --- Components ---

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 mb-4">
    <span className="h-[1px] w-12 bg-trust-blue-400/50"></span>
    <span className="text-xs font-bold tracking-widest text-gold-800 uppercase">
      {children}
    </span>
  </div>
);

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
          <span className="text-[#374B47] font-display text-sm font-bold tracking-[0.5em] uppercase">
            Our Services
          </span>
        </div>
        <h2 className="font-display font-semibold text-6xl md:text-8xl text-[#121826] tracking-tighter leading-[0.9]">
          Asset management for the <br className="hidden md:block" />
          <span className="italic text-[#374b47] ">modern economy.</span>
        </h2>
      </motion.div>

      {/* 2. Main Services - The "Hero Cards" */}
      <section className="py-20 px-6 bg-slate-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                
                className="group relative flex flex-col h-full bg-gray-100 border border-slate-300 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Subtle Gradient Blob on Hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-trust-blue-50/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -translate-y-1/2 translate-x-1/2" />

                {/* Top Section: Value Prop */}
                <div className="p-8 relative z-10 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    {/* Icon with glowing backdrop */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-trust-blue-100 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-14 h-14 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-600 shadow-sm group-hover:text-trust-blue-600 group-hover:border-trust-blue-100 transition-all duration-300">
                        <service.icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Decorative Arrow */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      <ArrowRight className="w-5 h-5 text-trust-blue-600" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Section: Features & Action (The "Grounded" look) */}
                <div className="bg-slate-50/80 border-t border-slate-100 p-8 pt-6 mt-auto relative z-10 group-hover:bg-slate-50 transition-colors">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Key Features
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-slate-600 font-medium"
                      >
                        <div className="mt-0.5 mr-3 p-0.5 rounded-full bg-trust-blue-100/50 text-trust-blue-600">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* <button className="w-full py-3 px-4 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm font-semibold hover:border-trust-blue-200 hover:text-trust-blue-700 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    View Details
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover/btn:text-trust-blue-500 transition-colors" />
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Link href="/services">
      
      <button className="group relative flex items-center mx-auto mb-20 justify-center gap-3 px-8 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold tracking-wide shadow-lg shadow-slate-200 hover:shadow-xl hover:shadow-gold-900/10 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
        {/* Hover Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold-900 to-gold-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />

        {/* Content (Relative to sit on top of gradient) */}
        <span className="relative  font-display z-10 flex items-center gap-2">
          Discover more
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
        </span>
      </button>
      </Link>

      {/* 3. Secondary Services - "Bento" Style Grid */}
      {/* <section className="py-24 px-6 bg-slate-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-3">
                Specialized Capabilities
              </h2>
              <p className="text-slate-500 max-w-md">
                Targeted financial services tailored to specific operational
                needs.
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-sm font-semibold border border-slate-200 bg-white px-5 py-2.5 rounded-full hover:bg-slate-50 transition-colors">
              View Full Service Map <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-trust-blue-200 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 bg-slate-50 rounded-lg text-slate-600 group-hover:bg-amber-50 group-hover:text-amber-700 transition-colors">
                    <service.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded-md group-hover:bg-trust-blue-50 group-hover:text-trust-blue-700/70 transition-colors">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-trust-blue-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}

       
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col justify-center items-center text-center group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5 text-trust-blue-500" />
              </div>
              <h3 className="text-white font-medium mb-1">Global Access</h3>
              <p className="text-slate-400 text-xs mb-4">
                Trading access to all major global exchanges.
              </p>
              <span className="text-trust-blue-500 text-xs font-bold uppercase tracking-widest group-hover:underline underline-offset-4">
                Contact Sales
              </span>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
