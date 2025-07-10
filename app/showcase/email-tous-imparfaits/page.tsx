import { Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function EmailShowcase() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* En-tête explicatif */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-white rounded-lg p-6 border-l-4 border-[#9B5DE5] shadow-sm">
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-[#9B5DE5] mt-1" />
            <div>
              <h1 className="text-xl font-bold font-space-grotesk text-gray-900 mb-2">
                Email Marketing - Cas d'étude : Tous Imparfaits
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Bonjour à toute l'équipe d'<strong>Ici Japon Corp</strong> 👋
                <br />
                <br />
                Vous trouverez ci-dessous l’email que j’avais initialement conçu
                dans Klaviyo pour le concours des 4 ans de Tous Imparfaits.
                <br />
                <br />
                <strong>L’objectif :</strong> maximiser l’engagement et
                transformer un concours en levier de conversion. J’ai choisi de
                combiner deux leviers forts : l’émotion de l’anniversaire et
                l’aspiration d’un voyage au Japon. Ne pouvant pas partager le
                design directement via Klaviyo, j’ai reproduit le rendu final
                ici, sur cette page.
                <br />
                <br />
                <strong>Petit disclaimer :</strong> certaines images sont
                placeholders. N’ayant pas accès à des mockups plats de vos
                produits, j’ai fait avec les visuels disponibles publiquement.
                L’intention ici est de montrer ce qu’il est possible de faire,
                pas de juger l’esthétique du prototype.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Simulation de l'interface email */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header interface email */}
          <div className="bg-gray-50 border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">
                  Tous Imparfaits
                </div>
                <div className="text-sm text-gray-600">
                  hello@tousimparfaits.com
                </div>
              </div>
              <div className="text-sm text-gray-500">📅 Aujourd'hui, 10:30</div>
            </div>
            <div className="mt-3">
              <div className="text-lg font-semibold text-gray-900">
                4 ans avec vous… et un VOYAGE AU JAPON à gagner
              </div>
            </div>
          </div>

          {/* Contenu de l'email */}
          <div
            className="px-8 py-8"
            style={{
              backgroundColor: "#ffffff",
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            {/* Header du mail */}
            <div className="text-center mb-8">
              <div className="mb-6">
                <img
                  src="/Tous-Imparfaits-logo.webp"
                  alt="Tous Imparfaits Logo"
                  className="mx-auto h-12"
                />
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-8 text-sm font-medium text-gray-700 mb-8">
                <a
                  href="https://tousimparfaits.com/collections/ti-textile"
                  className="hover:text-[#B31E2C] transition-colors"
                >
                  Produits
                </a>
                <a
                  href="https://tousimparfaits.com/collections/ti-tous-les-produits"
                  className="hover:text-[#B31E2C] transition-colors"
                >
                  Collections
                </a>
                <a
                  href="https://tousimparfaits.com/collections/ti-promotions"
                  className="hover:text-[#B31E2C] transition-colors"
                >
                  Promotions
                </a>
                <a
                  href="https://tousimparfaits.com/pages/tous-imparfaits-x-crunchyroll-x-spyxfamily"
                  className="hover:text-[#B31E2C] transition-colors"
                >
                  Collab
                </a>
              </div>
            </div>

            {/* Titre principal */}
            <h1 className="text-center font-black text-3xl md:text-4xl leading-tight mb-6 text-black">
              4 ans avec vous…
              <br />
              et un <span className="text-[#B31E2C]">VOYAGE AU JAPON</span> à
              gagner
            </h1>

            {/* Corps du message */}
            <div className="font-sans text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto mb-8">
              <div className="mb-4">
                <strong>2 semaines au Japon pour 2 personnes</strong>
                <br />
                Hébergement dans une maison à <strong>Ici Japon Village</strong>
                <br />
                Dates flexibles – vous choisissez en <strong>2025</strong>
              </div>

              <div className="font-bold text-xl text-[#B31E2C] mt-6 mb-3">
                Comment participer :
              </div>

              <div className="space-y-2 mb-4">
                <div>
                  1 sticker = <strong>1 chance</strong>
                </div>
                <div>
                  1 totebag = <strong>2 chances</strong>
                </div>
                <div>
                  1 t-shirt = <strong>3 chances</strong>
                </div>
                <div>
                  Pack complet = <strong>10 chances</strong>
                </div>
              </div>

              <div className="italic mt-4">
                Plus vous achetez, plus vous multipliez vos chances de partir au
                Japon
              </div>
            </div>

            {/* Premier CTA */}
            <div className="text-center mb-8">
              <a
                href="https://tousimparfaits.com/"
                className="inline-block bg-[#B31E2C] text-white px-7 py-4 font-bold text-lg rounded hover:bg-[#9A1A24] transition-colors"
              >
                PARTICIPER AU CONCOURS
              </a>
            </div>

            {/* Images produits 2x2 */}
            <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
              <a
                href="https://tousimparfaits.com/collections/ti-stickers"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
              >
                <img
                  src="/Stickers.png"
                  alt="Sticker Ici Japon"
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>

              <a
                href="https://tousimparfaits.com/collections/ti-tee-shirts"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
              >
                <img
                  src="/t-shirt.png"
                  alt="T-shirt Ici Japon"
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>

              <a
                href="https://tousimparfaits.com/products/tote-bag-komainu"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
              >
                <img
                  src="/Tote.png"
                  alt="Totebag Ici Japon"
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>

              <a
                href="https://tousimparfaits.com/products/pack-mystere-fukubukuro"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
              >
                <img
                  src="/Pack.png"
                  alt="Pack complet"
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>
            </div>

            {/* Deuxième CTA */}
            <div className="text-center mb-8">
              <a
                href="https://tousimparfaits.com/"
                className="inline-block bg-[#B31E2C] text-white px-7 py-4 font-bold text-lg rounded hover:bg-[#9A1A24] transition-colors"
              >
                PARTICIPER AU CONCOURS
              </a>
            </div>

            {/* Message de remerciement */}
            <div className="text-center text-gray-800 leading-relaxed mt-8">
              ❤️ <strong>Merci pour ces 4 années incroyables,</strong>
              <br /> L'équipe Tous Imparfaits
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500 space-y-2">
              <div>
                <a
                  href="https://www.linkedin.com/in/thibaut-gallien/"
                  className="hover:text-gray-700 transition-colors"
                >
                  Se désinscrire
                </a>
              </div>
              <div className="leading-relaxed">
                INDIEVIDUALS - ICI JAPON CORP
                <br />
                26 AVENUE CHRISTIAN DOPPLER - BAT D5
                <br />
                77700, BAILLY-ROMAINVILLIERS, FRANCE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analyse et call-to-action */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#B31E2C]">
          <h2 className="text-xl font-bold font-space-grotesk text-gray-900 mb-6">
            🎯 Stratégie et impact potentiel
          </h2>

          <div className="text-gray-700 leading-relaxed mb-6">
            <p className="mb-4">
              Cet email n'est qu'un aperçu de ce qu'on peut mettre en place pour
              transformer votre base clients en moteur de croissance. Pas avec
              des promos agressives ou du spam — mais avec des messages utiles,
              cohérents avec votre univers, et envoyés au bon moment.
            </p>

            <p className="mb-6">
              L'idée, c'est d'envoyer des mails qui ressemblent à votre marque,
              qui parlent vraiment à votre communauté, et qui donnent envie
              d'acheter sans jamais forcer.
            </p>

            <p className="mb-4 font-medium">
              Avec les bonnes séquences et un peu d'organisation, vous pouvez :
            </p>

            <ul className="space-y-2 mb-6 ml-4">
              <li>• Vendre plus, sans sortir plus de produits</li>
              <li>• Faire revenir les clients, sans forcer les remises</li>
              <li>• Renforcer votre image, sans dépendre des algorithmes</li>
            </ul>

            <p className="mb-4">
              Et tout ça, avec des emails que vos abonnés auront envie d'ouvrir.
            </p>

            <p className="mb-4 font-medium">
              Voici quelques séquences qu'on peut mettre en place ensemble :
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <ul className="space-y-2 mb-6 ml-4">
                <li>
                  • <strong>Bienvenue</strong> : transformer un abonné en client
                </li>
                <li>
                  • <strong>Abandon de panier</strong> : récupérer les ventes
                  perdues
                </li>
                <li>
                  • <strong>Post-achat</strong> : faire revenir un client
                  existant
                </li>
                <li>
                  • <strong>Réactivation</strong> : relancer ceux qui n'ont pas
                  commandé depuis longtemps
                </li>
                <li>
                  • <strong>Lancement de collection</strong> : ajouter de la
                  hype et teaser les prochaines collections
                </li>
                <li>
                  • <strong>Anniversaire client</strong> : renforcer la fidélité
                </li>
              </ul>
            </div>

            <p className="mb-6">
              Et ce n'est qu'un début. On peut bâtir une vraie stratégie long
              terme — efficace, rentable, et 100 % respectueuse de votre image.
            </p>

            <div className="bg-[#B31E2C]/5 border-l-4 border-[#B31E2C] p-4 mb-6 rounded-r-lg">
              <p className="mb-2">
                Pour vous donner un ordre de grandeur : une simple séquence
                d'abandon de panier rapporte en moyenne{" "}
                <strong className="text-[#B31E2C]">
                  3,65 $ par destinataire
                </strong>
                , et{" "}
                <strong className="text-[#B31E2C]">
                  70 % des paniers sont abandonnés
                </strong>
                .
              </p>
              <p className="text-sm italic">
                C'est donc une opportunité directe de récupérer du chiffre...
                que vous avez déjà payé en acquisition.
              </p>
            </div>

            <p className="mb-6">
              Si vous voyez le potentiel, je vous propose qu'on en discute. Je
              vous montre ce que ça pourrait donner concrètement, et si ça vous
              parle, on passe à l'action.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="https://calendly.com/hello-thibautgallien/30min"
              target="_blank"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-lg font-medium"
            >
              Réserver un appel
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
