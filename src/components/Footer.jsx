import React from "react";
export default function Footer() {
  return <footer className="site-footer"><div className="container d-flex flex-wrap justify-content-between gap-2"><a className="footer-brand" href="#home">NEVIL<span>.</span></a><p>© {new Date().getFullYear()} Nevil Patel. Built with React & Bootstrap.</p><a href="#home" className="back-top">BACK TO TOP ↑</a></div></footer>;
}