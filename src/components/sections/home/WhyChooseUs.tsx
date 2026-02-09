"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaChartLine,
  FaShieldAlt,
  FaChartPie,
  FaAward,
  FaUserTie,
  FaBalanceScale,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    id: "01",
    title: "Market Analysis",
    description:
      "Comprehensive fundamental and technical analysis across all major commodity sectors including energy, metals, agriculture, and financial futures.",
    icon: FaChartLine,
  },
  {
    id: "02",
    title: "Risk Management",
    description:
      "Sophisticated hedging strategies and risk mitigation techniques tailored to your portfolio objectives and risk tolerance levels.",
    icon: FaShieldAlt,
  },
  {
    id: "03",
    title: "Portfolio Diversification",
    description:
      "Strategic allocation across multiple asset classes and trading strategies to optimize risk-adjusted returns and reduce correlation with traditional investments.",
    icon: FaChartPie,
  },
  {
    id: "04",
    title: "Commitment to Excellence",
    description:
      "Dedicated to providing thorough market analysis and personalized service as we build our track record with client accounts.",
    icon: FaAward, // you can import from react-icons/fa
  },
  {
    id: "05",
    title: "Personalized Service",
    description:
      "Direct access to advisors who understand your unique objectives and provide customized solutions rather than one-size-fits-all approaches.",
    icon: FaUserTie,
  },
  {
    id: "06",
    title: "Regulatory Compliance",
    description:
      "Full NFA registration and adherence to all CFTC regulations, ensuring the highest standards of professional conduct and client protection.",
    icon: FaBalanceScale,
  },
];

export default function WhyChooseUsHeartbeat() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-white text-slate-900 overflow-x-clip"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* LEFT SIDE: Sticky + Dynamic "Pulse" */}
          <div className="lg:w-5/12 relative py-20 lg:py-32 z-10">
            <div className="lg:sticky lg:top-24 flex flex-col justify-center">
              {/* The "Pulse" - Dynamic Background Element */}
              <div className="absolute top-1/2 -left-20 w-96 h-96 bg-trust-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Micro-Data Element: "Trusted by..." */}

                <div className="sticky top-0">
                  <h2 className=" font-display  text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-slate-900 mb-8 relative z-10">
                    Precision in <br />
                    <span className="text-[#374B47] italic">motion.</span>
                  </h2>

                  <p className="text-slate-600 text-lg leading-relaxed max-w-md font-light mb-10 relative z-10">
                    We combine institutional-grade research with personalized
                    advisory, delivering disciplined strategies built for
                    long-term wealth growth.
                  </p>

                  {/* Functional Progress Line */}
                  <div className="hidden lg:flex items-center gap-6">
                    <div className="h-48 w-[5px] bg-slate-100/80 relative rounded-full overflow-visible">
                      <motion.div
                        style={{
                          height: useTransform(
                            scrollYProgress,
                            [0, 1],
                            ["0%", "100%"],
                          ),
                        }}
                        className="w-full bg-gradient-to-b from-trust-blue-900 to-gold-400 rounded-full relative"
                      >
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-gold-400 rounded-full shadow-[0_0_10px_var(--color-gold-400)] border border-white/80" />
                      </motion.div>
                      {/* Track background subtle glow for depth */}
                      <div className="absolute inset-0 bg-slate-200/30 rounded-full -z-10 blur-[1px]" />
                    </div>

                    <div className="flex flex-col gap-1 -mt-2 opacity-80 select-none">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-bold">
                        Journey
                      </span>
                      <span className="text-xs font-bold text-slate-900 font-display">
                        Start — Finish
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE: Scrolling List with "Heartbeat" */}
          <div className="lg:w-7/12 py-20 lg:py-32 relative z-20">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} index={index} />
              ))}
            </div>

            {/* Risk Footer - Integrated & Subtle */}
            {/* Risk Footer - Integrated & Subtle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 ml-4 lg:ml-0"
            >
              <div className="bg-slate-50 border-l-4 border-gold-400 p-6 rounded-r-sm flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mt-1">
                  <FaShieldAlt className="text-gold-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-trust-blue-950 text-sm uppercase tracking-wider mb-2">
                    Risk Disclosure
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-xl">
                    Commodity trading involves substantial risk of loss. Past results are not necessarily indicative of future results. Investors should carefully consider their financial condition before trading.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative border-t border-slate-200 py-16 hover:bg-white transition-colors duration-500 px-6 -mx-6 rounded-sm"
    >
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Number & Icon Block */}
        <div className="flex items-center gap-6 md:w-1/4">
          <span className="text-slate-300  font-display  text-3xl font-light group-hover:text-trust-blue-900 transition-colors duration-300">
            {feature.id}
          </span>
          <div className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-trust-blue-900 group-hover:text-trust-blue-900 transition-all duration-300 bg-white">
            <feature.icon className="text-lg" />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-3/4">
          <h3 className="text-2xl  font-display  text-slate-900 font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">
            {feature.title}
          </h3>
          <p className="text-slate-500 leading-relaxed text-lg md:text-md font-sans group-hover:text-slate-700 transition-colors duration-300">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
