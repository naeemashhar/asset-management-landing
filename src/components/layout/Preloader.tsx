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
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-trust-blue-950"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="relative flex flex-col items-center">
                        {/* Animated Text */}
                        <div className="overflow-hidden mb-4">
                            <motion.h1
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                className="font-serif text-5xl md:text-7xl font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200"
                            >
                                Valora
                            </motion.h1>
                        </div>

                        {/* Divider Line Animation */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
                            className="h-[2px] bg-gold-400 mb-4"
                        />

                        {/* Subtitle Fade In */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="text-trust-blue-200 text-sm tracking-[0.3em] uppercase"
                        >
                            Asset Management
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
