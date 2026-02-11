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
    <span className="h-px w-8 bg-amber-600/50"></span>
    <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
      {children}
    </span>
  </div>
);

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      {/* 1. Header Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent -z-10" />

        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <SectionLabel>Our Expertise</SectionLabel>
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
      </section>

      {/* 2. Main Services - The "Hero Cards" */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 ease-out hover:-translate-y-1"
              >
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-amber-50 group-hover:border-amber-100 transition-colors duration-300">
                    <service.icon
                      className="w-6 h-6 text-slate-700 group-hover:text-amber-700 transition-colors"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Benefits Divider */}
                  <div className="h-px w-full bg-slate-100 mb-6 group-hover:bg-slate-200 transition-colors" />

                  {/* Benefits List */}
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-slate-600"
                      >
                        <Check className="w-4 h-4 text-amber-600 mr-3 mt-0.5 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action */}
                <div className="mt-auto pt-4">
                  <button className="flex items-center text-sm font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                    Explore Solution
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Secondary Services - "Bento" Style Grid */}
      <section className="py-24 px-6 bg-slate-50/50">
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
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded-md group-hover:bg-amber-50 group-hover:text-amber-700/70 transition-colors">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-amber-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}

            {/* CTA Card injected into the grid */}
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
      </section>
    </div>
  );
}
