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
  FaArrowRight,
} from "react-icons/fa";
import { Button } from "@/components/ui/Button";


// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Helper icon for M&A since FaHandshake might not be imported above
const FaHandshakeIcon = FaBriefcase;

const services = [
  {
    id: "01",
    category: "Analysis & Management",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2670&auto=format&fit=crop",
    items: [
      {
        title: "Market Analysis",
        description:
          "Comprehensive fundamental and technical analysis across all major commodity sectors including energy, metals, agriculture, and financial futures.",
      },
      {
        title: "Risk Management",
        description:
          "Sophisticated hedging strategies and risk mitigation techniques tailored to your portfolio objectives and risk tolerance levels.",
      },
    ],
  },
  {
    id: "02",
    category: "Strategy & Excellence",
    image:
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2670&auto=format&fit=crop",
    items: [
      {
        title: "Portfolio Diversification",
        description:
          "Strategic allocation across multiple asset classes and trading strategies to optimize risk-adjusted returns and reduce correlation with traditional investments.",
      },
      {
        title: "Commitment to Excellence",
        description:
          "Dedicated to providing thorough market analysis and personalized service as we build our track record with client accounts.",
      },
    ],
  },
  {
    id: "03",
    category: "Service & Compliance",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop",
    items: [
      {
        title: "Personalized Service",
        description:
          "Direct access to advisors who understand your unique objectives and provide customized solutions rather than one-size-fits-all approaches.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Full NFA registration and adherence to all CFTC regulations, ensuring the highest standards of professional conduct and client protection.",
      },
    ],
  },
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
    <section ref={container} className="relative py-16" id="services">
      
      
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className=" text-center md:text-left max-w-7xl mx-auto px-6 py-10"
      >
        <div className="flex items-center gap-6 mb-4 justify-center md:justify-start">
          <div className="h-[2px] w-16 bg-[#374B47]" />
          <span className="text-[#374B47] font-display text-2xl  font-bold tracking-[0.5em] uppercase">
            Your Advantage
          </span>
        </div>
        <h2 className="font-display font-semibold text-4xl md:text-7xl text-[#121826] tracking-tighter leading-[0.9]">
          Why Choose <span className="italic text-[#374b47] ">Valora</span>
        </h2>
      </motion.div> */}

      <div className="pb-16 ">
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
                  <div className="text-trust-blue-700 font-bold font-display tracking-widest text-4xl mb-8">
                    {service.id} {service.category}
                  </div>

                  {/* Grid of 2 items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {service.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-8 w-100 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <h3 className="font-display  text-2xl lg:text-3xl font-bold text-[#374B47] mb-4 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-[#6F6E63] text-base lg:text-lg leading-relaxed">
                          {item.description}
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
                    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
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


    </section>
  );
}

