import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AutoImageFormatter",
    tagline: "Intelligent image processing at scale",
    description:
      "A full-stack image processing pipeline with automated format conversion, real-time optimization, and batch processing. Built for performance with a clean, intuitive UI.",
    tech: ["React", "Node.js", "Sharp", "Express"],
    highlights: [
      "Batch process 100+ images simultaneously",
      "Smart compression with quality preservation",
      "Real-time progress tracking",
    ],
    accent: "sky",
  },
  {
    number: "02",
    title: "Celestial Compass",
    tagline: "Real-time astronomical navigation",
    description:
      "An interactive star mapping app with live celestial data, orbital mechanics simulation, and event tracking. Powered by NASA's open data APIs and rendered with WebGL.",
    tech: ["Three.js", "WebGL", "NASA API", "React"],
    highlights: [
      "Live star catalog with 100K+ entries",
      "3D orbital mechanics simulation",
      "Celestial event notifications",
    ],
    accent: "violet",
  },
  {
    number: "03",
    title: "PlaySpots",
    tagline: "Smart venue booking for sports",
    description:
      "A full-featured venue booking platform with real-time availability, Stripe payment integration, and Google Calendar sync for sports facilities management.",
    tech: ["Next.js", "MongoDB", "Stripe", "Google Calendar API"],
    highlights: [
      "Real-time booking with conflict detection",
      "Secure Stripe payment processing",
      "Calendar sync & SMS reminders",
    ],
    accent: "pink",
  },
];

const accentColors: Record<string, { border: string; glow: string; text: string; bg: string }> = {
  sky: {
    border: "rgba(56,189,248,0.3)",
    glow: "0 0 40px rgba(56,189,248,0.15)",
    text: "#38bdf8",
    bg: "rgba(56,189,248,0.08)",
  },
  violet: {
    border: "rgba(139,92,246,0.3)",
    glow: "0 0 40px rgba(139,92,246,0.15)",
    text: "#a78bfa",
    bg: "rgba(139,92,246,0.08)",
  },
  pink: {
    border: "rgba(244,114,182,0.3)",
    glow: "0 0 40px rgba(244,114,182,0.15)",
    text: "#f472b6",
    bg: "rgba(244,114,182,0.08)",
  },
};

export function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 0" }}>
      <div className="wrap">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <p className="section-label">Projects</p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f0f2ff",
              marginBottom: 16,
            }}
          >
            Things I've built
          </h2>
          <p style={{ fontSize: 17, color: "#9ca3c4", maxWidth: 500 }}>
            A selection of projects I'm proud of — each one solving a real problem
            with clean code and great UX.
          </p>
        </motion.div>

        {/* Project cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {projects.map((project, index) => {
            const accent = accentColors[project.accent];
            return (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  borderColor: accent.border,
                  boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
                }}
                whileHover={{ boxShadow: `0 24px 64px rgba(0,0,0,0.5), ${accent.glow}` }}
              >
                {/* Number decoration */}
                <span className="project-number">{project.number}</span>

                <div
                  style={{
                    padding: "40px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "48px",
                    alignItems: "center",
                  }}
                  className="project-inner"
                >
                  {/* Left */}
                  <div>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        color: accent.text,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: 12,
                      }}
                    >
                      {project.tagline}
                    </span>

                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "clamp(24px, 3vw, 32px)",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        color: "#f0f2ff",
                        marginBottom: 16,
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontSize: 15,
                        color: "#9ca3c4",
                        lineHeight: 1.7,
                        marginBottom: 24,
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech pills */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                        marginBottom: 28,
                      }}
                    >
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="pill"
                          style={{
                            borderColor: accent.border,
                            color: accent.text,
                            background: accent.bg,
                            fontSize: 11,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div style={{ display: "flex", gap: 16 }}>
                      <motion.button
                        className="btn-outline"
                        style={{ padding: "10px 20px", fontSize: 13, borderRadius: 10 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <Github size={15} />
                        Source Code
                      </motion.button>
                      <motion.button
                        className="btn-primary"
                        style={{ padding: "10px 20px", fontSize: 13, borderRadius: 10 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </motion.button>
                    </div>
                  </div>

                  {/* Right — Highlights */}
                  <div>
                    <div
                      style={{
                        background: "rgba(4, 5, 15, 0.7)",
                        border: `1px solid ${accent.border}`,
                        borderRadius: 16,
                        padding: "28px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 12,
                          color: accent.text,
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: 20,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        Key Features
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {project.highlights.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.08 }}
                            style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                          >
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                                background: accent.bg,
                                border: `1px solid ${accent.border}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                marginTop: 1,
                              }}
                            >
                              <ArrowRight size={10} color={accent.text} />
                            </div>
                            <span style={{ fontSize: 14, color: "#9ca3c4", lineHeight: 1.5 }}>
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Inline responsive style */}
      <style>{`
        @media (max-width: 768px) {
          .project-inner {
            grid-template-columns: 1fr !important;
            padding: 28px !important;
            gap: 24px !important;
          }
          .project-number {
            font-size: 48px !important;
            top: 16px !important;
            right: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
