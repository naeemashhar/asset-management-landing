"use client";

import { motion } from "framer-motion";
import { FaChartLine, FaShieldAlt, FaChartPie, FaExclamationTriangle } from "react-icons/fa";

const features = [
    {
        title: "Expert Analysis",
        description: "Our senior analysts provide comprehensive fundamental and technical analysis across all major commodity sectors including energy, metals, agriculture, and financial futures.",
        icon: FaChartLine
    },
    {
        title: "Risk Management",
        description: "Sophisticated hedging strategies and risk mitigation techniques tailored to your portfolio objectives and risk tolerance levels.",
        icon: FaShieldAlt
    },
    {
        title: "Portfolio Diversification",
        description: "Strategic allocation across multiple asset classes and trading strategies to optimize risk-adjusted returns and reduce correlation with traditional investments.",
        icon: FaChartPie
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white w-[90%] mx-auto">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-blue-950 mb-6">
                        Why Choose Valora
                    </h2>
                    <p className="text-trust-blue-600 text-lg max-w-3xl leading-relaxed">
                        We combine deep market expertise with personalized service to help you navigate the complexities of futures and commodities trading.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-gold-400 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gold-400 origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100 -z-0" />

                            <div className="relative z-10">
                                <h3 className="font-serif text-2xl font-bold text-trust-blue-950 group-hover:text-white transition-colors duration-300 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-trust-blue-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className=" p-8 bg-yellow-50 border border-yellow-200 rounded-sm"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <FaExclamationTriangle className="text-yellow-600 text-xl" />
                        <h4 className="text-yellow-800 font-bold text-lg">Important Risk Disclosure</h4>
                    </div>
                    <p className="text-yellow-900 text-sm font-semibold uppercase leading-relaxed tracking-wide">
                        Commodity trading involves substantial risk of loss. Past results are not necessarily indicative of future results.
                        <span className="block mt-2 normal-case font-normal text-yellow-800">
                            You should carefully consider whether such trading is suitable for you in light of your financial condition.
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
