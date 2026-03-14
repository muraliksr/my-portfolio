import React, { useState } from "react";

function Skills({ skills, selectedSkill, onSelect }) {
  const [animateKey, setAnimateKey] = useState(0);

  const handleSelect = (skill) => {
    setAnimateKey((prev) => prev + 1);
    onSelect(skill);
  };

  return (
    <section className="section skills-section" id="skills">
      <div className="section-head">
        <p className="eyebrow">Skills</p>
        <h2>Filter projects by the stack you care about.</h2>
        <p className="section-subtitle">
          Tap a skill to see related work below.
        </p>
      </div>
      <div className="skills">
        {skills.map((skill) => (
          <button
            key={`${skill}-${animateKey}`}
            type="button"
            className={`skill-pill ${
              selectedSkill === skill ? "active" : ""
            }`}
            onClick={() => handleSelect(skill)}
          >
            {skill}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Skills;
