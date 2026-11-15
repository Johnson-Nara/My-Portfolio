
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
        scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

      setScrollProgress(progress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {!introDone && <IntroLoader onComplete={handleIntroComplete} />}

      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <main className={`portfolio ${introDone ? "portfolio-ready" : ""}`}>
        <nav className="navbar">
          <a className="brand" href="#home" onClick={closeMenu}>
            JOHNSON<span>.</span>
          </a>

          <span className="nav-role">FRONTEND DEVELOPER</span>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Work</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Let's talk ↗
            </a>
          </div>
        </nav>

        <section className="hero" id="home">
          <div className="hero-glow" />
          <div className="hero-grid" />

          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              FRONTEND DEVELOPER · CHENNAI, INDIA
            </div>

            <p className="subtitle">
              JAVASCRIPT · REACT · TYPESCRIPT
            </p>

            <h1>
              Building
              <br />
              <span>Digital.</span>
              <i className="hero-heading-dot">✳</i>
            </h1>

            <p className="description">
              Creating scalable, interactive and high-performance
              web experiences with React, Angular and TypeScript.
            </p>

            <div className="hero-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>Enterprise UI</span>
            </div>
          </div>

          <div className="scene-container">
            <div className="scene-aura" />
            {/* <div className="scene-label scene-label-top">
              <span>✦</span> INTERACTIVE 3D
            </div> */}

            <div className="floating-tech floating-tech-react">
              <span>⚛</span> React
            </div>
            <div className="floating-tech floating-tech-js">
              <span>JS</span> JavaScript
            </div>
            <div className="floating-tech floating-tech-ts">
              <span>TS</span> TypeScript
            </div>

            <Scene />

            {/* <div className="scene-label scene-label-bottom">
              MOUSE-TRACKING CHARACTER <span>↗</span>
            </div> */}
          </div>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
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

          <div className="hero-bottom">
            <span>DESIGNING · DEVELOPING · IMPROVING</span>
            <a href="#about">SCROLL TO EXPLORE ↓</a>
            <span>01 — 07</span>
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
