
import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="education-heading reveal">
          <span className="section-eyebrow">05 / EDUCATION</span>
          <h2>
            The foundation 
            of my <span>journey.</span>
          </h2>
          <p>
            My academic background helped me develop a foundation
            in technology, logical thinking, and problem-solving.
          </p>
        </div>

        <div className="education-card reveal">
          <div className="education-icon">✦</div>

          <div className="education-details">
            <span className="education-label">BACHELOR'S DEGREE</span>
            <h3>B.Tech – Information Technology</h3>
            <h4>Kings Engineering College</h4>
            <p>2018 – 2022</p>
          </div>

          <div className="education-score">
            <strong>7.8</strong>
            <span>CGPA</span>
          </div>
        </div>

        <div className="education-note reveal">
          <span>LEARN</span>
          <span>BUILD</span>
          <span>IMPROVE</span>
          <span>REPEAT</span>
        </div>
      </div>
    </section>
  );
}
