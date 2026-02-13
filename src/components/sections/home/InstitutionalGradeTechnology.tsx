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
          <InfraPanel />

          {/* RIGHT: Content Rows (The "List") - Redesigned for High Engagement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid md:grid-cols-2 gap-6 ">
              {techFeatures.map((item, idx) => ( 
                <motion.div
                  key={item.id}
                  whileHover={{ y: -5 }}
                  className="group relative bg-[radial-gradient(circle_at_center,_#E3E4CF_0%,_#D1D2BC_100%)] border-1px border-[#374B47] rounded-xl p-6 hover:shadow-xl hover:shadow-[#F4F1EE]/50 hover:border-[#F4F1EE] transition-all duration-300 overflow-hidden"
                >
                  {/* Hover Gradient Background - Lighter for the new base */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F4F1EE]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Decorative Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#F4F1EE]/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150" />

                  <div className="relative z-10 ">
                    <div className="flex justify-between items-start mb-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-lg bg-[#374B47] flex items-center justify-center text-[#F4F1EE] group-hover:bg-[#F4F1EE] group-hover:text-[#374B47] transition-colors duration-300 shadow-md">
                        <item.icon size={22} />
                      </div>

                      {/* Stat Pill */}
                      <span className="font-mono text-xs font-bold tracking-wider text-[#374B47] bg-[#F4F1EE]/50 px-2 py-1 rounded border border-[#374B47]/30 group-hover:bg-[#F4F1EE] group-hover:border-[#374B47] transition-colors">
                        {item.stat}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#121826] mb-3 group-hover:text-[#374B47]">
                      {item.title}
                    </h3>

                    <p className="text-[#374B47]/80 text-sm leading-relaxed mb-4 font-medium group-hover:text-[#374B47]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Closing Statement - Enhanced (Light Theme Friendly) */}
            <motion.div
              className="mt-12 p-8 bg-gradient-to-br from-white to-slate-50 rounded-xl border border-[#374B47] shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl" />

              <div className="relative z-10 flex gap-5 items-start">
                <div className="mt-1 text-gold-500 p-2 bg-trust-blue-50 rounded-full border border-trust-blue-100 shadow-sm">
                  <ArrowUpRight size={20} />
                </div>
                <div>
                  <h4 className="text-trust-blue-950 font-display font-bold text-lg mb-2">
                    Expertise Enhanced by Technology
                  </h4>
                  <p className="text-slate-600 italic font-medium leading-relaxed font-serif">
                    "Technology doesn't replace expertise—it enhances it. Our team combines human judgment with cutting-edge tools to execute disciplined strategies."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalGradeTechnology;
