"use client";
import { motion } from "framer-motion";
import {
  LineChart,
  Cpu,
  ShieldCheck,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import {
  Terminal,
  Wifi,
  Server,
  CheckCircle2,
} from "lucide-react";
import InfraPanel from "./InfraPanel";
// Data Structure
const techFeatures = [
  {
    id: 1,
    title: "Advanced Trading Platforms",
    desc: "Direct market access through industry-leading execution systems with institutional pricing and deep liquidity.",
    icon: Activity,
    stat: "99.9% Uptime",
  },
  {
    id: 2,
    title: "Algorithmic Trading Tools",
    desc: "Sophisticated algorithms for automated execution (VWAP, TWAP) and custom strategies optimized for futures markets.",
    icon: Cpu,
    stat: "< 12ms Latency",
  },
  {
    id: 3,
    title: "Real-Time Analytics",
    desc: "Comprehensive charting, technical analysis, and market scanning tools to identify opportunities across commodity sectors.",
    icon: LineChart,
    stat: "Live Data",
  },
  {
    id: 4,
    title: "Risk Management Systems",
    desc: "Automated position monitoring, real-time P&L tracking, and risk controls to protect your capital.",
    icon: ShieldCheck,
    stat: "Auto-Hedging",
  },
];



const InstitutionalGradeTechnology = () => {



  return (
    <section className="py-24 overflow-hidden">
      <div className="container w-7xl mx-auto px-6">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 max-w-4xl"
        >
          <div className="flex items-center gap-6 mb-6">
            <div className="h-[2px] w-16 bg-[#374B47]" />
            <span className="text-[#374B47] font-display text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
              Trading Infrastructure
            </span>
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-6xl text-[#121826] tracking-tight leading-[1.1]">
            Institutional-Grade <br className="hidden md:block" />
            <span className="italic text-[#374b47]">Technology.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
            While Valora is building our client track record, we provide access
            to the same professional-grade tools used by established
            institutional traders.
          </p>
        </motion.div>

        {/* --- Control Room Split Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* LEFT: The "Institutional Dashboard" Visual Anchor */}
          <InfraPanel/>

          {/* RIGHT: Content Rows (The "List") */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="border-t border-[#374B47]/20">
              {techFeatures.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ margin: "-50px" }}
                  className="group relative border-b border-[#374B47]/20 py-8 md:py-10 hover:bg-[#374B47]/5 transition-colors duration-300 px-4 md:px-6 cursor-default"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon Column */}
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-12 h-12 rounded-full border border-[#374B47]/20 flex items-center justify-center text-[#374B47] group-hover:bg-[#374B47] group-hover:text-white transition-all duration-300">
                        <item.icon size={20} />
                      </div>
                    </div>

                    {/* Text Column */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-baseline mb-3">
                        <h3 className="font-display text-2xl font-semibold text-[#121826]">
                          {item.title}
                        </h3>
                        <span className="hidden md:block font-mono text-xs tracking-wider text-[#374B47]/60 uppercase border border-[#374B47]/20 px-2 py-1 rounded">
                          {item.stat}
                        </span>
                      </div>

                      <p className="text-gray-600 leading-relaxed max-w-xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 p-6 bg-[#374B47]/5 border-l-2 border-[#374B47] flex gap-4 items-start"
            >
              <div className="mt-1 text-[#374B47]">
                <ArrowUpRight size={20} />
              </div>
              <p className="text-[#374B47] italic font-medium">
                "Technology doesn't replace expertise—it enhances it. Our team
                combines human judgment with cutting-edge tools to execute
                disciplined strategies."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalGradeTechnology;
