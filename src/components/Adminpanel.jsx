import React from "react";

const Adminpanel = () => {
  return (
    <>
      <div className="loader"></div>
      <div className="admin-container">
        <div className="left-container">
          <a href="index.html">
            <h1>BERNICE</h1>
          </a>

          <div className="navigation">
            <a href="adminpanel.html">Dashboard</a>
            <a href="profile.html">Profile</a>
            <a href="login.html">Sign Out</a>
          </div>
        </div>
        <div className="right-container">
          <div id="hamburger-menu">
            <div className="header">
              <button className="hamburger-btn">☰</button>
            </div>

            <nav className="hamburger-nav">
              <div className="nav-links">
                <a href="index.html">
                  <h1>BERNICE</h1>
                </a>
                <a href="adminpanel.html">Dashboard</a>
                <a href="profile.html">Profile</a>
                <a href="login.html">Sign Out</a>
              </div>
            </nav>
          </div>
          <div className="top">
            <button className="toggle">
              <img
                src="images/moon.png"
                alt="dark mode icon"
                className="moon"
              />
            </button>
          </div>

          <div className="admin-profile">
            <div className="profile-picture">
              <img src="images/profile.png" alt="profile" />
            </div>
            <div className="info">
              <h3>BERNICE UWITUZE</h3>
              <p>Developer/Blogger</p>
            </div>
          </div>

          <h2>Recent Queries</h2>
          <div className="queries-div"></div>

          <h2>Recent Blogs</h2>
          <div className="blogs-container">
            <div className="new-article-container"></div>

            <button className="button" id="new-post-button">
              <a href="#title">Write New Post</a>
            </button>

            <div className="create-article hidden">
              <div className="create-article-container">
                <div className="blog-form">
                  <form action="" className="new-story-form">
                    <input
                      type="file"
                      name="image"
                      id="blog-image"
                      accept="image/*"
                    />
                    <br />

                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Title"
                    />
                    <br />
                    <input
                      type="text"
                      name="author"
                      id="author"
                      placeholder="Author"
                    />
                    <textarea
                      name="story"
                      id="story"
                      rows="10"
                      placeholder="Tell Your Story..."
                    ></textarea>
                    <button className="button" id="publish">
                      Publish
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
