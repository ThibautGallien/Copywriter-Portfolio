import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales - Thibaut Gallien Copywriter",
  description:
    "Mentions légales du site de Thibaut Gallien, copywriter spécialisé en email marketing.",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-8">
          Mentions légales
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#9B5DE5]">
              Informations générales
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Le présent site est édité par :
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>
                <strong>Nom :</strong> Thibaut Gallien
              </li>
              <li>
                <strong>Statut :</strong> Micro-entrepreneur
              </li>
              <li>
                <strong>Activité :</strong> Copywriter freelance spécialisé en
                email marketing
              </li>
              <li>
                <strong>Email :</strong> hello@thibautgallien.com
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#9B5DE5]">
              Hébergement
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Ce site est hébergé par Vercel Inc.
              <br />
              340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#9B5DE5]">
              Protection des données
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Les données personnelles collectées via les formulaires de contact
              et d'inscription à la newsletter sont utilisées uniquement dans le
              cadre de la relation commerciale et ne sont jamais transmises à
              des tiers.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Conformément au RGPD, vous disposez d'un droit d'accès, de
              rectification et de suppression de vos données personnelles. Pour
              exercer ce droit, contactez-nous à l'adresse email mentionnée
              ci-dessus.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#9B5DE5]">
              Cookies
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Ce site utilise des cookies techniques nécessaires à son bon
              fonctionnement. Aucun cookie de tracking ou publicitaire n'est
              utilisé.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
