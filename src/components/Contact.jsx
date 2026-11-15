
import React from "react";
import "./Contact.css";

export default function Contact() {
  const email = "sjohnson.nara@gmail.com";

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-card reveal">
          <span className="section-eyebrow">06 / GET IN TOUCH</span>

          <h2>
            Have an idea?
            <br />
            Let's <span>build it.</span>
          </h2>

          <p>
            I'm open to frontend developer opportunities and
            conversations about JavaScript, React, TypeScript,
            and building better user experiences.
          </p>

          <a className="contact-email" href={`mailto:${email}`}>
            <span>Let's talk</span>
            <span className="contact-arrow">↗</span>
          </a>

          <div className="contact-divider" />

          <div className="contact-bottom">
            <div>
              <span className="contact-small-label">EMAIL</span>
              <a href={`mailto:${email}`}>{email}</a>
            </div>

            <div className="contact-socials">
              <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href="YOUR_GITHUB_URL" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        <footer className="portfolio-footer">
          <span>© {new Date().getFullYear()} Johnson S</span>
          <span>DESIGNED & BUILT WITH PASSION</span>
          <a href="#home">BACK TO TOP ↑</a>
        </footer>
      </div>
    </section>
  );
}
