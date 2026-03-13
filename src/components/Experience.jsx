import React from "react";

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-head">
        <p className="eyebrow">Experience</p>
        <h2>Hands-on work delivering real storefronts and UI systems.</h2>
      </div>
      <div className="resume-grid">
        <article className="resume-card">
          <div className="resume-card-top">
            <h3>Manic Media</h3>
            <span className="resume-pill">Apr 2024 – Present</span>
          </div>
          <p className="resume-role">E‑commerce Developer (Shopify)</p>
          <ul className="resume-list">
            <li>Shopify theme customization, Liquid coding, responsive design.</li>
            <li>Builds dynamic sections and collaborates with the design team.</li>
          </ul>
        </article>
        <article className="resume-card">
          <div className="resume-card-top">
            <h3>Drishticon Consultancy Services</h3>
            <span className="resume-pill">Nov 2022 – Mar 2024</span>
          </div>
          <p className="resume-role">Frontend Developer</p>
          <ul className="resume-list">
            <li>Developed UI components in React.js and integrated APIs.</li>
            <li>Performance improvements and collaboration with backend teams.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Experience;
