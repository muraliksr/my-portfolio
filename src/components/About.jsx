import React, { useState } from "react";

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            React.js, and Shopify. I build responsive interfaces, craft
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
        </div>
        <div className="about-visual">
          <div className="profile-card">
            <div className="profile-top">
              <div className="avatar">MK</div>
              <div>
                <h3>Frontend & E‑commerce Developer</h3>
                <p className="muted">React • Shopify  • Java (basic)</p>
              </div>
            </div>
            <div className="profile-grid">
              <button
                type="button"
                className="stat stat-button"
                onClick={() => setIsModalOpen(true)}
                aria-label="View experience details"
              >
                <span className="stat-number">2.6+</span>
                <span className="stat-label">Years Experience</span>
              </button>
              <button
                type="button"
                className="stat stat-button"
                onClick={() => setIsModalOpen(true)}
                aria-label="View company details"
              >
                <span className="stat-number">2</span>
                <span className="stat-label">Companies</span>
              </button>
              <button
                type="button"
                className="stat stat-button"
                onClick={() => setIsModalOpen(true)}
                aria-label="View skills details"
              >
                <span className="stat-number">5+</span>
                <span className="stat-label">Core Skills</span>
              </button>
              <button
                type="button"
                className="stat stat-button"
                onClick={() => setIsModalOpen(true)}
                aria-label="View learning details"
              >
                <span className="stat-number">24/7</span>
                <span className="stat-label">Learning</span>
              </button>
            </div>
            <div className="badge-row">
              <a className="badge badge-link" href="#skills">
                Shopify Themes
              </a>
              <a className="badge badge-link" href="#skills">
                React UI
              </a>
              {/* <a className="badge badge-link" href="#skills">
                Webflow
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-card">
            <button
              type="button"
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              x
            </button>
            <h3>Experience Snapshot</h3>
            <p className="modal-lead">
              2.6+ years total across two companies.
            </p>
            <div className="modal-grid">
              <div className="modal-block">
                <h4>Drishticon Consultancy Services</h4>
                <p>1.6 years · React, Java, Postman, GitHub, MySQL</p>
                <a href="#experience" onClick={() => setIsModalOpen(false)}>
                  Go to Experience
                </a>
              </div>
              <div className="modal-block">
                <h4>Manic Media</h4>
                <p>1 year · Shopify theme development</p>
                <a href="#experience" onClick={() => setIsModalOpen(false)}>
                  Go to Experience
                </a>
              </div>
            </div>
            <div className="modal-actions">
              <a href="#experience" onClick={() => setIsModalOpen(false)}>
                View Full Experience
              </a>
              <a href="#skills" onClick={() => setIsModalOpen(false)}>
                View Skills
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
