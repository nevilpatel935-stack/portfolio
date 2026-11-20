import React from "react";
export default function About() {
  return <section id="about" className="section-space">
    <div className="container">
      <div className="section-heading"><p className="section-kicker">GET TO KNOW ME</p><h2>A little about <span>me.</span></h2></div>
      <div className="row g-4 align-items-stretch">
        <div className="col-lg-7"><div className="surface-card about-card h-100">
          <h3>Curious mind. Growing developer.</h3>
          <p>I'm a motivated B.Sc. Information Technology student and currently pursuing Full Stack Web Development training. I have a foundation in C, C++, HTML, CSS and Bootstrap, and I'm developing my skills in modern web technologies.</p>
          <p>I enjoy learning new concepts, working through practical problems and collaborating with others. My goal is to begin my professional journey in software and web development while continuing to grow as a developer.</p>
          <a className="text-link" href="#contact">Get in touch <i className="bi bi-arrow-up-right"></i></a>
        </div></div>
        <div className="col-lg-5"><div className="surface-card quick-facts h-100">
          <div><span>01</span><p>Positive attitude</p></div>
          <div><span>02</span><p>Quick learner</p></div>
          <div><span>03</span><p>Problem solving</p></div>
          <div><span>04</span><p>Teamwork & collaboration</p></div>
        </div></div>
      </div>
    </div>
  </section>;
}