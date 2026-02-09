"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "01",
    title: "Discovery & Analysis",
    description:
      "We begin by conducting a deep-dive audit of your current financial ecosystem to identify opportunities and risks.",
  },
  {
    id: "02",
    title: "Strategic Formulation",
    description:
      "Our experts design a bespoke roadmap tailored to your specific organizational goals and market position.",
  },
  {
    id: "03",
    title: "Implementation",
    description:
      "We execute the strategy with precision, leveraging our global network and proprietary tools.",
  },
  {
    id: "04",
    title: "Ongoing Optimization",
    description:
      "Continuous monitoring and adjustment ensure your portfolio remains aligned with evolving market dynamics.",
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate line
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        },
      );

      // Animate steps
      const stepElements = gsap.utils.toArray<HTMLElement>(".process-step");
      stepElements.forEach((step) => {
        gsap.from(step, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="block text-trust-blue-500 font-medium tracking-widest text-sm uppercase mb-3">
            Our Process
          </span>
          <h2 className=" font-display  text-4xl md:text-5xl font-bold text-trust-blue-950">
            A Blueprint for Success
          </h2>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Line Container */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 transform -translate-x-1/2">
            <div ref={lineRef} className="w-full bg-gold-400" />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  "process-step relative flex flex-col md:flex-row items-center gap-8 md:gap-16",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                )}
              >
                {/* Number Bubble (Center) */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-gold-400 z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-trust-blue-900 rounded-full" />
                </div>

                {/* Content */}
                <div
                  className={cn(
                    "w-full md:w-1/2 pl-12 md:pl-0",
                    index % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:text-left md:pl-12",
                  )}
                >
                  <div className="text-5xl  font-display  text-trust-blue-100 font-bold mb-2 absolute -top-8 left-12 md:static md:inline-block md:-mb-10 md:opacity-20 select-none">
                    {step.id}
                  </div>
                  <h3 className=" font-display  text-2xl font-bold text-trust-blue-950 mb-3 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-trust-blue-600 leading-relaxed text-sm relative z-10">
                    {step.description}
                  </p>
                </div>

                {/* Empty Side for Layout Balance */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
