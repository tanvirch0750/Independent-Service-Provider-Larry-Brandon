import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="banner">
      <div className="banner-content">
        <span>STRENGTH IN NUMBERS. TAX PREPARATION & PLANNING</span>
        <h1>
          Bringing order to the chaos no matter what life is throwing at you.
        </h1>
        <button onClick={() => navigate("/work-with-me")} className="btn">
          Hire me as your accountant
        </button>
      </div>
    </section>
  );
};

export default Banner;
