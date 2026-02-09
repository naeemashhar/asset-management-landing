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
        <div className="mt-10 mb-10 relative max-w-5xl mx-auto">
          {/* subtle glow behind */}
          <div className="absolute inset-0 bg-gold-500/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative bg-white border border-slate-200 p-10 md:p-14 rounded-2xl overflow-hidden shadow-2xl">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-gold-600/20 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-gold-600/20 rounded-br-2xl" />

            <div className="text-center relative z-10">
              <div className="inline-flex items-center gap-3 mb-8 px-4 py-1 rounded-full bg-gold-50 border border-gold-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                <h5 className="font-display text-gold-600 font-bold uppercase tracking-[0.2em] text-xs">
                  Risk Disclosure
                </h5>
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-trust-blue-950 mb-6 leading-tight">
                Trading involves substantial <span className="text-gold-600 italic">risk of loss.</span>
              </h3>

              <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-auto mb-8" />

              <p className="text-slate-600 text-sm leading-loose font-light mb-8 max-w-2xl mx-auto">
                <span className="text-trust-blue-950 font-medium">Past performance is not necessarily indicative of future results.</span> The risk of loss in trading commodity futures, options, and foreign exchange (&quot;forex&quot;) is substantial. You should carefully consider whether such trading is suitable for you in light of your financial condition.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xs text-slate-500 font-medium tracking-wide uppercase">
                <p>© {new Date().getFullYear()} Valora Asset Management</p>
                <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full" />
                <p>NFA Compliance Rule 2-29 & 2-36</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-trust-blue-900/50 mb-16" />

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
