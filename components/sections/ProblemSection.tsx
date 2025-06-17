"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block mb-4">
              <span className="text-[#FFD400] font-bold text-sm tracking-wider uppercase">
                ⚠️ PROBLÈME
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-12 text-white">
              Problem Section
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative blue line at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#3A86FF] to-[#0EA5E9]"></div>
    </section>
  );
}
