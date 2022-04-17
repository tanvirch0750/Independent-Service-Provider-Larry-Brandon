import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Authentication/Firebase/Firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
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
        <Link className="navigation-link" to="/checkout">
          Checkout
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
    </header>
  );
};

export default Header;
