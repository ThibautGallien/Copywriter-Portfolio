// components/sections/TripleGuarantee.tsx
"use client";

import { Clock, TrendingUp, CheckCircle } from "lucide-react";

const TripleGuarantee = () => {
  const guarantees = [
    {
      icon: <Clock className="text-green-400" size={40} />,
      title: "Garantie Délai",
      description:
        "Vos projets livrés dans les temps convenus ou remboursement intégral.",
    },
    {
      icon: <TrendingUp className="text-blue-400" size={40} />,
      title: "Garantie Résultat",
      description:
        "Amélioration mesurable de vos conversions ou nous reprenons tout gratuitement.",
    },
    {
      icon: <CheckCircle className="text-purple-400" size={40} />,
      title: "Garantie Satisfaction",
      description:
        "100% satisfait ou remboursé, sans question ni justification.",
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            MA TRIPLE GARANTIE
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Parce que votre succès est ma priorité absolue
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl text-white"
              >
                <div className="flex justify-center mb-4">{guarantee.icon}</div>
                <h3 className="text-xl font-bold mb-4">{guarantee.title}</h3>
                <p className="text-gray-400">{guarantee.description}</p>
              </div>
            ))}
          </div>

          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg transition-all text-lg">
            Réserver un appel stratégique gratuit
          </button>
        </div>
      </div>
    </section>
  );
};

export default TripleGuarantee;
