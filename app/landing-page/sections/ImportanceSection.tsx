"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";

export default function ImportanceSection() {
  return (
    <ArticleSection
      id="importance"
      title="Pourquoi une landing page peut multiplier ton ROI par 3"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-[#9B5DE5]">
          Donnée brutale #1 : Les entreprises avec 10-15 landing pages génèrent
          55% plus de leads
        </h3>

        <p className="mb-4">
          Source : <strong>étude HubSpot sur 7 000 entreprises B2B</strong>{" "}
          (2023)
        </p>

        <p className="mb-6">
          Traduction : Si tu génères 100 leads/mois avec 1 landing page, tu en
          génères 155 avec 15 landing pages ciblées.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-[#9B5DE5]">
          Donnée brutale #2 : 68% des entreprises B2B n&apos;ont AUCUNE landing
          page dédiée
        </h3>

        <p className="mb-4">
          Source : <strong>rapport Marketing Sherpa 2024</strong>
        </p>

        <p className="mb-6">
          Résultat : Elles envoient leur trafic payant vers la page
          d&apos;accueil. Conversion moyenne : 1,8%.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-[#9B5DE5]">
          Donnée brutale #3 : Ajouter une vidéo sur ta landing page = +80% de
          conversion
        </h3>

        <p className="mb-4">
          Source : <strong>étude Wistia sur 1 200 landing pages</strong>
        </p>

        <p className="mb-8">
          Pourquoi ? Parce que 59% des gens préfèrent regarder une vidéo que
          lire un texte (Forrester Research).
        </p>

        <h3 className="text-2xl font-bold mb-4 text-[#9B5DE5]">
          Ce que ça signifie pour ton business
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-red-900/20 border-red-500/50">
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-4">
                Scénario 1 : Sans landing page
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <p>Trafic pub : 2 000 visiteurs/mois</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <p>Taux de conversion : 1,8% (moyenne)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <p>Leads : 36</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <p>Coût par lead : 50€ (si budget 1 800€)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-900/20 border-green-500/50">
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-4">
                Scénario 2 : Avec landing page optimisée
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <p>Trafic pub : 2 000 visiteurs/mois</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <p>Taux de conversion : 8,4% (top 25% selon Unbounce)</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <p>Leads : 168</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <p>Coût par lead : 10,71€</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Highlight>
          Différence : +132 leads/mois sans dépenser 1€ de plus en pub.
        </Highlight>

        <p className="mt-6">
          C&apos;est pour ça que les entreprises qui maîtrisent les landing
          pages dominent leur marché. Pas parce qu&apos;elles dépensent plus.
          Parce qu&apos;elles convertissent mieux.
        </p>
      </motion.div>
    </ArticleSection>
  );
}
