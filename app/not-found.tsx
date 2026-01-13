"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Home, Search } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Icon animé */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
            <AlertTriangle className="w-12 h-12 text-red-600" />
          </div>
        </motion.div>

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-neutral-900 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Cette page a disparu
          </h2>
        </motion.div>

        {/* Message avec le ton "Fou Furieux" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-xl text-neutral-600 mb-4">
            Probablement une <strong className="text-red-600">fuite dans ton funnel de navigation</strong>.
          </p>
          <p className="text-lg text-neutral-500">
            Tu cherches quelque chose de précis ? Je peux t'aider à le trouver.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-full text-lg hover:bg-emerald-500 transition-colors shadow-lg"
          >
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Link>

          <Link
            href="/blog-new"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-bold rounded-full text-lg hover:bg-neutral-900 hover:text-white transition-colors"
          >
            <Search className="w-5 h-5" />
            Voir les articles
          </Link>
        </motion.div>

        {/* Liens rapides */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-neutral-200"
        >
          <p className="text-sm text-neutral-500 mb-4">Liens rapides :</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/services-new" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Services
            </Link>
            <Link href="/mini-audit-gratuit" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Mini-Audit Gratuit
            </Link>
            <Link href="/blog-new" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Contact
            </Link>
          </div>
        </motion.div>

        {/* CTA bonus */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 p-6 bg-emerald-50 border-2 border-emerald-200 rounded-2xl"
        >
          <p className="text-neutral-900 font-semibold mb-3">
            💡 Pendant que t'es là...
          </p>
          <p className="text-neutral-600 mb-4">
            Ton funnel perd de l'argent. Je peux te montrer où. Gratuitement.
          </p>
          <Link
            href="/mini-audit-gratuit"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold"
          >
            Postuler pour un Mini-Audit Flash
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
