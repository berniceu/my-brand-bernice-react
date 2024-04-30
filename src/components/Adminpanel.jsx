import React, {useState, useEffect} from "react";
import './index.css';
import './adminpanel.css';
import moon from '../images/moon.png';
import profile from '../images/profile.png'

import { Link } from "react-router-dom";

export const FetchQueries = () => {
  const [queries, setQueries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQueries = async() => {
      setLoading(true);
      try{
        const res = await fetch(`https://my-brand-api-x8z4.onrender.com/blogs/getAllBlogs`);
        if(!res.ok){
          throw new Error(`HTTP status: ${res.status}`)
        }
        const queryData = await res.json();
        console.log(queryData);
        setQueries(queryData);
      }
      catch(err){
        setError(err.message);
        setQueries([])
      }
      finally{
        setLoading(false);
        
      }
    };
    fetchQueries();
  }, []);

  return (<>
  {loading && (<div className="loader" style={{display: 'flex'}}> </div>)}
  {error && <div className="error">{error}</div>}
  {queries.length === 0 ? (
  <div>No queries found</div>
) : (
  queries.map((query) => (
    <div className="queries" key={query._id}>
      <div className="user">
        <h3>{query.name}</h3>
        <h4>{query.email}</h4>
      </div>
      <p>{query.query}</p>
      <button className="button">View More</button>
    </div>
  ))
)}

  </>)
}

export const FetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try{
        const res = await fetch(`https://my-brand-api-x8z4.onrender.com/blogs/getAllBlogs`);
        if(!res.ok){
          throw new Error(`HTTP Error: ${res.status}`)
        }

        let blogsData = await res.json();
        
        setBlogs(blogsData);
        setError(null);
      }
      catch(err){
        setError(err.message);
        setBlogs([]);
      }
      finally{
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      {loading && (<div className="loader" style={{display: 'flex'}}> </div>)}
      {error && <div className="error">{error}</div>}
      {blogs.length === 0 ? (
  <div>No blogs found</div>
) : (
  blogs.map((blog) => (
    <div className="blogs" key={blog._id}>
      <div className="blog-title">
        <h3>
          <Link to={`/readblog?id=${blog._id}`} className="blog-link">
            {blog.blogTitle}
          </Link>
        </h3>
      </div>
      <p>{blog.author}</p>
      <i className="fa-solid fa-heart" id="heart"></i>
      <span>0 Likes</span>
      <i className="fa-solid fa-comment"></i>
      <span>0 Comments</span>
      <i className="fa-solid fa-pen edit-button"></i>
      <span>Edit</span>
      <i className="fa-solid fa-trash delete-button"></i>
      <span>Delete</span>
    </div>
  ))
)}
      
    </>
  )
}


const Adminpanel = () => {
  return (
    <>
      
      <div className="admin-container">
        <div className="left-container">
          <Link to={'/login'}>
            <h1>BERNICE</h1>
          </Link>

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
                src={moon}
                alt="dark mode icon"
                className="moon"
              />
            </button>
          </div>

          <div className="admin-profile">
            <div className="profile-picture">
              <img src={profile} alt="profile" />
            </div>
            <div className="info">
              <h3>BERNICE UWITUZE</h3>
              <p>Developer/Blogger</p>
            </div>
          </div>

          <h2>Recent Queries</h2>
          <div className="queries-div">
            <FetchQueries/>
          </div>

          <h2>Recent Blogs</h2>
          <div className="blogs-container">
            <div className="new-article-container">
              <FetchBlogs/>
              
            </div>

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

export default Adminpanel;
