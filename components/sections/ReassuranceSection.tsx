// components/sections/ReassuranceSection.tsx
"use client";

import { Star } from "lucide-react";

const ReassuranceSection = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            LE POUVOIR EST DANS LA PLATEFORME
          </h2>

          <div className="text-xl text-gray-300 space-y-6 mb-12">
            <p>
              La plupart des entrepreneurs essaient de faire croître leur
              business par essais et erreurs, en 'espérant et en priant'... en
              tâtonnant et en essayant de tout comprendre par eux-mêmes.
            </p>
            <p>
              Nous appelons cela "guesswork". C'est peu fiable, extrêmement
              stressant et aboutit souvent à l'échec (ou à un psychiatre).
            </p>
            <p>
              Nous avons dépensé plus de 100 millions de dollars en trafic pour
              perfectionner ce qui fonctionne... ce n'est pas notre premier
              rodéo.
            </p>
            <p>
              Et notre espoir est de réduire le temps qu'il vous faut pour
              passer de chef d'entreprise solo débutant... À entrepreneur qui
              cartonne sur le marché...
            </p>
          </div>

          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg transition-all text-xl animate-pulse">
            RÉSERVER MON APPEL GRATUIT
          </button>

          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-300">4.9 étoiles sur 6,266 avis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReassuranceSection;
