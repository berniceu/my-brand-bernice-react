import React, {useState} from "react";
import profile from '../images/profile.png';
import portfolio from '../images/portfolio.png';
import slack from '../images/slack.jpg';
import urlShortener from '../images/urlshortener.jpg';
import weather from '../images/weather.png';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

import './index.css';

const Query = () => {
  const [query, setQuery] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  

  const handleQuery = async (e) => {
    e.preventDefault();

    const form = e.target;
    const queryData = {
      name: form.username.value,
      email: form.email.value,
      query: form.query.value
    }
    
    setLoading(true);
    try{
      const res = await fetch('https://my-brand-api-x8z4.onrender.com/queries/sendquery', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(queryData)
      });

      if(res.ok){
        alert('message sent successfully');
      }

    } catch(err){
      setError(err.message)
    } finally{
      setLoading(false);
    }
  }

  return(<>
    <form onSubmit={handleQuery} className="contact-form">
              <div className="input-field">
                <input
                  type="text"
                  id="username"
                  placeholder="Name"
                  name="username"
                  autocomplete="name"
                  className="item"
                />
                <div className="error-text">Name can't be blank</div>
              </div>

              <div className="input-field">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  id="useremail"
                  autocomplete="email"
                  className="item"
                />
                <div className="email error-text">
                  Email Address can't be blank
                </div>
              </div>

              <div className="input-field">
                <textarea
                  name="query"
                  id="query"
                  cols="30"
                  rows="10"
                  placeholder="Enter Your Query..."
                  autocomplete="off"
                  className="item"
                ></textarea>
                <div className="error-text">Message can't be blank</div>
              </div>

              <div className="contact-button">
                <button type="submit" className="button" disabled={loading}>
                  {loading ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
  </>)
}

const Home = () => {
  const navigate = useNavigate();

  
  return (
    <>
      <Navbar/>
      <main>
        <section id="home">
          <div className="home-container">
            <div className="profile">
              <img src={profile} alt="website owner" />
            </div>
            <div className="description">
              <h1>Welcome To My Personal Website</h1>
              <p>
                Hello, welcome to my online portfolio. My name is Bernice
                Uwituze, I’m a software developer based in Kigali, Rwanda.{" "}
                <br />
                Here you’ll find information about my skills, experience,
                projects I have worked on, and blogs.
              </p>

              <button className="button" onClick = {() => navigate('/blogs')}>
                <a>Read My Blogs</a>
              </button>
              <div className="social-icons">
                <a
                  href="https://linkedin.com/in/bernice-uwituze"
                  
                >
                  <i className="fa-brands fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/berniceu">
                  <i className="fa-brands fa-github fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="about-container">
            <h1 className="title first">Get To Know More</h1>
            <h1 className="title">About Me</h1>
            <p className="about-description">
              I am currently a student specializing in Software Engineering. My
              interest in web development began with a curiosity about how
              websites are built and since then, I have learned about different
              web technologies that are used in the tech industry. Over the next
              few years, I am excited to contribute to open-source Projects,
              master new technologies, and create engaging and user-friendly web
              experiences.
            </p>

            <h1 className="title">My Skills</h1>
            <div className="skills">
              <div className="skill">
                <h3>HTML & CSS</h3>
                <p>Experienced</p>
              </div>

              <div className="skill">
                <h3>JavaScript & TypeScript</h3>
                <p>Intermediate</p>
              </div>

              <div className="skill">
                <h3>Python</h3>
                <p>Intermediate</p>
              </div>

              <div className="skill">
                <h3>Git & GitHub Collaboration</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="cv-button">
              <button
                className="button"
                onclick="window.open('./assets/Bernice-Uwituze-CV.pdf')"
              >
                Checkout my CV
              </button>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h1 className="title">Projects</h1>
          <div className="projects">
            <div className="project-container">
              <div className="img-container">
                <img src={urlShortener} alt="project" />
              </div>
              <h3 className="project-title"> URL Shortener</h3>

              <div className="project-buttons">
                <button
                  className="button"
                  onclick="location.href='https://berniceu.github.io/weather-app/'"
                >
                  Demo
                </button>
                <button
                  className="button"
                  onclick="location.href='https://github.com/berniceu/weather-app.git'"
                >
                  GitHub
                </button>
              </div>
            </div>

            <div className="project-container">
              <div className="img-container">
                <img src={weather} alt="project" />
              </div>
              <h3 className="project-title">Weather App</h3>
              <div className="project-buttons">
                <button
                  className="button"
                  onclick="location.href='https://berniceu.github.io/weather-app/'"
                >
                  Demo
                </button>
                <button
                  className="button"
                  onclick="location.href='https://github.com/berniceu/weather-app.git'"
                >
                  GitHub
                </button>
              </div>
            </div>

            <div className="project-container">
              <div className="img-container">
                <img src={slack} alt="project" />
              </div>
              <h3 className="project-title">Slack Clone</h3>
              <div className="project-buttons">
                <button
                  className="button"
                  onclick="location.href='https://berniceu.github.io/weather-app/'"
                >
                  Demo
                </button>
                <button
                  className="button"
                  onclick="location.href='https://github.com/berniceu/weather-app.git'"
                >
                  GitHub
                </button>
              </div>
            </div>

            <div className="project-container">
              <div className="img-container">
                <img src={portfolio} alt="project" />
              </div>
              <h3 className="project-title">Portfolio</h3>
              <div className="project-buttons">
                <button
                  className="button"
                  onclick="location.href='https://berniceu.github.io/weather-app/'"
                >
                  Demo
                </button>
                <button
                  className="button"
                  onclick="location.href='https://github.com/berniceu/weather-app.git'"
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="contact-section">
            <h1 className="title first">Get In Touch</h1>
            <h1 className="title">With Me</h1>
            <Query/>
            
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
