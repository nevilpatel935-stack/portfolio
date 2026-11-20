import React from "react";
export default function Hero() {
  return <section id="home" className="hero-section">
    <div className="container hero-content">
      <div className="row align-items-center g-5">
        <div className="col-lg-7">
          <div className="eyebrow"><span></span> ASPIRING FULL STACK WEB DEVELOPER</div>
          <h1>Hi, I'm <span>Nevil Patel.</span><br />I build for the web.</h1>
          <p className="hero-copy">I'm a B.Sc. Information Technology student with a strong interest in full stack web development. I enjoy learning, solving problems and turning ideas into useful digital experiences.</p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <a href="#projects" className="btn btn-primary btn-lg">Explore my work <i className="bi bi-arrow-down-right ms-2"></i></a>
            <a href="/Nevil_Patel_CV.png" download="Nevil_Patel_CV.png" className="btn btn-outline-light btn-lg">Download CV <i className="bi bi-download ms-2"></i></a>
          </div>
          <div className="hero-meta"><span><i className="bi bi-geo-alt"></i> Valsad, Gujarat</span><span><i className="bi bi-mortarboard"></i> B.Sc. IT — Pursuing</span></div>
        </div>
        <div className="col-lg-5">
          <div className="portrait-wrap">
            <div className="portrait-glow"></div>
            <img src="/profile.png" alt="Nevil Patel" className="portrait" />
            <div className="floating-tag"><i className="bi bi-code-slash"></i><span>Always learning<br/><b>New technologies</b></span></div>
          </div>
        </div>
      </div>
    </div>
    <a href="#about" className="scroll-hint"><span></span> SCROLL TO EXPLORE</a>
  </section>;
}