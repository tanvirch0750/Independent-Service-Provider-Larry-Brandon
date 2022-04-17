import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, image, name, text, time, price } = service;
  const navigate = useNavigate();
  return (
    <div className="service">
      <div className="service-img">
        <img src={image} alt={name} />
      </div>
      <div className="service-content">
        <h2>{name}</h2>
        <p className="service-text">{text}</p>
        <div className="price-book">
          <p className="service-time-price">
            <span>{time}</span>
            <span>{price}</span>
          </p>
          <button onClick={() => navigate("/checkout")} className="btn">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
