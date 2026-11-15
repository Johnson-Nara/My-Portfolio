
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CalendarDays, Sparkles } from "lucide-react";
import "./Education.css";

const learningSteps = ["LEARN", "BUILD", "IMPROVE", "REPEAT"];

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">05 / EDUCATION</span>

          <h2>
            The foundation 
            of my <span>journey.</span>
          </h2>

          <p>
            My academic background helped me develop a foundation
            in technology, logical thinking, and problem-solving.
          </p>
        </motion.div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          whileHover={{ y: -6 }}
        >
          <div className="education-icon">
            <GraduationCap size={32} strokeWidth={1.7} />
          </div>

          <div className="education-details">
            <span className="education-label">BACHELOR'S DEGREE</span>

            <h3>B.Tech – Information Technology</h3>

            <h4>Kings Engineering College</h4>

            <div className="education-period">
              <CalendarDays size={15} />
              <span>2018 – 2022</span>
            </div>
          </div>

          <div className="education-score">
            <strong>7.8</strong>
            <span>CGPA</span>
          </div>

          <div className="education-decoration">
            <Sparkles size={22} />
          </div>
        </motion.div>

        <motion.div
          className="education-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {learningSteps.map((step, index) => (
            <React.Fragment key={step}>
              <span>{step}</span>
              {index !== learningSteps.length - 1 && (
                <i className="education-note-dot" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
