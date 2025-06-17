// components/sections/FinalCTA.tsx
"use client";

import { Star } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800 rounded-2xl p-12">
            <h2 className="text-5xl font-black text-white mb-8">
              JE SUPPOSE QUE CE QU'ON
              <br />
              ESSAIE DE DIRE C'EST QUE VOUS
              <br />
              DEVRIEZ APPUYER SUR CE
              <br />
              PUTAIN DE BOUTON
            </h2>

            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-6 px-12 rounded-lg hover:shadow-lg transition-all text-2xl animate-pulse mb-8">
              RÉSERVER MON APPEL GRATUIT
            </button>

            <div className="flex items-center justify-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-300">4.9 étoiles sur 6,266 avis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
