"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import CTABanner from "@/components/sections/home/CTABanner";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FaArrowRight } from "react-icons/fa";

const categories = [
  "All",
  "M&A",
  "Wealth Management",
  "Private Equity",
  "Risk Analysis",
];

const cases = [
  {
    id: 1,
    title: "Global Tech Merger",
    category: "M&A",
    metric: "$4.5B Valuation",
    description:
      "Orchestrated the cross-border merger of two leading SaaS providers, navigating complex regulatory landscapes in the EU and US.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Generational Wealth Transfer",
    category: "Wealth Management",
    metric: "Tax Optimization",
    description:
      "Structured a trust framework for a multi-generational family office, ensuring seamless asset transition and tax efficiency.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Sustainable Energy Fund",
    category: "Private Equity",
    metric: "22% YOY Growth",
    description:
      "Launched a $500M green energy fund focused on solar infrastructure in emerging markets.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Healthcare System Restructuring",
    category: "Risk Analysis",
    metric: "30% Efficiency Gain",
    description:
      "Revitalized a failing hospital network through debt restructuring and operational overhaul.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Logistics Fleet Modernization",
    category: "M&A",
    metric: "Global Expansion",
    description:
      "Advising a logistics giant on the acquisition of an autonomous trucking startup.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Crypto Custody Solution",
    category: "Wealth Management",
    metric: "Secure Integration",
    description:
      "Implementing institutional-grade custody solutions for a family office entering the digital asset space.",
    image:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2574&auto=format&fit=crop",
  },
];

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState("All");

  const filteredCases =
    filter === "All" ? cases : cases.filter((c) => c.category === filter);

  return (
    <>
      <PageHeader
        title="Case Studies"
        subtitle="Proven Results"
        backgroundImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Editorial Filter Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-20 border-b border-gray-200 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-lg  font-display  transition-colors duration-300 relative pb-2 ${filter === cat
                    ? "text-trust-blue-950 font-bold"
                    : "text-trust-blue-400 hover:text-trust-blue-800"
                  }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gold-400"
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredCases.map((study, index) => (
                <motion.div
                  layout
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group cursor-pointer h-full"
                >
                  <div className="bg-white border border-gray-200 p-8 h-full relative hover:shadow-xl transition-all duration-300 flex flex-col items-start bg-opacity-50 hover:bg-opacity-100">
                    {/* Top Green Accent */}
                    <div className="absolute -top-3 left-8 w-4 h-8 bg-[#8FD299] transform -skew-x-[20deg] shadow-sm" />

                    {/* Category */}
                    <span className="text-xs font-bold uppercase tracking-wide text-trust-blue-950 mb-6 block mt-2">
                      {study.category}
                    </span>

                    {/* Image Area */}
                    <div className={`w-full aspect-[4/3] mb-8 overflow-hidden relative ${index % 3 === 0 ? "bg-red-50" : index % 3 === 1 ? "bg-blue-50" : "bg-amber-50"
                      }`}>
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700 hover:mix-blend-normal hover:opacity-100"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-2xl font-bold text-trust-blue-950 mb-4 leading-tight">
                      {study.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                      {study.description}
                    </p>

                    {/* Optional Metric if needed, or remove to match reference strictness. 
                        Reference has just text. I'll visual hide metric or keep it subtle.
                        I'll keep it as a small footer item. */}
                    <div className="mt-auto pt-4 w-full flex items-center justify-between border-t border-gray-100">
                      <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">{study.metric}</span>
                      <FaArrowRight className="text-gray-300 w-3 h-3 group-hover:text-gold-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
