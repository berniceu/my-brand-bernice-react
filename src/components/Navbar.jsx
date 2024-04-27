import React from "react";
import './index.css';

const Navbar = () => {
  return (
    <>
      <div className="container">
        <header>
          <h1>BERNICE</h1>
        </header>
        <nav className="desktop-nav">
          <ul>
            <li>
              <a className="link tab-item active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="link tab-item" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="link tab-item" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="link tab-item" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a href="login.html" className="button">
                Log In
              </a>
            </li>
          </ul>
          <button className="toggle">
            <img src="images/moon.png" alt="dark mode icon" className="moon" />
          </button>
        </nav>
      </div>

      <div id="hamburger-menu">
        <div className="header">
          <h1>BERNICE</h1>
          <button className="hamburger-btn">☰</button>
        </div>

        <nav className="hamburger-nav">
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="login.html">Log In</a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;