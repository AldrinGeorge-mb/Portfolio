import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

const roles = ["Full-Stack Engineer", "SaaS Builder", "React Developer", "Node.js Expert"];

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: 120 }}
    >
      {/* Large decorative orbs */}
      <div
        className="float-animation"
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.09) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      <div
        className="wrap"
        style={{ position: "relative", zIndex: 10 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Left — Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 24 }}
            >
              <span className="pill pill-violet">
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "inline-block",
                  }}
                />
                Open to opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(42px, 7vw, 78px)",
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: "#f0f2ff",
                  marginBottom: 16,
                }}
              >
                Crafting digital
                <br />
                <span className="gradient-text">experiences</span>
                <br />
                that matter.
              </h1>
            </motion.div>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                fontSize: 18,
                color: "#9ca3c4",
                lineHeight: 1.7,
                maxWidth: 520,
                marginBottom: 40,
              }}
            >
              I'm Aldrin George — a full-stack engineer who builds fast, beautiful,
              and scalable web applications. From idea to production, I ship products
              that users love.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
            >
              <button
                className="btn-primary"
                onClick={() => scrollTo("#projects")}
              >
                View Projects
                <ArrowRight size={18} />
              </button>
              <button
                className="btn-outline"
                onClick={() => scrollTo("#contact")}
              >
                Get in touch
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                display: "flex",
                gap: 40,
                marginTop: 56,
                paddingTop: 40,
                borderTop: "1px solid rgba(139, 92, 246, 0.15)",
              }}
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "20+", label: "Projects Shipped" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 28,
                      fontWeight: 700,
                      color: "#f0f2ff",
                      letterSpacing: "-0.02em",
                    }}
                    className="gradient-text-violet"
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#5b6285",
                      marginTop: 2,
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div
              className="glass-card float-animation"
              style={{
                width: 280,
                padding: "28px 24px",
                borderColor: "rgba(139, 92, 246, 0.25)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.4), 0 0 40px rgba(139,92,246,0.15)",
              }}
            >
              {/* Avatar */}
              <div style={{ textAlign: "center", marginBottom: 20 }}>
                <div
                  className="avatar-ring"
                  style={{ display: "inline-block", marginBottom: 12 }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #38bdf8 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: 24,
                      color: "white",
                      margin: 3,
                    }}
                  >
                    AG
                  </div>
                </div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#f0f2ff",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Aldrin George
                </p>
                <p style={{ fontSize: 12, color: "#5b6285", marginTop: 2 }}>
                  Full-Stack Engineer
                </p>
              </div>

              {/* Role pills */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginBottom: 20,
                }}
              >
                {[
                  { label: "React & Next.js", color: "sky" },
                  { label: "Node.js & Express", color: "violet" },
                  { label: "MongoDB", color: "pink" },
                  { label: "TypeScript", color: "sky" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className={`pill pill-${item.color}`}
                    style={{ justifyContent: "center" }}
                  >
                    {item.label}
                  </motion.div>
                ))}
              </div>

              {/* Bottom status */}
              <div
                style={{
                  borderTop: "1px solid rgba(139,92,246,0.15)",
                  paddingTop: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <div
                  className="availability-dot"
                  style={{ width: 8, height: 8 }}
                >
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
                <span style={{ fontSize: 12, color: "#22c55e", fontWeight: 500 }}>
                  Available for hire
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
        }}
        onClick={() => scrollTo("#about")}
      >
        <span style={{ fontSize: 11, color: "#5b6285", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(180deg, rgba(139,92,246,0.6) 0%, transparent 100%)",
          }}
        />
      </motion.div>
    </section>
  );
}
