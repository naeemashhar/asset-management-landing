"use client";

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

const services = [
  {
    title: "Managed Accounts",
    icon: FaHandHoldingUsd,
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
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive Solutions"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
      />

      <section className="py-24 bg-gray-50">
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
      </section>

      <CTABanner />
    </>
  );
}
