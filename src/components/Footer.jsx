import React from "react";
import './index.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-nav">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="subscribe">
            <h2>Get the freshest articles right in your inbox</h2>

            <form method="post" id="subscribe">
              <input type="email" id="subscribe-email" placeholder="Email" />
              <button type="submit" id="subscribe-btn">
                Subscribe
              </button>
            </form>

            <h4>Connect With Me</h4>

            <div className="socials">
              <div className="icon">
                <a
                  href="https://linkedin.com/in/bernice-uwituze"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div className="icon">
                <a href="https://github.com/berniceu" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <div className="icon">
                <a href="mailto:berniceuwituze@gmail.com" target="_blank">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p>© Bernice 2024</p>
      </footer>
    </>
  );
};

export default Footer;
