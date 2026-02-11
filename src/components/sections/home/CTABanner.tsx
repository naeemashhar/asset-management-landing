"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaArrowRight } from "react-icons/fa";

export default function CTABanner() {
  return (
    <section className="py-32 bg-trust-blue-950 relative overflow-hidden mb-5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-trust-blue-900/40 via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gold-900/10 via-transparent to-transparent" />

      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-trust-blue-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern overlay (optional, subtle texture) */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-trust-blue-900/50 border border-trust-blue-800 text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Start Your Journey
            </span>

            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.2] tracking-tight">
              Ready to secure your <br className="hidden md:block" />
              <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 italic ">
                financial legacy?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-trust-blue-200 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Partner with Valora for precision-engineered strategies that stand the test of time.
              Let&apos;s build a future defined by growth, stability, and success.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gold-400 hover:bg-gold-400/80 text-trust-blue-950 border-none min-w-[220px] px-12 py-6 text-lg shadow-[0_0_20px_rgba(143,210,153,0.3)]  transition-all duration-300 transform hover:-translate-y-1"
                >
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="min-w-[220px] px-12 py-6 text-lg border-trust-blue-700 text-white hover:bg-trust-blue-900 hover:border-gold-400/50 hover:text-gold-400 transition-all duration-300"
                >
                  Explore Services <FaArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
