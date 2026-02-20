"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("revealed"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function SeoPage() {
  const revealWhy = useReveal();
  const revealOffers = useReveal();
  const revealDetail = useReveal();
  const revealGuarantee = useReveal();
  const revealProcess = useReveal();
  const revealFaq = useReveal();

  return (
    <>
      {/* HERO */}
      <section className="dot-grid" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container-main">
          <Link
            href="/services"
            style={{ fontSize: 15, color: "var(--text-dim)", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32, transition: "color 0.2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Retour aux services
          </Link>

          <span className="mono" style={{ fontSize: 12, letterSpacing: "0.15em", color: "var(--accent-blue)", textTransform: "uppercase", marginBottom: 16, display: "block" }}>
            Programme Visibilite Locale
          </span>

          <h1 style={{ marginBottom: 16 }}>
            Sois trouve en premier sur Google
            <span className="gradient-text"> par les clients de ta ville</span>
          </h1>
          <p style={{ maxWidth: 600, fontSize: 19, lineHeight: 1.7, marginBottom: 16 }}>
            On met ton entreprise en premiere page Google pour que les clients de Cherbourg
            (et de ta zone) te trouvent avant tes concurrents. Plus de visibilite, plus de clients,
            plus de chiffre d&apos;affaires.
          </p>
          <p style={{ maxWidth: 560, fontSize: 17, lineHeight: 1.7, color: "var(--text-dim)", marginBottom: 36 }}>
            Le SEO local, c&apos;est l&apos;ensemble des techniques pour faire apparaitre ton business
            en haut de Google quand quelqu&apos;un cherche un service dans ta zone. C&apos;est le levier
            le plus rentable pour les commercants et artisans.
          </p>

          <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div className="card" style={{ padding: "24px 32px" }}>
              <span style={{ fontSize: 14, color: "var(--text-dim)", marginBottom: 4, display: "block" }}>A partir de</span>
              <span className="price-tag gradient-text">300&euro;</span>
              <span className="price-period">/mois</span>
            </div>
            <Link href="https://calendly.com/hello-thibautgallien/30min" className="btn-primary" style={{ marginTop: 8 }}>
              Reserver un diagnostic gratuit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* POURQUOI LE SEO LOCAL */}
      <section ref={revealWhy} className="reveal section-alt" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">01. Pourquoi c&apos;est important</span>
          <h2 style={{ marginBottom: 16 }}>
            46% des recherches Google ont une
            <span className="gradient-text"> intention locale</span>
          </h2>
          <p style={{ maxWidth: 600, fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
            Presque la moitie des gens qui utilisent Google cherchent quelque chose pres de chez eux.
            Et 76% de ces personnes visitent un commerce dans les 24h. Si tu n&apos;apparais pas,
            c&apos;est ton concurrent qui recupere le client.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
            {[
              { stat: "46%", label: "des recherches Google sont locales" },
              { stat: "76%", label: "visitent un commerce dans les 24h" },
              { stat: "28%", label: "de ces recherches menent a un achat" },
              { stat: "0\u20AC", label: "de cout par clic (contrairement aux pubs)" },
            ].map((item, i) => (
              <div key={i} className="card card-accent-blue" style={{ padding: 24, textAlign: "center" }}>
                <div className="stat-value" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: 6 }}>{item.stat}</div>
                <p style={{ fontSize: 15 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* LES 2 OFFRES */}
      <section ref={revealOffers} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">02. Deux formules</span>
          <h2 style={{ marginBottom: 16 }}>
            Choisis la formule adaptee a
            <span className="gradient-text"> ton budget</span>
          </h2>
          <p style={{ maxWidth: 560, marginBottom: 48, fontSize: 17, lineHeight: 1.7 }}>
            Deux niveaux d&apos;accompagnement selon tes moyens et tes objectifs.
            Tu peux commencer par la version allegee et monter en puissance quand les resultats arrivent.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
            {/* Offre 1 — 500€ */}
            <div className="card card-accent-blue" style={{ padding: 32, position: "relative" }}>
              <div style={{ position: "absolute", top: -12, left: 24 }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#fff",
                  textTransform: "uppercase", padding: "4px 12px",
                  background: "linear-gradient(135deg, var(--accent-blue), var(--accent-violet))",
                  borderRadius: 4,
                }}>
                  Recommande
                </span>
              </div>
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--accent-blue)", textTransform: "uppercase", marginBottom: 20, display: "block", marginTop: 8 }}>
                Programme Visibilite Locale
              </span>
              <h3 style={{ marginBottom: 8 }}>L&apos;accompagnement complet</h3>
              <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 16 }}>
                Pour les commercants et artisans de Cherbourg qui veulent dominer Google
                dans leur zone. Accompagnement complet avec garantie de resultats.
              </p>

              <div style={{ marginBottom: 24 }}>
                <span className="price-tag gradient-text">500&euro;</span>
                <span className="price-period">/mois</span>
              </div>

              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 10 }}>Ce que je fais chaque mois (8-10h) :</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {[
                  { title: "Optimisation des pages cles", desc: "2-3 pages optimisees par mois pour cibler les requetes de ta zone" },
                  { title: "1 article de blog local", desc: "Cible sur une requete locale pour attirer du trafic qualifie" },
                  { title: "2-3 backlinks locaux", desc: "Liens de qualite depuis des sites locaux pour renforcer ton autorite" },
                  { title: "Google Business Profile", desc: "Optimisation et mise a jour continue de ta fiche Google" },
                  { title: "Surveillance technique", desc: "Monitoring du site pour detecter et corriger les problemes" },
                  { title: "Dashboard Looker Studio", desc: "Tableau de bord en temps reel avec tes metrics" },
                  { title: "Appel mensuel de 15 min", desc: "Je te montre les resultats et les prochaines etapes" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" style={{ marginTop: 3, flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <div>
                      <span style={{ fontSize: 16, color: "var(--text)", fontWeight: 500 }}>{item.title}</span>
                      <span style={{ fontSize: 15, color: "var(--text-dim)" }}> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: "12px 16px", background: "rgba(59, 130, 246, 0.06)", borderRadius: 6, marginBottom: 24, border: "1px solid rgba(59, 130, 246, 0.1)" }}>
                <p style={{ fontSize: 14, color: "var(--accent-blue)", fontWeight: 600, marginBottom: 4 }}>Garantie 90 jours</p>
                <p style={{ fontSize: 14, color: "var(--text-dim)" }}>
                  Si aucune amelioration mesurable en 90 jours, le mois suivant est offert.
                </p>
              </div>

              <Link href="https://calendly.com/hello-thibautgallien/30min" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Reserver un diagnostic gratuit
              </Link>
            </div>

            {/* Offre 2 — 300€ */}
            <div className="card card-accent-violet" style={{ padding: 32, borderColor: "rgba(139, 92, 246, 0.2)" }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--accent-violet)", textTransform: "uppercase", marginBottom: 20, display: "block" }}>
                Version allegee
              </span>
              <h3 style={{ marginBottom: 8 }}>L&apos;essentiel pour demarrer</h3>
              <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 16 }}>
                Pour les petits budgets ou les premiers clients qui veulent tester
                le SEO local avant de s&apos;engager sur la formule complete.
                Ideal comme porte d&apos;entree.
              </p>

              <div style={{ marginBottom: 24 }}>
                <span className="price-tag gradient-text">300&euro;</span>
                <span className="price-period">/mois</span>
              </div>

              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 10 }}>Ce que tu recois chaque mois (5-6h) :</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {[
                  { title: "Google Business Profile", desc: "Optimisation prioritaire de ta fiche Google (le levier n\u00B01)" },
                  { title: "2-3 pages optimisees", desc: "Optimisation SEO des pages cles de ton site" },
                  { title: "1 article par mois", desc: "Contenu optimise pour tes mots-cles locaux" },
                  { title: "Surveillance technique", desc: "Monitoring basique pour eviter les problemes critiques" },
                  { title: "Dashboard Looker Studio", desc: "Tableau de bord avec tes metrics essentielles" },
                  { title: "Point mensuel rapide", desc: "Un debriefing pour voir l'evolution" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-violet)" strokeWidth="2.5" style={{ marginTop: 3, flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <div>
                      <span style={{ fontSize: 16, color: "var(--text)", fontWeight: 500 }}>{item.title}</span>
                      <span style={{ fontSize: 15, color: "var(--text-dim)" }}> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: 14, color: "var(--text-dim)", marginBottom: 24, fontStyle: "italic", padding: "12px 16px", background: "rgba(139, 92, 246, 0.06)", borderRadius: 6, border: "1px solid rgba(139, 92, 246, 0.1)" }}>
                Possibilite de monter a 500&euro;/mois apres les premiers resultats.
              </p>

              <Link href="https://calendly.com/hello-thibautgallien/30min" className="btn-secondary" style={{ width: "100%", justifyContent: "center", borderColor: "rgba(139, 92, 246, 0.3)" }}>
                Reserver un diagnostic gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CE QUE JE FAIS CONCRETEMENT */}
      <section ref={revealDetail} className="reveal section-alt" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">03. En detail</span>
          <h2 style={{ marginBottom: 16 }}>
            Ce que je fais concretement,
            <span className="gradient-text"> mois apres mois</span>
          </h2>
          <p style={{ maxWidth: 600, fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
            Pas de boite noire. Voici exactement ce sur quoi je travaille pour faire monter
            ton business dans les resultats Google.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: 700 }}>
            {[
              {
                title: "Optimisation Google Business Profile",
                desc: "Ta fiche Google est souvent le premier contact qu'un client a avec ton business. Je l'optimise a fond : description, categories, photos, posts reguliers, attributs. L'objectif : apparaitre dans le pack local (les 3 premiers resultats avec la carte).",
              },
              {
                title: "Optimisation des pages de ton site",
                desc: "Je travaille sur les pages cles de ton site pour qu'elles soient bien comprises par Google : balises, structure, contenu, mots-cles locaux. Chaque mois, 2-3 pages sont optimisees ou creees.",
              },
              {
                title: "Contenu local (articles de blog)",
                desc: "Je cree des articles cibles sur les requetes que tes clients tapent. Par exemple : \"plombier urgence Cherbourg\", \"meilleur restaurant fruits de mer Cherbourg\". Chaque article est une porte d'entree vers ton site.",
              },
              {
                title: "Backlinks locaux",
                desc: "Les liens depuis d'autres sites locaux renforcent ta credibilite aux yeux de Google. Je construis 2-3 liens de qualite par mois depuis des sites pertinents de ta zone.",
              },
              {
                title: "Surveillance technique",
                desc: "Je surveille la sante technique de ton site : vitesse, erreurs, indexation. Si quelque chose casse, je le detecte et je le corrige avant que ca impacte tes positions.",
              },
              {
                title: "Suivi et reporting",
                desc: "Dashboard Looker Studio en temps reel + appel mensuel. Tu vois exactement ou tu en es : positions Google, trafic, appels recus, evolution mois par mois.",
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: "24px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", marginTop: 2, flexShrink: 0 }}>0{i + 1}</span>
                  <div>
                    <h4 style={{ marginBottom: 6, fontSize: 16 }}>{item.title}</h4>
                    <p style={{ fontSize: 16, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* GARANTIE */}
      <section ref={revealGuarantee} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">04. Ma garantie</span>
          <h2 style={{ marginBottom: 16 }}>
            Des resultats ou c&apos;est
            <span className="gradient-text"> offert</span>
          </h2>

          <div className="card card-accent-blue" style={{ padding: 40, maxWidth: 640 }}>
            <h3 style={{ marginBottom: 16, fontSize: 22 }}>Garantie 90 jours</h3>
            <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 24 }}>
              Si au bout de 90 jours de collaboration, il n&apos;y a aucune amelioration mesurable
              sur tes positions Google, ton trafic ou ta fiche Google Business Profile,
              le mois suivant est offert.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-dim)", marginBottom: 24 }}>
              Je prends ce risque parce que je sais que le SEO local fonctionne.
              Un commercant bien positionne sur Google dans sa ville, ca genere des clients.
              C&apos;est aussi simple que ca.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Amelioration des positions sur tes mots-cles locaux",
                "Augmentation du trafic organique vers ton site",
                "Meilleure visibilite de ta fiche Google Business Profile",
                "Plus d'appels et de demandes de direction via Google",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span style={{ fontSize: 16, color: "var(--text-muted)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* PROCESS / FUNNEL */}
      <section ref={revealProcess} className="reveal section-alt" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">05. Comment ca demarre</span>
          <h2 style={{ marginBottom: 48 }}>
            3 etapes pour
            <span className="gradient-text"> commencer</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: 700 }}>
            {[
              {
                step: "01",
                title: "Mini-audit gratuit",
                desc: "Je fais un diagnostic rapide de ta presence en ligne : ton site, ta fiche Google, tes positions actuelles. Pour les commercants de Cherbourg, je peux passer directement avec un document imprime.",
              },
              {
                step: "02",
                title: "Diagnostic gratuit de 30 min",
                desc: "Si le mini-audit t'interesse, on prend 30 minutes ensemble pour analyser ta situation en detail, tes objectifs, et ce qu'on peut faire concretement. Gratuit, sans engagement.",
              },
              {
                step: "03",
                title: "Demarrage avec garantie 90 jours",
                desc: "On lance le programme. Tu recois ton dashboard, tes premieres optimisations demarrent, et tu vois les resultats arriver progressivement. Si rien ne bouge en 90 jours, le mois suivant est offert.",
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: "24px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span className="mono" style={{ fontSize: 15, color: "var(--accent-blue)", letterSpacing: "0.1em", marginTop: 2, flexShrink: 0 }}>{item.step}</span>
                  <div>
                    <h4 style={{ marginBottom: 6, fontSize: 16 }}>{item.title}</h4>
                    <p style={{ fontSize: 16, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* POUR QUI */}
      <section className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">06. Pour qui</span>
          <h2 style={{ marginBottom: 16 }}>
            C&apos;est fait pour toi si...
          </h2>
          <p style={{ maxWidth: 560, fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>
            Le Programme Visibilite Locale est concu pour les commercants et artisans
            qui ont une zone de chalandise et des clients qui les cherchent sur Google.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {[
              "Commercants de Cherbourg et alentours",
              "Artisans (plombier, electricien, menuisier...)",
              "Restaurants, bars, cafes",
              "Salons de coiffure, esthetique, bien-etre",
              "Cabinets medicaux et para-medicaux",
              "Coachs et consultants locaux",
              "Garages et concessionnaires auto",
              "Tout business avec une clientele locale",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 0" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span style={{ fontSize: 16, color: "var(--text-muted)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ */}
      <section ref={revealFaq} className="reveal section-alt" style={{ padding: "80px 0" }}>
        <div className="container-main" style={{ maxWidth: 700 }}>
          <span className="section-number">07. Questions frequentes</span>
          <h2 style={{ marginBottom: 48 }}>FAQ</h2>

          {[
            {
              q: "Combien de temps avant de voir des resultats ?",
              a: "Les premieres ameliorations sur Google Business Profile sont visibles en 2-4 semaines (meilleur classement dans le pack local, plus d'affichages). Pour le positionnement organique du site, compte 2-3 mois pour des resultats significatifs. Et si rien ne bouge en 90 jours, le mois suivant est offert.",
            },
            {
              q: "Pourquoi 500\u20AC/mois ? C'est quoi le ROI ?",
              a: "Un seul nouveau client par mois suffit generalement a rentabiliser l'investissement. Si ton panier moyen est de 100\u20AC+, tu es rentable des le 5eme client ramene par Google. Et contrairement a la pub, le trafic SEO ne s'arrete pas quand tu arretes de payer.",
            },
            {
              q: "Quelle est la difference entre l'offre a 300\u20AC et celle a 500\u20AC ?",
              a: "L'offre a 300\u20AC est une version allegee : l'essentiel du SEO local (Google Business Profile, quelques pages optimisees, 1 article). L'offre a 500\u20AC est l'accompagnement complet avec backlinks, surveillance technique poussee et plus de contenu. Tu peux commencer a 300\u20AC et monter a 500\u20AC apres les premiers resultats.",
            },
            {
              q: "Je dois m'engager combien de temps ?",
              a: "Il n'y a pas d'engagement de duree. Cela dit, le SEO est cumulatif : les clients qui restent 6+ mois voient les meilleurs resultats. Je recommande au minimum 3 mois pour juger des resultats. Et rappelle-toi : garantie 90 jours.",
            },
            {
              q: "Tu t'occupes de tout ou je dois faire des choses ?",
              a: "Je fais 95% du boulot. Je te demanderai juste de valider le contenu (tu connais ton metier mieux que moi) et de m'envoyer des photos de temps en temps. Compte 15-30 minutes max de ton temps par mois.",
            },
            {
              q: "C'est quoi la difference avec Google Ads ?",
              a: "Google Ads, tu paies pour chaque clic. Le jour ou tu arretes de payer, tu disparais. Le SEO construit ta visibilite durablement : une fois positionne, le trafic arrive gratuitement. L'ideal est de combiner les deux, mais le SEO est l'investissement le plus rentable a moyen terme.",
            },
            {
              q: "Tu travailles uniquement a Cherbourg ?",
              a: "Ma specialite c'est Cherbourg et le Cotentin, mais le SEO local fonctionne partout. Si tu es commercant ou artisan dans une autre ville, on peut en discuter lors du diagnostic gratuit.",
            },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "24px 0" }}>
              <h4 style={{ marginBottom: 8, fontSize: 18 }}>{faq.q}</h4>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* CTA */}
      <section className="section-cta" style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-main" style={{ maxWidth: 600 }}>
          <h2 style={{ marginBottom: 16 }}>
            Pret a etre trouve en premier
            <span className="gradient-text"> sur Google</span> ?
          </h2>
          <p style={{ marginBottom: 12, fontSize: 17 }}>
            Diagnostic gratuit de 30 minutes.
          </p>
          <p style={{ marginBottom: 32, fontSize: 17, color: "var(--text-dim)" }}>
            Je regarde ta fiche Google, tes positions actuelles, et je te dis honnetement
            ce qui est possible pour ton business. Gratuit, sans engagement.
            Si ca matche, on demarre avec la garantie 90 jours.
          </p>
          <Link href="https://calendly.com/hello-thibautgallien/30min" className="btn-primary">
            Reserver un diagnostic gratuit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
