"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function FeaturesSection() {
  const features = ["Feature", "Feature", "Feature", "Feature", "Feature"];

  const missingFeatures = [
    "Missing Feature",
    "Missing Feature",
    "Missing Feature",
    "Missing Feature",
    "Missing Feature",
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-[#FFD400] font-bold text-sm tracking-wider uppercase">
              ⚡ FONCTIONNALITÉS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-8">
            Features Section
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* With Us Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] text-white px-6 py-3 rounded-t-lg">
                <h3 className="text-lg font-bold font-space-grotesk">
                  With Us
                </h3>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-b-lg p-6">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* With Them Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800 border border-gray-700 text-gray-300 px-6 py-3 rounded-t-lg">
                <h3 className="text-lg font-bold font-space-grotesk">
                  With Them
                </h3>
              </div>
              <div className="bg-gray-900/30 border border-gray-800 rounded-b-lg p-6">
                <ul className="space-y-4">
                  {missingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
