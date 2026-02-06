"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        quote: "ApexQuants's strategic insight completely transformed our approach to risk management. They don't just advise; they partner in your success.",
        author: "Elena V.",
        role: "CEO, TechGlobal Inc.",
    },
    {
        id: 2,
        quote: "The depth of market analysis provided was instrumental in our recent merger. Exceptional professionalism and clarity.",
        author: "Marcus T.",
        role: "Managing Director, Sovereign Capital",
    },
    {
        id: 3,
        quote: "A rare combination of analytical rigor and creative financial problem-solving. They curated a legacy plan that secured our family's future.",
        author: "Sarah L.",
        role: "Founder, Luminous Ventures",
    },
];

const clients = [
    "Goldman Sachs",
    "Morgan Stanley",
    "JP Morgan",
    "BlackRock",
    "Vanguard",
    "Fidelity",
]; // In real app, use logos

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-trust-blue-950 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Testimonials */}
                <div className="mb-24 flex flex-col md:flex-row gap-16 items-center">
                    {/* Control Side */}
                    <div className="w-full md:w-1/3">
                        <span className="block text-gold-400 font-medium tracking-widest text-sm uppercase mb-3">
                            Client Stories
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
                            Trusted by Industry Leaders
                        </h2>
                        <div className="flex gap-4">
                            <button onClick={prev} className="p-4 border border-trust-blue-700 rounded-full hover:bg-gold-400 hover:text-trust-blue-950 hover:border-gold-400 transition-all">
                                <FaChevronLeft />
                            </button>
                            <button onClick={next} className="p-4 border border-trust-blue-700 rounded-full hover:bg-gold-400 hover:text-trust-blue-950 hover:border-gold-400 transition-all">
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>

                    {/* Slider Content */}
                    <div className="w-full md:w-2/3 relative min-h-[300px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="bg-trust-blue-900/50 p-10 md:p-14 border border-trust-blue-800 rounded-sm relative"
                            >
                                <FaQuoteLeft className="text-gold-400/20 text-6xl absolute top-8 left-8" />
                                <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-8 relative z-10">
                                    &quot;{testimonials[currentIndex].quote}&quot;
                                </p>
                                <div>
                                    <div className="text-gold-400 font-bold text-lg">
                                        {testimonials[currentIndex].author}
                                    </div>
                                    <div className="text-trust-blue-300 text-sm">
                                        {testimonials[currentIndex].role}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Client Logos / Trust Indicators */}
                {/* Client Logos / Trust Indicators - Infinite Marquee */}
                <div className="border-t border-trust-blue-800 pt-16">
                    <p className="text-trust-blue-400 uppercase tracking-widest text-sm mb-10 text-center">
                        Partnering with global institutions
                    </p>

                    <div className="relative overflow-hidden w-full">
                        {/* Gradient Masks for Fade Effect */}
                        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-trust-blue-950 to-transparent z-10 pointer-events-none" />
                        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-trust-blue-950 to-transparent z-10 pointer-events-none" />

                        {/* Sliding Track */}
                        <motion.div
                            className="flex items-center gap-20 whitespace-nowrap"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 30, // Adjust speed here
                            }}
                        >
                            {/* Duplicate list twice to ensure seamless loop */}
                            {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                                <span key={i} className="font-serif text-2xl md:text-3xl font-bold text-white/40 hover:text-white/80 transition-colors cursor-default">
                                    {client}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
