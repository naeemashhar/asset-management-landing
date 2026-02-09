"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaChartLine,
  // FaLandmark,
  // FaHandHoldingUsd,
  // FaShieldAlt,
  // FaGlobe,
  FaCoins,
  FaUserTie,
  FaBriefcase,
  FaFileContract,
  FaChartPie,
  // FaBalanceScale,
  // FaLightbulb,
  FaSearchDollar,
  FaNetworkWired,
  // FaLock
  FaCheck,
  FaArrowRight
} from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Helper icon for M&A since FaHandshake might not be imported above
const FaHandshakeIcon = FaBriefcase;

const services = [
  {
    id: "01",
    category: "Wealth",
    title: "Wealth Management",
    description:
      "Holistic strategies to preserve and grow your family's legacy.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    subFeatures: [
      {
        title: "Investment Planning",
        icon: FaChartLine,
        desc: "Tailored portfolio construction aligned with your risk tolerance.",
      },
      {
        title: "Retirement Strategy",
        icon: FaUserTie,
        desc: "Comprehensive modeling to secure your lifestyle longevity.",
      },
      {
        title: "Estate Planning",
        icon: FaFileContract,
        desc: "Structuring assets for efficient multi-generational transfer.",
      },
    ],
  },
  {
    id: "02",
    category: "Corporate",
    title: "Corporate Finance",
    description: "Optimizing capital for sustainable business expansion.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
    subFeatures: [
      {
        title: "M&A Advisory",
        icon: FaHandshakeIcon,
        desc: "Expert guidance on mergers, acquisitions, and divestitures.",
      },
      {
        title: "Capital Raising",
        icon: FaCoins,
        desc: "Access to debt and equity markets for growth initiatives.",
      },
      {
        title: "Valuation Services",
        icon: FaChartPie,
        desc: "Independent assessment of business worth and asset value.",
      },
    ],
  },
  {
    id: "03",
    category: "Private Markets",
    title: "Private Equity",
    description:
      "Exclusive access to high-growth private market opportunities.",
    image:
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2670&auto=format&fit=crop",
    subFeatures: [
      {
        title: "Direct Investment",
        icon: FaBriefcase,
        desc: "Proprietary deal flow in emerging sectors and startups.",
      },
      {
        title: "Co-Investments",
        icon: FaNetworkWired,
        desc: "Partnering with top-tier GPs on specific transactions.",
      },
      {
        title: "Due Diligence",
        icon: FaSearchDollar,
        desc: "Rigorous vetting of management teams and business models.",
      },
    ],
  },
  /*  {
         id: "04",
         category: "Advisory",
         title: "Risk Management",
         description: "Protecting capital against volatility and systemic threats.",
         image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
         subFeatures: [
             { title: "Hedging Strategies", icon: FaShieldAlt, desc: "Derivatives and instruments to offset market exposure." },
             { title: "Currency Risk", icon: FaGlobe, desc: "Managing FX volatility for cross-border operations." },
             { title: "Compliance", icon: FaBalanceScale, desc: "Navigating complex global regulatory frameworks." }
         ]
     },
     {
         id: "05",
         category: "Intelligence",
         title: "Market Insights",
         description: "Data-driven research to inform critical decisions.",
         image: "https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=2670&auto=format&fit=crop",
         subFeatures: [
             { title: "Macro Analysis", icon: FaGlobe, desc: "Global economic trend forecasting and impact assessment." },
             { title: "Sector Deep Dives", icon: FaLightbulb, desc: "Granular analysis of specific industry verticals." },
             { title: "Trend Spotting", icon: FaChartLine, desc: "Identifying early-stage shifts in consumer behavior." }
         ]
     },
     {
         id: "06",
         category: "Innovation",
         title: "Digital Assets",
         description: "Secure entry into the digital economy frontier.",
         image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2574&auto=format&fit=crop",
         subFeatures: [
             { title: "Crypto Portfolios", icon: FaCoins, desc: "Diversified exposure to blue-chip cryptocurrencies." },
             { title: "Blockchain Tech", icon: FaNetworkWired, desc: "Strategic infrastructure investments in Web3." },
             { title: "Custody Solutions", icon: FaLock, desc: "Institutional-grade security for digital holdings." }
         ]
     }, */
];

export default function ServicesGrid() {
  const container = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cards.current.forEach((card, index) => {
        if (card && index < cards.current.length - 1) {
          gsap.to(card, {
            scale: 0.95, // Subtle scale
            scrollTrigger: {
              trigger: card,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative" id="services">
      {/* Header / Intro pinned at top or just part of flow */}
      <div className="py-24 px-6 text-center">
        <span className="block text-trust-blue-500 font-medium tracking-widest text-sm uppercase mb-3">
          Our Expertise
        </span>
        <h2 className=" font-display  text-4xl md:text-5xl font-bold text-trust-blue-950 mb-4">
          Comprehensive Solutions
        </h2>
        <p className="text-trust-blue-600 text-lg max-w-2xl mx-auto">
          Bespoke strategies tailored to your unique financial ambitions.
        </p>
      </div>

      <div className="pb-24 ">
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => {
              cards.current[i] = el;
            }}
            className="rounded-sm nav-section h-screen w-[95%] mx-auto sticky top-0 flex items-center justify-center overflow-hidden bg-[#EFEFE4]" // Adjusted background color
          >
            <div className="w-full h-full max-w-[1920px] mx-auto relative flex flex-col lg:flex-row items-center">
              {/* Left Content Area */}
              <div className="w-full lg:w-[65%] h-full px-8 md:px-16 lg:px-24 flex flex-col justify-center relative z-20 pointer-events-none">
                <div className="pointer-events-auto pr-0 lg:pr-20">
                  <div className="text-[#6F6E63] font-medium tracking-widest text-sm mb-4">
                    {service.id} {service.category}
                  </div>

                  <h3 className="font-display text-5xl md:text-7xl font-bold text-[#6F6E63] mb-12 lg:mb-20 leading-tight">
                    {service.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-sm rounded-none overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {service.subFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="py-10 px-4 hover:bg-gray-50 transition-colors duration-300 group"
                      >
                        <feat.icon className="text-4xl text-black mb-6" />
                        <h4 className="font-display text-xl font-bold text-black mb-4">
                          {feat.title}
                        </h4>
                        <p className="text-[#6F6E63] text-base leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    ))}
                  </div>  
                </div>
              </div>

              {/* Right Image Area */}
              <div className="hidden lg:block w-[55%] h-full absolute right-0 top-0 overflow-hidden z-10">
                <div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)", // Adjusted clip-path
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Services CTA */}

      {/* View All Services CTA */}
      <div className="pb-24  flex justify-center relative z-10">
        <div className="text-center">
          <p className="text-trust-blue-500 mb-6 text-sm uppercase tracking-widest">
            Looking for more?
          </p>
          <Button
            href="/services"
            variant="gold"
            size="lg"
            className="min-w-[200px] bg-[#F4F1EE] hover:bg-[#374B47] hover:text-white"
          >
            Discover All Expertise
          </Button>
        </div>
      </div>

      {/* Required Disclosures */}
      <DisclosureBento />
    </section>
  );
}

function DisclosureBento() {
  return (
    <div className="py-32 px-6 relative z-10 bg-[#F4F1EE]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center md:text-left"
        >
          <div className="flex items-center gap-6 mb-8 justify-center md:justify-start">
            <div className="h-[2px] w-16 bg-[#374B47]" />
            <span className="text-[#374B47] font-display text-sm font-bold tracking-[0.5em] uppercase">
              Compliance Framework
            </span>
          </div>
          <h2 className="font-display font-semibold text-6xl md:text-8xl text-[#121826] tracking-tighter leading-[0.9]">
            Required <br className="hidden md:block" />
            <span className="italic text-[#374b47] ">Disclosures</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* 01: Risk Disclosure */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative bg-white border border-stone-200 p-10 md:p-16 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-700"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <span className="font-display  text-[#374B47] text-sm tracking-widest uppercase bg-stone-50 px-4 py-2 border border-stone-100 font-bold">
                  Section // 01
                </span>
                <span className="text-stone-100 font-display text-[12rem] absolute -top-12 -right-6 select-none group-hover:text-stone-200 transition-colors leading-none">
                  01
                </span>
              </div>
              <h3 className="font-display text-4xl md:text-5xl text-[#121826] mb-8">
                Risk Disclosure
              </h3>
              <p className="font-display font-bold text-[#374B47] uppercase text-lg md:text-xl tracking-[0.1em] leading-tight mb-8 border-l-4 border-[#374B47] pl-6">
                Commodity trading involves substantial risk of loss.
              </p>
              <div className="space-y-6 text-stone-600 text-lg md:text-xl leading-relaxed font-light">
                <p>
                  The high degree of leverage obtainable can work against you as
                  well as for you. Leverage can lead to large losses as well as
                  gains.
                </p>
                <p>
                  Managed accounts may be subject to substantial charges.
                  Trading profits must be significant to avoid asset exhaustion.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 04: Limited Experience (High Contrast Warning) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 group relative bg-[#D1D2BC] p-10 flex flex-col justify-center overflow-hidden shadow-xl"
          >
            <span className="text-white/20 font-display text-8xl absolute -top-2 -right-0 select-none">
              02
            </span>
            <h3 className="font-display text-3xl text-white mb-6">
              Limited Experience
            </h3>
            <p className="text-[#121826] font-display font-bold uppercase text-xs tracking-widest mb-6 bg-white/20 w-fit px-2 py-1">
              Notice of track record
            </p>
            <p className="text-[#121826] text-lg leading-relaxed font-light">
              Valora Asset Management has had little or no experience in trading
              actual accounts for customers.
            </p>
            <p className="text-[#121826]/80 text-md mt-4 font-light">
              Customers should be particularly wary of placing undue reliance on
              hypothetical performance results.
            </p>
          </motion.div>

          {/* 02: Past Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 group relative bg-[#374B47] p-10 md:p-16 overflow-hidden shadow-xl"
          >
            <div className="relative z-10">
              <span className="text-white/10 font-display text-9xl absolute -top-4 -right-4 select-none">
                03
              </span>
              <h3 className="font-display text-4xl text-white mb-8">
                Past Performance
              </h3>
              <p className="text-stone-300 text-lg md:text-xl leading-relaxed font-light mb-8">
                Past results are not necessarily indicative of future results.
                Historical data should never be considered in isolation.
              </p>
              <p className="text-[#D1D2BC] font-display text-xs uppercase tracking-[0.3em]">
                Compliance Rule 2-29 & 2-36
              </p>
            </div>
          </motion.div>

          {/* 03: Suitability Considerations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 group relative bg-white border border-stone-200 p-10 md:p-16 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
          >
            <span className="text-stone-100 font-display text-9xl absolute -top-4 -right-4 select-none">
              04
            </span>
            <h3 className="font-display text-4xl text-[#121826] mb-8">
              Suitability
            </h3>
            <div className="space-y-6 text-stone-500 text-lg leading-relaxed font-light">
              <p>
                Carefully consider whether trading is suitable for your
                financial condition.
              </p>
              <p>
                Purchasing or selling commodity interests may result in a total
                loss of initial margin and additional security deposits.
              </p>
            </div>
          </motion.div>

          {/* 05: Before You Invest / Documentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 group relative bg-trust-blue-950 border border-trust-blue-800 p-8 md:p-16 overflow-hidden shadow-2xl rounded-2xl"
          >
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-trust-blue-900/40 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

            {/* Watermark Icon */}
            <FaFileContract className="absolute -right-10 -bottom-10 text-[300px] text-white/5 rotate-12 pointer-events-none group-hover:rotate-[15deg] group-hover:scale-110 transition-transform duration-700 ease-in-out" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left Side: Heading & Context */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                    <span className="text-gold-400 text-xs font-bold uppercase tracking-widest">
                      Compliance & Safety
                    </span>
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl text-white leading-tight">
                    Before You <br />
                    <span className="text-gold-400 italic">Invest</span>
                  </h3>
                </div>

                <p className="text-trust-blue-200 text-lg leading-relaxed font-light max-w-lg">
                  Transparency is the foundation of our partnership. CFTC regulations requirement ensures you are fully informed before entering any agreement.
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-trust-blue-800 flex items-center justify-center flex-shrink-0 border border-trust-blue-700">
                      <FaCheck className="text-gold-400 w-2.5 h-2.5" />
                    </div>
                    <p className="text-sm text-trust-blue-300">Detailed Risk Disclosures</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-trust-blue-800 flex items-center justify-center flex-shrink-0 border border-trust-blue-700">
                      <FaCheck className="text-gold-400 w-2.5 h-2.5" />
                    </div>
                    <p className="text-sm text-trust-blue-300">Fee Structure Transparency</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Action Card */}
              <div className="lg:pl-10">
                <div className="bg-[#8FD299]/20 border border-white/10 p-8 rounded-xl relative overflow-hidden group/card hover:bg-white/10 transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gold-400" />

                  <h4 className="text-white font-display text-xl font-bold mb-2">
                    Downlaod Disclosure Document
                  </h4>
                  <p className="text-trust-blue-200 text-sm mb-6">
                    We provided this comprehensive document at <span className="text-white font-medium">no cost</span> to all prospective clients.
                  </p>

                  <Button
                    variant="outline"
                    className="w-full border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-trust-blue-950 group-hover/card:shadow-[0_0_20px_rgba(250,204,21,0.2)]"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Download Document <FaArrowRight className="w-4 h-4" />
                    </span>
                  </Button>

                  <p className="text-trust-blue-500 text-[10px] uppercase tracking-widest leading-relaxed mt-6 text-center border-t border-white/5 pt-4">
                    CFTC Compliance Rule 4.31
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
