import { motion } from "motion/react";
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:aldrin@example.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer id="contact" style={{ padding: "100px 0 60px" }}>
      <div className="wrap">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p className="section-label" style={{ justifyContent: "center" }}>
            Contact
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#f0f2ff",
              marginBottom: 16,
            }}
          >
            Let's build something{" "}
            <span className="gradient-text">together</span>
          </h2>
          <p style={{ fontSize: 17, color: "#9ca3c4", maxWidth: 480, margin: "0 auto" }}>
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's make something great.
          </p>
        </motion.div>

        {/* Two-column contact layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "48px",
            alignItems: "start",
            marginBottom: 80,
          }}
          className="contact-grid"
        >
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="glass-card"
              style={{ padding: "32px", borderColor: "rgba(139,92,246,0.2)" }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#f0f2ff",
                  marginBottom: 24,
                }}
              >
                Get in touch
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Email */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 12,
                      background: "rgba(139,92,246,0.1)",
                      border: "1px solid rgba(139,92,246,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#a78bfa",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: "#5b6285", marginBottom: 2 }}>Email</p>
                    <a
                      href="mailto:aldrin@example.com"
                      style={{
                        fontSize: 14,
                        color: "#f0f2ff",
                        textDecoration: "none",
                        fontWeight: 500,
                      }}
                    >
                      aldrin@example.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 12,
                      background: "rgba(56,189,248,0.1)",
                      border: "1px solid rgba(56,189,248,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#38bdf8",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: "#5b6285", marginBottom: 2 }}>Location</p>
                    <p style={{ fontSize: 14, color: "#f0f2ff", fontWeight: 500 }}>
                      Kerala, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: "rgba(139,92,246,0.15)",
                  margin: "28px 0",
                }}
              />

              {/* Social links */}
              <p style={{ fontSize: 12, color: "#5b6285", marginBottom: 16 }}>
                Find me online
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:aldrin@example.com"
                  className="social-btn"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="glass-card"
              style={{ padding: "32px", borderColor: "rgba(139,92,246,0.2)" }}
            >
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: 13,
                        color: "#9ca3c4",
                        display: "block",
                        marginBottom: 8,
                        fontWeight: 500,
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="contact-input"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, name: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 13,
                        color: "#9ca3c4",
                        display: "block",
                        marginBottom: 8,
                        fontWeight: 500,
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="contact-input"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, email: e.target.value }))
                      }
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label
                    style={{
                      fontSize: 13,
                      color: "#9ca3c4",
                      display: "block",
                      marginBottom: 8,
                      fontWeight: 500,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    className="contact-input"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    style={{ resize: "vertical", minHeight: 120 }}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", fontSize: 15 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sent ? (
                    "Message Sent! ✓"
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="divider" style={{ marginBottom: 32 }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 13, color: "#5b6285" }}>
            © 2026 Aldrin George. Built with React & Vite.
          </p>
          <p
            style={{
              fontSize: 13,
              color: "#5b6285",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Made with ❤️ in Kerala, India
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </footer>
  );
}
