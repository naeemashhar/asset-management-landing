"use client";
import { motion } from "framer-motion";

export default function InfraPanel() {
  return (
    <div className="lg:col-span-5 flex items-center justify-center min-h-[520px]">
      <div className="relative w-[440px] h-[440px]">
        {/* SOFT AMBIENT GLOW */}
        <div className="absolute inset-0 bg-emerald-200/20 blur-3xl rounded-full" />

        {/* OUTER RINGS */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[360px] h-[360px] rounded-full border border-gray-200/60" />
          <div className="absolute w-[280px] h-[280px] rounded-full border border-gray-200/40" />
        </div>

        {/* CENTER CORE */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-36 h-36 -translate-x-1/2 -translate-y-1/2
                     rounded-full bg-white border border-gray-200 shadow-xl
                     flex flex-col items-center justify-center"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[11px] uppercase tracking-wider text-gray-500">
            System
          </span>
          <span className="text-sm font-semibold text-gray-800">
            Core Engine
          </span>
        </motion.div>

        {/* NODES */}
        {[
          { label: "Execution", x: "50%", y: "8%" },
          { label: "Analytics", x: "92%", y: "50%" },
          { label: "Risk Control", x: "50%", y: "92%" },
          { label: "Algorithms", x: "8%", y: "50%" },
        ].map((node, i) => (
          <motion.div
            key={i}
            className="absolute w-28 h-11 -translate-x-1/2 -translate-y-1/2
                       rounded-lg bg-white/90 backdrop-blur border border-gray-200
                       shadow-sm flex items-center justify-center
                       text-xs font-medium text-gray-700"
            style={{ left: node.x, top: node.y }}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {node.label}
          </motion.div>
        ))}

        {/* CONNECTION LINES WITH FADE ANIMATION */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
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
              stroke="#10b98133"
              strokeWidth="1"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 3 + i, repeat: Infinity }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
