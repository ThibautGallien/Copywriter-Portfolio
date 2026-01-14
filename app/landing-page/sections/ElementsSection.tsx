"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ArticleSection } from "@/components/blog/BlogComponents";

export default function ElementsSection() {
  return (
    <ArticleSection
      id="elements"
      title="Les 8 éléments d'une landing page à 10%+ de conversion"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg mb-8 text-neutral-700">
          J&apos;ai analysé les 50 landing pages les mieux converties selon
          Unbounce (taux moyen : 12,7%). Voici les 8 patterns communs.
        </p>

        {/* IMAGE PLACEHOLDER */}
        <div className="my-8 bg-neutral-100 rounded-2xl p-8 text-center border-2 border-dashed border-neutral-300">
          <div className="text-neutral-400 mb-4">📸 IMAGE PLACEHOLDER</div>
          <p className="text-sm text-neutral-500">
            Infographie : Les 8 zones d&apos;une landing page qui convertit
            <br />
            Annotations : Titre, sous-titre, CTA, formulaire, preuve sociale,
            visuels, bénéfices, footer
            <br />
            Dimensions recommandées : 1000x1400px
            <br />
            Fichier : /public/images/anatomie-landing-page.jpg
          </p>
        </div>

        <div className="space-y-8">
          {/* Élément #1 */}
          <div className="bg-white rounded-2xl p-6 border-2 border-neutral-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-900">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                1
              </span>
              Un titre qui vend un bénéfice, pas une fonctionnalité
            </h3>

            <div className="mb-4">
              <p className="text-red-600 mb-2 font-semibold">❌ Mauvais</p>
              <p className="text-neutral-600">
                &quot;Notre plateforme CRM moderne et intuitive&quot;
              </p>
            </div>

            <div className="mb-4">
              <p className="text-blue-600 mb-2 font-semibold">✅ Bon</p>
              <p className="text-neutral-700">
                &quot;Gère 500+ leads sans perdre une vente&quot;
              </p>
            </div>

            <p className="text-sm text-neutral-600">
              <strong className="text-neutral-900">Benchmark</strong> : Changer
              un titre peut améliorer la conversion de 30-90% (étude
              ConversionXL sur 212 tests A/B).
            </p>
          </div>

          {/* Élément #2 */}
          <div className="bg-white rounded-2xl p-6 border-2 border-neutral-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-900">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                2
              </span>
              Un sous-titre qui lève l&apos;objection #1
            </h3>

            <p className="mb-4 text-neutral-700">
              Le titre capte l&apos;attention. Le sous-titre répond à :
              &quot;Oui mais...&quot;
            </p>

            <div className="bg-neutral-50 p-4 rounded-xl mb-4 border border-neutral-200">
              <p className="mb-2 text-neutral-900">
                <strong>Exemple</strong> :
              </p>
              <p className="text-neutral-700 mb-2">
                • Titre : &quot;Gère 500+ leads sans perdre une vente&quot;
              </p>
              <p className="text-neutral-700">
                • Sous-titre : &quot;Configuration en 10 minutes. Aucune carte
                bancaire requise.&quot;
              </p>
            </div>

            <p className="text-sm text-neutral-600">
              <strong className="text-neutral-900">Objection levée</strong> :
              &quot;Ça a l&apos;air compliqué à installer&quot; → Non, 10
              minutes.
            </p>
          </div>

          {/* Élément #3 */}
          <div className="bg-white rounded-2xl p-6 border-2 border-neutral-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-900">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                3
              </span>
              Un CTA qui dit exactement ce qui va se passer
            </h3>

            <div className="mb-4">
              <p className="text-red-600 mb-2 font-semibold">❌ Mauvais</p>
              <p className="text-neutral-600">
                &quot;Envoyer&quot;, &quot;Soumettre&quot;, &quot;En savoir
                plus&quot;
              </p>
            </div>

            <div className="mb-4">
              <p className="text-blue-600 mb-2 font-semibold">✅ Bon</p>
              <p className="text-neutral-700">
                &quot;Télécharger la checklist&quot;, &quot;Voir une démo de 2
                min&quot;, &quot;Commencer l&apos;essai gratuit&quot;
              </p>
            </div>

            <p className="text-sm text-neutral-600">
              <strong className="text-neutral-900">Benchmark</strong> : Les CTA
              spécifiques augmentent la conversion de 21% en moyenne (source :
              WordStream, 3 000 tests A/B).
            </p>
          </div>

          {/* Élément #4 */}
          <div className="bg-white rounded-2xl p-6 border-2 border-neutral-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-900">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                4
              </span>
              Un formulaire court (3 champs max pour du lead gen)
            </h3>

            <p className="mb-4 font-bold text-neutral-900">
              Données Unbounce (analyse de 40 000 formulaires) :
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <p className="text-neutral-700">
                  3 champs :{" "}
                  <strong className="text-blue-600">
                    10,4% de conversion
                  </strong>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 text-yellow-500 flex-shrink-0">
                  ⚠️
                </span>
                <p className="text-neutral-700">
                  5 champs :{" "}
                  <strong className="text-yellow-600">
                    6,2% de conversion
                  </strong>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 text-red-500 flex-shrink-0">❌</span>
                <p className="text-neutral-700">
                  7+ champs :{" "}
                  <strong className="text-red-600">3,1% de conversion</strong>
                </p>
              </div>
            </div>

            <p className="mb-4 text-neutral-700">
              <strong className="text-neutral-900">Règle</strong> : Demande le
              minimum pour démarrer la conversation. Le reste, tu le demandes
              après.
            </p>

            <p className="text-sm text-neutral-600">
              <strong className="text-neutral-900">Exception</strong> : Si tu
              vends du B2B à 10 000€+, un formulaire long filtre les prospects
              non qualifiés.
            </p>
          </div>

          {/* Élément #5 */}
          <div className="bg-white rounded-2xl p-6 border-2 border-neutral-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-900">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                5
              </span>
              La preuve sociale (avis, logos, chiffres)
            </h3>

            <p className="mb-4 font-bold text-neutral-900">
              3 types de preuves sociales qui marchent :
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2 text-neutral-900">
                  1. Chiffres d&apos;autorité
                </p>
                <p className="text-neutral-700">
                  &quot;Utilisé par 150 000+ entreprises&quot; (HubSpot)
                </p>
              </div>
              <div>
                <p className="font-bold mb-2 text-neutral-900">
                  2. Logos clients
                </p>
                <p className="text-neutral-700">
                  Logos 6-8 entreprises connues (augmente confiance de 42% -
                  Nielsen)
                </p>
              </div>
              <div>
                <p className="font-bold mb-2 text-neutral-900">
                  3. Témoignages avec photo
                </p>
                <p className="text-neutral-700">
                  Conversion +34% vs témoignages sans photo (VWO)
                </p>
              </div>
            </div>

            {/* IMAGE PLACEHOLDER */}
            <div className="mt-6 bg-neutral-100 rounded-xl p-6 text-center border-2 border-dashed border-neutral-300">
              <div className="text-neutral-400 mb-4">📸 IMAGE PLACEHOLDER</div>
              <p className="text-sm text-neutral-500">
                Screenshots : 3 exemples de preuve sociale (chiffres, logos,
                témoignage)
                <br />
                Dimensions recommandées : 1200x400px
                <br />
                Fichier : /public/images/preuve-sociale-exemples.jpg
              </p>
            </div>
          </div>

          {/* Élément #6 */}
          <div className="bg-white rounded-2xl p-6 border-2 border-neutral-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-900">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                6
              </span>
              Des visuels qui montrent le produit en action
            </h3>

            <p className="mb-4 text-neutral-700">
              <strong className="text-neutral-900">Benchmark</strong> : Landing
              pages avec capture d&apos;écran produit convertissent 38% mieux
              que celles avec photos génériques (étude Crazy Egg, 1 800 pages).
            </p>

            <p className="mb-4 text-neutral-700">
              <strong className="text-neutral-900">Pourquoi ?</strong> Les gens
              veulent <strong className="text-neutral-900">voir</strong> ce
              qu&apos;ils vont recevoir, pas imaginer.
            </p>

            {/* IMAGE PLACEHOLDER */}
            <div className="bg-neutral-100 rounded-xl p-6 text-center border-2 border-dashed border-neutral-300">
              <div className="text-neutral-400 mb-4">📸 IMAGE PLACEHOLDER</div>
              <p className="text-sm text-neutral-500">
                Exemple : Screenshot d&apos;un dashboard ou produit en action
                <br />
                Dimensions recommandées : 800x600px
                <br />
                Fichier : /public/images/visuel-produit-exemple.jpg
              </p>
            </div>
          </div>

          {/* Élément #7 */}
          <div className="bg-white rounded-2xl p-6 border-2 border-neutral-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-900">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                7
              </span>
              Une section &quot;Comment ça marche&quot; en 3 étapes
            </h3>

            <p className="mb-4 font-bold text-neutral-900">Format gagnant :</p>

            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-1">
                  1
                </span>
                <div>
                  <p className="font-bold text-neutral-900">Action simple</p>
                  <p className="text-neutral-700">
                    &quot;Entre ton email&quot;
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-1">
                  2
                </span>
                <div>
                  <p className="font-bold text-neutral-900">
                    Bénéfice immédiat
                  </p>
                  <p className="text-neutral-700">
                    &quot;Reçois la checklist en 30 secondes&quot;
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-1">
                  3
                </span>
                <div>
                  <p className="font-bold text-neutral-900">Résultat final</p>
                  <p className="text-neutral-700">
                    &quot;Applique les 47 points et améliore ton taux de
                    conversion&quot;
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-neutral-600">
              <strong className="text-neutral-900">Impact</strong> : Réduire la
              friction cognitive augmente la conversion de 15-25% (source :
              Baymard Institute).
            </p>
          </div>

          {/* Élément #8 */}
          <div className="bg-white rounded-2xl p-6 border-2 border-neutral-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-900">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                8
              </span>
              Un seul objectif, un seul CTA
            </h3>

            <p className="mb-4 text-neutral-700">
              <strong className="text-neutral-900">Erreur fatale</strong> :
              Mettre 3 CTA différents (&quot;Télécharger&quot;, &quot;Nous
              contacter&quot;, &quot;En savoir plus&quot;).
            </p>

            <p className="mb-4 text-neutral-700">
              <strong className="text-neutral-900">Résultat</strong> : Paradoxe
              du choix. Le visiteur ne fait rien.
            </p>

            <p className="text-sm text-neutral-600">
              <strong className="text-neutral-900">Benchmark</strong> : Landing
              pages avec 1 CTA convertissent 266% mieux que celles avec 2+ CTA
              (étude HubSpot, 5 000 pages).
            </p>
          </div>
        </div>
      </motion.div>
    </ArticleSection>
  );
}
