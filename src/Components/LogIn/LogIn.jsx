import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./LogIn.css";

const LogIn = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  let from = location.state?.from?.pathname || "/";
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
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (email.value === "") {
      setEmail({ value: "", error: "Email is Required" });
    }
    if (password.value === "") {
      setEmail({ value: "", error: "Password is Required" });
    }
    if (email.value && password.value) {
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          toast.success("Signed In")
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage)
        });
    }
  };
  return (
    <div className="h-[79vh]">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active h2"> Log In </h2>

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
            {email.error && <p className="text-red-600"> ??????{email?.error}</p>}
            <input
              onBlur={onPasswordBlur}
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="Password"
            />
            {password.error && (
              <p className="text-red-600"> ??????{email?.error}</p>
            )}
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <span>
              New to Coding Bootcamp?{" "}
              <Link className="text-blue-600" to={"/signup"}>
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
