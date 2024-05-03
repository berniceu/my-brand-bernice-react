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


const CommentSection = ({ blog }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState(false);
  

  const blogId = blog._id;
  const toggleNewComment = () => {
    setNewComment((prevState) => !prevState)
   }

   useEffect(() => {
    const getComments = async() => {
      try{
        const res = await fetch(`https://my-brand-api-x8z4.onrender.com/blogs/getComment/${blogId}`);

        if(res.ok){
          const comments = await res.json();
          setComments(comments);
        }
      } catch(err){
        setError(err.message)
      } 
    };

    getComments();
   }, [blogId])

  const handleComment = async(e) => {
    e.preventDefault();

    const form = e.target;

    const commentData = {
      name: form.name.value.trim(),
      comment: form.comment.value.trim()
    }

    setLoading(true);

    try{
      const res = await fetch(`https://my-brand-api-x8z4.onrender.com/blogs/addComment/${blogId}`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(commentData)
      });

      if(res.ok){
        form.reset();
        setComment('');
        alert('Comment posted successfully');
        const newComment = await res.json();
        setComments([...comments, newComment]);

      } else{
        setError('Failed to post comment');
      }
    }catch(err){
      setError(err.message);
    } finally{
      setLoading(false);
    }
  }

  const deleteComment = async(commentId) => {
    try {
      const res = await fetch(`https://my-brand-api-x8z4.onrender.com/blogs/deleteComment/${commentId}`,{
        method: 'DELETE',
      })

      if(res.ok){
        setComments(comments.filter((comment) => comment._id !== commentId));
        alert("Comment deleted successfully");

      } else{
        setError('Failed to delete comment')
      }
    } catch(err){
      setError(err.message);
    }
  }

  return(<>
    <div className="likes-comments">
          <i className="fa-solid fa-heart"></i>
          <span className="likes-number">0 Likes</span>
          <i className="fa-solid fa-comment"></i>
          <span className="comment-span" onClick={toggleNewComment}>{comments.length} Comments</span>
        </div>

        {newComment && (<div className="comment-section">
          <h4>Leave A Comment</h4>
          <div className="new-comment"></div>
          <form onSubmit={handleComment} className="comment-form">
          <input type="text" name="name" placeholder="Name" className="commenter-name item" autocomplete="name"/>
            <textarea name="textarea" className="comment-text item" cols="80" rows="10" placeholder="Enter your comment..."></textarea>

            <button type="submit" className="button" disabled={loading}>{loading ? 'Posting' : 'Comment'}</button>
          </form>
            
        </div>)}

        {comments.map((comment, index) => (
          <div className="comment-div" key={index}>
            <h5>{comment.name}</h5>
            <p>{comment.comment}</p>
            <button className="button" onClick={() => deleteComment(comment._id)}>Delete</button>
          </div>
        ))}
  </>)
}



const ReadBlog = () => {
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
            <CommentSection/>

        
      </div>
      </div>
    </>
  );
}

export default ReadBlog;
