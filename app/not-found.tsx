"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 24px",
      }}
    >
      <div style={{ maxWidth: 480 }}>
        <span
          className="mono"
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            display: "block",
            marginBottom: 16,
          }}
        >
          <span className="gradient-text">404</span>
        </span>
        <h2 style={{ marginBottom: 12 }}>Page introuvable</h2>
        <p style={{ fontSize: 15, marginBottom: 32 }}>
          Cette page n&apos;existe pas ou a ete deplacee. Pas de panique.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-primary">
            Retour a l&apos;accueil
          </Link>
          <Link href="/contact" className="btn-secondary">
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
