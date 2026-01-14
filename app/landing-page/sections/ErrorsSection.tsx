"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
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
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-900">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              Erreur #1 : Titre centré sur TOI, pas sur le CLIENT
            </h3>

            <div className="mb-4">
              <p className="text-red-600 mb-2 font-semibold">❌ Mauvais</p>
              <p className="text-neutral-600">
                &quot;Notre solution innovante de gestion de projet&quot;
              </p>
            </div>

            <div className="mb-4">
              <p className="text-blue-600 mb-2 font-semibold">✅ Bon</p>
              <p className="text-neutral-700">
                &quot;Livre tes projets 3x plus vite (sans faire d&apos;heures
                sup)&quot;
              </p>
            </div>

            <p className="mb-4 text-neutral-700">
              <strong className="text-neutral-900">
                Pourquoi c&apos;est grave
              </strong>{" "}
              : Les gens se fichent de ton produit. Ils veulent savoir ce que ça
              change pour EUX.
            </p>

            <p className="text-sm text-neutral-600">
              <strong className="text-neutral-900">Donnée</strong> : Titres
              centrés sur le bénéfice client convertissent 47% mieux (source :
              Neil Patel, analyse de 300 landing pages).
            </p>
          </div>

          {/* Erreur #2 */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-900">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              Erreur #2 : Formulaire qui demande &quot;Société&quot; en premier
              champ
            </h3>

            <p className="mb-4 font-bold text-neutral-900">
              Ordre optimal selon Unbounce (tests sur 127 000 formulaires) :
            </p>

            <div className="space-y-2 mb-4 bg-white p-4 rounded-xl border border-red-200">
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
                  1
                </span>
                <p className="text-neutral-700">
                  Prénom{" "}
                  <span className="text-neutral-500">(engagement faible)</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
                  2
                </span>
                <p className="text-neutral-700">
                  Email{" "}
                  <span className="text-neutral-500">(engagement moyen)</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
                  3
                </span>
                <p className="text-neutral-700">
                  Téléphone ou Société{" "}
                  <span className="text-neutral-500">(engagement fort)</span>
                </p>
              </div>
            </div>

            <p className="mb-4 text-neutral-700">
              <strong className="text-neutral-900">Pourquoi ?</strong> Les gens
              donnent d&apos;abord des infos personnelles, puis
              professionnelles. Inverser = -23% de complétion.
            </p>

            {/* IMAGE PLACEHOLDER */}
            <div className="mt-6 bg-white rounded-xl p-6 text-center border-2 border-dashed border-red-300">
              <div className="text-neutral-400 mb-4">📸 IMAGE PLACEHOLDER</div>
              <p className="text-sm text-neutral-500">
                Illustration : Ordre optimal des champs de formulaire (Prénom →
                Email → Téléphone)
                <br />
                Avec taux de complétion annotés
                <br />
                Dimensions recommandées : 600x400px
                <br />
                Fichier : /public/images/ordre-formulaire-optimal.jpg
              </p>
            </div>
          </div>

          {/* Erreur #3 */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-900">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              Erreur #3 : Pas de réponse à &quot;Pourquoi maintenant ?&quot;
            </h3>

            <p className="mb-4 text-neutral-700">
              <strong className="text-neutral-900">
                Le visiteur se demande
              </strong>{" "}
              : &quot;OK, mais je peux faire ça plus tard, non ?&quot;
            </p>

            <p className="mb-4 font-bold text-neutral-900">Solutions :</p>

            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl flex-shrink-0">
                  ⏰
                </span>
                <div>
                  <p className="font-bold text-neutral-900">Urgence</p>
                  <p className="text-neutral-700">
                    &quot;Offre expire dans 48h&quot; (si vrai)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-xl flex-shrink-0">
                  🔥
                </span>
                <div>
                  <p className="font-bold text-neutral-900">Rareté</p>
                  <p className="text-neutral-700">
                    &quot;Plus que 12 places disponibles&quot; (si vrai)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-xl flex-shrink-0">💸</span>
                <div>
                  <p className="font-bold text-neutral-900">Perte</p>
                  <p className="text-neutral-700">
                    &quot;Chaque jour sans cette checklist, tu perds 3
                    leads&quot; (biais aversion à la perte)
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-neutral-600 mb-4">
              <strong className="text-neutral-900">Benchmark</strong> : Landing
              pages avec élément d&apos;urgence authentique convertissent 27%
              mieux (VWO, 412 tests).
            </p>

            <Highlight>
              ATTENTION : L&apos;urgence doit être VRAIE. Les faux compteurs
              détruisent ta crédibilité.
            </Highlight>
          </div>

          {/* Erreur #4 */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-900">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              Erreur #4 : Landing page non adaptée au mobile
            </h3>

            <p className="mb-4 text-neutral-700">
              <strong className="text-neutral-900">Chiffre brutal</strong> : 67%
              du trafic landing page vient du mobile (source : Google, 2024).
            </p>

            <p className="mb-4 text-neutral-700">
              <strong className="text-neutral-900">Et pourtant</strong> : 52%
              des landing pages ont un temps de chargement mobile &gt;4
              secondes.
            </p>

            <p className="mb-4 text-neutral-700">
              <strong className="text-neutral-900">Impact</strong> : Chaque
              seconde supplémentaire = -7% de conversion (Google Speed Report).
            </p>

            <div className="bg-white p-4 rounded-xl mb-4 border border-red-200">
              <p className="font-bold mb-2 text-neutral-900">Calcul brutal :</p>
              <p className="text-neutral-700">
                • Landing page desktop : 2 secondes → 8% conversion
              </p>
              <p className="text-neutral-700">
                • Landing page mobile : 6 secondes → 5,2% conversion (-35%)
              </p>
            </div>

            <p className="text-sm text-neutral-600">
              <strong className="text-neutral-900">Solution</strong> : Teste ta
              landing page sur mobile AVANT de lancer ta campagne.
            </p>

            {/* IMAGE PLACEHOLDER */}
            <div className="mt-6 bg-white rounded-xl p-6 text-center border-2 border-dashed border-red-300">
              <div className="text-neutral-400 mb-4">📸 IMAGE PLACEHOLDER</div>
              <p className="text-sm text-neutral-500">
                Comparaison : Landing page responsive vs non-responsive
                <br />
                Split screen desktop/mobile
                <br />
                Dimensions recommandées : 1200x600px
                <br />
                Fichier : /public/images/landing-page-mobile-responsive.jpg
              </p>
            </div>
          </div>

          {/* Erreur #5 */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-900">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              Erreur #5 : Pub qui promet X, landing page qui parle de Y
            </h3>

            <p className="mb-4 font-bold text-neutral-900">Exemple réel :</p>

            <div className="mb-4 bg-white p-4 rounded-xl border border-red-200">
              <p className="text-red-600 mb-2 font-semibold">❌ Pub</p>
              <p className="text-neutral-700 mb-4">
                &quot;Télécharge notre guide SEO gratuit&quot;
              </p>

              <p className="text-red-600 mb-2 font-semibold">❌ Landing page</p>
              <p className="text-neutral-700">
                &quot;Découvrez notre agence SEO et nos services...&quot;
              </p>
            </div>

            <p className="mb-4 text-neutral-700">
              <strong className="text-neutral-900">Résultat</strong> : Taux de
              rebond 78%. Conversion 0,8%.
            </p>

            <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl mb-4">
              <p className="font-bold mb-2 text-neutral-900">
                ✅ Règle d&apos;or
              </p>
              <p className="text-neutral-700">
                La landing page doit{" "}
                <strong className="text-neutral-900">répéter exactement</strong>{" "}
                la promesse de la pub.
              </p>
            </div>

            <p className="text-sm text-neutral-600">
              <strong className="text-neutral-900">Donnée</strong> : Cohérence
              message pub/landing page augmente conversion de 39% (WordStream, 2
              100 campagnes analysées).
            </p>
          </div>
        </div>

        <Highlight>
          Ces 5 erreurs sont responsables de 80% des échecs de landing pages.
          Corrige-les, et tu passes facilement de 2% à 8% de conversion.
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}
