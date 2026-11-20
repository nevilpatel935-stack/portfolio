import React from "react";
const skills = [
  ["C Programming", "Foundation"], ["C++ Programming", "Foundation"],
  ["HTML5", "Web"], ["CSS3", "Web"], ["Bootstrap", "Web"],
  ["Basic Web Development", "Web"], ["Full Stack Web Development", "Learning"],
  ["Git & GitHub", "Basic"]
];

export default function Skills() {
  return <section id="skills" className="section-space section-tint">
    <div className="container">
      <div className="section-heading"><p className="section-kicker">WHAT I WORK WITH</p><h2>Skills & <span>technologies.</span></h2><p className="section-subtitle">A growing toolkit built through coursework, practice and projects.</p></div>
      <div className="row g-3">
        {skills.map(([name, level], i) => <div className="col-sm-6 col-lg-3" key={name}>
          <div className="skill-tile"><div className="skill-number">0{i+1}</div><h3>{name}</h3><span>{level}</span></div>
        </div>)}
      </div>
    </div>
  </section>;
}