import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../../components/FormInput/FormInput";
import PageHeadImg from "../../components/PageHeadingImg/PageHeadImg";
import auth from "../Firebase/Firebase.init";
import Social from "../Social/Social";
import "./Login.css";

const Login = () => {
  const [customError, setCustomError] = useState("");
  const [user1] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, errorReset] =
    useSendPasswordResetEmail(auth);

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  useEffect(() => {
    if (error) {
      if (error.message.includes("auth/wrong-password")) {
        setCustomError("Your password is wrong");
      } else if (error.message.includes("auth/user-not-found")) {
        setCustomError("Account not found with this email");
      } else {
        setCustomError(error.message);
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(values.email, values.password);
  };

  const handleResetEmail = async () => {
    await sendPasswordResetEmail(values.email);

    toast.success("A password reset eamil is send to your email", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <PageHeadImg text="Please login and Book now!" />
      <div className="login">
        <form onSubmit={handleSubmit} className="form login-form">
          <h1>Login</h1>

          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {customError && <p className="error-message">{customError}</p>}
          <button>Login</button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <p className="forgot-password--text">
            Forgot your password?{" "}
            <span onClick={handleResetEmail}>Reset your password</span>
          </p>
          <p className="login-signup-text">
            Don't have an account?{" "}
            <Link to="/signup" className="login-signup-link">
              Sign Up
            </Link>
          </p>
        </form>
        <Social text="Login" />
      </div>
    </div>
  );
};

export default Login;
