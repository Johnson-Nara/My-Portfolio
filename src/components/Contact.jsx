
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  GitFork,
  BriefcaseBusiness,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import "./Contact.css";

const contactLinks = [
  {
    label: "EMAIL",
    value: "sjohnson.nara@gmail.com",
    href: "mailto:sjohnson.nara@gmail.com",
    icon: Mail,
  },
  {
    label: "LINKEDIN",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/johnson-s-26a3382b1/",
    icon: BriefcaseBusiness,
  },
  {
    label: "GITHUB",
    value: "Explore my projects",
    href: "https://github.com/Johnson-Nara",
    icon: GitFork,
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">06 / GET IN TOUCH</span>

          <h2>
            Let's create
            <br />
            something <span>great.</span>
          </h2>

          <p>
            Have an opportunity, an interesting idea, or just want to connect?
            I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="contact-main-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-main-content">
            <div className="contact-message-icon">
              <MessageCircle size={25} />
            </div>

            <span className="contact-small-label">
              HAVE A PROJECT IN MIND?
            </span>

            <h3>
              Let's talk about
              <br />
              your next idea.
            </h3>

            <p>
              I'm open to frontend development opportunities,
              collaborations, and meaningful conversations.
            </p>

            <a
              href="mailto:sjohnson.nara@gmail.com"
              className="contact-email-button"
            >
              Get in touch
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-decoration">
            <div className="contact-orbit orbit-one" />
            <div className="contact-orbit orbit-two" />
            <div className="contact-orbit orbit-three" />
            <div className="contact-orbit-center">
              <Mail size={42} />
            </div>
          </div>
        </motion.div>

        <div className="contact-links">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "EMAIL" ? undefined : "_blank"}
                rel="noreferrer"
                className="contact-link-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -5 }}
              >
                <div className="contact-link-icon">
                  <Icon size={21} />
                </div>

                <div className="contact-link-info">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>

                <ArrowUpRight
                  className="contact-link-arrow"
                  size={19}
                />
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>DESIGNED & BUILT WITH CARE</span>
          <span>© {new Date().getFullYear()} JOHNSON S.</span>
        </motion.div>

      </div>
    </section>
  );
}
