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
    "HTML5",
    "CSS3",
    "JavaScript",
    "Shopify Liquid",
    "Shopify CLI",
    "Webflow",
  ];

  const projects = [
    {
      title: "WearComet",
      description: "Shopify storefront customization and responsive e-commerce development.",
      tech: ["HTML", "CSS", "JavaScript", "Shopify Liquid"],
      link: "https://www.wearcomet.com/",
      image:
        "https://image.thum.io/get/width/1200/crop/800/https://www.wearcomet.com/",
    },
    {
      title: "Wear Lafoli",
      description: "Shopify website customization with polished, responsive storefront layouts.",
      tech: ["HTML", "CSS", "JavaScript", "Shopify Liquid"],
      link: "https://wearlafoli.com/",
      image:
        "https://image.thum.io/get/width/1200/crop/800/https://wearlafoli.com/",
    },
    {
      title: "Minus30",
      description: "Shopify collection page development and responsive theme customization.",
      tech: ["HTML", "CSS", "JavaScript", "Shopify Liquid"],
      link: "https://minus30.co/collections/plant-based-sugar-free",
      image:
        "https://image.thum.io/get/width/1200/crop/800/https://minus30.co/collections/plant-based-sugar-free",
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
