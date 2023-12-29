import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Uh Oh!</h2>
      <p>looks like page not found ToT</p>
      <Link to="/">Back to homepage...</Link>
    </div>
  );
};

export default NotFound;
