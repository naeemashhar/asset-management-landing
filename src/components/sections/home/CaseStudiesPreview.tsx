"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FaArrowRight } from "react-icons/fa";

const studies = [
  {
    id: 1,
    title: "Global Tech Merger",
    category: "M&A Strategy",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
    metric: "$4.5B Valuation",
    description: "Orchestrated the cross-border merger of two leading SaaS providers, navigating complex regulatory landscapes in the EU and US.",
  },
  {
    id: 2,
    title: "Legacy Wealth Transfer",
    category: "Private Wealth",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    metric: "Tax Optimization",
    description: "Structured a trust framework for a multi-generational family office, ensuring seamless asset transition and tax efficiency.",
  },
  {
    id: 3,
    title: "Sustainable Energy Fund",
    category: "ESG Investment",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2670&auto=format&fit=crop",
    metric: "22% YOY Growth",
    description: "Launched a $500M green energy fund focused on solar infrastructure in emerging markets.",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div>
            <span className="block text-trust-blue-500 font-medium tracking-widest text-sm uppercase mb-3">
              Proven Results
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-trust-blue-950">
              Case Studies
            </h2>
          </div>

          <Button
            variant="link"
            className="hidden md:inline-flex text-trust-blue-900 font-semibold"
            href="/case-studies"
          >
            View All Cases <FaArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer h-full"
            >
              <div className="bg-white border border-gray-200 p-8 h-[90%] w-[90%] mx-auto relative hover:shadow-xl transition-all duration-300 flex flex-col items-start">
                {/* Top Green Accent */}
                <div className="absolute -top-3 left-8 w-4 h-8 bg-[#8FD299] transform -skew-x-[20deg] shadow-sm" />

                {/* Category */}
                <span className="text-xs font-bold uppercase tracking-wide text-trust-blue-950 mb-6 block mt-2">
                  {study.category}
                </span>

                {/* Image Area */}
                <div
                  className={`w-full aspect-[4/3] mb-8 overflow-hidden relative ${
                    index % 3 === 0
                      ? "bg-red-50"
                      : index % 3 === 1
                        ? "bg-blue-50"
                        : "bg-amber-50"
                  }`}
                >
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

                <div className="mt-auto pt-4 w-full flex items-center justify-between border-t border-gray-100">
                  <span className="text-xs font-bold text-gold-800 uppercase tracking-widest">{study.metric}</span>
                  <FaArrowRight className="text-gray-300 w-3 h-3 group-hover:text-gold-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" href="/case-studies">
            View All Cases <FaArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
