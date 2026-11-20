import React from "react";
const links = ["About", "Skills", "Projects", "Education", "Contact"];

export default function Header() {
  return <nav className="navbar navbar-expand-lg navbar-dark fixed-top site-nav">
    <div className="container">
      <a className="navbar-brand fw-bold" href="#home">NEVIL<span>.</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mainNav">
        <ul className="navbar-nav ms-auto align-items-lg-center">
          {links.map(link => <li className="nav-item" key={link}>
            <a className="nav-link" href={`#${link.toLowerCase()}`}>{link}</a>
          </li>)}
          <li className="nav-item ms-lg-3"><a className="btn btn-primary btn-sm nav-cta" href="#contact">Let's talk <i className="bi bi-arrow-up-right ms-1"></i></a></li>
        </ul>
      </div>
    </div>
  </nav>;
}