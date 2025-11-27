"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";

export default function StepsSection() {
  return (
    <ArticleSection
      id="steps"
      title="Comment créer ta landing page en 6 étapes"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg mb-8">
          Voici la méthode que j&apos;utilise pour créer une landing page qui
          convertit à 10%+.
        </p>

        <div className="space-y-6">
          {/* Étape 1 */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <span className="bg-[#9B5DE5] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                  1
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Définir l&apos;objectif unique
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Choisis UN seul objectif : génération de leads, vente,
                    inscription événement, ou démo.
                  </p>
                  <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
                    <p className="font-bold mb-2">Règle d&apos;or</p>
                    <p className="text-gray-300">
                      Une landing page = 1 objectif = 1 CTA
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">
                    Les landing pages avec 1 CTA convertissent 266% mieux que
                    celles avec 2+ CTA (HubSpot).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Étape 2 */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <span className="bg-[#9B5DE5] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                  2
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Rédiger un titre bénéfice
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Écris un titre qui vend un bénéfice, pas une fonctionnalité.
                  </p>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-red-400 font-bold mb-1">❌ Mauvais</p>
                      <p className="text-gray-400">
                        &quot;Notre plateforme CRM moderne&quot;
                      </p>
                    </div>
                    <div>
                      <p className="text-green-400 font-bold mb-1">✅ Bon</p>
                      <p className="text-gray-300">
                        &quot;Gère 500+ leads sans perdre une vente&quot;
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    Changer un titre peut améliorer la conversion de 30-90%
                    (ConversionXL).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Étape 3 */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <span className="bg-[#9B5DE5] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                  3
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Créer un formulaire court
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Pour du lead gen, limite à 3 champs maximum (prénom, email,
                    téléphone).
                  </p>
                  <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
                    <p className="font-bold mb-2">Données Unbounce</p>
                    <p className="text-gray-300">
                      • 3 champs = 10,4% conversion
                    </p>
                    <p className="text-gray-300">
                      • 5 champs = 6,2% conversion
                    </p>
                    <p className="text-gray-300">
                      • 7+ champs = 3,1% conversion
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">
                    Demande le minimum pour démarrer la conversation. Le reste,
                    tu le demandes après.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Étape 4 */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <span className="bg-[#9B5DE5] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                  4
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Ajouter la preuve sociale
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Intègre chiffres d&apos;autorité, logos clients, ou
                    témoignages avec photo.
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-300">
                      • <strong>Chiffres</strong> : &quot;Utilisé par 150 000+
                      entreprises&quot;
                    </p>
                    <p className="text-gray-300">
                      • <strong>Logos</strong> : 6-8 entreprises connues
                    </p>
                    <p className="text-gray-300">
                      • <strong>Témoignages</strong> : Avec photo = +34%
                      conversion
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">
                    Logos augmentent confiance de 42% selon Nielsen.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Étape 5 */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <span className="bg-[#9B5DE5] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                  5
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Optimiser pour mobile
                  </h3>
                  <p className="text-gray-300 mb-4">
                    67% du trafic landing page vient du mobile. Teste ta page
                    sur mobile AVANT de lancer.
                  </p>
                  <div className="bg-red-900/20 border border-red-500/50 p-4 rounded-lg mb-4">
                    <p className="font-bold mb-2">⚠️ Attention</p>
                    <p className="text-gray-300">
                      Chaque seconde de chargement supplémentaire = -7% de
                      conversion (Google Speed Report).
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">
                    Outils de test : Google PageSpeed Insights, GTmetrix
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Étape 6 */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <span className="bg-[#9B5DE5] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                  6
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-3">Tester et itérer</h3>
                  <p className="text-gray-300 mb-4">
                    Lance des tests A/B sur titre, CTA, visuels, formulaire.
                  </p>
                  <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
                    <p className="font-bold mb-2">
                      Éléments à tester en priorité
                    </p>
                    <p className="text-gray-300">• Titre principal</p>
                    <p className="text-gray-300">
                      • Texte CTA (&quot;Télécharger&quot; vs
                      &quot;Recevoir&quot;)
                    </p>
                    <p className="text-gray-300">• Couleur bouton CTA</p>
                    <p className="text-gray-300">
                      • Nombre de champs formulaire
                    </p>
                    <p className="text-gray-300">• Vidéo vs image statique</p>
                  </div>
                  <p className="text-sm text-gray-400">
                    Les CTA spécifiques augmentent la conversion de 21% en
                    moyenne (WordStream, 3 000 tests).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Outils recommandés */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-6 text-[#9B5DE5]">
            Outils pour créer ta landing page
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-3">
                  Solutions no-code (débutants)
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#9B5DE5]">•</span>
                    <div>
                      <p className="font-bold">Unbounce</p>
                      <p className="text-sm text-gray-400">
                        90€/mois • Drag & drop • A/B testing
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9B5DE5]">•</span>
                    <div>
                      <p className="font-bold">Leadpages</p>
                      <p className="text-sm text-gray-400">
                        37€/mois • Templates optimisés
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9B5DE5]">•</span>
                    <div>
                      <p className="font-bold">Systeme.io</p>
                      <p className="text-sm text-gray-400">
                        Gratuit jusqu&apos;à 2000 contacts
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-3">
                  Solutions WordPress (intermédiaires)
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#9B5DE5]">•</span>
                    <div>
                      <p className="font-bold">Elementor Pro</p>
                      <p className="text-sm text-gray-400">
                        49$/an • Constructeur visuel
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9B5DE5]">•</span>
                    <div>
                      <p className="font-bold">Thrive Architect</p>
                      <p className="text-sm text-gray-400">
                        299$/an • Focus conversion
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9B5DE5]">•</span>
                    <div>
                      <p className="font-bold">Divi Builder</p>
                      <p className="text-sm text-gray-400">
                        89$/an • 2000+ templates
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Highlight>
          Une landing page, ce n&apos;est jamais &quot;fini&quot;. Les
          meilleures convertissent à 15%+ après 6-12 mois d&apos;optimisation
          continue.
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}
