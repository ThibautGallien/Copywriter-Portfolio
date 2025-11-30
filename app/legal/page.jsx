export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full mb-6">
            <span className="text-sm font-medium text-neutral-600">
              Informations légales
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
            Mentions légales
          </h1>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">
                1
              </span>
              Informations générales
            </h2>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
              <p className="text-neutral-700 leading-relaxed mb-4">
                Le présent site est édité par :
              </p>
              <ul className="text-neutral-700 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-neutral-900">Nom :</strong> Thibaut
                    Gallien
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-neutral-900">Statut :</strong>{" "}
                    Micro-entrepreneur
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-neutral-900">Activité :</strong>{" "}
                    Copywriter freelance spécialisé en email marketing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-neutral-900">Email :</strong>{" "}
                    <a
                      href="mailto:hello@thibautgallien.com"
                      className="text-emerald-600 hover:text-emerald-500 transition-colors"
                    >
                      hello@thibautgallien.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">
                2
              </span>
              Hébergement
            </h2>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
              <p className="text-neutral-700 leading-relaxed">
                Ce site est hébergé par Vercel Inc.
                <br />
                340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">
                3
              </span>
              Protection des données
            </h2>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-6 border border-emerald-200">
              <p className="text-neutral-700 leading-relaxed mb-4">
                Les données personnelles collectées via les formulaires de
                contact et d&apos;inscription à la newsletter sont utilisées
                uniquement dans le cadre de la relation commerciale et ne sont
                jamais transmises à des tiers.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Conformément au RGPD, vous disposez d&apos;un droit
                d&apos;accès, de rectification et de suppression de vos données
                personnelles. Pour exercer ce droit, contactez-nous à
                l&apos;adresse email mentionnée ci-dessus.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">
                4
              </span>
              Cookies
            </h2>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
              <p className="text-neutral-700 leading-relaxed">
                Ce site utilise des cookies techniques nécessaires à son bon
                fonctionnement. Aucun cookie de tracking ou publicitaire
                n&apos;est utilisé.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200 text-center">
          <p className="text-neutral-600 mb-4">
            Une question sur ces mentions légales ?
          </p>
          <a
            href="mailto:hello@thibautgallien.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-500 transition-colors"
          >
            Contacte-moi
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
