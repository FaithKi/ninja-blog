import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div className="loading-message">Loading...</div>}
      {error && <div className="fetch-error">{error}</div>}
      {blog && (
        <article>
          <h2 className="title">{blog["title"]}</h2>
          <p className="author">Written by {blog["author"]}</p>
          <div className="body">{blog["body"]}</div>
          <button onClick={handleClick}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
