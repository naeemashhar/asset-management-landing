"use client";

import PageHeader from "@/components/layout/PageHeader";
import CTABanner from "@/components/sections/home/CTABanner";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBuilding, FaLeaf, FaStethoscope, FaPlane, FaIndustry } from "react-icons/fa";

const practices = [
    {
        title: "Technology & Innovation",
        icon: FaLaptopCode,
        description: "Guiding high-growth tech firms through IPOs, M&A, and capital scaling.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Real Estate & Infrastructure",
        icon: FaBuilding,
        description: "Structuring complex REITs and infrastructure funds for long-term yield.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Energy & Sustainability",
        icon: FaLeaf,
        description: "Financing the transition to green energy and sustainable industrial practices.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Healthcare & Life Sciences",
        icon: FaStethoscope,
        description: "Capital solutions for biotech research, hospital networks, and med-tech.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Transportation & Logistics",
        icon: FaPlane,
        description: "Optimizing supply chain finance and fleet expansion strategies.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Manufacturing & Industrial",
        icon: FaIndustry,
        description: "Revitalizing legacy industries through modernization and efficiency capital.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
    },
];

export default function PracticeAreasPage() {
    return (
        <>
            <PageHeader
                title="Practice Areas"
                subtitle="Industry Specialization"
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <p className="text-trust-blue-600 text-lg leading-relaxed">
                            We combine financial acumen with deep industry expertise. Our specialized practice groups understand the unique nuances, regulations, and value drivers of your sector.
                        </p>
                    </div>

                    <div className="space-y-24">
                        {practices.map((practice, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                            >
                                {/* Image Side */}
                                <div className="w-full md:w-1/2">
                                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-xl group">
                                        <div className="absolute inset-0 bg-trust-blue-950/20 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                                        <img
                                            src={practice.image}
                                            alt={practice.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="p-3 bg-trust-blue-50 text-trust-blue-900 rounded-full text-xl">
                                            <practice.icon />
                                        </span>
                                        <span className="text-gold-500 font-medium tracking-widest text-sm uppercase">
                                            Sector Focus
                                        </span>
                                    </div>
                                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-blue-950 mb-6">
                                        {practice.title}
                                    </h2>
                                    <p className="text-trust-blue-600 text-lg leading-relaxed mb-8">
                                        {practice.description}
                                    </p>
                                    <div className="w-20 h-1 bg-gray-200 rounded-full" />
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
