import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import moon from "../images/moon.png";

const BlogItem = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="article" data-set={blog._id}>
        <div className="img-container">
          <img src={blog.blogImage} alt="blog image" />
        </div>
        <div className="article-title">
          <h6>{blog.blogTitle}</h6>
        </div>
        <div className="updates">
          <div className="likes">
            <i className="fa-solid fa-heart"></i>
          </div>
          <div className="comment">
            <i className="fa-solid fa-comment"></i>
          </div>
        </div>
        <button className="blog-button">
          <a onClick={() => {navigate('/readblog')}}>Read Article</a>
        </button>
        `
      </div>
    </>
  );
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlogs = async () => {
      setIsLoading(true);
      try {
        const baseUrl =
          "https://my-brand-api-x8z4.onrender.com/blogs/getAllBlogs";
        const res = await fetch(baseUrl);

        if (!res.ok) {
          alert("Server error");
        }

        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getBlogs();
  }, []);

  if (isLoading) {
    return <div className="loader" style={{ display: "flex" }}></div>;
  }

  return (
    <div className="articles">
      {blogs.map((blog) => (
        <BlogItem key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="blogs">
      <main>
        <div className="welcome">
          <h1>Welcome To My Blog</h1>
          <button className="toggle">
            <img src={moon} alt="dark mode icon" className="moon" />
          </button>
        </div>

        <div className="blogs-container">
          <BlogList />

          <div className="blog-buttons">
            <a>
              <button className="previous-page" onClick={() => navigate(-1)}>
                Go Back
              </button>
            </a>
            <a>
              <button onClick={() => navigate("/signup")}>Sign Up</button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
      </div>
    </>
  );
};

export default Blogs;
