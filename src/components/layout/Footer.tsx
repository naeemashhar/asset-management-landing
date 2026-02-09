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
    <footer className="bg-trust-blue-950 text-white  pb-12">
      <div className="container mx-auto px-6">
        {/* Top Section: Risk Disclosure */}
        <div className="mt-10 mb-15 p-8 bg-trust-blue-900/30 border border-trust-blue-800 rounded-lg">
          <h5 className="text-gold-400 font-bold text-center uppercase tracking-widest text-md mb-4">
            Risk Disclosure
          </h5>
          <p className="text-trust-blue-300 text-sm leading-relaxed text-center uppercase">
            PAST PERFORMANCE IS NOT NECESSARILY INDICATIVE OF FUTURE RESULTS.
            THE RISK OF LOSS IN TRADING COMMODITY FUTURES, OPTIONS, AND FOREIGN
            EXCHANGE (&quot;FOREX&quot;) IS SUBSTANTIAL.
            <span className="normal-case block mt-2">
              You should carefully consider whether such trading is suitable for
              you in light of your financial condition. The high degree of
              leverage that is often obtainable in commodity futures, options,
              and forex trading can work against you as well as for you. The use
              of leverage can lead to large losses as well as gains.
            </span>
            <p className=" text-trust-blue-500 text-sm mb-4 mt-4">
              Valora Asset Management. All rights reserved. ©{" "}
              {new Date().getFullYear()}
            </p>
            <p className="text-trust-blue-500 text-sm mb-4">
              This website complies with NFA Compliance Rule 2-29 & 2-36.
            </p>
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-trust-blue-900 mb-16" />

        {/* Bottom Section: <Grid></Grid> Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Col 1: Award Badge (Span 3) */}
          <div className="lg:col-span-3 flex flex-col justify-end">
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

          {/* Col 2: Services (Span 2) */}
          <div className="lg:col-span-2">
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
            <h4 className="font-bold text-gold-400 mb-6 text-sm uppercase tracking-wide">
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
                  href="/team"
                  className="text-trust-blue-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Our People
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-trust-blue-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-trust-blue-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Awards & Recognitions
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

          {/* Col 4: Thinking (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gold-400 mb-6 text-sm uppercase tracking-wide">
              Thinking
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/blog"
                  className="text-trust-blue-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-trust-blue-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-trust-blue-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Subscribe
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-trust-blue-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Media Mentions
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
                className="mt-8 group flex items-center gap-2 text-gold-400 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-widest"
              >
                <span>Back to Top</span>
                <span className="p-2 border border-gold-400/30 rounded-full group-hover:bg-gold-400 group-hover:text-trust-blue-950 transition-all duration-300">
                  <FaArrowUp />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
