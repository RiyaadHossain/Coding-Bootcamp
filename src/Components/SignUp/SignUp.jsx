import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });
  const onEmailBlur = (e) => {
    const email = e.target.value;
    if (/\S+@\S+\.\S+/.test(email)) {
      setEmail({ value: email, error: "" });
    } else {
      setEmail({ value: "", error: "Invalid Email" });
    }
  };
  const onPasswordBlur = (e) => {
    const password = e.target.value;
    if (password.length > 5) {
      setPassword({ value: password, error: "" });
    } else {
      setPassword({ value: "", error: "Too Short" });
    }
  };
  const onConfirmPasswordBlur = (e) => {
    const confirmPassword = e.target.value;
    if (confirmPassword === password.value) {
      setConfirmPassword({ value: confirmPassword, error: "" });
    } else {
      setConfirmPassword({ value: "", error: "Password Didn't math" });
    }
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (email.value === "") {
      setEmail({ value: "", error: "Email is Required" });
    }
    if (password.value === "") {
      setPassword({ value: "", error: "Password is Required" });
    }
    if (confirmPassword.value === "") {
      setConfirmPassword({ value: "", error: "Confirm Password is Required" });
    }
    if (
      email.value &&
      password.value 
    ) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };
  return (
    <div className="h-[79vh]">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active h2"> Sign Up </h2>

          <div className="fadeIn first"></div>

          <form onSubmit={onFormSubmit}>
            <input
              onBlur={onEmailBlur}
              type="email"
              id="email"
              className="fadeIn second"
              name="email"
              placeholder="Email"
            />
            {email.error && <p className="text-red-600"> ⚠️{email?.error}</p>}
            <input
              onBlur={onPasswordBlur}
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="Password"
            />
            {password.error && (
              <p className="text-red-600"> ⚠️{password?.error}</p>
            )}
            <input
              onBlur={onConfirmPasswordBlur}
              type="password"
              id="confirmPassword"
              className="fadeIn third"
              name="password"
              placeholder="Confirm Password"
            />
            {confirmPassword.error && (
              <p className="text-red-600"> ⚠️{confirmPassword?.error}</p>
            )}
            <input type="submit" className="fadeIn fourth" value="Sign Up" />
          </form>

          <div id="formFooter">
            <span>
              Already Have an Accoutn?{" "}
              <Link className="text-blue-600" to={"/login"}>
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
