import React from "react";
import "./Heading.css";

const Heading = ({ heading, text }) => {
  return (
    <div className="heading">
      <div className="container heading-inner">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Heading;
