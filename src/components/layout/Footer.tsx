"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaAward, // Using Award icon for the badge
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-trust-blue-950  text-white  pb-12">
      <div className=" container mx-auto px-6">
        {/* Top Section: Risk Disclosure */}
        <div className="mt-16 mb-20 relative max-w-7xl mx-auto">
          <div className="relative bg-trust-blue-900 border-l-4 border-gold-400 p-8 md:p-12 shadow-2xl rounded-r-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative z-10">
              {/* Header Side */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-gold-400" />
                    <span className="text-gold-400 font-bold uppercase tracking-[0.2em] text-xs">
                      Important Notice
                    </span>
                  </div>
                  <h3 className="font-display text-3xl text-white font-bold leading-tight">
                    Risk <br /> Disclosure
                  </h3>
                </div>

                <div className="hidden lg:block">
                  <p className="text-trust-blue-400 text-xs uppercase tracking-wider font-medium">
                    NFA Compliance <br />Rule 2-29 & 2-36
                  </p>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-8 space-y-6 text-trust-blue-200 text-sm leading-7 font-light">
                <p>
                  <span className="text-white font-medium border-b border-gold-400/30 pb-0.5">Trading commodity futures and options involves substantial risk of loss</span> and is not suitable for all investors. You should carefully consider whether trading is suitable for you in light of your circumstances, knowledge, and financial resources. You may lose all or more of your initial investment.
                </p>
                <p>
                  <span className="text-white font-medium">Past performance is not necessarily indicative of future results.</span> Opinions, market data, and recommendations are subject to change at any time. Valora Asset Management does not guarantee the accuracy of any market predictions.
                </p>

                <div className="lg:hidden pt-4 border-t border-trust-blue-800">
                  <p className="text-trust-blue-400 text-xs uppercase tracking-wider font-medium">
                    NFA Compliance Rule 2-29 & 2-36
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-trust-blue-900/50 mb-16" />

        {/* Bottom Section: <Grid></Grid> Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Col 1: Award Badge (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="inline-flex items-center gap-4 text-gold-400 border border-gold-400/30 px-6 py-4 rounded-sm bg-trust-blue-900/20 max-w-max">
              <FaAward className="text-4xl" />
              <div>
                <div className=" font-display  font-bold text-lg leading-none mb-1">
                  Expertise
                </div>
                <div className="text-[10px] uppercase tracking-wider text-gold-400/80">
                  Best Finance &<br />
                  Insurance Reports
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Services (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services"
                  className="text-trust-blue-300 hover:text-gold-400 transition-colors text-sm font-medium"
                >
                  Financial Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-trust-blue-300 hover:text-gold-400 transition-colors text-sm font-medium"
                >
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-trust-blue-300 hover:text-gold-400 transition-colors text-sm font-medium"
                >
                  Tax and Estate Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas"
                  className="text-trust-blue-300 hover:text-gold-400 transition-colors text-sm font-medium"
                >
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Inside (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">
              Inside
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-trust-blue-300 hover:text-white transition-colors text-sm font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-trust-blue-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Social (Span 3) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div className="mb-8 lg:mb-0">
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">
                Legal
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/privacy"
                    className="text-trust-blue-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-trust-blue-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    Terms of Use
                  </Link>
                </li>
              </ul>
              <div className="flex space-x-5 mt-5">
                <a
                  href="#"
                  className="text-trust-blue-400 hover:text-gold-400 transition-colors"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="#"
                  className="text-trust-blue-400 hover:text-gold-400 transition-colors"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="#"
                  className="text-trust-blue-400 hover:text-gold-400 transition-colors"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="#"
                  className="text-trust-blue-400 hover:text-gold-400 transition-colors"
                >
                  <FaYoutube size={18} />
                </a>
              </div>

              {/* Back to Top Button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer mt-8 group flex items-center gap-2 text-gold-400 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-widest"
              >
                <span>Back to Top</span>
                <span className="p-2 border border-gold-400/30 rounded-full group-hover:bg-gold-400 group-hover:text-trust-blue-950 transition-all duration-300 animate-bounce">
                  <FaArrowUp className="group-hover:animate-none " />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
