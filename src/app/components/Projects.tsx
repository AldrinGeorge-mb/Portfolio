import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    num: "01",
    title: "AutoImageFormatter",
    tagline: "Intelligent Cloud Image Processing",
    description:
      "A cloud platform automating complex image processing, background removal, and face centering. Architected a scalable pipeline to handle high-throughput batch jobs.",
    tech: ["React", "Node.js", "Express", "Vite", "Python"],
    accent: "#FF2CF3",
    accentDim: "rgba(255,44,243,0.08)",
    accentBorder: "rgba(255,44,243,0.22)",
    panelFrom: "rgba(255,44,243,0.06)",
    panelTo: "rgba(255,44,243,0.01)",

  },
  {
    num: "02",
    title: "KickSlot",
    tagline: "Turf-Booking Management Platform",
    description:
      "A full-featured turf-booking management platform with real-time availability and conflict detection. Built from the ground up to handle complex scheduling and user flows.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    accent: "#00E8FF",
    accentDim: "rgba(0,232,255,0.08)",
    accentBorder: "rgba(0,232,255,0.22)",
    panelFrom: "rgba(0,232,255,0.06)",
    panelTo: "rgba(0,232,255,0.01)",
  },
  {
    num: "03",
    title: "KTU S6 CCW Dashboard",
    tagline: "Dynamic Study & Quiz Engine",
    description:
      "A dynamic study application and quiz engine. Engineered a Python ETL pipeline to parse unstructured PDF question banks into a JSON database, served via a high-performance SPA with real-time analytics.",
    tech: ["Python", "JavaScript", "React", "Vite"],
    accent: "#FF2CF3",
    accentDim: "rgba(255,44,243,0.08)",
    accentBorder: "rgba(255,44,243,0.22)",
    panelFrom: "rgba(255,44,243,0.06)",
    panelTo: "rgba(255,44,243,0.01)",

  },
  {
    num: "04",
    title: "Celestial Compass",
    tagline: "3D WebGL Astronomical Dashboard",
    description:
      "A full-stack astronomical dashboard featuring an interactive 3D WebGL globe and localized cosmic event aggregation. Engineered a custom Express backend to aggregate data across multiple APIs while optimizing WebGL rendering hooks.",
    tech: ["React", "Node.js", "Express", "Three.js"],
    accent: "#00E8FF",
    accentDim: "rgba(0,232,255,0.08)",
    accentBorder: "rgba(0,232,255,0.22)",
    panelFrom: "rgba(0,232,255,0.06)",
    panelTo: "rgba(0,232,255,0.01)",
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 0" }}>
      <div className="wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 64 }}
        >
          <span className="section-tag">Engineering</span>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(28px, 4.5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-1)",
              marginBottom: 12,
            }}
          >
            Featured Projects
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-2)", maxWidth: 460 }}>
            End-to-end products I've designed, engineered, and shipped.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              className="project-card"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <div
                className="proj-inner"
                style={{
                  display: "grid",
                  gridTemplateColumns: "280px 1fr",
                  minHeight: 240,
                }}
              >
                {/* Left — art panel */}
                <div
                  className="proj-glow-panel"
                  style={{
                    background: `linear-gradient(145deg, ${p.panelFrom} 0%, ${p.panelTo} 100%)`,
                    borderRight: `1px solid ${p.accentBorder}`,
                  }}
                >
                  {/* Decorative grid inside panel */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `linear-gradient(${p.accentBorder} 1px, transparent 1px), linear-gradient(90deg, ${p.accentBorder} 1px, transparent 1px)`,
                      backgroundSize: "24px 24px",
                      opacity: 0.35,
                    }}
                  />
                  {/* Centre glow */}
                  <div
                    style={{
                      width: 80, height: 80, borderRadius: "50%",
                      background: `radial-gradient(circle, ${p.accent}33 0%, transparent 70%)`,
                      filter: "blur(20px)",
                      position: "absolute",
                    }}
                  />
                  {/* Terminal number */}
                  <span
                    className="proj-number mono"
                    style={{ color: p.accentBorder }}
                  >
                    {p.num}
                  </span>
                </div>

                {/* Right — text */}
                <div style={{ padding: "36px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  {/* Tagline */}
                  <span
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: p.accent,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 10,
                      textShadow: `0 0 12px ${p.accent}66`,
                    }}
                  >
                    {p.tagline}
                  </span>

                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(22px, 2.5vw, 30px)",
                      letterSpacing: "-0.025em",
                      color: "var(--text-1)",
                      marginBottom: 14,
                    }}
                  >
                    {p.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--text-2)",
                      lineHeight: 1.75,
                      marginBottom: 22,
                      maxWidth: 520,
                    }}
                  >
                    {p.description}
                  </p>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "5px 12px",
                          background: p.accentDim,
                          border: `1px solid ${p.accentBorder}`,
                          borderRadius: 6,
                          fontFamily: "'Fira Code', monospace",
                          fontSize: 11.5,
                          color: p.accent,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div style={{ display: "flex", gap: 12 }}>
                    <button
                      className="btn-ghost"
                      style={{ padding: "9px 18px", fontSize: 12, display: "flex", alignItems: "center", gap: 7 }}
                    >
                      <Github size={14} />
                      Source Code
                    </button>
                    <button
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 7,
                        padding: "9px 18px",
                        background: p.accentDim,
                        border: `1px solid ${p.accentBorder}`,
                        borderRadius: "var(--radius-md)",
                        fontFamily: "'Fira Code', monospace",
                        fontSize: 12,
                        color: p.accent,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .proj-inner { grid-template-columns: 1fr !important; }
          .proj-glow-panel { min-height: 160px !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07); }
        }
        @media (max-width: 540px) {
          .proj-inner > div:last-child { padding: 28px 24px !important; }
        }
      `}</style>
    </section>
  );
}
