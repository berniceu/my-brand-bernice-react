import React from "react";
import { useNavigate} from "react-router-dom";
import Footer from "./Footer";
import './index.css';
import './blogs.css';
import moon from '../images/moon.png'

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <>
      
      <main>
        <div className="welcome">
          <h1>Welcome To My Blog</h1>
          <button className="toggle">
            <img src={moon} alt="dark mode icon" className="moon" />
          </button>
        </div>

        <div className="blogs-container">
          <div className="articles"></div>

          <div className="blog-buttons">
            <a>
              <button className="previous-page" onClick={() => navigate(-1)}>Go Back</button>
            </a>
            <a>
              <button onClick={() => navigate('/signup')}>Sign Up</button>
            </a>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default Blogs
