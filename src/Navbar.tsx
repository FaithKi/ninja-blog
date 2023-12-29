import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <h2>My Blogzz</h2>
      <Link to="/" className="pr-5">
        Home
      </Link>
      <Link to="/create">New Blog</Link>
    </div>
  );
};

export default Navbar;
