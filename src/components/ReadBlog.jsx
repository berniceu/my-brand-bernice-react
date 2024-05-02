import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DOMPurify from "dompurify";

const Blog = ({ blog }) => {
  const formattedBlog = blog?.blog
    ? DOMPurify.sanitize(
        blog.blog.replace(/\n/g, "<br>").replace(/===(.*)===/g, "<h4>$1</h4>")
      )
    : "No content available";

  return (
    <>
      <h3>{blog.blogTitle}</h3>
      <h5>{blog.author}</h5>
      <div className="img-container">
        <img src={blog.blogImage} alt="blog" className="readblog-img" />
      </div>
      <div className="paragraph">
        <p>{formattedBlog}</p>
      </div>
    </>
  );
};

const PostComment = ({ blog }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState([]);

  const blogId = blog._id;

  const handleComment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const comment = form.comment.value.trim();

    if( !name || !comment){
      setError('Name and comment cannot be empty');
      return;
    }

    const commentData = {
      name,
      comment
    }

    setLoading(true)
    try {
      const res = await fetch(
        `https://my-brand-api-x8z4.onrender.com/blogs/addComment/${blogId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(commentData),
        }
      );

      if(res.ok){
        form.reset();
        setComment('');
      } else{
        setError('failed to comment');
      }
    } catch (err) {
      setError(err.message);
    } finally{
      setLoading(false)
    }
  };

  return(<>
  <form onSubmit={handleComment} className="comment-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="commenter-name item"
              autocomplete="name"
            />
            <textarea
              name="comment"
              className="comment-text item"
              cols="80"
              rows="10"
              placeholder="Enter your comment..."
            ></textarea>

            <button type="submit" className="button">
              {loading ? "Commenting..." : "Comment"}
            </button>
          </form>
  </>)


};

const RenderBlog = () => {
  const [blog, setBlog] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const getBlogId = () => {
      const params = new URLSearchParams(location.search);
      return params.get("id");
    };
    const getBlog = async (blogId) => {
      setIsLoading(true);
      try {
        const baseUrl = `https://my-brand-api-x8z4.onrender.com/blogs/getBlog/${blogId}`;
        const res = await fetch(baseUrl);

        if (!res.ok) {
          alert("Server error");
        }

        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    const BlogId = getBlogId();
    getBlog(BlogId);
  }, [location]);
  if (isLoading) {
    return <div className="loader" style={{ display: "flex" }}></div>;
  }

  return <Blog blog={blog} />;
};

function ReadBlog() {
  const navigate = useNavigate();

  return (
    <>
      <div className="blogs">

      
      <div className="header">
        <header>
          <a
            href="blogs.html"
            onClick={() => {
              navigate(-1);
            }}
          >
            <h1>BERNICE</h1>
          </a>
        </header>
      </div>

      <div className="row">
        <div className="column">
          <RenderBlog />
        </div>

        <div className="likes-comments">
          <i className="fa-solid fa-heart"></i>
          <span className="likes-number">0 Likes</span>
          <i className="fa-solid fa-comment"></i>
          <span className="comment-span">0 Comments</span>
        </div>

        <div className="comment-section">
          <h4>Leave A Comment</h4>
          <div className="new-comment"></div>
            <PostComment/>
        </div>
      </div>
      </div>
    </>
  );
}

export default ReadBlog;
