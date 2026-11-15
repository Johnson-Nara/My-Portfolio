
import { useEffect, useRef, useState } from "react";
import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building interactive and responsive web applications.",
    icon: "⌘",
    skills: ["JavaScript", "TypeScript", "React", "Angular"],
  },
  {
    number: "02",
    title: "UI Development",
    description: "Creating reusable components and data-driven interfaces.",
    icon: "✳",
    skills: ["Syncfusion", "DataGrid", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    number: "03",
    title: "Tools & Workflow",
    description: "Working with development tools and debugging workflows.",
    icon: "⌁",
    skills: ["Git", "GitHub", "Debugging", "VS Code"],
  },
];

function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
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

  return (
    <section
      className={`skills-section ${visible ? "skills-visible" : ""}`}
      id="skills"
      ref={sectionRef}
    >
      <div className="skills-header">
        <div>
          <span className="skills-eyebrow">
            02 / WHAT I WORK WITH
          </span>

          <h2>
            My creative
            <span> toolkit.</span>
          </h2>
        </div>

        <p>
          Technologies and tools I use to transform
          ideas into functional digital experiences.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.number}>
            <div className="skill-card-top">
              <span className="skill-number">
                / {group.number}
              </span>
              <span className="skill-icon">
                {group.icon}
              </span>
            </div>

            <h3>{group.title}</h3>

            <p>{group.description}</p>

            <div className="skill-tags">
              {group.skills.map((skill, index) => (
                <span
                  className="skill-tag"
                  key={skill}
                  style={{ "--tag-index": index }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="skill-card-decoration">
              {group.number}
            </div>
          </article>
        ))}
      </div>

      <div className="skills-bottom">
        <span>ALWAYS LEARNING. ALWAYS BUILDING.</span>
        <a href="#experience">
          NEXT: MY EXPERIENCE ↓
        </a>
      </div>
    </section>
  );
}

export default Skills;
