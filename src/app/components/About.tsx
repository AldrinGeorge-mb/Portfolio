import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const ATTRIBUTES = [
  { label: "Highly Collaborative", desc: "Thrives in cross-functional, fast-paced teams" },
  { label: "Hackathon Experienced", desc: "Proven ability to ship fast under pressure" },
  { label: "Continuous Learner", desc: "Always exploring new tech and best practices" },
];

export function About() {
  return (
    <section id="about" style={{ padding: "100px 0" }}>
      <div className="wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 60 }}
        >
          <span className="section-tag">About</span>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(28px, 4.5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-1)",
            }}
          >
            About &amp; Impact
          </h2>
        </motion.div>

        {/* Two-column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="about-cols"
        >
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Mono label */}
            <p
              className="mono"
              style={{
                fontSize: 12,
                color: "var(--cyan)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              &gt; bio.txt
            </p>

            <p
              style={{
                fontSize: 16,
                color: "var(--text-2)",
                lineHeight: 1.85,
                marginBottom: 28,
              }}
            >
              I am a Full-Stack Engineer with a track record of shipping end-to-end
              web applications and production tools. I specialize in the MERN stack and custom
              backend architectures, engineering scalable, user-centric products that solve
              real-world problems.
            </p>
            <p
              style={{
                fontSize: 16,
                color: "var(--text-2)",
                lineHeight: 1.85,
                marginBottom: 36,
              }}
            >
              I thrive in fast-paced collaborative environments and am driven to deliver
              immediate business impact through clean code.
            </p>

            {/* Mini terminal block */}
            <div
              className="glass"
              style={{ padding: "20px 22px" }}
            >
              <p className="mono term-prompt" style={{ fontSize: 13, lineHeight: 1.9 }}>
                <span className="user">aldrin</span>
                <span className="at">@</span>
                <span className="host">portfolio</span>
                <span className="path"> ~/skills</span>
                <span> $ </span>
                <span className="cmd">cat focus.txt</span>
              </p>
              <div
                style={{
                  marginTop: 12,
                  paddingTop: 12,
                  borderTop: "1px solid var(--border-1)",
                }}
              >
                {["MERN Stack", "Product Architecture", "REST API Design", "Performance Optimization"].map((s) => (
                  <p
                    key={s}
                    className="mono"
                    style={{ fontSize: 12.5, color: "var(--text-2)", lineHeight: 1.8 }}
                  >
                    <span style={{ color: "var(--cyan)", marginRight: 8 }}>›</span>
                    {s}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — attributes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="mono"
              style={{
                fontSize: 12,
                color: "var(--cyan)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              &gt; attributes.json
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {ATTRIBUTES.map((attr, i) => (
                <motion.div
                  key={attr.label}
                  className="attr-card"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div
                    style={{
                      width: 38, height: 38, flexShrink: 0,
                      borderRadius: 10,
                      background: "var(--cyan-dim)",
                      border: "1px solid var(--border-cyan)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--cyan)" />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 15, color: "var(--text-1)", marginBottom: 3 }}>
                      {attr.label}
                    </p>
                    <p className="mono" style={{ fontSize: 12, color: "var(--text-3)" }}>
                      {attr.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .about-cols { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
