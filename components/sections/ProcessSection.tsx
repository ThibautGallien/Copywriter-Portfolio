// components/sections/ProcessSection.tsx
"use client";

import { Target, TrendingUp, Award, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Audit & Diagnostic",
      description:
        "Analyse complète de votre situation actuelle et identification des points d'amélioration.",
      icon: <Target className="text-green-400" size={30} />,
    },
    {
      number: "02",
      title: "Stratégie sur mesure",
      description:
        "Création d'un plan d'action personnalisé basé sur vos objectifs et votre marché.",
      icon: <TrendingUp className="text-blue-400" size={30} />,
    },
    {
      number: "03",
      title: "Création & Optimisation",
      description:
        "Rédaction et mise en place de tous vos contenus copywriting haute conversion.",
      icon: <Award className="text-purple-400" size={30} />,
    },
    {
      number: "04",
      title: "Suivi & Amélioration",
      description:
        "Monitoring des performances et optimisations continues pour maximiser vos résultats.",
      icon: <CheckCircle className="text-yellow-400" size={30} />,
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              MON PROCESSUS
            </h2>
            <p className="text-xl text-gray-300">
              Une méthode éprouvée pour des résultats garantis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center text-white">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-blue-500 text-black font-bold text-sm px-2 py-1 rounded-full">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
