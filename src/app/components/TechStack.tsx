import { motion } from "motion/react";

const TECHS = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "Python",
  "C",
  "C++",
  "Tailwind CSS",
  "Vite",
];

export function TechStack() {
  return (
    <section id="tech" style={{ padding: "100px 0" }}>
      <div className="wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 52, textAlign: "center" }}
        >
          <span className="section-tag">Technologies</span>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-1)",
              marginBottom: 12,
            }}
          >
            Core Technologies
          </h2>
          <p
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: 13,
              color: "var(--text-3)",
              letterSpacing: "0.04em",
            }}
          >
            // tools i actually ship with
          </p>
        </motion.div>

        {/* Chip grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
          }}
        >
          {TECHS.map((tech, i) => (
            <motion.span
              key={tech}
              className="tech-chip"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
