import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import auth from "../../Authentication/Firebase/Firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);

  console.log(open);

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
        <Link className="navigation-link" to="/">
          Home
        </Link>
        {/* <Link className="navigation-link" to="/about">
          About
        </Link> */}
        <Link className="navigation-link" to="/work-with-me">
          Work With Me
        </Link>
        <Link className="navigation-link" to="/about-me">
          About Me
        </Link>
        <Link className="navigation-link" to="/blog">
          Blog
        </Link>
        {user ? (
          <Link to="/login" className="navigation-link" onClick={handleSignOut}>
            Sign Out
          </Link>
        ) : (
          <Link className="navigation-link" to="/login">
            Log in
          </Link>
        )}
      </nav>
      <button className="hamburger-btn" onClick={() => setOpen(!open)}>
        {open ? <HiX /> : <HiMenuAlt1 />}
      </button>
    </header>
  );
};

export default Header;
