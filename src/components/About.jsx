import React from "react";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-inner">
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2 className="about-title">
            Frontend & E‑commerce developer crafting responsive, conversion-ready
            experiences.
          </h2>
          <p className="about-lead">
            Frontend & E‑commerce Developer with 2.6 years of experience in
            React.js, Shopify, and Webflow. I build responsive interfaces, craft
            custom Shopify sections, and collaborate closely with cross‑functional
            teams to ship polished storefronts.
          </p>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Responsive UI</h3>
              <p>Layouts that adapt beautifully across devices.</p>
            </div>
            <div className="highlight-card">
              <h3>Shopify (Liquid)</h3>
              <p>Custom sections, theme updates, and storefront polish.</p>
            </div>
            <div className="highlight-card">
              <h3>Team Collaboration</h3>
              <p>Design handoffs, API integration, and QA support.</p>
            </div>
          </div>
          <div className="about-actions">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a className="btn ghost" href="#contact">
              Let’s Collaborate
            </a>
          </div>
        </div>
        <div className="about-visual">
          <div className="profile-card">
            <div className="profile-top">
              <div className="avatar">MK</div>
              <div>
                <h3>Frontend & E‑commerce Developer</h3>
                <p className="muted">React • Shopify • Webflow • Java (basic)</p>
              </div>
            </div>
            <div className="profile-grid">
              <div className="stat">
                <span className="stat-number">2.6+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Companies</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Core Skills</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Learning</span>
              </div>
            </div>
            <div className="badge-row">
              <span className="badge">Shopify Themes</span>
              <span className="badge">React UI</span>
              <span className="badge">Webflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
