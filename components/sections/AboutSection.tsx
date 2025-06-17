// components/sections/AboutSection.tsx
"use client";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl mx-auto mb-8 flex items-center justify-center">
                <span className="text-6xl font-bold text-white">T</span>
              </div>
            </div>
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Qui suis-je ?</h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  Je suis{" "}
                  <span className="font-bold text-green-400">Thibaut</span>,
                  copywriter obsédé par les résultats et passionné de mangas
                  (oui, les deux vont ensemble).
                </p>
                <p>
                  Depuis des années, j'aide les entrepreneurs à transformer
                  leurs mots en machine à cash grâce au copywriting de
                  persuasion.
                </p>
                <p>
                  Ma mission ?{" "}
                  <span className="font-bold">Faire exploser vos ventes</span>{" "}
                  avec des copies qui convertissent comme des fous, des emails
                  qui vendent pendant que vous dormez, et des landing pages qui
                  transforment vos visiteurs en clients fidèles.
                </p>
                <p>
                  Quand je ne rédige pas du copy qui cartonne, vous me trouverez
                  probablement en train de dévorer le dernier chapitre de One
                  Piece ou d'analyser les techniques de persuasion dans les
                  animes (non, ce n'est pas une perte de temps).
                </p>
              </div>

              <div className="mt-8">
                <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all">
                  Découvrir mon histoire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
