import Link from "next/link";
import {
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaAward // Using Award icon for the badge
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-trust-blue-950 text-white pt-24 pb-12">
            <div className="container mx-auto px-6">

                {/* Top Section: Brand & Vision */}
                <div className="mb-20">
                    <div className="uppercase tracking-widest text-sm font-bold text-trust-blue-400 mb-8">
                        ApexQuants
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                        Building wealth, <span className="text-gold-400">creating futures.</span>
                    </h2>
                    <p className="text-trust-blue-200 text-lg max-w-2xl leading-relaxed">
                        Trusted financial consulting firm providing expert guidance and personalized solutions to help clients unlock their full financial potential.
                    </p>
                </div>

                {/* Divider */}
                <div className="border-t border-trust-blue-900 mb-16" />

                {/* Bottom Section: Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Col 1: Award Badge (Span 3) */}
                    <div className="lg:col-span-3 flex flex-col justify-end">
                        <div className="inline-flex items-center gap-4 text-gold-400 border border-gold-400/30 px-6 py-4 rounded-sm bg-trust-blue-900/20 max-w-max">
                            <FaAward className="text-4xl" />
                            <div>
                                <div className="font-serif font-bold text-lg leading-none mb-1">Expertise</div>
                                <div className="text-[10px] uppercase tracking-wider text-gold-400/80">Best Finance &<br />Insurance Reports</div>
                            </div>
                        </div>
                    </div>

                    {/* Col 2: Services (Span 2) */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">Services</h4>
                        <ul className="space-y-4">
                            {["Financial Planning", "Wealth Management", "Tax and Estate Planning", "Industries"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-trust-blue-300 hover:text-gold-400 transition-colors text-sm font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Inside (Span 2) */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-gold-400 mb-6 text-sm uppercase tracking-wide">Inside</h4>
                        <ul className="space-y-4">
                            {["About", "Our People", "Careers", "Awards & Recognitions", "Contacts"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-trust-blue-300 hover:text-white transition-colors text-sm font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Thinking (Span 2) */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-gold-400 mb-6 text-sm uppercase tracking-wide">Thinking</h4>
                        <ul className="space-y-4">
                            {["Insights", "Case Studies", "Subscribe", "Media Mentions"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-trust-blue-300 hover:text-white transition-colors text-sm font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 5: Legal & Social (Span 3) */}
                    <div className="lg:col-span-3 flex flex-col justify-between">
                        <div className="mb-8 lg:mb-0">
                            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">Legal</h4>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-trust-blue-300 hover:text-white transition-colors text-sm font-medium">Privacy</Link></li>
                                <li><Link href="#" className="text-trust-blue-300 hover:text-white transition-colors text-sm font-medium">Terms of Use</Link></li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-trust-blue-500 text-xs mb-4">
                                ApexQuants. All rights reserved. <br /> © {new Date().getFullYear()}
                            </p>
                            <div className="flex space-x-5">
                                <a href="#" className="text-trust-blue-400 hover:text-gold-400 transition-colors"><FaLinkedin size={18} /></a>
                                <a href="#" className="text-trust-blue-400 hover:text-gold-400 transition-colors"><FaTwitter size={18} /></a>
                                <a href="#" className="text-trust-blue-400 hover:text-gold-400 transition-colors"><FaInstagram size={18} /></a>
                                <a href="#" className="text-trust-blue-400 hover:text-gold-400 transition-colors"><FaYoutube size={18} /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
