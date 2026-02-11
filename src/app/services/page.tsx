"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import CTABanner from "@/components/sections/home/CTABanner";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import {
  FaChartLine,
  FaLandmark,
  FaHandHoldingUsd,
  FaShieldAlt,
  FaGlobe,
  FaCoins,
  FaUserTie,
} from "react-icons/fa";
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
} from "lucide-react";

const services = [
  {
    title: "Managed Accounts",
    icon: FaHandHoldingUsd,
    category: "Account Management",
    description:
      "Full discretionary management of your futures trading account with personalized portfolio construction, daily performance monitoring, and transparent reporting.",
    benefits: [
      "Discretionary Trade Execution",
      "Personalized Portfolio Construction",
      "Daily Performance Monitoring",
      "Direct Advisor Access",
    ],
  },
  {
    title: "Trading Advisory",
    icon: FaChartLine,
    category: "Advisory Services",
    description:
      "Strategic trading recommendations and market insights for self-directed traders who prefer to execute their own trades while leveraging our research.",
    benefits: [
      "Daily Market Commentary",
      "Entry & Exit Trade Levels",
      "Technical & Fundamental Analysis",
      "Risk Management Guidance",
    ],
  },
  {
    title: "Hedging Solutions",
    icon: FaShieldAlt,
    category: "Risk Management",
    description:
      "Customized hedging programs for commercial entities and producers seeking to manage price risk in core business operations.",
    benefits: [
      "Price Risk Assessment",
      "Custom Hedge Strategies",
      "Execution & Monitoring",
      "Ongoing Optimization",
    ],
  },
  {
    title: "Portfolio Consulting",
    icon: FaLandmark,
    category: "Advisory Services",
    description:
      "Independent analysis and actionable recommendations for existing futures positions and trading strategies.",
    benefits: [
      "Performance Review & Attribution",
      "Strategy Optimization",
      "Risk Analytics",
      "Diversification Planning",
    ],
  },
  {
    title: "Education & Training",
    icon: FaUserTie,
    category: "Education",
    description:
      "Comprehensive educational programs for individuals and institutions looking to deepen their understanding of futures markets.",
    benefits: [
      "Market Fundamentals Training",
      "Technical Analysis Workshops",
      "Risk Management Seminars",
      "Custom Institutional Programs",
    ],
  },
  {
    title: "Research Services",
    icon: FaGlobe,
    category: "Research & Analysis",
    description:
      "In-depth research reports and market intelligence across commodity sectors and financial futures markets.",
    benefits: [
      "Sector-Specific Analysis",
      "Supply & Demand Forecasts",
      "Seasonal Pattern Studies",
      "Macroeconomic Impact Reports",
    ],
  },
];

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(services.map((s) => s.category))),
  ];

  // Filter services based on active filter
  const filteredServices =
    activeFilter === "All"
      ? services
      : services.filter((service) => service.category === activeFilter);

  const handleFilterSelect = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive Solutions"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
      />

      <section className="py-20 px-6 bg-slate-50/50">
        <div className="container mx-auto max-w-6xl">
          {/* Custom Horizontal Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 flex justify-center"
          >
            <div className="flex flex-wrap justify-center gap-4 bg-white p-2 rounded-full shadow-sm border border-slate-200">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterSelect(category)} // Re-using the handler name, although logic is simpler now
                  className={`
                    px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                    ${activeFilter === category
                      ? "bg-trust-blue-600 text-white shadow-md transform scale-105"
                      : "text-slate-500 hover:text-trust-blue-600 hover:bg-slate-50"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
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
        </div>
      </section>

      <CTABanner />
    </>
  );
}
