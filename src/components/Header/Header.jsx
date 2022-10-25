import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="logo-wrapper">
          <Link to={'/'}>Coding School</Link>
        </div>
        <div>
          <nav className="flex justify-between">
            <Link to={"/courses"}>Courses</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/faq"}>Faq</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
