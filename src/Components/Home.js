import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link className="text-red-500" to="/event"> Event</Link>
    </div>
  );
};

export default Home;
