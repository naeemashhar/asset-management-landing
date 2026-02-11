"use client";

import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  FaExclamationTriangle,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden shadow-xl">
            {/* Left Panel: Get In Touch (Dark Blue) */}
            <div className="bg-trust-blue-950 p-12 lg:p-16 text-white space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className=" font-display  text-4xl md:text-5xl font-bold text-gold-400 mb-8">
                  Get In Touch
                </h1>
              </motion.div>

              <div className="space-y-8">
                {/* Compliance Team */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3">
                    Compliance Team
                  </h3>
                  <div className="space-y-1 text-trust-blue-100">
                    <p className="font-semibold text-white">Jadi Abboud</p>
                    <p>jadi@valoraam.com</p>
                    <p>(714) 743-9987</p>
                  </div>
                </motion.div>

                {/* Office Hours */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3">
                    Office Hours
                  </h3>
                  <div className="space-y-1 text-trust-blue-100">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM PST</p>
                    <p>24/7 Market Monitoring</p>
                  </div>
                </motion.div>

                {/* NFA Resources */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3">
                    NFA Resources
                  </h3>
                  <div className="space-y-1 text-trust-blue-100">
                    <p>www.nfa.futures.org</p>
                    <p>(312) 781-1410 or (800) 621-3570</p>
                    <p>information@nfa.futures.org</p>
                  </div>
                </motion.div>

                {/* Regulatory Information */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3">
                    Regulatory Information
                  </h3>
                  <div className="space-y-2 text-trust-blue-200 text-sm leading-relaxed">
                    <p>
                      Valora Asset Management is registered with the NFA as a
                      Commodity Trading Advisor (CTA).
                    </p>
                    <p>
                      All promotional materials comply with NFA Compliance Rules
                      2-29 and 2-36.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Panel: Contact Form (White) */}
            <div className="bg-gray-50 p-12 lg:p-16">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-trust-blue-900">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-300 px-4 py-3 outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all rounded-sm text-trust-blue-950 placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-trust-blue-900">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white border border-gray-300 px-4 py-3 outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all rounded-sm text-trust-blue-950 placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-trust-blue-900">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-white border border-gray-300 px-4 py-3 outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all rounded-sm text-trust-blue-900 placeholder:text-gray-400"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-trust-blue-900">
                    Area of Interest *
                  </label>
                  <select className="w-full bg-white border border-gray-300 px-4 py-3 outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all rounded-sm text-trust-blue-950">
                    <option>Managed Accounts</option>
                    <option>Consulting</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-trust-blue-900">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white border border-gray-300 px-4 py-3 outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all rounded-sm text-trust-blue-950 placeholder:text-gray-400 resize-none"
                    placeholder="Tell us about your trading goals and how we can help..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="gold"
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Important Compliance Information & Risk Disclosures - Premium Redesign */}
          <div className="w-full max-w-6xl mx-auto mt-24 mb-16 px-6">
            <div className="text-center mb-16">
              <div className="flex items-center gap-4 justify-center mb-4">
                <div className="h-[1px] w-12 bg-gold-400/50" />
               {/*  <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">
                  Regulatory Framework
                </span> */}
                <div className="h-[1px] w-12 bg-gold-400/50" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-trust-blue-950 mb-6">
                Important Compliance Information
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Transparency and regulatory compliance are at the core of our operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Regulatory Information Card */}
              <div className="group bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-gold-400/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-trust-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

                <div className="relative z-10 flex items-start gap-5">
                  <div className="p-3 bg-trust-blue-50 rounded-lg group-hover:bg-trust-blue-900 group-hover:text-gold-400 transition-colors duration-300">
                    <div className="font-display font-bold text-xl">01</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl text-trust-blue-950 mb-3 group-hover:text-trust-blue-800 transition-colors">
                      Regulatory Information
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      Valora Asset Management is registered with the NFA as a Commodity Trading Advisor (CTA). All promotional materials comply with NFA Compliance Rules 2-29 and 2-36.
                    </p>
                    {/* <div className="flex items-center gap-2 text-xs font-semibold text-trust-blue-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      NFA ID: 0560642
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Record Retention Card */}
              <div className="group bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-gold-400/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

                <div className="relative z-10 flex items-start gap-5">
                  <div className="p-3 bg-gold-50 rounded-lg group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                    <div className="font-display font-bold text-xl">02</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl text-trust-blue-950 mb-3 group-hover:text-trust-blue-800 transition-colors">
                      Record Retention
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      All promotional materials are reviewed and approved in writing by appropriate supervisory personnel before use. Copies of all materials are retained on file for 5 years (2 years readily accessible) as required by NFA regulations.
                    </p>
                   {/*  <div className="flex items-center gap-2 text-xs font-semibold text-gold-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-trust-blue-900" />
                      Strict Adherence
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Critical Risk Warning - Distinct & Authoritative */}
            <div className="relative overflow-hidden rounded-xl bg-[#0B1221] border border-trust-blue-800 shadow-2xl">
              {/* Decorative Background */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50" />
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-trust-blue-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col md:flex-row">
                {/* Warning Icon Section */}
                <div className="bg-[#162032] p-8 md:w-1/4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-trust-blue-800">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-4 animate-pulse-slow">
                    <FaExclamationTriangle className="text-red-500 text-xl" />
                  </div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm text-center">
                    Critical Risk Warning
                  </h3>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 md:w-3/4">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light mb-6">
                    IMPORTANT: The risk of loss in trading commodity interests can be substantial. You should therefore carefully consider whether such trading is suitable for you in light of your financial condition. Past performance is not necessarily indicative of future results.
                  </p>
                  {/* <p className="text-gray-400 text-xs leading-relaxed italic border-l-2 border-gold-500/30 pl-4">
                    &quot;Past performance is not necessarily indicative of future results.&quot;
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      {/*  <section className="h-[400px] w-full bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.214454868263!2d8.66708767690186!3d50.11942851112444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0968962649ad%3A0xa177813a3754948a!2sOpernTurm!5e0!3m2!1sen!2sde!4v1707253456789!5m2!1sen!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-trust-blue-950/20 pointer-events-none mix-blend-multiply" />
            </section> */}
    </>
  );
}
