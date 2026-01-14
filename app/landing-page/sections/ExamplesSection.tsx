"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ArticleSection } from "@/components/blog/BlogComponents";

export default function ExamplesSection() {
  return (
    <ArticleSection
      id="examples"
      title="3 landing pages qui cartonnent (et pourquoi)"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg mb-8 text-neutral-700">
          J&apos;ai analysé 3 landing pages avec des taux de conversion publics
          supérieurs à 10%. Voici ce qu&apos;elles font différemment.
        </p>

        <div className="space-y-10">
          {/* Exemple #1 : Mailchimp */}
          <div className="bg-white rounded-2xl p-6 border-2 border-neutral-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                1
              </span>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Mailchimp - Landing page lead magnet
                </h3>
                <p className="text-blue-600 font-bold">
                  14,2% de conversion
                </p>
              </div>
            </div>

            {/* IMAGE PLACEHOLDER */}
            <div className="my-6 bg-neutral-100 rounded-xl p-8 text-center border-2 border-dashed border-neutral-300">
              <div className="text-neutral-400 mb-4">📸 IMAGE PLACEHOLDER</div>
              <p className="text-sm text-neutral-500">
                Screenshot annoté de la landing page Mailchimp Free Trial
                <br />
                Annotations : Titre, formulaire 1 champ, illustration, CTA,
                preuve sociale
                <br />
                Dimensions recommandées : 1200x800px
                <br />
                Fichier : /public/images/example-mailchimp-landing-page.jpg
              </p>
            </div>

            <p className="mb-4 text-neutral-700">
              <strong className="text-neutral-900">URL</strong> :
              mailchimp.com/free-trial (page analysée en janvier 2025)
            </p>

            <h4 className="font-bold text-lg mb-3 text-neutral-900">
              Ce qui marche :
            </h4>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">
                    Titre bénéfice direct
                  </p>
                  <p className="text-neutral-700">
                    &quot;Grow your audience and build your business&quot;
                  </p>
                  <p className="text-sm text-neutral-600">
                    Pas &quot;Notre outil email marketing&quot; mais
                    &quot;Développe ton audience&quot;
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">
                    Formulaire ultra-court
                  </p>
                  <p className="text-neutral-700">Email uniquement</p>
                  <p className="text-sm text-neutral-600">
                    Unbounce : 1 champ = 14% conversion, 3 champs = 10%, 5
                    champs = 6%
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">
                    Illustration simple
                  </p>
                  <p className="text-neutral-700">
                    Dashboard du produit en 3 secondes
                  </p>
                  <p className="text-sm text-neutral-600">
                    Les gens voient immédiatement ce qu&apos;ils vont utiliser
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">
                    CTA sans friction
                  </p>
                  <p className="text-neutral-700">&quot;Sign Up Free&quot;</p>
                  <p className="text-sm text-neutral-600">
                    Pas de carte bancaire mentionnée = objection levée
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">
                    Preuve sociale discrète
                  </p>
                  <p className="text-neutral-700">
                    &quot;Trusted by 12M+ businesses&quot;
                  </p>
                  <p className="text-sm text-neutral-600">
                    Pas agressive, juste présente en bas de page
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl">
              <p className="font-bold mb-2 text-neutral-900">Résultat</p>
              <p className="text-neutral-700">
                14,2% de conversion selon leur rapport annuel 2023.
              </p>
              <p className="text-sm text-neutral-600 mt-2">
                <strong className="text-neutral-900">
                  Ce que tu peux copier
                </strong>{" "}
                : Formulaire 1 champ + illustration produit + preuve sociale
                chiffrée.
              </p>
            </div>
          </div>

          {/* Exemple #2 : HubSpot */}
          <div className="bg-white rounded-2xl p-6 border-2 border-neutral-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                2
              </span>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  HubSpot - Landing page démo B2B
                </h3>
                <p className="text-blue-600 font-bold">9,7% de conversion</p>
              </div>
            </div>

            {/* IMAGE PLACEHOLDER */}
            <div className="my-6 bg-neutral-100 rounded-xl p-8 text-center border-2 border-dashed border-neutral-300">
              <div className="text-neutral-400 mb-4">📸 IMAGE PLACEHOLDER</div>
              <p className="text-sm text-neutral-500">
                Screenshot annoté de la landing page HubSpot Schedule Demo
                <br />
                Annotations : Titre, vidéo, formulaire 5 champs, chatbot, logos
                clients
                <br />
                Dimensions recommandées : 1200x800px
                <br />
                Fichier : /public/images/example-hubspot-landing-page.jpg
              </p>
            </div>

            <p className="mb-4 text-neutral-700">
              <strong className="text-neutral-900">URL</strong> :
              hubspot.com/products/sales/schedule-demo
            </p>

            <h4 className="font-bold text-lg mb-3 text-neutral-900">
              Ce qui marche :
            </h4>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">
                    Titre problème/solution
                  </p>
                  <p className="text-neutral-700">
                    &quot;Close more deals, faster&quot;
                  </p>
                  <p className="text-sm text-neutral-600">
                    Répond directement à la douleur : &quot;Mes deals prennent
                    trop de temps&quot;
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">
                    Vidéo démo 60 secondes
                  </p>
                  <p className="text-neutral-700">Auto-play muté</p>
                  <p className="text-sm text-neutral-600">
                    Wistia : Vidéo sur landing page = +80% conversion. Durée
                    optimale : 45-90 secondes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">
                    Formulaire qualifiant
                  </p>
                  <p className="text-neutral-700">
                    5 champs (prénom, nom, email, entreprise, téléphone)
                  </p>
                  <p className="text-sm text-neutral-600">
                    B2B = formulaire long OK car filtre les prospects non
                    qualifiés. Leur taux reste à 9,7% malgré 5 champs (vs 3,1%
                    moyenne secteur)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">Chatbot visible</p>
                  <p className="text-neutral-700">
                    &quot;Questions ? Parle à un expert&quot;
                  </p>
                  <p className="text-sm text-neutral-600">
                    Drift : Chatbot sur landing page = +15% conversion
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">Logos clients</p>
                  <p className="text-neutral-700">
                    8 logos d&apos;entreprises connues (Spotify, Reddit, etc.)
                  </p>
                  <p className="text-sm text-neutral-600">
                    Nielsen : Logos augmentent confiance de 42%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl">
              <p className="font-bold mb-2 text-neutral-900">Résultat</p>
              <p className="text-neutral-700">
                9,7% selon étude de cas HubSpot 2024.
              </p>
              <p className="text-sm text-neutral-600 mt-2">
                <strong className="text-neutral-900">
                  Ce que tu peux copier
                </strong>{" "}
                : Vidéo courte + chatbot + logos clients.
              </p>
            </div>
          </div>

          {/* Exemple #3 : Shopify */}
          <div className="bg-white rounded-2xl p-6 border-2 border-neutral-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                3
              </span>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Shopify - Landing page e-commerce
                </h3>
                <p className="text-blue-600 font-bold">
                  11,3% de conversion
                </p>
              </div>
            </div>

            {/* IMAGE PLACEHOLDER */}
            <div className="my-6 bg-neutral-100 rounded-xl p-8 text-center border-2 border-dashed border-neutral-300">
              <div className="text-neutral-400 mb-4">📸 IMAGE PLACEHOLDER</div>
              <p className="text-sm text-neutral-500">
                Screenshot annoté de la landing page Shopify Free Trial
                <br />
                Annotations : Titre projection, urgence, témoignages chiffrés,
                section 3 étapes, CTA répété
                <br />
                Dimensions recommandées : 1200x800px
                <br />
                Fichier : /public/images/example-shopify-landing-page.jpg
              </p>
            </div>

            <p className="mb-4 text-neutral-700">
              <strong className="text-neutral-900">URL</strong> :
              shopify.com/free-trial
            </p>

            <h4 className="font-bold text-lg mb-3 text-neutral-900">
              Ce qui marche :
            </h4>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">
                    Urgence authentique
                  </p>
                  <p className="text-neutral-700">
                    &quot;14-day free trial. No credit card required.&quot;
                  </p>
                  <p className="text-sm text-neutral-600">
                    Lève 2 objections : durée limitée + pas de risque financier
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">Titre projection</p>
                  <p className="text-neutral-700">
                    &quot;Start selling online today&quot;
                  </p>
                  <p className="text-sm text-neutral-600">
                    Pas &quot;Créez votre boutique&quot; mais &quot;Commencez à
                    vendre&quot;. Différence subtile, impact énorme
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">
                    Témoignages avec chiffres
                  </p>
                  <p className="text-neutral-700">
                    &quot;I made $30K in my first month&quot;
                  </p>
                  <p className="text-sm text-neutral-600">
                    VWO : Témoignages avec résultats chiffrés = +34% conversion
                    vs témoignages vagues
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">
                    Section &quot;Comment ça marche&quot;
                  </p>
                  <p className="text-neutral-700">
                    3 étapes visuelles : 1. Créer ta boutique (5 min) → 2.
                    Ajouter tes produits → 3. Commencer à vendre
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">
                    CTA répété 4 fois
                  </p>
                  <p className="text-neutral-700">
                    En haut, après vidéo, après témoignages, en bas
                  </p>
                  <p className="text-sm text-neutral-600">
                    HubSpot : CTA répété augmente conversion de 18%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl">
              <p className="font-bold mb-2 text-neutral-900">Résultat</p>
              <p className="text-neutral-700">
                11,3% selon leur blog officiel.
              </p>
              <p className="text-sm text-neutral-600 mt-2">
                <strong className="text-neutral-900">
                  Ce que tu peux copier
                </strong>{" "}
                : Témoignages chiffrés + section &quot;Comment ça marche&quot; +
                CTA répété.
              </p>
            </div>
          </div>
        </div>

        {/* Synthèse */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mt-10">
          <h3 className="text-2xl font-bold mb-4 text-neutral-900">
            Ce que ces 3 landing pages ont en commun
          </h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-neutral-700">
                <strong className="text-neutral-900">
                  Titre centré sur le bénéfice client
                </strong>{" "}
                (pas sur la fonctionnalité)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-neutral-700">
                <strong className="text-neutral-900">
                  Preuve sociale chiffrée
                </strong>{" "}
                (logos, témoignages, stats)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-neutral-700">
                <strong className="text-neutral-900">Friction minimale</strong>{" "}
                (formulaire court ou essai gratuit)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-neutral-700">
                <strong className="text-neutral-900">Visuel du produit</strong>{" "}
                (capture d&apos;écran ou vidéo)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-neutral-700">
                <strong className="text-neutral-900">CTA ultra-clair</strong>{" "}
                (&quot;Sign Up Free&quot;, &quot;Schedule Demo&quot;,
                &quot;Start Free Trial&quot;)
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-neutral-600">
            <strong className="text-neutral-900">Résultat</strong> : Taux de
            conversion 3-5x supérieur à la moyenne (2-3%).
          </p>
        </div>
      </motion.div>
    </ArticleSection>
  );
}
