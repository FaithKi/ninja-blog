import React from "react";
import { Link } from "react-router-dom";

interface Props {
  blogs: any;
  title: string;
}

const BlogList = ({ blogs, title }: Props) => {
  return (
    <div className="blog-list">
      <h2 className="title">{title}</h2>
      {blogs.map((blog: any) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p className="preview-body">{blog.body.slice(0, 300)}</p>
            <p className="preview-author">Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
