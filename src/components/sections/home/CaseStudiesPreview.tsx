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
  },
  {
    id: 2,
    title: "Legacy Wealth Transfer",
    category: "Private Wealth",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    metric: "Tax Optimization",
  },
  {
    id: 3,
    title: "Sustainable Energy Fund",
    category: "ESG Investment",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2670&auto=format&fit=crop",
    metric: "22% YOY Growth",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <span className="block text-gold-500 font-medium tracking-widest text-sm uppercase mb-3">
              Proven Results
            </span>
            <h2 className=" font-display  text-4xl md:text-5xl font-bold text-trust-blue-950">
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
              className="group relative h-[400px] rounded-sm overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-trust-blue-950/90 via-trust-blue-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-0 left-0 p-8 w-full group-hover:-translate-y-2 transition-transform duration-300">
                <div className="text-gold-400 text-sm font-medium tracking-wider uppercase mb-2">
                  {study.category}
                </div>
                <h3 className=" font-display  text-2xl font-bold text-white mb-2">
                  {study.title}
                </h3>
                <div className="text-white/80 text-sm font-light mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Key Result: {study.metric}
                </div>
                <div className="flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform translate-y-4 group-hover:translate-y-0">
                  Read Case Study <FaArrowRight className="ml-2 h-3 w-3" />
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
