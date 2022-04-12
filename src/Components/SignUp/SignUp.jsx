import React from "react";
import { Link } from "react-router-dom";
import './SignUp.css'

const SignUp = () => {
  return (
    <div className="h-[79vh]">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active h2"> Sign Up </h2>
          

          <div className="fadeIn first"></div>

          <form>
            <input
              type="email"
              id="email"
              className="fadeIn second"
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              id="confirmPassword"
              className="fadeIn third"
              name="password"
              placeholder="Confirm Password"
            />
            <input type="submit" className="fadeIn fourth" value="Sign Up" />
          </form>

          <div id="formFooter">
            <span>Already Have an Accoutn? <Link className="text-blue-600" to={'/login'}>Sign In</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
