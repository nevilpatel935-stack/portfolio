import React from "react";
const education = [
  { title: "Full Stack Web Development", detail: "Currently pursuing" },
  { title: "B.Sc. Information Technology", detail: "Currently pursuing" },
  { title: "Higher Secondary Education — Science (Biology)", detail: "12th pass · Gujarat Board" }
];

export default function Education() {
  return <section id="education" className="section-space section-tint">
    <div className="container">
      <div className="section-heading"><p className="section-kicker">MY BACKGROUND</p><h2>Education & <span>learning.</span></h2></div>
      <div className="timeline">
        {education.map((item, i) => <div className="timeline-item" key={item.title}>
          <div className="timeline-dot">{String(i+1).padStart(2, "0")}</div>
          <div className="surface-card timeline-card"><h3>{item.title}</h3><p>{item.detail}</p></div>
        </div>)}
      </div>
      <div className="language-line"><b>Languages</b><span>English</span><span>Hindi</span><span>Gujarati</span></div>
    </div>
  </section>;
}