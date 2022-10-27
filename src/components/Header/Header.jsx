import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthProviderContext } from "../../context/AuthContext";

const Header = () => {
  const { user, handleSignOut } = useContext(AuthProviderContext);

  const activeClass = {
    backgroundColor: "#2563eb",
    color: "#fff",
  };

  // handle logout

  const handleLogOut = () => {
    handleSignOut();
  };

  return (
    <div className="py-5 container mx-auto">
      <div className="flex justify-between items-center">
        <div className="logo-wrapper">
          <Link to={"/"}>
            <img className="h-16" src={logo} alt="" />
          </Link>
        </div>
        <div className="ml-auto md:mr-16 mr-0">
          <nav className="flex md:flex-row flex-col justify-between">
            <NavLink
              style={({ isActive }) => (isActive ? activeClass : undefined)}
              className="md:mr-3 mr-0 py-3 md:px-6  px-0 uppercase hover:bg-blue-600 hover:text-white text-base tracking-widest font-medium rounded"
              to={"/courses"}
            >
              Courses
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeClass : undefined)}
              className="mr-3 py-3 px-6 uppercase hover:bg-blue-600 hover:text-white text-base tracking-widest font-medium rounded"
              to={"/blogs"}
            >
              Blogs
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeClass : undefined)}
              className="mr-3 py-3 px-6 uppercase hover:bg-blue-600 hover:text-white text-base tracking-widest font-medium rounded"
              to={"/faq"}
            >
              Faq
            </NavLink>
          </nav>
        </div>
        <div>
          {user?.uid ? (
            <div className="flex items-center">
              <img
                title={user.displayName}
                className=" rounded-full h-14 mr-7"
                src={user.photoURL}
                alt=""
              />
              <button
                onClick={handleLogOut}
                className="mr-3 py-3 px-6 uppercase bg-blue-600 hover:bg-blue-600 text-white text-base tracking-widest font-medium rounded"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="mr-3 py-3 px-6 uppercase bg-blue-600 hover:bg-blue-600 text-white text-base tracking-widest font-medium rounded">
                Log in
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
