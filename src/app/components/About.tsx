import { motion } from "motion/react";
import { Code2, Lightbulb, Users, Rocket } from "lucide-react";

const values = [
  {
    icon: <Code2 size={22} />,
    title: "Clean Code",
    desc: "I write code that's readable, maintainable, and built to last — not just to ship fast.",
    color: "violet",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Problem Solving",
    desc: "I break down complex problems into elegant solutions that are both functional and performant.",
    color: "sky",
  },
  {
    icon: <Users size={22} />,
    title: "Collaboration",
    desc: "I believe the best work comes from cross-functional teams where everyone has a voice.",
    color: "pink",
  },
  {
    icon: <Rocket size={22} />,
    title: "Ship Fast",
    desc: "I move quickly without cutting corners — iterating rapidly based on user feedback.",
    color: "violet",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  violet: { bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.3)", text: "#a78bfa" },
  sky: { bg: "rgba(56,189,248,0.1)", border: "rgba(56,189,248,0.3)", text: "#38bdf8" },
  pink: { bg: "rgba(244,114,182,0.1)", border: "rgba(244,114,182,0.3)", text: "#f472b6" },
};

export function About() {
  return (
    <section id="about" style={{ padding: "100px 0" }}>
      <div className="wrap">
        {/* Two column intro */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
            marginBottom: 80,
          }}
          className="about-grid"
        >
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">About Me</p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#f0f2ff",
                marginBottom: 24,
                lineHeight: 1.15,
              }}
            >
              Passionate about turning ideas into{" "}
              <span className="gradient-text">great software</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#9ca3c4",
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              I'm a full-stack engineer with a love for building things from scratch.
              I enjoy working across the entire stack — from designing responsive UIs
              to architecting backend systems and deploying to production.
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#9ca3c4",
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              When I'm not coding, I explore new technologies, contribute to side
              projects, and stay curious about the latest in web development. My goal
              is always the same: build something that makes people's lives easier.
            </p>

            {/* CTA */}
            <div style={{ display: "flex", gap: 16 }}>
              <a
                href="mailto:aldrin@example.com"
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                Let's Talk
              </a>
              <a
                href="#"
                className="btn-outline"
                style={{ textDecoration: "none" }}
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right — experience visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="glass-card"
              style={{
                padding: "32px",
                borderColor: "rgba(139,92,246,0.2)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.3), 0 0 40px rgba(139,92,246,0.1)",
              }}
            >
              {/* Timeline items */}
              <p
                style={{
                  fontSize: 12,
                  color: "#5b6285",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                Journey
              </p>

              {[
                {
                  year: "2026",
                  title: "Full-Stack Engineer",
                  desc: "Building SaaS products with React, Node.js & MongoDB",
                  active: true,
                },
                {
                  year: "2024",
                  title: "Frontend Developer",
                  desc: "Crafted responsive UIs and interactive web experiences",
                  active: false,
                },
                {
                  year: "2023",
                  title: "Started Coding",
                  desc: "Fell in love with HTML, CSS & JavaScript",
                  active: false,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    display: "flex",
                    gap: 20,
                    marginBottom: i < 2 ? 24 : 0,
                    position: "relative",
                  }}
                >
                  {/* Line */}
                  {i < 2 && (
                    <div
                      style={{
                        position: "absolute",
                        left: 19,
                        top: 28,
                        width: 2,
                        height: "calc(100% + 24px)",
                        background: "rgba(139,92,246,0.2)",
                      }}
                    />
                  )}

                  {/* Dot */}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: item.active
                        ? "linear-gradient(135deg, #7c3aed, #6366f1)"
                        : "rgba(11,14,32,0.8)",
                      border: `2px solid ${item.active ? "#8b5cf6" : "rgba(139,92,246,0.3)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: item.active ? "white" : "rgba(139,92,246,0.6)",
                        display: "block",
                      }}
                    />
                  </div>

                  <div style={{ paddingTop: 8 }}>
                    <span
                      style={{
                        fontSize: 11,
                        color: "#8b5cf6",
                        fontFamily: "'JetBrains Mono', monospace",
                        display: "block",
                        marginBottom: 4,
                      }}
                    >
                      {item.year}
                    </span>
                    <p
                      style={{
                        fontWeight: 600,
                        color: "#f0f2ff",
                        fontSize: 15,
                        marginBottom: 4,
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ fontSize: 13, color: "#5b6285", lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 24 }}
        >
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 24,
              fontWeight: 700,
              color: "#f0f2ff",
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            How I work
          </h3>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 20,
          }}
        >
          {values.map((v, i) => {
            const c = colorMap[v.color];
            return (
              <motion.div
                key={v.title}
                className="glass-card glass-card-hover"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ padding: 24 }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: c.bg,
                    border: `1px solid ${c.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: c.text,
                    marginBottom: 20,
                  }}
                >
                  {v.icon}
                </div>
                <h4
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#f0f2ff",
                    marginBottom: 10,
                  }}
                >
                  {v.title}
                </h4>
                <p style={{ fontSize: 14, color: "#5b6285", lineHeight: 1.65 }}>{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
