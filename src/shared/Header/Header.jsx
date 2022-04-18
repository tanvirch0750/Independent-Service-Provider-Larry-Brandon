import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import auth from "../../Authentication/Firebase/Firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);

  let activeStyle = {
    color: "#ea5c43",
  };

  // sticky nav
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <header className={`header ${open ? "open" : ""}`}>
      <h1 className="logo">
        <Link to="/">
          Larry <span>Brandon</span>
        </Link>
      </h1>
      <nav className="navigation">
        <NavLink
          className="navigation-link"
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        {/* <Link className="navigation-link" to="/about">
          About
        </Link> */}
        <NavLink
          className="navigation-link"
          to="/work-with-me"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Work With Me
        </NavLink>
        <NavLink
          className="navigation-link"
          to="/about-me"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About Me
        </NavLink>
        <NavLink
          className="navigation-link"
          to="/blog"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Blog
        </NavLink>
        {user ? (
          <NavLink
            to="/login"
            className="navigation-link"
            onClick={handleSignOut}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign Out
          </NavLink>
        ) : (
          <NavLink
            className="navigation-link"
            to="/login"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Log in
          </NavLink>
        )}
      </nav>
      <button className="hamburger-btn" onClick={() => setOpen(!open)}>
        {open ? <HiX /> : <HiMenuAlt1 />}
      </button>
    </header>
  );
};

export default Header;
