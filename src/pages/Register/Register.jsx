import React from "react";
import { Link } from "react-router-dom";
import bg_breadcumb from "../../assets/breadcumb-bg.jpg";
const Register = () => {
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
                <div className="flex flex-col gap-3 my-4">
                  <input
                    type="name"
                    name="name"
                    placeholder="Enter Your Full Name"
                    className="input-controller py-2 px-3 outline-gray-200 rounded"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3 my-4">
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Enter Your Photo Url"
                    className="input-controller py-2 px-3 outline-gray-200 rounded"
                    required
                  />
                </div>
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
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="input-controller py-2 px-3 outline-gray-200 rounded"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3 my-4">
                  <input
                    type="checkbox"
                    name="check"
                    value="I accept terms and conditions"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3 my-4">
                  <button className="mr-3 py-3 px-6 uppercase bg-blue-600 hover:bg-gray-800 text-white text-base tracking-widest font-medium rounded">
                    Register
                  </button>
                </div>
              </form>
        
              <div className="flex flex-col gap-3 my-4">
                 <p>Already have an account ? <Link className="text-blue-600 hover:underline" to={'/login'}>Login Now !</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
