import React from "react";
import { useNavigate } from "react-router-dom";
import "./CallToAction.css";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className="call-to-action">
      <div className="container">
        <h1>Saving You Money When It Really Counts.</h1>
        <div className="input-container">
          <button
            onClick={() => navigate("/work-with-me")}
            className="btn btn-subs"
          >
            Work with me
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
