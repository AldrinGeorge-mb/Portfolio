import { ParticleBackground } from "./components/ParticleBackground";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import "../styles/obsidian.css";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <ParticleBackground />
      <Header />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}