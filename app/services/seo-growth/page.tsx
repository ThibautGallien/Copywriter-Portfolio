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

export default function SeoGrowthPage() {
  const revealFormulas = useReveal();
  const revealProcess = useReveal();
  const revealFaq = useReveal();

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="dot-grid" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container-main">
          <Link
            href="/services"
            style={{
              fontSize: 13,
              color: "var(--text-dim)",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 32,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Retour aux services
          </Link>

          <span
            className="mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              color: "var(--accent-violet)",
              textTransform: "uppercase",
              marginBottom: 16,
              display: "block",
            }}
          >
            SEO Growth
          </span>

          <h1 style={{ marginBottom: 16 }}>
            Scale ton trafic organique.
            <span className="gradient-text"> Domine ton marche.</span>
          </h1>
          <p style={{ maxWidth: 560, fontSize: 17, marginBottom: 36 }}>
            Strategie SEO complete pour les business qui veulent passer au niveau superieur. Audit, contenu, technique, linking. Tout est couvert.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ 2 FORMULAS ══════ */}
      <section ref={revealFormulas} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">01. Deux formules</span>
          <h2 style={{ marginBottom: 48 }}>
            Choisis ton
            <span className="gradient-text"> niveau d&apos;ambition</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {/* Formula 1: Audit */}
            <div className="card" style={{ padding: 32 }}>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  color: "var(--accent-blue)",
                  textTransform: "uppercase",
                  marginBottom: 20,
                  display: "block",
                }}
              >
                Formule Audit
              </span>
              <h3 style={{ marginBottom: 8 }}>Audit SEO Complet</h3>
              <p style={{ fontSize: 15, marginBottom: 24 }}>
                Un diagnostic exhaustif de ton site avec un plan d&apos;action priorise. Tu sais exactement quoi faire, dans quel ordre, et pourquoi.
              </p>

              <div style={{ marginBottom: 24 }}>
                <span className="price-tag gradient-text">897&euro;</span>
                <span className="price-period"> — one-shot</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {[
                  "Audit technique complet (Core Web Vitals, indexation, architecture)",
                  "Recherche de mots-cles approfondie",
                  "Analyse concurrentielle detaillee",
                  "Audit de contenu existant",
                  "Plan d'action priorise par impact",
                  "Call de restitution 1h",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" style={{ marginTop: 3, flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="https://calendly.com/hello-thibautgallien/30min"
                className="btn-secondary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Demander un audit
              </Link>
            </div>

            {/* Formula 2: Accompagnement */}
            <div
              className="card"
              style={{
                padding: 32,
                borderColor: "rgba(59, 130, 246, 0.2)",
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  color: "var(--accent-violet)",
                  textTransform: "uppercase",
                  marginBottom: 20,
                  display: "block",
                }}
              >
                Formule Accompagnement
              </span>
              <h3 style={{ marginBottom: 8 }}>SEO Growth Mensuel</h3>
              <p style={{ fontSize: 15, marginBottom: 24 }}>
                Je prends en charge ta strategie SEO de A a Z. Technique, contenu, linking, suivi. Tu n&apos;as rien a faire, tu vois les resultats.
              </p>

              <div style={{ marginBottom: 24 }}>
                <span className="price-tag gradient-text">1200&euro;</span>
                <span className="price-period">/mois</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {[
                  "Tout ce qui est dans l'audit +",
                  "Implementation technique continue",
                  "4 contenus SEO optimises / mois",
                  "Link building strategique",
                  "Suivi des positions et du trafic",
                  "Rapport mensuel detaille",
                  "Call de suivi mensuel",
                  "Acces dashboard temps reel",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-violet)" strokeWidth="2" style={{ marginTop: 3, flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="https://calendly.com/hello-thibautgallien/30min"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Reserver un appel
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ PROCESS ══════ */}
      <section ref={revealProcess} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">02. Comment ca se passe</span>
          <h2 style={{ marginBottom: 48 }}>
            Un process
            <span className="gradient-text"> structure</span>
          </h2>

          <div className="timeline">
            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>01</span>
              <h4 style={{ marginBottom: 8 }}>Call decouverte</h4>
              <p style={{ fontSize: 14 }}>On parle de ton business, tes objectifs, ton marche. Je valide que le SEO est le bon levier pour toi.</p>
            </div>
            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>02</span>
              <h4 style={{ marginBottom: 8 }}>Audit &amp; Strategie</h4>
              <p style={{ fontSize: 14 }}>Analyse complete, recherche de mots-cles, plan d&apos;action priorise. Tu sais exactement ou on va.</p>
            </div>
            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>03</span>
              <h4 style={{ marginBottom: 8 }}>Execution</h4>
              <p style={{ fontSize: 14 }}>Implementation technique, creation de contenu, link building. Le moteur tourne.</p>
            </div>
            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>04</span>
              <h4 style={{ marginBottom: 8 }}>Scale</h4>
              <p style={{ fontSize: 14 }}>On double ce qui marche, on coupe ce qui ne marche pas. Chaque mois on pousse plus loin.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ FAQ ══════ */}
      <section ref={revealFaq} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main" style={{ maxWidth: 700 }}>
          <span className="section-number">03. FAQ</span>
          <h2 style={{ marginBottom: 48 }}>Questions frequentes</h2>

          {[
            {
              q: "Combien de temps pour voir des resultats ?",
              a: "Les premieres ameliorations techniques sont visibles en quelques semaines. Pour les positions et le trafic, compte 3-6 mois selon la concurrence de ton marche.",
            },
            {
              q: "Est-ce que je dois m'engager longtemps ?",
              a: "L'audit est un one-shot. L'accompagnement mensuel est sans engagement, mais je recommande 6 mois minimum pour des resultats durables.",
            },
            {
              q: "Tu ecris le contenu toi-meme ?",
              a: "Oui. Je gere la strategie editoriale et la redaction SEO. Tu valides avant publication. Le contenu est original, optimise, et ecrit pour convertir.",
            },
            {
              q: "C'est quoi la difference avec du SEO local ?",
              a: "Le SEO local cible des requetes geographiques (\"plombier Paris\"). Le SEO growth cible des requetes thematiques nationales pour scaler ton autorite et ton trafic.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "24px 0" }}
            >
              <h4 style={{ marginBottom: 8, fontSize: 16 }}>{faq.q}</h4>
              <p style={{ fontSize: 15 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ CTA ══════ */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-main" style={{ maxWidth: 600 }}>
          <h2 style={{ marginBottom: 16 }}>
            Pret a
            <span className="gradient-text"> scaler</span> ?
          </h2>
          <p style={{ marginBottom: 32, fontSize: 17 }}>
            On analyse ton potentiel SEO ensemble. 30 minutes, zero engagement.
          </p>
          <Link
            href="https://calendly.com/hello-thibautgallien/30min"
            className="btn-primary"
          >
            Reserver un appel
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
