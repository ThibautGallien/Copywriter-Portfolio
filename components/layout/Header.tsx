"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Accueil" },
  {
    href: "/services",
    label: "Services",
    submenu: [
      { href: "/services/newsletter", label: "Newsletter" },
      { href: "/services/landing-pages", label: "Landing Pages" },
      { href: "/services/email-marketing", label: "Email Marketing" },
    ],
  },
  { href: "/about", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold font-space-grotesk">
                Thibaut
              </span>
              <div className="text-xs text-gray-400 -mt-1">Copywriter</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      onMouseEnter={() => setOpenSubmenu(item.label)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                      className={`text-sm font-medium transition-colors duration-300 relative flex items-center gap-1 ${
                        pathname.startsWith(item.href)
                          ? "text-[#9B5DE5]"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-300 ${
                          openSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] transition-all duration-300 group-hover:w-full ${
                          pathname.startsWith(item.href) ? "w-full" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {openSubmenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setOpenSubmenu(item.label)}
                          onMouseLeave={() => setOpenSubmenu(null)}
                          className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl overflow-hidden"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                                pathname === subItem.href
                                  ? "bg-[#9B5DE5]/20 text-[#9B5DE5]"
                                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
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
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              size="sm"
              className="hidden sm:flex bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
            >
              <Link href="/contact">
                Travailler avec moi
                <ArrowRight className="w-4 h-4 ml-2" />
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
            className="md:hidden bg-[#0D0D0D]/98 backdrop-blur-md border-t border-gray-800/50"
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
                    {item.submenu ? (
                      <div>
                        <div
                          className={`flex items-center justify-between py-2 text-lg font-medium transition-colors duration-300 ${
                            pathname.startsWith(item.href)
                              ? "text-[#9B5DE5]"
                              : "text-gray-300"
                          }`}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className={`block py-2 text-sm font-medium transition-colors duration-300 ${
                                pathname === subItem.href
                                  ? "text-[#9B5DE5]"
                                  : "text-gray-400 hover:text-white"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
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
                    )}
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
                    className="w-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/contact">
                      Travailler avec moi
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating CTA for mobile */}
      <AnimatePresence>
        {scrolled && !isOpen && (
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
              className="w-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity shadow-2xl"
            >
              <Link href="/contact">
                Travailler avec moi
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
