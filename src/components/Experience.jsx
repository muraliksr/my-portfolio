import React from "react";

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-head">
        <p className="eyebrow">Experience</p>
        <h2>Hands-on Shopify theme development and customization.</h2>
      </div>
      <div className="resume-grid">
        <article className="resume-card">
          <div className="resume-card-top">
            <h3>Manic Media</h3>
            <span className="resume-pill">2 Years</span>
          </div>
          <p className="resume-role">Shopify Theme Developer</p>
          <ul className="resume-list">
            <li>Shopify theme customization and development.</li>
            <li>Developed and customized Shopify stores using HTML, CSS, JavaScript, and Liquid.</li>
            <li>Worked with Shopify CLI for theme development and customization.</li>
            <li>Created custom sections, blocks, and responsive layouts.</li>
            <li>Additional experience: worked on one Webflow website, including website development, customization, and responsive layout work.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Experience;
