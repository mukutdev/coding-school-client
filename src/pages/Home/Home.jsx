import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/hero_bg_8_2.jpg";

const Home = () => {
  return (
    <div>
      <div
        className="py-72"
        bg-cover="true"
        bg-center="true"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container mx-auto">
          <div className="w-1/3 bg-zinc-50 p-6 rounded">
            <h2 className="text-2xl font-medium">Welcome to Coding School</h2>
            <p className="text-4xl font-semibold my-7 leading-10">
              Get start carrier with Quality Learning
            </p>
            <Link to={"/courses"}>
              <button className="mr-4 p-2 px-5 text-lg  border border-blue-600 hover:bg-transparent hover:text-slate-700 font-medium bg-blue-600 text-white rounded">
                Check Out Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
