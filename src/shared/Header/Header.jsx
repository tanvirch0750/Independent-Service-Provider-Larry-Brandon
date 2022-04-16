import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">
          Larry <span>Brandon</span>
        </Link>
      </h1>
      <nav className="navigation">
        <Link className="navigation-link" to="/">
          Home
        </Link>
        <Link className="navigation-link" to="/about">
          About
        </Link>
        <Link className="navigation-link" to="/services">
          Services
        </Link>
        <Link className="navigation-link" to="/work-with-me">
          Work With Me
        </Link>
      </nav>
    </header>
  );
};

export default Header;
