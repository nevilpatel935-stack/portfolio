import React from "react";
const projects = [
  { number: "01", title: "Library Management System", type: "C++ · Object-Oriented Programming", description: "Developed a library management project using C++ and OOP concepts such as inheritance, encapsulation, constructors and exception handling.", icon: "bi-book" },
  { number: "02", title: "Banking System", type: "C++ · OOP", description: "Created a banking application using classes and objects, applying inheritance and polymorphism concepts for account management.", icon: "bi-bank" },
  { number: "03", title: "Vehicle Registry System", type: "C++ · OOP", description: "Implemented constructors, static members, arrays of objects and inheritance to manage vehicle records efficiently.", icon: "bi-car-front" }
];

export default function Projects() {
  return <section id="projects" className="section-space">
    <div className="container">
      <div className="section-heading"><p className="section-kicker">SELECTED WORK</p><h2>Academic <span>projects.</span></h2><p className="section-subtitle">Projects from my learning journey and programming practice.</p></div>
      <div className="row g-4">
        {projects.map(project => <div className="col-lg-4" key={project.number}>
          <article className="project-card h-100">
            <div className="project-top"><span>{project.number} / 03</span><i className={`bi ${project.icon}`}></i></div>
            <div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p></div>
            <div className="project-bottom">ACADEMIC PROJECT <i className="bi bi-arrow-up-right"></i></div>
          </article>
        </div>)}
      </div>
    </div>
  </section>;
}