
import { useCallback, useEffect, useState } from "react";

import Scene from "./components/Scene";
import IntroLoader from "./components/IntroLoader";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  const [introDone, setIntroDone] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroDone(true);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollable > 0
          ? (window.scrollY / scrollable) * 100
          : 0;

      setScrollProgress(progress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {!introDone && (
        <IntroLoader onComplete={handleIntroComplete} />
      )}

      <div
        className="scroll-progress"
        style={{
          transform: `scaleX(${scrollProgress / 100})`,
        }}
      />

      <main
        className={`portfolio ${
          introDone ? "portfolio-ready" : ""
        }`}
      >
        <nav className="navbar">
          <a
            className="brand"
            href="#home"
            onClick={closeMenu}
          >
            JOHNSON<span>.</span>
          </a>

          <span className="nav-role">
            FRONTEND DEVELOPER
          </span>

          <button
            className="menu-toggle"
            type="button"
            aria-label={
              menuOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((open) => !open)
            }
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div
            className={`nav-links ${
              menuOpen ? "nav-open" : ""
            }`}
          >
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Work</a>
            <a
              className="nav-contact"
              href="#contact"
              onClick={closeMenu}
            >
              Let's talk ↗
            </a>
          </div>
        </nav>

        <section className="hero" id="home">
          <div className="hero-glow" />
          <div className="hero-grid" />

          <div className="hero-copy">
            
            <h1>
              Johnson <span>S</span>
              <i className="hero-heading-dot">✳</i>
            </h1>

            <h2 className="subheading">
              Frontend Developer
            </h2>
            <p className="description">
              I build clean, responsive web experiences with JavaScript, React and TypeScript.
            </p>
          </div>

          <div className="scene-container">
            <div className="scene-aura" />
            <Scene />
          </div>

          <div className="hero-actions">
            <a
              className="primary-button"
              href="#projects"
            >
              Explore My Work <span>↗</span>
            </a>

            <a
              className="secondary-button"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume <span>↓</span>
            </a>
          </div>
        </section>

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
