import React from "react";
import './index.css';

import { Link } from "react-router-dom";

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
              <Link to={'/login'} className="button" >
                Log In
              </Link>
            </li>
          </ul>
          <button className="toggle">
      
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
