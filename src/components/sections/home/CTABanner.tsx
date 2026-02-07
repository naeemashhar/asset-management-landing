"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FaArrowRight } from "react-icons/fa";

export default function CTABanner() {
  return (
    <section className="mb-25 py-24 bg-gradient-to-br from-trust-blue-900 to-trust-blue-950 text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-trust-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className=" font-display  text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to secure your legacy?
          </h2>
          <p className="text-xl md:text-2xl text-trust-blue-100 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Partner with Valora for precision-engineered financial strategies
            that stand the test of time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="gold" className="min-w-[200px]">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] border-white text-white hover:bg-white hover:text-trust-blue-950"
            >
              View Practice Areas <FaArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
