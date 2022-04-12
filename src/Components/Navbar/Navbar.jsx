import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="bg-slate-300">
      <div className="container mx-auto flex items-center justify-between h-20">
        <div className="logo">
          <h1 className="text-2xl text-blue-600"><Link className="font-bold" to={'/'}>Coding Bootcamp</Link></h1>
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
          <NavLink
            to={"/signup"}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-slate-700"
            }
          >
            Sing Up
          </NavLink>
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
