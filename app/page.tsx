"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ═══════════════════════════════════════
   HOMEPAGE — thibautgallien.fr
   Hero + Bento Services + Process + Stats + CTA
   ═══════════════════════════════════════ */

// ── Typing animation hook ─────────────
function useTypingEffect(lines: string[], speed = 50, lineDelay = 400) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }
    if (currentChar < lines[currentLine].length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => {
          const copy = [...prev];
          copy[currentLine] = (copy[currentLine] || "") + lines[currentLine][currentChar];
          return copy;
        });
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, lineDelay);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, lines, speed, lineDelay]);

  return { displayed, done };
}

// ── Count-up animation hook ───────────
function useCountUp(target: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

// ── Scroll reveal hook ────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

// ── Terminal component ────────────────
function Terminal() {
  const lines = [
    "$ analyzing site...",
    "✓ keywords found: 47",
    "✓ ranking opportunities: 12",
    "✓ estimated traffic gain: +340%",
    "→ ready to grow",
  ];

  const { displayed, done } = useTypingEffect(lines, 35, 300);

  const getLineClass = (line: string) => {
    if (line.startsWith("$")) return "command";
    if (line.startsWith("✓")) return "success";
    if (line.startsWith("→")) return "arrow";
    return "";
  };

  return (
    <div className="terminal" style={{ animation: "fadeInUp 0.8s ease 0.3s both" }}>
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span style={{ marginLeft: 8, fontSize: 11, color: "var(--text-dim)" }}>
          growth-analysis.sh
        </span>
      </div>
      <div className="terminal-body">
        {displayed.map((line, i) => (
          <div key={i} className={getLineClass(lines[i] || "")}>
            {line}
          </div>
        ))}
        {done && <span className="cursor-blink" />}
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────
export default function HomePage() {
  const revealServices = useReveal();
  const revealProcess = useReveal();
  const revealStats = useReveal();
  const revealCta = useReveal();

  const stat1 = useCountUp(47, 2000);
  const stat2 = useCountUp(340, 2000);
  const stat3 = useCountUp(12, 1500);
  const stat4 = useCountUp(98, 2000);

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section
        className="dot-grid"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 100,
          paddingBottom: 60,
        }}
      >
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 48,
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* Left: text */}
            <div style={{ animation: "fadeInUp 0.6s ease both" }}>
              <span
                className="mono"
                style={{
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  marginBottom: 20,
                  display: "block",
                }}
              >
                Consultant Croissance Digitale
              </span>

              <h1 style={{ marginBottom: 8, lineHeight: 1.1 }}>
                Je rends ton business
              </h1>
              <h1
                className="gradient-text"
                style={{ marginBottom: 24, lineHeight: 1.1 }}
              >
                visible sur Google
              </h1>

              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.6,
                  color: "var(--text-muted)",
                  maxWidth: 500,
                  marginBottom: 36,
                }}
              >
                SEO, email marketing et data pour transformer ton trafic en revenus concrets.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link
                  href="https://calendly.com/hello-thibautgallien/30min"
                  className="btn-primary"
                >
                  Reserver un appel
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/services" className="btn-secondary">
                  Voir les services
                </Link>
              </div>
            </div>

            {/* Right: terminal */}
            <div className="hero-terminal">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ SERVICES — BENTO GRID ══════ */}
      <section
        ref={revealServices}
        className="reveal"
        style={{ padding: "100px 0" }}
      >
        <div className="container-main">
          <span className="section-number">01. Services</span>
          <h2 style={{ marginBottom: 12 }}>
            Trois leviers, un objectif :
            <span className="gradient-text"> ta croissance</span>
          </h2>
          <p style={{ maxWidth: 520, marginBottom: 48 }}>
            Chaque service est concu pour s&apos;integrer aux autres. SEO pour attirer, email pour convertir, data pour optimiser.
          </p>

          <div className="bento-grid">
            {/* SEO — large card */}
            <div
              className="card bento-item"
              style={{ padding: 32 }}
            >
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  color: "var(--accent-blue)",
                  textTransform: "uppercase",
                  marginBottom: 16,
                  display: "block",
                }}
              >
                Service principal
              </span>
              <h3 style={{ marginBottom: 12 }}>SEO &amp; Referencement</h3>
              <p style={{ marginBottom: 24, fontSize: 15 }}>
                De l&apos;audit technique a la strategie de contenu. Je positionne ton site sur les requetes qui comptent, celles qui ramenent du business. SEO local et growth.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/services/seo-local" className="btn-secondary" style={{ padding: "8px 16px", fontSize: 13 }}>
                  SEO Local — 349/mois
                </Link>
                <Link href="/services/seo-growth" className="btn-secondary" style={{ padding: "8px 16px", fontSize: 13 }}>
                  SEO Growth
                </Link>
              </div>
            </div>

            {/* Email — small card */}
            <div
              className="card bento-item"
              style={{ padding: 32 }}
            >
              <h3 style={{ marginBottom: 12 }}>Email Marketing</h3>
              <p style={{ fontSize: 15 }}>
                Sequences automatisees, newsletters, segmentation. Je transforme ta liste en machine a revenus recurrents.
              </p>
            </div>

            {/* Data — small card */}
            <div
              className="card bento-item"
              style={{ padding: 32 }}
            >
              <h3 style={{ marginBottom: 12 }}>Data &amp; Analytics</h3>
              <p style={{ fontSize: 15 }}>
                Tracking, dashboards, attribution. Les chiffres qui te disent ou investir et ou couper.
              </p>
            </div>

            {/* Stats — large card */}
            <div
              className="card bento-item"
              style={{
                padding: 32,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 24,
                }}
              >
                <div ref={stat1.ref}>
                  <div className="stat-value">
                    {stat1.value}+
                  </div>
                  <div className="stat-label">clients accompagnes</div>
                </div>
                <div>
                  <div className="stat-value">+{stat2.value}%</div>
                  <div className="stat-label">trafic moyen genere</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ PROCESS — TIMELINE ══════ */}
      <section
        ref={revealProcess}
        className="reveal"
        style={{ padding: "100px 0" }}
      >
        <div className="container-main">
          <span className="section-number">02. Process</span>
          <h2 style={{ marginBottom: 48 }}>
            Comment on travaille
            <span className="gradient-text"> ensemble</span>
          </h2>

          <div className="timeline">
            <div className="timeline-step">
              <span
                className="mono"
                style={{
                  fontSize: 12,
                  color: "var(--accent-blue)",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                01
              </span>
              <h4 style={{ marginBottom: 8 }}>Audit</h4>
              <p style={{ fontSize: 14 }}>
                Analyse complete de ton site, tes positions, ton marche. Je trouve les opportunites que tes concurrents ignorent.
              </p>
            </div>

            <div className="timeline-step">
              <span
                className="mono"
                style={{
                  fontSize: 12,
                  color: "var(--accent-blue)",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                02
              </span>
              <h4 style={{ marginBottom: 8 }}>Strategie</h4>
              <p style={{ fontSize: 14 }}>
                Plan d&apos;action priorise par impact. Pas de theorie, juste ce qu&apos;il faut faire, dans quel ordre et pourquoi.
              </p>
            </div>

            <div className="timeline-step">
              <span
                className="mono"
                style={{
                  fontSize: 12,
                  color: "var(--accent-blue)",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                03
              </span>
              <h4 style={{ marginBottom: 8 }}>Execution</h4>
              <p style={{ fontSize: 14 }}>
                Implementation technique, contenu optimise, tracking en place. Je fais le boulot, tu vois les resultats.
              </p>
            </div>

            <div className="timeline-step">
              <span
                className="mono"
                style={{
                  fontSize: 12,
                  color: "var(--accent-blue)",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                04
              </span>
              <h4 style={{ marginBottom: 8 }}>Optimisation</h4>
              <p style={{ fontSize: 14 }}>
                Suivi mensuel, rapports clairs, ajustements data-driven. On scale ce qui marche, on coupe ce qui ne marche pas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ STATS ══════ */}
      <section
        ref={revealStats}
        className="reveal"
        style={{ padding: "100px 0" }}
      >
        <div className="container-main">
          <span className="section-number">03. Resultats</span>
          <h2 style={{ marginBottom: 48 }}>
            Les chiffres parlent
            <span className="gradient-text"> d&apos;eux-memes</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 32,
            }}
          >
            <div ref={stat3.ref}>
              <div className="stat-value">{stat3.value}+</div>
              <div className="stat-label">mois d&apos;experience</div>
            </div>
            <div>
              <div className="stat-value">{stat4.value}%</div>
              <div className="stat-label">clients satisfaits</div>
            </div>
            <div>
              <div className="stat-value">+{stat2.value}%</div>
              <div className="stat-label">trafic organique moyen</div>
            </div>
            <div>
              <div className="stat-value">{stat1.value}+</div>
              <div className="stat-label">projets livres</div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ FINAL CTA ══════ */}
      <section
        ref={revealCta}
        className="reveal"
        style={{ padding: "100px 0", textAlign: "center" }}
      >
        <div className="container-main" style={{ maxWidth: 640 }}>
          <span className="section-number">04. Prochaine etape</span>
          <h2 style={{ marginBottom: 16 }}>
            Pret a rendre ton business
            <span className="gradient-text"> visible</span> ?
          </h2>
          <p style={{ marginBottom: 36, fontSize: 17 }}>
            30 minutes d&apos;appel, zero engagement. On regarde ton site ensemble, j&apos;identifie les quick wins et je te dis exactement ce que je ferais.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
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

      {/* ── Responsive hero grid ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (min-width: 769px) {
            .hero-grid {
              grid-template-columns: 3fr 2fr !important;
            }
          }
          @media (max-width: 768px) {
            .hero-terminal {
              order: -1;
            }
          }
        `,
        }}
      />
    </>
  );
}
