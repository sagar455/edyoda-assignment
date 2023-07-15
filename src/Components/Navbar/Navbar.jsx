import React from "react";
import "./Navbar.css";
import logo from "../../assets/Icons/company-logo.svg";
import search from "../../assets/Icons/search.svg";
import dropdown from "../../assets/Icons/dropdown.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-container">
        <div className="logo">
          <img className="company-logo" src={logo} alt="logo" />
        </div>
        <div class="dropdown">
          <button class="dropdown-btn">
            Courses
            <span>
              <img className="icon-dropdown" src={dropdown} alt="" />
            </span>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropdown-btn">
            Programs
            <span>
              <img className="icon-dropdown" src={dropdown} alt="" />
            </span>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
      <div className="right-container">
        <img className="search-btn" src={search} alt="" />
        <button className="log-in-btn">Log in</button>
        <button className="join-now-btn">Join Now</button>
      </div>
    </div>
  );
};

export default Navbar;
