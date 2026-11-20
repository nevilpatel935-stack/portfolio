import React from "react";
export default function Contact() {
  return <section id="contact" className="section-space">
    <div className="container">
      <div className="contact-panel">
        <div className="row g-5 align-items-center">
          <div className="col-lg-7"><p className="section-kicker">HAVE AN OPPORTUNITY?</p><h2>Let's build something <span>meaningful.</span></h2><p className="contact-copy">I'm interested in learning opportunities, internships and connecting with people in technology. Feel free to reach out.</p></div>
          <div className="col-lg-5">
            <a className="contact-detail" href="mailto:nevilpatel935@gmail.com"><i className="bi bi-envelope"></i><span><small>EMAIL ME</small>nevilpatel935@gmail.com</span><i className="bi bi-arrow-up-right ms-auto"></i></a>
            <a className="contact-detail" href="tel:+918799577087"><i className="bi bi-telephone"></i><span><small>CALL ME</small>+91 87995 77087</span><i className="bi bi-arrow-up-right ms-auto"></i></a>
            <div className="contact-detail"><i className="bi bi-geo-alt"></i><span><small>LOCATION</small>Valsad, Gujarat, India</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}