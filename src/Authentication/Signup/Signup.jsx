import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import PageHeadImg from "../../components/PageHeadingImg/PageHeadImg";
import auth from "../Firebase/Firebase.init";
import Social from "../Social/Social";
import "./Signup.css";

const Signup = () => {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [customError, setCustomError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const inputs = [
    {
      id: 1,
      name: "displayName",
      type: "text",
      placeholder: "Your Name",
      errorMessage: "Please give your name",
      label: "Your Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: `^[^\@]+@[^\s@]+\.[^\@]+$`,
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      if (error.message.includes("auth/email-already-in-use")) {
        setCustomError("Alreary have an account with this email");
      } else {
        setCustomError(error.message);
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    function validatePassword(password) {
      const re =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
      return re.test(password);
    }

    if (
      values.displayName === "" ||
      values.email === "" ||
      validateEmail(values.email) === false ||
      validatePassword(values.password) === false ||
      values.password !== values.confirmPassword
    ) {
      alert("Something went wrong, please provide valid data");
    } else {
      createUserWithEmailAndPassword(values.email, values.password);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  return (
    <>
      <PageHeadImg text="Please Signup for better experience" />
      <div className="signup container">
        <form onSubmit={handleSubmit} className="form signup-form">
          <h1>Register</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {customError && <p className="error-message">{customError}</p>}
          <button>Register</button>
          <p className="login-signup-text">
            Already have an account?{" "}
            <Link to="/login" className="login-signup-link">
              Login
            </Link>
          </p>
        </form>
        <Social text="Signup" />
      </div>
    </>
  );
};

export default Signup;
