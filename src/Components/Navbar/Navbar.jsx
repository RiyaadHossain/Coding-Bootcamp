import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user)
      } else {
        // User is signed out
      }
    });
 }, [])

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
        console.log('Sign Out');
      // Sign Out
      })
      .catch(error => {
      // An Error Occured
        console.log("Error");
    })
  }

  return (
    <div className="bg-slate-300">
      <div className="container mx-auto flex items-center justify-between h-20">
        <div className="logo">
          <h1 className="text-2xl text-blue-600">
            <Link className="font-bold" to={"/"}>
              Coding Bootcamp
            </Link>
          </h1>
        </div>
        <nav>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-slate-700"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/courses"}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-slate-700"
            }
          >
            Courses
          </NavLink>
          <NavLink
            to={"/myclasses"}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-slate-700"
            }
          >
            My Classes
          </NavLink>
          {
            user.uid ? <button onClick={logOut} className="signOut">Sign Out</button> :  <NavLink
            to={"/signup"}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-slate-700"
            }
          >
            Sing Up
          </NavLink>
         }
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-slate-700"
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
