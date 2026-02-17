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

const timeline = [
  {
    year: "2020-2021",
    title: "Premiers pas dans le digital",
    desc: "Gestion de business d'infoproduits, copywriting freelance. Creation de funnels, emails, formations. L'apprentissage par le terrain.",
  },
  {
    year: "2022",
    title: "Specialisation data & email",
    desc: "Plongee dans l'analyse de donnees marketing. Optimisation de funnels, A/B testing, sequences email. Les chiffres ne mentent pas.",
  },
  {
    year: "2023",
    title: "Le SEO comme game changer",
    desc: "Decouverte du SEO comme levier d'acquisition le plus rentable a long terme. Formation intensive, premiers clients, premiers resultats.",
  },
  {
    year: "2024-2025",
    title: "Consultant croissance digitale",
    desc: "Lancement de l'activite de consulting. SEO, email, data — un ecosysteme complet pour faire grandir les business en ligne.",
  },
];

const values = [
  {
    title: "Les resultats avant les promesses",
    desc: "Pas de buzzwords, pas de vanity metrics. Je mesure tout et je te montre ce qui compte : le trafic qualifie, les leads, le CA.",
  },
  {
    title: "Transparence totale",
    desc: "Tu sais exactement ce que je fais, pourquoi je le fais, et combien ca rapporte. Rapports clairs, acces aux dashboards, zero bullshit.",
  },
  {
    title: "Le long terme",
    desc: "Le SEO n'est pas un sprint. Je construis des fondations solides qui generent du trafic pendant des annees, pas des hacks qui disparaissent demain.",
  },
  {
    title: "Pragmatisme",
    desc: "Chaque action est priorisee par impact. On fait d'abord ce qui rapporte le plus avec le moins d'effort. 80/20 applique a la lettre.",
  },
];

export default function AboutPage() {
  const revealTimeline = useReveal();
  const revealValues = useReveal();
  const revealCta = useReveal();

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div className="container-main">
          <span className="section-number">A propos</span>
          <h1 style={{ marginBottom: 16 }}>
            Thibaut Gallien
          </h1>
          <p style={{ maxWidth: 560, fontSize: 17, marginBottom: 24 }}>
            Consultant en croissance digitale. J&apos;aide les business a devenir visibles sur Google et a transformer leur trafic en revenus. Basee sur la data, pas les intuitions.
          </p>
          <p style={{ fontSize: 15, color: "var(--text-dim)", maxWidth: 540 }}>
            Avant de devenir consultant, j&apos;ai lance, casse et repare des business en ligne pendant 4 ans. Chaque erreur m&apos;a appris quelque chose. Chaque succes m&apos;a montre ce qui marche vraiment.
          </p>
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* ══════ TIMELINE / PARCOURS ══════ */}
      <section ref={revealTimeline} className="reveal section-alt" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">01. Parcours</span>
          <h2 style={{ marginBottom: 48 }}>
            D&apos;ou je viens,
            <span className="gradient-text"> ou je vais</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 24,
                  padding: "28px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  alignItems: "start",
                }}
                className="timeline-row"
              >
                <span
                  className="mono"
                  style={{
                    fontSize: 13,
                    color: "var(--accent-blue)",
                    letterSpacing: "0.05em",
                    paddingTop: 2,
                  }}
                >
                  {item.year}
                </span>
                <div>
                  <h4 style={{ marginBottom: 6, fontSize: 16 }}>{item.title}</h4>
                  <p style={{ fontSize: 15 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ VALUES ══════ */}
      <section ref={revealValues} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">02. Valeurs</span>
          <h2 style={{ marginBottom: 48 }}>
            Ce qui guide
            <span className="gradient-text"> mon travail</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {values.map((v, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <span
                  className="mono"
                  style={{
                    fontSize: 12,
                    color: "var(--accent-blue)",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: 12,
                  }}
                >
                  0{i + 1}
                </span>
                <h4 style={{ marginBottom: 8, fontSize: 16 }}>{v.title}</h4>
                <p style={{ fontSize: 14 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* ══════ CTA ══════ */}
      <section ref={revealCta} className="reveal section-cta" style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-main" style={{ maxWidth: 600 }}>
          <h2 style={{ marginBottom: 16 }}>
            Envie de
            <span className="gradient-text"> bosser ensemble</span> ?
          </h2>
          <p style={{ marginBottom: 32, fontSize: 17 }}>
            On discute 30 minutes de ton projet. Je te dis honnetement si je peux t&apos;aider et comment.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="https://calendly.com/hello-thibautgallien/30min"
              className="btn-primary"
            >
              Reserver un appel
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Envoyer un message
            </Link>
          </div>
        </div>
      </section>

      {/* Responsive timeline rows */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 600px) {
          .timeline-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}} />
    </>
  );
}
