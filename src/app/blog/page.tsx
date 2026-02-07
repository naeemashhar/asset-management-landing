"use client";

import PageHeader from "@/components/layout/PageHeader";
import CTABanner from "@/components/sections/home/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";

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
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group flex flex-col h-full bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-white/90 text-trust-blue-950 text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                    {post.category}
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-trust-blue-950/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-trust-blue-500 font-medium uppercase tracking-wider mb-4">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt /> {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaUser /> {post.author}
                    </span>
                  </div>

                  <h3 className=" font-display  text-2xl font-bold text-trust-blue-950 mb-4 group-hover:text-gold-500 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-trust-blue-700 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-trust-blue-950 font-medium text-sm group-hover:text-gold-500 transition-colors">
                    Read Article <FaArrowRight className="ml-2" />
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
