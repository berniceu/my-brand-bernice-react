import React from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="loader"></div>
      <main>
        <div class="welcome">
          <h1>Welcome To My Blog</h1>
          <button class="toggle">
            <img src="images/moon.png" alt="dark mode icon" class="moon" />
          </button>
        </div>

        <div class="blogs-container">
          <div class="articles"></div>

          <div class="blog-buttons">
            <a>
              <button class="previous-page" onClick={() => navigate(-1)}>Go Back</button>
            </a>
            <a href="signup.html">
              <button>Sign Up</button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
