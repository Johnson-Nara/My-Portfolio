
import { useEffect, useRef, useState } from "react";
import "./About.css";

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "HTML5",
  "CSS3",
  "Syncfusion",
  "Git",
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function About() {
  const [sectionRef, visible] = useReveal();
  const [activeTech, setActiveTech] = useState("JavaScript");

  return (
    <section
      className={`about-section ${visible ? "about-visible" : ""}`}
      id="about"
      ref={sectionRef}
    >

      {/* SECTION HEADING */}
      <div className="about-header">
        <div>
          <span className="about-eyebrow">
            01 / GET TO KNOW ME
          </span>

          <h2>
            Beyond the
            <span> code.</span>
          </h2>
        </div>

        <p className="about-header-description">
          A little introduction to the developer
          behind the interfaces.
        </p>
      </div>

      {/* BENTO GRID */}
      <div className="about-grid">

        {/* PROFILE CARD */}
        <article className="about-card about-profile">

          <div className="profile-top">
            <span className="card-label">
              THE DEVELOPER
            </span>

            <span className="profile-star">✳</span>
          </div>

          <div className="profile-image-container">
            <div className="profile-orbit"></div>

            <img
              src={`${import.meta.env.BASE_URL}images/profile.png`}
              alt="Johnson - Frontend Developer"
              className="profile-image"
            />
          </div>

          <div className="profile-details">
            <div>
              <h3>Johnson S.</h3>
              <p>Frontend Developer</p>
            </div>

            <span className="profile-arrow">↗</span>
          </div>

        </article>

        {/* INTRODUCTION CARD */}
        <article className="about-card about-intro">
          <span className="card-label">
            HELLO, I'M JOHNSON
          </span>

          <h3>
            I turn ideas into
            <span> meaningful </span>
            digital experiences.
          </h3>

          <p>
            I'm a Frontend Developer focused on building
            responsive, intuitive and user-friendly web applications.

            With experience in JavaScript, TypeScript, React,
            Angular and Syncfusion UI components, I enjoy
            solving complex UI challenges and creating
            reliable frontend experiences.
          </p>

          <div className="intro-decoration">“</div>
        </article>

        {/* EXPERIENCE CARD */}
        <article className="about-card about-experience">

          <span className="card-label">
            EXPERIENCE
          </span>

          <div className="experience-number">
            4<span>+</span>
          </div>

          <h4>Years in Frontend Development</h4>

          <p>
            Building and improving frontend
            interfaces and UI components.
          </p>

          <div className="experience-line">
            <span></span>
          </div>

        </article>

        {/* SPECIALIZATION CARD */}
        <article className="about-card about-specialty">

          <span className="card-label">
            WHAT I DO
          </span>

          <div className="specialty-icon">✦</div>

          <h3>Frontend Engineering</h3>

          <p>
            Developing reusable UI components, responsive
            layouts and interactive web applications.
          </p>

          <span className="specialty-decoration">✧</span>

        </article>

        {/* TECHNOLOGY CARD */}
        <article className="about-card about-tech">

          <div className="tech-header">
            <div>
              <span className="card-label">
                MY TOOLKIT
              </span>

              <h3>Technologies I work with</h3>
            </div>

            <span className="tech-sparkle">✳</span>
          </div>

          <div className="tech-list">
            {technologies.map((tech) => (
              <button
                key={tech}
                className={`tech-item ${activeTech === tech ? "active" : ""}`}
                onMouseEnter={() => setActiveTech(tech)}
                onFocus={() => setActiveTech(tech)}
                onClick={() => setActiveTech(tech)}
              >
                <span className="tech-dot"></span>
                {tech}
              </button>
            ))}
          </div>

          <div className="tech-footer">
            <span>CURRENTLY EXPLORING</span>
            <strong>{activeTech}</strong>
          </div>

        </article>

        {/* PERSONALITY CARD */}
        <article className="about-card about-personality">

          <span className="card-label">
            MY APPROACH
          </span>

          <h3>
            Think.
            <span> Create.</span>
            Improve.
          </h3>

          <p>
            I enjoy solving problems, learning new
            technologies and turning creative ideas
            into meaningful digital products.
          </p>

          <div className="personality-symbol">
            ✳
          </div>

        </article>

      </div>

      {/* BOTTOM MESSAGE */}
      <div className="about-footer">
        <span>THAT'S A LITTLE ABOUT ME.</span>
        <a href="#skills">
          NEXT: EXPLORE MY SKILLS ↓
        </a>
      </div>

    </section>
  );
}

export default About;
