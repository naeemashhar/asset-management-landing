"use client";

import PageHeader from "@/components/layout/PageHeader";
import CTABanner from "@/components/sections/home/CTABanner";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "Navigating Inflation in 2024",
    excerpt:
      "With central banks adjusting policies, we analyze the impact on global asset classes and strategies for preservation.",
    date: "Feb 06, 2024",
    author: "Alexander von Steinberg",
    category: "Market Outlook",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Rise of Private Credit",
    excerpt:
      "As traditional lending tightens, private credit is emerging as a vital source of yield for sophisticated portfolios.",
    date: "Jan 28, 2024",
    author: "Sarah Chen-Williams",
    category: "Alternative Investments",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "ESG: Moving Beyond Compliance",
    excerpt:
      "How sustainable investing is shifting from a regulatory box-ticking exercise to a core driver of long-term alpha.",
    date: "Jan 15, 2024",
    author: "James Sterling",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Estate Planning for Digital Assets",
    excerpt:
      "The legal and practical complexities of passing on cryptocurrency and digital property to the next generation.",
    date: "Dec 12, 2023",
    author: "Elena Rodriguez",
    category: "Wealth Planning",
    image:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Art as an Asset Class",
    excerpt:
      "Understanding the correlation, liquidity, and valuation dynamics of fine art in a diversified portfolio.",
    date: "Nov 30, 2023",
    author: "Victoria Al-Fayed",
    category: "Lifestyle & Passion",
    image:
      "https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Tech Valuations: Bubble or Reset?",
    excerpt:
      "A deep dive into the fundamentals driving the current valuation metrics of high-growth technology firms.",
    date: "Nov 15, 2023",
    author: "Alexander von Steinberg",
    category: "Market Analysis",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Latest Insights"
        subtitle="Thought Leadership"
        backgroundImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto w-[90%] h-[90%] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer h-full"
              >
                <div className="bg-white border border-gray-200 p-8 h-full relative hover:shadow-xl transition-all duration-300 flex flex-col items-start">
                  {/* Top Green Accent */}
                  <div className="absolute -top-3 left-8 w-4 h-8 bg-[#8FD299] transform -skew-x-[20deg] shadow-sm" />

                  {/* Category */}
                  <span className="text-xs font-bold uppercase tracking-wide text-trust-blue-950 mb-6 block mt-2">
                    {post.category}
                  </span>

                  {/* Image Area */}
                  <div className={`w-full aspect-[4/3] mb-8 overflow-hidden relative ${index % 3 === 0 ? "bg-red-50" : index % 3 === 1 ? "bg-blue-50" : "bg-amber-50"
                    }`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700 hover:mix-blend-normal hover:opacity-100"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-bold text-trust-blue-950 mb-4 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 w-full flex items-center justify-between border-t border-gray-100">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-gold-800 uppercase tracking-widest">{post.date}</span>
                      <span className="text-xs text-gray-400">{post.author}</span>
                    </div>
                    <FaArrowRight className="text-gray-300 w-3 h-3 group-hover:text-gold-800 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
