
import { useEffect, useRef, useState } from "react";
import "./Experience.css";

const experiences = [
  {
    number: "01",
    period: "4+ YEARS",
    role: "Frontend Developer",
    company: "Syncfusion Software Private Limited",
    type: "Professional Experience",
    description:
      "Developing and maintaining interactive user interfaces using modern frontend technologies.",
    responsibilities: [
      "Developed UI features using JavaScript and TypeScript.",
      "Worked with React and Angular for frontend development.",
      "Worked on Syncfusion components, especially DataGrid.",
      "Improved component usability and fixed UI-related bugs.",
      "Implemented templates, column visibility and header alignment improvements.",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Syncfusion",
    ],
  },
];

function Experience() {
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
      className={`experience-section ${
        visible ? "experience-visible" : ""
      }`}
      id="experience"
      ref={sectionRef}
    >
      <div className="experience-header">
        <div>
          <span className="experience-eyebrow">
            03 / MY JOURNEY
          </span>

          <h2>
            Professional
            <span> experience.</span>
          </h2>
        </div>

        <p>
          My journey in frontend development,
          building interfaces and solving
          real-world UI challenges.
        </p>
      </div>

      <div className="experience-timeline">
        <div className="timeline-line"></div>

        {experiences.map((item) => (
          <article className="experience-item" key={item.number}>
            <div className="timeline-marker">
              <span>{item.number}</span>
            </div>

            <div className="experience-card">
              <div className="experience-card-top">
                <span className="experience-period">
                  {item.period}
                </span>

                <span className="experience-type">
                  {item.type}
                </span>
              </div>

              <div className="experience-main">
                <div className="experience-role">
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                </div>

                <span className="experience-arrow">↗</span>
              </div>

              <p className="experience-description">
                {item.description}
              </p>

              <div className="responsibilities">
                <h5>KEY CONTRIBUTIONS</h5>

                <ul>
                  {item.responsibilities.map((task) => (
                    <li key={task}>
                      <span className="responsibility-dot"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="experience-tech">
                {item.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="experience-note">
        <div className="experience-note-icon">✳</div>

        <div>
          <h3>Focused on continuous improvement.</h3>
          <p>
            I enjoy learning new technologies,
            improving existing components and
            creating better user experiences.
          </p>
        </div>
      </div>

      <div className="experience-footer">
        <span>GROWING THROUGH EVERY PROJECT.</span>

        <a href="#projects">
          NEXT: FEATURED PROJECTS ↓
        </a>
      </div>
    </section>
  );
}

export default Experience;
