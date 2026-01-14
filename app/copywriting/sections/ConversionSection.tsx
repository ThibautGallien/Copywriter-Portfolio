"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ArticleSection } from "@/components/blog/BlogComponents";

export default function ConversionSection() {
  return (
    <ArticleSection
      id="conversion"
      title="Comment je peux booster tes conversions avec du copywriting stratégique"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Problème */}
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8">
          <p className="text-lg mb-4 text-neutral-900">
            Ton taux de conversion stagne à 1,8%. Tu as du trafic, mais 98
            visiteurs sur 100 repartent sans acheter.
          </p>
          <p className="text-neutral-600">
            Le problème ?{" "}
            <strong className="text-neutral-900">
              Tu es trop proche de ton produit
            </strong>
            . Tu parles caractéristiques quand tes prospects cherchent des
            bénéfices. Tu oublies les 5 vraies objections qui les empêchent
            d&apos;acheter. Et tu testes au hasard sans méthode.
          </p>
        </div>

        {/* Solution */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-8">
          <p className="text-lg font-bold mb-4 text-blue-700">
            Voici comment je booste tes conversions :
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-neutral-600">
                <strong className="text-neutral-900">
                  J&apos;audite ton funnel complet
                </strong>{" "}
                en 48h et j&apos;identifie les 3 à 5 points de friction qui te
                coûtent le plus de conversions
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-neutral-600">
                <strong className="text-neutral-900">
                  Je réécris tes éléments critiques
                </strong>{" "}
                (titres, CTA, emails, pages) avec la méthode qui a généré +127%
                de conversions sur 23 funnels
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-neutral-600">
                <strong className="text-neutral-900">
                  Tu reçois un plan d&apos;action priorisé
                </strong>{" "}
                avec les copies réécrites prêtes à déployer immédiatement
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <motion.a
            href="https://calendly.com/hello-thibautgallien/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-500 transition-colors text-lg"
          >
            Réserve ton audit conversion gratuit (30 min)
          </motion.a>
          <p className="text-neutral-500 text-sm mt-4">
            On analyse ton funnel ensemble, je te montre les 3 quick wins qui
            peuvent doubler tes conversions
          </p>
        </div>
      </motion.div>
    </ArticleSection>
  );
}
