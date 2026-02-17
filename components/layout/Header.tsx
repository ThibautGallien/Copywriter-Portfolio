"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "A propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(10, 10, 11, 0.85)"
            : "rgba(10, 10, 11, 0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div className="container-main">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 64,
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text)",
              }}
            >
              thibautgallien
              <span style={{ color: "var(--accent-blue)" }}>.</span>
            </Link>

            {/* Desktop Nav */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 32,
              }}
              className="desktop-nav"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color:
                      pathname === item.href
                        ? "var(--text)"
                        : "var(--text-muted)",
                    transition: "color 0.2s ease",
                    letterSpacing: "-0.01em",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      pathname === item.href
                        ? "var(--text)"
                        : "var(--text-muted)")
                  }
                >
                  {item.label}
                </Link>
              ))}
              <Link href="https://calendly.com/hello-thibautgallien/30min" className="btn-primary" style={{ padding: "8px 18px", fontSize: 13 }}>
                Reserver un appel
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              className="mobile-menu-btn"
              style={{
                display: "none",
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 4,
                cursor: "pointer",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 18,
                  height: 1.5,
                  background: "var(--text)",
                  transition: "all 0.3s ease",
                  transform: isOpen
                    ? "rotate(45deg) translate(2.5px, 2.5px)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 18,
                  height: 1.5,
                  background: "var(--text)",
                  transition: "all 0.3s ease",
                  opacity: isOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 18,
                  height: 1.5,
                  background: "var(--text)",
                  transition: "all 0.3s ease",
                  transform: isOpen
                    ? "rotate(-45deg) translate(2.5px, -2.5px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          style={{
            display: isOpen ? "block" : "none",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(10, 10, 11, 0.95)",
          }}
          className="mobile-menu"
        >
          <div className="container-main" style={{ padding: "24px" }}>
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color:
                      pathname === item.href
                        ? "var(--text)"
                        : "var(--text-muted)",
                    transition: "color 0.2s ease",
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="https://calendly.com/hello-thibautgallien/30min"
                onClick={() => setIsOpen(false)}
                className="btn-primary"
                style={{
                  justifyContent: "center",
                  marginTop: 8,
                }}
              >
                Reserver un appel
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Responsive styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `,
        }}
      />
    </>
  );
}
