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
} from "react-icons/fa";

const services = [
    {
        title: "Wealth Management",
        icon: FaHandHoldingUsd,
        description: "Preserving and compounding capital for future generations through bespoke portfolio construction.",
        benefits: ["Custom Asset Allocation", "Tax-Efficient Investing", "Legacy Planning", "Philanthropic Strategy"],
    },
    {
        title: "Corporate Finance",
        icon: FaLandmark,
        description: "Optimizing capital structures and navigating complex transactions to fuel corporate growth.",
        benefits: ["M&A Advisory", "Capital Raising", "Restructuring", "Valuation Services"],
    },
    {
        title: "Private Equity Access",
        icon: FaChartLine,
        description: "Unlocking value in private markets with exclusive access to high-potential ventures.",
        benefits: ["Direct Investment", "Co-Investment Opportunities", "Due Diligence", "Portfolio Management"],
    },
    {
        title: "Strategic Risk Management",
        icon: FaShieldAlt,
        description: "Identifying and mitigating financial threats to ensuring resilience in volatile markets.",
        benefits: ["Hedging Strategies", "Currency Risk", "Regulatory Compliance", "Scenario Analysis"],
    },
    {
        title: "Market Intelligence",
        icon: FaGlobe,
        description: "Data-driven insights to inform critical decisions in a rapidly changing global economy.",
        benefits: ["Macroeconomic Research", "Sector Analysis", "Competitive Intelligence", "Trend Forecasting"],
    },
    {
        title: "Digital Assets & Innovation",
        icon: FaCoins,
        description: "Navigating the frontier of finance with secure and regulated exposure to digital assets.",
        benefits: ["Crypto Portfolio", "Blockchain Strategy", "Tokenization", "Security Custody"],
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
                                <h3 className="font-serif text-2xl font-bold text-trust-blue-950 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-trust-blue-600 leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {service.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-start text-sm text-trust-blue-800">
                                            <FaCheck className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button variant="outline" className="w-full justify-between group-hover:bg-trust-blue-900 group-hover:text-white group-hover:border-trust-blue-900">
                                    Learn More <FaArrowRight />
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
