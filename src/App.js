import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [selectedSkill, setSelectedSkill] = useState("All");

  const skills = [
    "All",
    "HTML/CSS",
    "JavaScript",
    "React.js",
    "Shopify (Liquid)",
    "Webflow",
    "Java",
    "Spring Boot (basic)",
    "Git",
    "Postman",
    "VS Code",
  ];

  const projects = [
    {
      title: "Ecommerce Website",
      description: "Storefront with product catalog, cart, and checkout flows.",
      tech: ["React.js", "Shopify (Liquid)", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Student Management System",
      description: "CRUD platform with authentication and role-based access.",
      tech: ["Java", "Spring Boot (basic)"],
    },
    {
      title: "Calculator App",
      description: "Responsive UI with clean interactions.",
      tech: ["React.js", "JavaScript", "HTML/CSS"],
    },
  ];

  return (
    <div>
      <Header />
      <About />
      <Skills
        skills={skills}
        selectedSkill={selectedSkill}
        onSelect={setSelectedSkill}
      />
      <Projects projects={projects} selectedSkill={selectedSkill} />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
