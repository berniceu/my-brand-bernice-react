import React, { useState, useEffect} from "react";
import { useNavigate} from "react-router-dom";
import Footer from "./Footer";
import './index.css';
import './blogs.css';
import moon from '../images/moon.png';

const BlogItem = ({blog}) => {
  return(
    <>
    <div className="blogs" data-id={blog._id}>
      <div className="blog-title">
        <h3>
          <a href={`/readblog.html?id=${blog._id}`} className="blog-link">
            {blog.blogTitle}
          </a>
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
    </>
  )
}

export const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlogs = async() => {
      try{
        const baseUrl = "https://my-brand-api-x8z4.onrender.com/blogs/getAllBlogs";
        const res = await fetch(baseUrl);
  
        if(!res.ok){
          alert('Server error');
        }
  
        const data = await res.json();
        setBlogs(data);
        console.log(blogs);
      }
      catch(err){
        setError(err.message);
      } finally{
        setIsLoading(false);
      }

    };
    getBlogs(); 
  }, []);
}





export const Blogs = () => {
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
          <div className="articles">
            {blogs.map((blog) => {
              <BlogItem key={blog._id} blog={blog}/>
            })
            }
          </div>

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


