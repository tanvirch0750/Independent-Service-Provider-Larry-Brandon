import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-link">
          <span>Linkedin</span> | <span>Facebook</span>
        </div>
        <div className="footer-logo">
          <h1 className="logo">
            <Link to="/">
              Larry <span>Brandon</span>
            </Link>
          </h1>
        </div>
        <p className="copy-text">
          Copyright &copy; 2022 Larry Brandon· 123-45-789
        </p>
      </div>
    </footer>
  );
};

export default Footer;
