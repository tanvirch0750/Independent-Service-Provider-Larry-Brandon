import React from "react";
import { useNavigate } from "react-router-dom";
import selfImg from "../../Images/Self/self.jpg";
import "./AboutMeHome.css";

const AboutMeHome = () => {
  const navigate = useNavigate();
  return (
    <section className="about-me-home container">
      <div className="about-me-home-img-box">
        <img src={selfImg} alt="Larry Brabdon" />
      </div>
      <div className="about-me-home-content">
        <div className="details-content">
          <h3>Squash tax-time confusion</h3>
          <h2>
            I specialize in helping you understand how these life events can
            make an impact on your tax return—and how you can start planning now
            to make the best of it.
          </h2>
        </div>
        <div className="list-content">
          <ul className="list-content-items">
            <li>Marriage and Divorce</li>
            <li>Purchasing a Home</li>
            <li>Starting or Selling a Business</li>
            <li>Retirement</li>
            <li>Having a Baby</li>
            <li>Military Transitions</li>
            <li>And More</li>
          </ul>
        </div>
        <button
          onClick={() => navigate("/work-with-me")}
          className="btn btn-primary"
        >
          My Services
        </button>
      </div>
    </section>
  );
};

export default AboutMeHome;
