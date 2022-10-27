import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-blue-600 px-2 text-sm rounded rotate-12 absolute">
          <span className="text-white">Page Not Found</span>
        </div>
        <button className="mt-5">
          <Link
            to={"/"}
            className="relative inline-block text-sm font-medium text-white group active:text-blue-600 focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              BAck to home
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
