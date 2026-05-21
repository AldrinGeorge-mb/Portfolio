import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.5s ease",
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled ? "rgba(4, 5, 15, 0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(139, 92, 246, 0.1)" : "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div
        className="wrap"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
      >
        {/* Wordmark — no logo box */}
        <motion.div whileHover={{ opacity: 0.8 }} style={{ cursor: "default" }}>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "-0.02em",
              color: "#f0f2ff",
            }}
          >
            Aldrin
            <span
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginLeft: 4,
              }}
            >
              George
            </span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              className="nav-link"
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={() => scrollTo(link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 20 }}
          className="desktop-actions"
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div className="availability-dot" style={{ width: 8, height: 8 }}>
              <span
                style={{
                  display: "block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                }}
              />
            </div>
            <span style={{ fontSize: 13, color: "#22c55e", fontWeight: 500 }}>
              Available
            </span>
          </div>

          <motion.button
            className="btn-primary"
            style={{ padding: "9px 22px", fontSize: 13, borderRadius: 10 }}
            onClick={() => scrollTo("#contact")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Hire me
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <button
          className="mobile-toggle"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#f0f2ff",
            cursor: "pointer",
          }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          style={{
            background: "rgba(4, 5, 15, 0.95)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(139, 92, 246, 0.15)",
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="wrap" style={{ padding: "16px 48px", display: "flex", flexDirection: "column", gap: 16 }}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                className="nav-link"
                style={{ background: "none", border: "none", textAlign: "left", fontSize: 16, padding: "6px 0" }}
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
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
