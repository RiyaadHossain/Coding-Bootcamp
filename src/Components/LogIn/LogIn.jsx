import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css'

const LogIn = () => {
    return (
        <div className="h-[79vh]">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active h2"> Log In </h2>
          

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
            
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <span>New to Coding Bootcamp? <Link className="text-blue-600" to={'/signup'}>Sign Up</Link></span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default LogIn;