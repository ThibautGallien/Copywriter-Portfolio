"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

const articles = [
  {
    slug: "call-to-action-guide-complet",
    title: "Call-to-action : le guide complet pour convertir",
    excerpt: "Comment ecrire des CTA qui font cliquer. Psychologie, exemples concrets, et formules testees sur +100 landing pages.",
    category: "Conversion",
    date: "2025-01-15",
    readTime: "12 min",
  },
  {
    slug: "techniques-emails-bienvenue-conversion",
    title: "Emails de bienvenue : 7 techniques pour convertir",
    excerpt: "Ta welcome sequence est ta meilleure chance de transformer un abonne en client. Voici comment ne pas la gacher.",
    category: "Email Marketing",
    date: "2025-01-08",
    readTime: "9 min",
  },
  {
    slug: "127-funnels-analyses-94-pourcent-meme-probleme",
    title: "127 funnels analyses : 94% ont le meme probleme",
    excerpt: "J'ai audite plus de 100 funnels. Le probleme numero 1 n'est pas celui que tu crois. Data a l'appui.",
    category: "Data",
    date: "2024-12-20",
    readTime: "8 min",
  },
];

const categories = ["Tous", "SEO", "Email Marketing", "Data", "Conversion"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const revealArticles = useReveal();

  const filtered =
    activeCategory === "Tous"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div className="container-main">
          <span className="section-number">Blog</span>
          <h1 style={{ marginBottom: 16 }}>
            Articles &amp;
            <span className="gradient-text"> ressources</span>
          </h1>
          <p style={{ maxWidth: 520, fontSize: 17 }}>
            SEO, email marketing, data, conversion. Des articles actionables, pas de la theorie. Chaque piece est basee sur des donnees reelles.
          </p>
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* ══════ FILTERS ══════ */}
      <section className="section-alt" style={{ padding: "32px 0" }}>
        <div className="container-main">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "6px 14px",
                  fontSize: 14,
                  fontWeight: 500,
                  borderRadius: 4,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  border:
                    activeCategory === cat
                      ? "1px solid rgba(59,130,246,0.4)"
                      : "1px solid rgba(255,255,255,0.08)",
                  background:
                    activeCategory === cat
                      ? "rgba(59,130,246,0.1)"
                      : "transparent",
                  color:
                    activeCategory === cat
                      ? "var(--accent-blue)"
                      : "var(--text-muted)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ ARTICLES LIST ══════ */}
      <section ref={revealArticles} className="reveal section-alt" style={{ padding: "0 0 80px" }}>
        <div className="container-main">
          {filtered.length === 0 ? (
            <p style={{ fontSize: 16, color: "var(--text-dim)", padding: "40px 0" }}>
              Aucun article dans cette categorie pour le moment.
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {filtered.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  style={{
                    display: "block",
                    padding: "28px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.02)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 24,
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 280 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          marginBottom: 8,
                        }}
                      >
                        <span
                          className="mono"
                          style={{
                            fontSize: 13,
                            letterSpacing: "0.1em",
                            color: "var(--accent-blue)",
                            textTransform: "uppercase",
                          }}
                        >
                          {article.category}
                        </span>
                        <span style={{ fontSize: 13, color: "var(--text-dim)" }}>
                          {article.readTime}
                        </span>
                      </div>
                      <h3 style={{ fontSize: 18, marginBottom: 6, fontWeight: 600 }}>
                        {article.title}
                      </h3>
                      <p style={{ fontSize: 16, maxWidth: 500 }}>
                        {article.excerpt}
                      </p>
                    </div>
                    <span
                      className="mono"
                      style={{ fontSize: 14, color: "var(--text-dim)", whiteSpace: "nowrap" }}
                    >
                      {article.date}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
