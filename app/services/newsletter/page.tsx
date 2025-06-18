"use client";

import { motion } from "framer-motion";

export default function NewsletterPage() {
  return (
    <div className="relative pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-64 w-96 h-96 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-32 -right-64 w-96 h-96 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-[#FFD400] font-bold text-sm tracking-wider uppercase">
              📧 NEWSLETTER
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            Des newsletters qui
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              captivent et convertissent
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transformez vos abonnés en fans avec des newsletters qu'ils
            attendent comme leur série préférée.
          </p>
        </motion.div>

        {/* Content sections à personnaliser */}
        <div className="text-center py-20">
          <p className="text-gray-400">
            Structure de la page à définir ensemble...
          </p>
        </div>
      </div>
    </div>
  );
}
