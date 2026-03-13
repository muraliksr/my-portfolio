import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <h1>Murali Krishnappan</h1>
          <p>Frontend & E-commerce Developer</p>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
