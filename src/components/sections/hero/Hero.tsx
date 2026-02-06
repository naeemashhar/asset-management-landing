"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FaArrowRight } from "react-icons/fa";

const slides = [
    {
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        text: "Commodities Management"
    },
    {
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop",
        text: "Integrity & Trust"
    },
    {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        text: "Growth & Legacy"
    },
    {
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
        text: "Strategy & Success"
    }
];

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-trust-blue-950 text-white"
        >
            {/* Parallax Background Slider */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-[700px] absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${slides[currentIndex].image}')` }}
                    >
                        <div className="absolute inset-0 bg-trust-blue-950/80 bg-gradient-to-t from-trust-blue-950 via-trust-blue-950/60 to-transparent" />
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* Content */}
            <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mb-6"
                >
                    {/* <span className="inline-block py-1 px-3 rounded-full border border-gold-400/30 bg-gold-400/10 text-gold-400 text-sm font-medium tracking-wide uppercase">
                        Premium Financial Consulting
                    </span> */}
                </motion.div>

                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="block"
                    >
                        Strategies Future&apos;s
                    </motion.span>

                    <span className="block h-[1.4em] overflow-hidden pb-2 -mb-2">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentIndex}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent"
                            >
                                {slides[currentIndex].text}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="text-lg md:text-md text-trust-blue-200 max-w-2xl mb-10 leading-relaxed font-light"
                >
                    Expert guidance and portfolio management in the dynamic world of futures and commodities trading. Decades of combined experience serving institutional and individual clients.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button size="lg" variant="gold" className="min-w-[180px]" href="#services">
                        Our Services
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="min-w-[180px] border-white text-white hover:bg-white hover:text-trust-blue-950"
                        href="/contact"
                    >
                        Contact Us <FaArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            >
                <span className="text-xs uppercase tracking-widest text-trust-blue-300">
                    Scroll
                </span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent" />
            </motion.div>
        </section>
    );
}
