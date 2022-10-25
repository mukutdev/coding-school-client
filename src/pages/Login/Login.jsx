import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";
import bg_breadcumb from "../../assets/breadcumb-bg.jpg";

import "./Login.css";
const Login = () => {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${bg_breadcumb})` }}
        className="h-80 bg-cover flex items-center justify-center"
      >
        <h2 className="text-4xl uppercase tracking-widest text-white font-semibold">
          Login
        </h2>
      </div>

      <div className="my-16">
        <div className="w-96 mx-auto">
          <div className="form-wrapper rounded-sm p-5">
            <h2 className="text-xl">Hi , Welcome Back !</h2>
            <div className="my-7">
              <form>
                <div className="flex flex-col gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    className="input-controller py-2 px-3 outline-gray-200 rounded"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3 my-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input-controller py-2 px-3 outline-gray-200 rounded"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3 my-4">
                  <button className="mr-3 py-3 px-6 uppercase bg-blue-600 hover:bg-gray-800 text-white text-base tracking-widest font-medium rounded">
                    Sign In
                  </button>
                </div>
              </form>
              <div>
                <Link className=" hover:underline">
                  Forget Password ?
                </Link>
              </div>
              <div className="flex flex-col mt-4 ">
     
                    <button className="flex items-center justify-center bg-slate-100 hover:bg-blue-600 hover:text-white py-3 px-5 text-base font-medium">
                    <FcGoogle className="mr-5 text-2xl"/> Sign in With Google
                   </button>
                    <button className="flex items-center justify-center bg-slate-100 mt-3 hover:bg-blue-600 hover:text-white py-3 px-5 text-base font-medium">
                    <GoMarkGithub className="mr-5 text-2xl"/> Sign in With Github
                   </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
