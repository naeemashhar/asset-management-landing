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
                className={`text-lg  font-display  transition-colors duration-300 relative pb-2 ${
                  filter === cat
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

          {/* Premium Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20"
          >
            <AnimatePresence mode="popLayout">
              {filteredCases.map((study) => (
                <motion.div
                  layout
                  key={study.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group cursor-pointer"
                >
                  {/* Evaluation / Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden mb-8 shadow-sm">
                    <div className="absolute inset-0 bg-trust-blue-950/20 group-hover:bg-trust-blue-950/0 transition-colors duration-500 z-10" />
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    {/* Floating Badge */}
                    <div className="absolute top-6 left-6 z-20 bg-white/95 px-4 py-2 shadow-lg">
                      <span className="text-xs font-bold uppercase tracking-widest text-trust-blue-950">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pr-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-px flex-1 bg-gray-300 group-hover:bg-gold-400 transition-colors duration-300" />
                      <span className="text-gold-500 font-bold  font-display  text-lg">
                        {study.metric}
                      </span>
                    </div>

                    <h3 className=" font-display  text-3xl md:text-4xl font-bold text-trust-blue-950 mb-4 group-hover:text-trust-blue-700 transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-trust-blue-600 text-lg leading-relaxed mb-6 line-clamp-3">
                      {study.description}
                    </p>

                    <div className="inline-flex items-center text-trust-blue-950 font-bold border-b border-transparent group-hover:border-trust-blue-950 transition-all pb-1">
                      View Case Study{" "}
                      <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
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
