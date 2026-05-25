import { motion } from "motion/react";
import { useState, useEffect } from "react";

const NAV = [
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled ? "rgba(7,7,13,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,232,255,0.08)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div
        className="wrap"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
      >
        {/* Wordmark */}
        <button
          onClick={() => go("#home")}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <span
            className="mono"
            style={{ fontSize: 16, fontWeight: 500, letterSpacing: "0.04em" }}
          >
            <span style={{ color: "var(--cyan)" }}>aldrin</span>
            <span style={{ color: "var(--text-3)" }}>@</span>
            <span style={{ color: "var(--magenta)" }}>george</span>
            <span style={{ color: "var(--text-3)" }}>:~$</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: 32 }}
          className="desktop-nav"
        >
          {NAV.map((n) => (
            <button
              key={n.href}
              className="nav-link"
              onClick={() => go(n.href)}
            >
              {n.label}
            </button>
          ))}
        </nav>


        {/* Mobile toggle */}
        <button
          className="mobile-toggle"
          style={{
            display: "none", background: "none", border: "none",
            color: "var(--text-1)", cursor: "pointer",
          }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <path d="M18 6L6 18M6 6l12 12" />
              : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: "rgba(7,7,13,0.97)",
            backdropFilter: "blur(18px)",
            borderTop: "1px solid rgba(0,232,255,0.08)",
          }}
        >
          <div className="wrap" style={{ padding: "16px 28px", display: "flex", flexDirection: "column", gap: 14 }}>
            {NAV.map((n) => (
              <button
                key={n.href}
                className="nav-link"
                style={{ textAlign: "left", fontSize: 15 }}
                onClick={() => go(n.href)}
              >
                {n.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </motion.header>
  );
}
