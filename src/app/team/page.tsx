"use client";

import PageHeader from "@/components/layout/PageHeader";
import CTABanner from "@/components/sections/home/CTABanner";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const team = [
  {
    name: "Alexander von Steinberg",
    role: "Managing Partner & CEO",
    bio: "With over 25 years in global investment banking, Alexander leads Valora with a vision of disciplined growth and unwavering client commitment.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
  },
  {
    name: "Sarah Chen-Williams",
    role: "Chief Investment Officer",
    bio: "Sarah oversees our global asset allocation strategy, bringing deep expertise in quantitative analysis and macroeconomic forecasting.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
  },
  {
    name: "James Sterling",
    role: "Head of Private Equity",
    bio: "James specializes in identifying high-growth opportunities in emerging markets and technology sectors.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    role: "Director of Wealth Planning",
    bio: "Elena crafts bespoke estate and tax strategies for our ultra-high-net-worth clientele.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop",
  },
  {
    name: "David Mwangi",
    role: "Senior Risk Analyst",
    bio: "David ensures capital preservation through rigorous risk assessment models and hedging strategies.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop",
  },
  {
    name: "Victoria Al-Fayed",
    role: "Head of Client Relations",
    bio: "Victoria is dedicated to ensuring a seamless, high-touch experience for every Valora partner family.",
    image:
      "https://images.unsplash.com/photo-1598550832236-81cf9dc2d676?q=80&w=2574&auto=format&fit=crop",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Leadership"
        subtitle="Experience & Expertise"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-trust-blue-600 text-lg leading-relaxed">
              Our team is composed of seasoned veterans from the world&apos;s
              leading financial institutions. We are united by a common purpose:
              to stewarding your wealth with the same care and discipline we
              apply to our own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative overflow-hidden mb-6 aspect-[3/4] rounded-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  />
                  {/* Overlay with Socials */}
                  <div className="absolute inset-0 bg-trust-blue-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href="#"
                      className="p-3 bg-gold-400 text-trust-blue-950 rounded-full hover:bg-white transition-colors"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-gold-400 text-trust-blue-950 rounded-full hover:bg-white transition-colors"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
                <h3 className=" font-display  text-2xl font-bold text-trust-blue-950 mb-1">
                  {member.name}
                </h3>
                <div className="text-gold-500 font-medium text-sm tracking-uppercase uppercase mb-4">
                  {member.role}
                </div>
                <p className="text-trust-blue-600 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
