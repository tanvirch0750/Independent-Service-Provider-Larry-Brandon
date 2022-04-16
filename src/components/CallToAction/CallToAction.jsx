import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="container">
        <h1>Save You Money When It Really Counts.</h1>
        <p>Please subscribe if you want to get weekly tips!</p>
        <div className="input-container">
          <input type="text" placeholder="Enter Your Email" />
          <button className="btn btn-subs">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
