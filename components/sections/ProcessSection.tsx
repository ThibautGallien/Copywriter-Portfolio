"use client";

import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Schedule a Consultation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      number: "02",
      title: "We Do The Work",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      number: "03",
      title: "Enjoy The Outcome",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
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
              🔄 PROCESSUS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-8">
            Process Section
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="inline-block bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] text-white px-4 py-2 rounded text-sm font-medium mb-4">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-bold font-space-grotesk text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Geometric placeholder visual */}
              <div className="w-full h-48 bg-gray-900/50 border border-gray-800 rounded-lg relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#9B5DE5]/20 to-[#3A86FF]/20 rounded-t-full"></div>
                <div className="absolute bottom-0 right-1/4 w-8 h-8 bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-[#FFD400] rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
