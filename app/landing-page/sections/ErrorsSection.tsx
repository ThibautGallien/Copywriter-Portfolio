"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";

export default function ErrorsSection() {
  return (
    <ArticleSection
      id="errors"
      title="Les 5 erreurs qui tuent 80% des landing pages"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-8">
          {/* Erreur #1 */}
          <Card className="bg-red-900/20 border-red-500/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                Erreur #1 : Titre centré sur TOI, pas sur le CLIENT
              </h3>

              <div className="mb-4">
                <p className="text-red-400 mb-2">❌ Mauvais</p>
                <p className="text-gray-400">
                  &quot;Notre solution innovante de gestion de projet&quot;
                </p>
              </div>

              <div className="mb-4">
                <p className="text-green-400 mb-2">✅ Bon</p>
                <p className="text-gray-300">
                  &quot;Livre tes projets 3x plus vite (sans faire d&apos;heures
                  sup)&quot;
                </p>
              </div>

              <p className="mb-4">
                <strong>Pourquoi c&apos;est grave</strong> : Les gens se fichent
                de ton produit. Ils veulent savoir ce que ça change pour EUX.
              </p>

              <p className="text-sm text-gray-400">
                <strong>Donnée</strong> : Titres centrés sur le bénéfice client
                convertissent 47% mieux (source : Neil Patel, analyse de 300
                landing pages).
              </p>
            </CardContent>
          </Card>

          {/* Erreur #2 */}
          <Card className="bg-red-900/20 border-red-500/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                Erreur #2 : Formulaire qui demande &quot;Société&quot; en
                premier champ
              </h3>

              <p className="mb-4 font-bold">
                Ordre optimal selon Unbounce (tests sur 127 000 formulaires) :
              </p>

              <div className="space-y-2 mb-4 bg-gray-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
                    1
                  </span>
                  <p>
                    Prénom{" "}
                    <span className="text-gray-400">(engagement faible)</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
                    2
                  </span>
                  <p>
                    Email{" "}
                    <span className="text-gray-400">(engagement moyen)</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
                    3
                  </span>
                  <p>
                    Téléphone ou Société{" "}
                    <span className="text-gray-400">(engagement fort)</span>
                  </p>
                </div>
              </div>

              <p className="mb-4">
                <strong>Pourquoi ?</strong> Les gens donnent d&apos;abord des
                infos personnelles, puis professionnelles. Inverser = -23% de
                complétion.
              </p>

              {/* IMAGE PLACEHOLDER : Ordre optimal formulaire */}
              <div className="mt-6 bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-gray-400 mb-4">📸 IMAGE PLACEHOLDER</div>
                <p className="text-sm text-gray-500">
                  Illustration : Ordre optimal des champs de formulaire (Prénom
                  → Email → Téléphone)
                  <br />
                  Avec taux de complétion annotés
                  <br />
                  Dimensions recommandées : 600x400px
                  <br />
                  Fichier : /public/images/ordre-formulaire-optimal.jpg
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Erreur #3 */}
          <Card className="bg-red-900/20 border-red-500/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                Erreur #3 : Pas de réponse à &quot;Pourquoi maintenant ?&quot;
              </h3>

              <p className="mb-4">
                <strong>Le visiteur se demande</strong> : &quot;OK, mais je peux
                faire ça plus tard, non ?&quot;
              </p>

              <p className="mb-4 font-bold">Solutions :</p>

              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl flex-shrink-0">
                    ⏰
                  </span>
                  <div>
                    <p className="font-bold">Urgence</p>
                    <p className="text-gray-300">
                      &quot;Offre expire dans 48h&quot; (si vrai)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-xl flex-shrink-0">
                    🔥
                  </span>
                  <div>
                    <p className="font-bold">Rareté</p>
                    <p className="text-gray-300">
                      &quot;Plus que 12 places disponibles&quot; (si vrai)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 text-xl flex-shrink-0">💸</span>
                  <div>
                    <p className="font-bold">Perte</p>
                    <p className="text-gray-300">
                      &quot;Chaque jour sans cette checklist, tu perds 3
                      leads&quot; (biais aversion à la perte)
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-400">
                <strong>Benchmark</strong> : Landing pages avec élément
                d&apos;urgence authentique convertissent 27% mieux (VWO, 412
                tests).
              </p>

              <Highlight>
                ATTENTION : L&apos;urgence doit être VRAIE. Les faux compteurs
                détruisent ta crédibilité.
              </Highlight>
            </CardContent>
          </Card>

          {/* Erreur #4 */}
          <Card className="bg-red-900/20 border-red-500/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                Erreur #4 : Landing page non adaptée au mobile
              </h3>

              <p className="mb-4">
                <strong>Chiffre brutal</strong> : 67% du trafic landing page
                vient du mobile (source : Google, 2024).
              </p>

              <p className="mb-4">
                <strong>Et pourtant</strong> : 52% des landing pages ont un
                temps de chargement mobile &gt;4 secondes.
              </p>

              <p className="mb-4">
                <strong>Impact</strong> : Chaque seconde supplémentaire = -7% de
                conversion (Google Speed Report).
              </p>

              <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
                <p className="font-bold mb-2">Calcul brutal :</p>
                <p className="text-gray-300">
                  • Landing page desktop : 2 secondes → 8% conversion
                </p>
                <p className="text-gray-300">
                  • Landing page mobile : 6 secondes → 5,2% conversion (-35%)
                </p>
              </div>

              <p className="text-sm text-gray-400">
                <strong>Solution</strong> : Teste ta landing page sur mobile
                AVANT de lancer ta campagne.
              </p>

              {/* IMAGE PLACEHOLDER : Mobile vs Desktop */}
              <div className="mt-6 bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-gray-400 mb-4">📸 IMAGE PLACEHOLDER</div>
                <p className="text-sm text-gray-500">
                  Comparaison : Landing page responsive vs non-responsive
                  <br />
                  Split screen desktop/mobile
                  <br />
                  Dimensions recommandées : 1200x600px
                  <br />
                  Fichier : /public/images/landing-page-mobile-responsive.jpg
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Erreur #5 */}
          <Card className="bg-red-900/20 border-red-500/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                Erreur #5 : Pub qui promet X, landing page qui parle de Y
              </h3>

              <p className="mb-4 font-bold">Exemple réel :</p>

              <div className="mb-4 bg-gray-800/50 p-4 rounded-lg">
                <p className="text-red-400 mb-2">❌ Pub</p>
                <p className="text-gray-300 mb-4">
                  &quot;Télécharge notre guide SEO gratuit&quot;
                </p>

                <p className="text-red-400 mb-2">❌ Landing page</p>
                <p className="text-gray-300">
                  &quot;Découvrez notre agence SEO et nos services...&quot;
                </p>
              </div>

              <p className="mb-4">
                <strong>Résultat</strong> : Taux de rebond 78%. Conversion 0,8%.
              </p>

              <div className="bg-green-900/20 border border-green-500/50 p-4 rounded-lg mb-4">
                <p className="font-bold mb-2">✅ Règle d&apos;or</p>
                <p className="text-gray-300">
                  La landing page doit <strong>répéter exactement</strong> la
                  promesse de la pub.
                </p>
              </div>

              <p className="text-sm text-gray-400">
                <strong>Donnée</strong> : Cohérence message pub/landing page
                augmente conversion de 39% (WordStream, 2 100 campagnes
                analysées).
              </p>
            </CardContent>
          </Card>
        </div>

        <Highlight className="mt-8">
          Ces 5 erreurs sont responsables de 80% des échecs de landing pages.
          Corrige-les, et tu passes facilement de 2% à 8% de conversion.
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}
