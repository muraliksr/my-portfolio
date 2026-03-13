import React from "react";

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="section-head">
        <p className="eyebrow">Education</p>
        <h2>Academic background and certifications.</h2>
      </div>
      <div className="resume-grid">
        <article className="resume-card">
          <div className="resume-card-top">
            <h3>B.E – Perumal Manimekalai College of Engineering</h3>
            <span className="resume-pill">2018 – 2021</span>
          </div>
          <p className="resume-role">CGPA: 7.8</p>
        </article>
        <article className="resume-card">
          <div className="resume-card-top">
            <h3>Certifications</h3>
            <span className="resume-pill">Professional</span>
          </div>
          <ul className="resume-list">
            <li>Full Stack Developer – J‑Spiders</li>
            <li>Spring Boot, React.js, Java – Great Learning</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Education;
