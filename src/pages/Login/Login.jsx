import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";
import bg_breadcumb from "../../assets/breadcumb-bg.jpg";
import { AuthProviderContext } from "../../context/AuthContext";

import "./Login.css";
const Login = () => {
  const [message, setMessage] = useState("");
  // sign in context
  const {
    handleSignInWithEmailPass,
    handleGoogleSignInMethod,
    handleGithubSignInMethod,
  } = useContext(AuthProviderContext);

  //google provider
  const googleProvider = new GoogleAuthProvider();
  // github provider
  const githubProvider = new GithubAuthProvider();

  // email pass sign in method
  const handleUserSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    handleSignInWithEmailPass(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(err => {
        const errorMessage = err.message;
        console.log(errorMessage.split("/")[1].split(")")[0]);
      });
  };

  //google sign in method
  const handleGoogleLogin = () => {
    handleGoogleSignInMethod(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(err => console.log("error message", err));
  };
  // github sign in method
  const handleGithubLogin = () => {
    handleGithubSignInMethod(githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(err => console.log("error message", err));
  };

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
              <form onSubmit={handleUserSignIn}>
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
                <Link className=" hover:underline">Forget Password ?</Link>
              </div>
              <div className="flex flex-col mt-4 ">
                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center bg-slate-100 hover:bg-blue-600 hover:text-white py-3 px-5 text-base font-medium rounded"
                >
                  <FcGoogle className="mr-5 text-2xl" /> Sign in With Google
                </button>
                <button
                  onClick={handleGithubLogin}
                  className="flex items-center justify-center bg-slate-100 mt-3 hover:bg-blue-600 hover:text-white py-3 px-5 text-base font-medium rounded"
                >
                  <GoMarkGithub className="mr-5 text-2xl" /> Sign in With Github
                </button>
              </div>
              <div className="flex flex-col gap-3 my-4">
                <p>
                  New User ?{" "}
                  <Link
                    className="text-blue-600 hover:underline"
                    to={"/register"}
                  >
                    Register Now !
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
