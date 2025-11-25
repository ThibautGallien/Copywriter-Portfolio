"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
        <Card className="bg-red-900/20 border-red-500/50 mb-8">
          <CardContent className="p-6">
            <p className="text-lg mb-4">
              Ton taux de conversion stagne à 1,8%. Tu as du trafic, mais 98
              visiteurs sur 100 repartent sans acheter.
            </p>
            <p className="text-gray-300">
              Le problème ? <strong>Tu es trop proche de ton produit</strong>.
              Tu parles caractéristiques quand tes prospects cherchent des
              bénéfices. Tu oublies les 5 vraies objections qui les empêchent
              d&apos;acheter. Et tu testes au hasard sans méthode.
            </p>
          </CardContent>
        </Card>

        {/* Solution */}
        <Card className="bg-purple-900/20 border-purple-500/50 mb-8">
          <CardContent className="p-6">
            <p className="text-lg font-bold mb-4 text-purple-300">
              Voici comment je booste tes conversions :
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <p>
                  <strong>J&apos;audite ton funnel complet</strong> en 48h et
                  j&apos;identifie les 3 à 5 points de friction qui te coûtent
                  le plus de conversions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <p>
                  <strong>Je réécris tes éléments critiques</strong> (titres,
                  CTA, emails, pages) avec la méthode qui a généré +127% de
                  conversions sur 23 funnels
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <p>
                  <strong>Tu reçois un plan d&apos;action priorisé</strong> avec
                  les copies réécrites prêtes à déployer immédiatement
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <a>
            href="https://calendly.com/hello-thibautgallien/30min"
            target="_blank" rel="noopener noreferrer" className="inline-block
            bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] text-white font-bold
            py-4 px-8 rounded-lg hover:opacity-90 transition-opacity text-lg"
            Réserve ton audit conversion gratuit (30 min)
          </a>
          <p className="text-gray-400 text-sm mt-4">
            On analyse ton funnel ensemble, je te montre les 3 quick wins qui
            peuvent doubler tes conversions
          </p>
        </div>
      </motion.div>
    </ArticleSection>
  );
}
