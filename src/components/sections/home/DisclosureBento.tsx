import { Button } from "@/components/ui/Button";
import { FaFileContract, FaCheck, FaArrowRight } from "react-icons/fa";

function DisclosureBento() {
  return (
    <div className="py-32 px-6 relative z-10 bg-[#F4F1EE]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <div className="flex items-center gap-6 mb-8 justify-center md:justify-start">
            <div className="h-[2px] w-16 bg-[#374B47]" />
            <span className="text-[#374B47] font-display text-sm font-bold tracking-[0.5em] uppercase">
              Compliance Framework
            </span>
          </div>
          <h2 className="font-display font-semibold text-6xl md:text-8xl text-[#121826] tracking-tighter leading-[0.9]">
            Required <br className="hidden md:block" />
            <span className="italic text-[#374b47] ">Disclosures</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* 01: Risk Disclosure */}
          <div className="md:col-span-8 group relative bg-white border border-stone-200 p-10 md:p-16 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-700">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-5">
                <span className="text-stone-100 font-display text-[8rem] absolute -top-18 -right-10 select-none group-hover:text-stone-200 transition-colors leading-none">
                  01
                </span>
              </div>
              <h3 className="font-display text-4xl md:text-5xl text-[#121826] mb-8">
                Risk Disclosure
              </h3>
              <p className="font-display font-bold text-[#374B47] uppercase text-lg md:text-xl tracking-[0.1em] leading-tight mb-8 border-l-4 border-[#374B47] pl-6">
                Commodity trading involves substantial risk of loss.
              </p>
              <div className="space-y-6 text-stone-600 text-lg md:text-xl leading-relaxed font-light">
                <p>
                  The high degree of leverage that is often obtainable in
                  commodity futures, options, and forex trading can work against
                  you as well as for you. The use of leverage can lead to large
                  losses as well as gains. In some cases, managed commodity
                  accounts are subject to substantial charges for management and
                  advisory fees. It may be necessary for those accounts that are
                  subject to these charges to make substantial trading profits
                  to avoid depletion or exhaustion of their assets.
                </p>
              </div>
            </div>
          </div>

          {/* 04: Limited Experience (High Contrast Warning) */}
          <div className="md:col-span-4 group relative bg-[#D1D2BC] p-10 flex flex-col justify-center overflow-hidden shadow-xl">
            <span className="text-white/20 font-display text-8xl absolute top-1 right-6 select-none">
              02
            </span>
            <h3 className="font-display text-3xl text-white mb-6">
              Limited Experience
            </h3>
            <p className="text-[#121826] font-display font-bold uppercase text-xs tracking-widest mb-6 bg-white/20 w-fit px-2 py-1">
              Notice of track record
            </p>
            <p className="text-[#121826] text-lg leading-relaxed font-light">
              Valora Asset Management has had little or no experience in trading
              actual accounts for customers.
            </p>
            <p className="text-[#121826]/80 text-md mt-4 font-light">
              Because there are no actual trading result to compare to any
              hypothetical result, Customers should be particularly wary of
              placing undue reliance on hypothetical performance results.
            </p>
          </div>

          {/* 02: Past Performance */}
          <div className="md:col-span-5 group relative bg-[#374B47] p-10 md:p-16 overflow-hidden shadow-xl">
            <div className="relative z-10">
              <span className="text-white/10 font-display text-9xl absolute -top-16 -right-10 select-none">
                03
              </span>
              <h3 className="font-display text-4xl text-white mb-8">
                Past Performance
              </h3>
              <p className="text-stone-300 text-lg md:text-xl leading-relaxed font-light mb-8">
                Past results are not necessarily indicative of future results.
                Historical performance data should be considered in context with
                the market conditions that existed during that period. The
                results represented in any marketing materials are not
                indicative of future performance.
              </p>
              <p className="text-[#D1D2BC] font-display text-xs uppercase tracking-[0.3em]">
                Compliance Rule 2-29 & 2-36
              </p>
            </div>
          </div>

          {/* 03: Suitability Considerations */}
          <div className="md:col-span-7 group relative bg-white border border-stone-200 p-10 md:p-16 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
            <span className="text-stone-100 font-display text-9xl absolute -top-4 right-4 select-none">
              04
            </span>
            <h3 className="font-display text-4xl text-[#121826] mb-8">
              Suitability
            </h3>
            <div className="space-y-6 text-stone-500 text-lg leading-relaxed font-light">
              <p>
                You should carefully consider whether such trading is suitable
                for you in light of your financial condition. You should be
                aware that if you purchase a commodity option you may sustain a
                total loss of the premium and of any additional funds you
                deposit with your broker to establish or maintain your position.
              </p>
              <p>
                If you purchase or sell a commodity futures contract or sell a
                commodity option you may sustain a total loss of the initial
                margin funds or security deposit and any additional funds that
                you deposit with your broker to establish or maintain your
                position.
              </p>
            </div>
          </div>

          {/* 05: Before You Invest / Documentation */}
          <div className="md:col-span-12 group relative bg-trust-blue-950 border border-trust-blue-800 p-8 md:p-16 overflow-hidden shadow-2xl rounded-2xl">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-trust-blue-900/40 rounded-full  -mr-40 -mt-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-400/5 rounded-full  -ml-20 -mb-20 pointer-events-none" />

            {/* Watermark Icon */}
            <FaFileContract className="absolute -right-10 -bottom-10 text-[300px] text-white/5 rotate-12 pointer-events-none group-hover:rotate-[15deg] group-hover:scale-110 transition-transform duration-700 ease-in-out" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side: Heading & Context */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                    <span className="text-gold-400 text-xs font-bold uppercase tracking-widest">
                      Compliance & Safety
                    </span>
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl text-white leading-tight">
                    Before You <br />
                    <span className="text-gold-400 italic">Invest</span>
                  </h3>
                </div>

                <p className="text-trust-blue-200 text-lg leading-relaxed font-light max-w-lg">
                  Transparency is the foundation of our partnership. CFTC
                  regulations requirement ensures you are fully informed before
                  entering any agreement.
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-trust-blue-800 flex items-center justify-center flex-shrink-0 border border-trust-blue-700">
                      <FaCheck className="text-gold-400 w-2.5 h-2.5" />
                    </div>
                    <p className="text-sm text-trust-blue-300">
                      Detailed Risk Disclosures
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-trust-blue-800 flex items-center justify-center flex-shrink-0 border border-trust-blue-700">
                      <FaCheck className="text-gold-400 w-2.5 h-2.5" />
                    </div>
                    <p className="text-sm text-trust-blue-300">
                      Fee Structure Transparency
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Action Card */}
              <div className="lg:pl-10">
                <div className="bg-[#8FD299]/20 border border-white/10 p-8 rounded-xl relative overflow-hidden group/card hover:bg-white/10 transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gold-400" />

                  <h4 className="text-white font-display text-xl font-bold mb-2">
                    Download Disclosure Document
                  </h4>
                  <p className="text-trust-blue-200 text-sm mb-6">
                    We provided this comprehensive document at{" "}
                    <span className="text-white font-medium">no cost</span> to
                    all prospective clients.
                  </p>

                  <Button
                    variant="outline"
                    className="w-full border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-trust-blue-950 group-hover/card:shadow-[0_0_20px_rgba(250,204,21,0.2)]"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Download Document <FaArrowRight className="w-4 h-4" />
                    </span>
                  </Button>

                  <p className="text-trust-blue-500 text-[10px] uppercase tracking-widest leading-relaxed mt-6 text-center border-t border-white/5 pt-4">
                    CFTC Compliance Rule 4.31
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisclosureBento;