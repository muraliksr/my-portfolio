import React from "react";

function Projects({ projects, selectedSkill }) {
  const visibleProjects =
    selectedSkill === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(selectedSkill));

  return (
    <section className="section projects-section" id="projects">
      <div className="section-head">
        <p className="eyebrow">Projects</p>
        <h2>
          {selectedSkill === "All"
            ? "Selected work across the stack."
            : `Projects using ${selectedSkill}.`}
        </h2>
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <article
            className={`project-card${project.link ? " project-card-link" : ""}`}
            key={project.title}
            onClick={
              project.link
                ? () => window.open(project.link, "_blank", "noreferrer")
                : undefined
            }
            onKeyDown={
              project.link
                ? (event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      window.open(project.link, "_blank", "noreferrer");
                    }
                  }
                : undefined
            }
            role={project.link ? "link" : undefined}
            tabIndex={project.link ? 0 : undefined}
          >
            <div className="project-card-top">
              <h3>{project.title}</h3>
              <span className="project-pill">{project.tech[0]}</span>
            </div>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tech.map((tech) => (
                <span className="tag" key={`${project.title}-${tech}`}>
                  {tech}
                </span>
              ))}
            </div>
            {project.apkLink && (
              <div className="project-actions">
                <a
                  className="project-action"
                  href={project.apkLink}
                  download
                  onClick={(event) => event.stopPropagation()}
                >
                  Download APK
                </a>
              </div>
            )}
          </article>
        ))}
        {visibleProjects.length === 0 && (
          <p className="empty-state">
            No projects for this skill yet. More coming soon.
          </p>
        )}
      </div>
    </section>
  );
}

export default Projects;
