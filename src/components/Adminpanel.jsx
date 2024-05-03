import React, { useState, useEffect } from "react";
import moon from "../images/moon.png";
import profile from "../images/profile.png";
import { Link } from "react-router-dom";

const PostBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  

  const handleBlogs = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const form = e.target;

    formData.append("blogTitle", form.title.value);
    formData.append("blog", form.story.value);
    formData.append("author", form.author.value);
    formData.append("blogImage", form.image.files[0]);

    setLoading(true);
    try {
      const res = await fetch(
        "https://my-brand-api-x8z4.onrender.com/blogs/createBlog",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        alert("Blog created successfully");
        window.location.reload();
      } else {
        alert("Failed to create blog");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleBlogs} className="new-story-form">
        <input type="file" name="image" id="blog-image" accept="image/*" />
        <br />

        <input type="text" name="title" id="title" placeholder="Title" />
        <br />
        <input type="text" name="author" id="author" placeholder="Author" />
        <textarea
          name="story"
          id="story"
          rows="10"
          placeholder="Tell Your Story..."
        ></textarea>
        <button className="button" id="publish">
          {loading ? "Publishing..." : "Publish"}
        </button>
      </form>
    </>
  );
};

const UpdateBlog = ({blog}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    const form = e.target;
    formData.append("blogTitle", form.title.value);
    formData.append("blog", form.story.value);
    formData.append("author", form.author.value);
    formData.append("blogImage", form.image.files[0]);
    
    try {
      const res = await fetch(
        `https://my-brand-api-x8z4.onrender.com/blogs/updateBlog/${blog._id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (res.ok) {
        alert("Blog updated successfully");
      } else {
        alert("Failed to update blog");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleUpdate} className="new-story-form">
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
          defaultValue={blog.blogTitle}
        />
        <br />
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Author"
          defaultValue={blog.author}
        />
        <textarea
          name="story"
          id="story"
          rows="10"
          placeholder="Tell Your Story..."
          defaultValue={blog.blog}
        ></textarea>
        <button className="button" id="publish">
          {loading ? "Updating..." : "Update"}
        </button>
      </form>
    </>
  );
};

const FetchQueries = () => {
  const [queries, setQueries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchQueries = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://my-brand-api-x8z4.onrender.com/queries/getquery`
        );
        if (!res.ok) {
          throw new Error(`HTTP status: ${res.status}`);
        }
        const queryData = await res.json();
        console.log(queryData);
        setQueries(queryData);
      } catch (err) {
        setError(err.message);
        setQueries([]);
      } finally {
        setLoading(false);
      }
    };
    fetchQueries();
  }, []);

  const handleViewMore = (query) => {
    setPopup(query);
    setShowPopup(true);
  }

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopup(null);
  }

  return (
    <>
      {loading && (
        <div className="loader" style={{ display: "flex" }}>
          {" "}
        </div>
      )}
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
            
            <button className="button" onClick={() => {handleViewMore(query)}}>View More</button>
          </div>
        ))
      )}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <div className="user">
              <h3>{popup.name}</h3>
              <h4>{popup.email}</h4>
            </div>
            <p>{popup.query}</p>
          </div>

        </div>
      )}
    </>
  );
};

const FetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://my-brand-api-x8z4.onrender.com/blogs/getAllBlogs`
        );
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }

        let blogsData = await res.json();

        setBlogs(blogsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleEditBlog = async(blogId) => {
    try{
      const res = await fetch(`https://my-brand-api-x8z4.onrender.com/blogs/getBlog/${blogId}`);
    if (res.ok) {
      const blogData = await res.json();
      setEditingBlog(blogData);
    } else{
      setError('failed to fetch blog');
    } 
  } catch(err){
    setError(err.message)
  } finally{
    setLoading(false);
  }
};

  const handleDeleteBlog = async (blogId) => {
    try {
      const res = await fetch(
        `https://my-brand-api-x8z4.onrender.com/blogs/deleteBlog/${blogId}`,
        { method: "DELETE", headers: { "Content-Type": "application/json" } }
      );

      if (res.ok) {
        setBlogs((prevBlogs) =>
          prevBlogs.filter((blog) => blog._id !== blogId)
        );
        window.location.reload();
        alert("deleted successfully");
      } else {
        alert("delete failed");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {loading && (
        <div className="loader" style={{ display: "flex" }}>
          {" "}
        </div>
      )}
      {error && <div className="error">{error}</div>}
      {editingBlog && <UpdateBlog blog={editingBlog}/>}
      {!editingBlog && (
      <div>
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
            <i
              className="fa-solid fa-pen edit-button"
              
            ></i>
            <span onClick={() => handleEditBlog(blog._id)}>Edit</span>
            <i
              className="fa-solid fa-trash delete-button"
              
            ></i>
            <span onClick={() => handleDeleteBlog(blog._id)}>Delete</span>
          </div>
        ))
      )}
      </div>
    )}
    </>
  );
};


const NewPost = () => {
  const [newPost, setNewPost] = useState(false);

  const toggleNewPost = () => {
    setNewPost((prevState) => !prevState);
  };

  return (
    <>
      <button className="button" id="new-post-button" onClick={toggleNewPost}>
        <a href="#title">Write New Post</a>
      </button>
      {newPost && (
        <div className="create-article">
          <div className="create-article-container">
            <div className="blog-form">
              <PostBlogs />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Adminpanel = () => {
  return (
    <>
      <div className="adminpanel">
      <div className="admin-container">
        <div className="left-container">
          <Link to={"/login"}>
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
              <img src={moon} alt="dark mode icon" className="moon" />
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
            <FetchQueries />
          </div>

          <h2>Recent Blogs</h2>
          <div className="blogs-container">
            <div className="new-article-container">
              <FetchBlogs />
            </div>
            <NewPost />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Adminpanel;
