"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
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
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-neutral-100"
            : "bg-white/80 backdrop-blur-md border-b border-neutral-100"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="group">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-lg md:text-xl font-bold text-neutral-900"
              >
                Thibaut Gallien<span className="text-emerald-600">.</span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.div key={item.href} whileHover={{ y: -1 }}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      pathname === item.href
                        ? "text-emerald-600"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:block"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
                >
                  <span className="hidden lg:inline">Travailler avec moi</span>
                  <span className="lg:hidden">Travailler ensemble</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </Link>
              </motion.div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 hover:border-neutral-300 transition-colors duration-300"
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-neutral-900" />
                ) : (
                  <Menu className="w-5 h-5 text-neutral-900" />
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
              className="md:hidden bg-white border-t border-neutral-100"
            >
              <div className="max-w-6xl mx-auto px-6 py-6">
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
                            ? "text-emerald-600"
                            : "text-neutral-600 hover:text-neutral-900"
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
                    className="pt-4 border-t border-neutral-100"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-neutral-900 text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors"
                    >
                      <span className="truncate">Travailler avec moi</span>
                      <ArrowRight className="w-4 h-4 flex-shrink-0" />
                    </Link>
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
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-neutral-900 text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors shadow-lg"
            >
              <span className="truncate">Travailler avec moi</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
