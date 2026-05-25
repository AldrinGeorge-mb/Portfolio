import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

const LINKS = [
  { icon: Github, label: "GitHub", href: "https://github.com/aldringeorge-mb", text: "github.com/aldringeorge-mb" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aldrin-george-a93a64267/", text: "linkedin.com/in/aldringeorge" },
  { icon: Mail, label: "Email", href: "mailto:aldringeorge2904@gmail.com", text: "aldringeorge2904@gmail.com" },
];

export function Footer() {
  return (
    <footer id="contact" style={{ padding: "100px 0 56px", position: "relative" }}>
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: 0, left: "50%", transform: "translateX(-50%)",
          width: 500, height: 200,
          background: "radial-gradient(ellipse, rgba(0,232,255,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {/* Top divider */}
        <div className="divider" style={{ marginBottom: 72 }} />

        {/* Terminal connect block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          {/* Prompt line */}
          <p
            className="mono term-prompt"
            style={{ fontSize: "clamp(16px, 2.5vw, 22px)", marginBottom: 8 }}
          >
            <span className="user">root</span>
            <span className="at">@</span>
            <span className="host">aldrin</span>
            <span className="path">:~#</span>
            <span className="cmd"> connect</span>
            <span className="cursor" style={{ marginLeft: 6 }} />
          </p>

          <p
            className="mono"
            style={{
              fontSize: 12,
              color: "var(--text-3)",
              letterSpacing: "0.08em",
              marginTop: 12,
            }}
          >
            // open to full-time roles & freelance projects
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            marginBottom: 72,
          }}
        >
          {LINKS.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 24px",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-1)",
                  borderRadius: "var(--radius-md)",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  width: "100%",
                  maxWidth: 420,
                }}
                whileHover={{
                  borderColor: "rgba(0,232,255,0.3)",
                  backgroundColor: "rgba(0,232,255,0.04)",
                }}
              >
                <div
                  style={{
                    width: 38, height: 38,
                    borderRadius: 10,
                    background: "var(--cyan-dim)",
                    border: "1px solid var(--border-cyan)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--cyan)", flexShrink: 0,
                  }}
                >
                  <Icon size={17} />
                </div>
                <div style={{ textAlign: "left" }}>
                  <p className="mono" style={{ fontSize: 11, color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>
                    {link.label}
                  </p>
                  <p className="mono" style={{ fontSize: 13, color: "var(--text-1)" }}>
                    {link.text}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom bar */}
        <div className="divider" style={{ marginBottom: 28 }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p className="mono" style={{ fontSize: 12, color: "var(--text-3)" }}>
            © 2026 Aldrin George
          </p>
          <p className="mono" style={{ fontSize: 12, color: "var(--text-3)" }}>
            // built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
