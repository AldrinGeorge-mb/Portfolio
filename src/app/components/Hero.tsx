import { motion } from "motion/react";
import { useEffect, useState } from "react";

const METRICS = [
  { value: "3+", label: "Years Experience" },
  { value: "4", label: "Core Projects Shipped" },
  { value: "8+", label: "Core Technologies" },
];

/* Typing effect hook */
function useTyping(text: string, speed = 55, startDelay = 900) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const delay = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) { clearInterval(iv); setDone(true); }
      }, speed);
      return () => clearInterval(iv);
    }, startDelay);
    return () => clearTimeout(delay);
  }, [text, speed, startDelay]);
  return { displayed, done };
}

const SUBTITLE = "> FULL-STACK ENGINEER & PRODUCT BUILDER";

export function Hero() {
  const { displayed, done } = useTyping(SUBTITLE);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "140px 24px 80px",
        position: "relative",
      }}
    >
      {/* Ambient orbs */}
      <div
        style={{
          position: "absolute", top: "18%", left: "12%",
          width: 380, height: 380, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,232,255,0.09) 0%, transparent 70%)",
          filter: "blur(50px)", pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute", bottom: "20%", right: "10%",
          width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,44,243,0.07) 0%, transparent 70%)",
          filter: "blur(50px)", pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 800 }}>
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 32, display: "flex", justifyContent: "center" }}
        >

        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="chrome-text"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(52px, 10vw, 110px)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            marginBottom: 28,
          }}
        >
          ALDRIN
          <br />
          GEORGE
        </motion.h1>

        {/* Subtitle typed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: "clamp(13px, 2vw, 17px)",
            color: "var(--text-2)",
            letterSpacing: "0.06em",
            marginBottom: 48,
            minHeight: 26,
          }}
        >
          {displayed}
          {!done && <span className="cursor" />}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 72 }}
        >
          <a href="#projects" className="btn-cyan" onClick={(e) => { e.preventDefault(); scrollTo("#projects"); }}>
            <span>[ View Projects ]</span>
          </a>
          <button className="btn-ghost" onClick={() => scrollTo("#contact")}>
            [ Contact Me ]
          </button>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            maxWidth: 620,
            margin: "0 auto",
          }}
          className="hero-metrics"
        >
          {METRICS.map((m) => (
            <div key={m.label} className="stat-item">
              <p
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 600,
                  color: "var(--cyan)",
                  textShadow: "0 0 24px rgba(0,232,255,0.5)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {m.value}
              </p>
              <p
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 11,
                  color: "var(--text-3)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer",
        }}
        onClick={() => scrollTo("#tech")}
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 1, height: 44,
            background: "linear-gradient(180deg, var(--cyan) 0%, transparent 100%)",
            opacity: 0.5,
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 500px) {
          .hero-metrics { grid-template-columns: 1fr !important; max-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
