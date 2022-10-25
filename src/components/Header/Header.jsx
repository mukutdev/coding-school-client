import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Header = () => {
  const activeClass = {
    backgroundColor: "#2563eb",
    color: "#fff",
  };

  return (
    <div className="py-5 container mx-auto">
      <div className="flex justify-between">
        <div className="logo-wrapper">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="ml-auto mr-16">
          <nav className="flex justify-between">
            <NavLink
              style={({ isActive }) => (isActive ? activeClass : undefined)}
              className="mr-3 py-3 px-6 uppercase hover:bg-gray-800 hover:text-white text-base tracking-widest font-medium rounded-lg"
              to={"/courses"}
            >
              Courses
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeClass : undefined)}
              className="mr-3 py-3 px-6 uppercase hover:bg-gray-800 hover:text-white text-base tracking-widest font-medium rounded-lg"
              to={"/blogs"}
            >
              Blogs
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeClass : undefined)}
              className="mr-3 py-3 px-6 uppercase hover:bg-gray-800 hover:text-white text-base tracking-widest font-medium rounded-lg"
              to={"/faq"}
            >
              Faq
            </NavLink>
          </nav>
        </div>
        <div>
          <div>
            <Link to={"/login"}>
              <button className="mr-3 py-3 px-6 uppercase bg-blue-600 hover:bg-gray-800 text-white text-base tracking-widest font-medium rounded-lg">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
