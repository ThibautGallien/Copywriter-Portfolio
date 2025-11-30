"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "Services", href: "/gratuit" },
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
    href: "mailto:hello@thibautgallien.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thibaut-gallien/",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://x.com/Thibaut_gallien",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Inscription réussie !", {
          description:
            "Tu recevras bientôt ta première dose de tips marketing 🎯",
        });
        setEmail("");
      } else {
        throw new Error(data.error || "Erreur lors de l'inscription");
      }
    } catch (error) {
      console.error("Erreur newsletter:", error);
      toast.error("Erreur lors de l'inscription", {
        description: "Réessaye ou contacte-moi directement.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <footer className="bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Link href="/" className="inline-block mb-4 group">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-xl font-bold text-neutral-900"
                >
                  Thibaut Gallien<span className="text-emerald-600">.</span>
                </motion.span>
              </Link>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                Je trouve où tu perds de l&apos;argent dans ton funnel et je le
                fixe. Diagnostic, implémentation, tracking. Pas de bullshit,
                juste des chiffres.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center hover:bg-emerald-50 transition-colors duration-300 group border border-neutral-200 hover:border-emerald-200"
                  >
                    <social.icon className="w-4 h-4 text-neutral-600 group-hover:text-emerald-600 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold font-sora mb-4 text-neutral-900">
                Navigation
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-emerald-600 transition-colors duration-300 inline-block"
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
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="font-semibold font-sora mb-4 text-neutral-900">
                Newsletter Marketing
              </h3>
              <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                Reçois mes meilleurs tips marketing chaque semaine. 1 email,
                tips actionnables, 0 spam.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ton@email.com"
                  required
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-emerald-500 focus:outline-none text-neutral-900 placeholder-neutral-400 text-sm transition-colors"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      Inscription...
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      S&apos;inscrire
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
              <p className="text-xs text-neutral-500 mt-2">
                Pas de spam. Désinscription en 1 clic.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-6 border-t border-neutral-100"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-neutral-500">
              © 2025 Thibaut Gallien. Tous droits réservés.
            </div>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-neutral-500 hover:text-emerald-600 transition-colors duration-300"
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
