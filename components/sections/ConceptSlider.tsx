// components/sections/ConceptSlider.tsx
"use client";

import { useState, useEffect } from "react";

const ConceptSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const concepts = [
    {
      title: "Copy qui convertit",
      description: "Des mots qui transforment vos visiteurs en clients fidèles",
      stat: "+127% de conversions avec un bon headline",
    },
    {
      title: "Emails qui vendent",
      description:
        "Des séquences automatisées qui génèrent du CA pendant que vous dormez",
      stat: "ROI moyen de 4200% sur l'email marketing",
    },
    {
      title: "Landing Pages qui performent",
      description: "Des pages optimisées pour maximiser vos taux de conversion",
      stat: "+55% de leads avec une LP dédiée",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % concepts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [concepts.length]);

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-4">
                {concepts[currentSlide].title}
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                {concepts[currentSlide].description}
              </p>
              <div className="text-2xl font-bold text-green-400">
                {concepts[currentSlide].stat}
              </div>
            </div>

            <div className="flex justify-center space-x-2">
              {concepts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-green-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ConceptSlider;
