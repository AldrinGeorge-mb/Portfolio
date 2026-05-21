import { motion } from "motion/react";

const techStack = [
  { name: "React", icon: "⚛️", desc: "UI Library", color: "#38bdf8" },
  { name: "TypeScript", icon: "𝑇𝑆", desc: "Language", color: "#818cf8" },
  { name: "Node.js", icon: "⬡", desc: "Runtime", color: "#22c55e" },
  { name: "Next.js", icon: "▲", desc: "Framework", color: "#f0f2ff" },
  { name: "MongoDB", icon: "🍃", desc: "Database", color: "#22c55e" },
  { name: "Express", icon: "⚡", desc: "Backend", color: "#f59e0b" },
  { name: "Python", icon: "🐍", desc: "Language", color: "#facc15" },
  { name: "Tailwind", icon: "🌊", desc: "Styling", color: "#38bdf8" },
];

const categories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "sky",
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "REST APIs", "Python"],
    color: "violet",
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: ["MongoDB", "Mongoose", "Firebase"],
    color: "pink",
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vite"],
    color: "sky",
  },
];

export function TechStack() {
  return (
    <section id="tech" style={{ padding: "100px 0" }}>
      <div className="wrap">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <p className="section-label">Tech Stack</p>
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
            Tools I build with
          </h2>
          <p style={{ fontSize: 17, color: "#9ca3c4", maxWidth: 480 }}>
            A curated set of technologies I rely on to build fast, maintainable,
            and beautiful products.
          </p>
        </motion.div>

        {/* Tech icons strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: 12,
            marginBottom: 56,
          }}
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="tech-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              style={{ flexDirection: "column", textAlign: "center", padding: "20px 16px" }}
            >
              <span style={{ fontSize: 26, marginBottom: 8, display: "block" }}>
                {tech.icon}
              </span>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#f0f2ff",
                  display: "block",
                  marginBottom: 2,
                }}
              >
                {tech.name}
              </span>
              <span style={{ fontSize: 11, color: "#5b6285" }}>{tech.desc}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Category cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="glass-card glass-card-hover"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ padding: "24px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background:
                      cat.color === "sky"
                        ? "rgba(56,189,248,0.12)"
                        : cat.color === "violet"
                        ? "rgba(139,92,246,0.12)"
                        : "rgba(244,114,182,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    color: "#f0f2ff",
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`pill pill-${cat.color}`}
                    style={{ fontSize: 11 }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
