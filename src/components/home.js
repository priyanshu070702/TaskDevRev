import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Circle from './circle';
import { GiBookshelf } from "react-icons/gi";
import { AiOutlineSearch} from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="left-container">
        <div className="description">
          <h2>Welcome to the online library : LibraryHUB</h2>
          <h5>Explore a vast collection of books and resources.</h5>
        </div>
        <div className="search-box">
          <NavLink to="/books" className="link">
             <button className="searchButton">Search</button>
          </NavLink>
        </div>
      </div>
      <GiBookshelf className="custom-icon" />
      <Circle />
    </div>
  );
}

export default Home;