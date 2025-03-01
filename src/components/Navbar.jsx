import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
  return (
    <div>
      <h1>Welcome to TMDB Website</h1>
      <h1 className="text-center my-4">Popular Movies</h1>
      <nav>
        <Link to="/">MovieList</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Navbar;
