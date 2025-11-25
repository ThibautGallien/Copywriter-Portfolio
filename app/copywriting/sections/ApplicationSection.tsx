"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";

const threePlaces = [
  {
    title: "Premier point : tes titres de landing pages",
    problem:
      "Dans 73% des audits que je fais, le titre parle du produit. Pas du résultat.",
    before: "Notre plateforme SaaS de gestion de projet",
    after:
      "Gère tes projets 3x plus vite sans noyer ton équipe dans les réunions",
    insight:
      "Le titre, c'est 80% du boulot. Un mauvais titre, c'est un prospect perdu avant même d'avoir commencé.",
  },
  {
    title: "Deuxième point : tes lignes d'objet emails",
    problem: "Les objets d'emails ? C'est le massacre.",
    before: "Newsletter #47 (taux d'ouverture : 8%)",
    after:
      "J'ai trouvé pourquoi tu perds 40% de tes leads (taux d'ouverture : 34%)",
    insight:
      "L'objet doit répondre à une question simple : 'Pourquoi j'ouvrirais ça maintenant ?'",
  },
  {
    title: "Troisième point : tes CTA (appels à l'action)",
    problem:
      "'En savoir plus' est le CTA le plus utilisé au monde. C'est aussi le plus faible.",
    before: "En savoir plus",
    after: "Voir comment ça marche / Accède à l'audit gratuit",
    insight:
      "Plus tu es spécifique, plus tu convertis. Ton cerveau n'aime pas le vague.",
  },
];

export default function ApplicationSection() {
  return (
    <ArticleSection
      id="application"
      title="Comment appliquer le copywriting à ton business (sans devenir expert)"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="text-gray-300 leading-relaxed mb-8">
          Le copywriting, c'est pas réservé aux "pros". Tu peux l'appliquer à
          ton business dès aujourd'hui. Voici où commencer.
        </p>

        <h3 className="text-2xl font-bold text-[#9B5DE5] mb-6">
          Les 3 endroits où ton copy tue tes conversions
        </h3>

        <div className="space-y-8 mb-12">
          {threePlaces.map((item, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h4 className="font-bold text-[#FFD400] mb-3">{item.title}</h4>
                <p className="text-gray-300 mb-4">{item.problem}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-red-900/20 rounded p-4 border border-red-500/30">
                    <p className="text-red-400 font-semibold text-sm mb-2">
                      ❌ Avant
                    </p>
                    <p className="text-gray-300 text-sm">{item.before}</p>
                  </div>
                  <div className="bg-green-900/20 rounded p-4 border border-green-500/30">
                    <p className="text-green-400 font-semibold text-sm mb-2">
                      ✅ Après
                    </p>
                    <p className="text-gray-300 text-sm">{item.after}</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm italic">{item.insight}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-[#9B5DE5] mb-4">
          L'exercice des 10 minutes qui change tout
        </h3>

        <p className="text-gray-300 leading-relaxed mb-6">
          Prends un de tes titres actuels. N'importe lequel. Page d'accueil,
          page de service, landing page.
        </p>

        <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30 mb-6">
          <CardContent className="p-6">
            <h4 className="font-bold text-[#FFD400] mb-4">
              Applique cette formule simple :
            </h4>
            <p className="text-lg font-semibold text-center text-[#9B5DE5] mb-6">
              Bénéfice + Délai + Objection levée
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-2">Avant :</p>
                <p className="text-gray-300 bg-gray-800/50 rounded p-3">
                  "Services de conseil en marketing digital"
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Après :</p>
                <p className="text-gray-300 bg-gray-800/50 rounded p-3">
                  "Triple ton trafic qualifié en 90 jours (sans dépenser plus en
                  ads)"
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <p className="text-gray-300">
                • <strong className="text-[#3A86FF]">Bénéfice :</strong> Triple
                ton trafic qualifié
              </p>
              <p className="text-gray-300">
                • <strong className="text-[#FFD400]">Délai :</strong> En 90
                jours
              </p>
              <p className="text-gray-300">
                • <strong className="text-[#06D6A0]">Objection levée :</strong>{" "}
                Sans dépenser plus en ads
              </p>
            </div>
          </CardContent>
        </Card>

        <Highlight>
          Tu veux pas devenir expert copywriter ? Pas grave. Maîtrise juste
          cette formule sur tes 5 pages principales.
          <span className="text-[#FFD400] font-bold">
            {" "}
            Ça suffit pour débloquer 30 à 40% de conversions en plus.
          </span>
        </Highlight>

        <Card className="bg-gray-900/50 border-gray-800 mt-8">
          <CardContent className="p-6">
            <h4 className="font-bold text-[#06D6A0] mb-3">
              💡 Exemple concret
            </h4>
            <p className="text-gray-300 mb-3">
              Un site e-commerce de compléments alimentaires que j'ai audité.
              Titre produit initial : "Complément multivitamines bio". Nouveau
              titre : "Retrouve ton énergie en 15 jours (sans café ni
              excitants)".
            </p>
            <p className="text-[#FFD400] font-semibold">
              Résultat : taux de clic sur la fiche produit +187% en 3 semaines.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Même produit. Même prix. Juste le titre qui a changé.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </ArticleSection>
  );
}
