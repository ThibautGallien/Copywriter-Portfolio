"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const concepts = [
  {
    title: "Copy qui convertit",
    description:
      "Des mots qui transforment vos visiteurs en clients fidèles avec mon style narratif unique",
    stat: "+127% de conversions avec un bon headline",
    color: "from-[#9B5DE5] to-[#7C3AED]",
  },
  {
    title: "Emails qui vendent",
    description:
      "Des séquences automatisées qui génèrent du CA pendant que vous dormez",
    stat: "ROI moyen de 4200% sur l'email marketing",
    color: "from-[#3A86FF] to-[#0EA5E9]",
  },
  {
    title: "Landing Pages qui performent",
    description: "Des pages optimisées pour maximiser vos taux de conversion",
    stat: "+55% de leads avec une LP dédiée",
    color: "from-[#FFD400] to-[#F59E0B]",
  },
];

export default function ConceptSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % concepts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [concepts.length]);

  return (
    <section className="py-24 bg-[#0D0D0D] relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9B5DE5]/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="text-[#FFD400] font-bold text-sm tracking-wider uppercase">
              🎯 MES SPÉCIALITÉS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-4">
            Expertise copywriting
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              {" "}
              qui convertit
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center text-white min-h-[300px] flex flex-col justify-center">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${concepts[currentSlide].color} flex items-center justify-center`}
                >
                  <span className="text-2xl font-bold text-white">
                    {currentSlide === 0
                      ? "📝"
                      : currentSlide === 1
                      ? "📧"
                      : "📊"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
                  {concepts[currentSlide].title}
                </h3>

                {/* Description */}
                <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
                  {concepts[currentSlide].description}
                </p>

                {/* Stat */}
                <div
                  className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${concepts[currentSlide].color} bg-clip-text text-transparent`}
                >
                  {concepts[currentSlide].stat}
                </div>
              </motion.div>
            </CardContent>
          </Card>

          {/* Dots navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {concepts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
