// components/sections/BenefitsSection.tsx
"use client";

import { CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "STOP à la guesswork, au trial-and-error et au show de merde sans fin d'essayer de tout comprendre par vous-même",
    "Développez votre business avec des funnels éprouvés qui convertissent",
    "Automatisez vos ventes avec des séquences email qui travaillent 24h/24",
    "Multipliez vos taux de conversion grâce à un copy scientifique",
    "Libérez votre temps pour vous concentrer sur ce que vous aimez vraiment",
    "Dormez paisiblement en sachant que votre business génère du CA automatiquement",
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-8">
              DÉVELOPPEZ 10X PLUS VITE,
              <br />
              MIEUX, PLUS INTELLIGEMMENT.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passez la guesswork, le trial-and-error et le show de merde sans
              fin d'essayer de tout comprendre par vous-même – pour la première
              fois. Et à la place, développez votre business avec des{" "}
              <span className="font-bold underline text-green-400">
                funnels éprouvés
              </span>
              , des frameworks et une{" "}
              <span className="font-bold">
                acquisition scientifique de clients
              </span>{" "}
              (pas des espoirs et des prières).
            </p>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-800 p-6 rounded-xl"
              >
                <CheckCircle
                  className="text-green-400 mr-4 mt-1 flex-shrink-0"
                  size={24}
                />
                <p className="text-lg text-white">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                🎯 Revenue Generated & Size Of Our Platform
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-5xl font-bold text-green-400 mb-2">
                    €7.8M
                  </p>
                  <p className="text-gray-300">
                    Nous laissons nos chiffres parler. 7.8 millions d'euros de
                    revenus clients reportés et comptés.
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-blue-400 mb-2">199K</p>
                  <p className="text-gray-300">
                    200,000 clients et plus composent notre plateforme diverse
                    et toujours croissante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
