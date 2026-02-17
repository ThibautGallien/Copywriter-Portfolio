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
  const revealEmail = useReveal();
  const revealData = useReveal();
  const revealHow = useReveal();
  const revealCta = useReveal();

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="dot-grid" style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div className="container-main">
          <span className="section-number">Services</span>
          <h1 style={{ marginBottom: 16 }}>
            Ce que je fais,
            <span className="gradient-text"> concretement</span>
          </h1>
          <p style={{ maxWidth: 600, lineHeight: 1.7, marginBottom: 16 }}>
            J&apos;aide les business en ligne a attirer plus de visiteurs qualifies, a les convertir en clients,
            et a piloter leur croissance avec des donnees fiables. Pas de bullshit, pas de buzzwords —
            des actions concretes et des resultats mesurables.
          </p>
          <p style={{ maxWidth: 560, fontSize: 16, color: "var(--text-dim)" }}>
            Trois services, un ecosysteme. Tu peux les prendre separement ou les combiner selon tes besoins.
          </p>
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* ═══════ SERVICE 1 : SEO ═══════ */}
      <section ref={revealSeo} className="reveal section-alt" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">01. Referencement naturel (SEO)</span>
          <h2 style={{ marginBottom: 16 }}>
            Etre trouve par ceux qui
            <span className="gradient-text"> cherchent ce que tu vends</span>
          </h2>
          <p style={{ maxWidth: 600, lineHeight: 1.7, marginBottom: 16 }}>
            Quand quelqu&apos;un tape sur Google &quot;coach business Paris&quot; ou &quot;meilleur logiciel de facturation&quot;,
            est-ce que ton site apparait ? Si la reponse est non, tu laisses des clients (et du CA) a tes concurrents. Chaque jour.
          </p>
          <p style={{ maxWidth: 600, fontSize: 16, lineHeight: 1.7, marginBottom: 40, color: "var(--text-dim)" }}>
            Le SEO (Search Engine Optimization), c&apos;est l&apos;art de faire remonter ton site dans les resultats Google.
            Pas avec de la pub — avec de l&apos;optimisation technique, du contenu pertinent, et une strategie construite pour durer.
            Le trafic organique est le canal le plus rentable sur le long terme : une fois que tu es positionne, le trafic arrive tout seul.
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
            {/* SEO Local */}
            <div className="card card-accent-blue" style={{ padding: 32 }}>
              <span
                style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "var(--accent-blue)", textTransform: "uppercase", marginBottom: 20, display: "inline-block", padding: "4px 12px", background: "rgba(59, 130, 246, 0.1)", borderRadius: 4 }}
              >
                SEO Local
              </span>
              <h3 style={{ marginBottom: 8, fontSize: 19 }}>Dominer Google dans ta ville</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 16, color: "var(--text-dim)" }}>
                Pour les business avec une zone de chalandise : restaurants, artisans, cabinets medicaux,
                agences, commerces. Je t&apos;aide a apparaitre dans le pack local Google et a attirer les clients de ta zone.
              </p>

              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 10 }}>Ce que tu recois chaque mois :</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
                {[
                  "Optimisation de ta fiche Google Business Profile",
                  "Creation de citations locales (annuaires, directories)",
                  "Contenu optimise avec tes mots-cles locaux",
                  "Gestion de tes avis Google (reponses, strategie)",
                  "Rapport mensuel : positions, trafic, appels recus",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" style={{ marginTop: 4, flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span style={{ fontSize: 15, color: "var(--text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 20 }}>
                <span className="price-tag gradient-text">349&euro;</span>
                <span className="price-period">/mois — sans engagement</span>
              </div>

              <Link href="/services/seo-local" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Voir le detail de l&apos;offre
              </Link>
            </div>

            {/* SEO Growth */}
            <div className="card card-accent-violet" style={{ padding: 32, borderColor: "rgba(139, 92, 246, 0.15)" }}>
              <span
                style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "var(--accent-violet)", textTransform: "uppercase", marginBottom: 20, display: "inline-block", padding: "4px 12px", background: "rgba(139, 92, 246, 0.1)", borderRadius: 4 }}
              >
                SEO Growth
              </span>
              <h3 style={{ marginBottom: 8, fontSize: 19 }}>Scaler ton trafic organique</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 16, color: "var(--text-dim)" }}>
                Pour les business qui veulent attaquer des requetes nationales et devenir une reference
                dans leur domaine. Strategie SEO complete : technique, contenu, linking.
              </p>

              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 10 }}>Deux formules :</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
                {[
                  "Audit SEO complet one-shot (technique, contenu, concurrence) — 897€",
                  "Accompagnement mensuel complet (audit + execution + suivi)",
                  "4 contenus SEO optimises / mois",
                  "Link building strategique",
                  "Suivi des positions + rapport + call mensuel",
                  "Acces a un dashboard temps reel",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-violet)" strokeWidth="2.5" style={{ marginTop: 4, flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span style={{ fontSize: 15, color: "var(--text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 20 }}>
                <span className="price-tag gradient-text">1200&euro;</span>
                <span className="price-period">/mois — ou 897&euro; audit seul</span>
              </div>

              <Link href="/services/seo-growth" className="btn-secondary" style={{ width: "100%", justifyContent: "center", borderColor: "rgba(139, 92, 246, 0.3)" }}>
                Voir le detail de l&apos;offre
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ SERVICE 2 : EMAIL MARKETING ═══════ */}
      <section ref={revealEmail} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">02. Email Marketing</span>
          <h2 style={{ marginBottom: 16 }}>
            Transformer tes contacts en
            <span className="gradient-text"> clients</span>
          </h2>
          <p style={{ maxWidth: 600, lineHeight: 1.7, marginBottom: 16 }}>
            Tu as une liste email ? Des gens te laissent leur adresse sur ton site ? Super.
            Maintenant, qu&apos;est-ce que tu en fais ? Si la reponse c&apos;est &quot;pas grand chose&quot; ou &quot;une newsletter
            de temps en temps&quot;, tu laisses de l&apos;argent sur la table.
          </p>
          <p style={{ maxWidth: 600, fontSize: 16, lineHeight: 1.7, marginBottom: 40, color: "var(--text-dim)" }}>
            L&apos;email marketing, c&apos;est le canal avec le meilleur retour sur investissement : 36&euro; gagnes pour
            chaque euro depense. Je cree des sequences automatisees qui travaillent pour toi 24/7 :
            bienvenue, nurturing, vente, relance. Le bon message, au bon moment, a la bonne personne.
          </p>

          <div className="card card-accent-violet" style={{ padding: 32, maxWidth: 640 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 14 }}>Concretement, je mets en place :</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="email-deliverables-grid">
              {[
                { title: "Welcome sequence", desc: "5-7 emails pour transformer un nouveau contact en client" },
                { title: "Sequence de vente", desc: "Une serie d'emails qui presente ton offre et pousse a l'action" },
                { title: "Newsletter", desc: "Emails reguliers pour maintenir l'engagement et la confiance" },
                { title: "Relance panier", desc: "Recuperer les acheteurs qui ont abandonne avant de payer" },
                { title: "Segmentation", desc: "Envoyer le bon contenu selon le comportement de chaque contact" },
                { title: "Reporting", desc: "Taux d'ouverture, clics, conversions — on mesure tout" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <h4 style={{ fontSize: 16, marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ fontSize: 15, color: "var(--text-dim)", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <Link href="/contact" className="btn-secondary">
                Me contacter pour un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ SERVICE 3 : DATA ═══════ */}
      <section ref={revealData} className="reveal section-alt" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">03. Data &amp; Analytics</span>
          <h2 style={{ marginBottom: 16 }}>
            Savoir exactement ou investir
            <span className="gradient-text"> ton budget</span>
          </h2>
          <p style={{ maxWidth: 600, lineHeight: 1.7, marginBottom: 16 }}>
            Combien te coute un lead ? Quel canal te rapporte le plus ? A quelle etape tes visiteurs
            abandonnent ? Si tu ne peux pas repondre a ces questions, tu prends tes decisions marketing
            a l&apos;aveugle.
          </p>
          <p style={{ maxWidth: 600, fontSize: 16, lineHeight: 1.7, marginBottom: 40, color: "var(--text-dim)" }}>
            Je mets en place un systeme de tracking propre et des dashboards clairs pour que tu saches
            exactement ce qui se passe sur ton site. Plus de suppositions — des decisions basees sur des chiffres reels.
          </p>

          <div className="card card-accent-green" style={{ padding: 32, maxWidth: 640 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 14 }}>Ce que je fais pour toi :</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  title: "Audit de tracking",
                  desc: "Je verifie que ton GA4, GTM, et tous tes outils sont bien configures. Souvent, 50% des donnees sont fausses ou manquantes.",
                },
                {
                  title: "Setup tracking complet",
                  desc: "Installation et configuration de Google Analytics 4, Google Tag Manager, events personnalises. Tout est trace proprement.",
                },
                {
                  title: "Dashboards sur mesure",
                  desc: "Des tableaux de bord visuels avec tes vrais KPIs : trafic, leads, conversion, CA par canal. Pas 50 metriques inutiles.",
                },
                {
                  title: "Attribution & funnel analysis",
                  desc: "D'ou viennent tes ventes ? Ou tes visiteurs abandonnent ? Je cartographie ton funnel et identifie les fuites.",
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <h4 style={{ fontSize: 16, marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ fontSize: 15, color: "var(--text-dim)", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <Link href="/contact" className="btn-secondary">
                Me contacter pour un diagnostic
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ COMMENT CA MARCHE ═══════ */}
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
              <h4 style={{ marginBottom: 8 }}>Appel decouverte</h4>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>30 min pour comprendre ton business, tes objectifs, et identifier les premiers quick wins. Gratuit.</p>
            </div>
            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>02</span>
              <h4 style={{ marginBottom: 8 }}>Proposition</h4>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>Je t&apos;envoie un plan d&apos;action detaille avec les services recommandes, le planning et les tarifs. Tu decides.</p>
            </div>
            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>03</span>
              <h4 style={{ marginBottom: 8 }}>Execution</h4>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>Je fais le travail. Tu valides les contenus, tu as de la visibilite a chaque etape. Pas de boite noire.</p>
            </div>
            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>04</span>
              <h4 style={{ marginBottom: 8 }}>Resultats &amp; suivi</h4>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>Rapports mensuels, calls de suivi, ajustements continus. On mesure, on optimise, on accelere.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* ═══════ CTA ═══════ */}
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
            Appel de 30 minutes : je regarde ta situation, je te recommande le service adapte (ou rien si
            ca ne matche pas). Zero engagement, zero pression.
          </p>
          <Link
            href="https://calendly.com/hello-thibautgallien/30min"
            className="btn-primary"
          >
            Reserver un appel decouverte
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Responsive */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 600px) {
          .email-deliverables-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </>
  );
}
