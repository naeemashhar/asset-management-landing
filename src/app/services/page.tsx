"use client";

import { useState, useRef, useEffect } from "react";
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
  ChevronRight,
  ChevronDown,
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFilterSelect = (category: string) => {
    setActiveFilter(category);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive Solutions"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
      />

      {/* <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-10 border-t-4 border-gold-400 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-trust-blue-50 text-trust-blue-900 rounded-full flex items-center justify-center mb-8 group-hover:bg-trust-blue-900 group-hover:text-gold-400 transition-all duration-300">
                  <service.icon className="text-3xl" />
                </div>
                <h3 className=" font-display  text-2xl font-bold text-trust-blue-950 mb-4">
                  {service.title}
                </h3>
                <p className="text-trust-blue-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-start text-sm text-trust-blue-800"
                    >
                      <FaCheck className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 px-6 bg-slate-50/50">
        <div className="container mx-auto max-w-6xl">
          {/* Custom Dropdown Filter */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex justify-end"
          >
            <div ref={dropdownRef} className="relative w-full max-w-xs">
              {/* Dropdown Button */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-xl font-semibold text-slate-700 hover:border-trust-blue-300 hover:shadow-lg transition-all duration-300 flex items-center justify-between group"
              >
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-trust-blue-600"></span>
                  {activeFilter}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 group-hover:text-trust-blue-600 transition-all duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-50 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden"
                >
                  {categories.map((category, index) => (
                    <button
                      key={category}
                      onClick={() => handleFilterSelect(category)}
                      className={`
                        w-full px-6 py-3 text-left font-medium transition-all duration-200
                        ${
                          activeFilter === category
                            ? "bg-trust-blue-600 text-white"
                            : "text-slate-700 hover:bg-slate-50 hover:text-trust-blue-600"
                        }
                        ${
                          index !== categories.length - 1
                            ? "border-b border-slate-100"
                            : ""
                        }
                      `}
                    >
                      <span className="flex items-center gap-3">
                        {activeFilter === category && (
                          <Check className="w-4 h-4" strokeWidth={3} />
                        )}
                        <span
                          className={activeFilter === category ? "" : "ml-7"}
                        >
                          {category}
                        </span>
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
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
                                 <div
                                   className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[60%] pointer-events-none"
                                   style={{
                                     background: `radial-gradient(
               ellipse at bottom,
               rgba(34,197,94,0.28) 0%,
               rgba(22,163,74,0.18) 25%,
               rgba(74,222,128,0.12) 45%,
               rgba(134,239,172,0.07) 60%,
               rgba(187,247,208,0.04) 70%,
               transparent 85%
               )`,
                                   }}
                                 />
               
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

      <CTABanner />
    </>
  );
}
