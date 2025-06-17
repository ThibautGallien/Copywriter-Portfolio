"use client";

import { motion } from "framer-motion";

export default function SolutionSection() {
  return (
    <section className="py-24 relative bg-gray-900/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Main geometric composition similar to hero but different arrangement */}
              <div className="relative w-full max-w-md h-full">
                {/* Background shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-3xl border border-gray-800"></div>

                {/* Geometric elements */}
                <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-[#9B5DE5] to-[#7C3AED] rounded-2xl transform rotate-45 shadow-xl"></div>

                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-[#3A86FF] to-[#0EA5E9] rounded-xl transform -rotate-12 shadow-lg"></div>

                <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-[#FFD400] to-[#F59E0B] rounded-2xl transform rotate-12 shadow-xl"></div>

                {/* Central elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-2xl shadow-2xl"></div>

                <div className="absolute bottom-1/2 right-1/3 w-8 h-8 bg-[#9B5DE5] rounded-full transform translate-y-1/2"></div>

                {/* Small accent shapes */}
                <div className="absolute top-1/6 right-1/3 w-3 h-3 bg-[#FFD400] rounded-full"></div>
                <div className="absolute bottom-1/6 left-1/2 w-4 h-4 bg-[#3A86FF] rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block mb-4">
                <span className="text-[#FFD400] font-bold text-sm tracking-wider uppercase">
                  ✅ SOLUTION
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white">
                Solution Section
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>

              <p>
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
    </section>
  );
}
