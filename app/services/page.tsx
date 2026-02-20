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

export default function ServicesPage() {
  const revealSeo = useReveal();
  const revealSite = useReveal();
  const revealAuto = useReveal();
  const revealHow = useReveal();
  const revealCta = useReveal();

  return (
    <>
      {/* HERO */}
      <section className="dot-grid" style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div className="container-main">
          <span className="section-number">Services</span>
          <h1 style={{ marginBottom: 16 }}>
            Des clients en plus,
            <span className="gradient-text"> concretement</span>
          </h1>
          <p style={{ maxWidth: 600, lineHeight: 1.7, marginBottom: 16 }}>
            J&apos;aide les commercants, artisans et entrepreneurs a etre trouves sur Google,
            a attirer des clients qualifies et a developper leur chiffre d&apos;affaires en ligne.
            Pas de bullshit, pas de buzzwords — des actions concretes et des resultats mesurables.
          </p>
          <p style={{ maxWidth: 560, fontSize: 16, color: "var(--text-dim)" }}>
            Quatre offres adaptees a ton besoin et ton budget. Du SEO local au systeme d&apos;acquisition complet.
          </p>
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* SERVICE 1 & 2 : SEO LOCAL */}
      <section ref={revealSeo} className="reveal section-alt" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">01. Visibilite locale (SEO)</span>
          <h2 style={{ marginBottom: 16 }}>
            Etre en premiere page Google
            <span className="gradient-text"> dans ta ville</span>
          </h2>
          <p style={{ maxWidth: 600, lineHeight: 1.7, marginBottom: 16 }}>
            Quand quelqu&apos;un tape &quot;plombier Cherbourg&quot;, &quot;restaurant Cherbourg&quot; ou &quot;masseur Cherbourg&quot;
            sur Google, est-ce que ton entreprise apparait ? Si la reponse est non, tu laisses des clients
            a tes concurrents. Chaque jour.
          </p>
          <p style={{ maxWidth: 600, fontSize: 16, lineHeight: 1.7, marginBottom: 40, color: "var(--text-dim)" }}>
            Je mets ton entreprise en premiere page Google pour que les clients de ta zone te trouvent
            avant tes concurrents. Optimisation de ton site, de ta fiche Google, creation de contenu
            et de liens locaux — tout ce qu&apos;il faut pour dominer les resultats de recherche.
          </p>

          {/* Two offers side by side */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 20,
              marginBottom: 40,
            }}
          >
            {/* Programme Visibilite Locale — 500€ */}
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
              <span
                style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "var(--accent-blue)", textTransform: "uppercase", marginBottom: 20, display: "inline-block", padding: "4px 12px", background: "rgba(59, 130, 246, 0.1)", borderRadius: 4, marginTop: 8 }}
              >
                Programme Visibilite Locale
              </span>
              <h3 style={{ marginBottom: 8, fontSize: 19 }}>Dominer Google dans ta ville</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 16, color: "var(--text-dim)" }}>
                Pour les commercants et artisans qui veulent que les clients de leur zone les trouvent
                en premier sur Google. Accompagnement complet, resultats mesurables.
              </p>

              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 10 }}>Ce que tu recois chaque mois :</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
                {[
                  "Optimisation de 2-3 pages cles de ton site",
                  "1 article de blog cible sur une requete locale",
                  "2-3 backlinks locaux de qualite",
                  "Optimisation et mise a jour Google Business Profile",
                  "Surveillance technique du site",
                  "Tableau de bord Looker Studio en temps reel",
                  "Appel de 15 min pour montrer les resultats",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" style={{ marginTop: 4, flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span style={{ fontSize: 15, color: "var(--text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ padding: "12px 16px", background: "rgba(59, 130, 246, 0.06)", borderRadius: 6, marginBottom: 20, border: "1px solid rgba(59, 130, 246, 0.1)" }}>
                <p style={{ fontSize: 14, color: "var(--accent-blue)", fontWeight: 600, marginBottom: 4 }}>Garantie 90 jours</p>
                <p style={{ fontSize: 14, color: "var(--text-dim)" }}>
                  Si aucune amelioration mesurable en 90 jours, le mois suivant est offert.
                </p>
              </div>

              <div style={{ marginBottom: 20 }}>
                <span className="price-tag gradient-text">500&euro;</span>
                <span className="price-period">/mois</span>
              </div>

              <Link href="/services/seo" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Voir le detail de l&apos;offre
              </Link>
            </div>

            {/* Programme Visibilite Locale — version allegee 300€ */}
            <div className="card card-accent-violet" style={{ padding: 32, borderColor: "rgba(139, 92, 246, 0.15)" }}>
              <span
                style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "var(--accent-violet)", textTransform: "uppercase", marginBottom: 20, display: "inline-block", padding: "4px 12px", background: "rgba(139, 92, 246, 0.1)", borderRadius: 4 }}
              >
                Version allegee
              </span>
              <h3 style={{ marginBottom: 8, fontSize: 19 }}>L&apos;essentiel pour demarrer</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 16, color: "var(--text-dim)" }}>
                Pour les petits budgets ou ceux qui veulent tester avant de s&apos;engager.
                L&apos;essentiel du SEO local pour commencer a etre visible.
              </p>

              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 10 }}>Ce que tu recois chaque mois :</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
                {[
                  "Optimisation Google Business Profile (priorite n°1)",
                  "2-3 pages optimisees sur ton site",
                  "1 article de blog par mois",
                  "Surveillance technique basique",
                  "Tableau de bord Looker Studio",
                  "Point mensuel rapide",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-violet)" strokeWidth="2.5" style={{ marginTop: 4, flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span style={{ fontSize: 15, color: "var(--text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: 14, color: "var(--text-dim)", marginBottom: 20, fontStyle: "italic" }}>
                Ideal comme porte d&apos;entree. Possibilite de monter a 500&euro;/mois apres les premiers resultats.
              </p>

              <div style={{ marginBottom: 20 }}>
                <span className="price-tag gradient-text">300&euro;</span>
                <span className="price-period">/mois</span>
              </div>

              <Link href="/services/seo" className="btn-secondary" style={{ width: "100%", justifyContent: "center", borderColor: "rgba(139, 92, 246, 0.3)" }}>
                Voir le detail de l&apos;offre
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* SERVICE 3 : SITE + SEO + EMAIL */}
      <section ref={revealSite} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">02. Site + SEO + Email</span>
          <h2 style={{ marginBottom: 16 }}>
            Un systeme d&apos;acquisition
            <span className="gradient-text"> complet</span>
          </h2>
          <p style={{ maxWidth: 600, lineHeight: 1.7, marginBottom: 16 }}>
            Tu es entrepreneur en ligne et tu veux un site qui attire du trafic, qui convertit
            et qui transforme tes visiteurs en clients ? Ce package est fait pour toi.
          </p>
          <p style={{ maxWidth: 600, fontSize: 16, lineHeight: 1.7, marginBottom: 40, color: "var(--text-dim)" }}>
            Je cree ton site optimise pour Google, je t&apos;amene du trafic qualifie,
            et je transforme ces visiteurs en prospects chauds grace a une newsletter hebdomadaire.
          </p>

          <div className="card card-accent-blue" style={{ padding: 32, maxWidth: 700 }}>
            {/* One-shot */}
            <div style={{ marginBottom: 32 }}>
              <span style={{
                fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "var(--accent-blue)",
                textTransform: "uppercase", marginBottom: 16, display: "inline-block",
                padding: "4px 12px", background: "rgba(59, 130, 246, 0.1)", borderRadius: 4,
              }}>
                Mise en place (one-shot)
              </span>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontSize: 16, color: "var(--text-muted)" }}>Creation du site (WordPress Astra ou React)</span>
                  <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>2000-2500&euro;</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontSize: 16, color: "var(--text-muted)" }}>Setup email (outil + formulaire + sequence de bienvenue)</span>
                  <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>500&euro;</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0" }}>
                  <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>Total one-shot</span>
                  <span className="gradient-text" style={{ fontSize: 20, fontWeight: 700 }}>2500-3000&euro;</span>
                </div>
              </div>
              <p style={{ fontSize: 14, color: "var(--text-dim)" }}>
                Paiement en 2 fois : 50% au demarrage, 50% a la livraison.
              </p>
            </div>

            {/* Recurrent */}
            <div>
              <span style={{
                fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "var(--accent-violet)",
                textTransform: "uppercase", marginBottom: 16, display: "inline-block",
                padding: "4px 12px", background: "rgba(139, 92, 246, 0.1)", borderRadius: 4,
              }}>
                Accompagnement mensuel
              </span>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontSize: 16, color: "var(--text-muted)" }}>SEO mensuel</span>
                  <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>350&euro;/mois</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontSize: 16, color: "var(--text-muted)" }}>Newsletter hebdomadaire (4 emails/mois)</span>
                  <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>250&euro;/mois</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0" }}>
                  <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>Total recurrent</span>
                  <span className="gradient-text" style={{ fontSize: 20, fontWeight: 700 }}>600&euro;/mois</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <Link href="/contact" className="btn-primary">
                Discuter de mon projet
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* SERVICE 4 : AUTOMATIONS */}
      <section ref={revealAuto} className="reveal section-alt" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">03. Automations</span>
          <h2 style={{ marginBottom: 16 }}>
            Automatiser ton administratif,
            <span className="gradient-text"> une bonne fois pour toutes</span>
          </h2>
          <p style={{ maxWidth: 600, lineHeight: 1.7, marginBottom: 16 }}>
            Tu passes des heures sur des taches repetitives ? Devis, factures, relances, saisie de donnees...
            J&apos;automatise tes process pour que tu te concentres sur ce qui rapporte.
          </p>
          <p style={{ maxWidth: 600, fontSize: 16, lineHeight: 1.7, marginBottom: 40, color: "var(--text-dim)" }}>
            Prestation one-shot : je fais, je livre, c&apos;est termine. Pas d&apos;abonnement.
          </p>

          <div className="card card-accent-green" style={{ padding: 32, maxWidth: 640 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 14 }}>Exemples d&apos;automations :</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  title: "Devis & facturation automatises",
                  desc: "Generation automatique de devis et factures depuis tes outils existants.",
                },
                {
                  title: "Relances clients",
                  desc: "Sequences automatiques de relance pour les devis en attente ou les factures impayees.",
                },
                {
                  title: "Synchronisation d'outils",
                  desc: "Tes outils se parlent entre eux : CRM, comptabilite, email, agenda.",
                },
                {
                  title: "Workflows sur mesure",
                  desc: "Tout process repetitif peut etre automatise. On analyse ton besoin et on construit la solution.",
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <h4 style={{ fontSize: 16, marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ fontSize: 15, color: "var(--text-dim)", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <div style={{ marginBottom: 16 }}>
                <span className="price-tag gradient-text">500-1500&euro;</span>
                <span className="price-period"> — devis au forfait selon complexite</span>
              </div>
              <Link href="/contact" className="btn-secondary">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* COMMENT CA MARCHE */}
      <section ref={revealHow} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">04. Le process</span>
          <h2 style={{ marginBottom: 16 }}>
            Comment on travaille
            <span className="gradient-text"> ensemble</span>
          </h2>
          <p style={{ maxWidth: 540, marginBottom: 48 }}>
            Quel que soit le service, le process est le meme. Simple, transparent, sans surprise.
          </p>

          <div className="timeline">
            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>01</span>
              <h4 style={{ marginBottom: 8 }}>Mini-audit gratuit</h4>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>Je regarde ta situation actuelle et je t&apos;envoie un diagnostic concret. Pour les commercants de Cherbourg, je peux meme passer directement.</p>
            </div>
            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>02</span>
              <h4 style={{ marginBottom: 8 }}>Diagnostic de 30 min</h4>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>On analyse ensemble ta situation, tes objectifs, et je te montre concretement ce qu&apos;on peut faire. Gratuit, sans engagement.</p>
            </div>
            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>03</span>
              <h4 style={{ marginBottom: 8 }}>Proposition &amp; demarrage</h4>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>Je t&apos;envoie une proposition adaptee a ton besoin et ton budget. Tu decides. Si c&apos;est parti, on demarre dans la semaine.</p>
            </div>
            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>04</span>
              <h4 style={{ marginBottom: 8 }}>Resultats &amp; suivi</h4>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>Tableau de bord en temps reel, rapports mensuels, appels de suivi. Tu vois exactement ce qui avance et ce que ca rapporte.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* CTA */}
      <section ref={revealCta} className="reveal section-cta" style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-main" style={{ maxWidth: 600 }}>
          <span className="section-number">Prochaine etape</span>
          <h2 style={{ marginBottom: 16 }}>
            Pas sur de ce qu&apos;il te faut ?
          </h2>
          <p style={{ marginBottom: 12 }}>
            C&apos;est normal. Chaque business est different.
          </p>
          <p style={{ marginBottom: 32, fontSize: 16, color: "var(--text-dim)" }}>
            Diagnostic gratuit de 30 minutes : je regarde ta situation, je te recommande le service adapte
            (ou rien si ca ne matche pas). Zero engagement, zero pression.
          </p>
          <Link
            href="https://calendly.com/hello-thibautgallien/30min"
            className="btn-primary"
          >
            Reserver un diagnostic gratuit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
