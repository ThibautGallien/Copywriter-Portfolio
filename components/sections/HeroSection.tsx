"use client";

import { Mail, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/20"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            COMME DES{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              STÉROÏDES*
            </span>
            <br />
            POUR VOTRE BUSINESS
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Faire croître un business c'est dur. Je le rends beaucoup plus
            facile, plus prévisible, moins stressant et plus fun.
          </p>

          <div className="bg-gray-800 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Mail className="text-green-400 mr-2" size={24} />
              <span className="text-gray-300">
                Entrez votre email et recevez de la 'magie'...
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="votre.email@exemple.com"
                className="flex-1 px-6 py-4 bg-gray-700 rounded-lg text-white text-lg"
              />
              <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg transition-all">
                C'est parti →
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-4">
            *Mais c'est 100% légal (promis juré)
          </p>

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
    </section>
  );
};

export default HeroSection;
