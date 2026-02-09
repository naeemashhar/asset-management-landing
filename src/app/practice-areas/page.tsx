"use client";

import { useState, useRef, useEffect } from "react";
import PageHeader from "@/components/layout/PageHeader";
import CTABanner from "@/components/sections/home/CTABanner";
import { useInView } from "framer-motion";
import {
  FaLaptopCode,
  FaBuilding,
  FaLeaf,
  FaStethoscope,
  FaPlane,
  FaIndustry,
  FaArrowRight,
} from "react-icons/fa";

const practices = [
  {
    id: 1,
    title: "Technology & Innovation",
    subtitle: "IPO & Capital Scaling",
    icon: FaLaptopCode,
    description:
      "Guiding high-growth tech firms through complex lifecycle events. From Series B fundraising to IPO readiness and strategic M&A, we provide the capital structure required for exponential scale.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Real Estate & Infrastructure",
    subtitle: "REITs & Yield Strategy",
    icon: FaBuilding,
    description:
      "Structuring sophisticated REITs and infrastructure funds. We turn physical assets into high-performing financial instruments, focusing on long-term yield generation and tax efficiency.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Energy & Sustainability",
    subtitle: "Green Transition Finance",
    icon: FaLeaf,
    description:
      "Financing the global transition to renewable energy. We specialize in capital allocation for solar infrastructure, wind farms, and sustainable industrial retrofitting projects.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Healthcare & Life Sciences",
    subtitle: "Biotech & MedTech",
    icon: FaStethoscope,
    description:
      "Bridging the gap between scientific breakthrough and market viability. Our specialized team structures debt and equity for hospital networks and late-stage biotech research.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Transportation & Logistics",
    subtitle: "Supply Chain Optimization",
    icon: FaPlane,
    description:
      "Optimizing global supply chain finance. We assist major logistics players in fleet expansion strategies, fuel hedging, and cross-border acquisition financing.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Manufacturing & Industrial",
    subtitle: "Industry 4.0",
    icon: FaIndustry,
    description:
      "Revitalizing legacy industries. We provide the capital needed for modernization, automation, and efficiency upgrades to keep manufacturing competitive in a global market.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
  },
];

// Content Block Component
function PracticeContent({ practice, activeId, setActiveId }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveId(practice.id);
    }
  }, [isInView, practice.id, setActiveId]);

  return (
    <div
      ref={ref}
      className="min-h-[80vh] flex flex-col justify-center py-20 pr-0 lg:pr-20 border-b border-gray-100 last:border-0 relative group"
    >
      <div className="relative pl-8 lg:pl-12 transition-all duration-500">
        {/* 1. Active Border Line (Left) */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-500 ${
            activeId === practice.id
              ? "bg-gold-500 h-full"
              : "bg-gray-200 h-full group-hover:bg-gray-300"
          }`}
        />

        {/* 2. Giant Background Number (Depth) */}
        <span className="absolute -top-20 -left-6 text-[8rem] lg:text-[12rem] font-display font-bold text-gray-50 -z-10 select-none leading-none opacity-60">
          0{practice.id}
        </span>

        {/* 3. Top Meta Data (Icon + Subtitle) */}
        <div className="flex items-center gap-4 mb-6">
          <span
            className={`text-2xl transition-colors duration-300 ${
              activeId === practice.id ? "text-gold-500" : "text-gray-400"
            }`}
          >
            <practice.icon />
          </span>
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-trust-blue-900/60">
            {practice.subtitle}
          </span>
        </div>

        {/* 4. Main Title */}
        <h2 className="text-4xl lg:text-6xl font-display font-medium text-trust-blue-950 mb-8 leading-[1.1] tracking-tight">
          {practice.title}
        </h2>

        {/* 5. Decorative Divider (Expands on Active) */}
        <div
          className={`h-[2px] mb-8 transition-all duration-700 ease-out ${
            activeId === practice.id
              ? "w-24 bg-gold-500"
              : "w-12 bg-gray-200 group-hover:w-16"
          }`}
        />

        {/* 6. Description */}
        <p className="text-lg text-gray-500 font-light leading-loose max-w-lg mb-8">
          {practice.description}
        </p>

        {/* 7. Explore Button (Optional) */}
        <button
          className={`group/btn flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors ${activeId === practice.id ? "text-trust-blue-950" : "text-gray-400"}`}
        >
          Explore Sector
          <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-2" />
        </button>
      </div>
    </div>
  );
}

export default function PracticeAreasPage() {
  const [activeId, setActiveId] = useState(1);

  return (
    <>
      <PageHeader
        title="Practice Areas"
        subtitle="Industry Specialization"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row">
            {/* LEFT COLUMN: Scrollable Content */}
            <div className="w-full lg:w-1/2 pt-12 lg:pt-0">
              {practices.map((practice) => (
                <PracticeContent
                  key={practice.id}
                  practice={practice}
                  activeId={activeId} // Passed down here
                  setActiveId={setActiveId}
                />
              ))}
              <div className="h-[20vh]" />
            </div>

            {/* RIGHT COLUMN: Sticky Image Area */}
            <div className="hidden lg:block w-1/2 relative">
              <div className="sticky top-0 h-screen flex items-center justify-center py-20 pl-10">
                <div className="relative w-full h-full max-h-[700px] overflow-hidden rounded-sm bg-gray-100 shadow-2xl">
                  {practices.map((practice) => (
                    <div
                      key={practice.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        activeId === practice.id
                          ? "opacity-100 z-10"
                          : "opacity-0 z-0"
                      }`}
                    >
                      <div className="absolute inset-0 bg-trust-blue-950/10 mix-blend-multiply" />

                      <img
                        src={practice.image}
                        alt={practice.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />

                      <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                        <div className="flex justify-between items-end border-t border-white/20 pt-6">
                          <h3 className="text-white text-2xl font-display font-medium tracking-wide">
                            {practice.title}
                          </h3>
                          <div className="text-white/60 text-sm font-mono tracking-widest">
                            SECTOR ID: 0{practice.id}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
