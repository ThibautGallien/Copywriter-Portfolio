// components/sections/FreeBookSection.tsx
"use client";

import { Star } from "lucide-react";

const FreeBookSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            NOUS AVONS LITTÉRALEMENT ÉCRIT LE LIVRE SUR...
          </h2>

          <h3 className="text-5xl font-black mb-8">
            COMMENT OBTENIR AUTANT DE
            <br />
            CLIENTS, CUSTOMERS ET
            <br />
            VENTES QUE VOUS POUVEZ
            <br />
            POSSIBLEMENT GÉRER
          </h3>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <div className="w-48 h-64 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">COPY</div>
                <div className="text-2xl font-bold text-white mb-2">LIKE</div>
                <div className="text-4xl font-bold text-white">CRAZY</div>
                <div className="text-sm text-white mt-4">
                  COMMENT OBTENIR AUTANT DE CLIENTS,
                  <br />
                  CUSTOMERS ET VENTES QUE
                  <br />
                  VOUS POUVEZ POSSIBLEMENT GÉRER
                </div>
                <div className="text-lg font-bold text-white mt-4">THIBAUT</div>
              </div>
            </div>

            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Copy Like Crazy est passé d'un classement de 90,000 le jour de sa
              sortie, à un bestseller international Amazon #1 dès le premier
              jour.
              <span className="font-bold text-white">
                {" "}
                Ce livre est facile à lire et ne perd pas de temps à aller droit
                au but.
              </span>
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Vous obtenez{" "}
              <span className="font-bold text-white underline">
                des stratégies actionnables que vous pouvez utiliser
                IMMÉDIATEMENT
              </span>{" "}
              pour augmenter drastiquement les ventes de votre business... dans
              la plupart des cas, sans dépenser un centime de plus en publicité.
            </p>

            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg transition-all text-lg mb-6">
              TÉLÉCHARGER LE LIVRE GRATUIT
            </button>

            <div className="flex items-center justify-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-300">4.9 étoiles sur 5,883 avis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeBookSection;
