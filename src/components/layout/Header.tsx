"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  /* { name: "Why us ", href: "/why-us" }, */
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  /* { name: "Practice Areas", href: "/practice-areas" }, */
  /* { name: "Case Studies", href: "/case-studies" }, */
  { name: "Risk Disclosures", href: "/risk-disclosures" },
  { name: "Contact", href: "/contact" },
  /* { name: "Blog", href: "/blog" }, */
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const pathname = usePathname();

  // Check if we are on a "light" page where we need contrast immediately (Privacy/Terms)
  const isLightPage = pathname === "/privacy" || pathname === "/terms";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ",
          isScrolled || isLightPage ? "shadow-md py-4 bg-trust-blue-900" : "py-6",
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="z-50 relative"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <span
              className={cn(
                " font-display  text-2xl tracking-[0.2em] uppercase transition-all duration-300",
                "bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 bg-clip-text text-transparent",
                "font-semibold drop-shadow-sm hover:drop-shadow-md",
              )}
            >
              Valora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold-400 uppercase tracking-wider",
                  "text-white/90", // Always white/90
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="gold" // Always gold
              size="sm"
              href="/contact"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 relative focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-8 h-8 text-trust-blue-900" />
            ) : (
              <HiMenuAlt4
                className={cn(
                  "w-8 h-8 transition-colors",
                  "text-white", // Always white
                )}
              />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center md:hidden"
          >
            <nav className="flex flex-col space-y-6 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl  font-display  font-medium text-trust-blue-900 hover:text-gold-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8"
              >
                <Button size="lg" href="/contact">
                  Schedule Consultation
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
