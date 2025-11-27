"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0D0D0D]/95 backdrop-blur-md border-b border-gray-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div>
                <span className="text-lg md:text-xl font-bold font-space-grotesk">
                  Thibaut Gallien
                </span>
                <div className="text-xs text-gray-400 -mt-1">
                  Optimiseur de funnels
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 relative group ${
                    pathname === item.href
                      ? "text-[#9B5DE5]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] transition-all duration-300 group-hover:w-full ${
                      pathname === item.href ? "w-full" : ""
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button
                asChild
                size="sm"
                className="hidden sm:flex bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
              >
                <Link href="https://www.thibautgallien.com/contact">
                  <span className="hidden lg:inline">Travailler avec moi</span>
                  <span className="lg:hidden">Travailler ensemble</span>
                  <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
                </Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 hover:border-[#9B5DE5] transition-colors duration-300"
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#0D0D0D] border-t border-gray-800"
            >
              <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 text-lg font-medium transition-colors duration-300 ${
                          pathname === item.href
                            ? "text-[#9B5DE5]"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                    className="pt-4 border-t border-gray-800"
                  >
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-opacity transition-opacity"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/contact">
                        <span className="truncate">Travailler avec moi</span>
                        <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
                      </Link>
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile CTA Button - Always at bottom, hidden when menu open */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden fixed bottom-4 left-4 right-4 z-40"
          >
            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity shadow-2xl text-sm px-4 py-3"
            >
              <Link href="https://calendly.com/hello-thibautgallien/30min">
                <span className="truncate">Travailler avec moi</span>
                <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
