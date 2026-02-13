"use client";
import { motion } from "framer-motion";

export default function InfraPanel() {
  return (
    <div className="lg:col-span-5 flex items-center justify-center min-h-[520px]">
      <div className="relative w-[440px] h-[440px]">
        {/* ENHANCED AMBIENT GLOW - Multi-layered */}
        <motion.div
          className="absolute inset-0 bg-[#D1D2BC]/20  rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[#F4F1EE]/10  rounded-full transform scale-90" />
        <motion.div
          className="absolute inset-0 bg-emerald-400/10  rounded-full"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* OUTER RINGS - Enhanced with rotation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-[360px] h-[360px] rounded-full border-2 border-[#D1D2BC]/40 border-dashed" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[280px] h-[280px] rounded-full border border-[#374B47]/30" />
          <div className="absolute w-[200px] h-[200px] rounded-full border border-[#D1D2BC]/20 border-dotted" />
        </div>

        {/* CENTER CORE - Enhanced with gradient */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-36 h-36 -translate-x-1/2 -translate-y-1/2
                     rounded-full bg-gradient-to-br from-white via-[#F4F1EE] to-[#D1D2BC]/30 
                     border-2 border-[#374B47]/20 shadow-2xl shadow-[#D1D2BC]/30
                     flex flex-col items-center justify-center z-20 group cursor-pointer"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.08 }}
        >
          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-emerald-50/50 to-transparent opacity-60" />

          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-emerald-400/30"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <span className="relative z-10 text-[10px] uppercase tracking-widest text-[#374B47]/60 font-bold mb-1">
            System
          </span>
          <span className="relative z-10 text-sm font-bold text-[#374B47] group-hover:text-emerald-600 transition-colors">
            Core Engine
          </span>

          {/* Status indicator */}
          {/* <div className="absolute -bottom-0.1 flex items-center gap-1">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-emerald-500"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-[8px] text-emerald-600 font-mono">ACTIVE</span>
          </div> */}
        </motion.div>

        {/* NODES - Enhanced with gradients and hover */}
        {[
          { label: "Execution", x: "50%", y: "8%", color: "emerald" },
          { label: "Analytics", x: "92%", y: "50%", color: "blue" },
          { label: "Risk Control", x: "50%", y: "92%", color: "amber" },
          { label: "Algorithms", x: "8%", y: "50%", color: "violet" },
        ].map((node, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-12 -translate-x-1/2 -translate-y-1/2
                       rounded-lg bg-gradient-to-br from-white to-[#F4F1EE]/80 
                       border border-[#374B47]/20 hover:border-[#374B47]/40
                       shadow-lg shadow-[#D1D2BC]/20 hover:shadow-xl hover:shadow-[#D1D2BC]/30
                       flex items-center justify-center
                       text-xs font-bold text-[#374B47] z-10
                       cursor-pointer group transition-all duration-300"
            style={{ left: node.x, top: node.y }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05, y: -8 }}
          >
            {/* Node glow on hover */}
            <div className={`absolute inset-0 rounded-lg bg-${node.color}-100/0 group-hover:bg-${node.color}-100/50 transition-all duration-300`} />

            {/* Status dot */}
           {/*  <motion.div
              className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-${node.color}-500 shadow-lg`}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            /> */}

            <span className="relative z-10">{node.label}</span>
          </motion.div>
        ))}

        {/* CONNECTION LINES - Enhanced with gradient and flow */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D1D2BC" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D1D2BC" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {[
            { x2: "50%", y2: "12%" },
            { x2: "88%", y2: "50%" },
            { x2: "50%", y2: "88%" },
            { x2: "12%", y2: "50%" },
          ].map((line, i) => (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={line.x2}
              y2={line.y2}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                strokeDashoffset: [0, -20, 0]
              }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity }}
            />
          ))}
        </svg>

        {/* DATA FLOW PARTICLES */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-emerald-400/60 shadow-lg shadow-emerald-400/50"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [0, (i % 2 === 0 ? 150 : -150) * Math.cos(i * Math.PI / 2)],
              y: [0, (i % 2 === 0 ? 150 : -150) * Math.sin(i * Math.PI / 2)],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.75,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
