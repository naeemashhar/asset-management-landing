"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scroll while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Simulate loading time or wait for window load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds fixed duration for effect

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-trust-blue-950 flex flex-col items-center justify-center overflow-hidden"
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="relative overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className=" font-display  text-6xl md:text-9xl font-bold text-white tracking-tighter"
            >
              VALORA
            </motion.h1>
          </div>

          <div className="flex items-center gap-4 mt-4 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
              className="h-[1px] bg-gold-400"
            />
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
              className="text-gold-400 text-sm tracking-[0.3em] uppercase font-light"
            >
              Asset Management
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
              className="h-[1px] bg-gold-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
