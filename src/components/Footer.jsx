import React, { useEffect, useState } from "react";
import "./index.css";

const Subscribe = () => {
  const [subscribe, setSubcribe] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const subEmail = e.target.elements.subscribeEmail.value;
    if (subEmail.value == "") {
      alert("Please fill out your email");
      return;
    } else if (!emailValid.test(subEmail)) {
      alert("Please enter valid email");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://my-brand-api-x8z4.onrender.com/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: subEmail }),
        }
      );

      const subscribeData = res.json();
      alert("Thank you for subscribing to my blog");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="subscribe">
        <h2>Get the freshest articles right in your inbox</h2>

        <form onSubmit={handleSubscribe} id="subscribe">
          <input
            type="email"
            id="subscribe-email"
            name="subscribeEmail"
            placeholder="Email"
          />
          <button type="submit" id="subscribe-btn" onClick={<Subscribe />}>
            Subscribe
          </button>
        </form>
        {error && <div>{error}</div>}
      </div>
    </>
  );
};

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
            <Subscribe/>
            

            <h4>Connect With Me</h4>

            <div className="socials">
              <div className="icon">
                <a
                  href="https://linkedin.com/in/bernice-uwituze"
                  
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div className="icon">
                <a href="https://github.com/berniceu">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <div className="icon">
                <a href="mailto:berniceuwituze@gmail.com">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        

        <p>© Bernice 2024</p>
      </footer>
    </>
  );
};

export default Footer;
