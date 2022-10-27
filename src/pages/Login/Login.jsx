import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import { AuthProviderContext } from "../../context/AuthContext";
import bg_breadcumb from "../../assets/breadcumb-bg.jpg";

import "./Login.css";
const Login = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from.pathname || '/'
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
        navigate(from , {replace : true})
      })
      .catch(err => {
        const errorMessage = err.message;
        setMessage(errorMessage.split("/")[1].split(")")[0])
        console.log(errorMessage.split("/")[1].split(")")[0]);
      });
  };

  //google sign in method
  const handleGoogleLogin = () => {
    handleGoogleSignInMethod(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from , {replace : true})
      })
      .catch(err => console.log("error message", err));
  };
  // github sign in method
  const handleGithubLogin = () => {
    handleGithubSignInMethod(githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from , {replace : true})
      })
      .catch(err => console.log("error message", err));
  };

  return (
    <section>
      <BackgroundImage img={bg_breadcumb} content={"Login"}></BackgroundImage>

      <div className="my-16">
        <div className="md:w-96 md:mx-auto mx-4 dark:bg-slate-800">
          <div className="form-wrapper rounded-sm p-5">
            <h2 className="text-xl dark:text-white">Hi , Welcome Back !</h2>
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
                  <button className="mr-3 py-3 px-6 uppercase hover:dark:bg-slate-700 bg-blue-600 hover:bg-gray-800 text-white text-base tracking-widest font-medium rounded">
                    Sign In
                  </button>
                </div>
              </form>
              {/* <div>
                <Link className=" hover:underline dark:text-white">Forget Password ?</Link>
              </div> */}
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
              <div className="flex flex-col gap-3 my-4 dark:text-white">
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
              <div className="dark:text-white">{message ? message : undefined}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
