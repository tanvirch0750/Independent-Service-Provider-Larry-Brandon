import React, { useEffect, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import "./Social.css";

const Social = ({ text }) => {
  const [customError, setCustomError] = useState("");
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (error) {
      if (error.message.includes("auth/popup-closed-by-user")) {
        setCustomError("Popup Closed by user");
      } else if (error.message.includes("auth/user-not-found")) {
        setCustomError("Account not found with this email");
      } else {
        setCustomError(error.message);
      }
    }
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/serrvices");
    } else {
      if (text === "login") {
        navigate("/login");
      }
      if (text === "signup") {
        navigate("/signup");
      }
    }
  }, [user, navigate]);

  const handleGoogleSubmit = () => {
    signInWithGoogle();
  };

  return (
    <div className="social">
      <div className="or-separator">
        <div></div>
        <p>or</p>
        <div></div>
      </div>
      {customError && <p className="error-message">{customError}</p>}
      <button onClick={handleGoogleSubmit} className="social-btn">
        {text} with google
      </button>
    </div>
  );
};

export default Social;
