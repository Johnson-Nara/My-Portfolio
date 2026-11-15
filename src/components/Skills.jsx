
import { useEffect, useRef, useState } from "react";
import { Code2, PanelsTopLeft, Workflow, Bug } from "lucide-react";
import "./Skills.css";

const skillIcons = {
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  Syncfusion: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
};


const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building interactive and responsive web applications.",
    Icon: Code2,
    skills: ["JavaScript", "TypeScript", "React", "Angular"],
  },
  {
    number: "02",
    title: "UI Development",
    description: "Creating reusable components and data-driven interfaces.",
    Icon: PanelsTopLeft,
    skills: ["Syncfusion", "DataGrid", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    number: "03",
    title: "Tools & Workflow",
    description: "Working with development tools and debugging workflows.",
    Icon: Workflow,
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
        <span className="skills-eyebrow">02 / WHAT I WORK WITH</span>

        <h2>
          My creative <span>toolkit.</span>
        </h2>

        <p>
          Technologies and tools I use to transform ideas
          into functional digital experiences.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = group.Icon;

          return (
            <article className="skill-card" key={group.number}>
              <div className="skill-card-top">
                <span className="skill-number">/ {group.number}</span>

                <span className="skill-icon">
                  <Icon size={25} strokeWidth={1.8} />
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
      title={skill}
    >
      {skillIcons[skill] ? (
        <img
          src={skillIcons[skill]}
          alt=""
          className="skill-tech-icon"
          loading="lazy"
        />
      ) : (
        <span className="skill-custom-icon">
          {skill === "DataGrid" ? (
            <PanelsTopLeft size={22} />
          ) : (
            <Bug size={22} />
          )}
        </span>
      )}

      <span>{skill}</span>
    </span>
  ))}
</div>

              <div className="skill-card-decoration">
                {group.number}
              </div>
            </article>
          );
        })}
      </div>

      <div className="skills-bottom">
        <span>ALWAYS LEARNING. ALWAYS BUILDING.</span>
        <a href="#experience">NEXT: MY EXPERIENCE ↓</a>
      </div>
    </section>
  );
}

export default Skills;
