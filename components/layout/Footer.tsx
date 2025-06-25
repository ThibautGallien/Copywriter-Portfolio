"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "Services", href: "/services" },
    { label: "À propos", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [{ label: "Mentions légales", href: "/legal" }],
};

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "https://calendly.com/hello-thibautgallien/30min",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "/https://www.linkedin.com/in/thibaut-gallien/",
  },
  { icon: Twitter, label: "Twitter", href: "//https://x.com/Thibaut_gallien" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Link href="/" className="flex items-center gap-2 mb-4 group">
                <div>
                  <span className="text-xl font-bold font-space-grotesk">
                    Thibaut Gallien
                  </span>
                  <div className="text-xs text-gray-400 -mt-1">Copywriter</div>
                </div>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Copywriter freelance spécialisé dans l'email marketing et les
                systèmes de conversion. Je transforme vos listes email en
                machines de vente automatisées.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#9B5DE5] transition-colors duration-300 group"
                  >
                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold font-space-grotesk mb-4 text-[#FFD400]">
                Entreprise
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-[#9B5DE5] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="font-semibold font-space-grotesk mb-4 text-[#FFD400]">
                Newsletter Copywriting
              </h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                Recevez chaque semaine, votre dose de conseils et techniques de
                copywriting directement par email.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-[#9B5DE5] focus:outline-none text-white placeholder-gray-400 text-sm"
                />
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
                >
                  S'abonner
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Pas de spam. Désinscription en 1 clic.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <span>
                © 2025 Thibaut Gallien Copywriter. Créé avec beaucoup d'eau, de
                la musique et trop peu de temps (et oui, je sais aussi coder).
              </span>
            </div>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-gray-400 hover:text-[#9B5DE5] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
