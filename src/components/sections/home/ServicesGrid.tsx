"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FaChartLine,
    // FaLandmark,
    // FaHandHoldingUsd,
    // FaShieldAlt,
    // FaGlobe,
    FaCoins,
    FaUserTie,
    FaBriefcase,
    FaFileContract,
    FaChartPie,
    // FaBalanceScale,
    // FaLightbulb,
    FaSearchDollar,
    FaNetworkWired,
    // FaLock
} from "react-icons/fa";
import { Button } from "@/components/ui/Button";

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Helper icon for M&A since FaHandshake might not be imported above
const FaHandshakeIcon = FaBriefcase;

const services = [
    {
        id: "01",
        category: "Wealth",
        title: "Wealth Management",
        description: "Holistic strategies to preserve and grow your family's legacy.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        subFeatures: [
            { title: "Investment Planning", icon: FaChartLine, desc: "Tailored portfolio construction aligned with your risk tolerance." },
            { title: "Retirement Strategy", icon: FaUserTie, desc: "Comprehensive modeling to secure your lifestyle longevity." },
            { title: "Estate Planning", icon: FaFileContract, desc: "Structuring assets for efficient multi-generational transfer." }
        ]
    },
    {
        id: "02",
        category: "Corporate",
        title: "Corporate Finance",
        description: "Optimizing capital for sustainable business expansion.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        subFeatures: [
            { title: "M&A Advisory", icon: FaHandshakeIcon, desc: "Expert guidance on mergers, acquisitions, and divestitures." },
            { title: "Capital Raising", icon: FaCoins, desc: "Access to debt and equity markets for growth initiatives." },
            { title: "Valuation Services", icon: FaChartPie, desc: "Independent assessment of business worth and asset value." }
        ]
    },
    {
        id: "03",
        category: "Private Markets",
        title: "Private Equity",
        description: "Exclusive access to high-growth private market opportunities.",
        image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2670&auto=format&fit=crop",
        subFeatures: [
            { title: "Direct Investment", icon: FaBriefcase, desc: "Proprietary deal flow in emerging sectors and startups." },
            { title: "Co-Investments", icon: FaNetworkWired, desc: "Partnering with top-tier GPs on specific transactions." },
            { title: "Due Diligence", icon: FaSearchDollar, desc: "Rigorous vetting of management teams and business models." }
        ]
    },
    /*  {
         id: "04",
         category: "Advisory",
         title: "Risk Management",
         description: "Protecting capital against volatility and systemic threats.",
         image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
         subFeatures: [
             { title: "Hedging Strategies", icon: FaShieldAlt, desc: "Derivatives and instruments to offset market exposure." },
             { title: "Currency Risk", icon: FaGlobe, desc: "Managing FX volatility for cross-border operations." },
             { title: "Compliance", icon: FaBalanceScale, desc: "Navigating complex global regulatory frameworks." }
         ]
     },
     {
         id: "05",
         category: "Intelligence",
         title: "Market Insights",
         description: "Data-driven research to inform critical decisions.",
         image: "https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=2670&auto=format&fit=crop",
         subFeatures: [
             { title: "Macro Analysis", icon: FaGlobe, desc: "Global economic trend forecasting and impact assessment." },
             { title: "Sector Deep Dives", icon: FaLightbulb, desc: "Granular analysis of specific industry verticals." },
             { title: "Trend Spotting", icon: FaChartLine, desc: "Identifying early-stage shifts in consumer behavior." }
         ]
     },
     {
         id: "06",
         category: "Innovation",
         title: "Digital Assets",
         description: "Secure entry into the digital economy frontier.",
         image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2574&auto=format&fit=crop",
         subFeatures: [
             { title: "Crypto Portfolios", icon: FaCoins, desc: "Diversified exposure to blue-chip cryptocurrencies." },
             { title: "Blockchain Tech", icon: FaNetworkWired, desc: "Strategic infrastructure investments in Web3." },
             { title: "Custody Solutions", icon: FaLock, desc: "Institutional-grade security for digital holdings." }
         ]
     }, */
];

export default function ServicesGrid() {
    const container = useRef<HTMLDivElement>(null);
    const cards = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            cards.current.forEach((card, index) => {
                if (card && index < cards.current.length - 1) {
                    gsap.to(card, {
                        scale: 0.95, // Subtle scale
                        scrollTrigger: {
                            trigger: card,
                            start: "top top",
                            end: "bottom top",
                            scrub: true,
                        }
                    });
                }
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative" id="services">

            {/* Header / Intro pinned at top or just part of flow */}
            <div className="py-24 px-6 text-center">
                <span className="block text-gold-500 font-medium tracking-widest text-sm uppercase mb-3">
                    Our Expertise
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-blue-950 mb-4">
                    Comprehensive Solutions
                </h2>
                <p className="text-trust-blue-600 text-lg max-w-2xl mx-auto">
                    Bespoke strategies tailored to your unique financial ambitions.
                </p>
            </div>

            <div className="pb-24">
                {services.map((service, i) => (
                    <div
                        key={i}
                        ref={(el) => { cards.current[i] = el; }}
                        className="rounded-sm nav-section h-screen w-[95%] mx-auto sticky top-0 flex items-center justify-center overflow-hidden bg-[#EAEAEA]"
                    >
                        <div className="w-full h-full max-w-[1920px] mx-auto relative flex flex-col lg:flex-row items-center">

                            {/* Left Content Area */}
                            <div className="w-full lg:w-[60%] h-full px-8 md:px-16 lg:px-24 flex flex-col justify-center relative z-10">

                                {/* Top Label */}
                                <div className="absolute top-12 left-8 md:left-24 text-trust-blue-400 font-medium tracking-widest uppercase text-sm">
                                    {service.id} {service.category}
                                </div>

                                <h3 className="font-serif text-5xl md:text-7xl font-bold text-trust-blue-950 mb-12 lg:mb-20">
                                    {service.title}
                                </h3>

                                {/* Sub-Features Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {service.subFeatures.map((feat, idx) => (
                                        <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                                            <feat.icon className="text-3xl text-trust-blue-950 mb-6" />
                                            <h4 className="font-serif text-xl font-bold text-trust-blue-950 mb-3">
                                                {feat.title}
                                            </h4>
                                            <p className="text-trust-blue-600 text-sm leading-relaxed">
                                                {feat.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Image Area (Trapezoid Clip) - Full Height & Flush Right */}
                            <div className="hidden lg:block w-[50%] h-full absolute right-0 top-0 overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${service.image})`,

                                    }}
                                >
                                    <div className="absolute inset-0 bg-trust-blue-950/10" />
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {/* View All Services CTA */}


            {/* View All Services CTA */}
            <div className="pb-24 flex justify-center relative z-10">
                <div className="text-center">
                    <p className="text-trust-blue-500 mb-6 text-sm uppercase tracking-widest">
                        Looking for more?
                    </p>
                    <Button href="/services" variant="gold" size="lg" className="min-w-[200px]">
                        Discover All Expertise
                    </Button>
                </div>
            </div>

            {/* Required Disclosures */}
            <div className="pb-16 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-blue-950 mb-12">
                        Required Disclosures
                    </h2>

                    <div className="hover:border-yellow-600 hover:border hover:scale-101 transition-all duration-300 bg-white p-8 md:p-12 rounded-md shadow-sm border-l-4 border-yellow-600">
                        <h3 className="font-bold text-xl text-trust-blue-950 mb-6">
                            Risk Disclosure
                        </h3>

                        <div className="space-y-4 text-trust-blue-700 leading-relaxed">
                            <p className="font-semibold text-trust-blue-900 uppercase text-md tracking-wide">
                                Commodity trading involves substantial risk of loss.
                            </p>

                            <p className="text-gray-800 text-sm">
                                The high degree of leverage that is often obtainable in commodity futures, options, and forex trading can work against you as well as for you. The use of leverage can lead to large losses as well as gains.
                            </p>

                            <p className="text-gray-800 text-sm">
                                In some cases, managed commodity accounts are subject to substantial charges for management and advisory fees. It may be necessary for those accounts that are subject to these charges to make substantial trading profits to avoid depletion or exhaustion of their assets.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5 hover:border-yellow-600 hover:border hover:scale-101 transition-all duration-300 bg-white p-8 md:p-12 rounded-md shadow-sm border-l-4 border-yellow-600">
                        <h3 className="font-bold text-xl text-trust-blue-950 mb-6">
                            Past Performance Disclosure
                        </h3>

                        <div className="space-y-4 text-trust-blue-700 leading-relaxed">
                            <p className="font-semibold text-trust-blue-900 uppercase text-md tracking-wide">
                                Past results are not necessarily indicative of future results.
                            </p>

                            <p className="text-gray-800 text-sm">
                                The result represented in any marketing materials are not indicative of future performance. Historical performance data should not be considered in context with the market conditions that existed during that period.
                            </p>

                            {/* <p className="text-gray-800 text-sm">
                                In some cases, managed commodity accounts are subject to substantial charges for management and advisory fees. It may be necessary for those accounts that are subject to these charges to make substantial trading profits to avoid depletion or exhaustion of their assets.
                            </p> */}
                        </div>
                    </div>


                    <div className="mt-5 hover:border-yellow-600 hover:border hover:scale-101 transition-all duration-300 bg-white p-8 md:p-12 rounded-md shadow-sm border-l-4 border-yellow-600">
                        <h3 className="font-bold text-xl text-trust-blue-950 mb-6">
                            Suitability Considerations
                        </h3>

                        <div className="space-y-4 text-trust-blue-700 leading-relaxed">
                            <p className="text-gray-800 text-sm">
                                You should carefully consider whether such trading is suitable for you in light of your financial condition. You should be aware that if you purchase a commodity option you may sustain a total loss of the premium and of any additional funds you deposit with your broker to establish or maintain your position.
                            </p>

                            <p className="text-gray-800 text-sm">
                                If you purchase or sell a commodity futures contract or sell a commodity option you may sustain a total loss of the initial margin funds or security deposit and any additional funds that you deposit with your broker to establish or maintain your position.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
