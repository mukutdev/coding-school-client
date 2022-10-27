import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bg_breadcumb from "../../assets/breadcumb-bg.jpg";
import { AuthProviderContext } from "../../context/AuthContext";
const Register = () => {
  //  create new user context
  const { handleNewUserWithEmailPass, handleUpdateProfile } =
    useContext(AuthProviderContext);

  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
   
    const handleCreateNewUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoURL.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setMessage(<p className="text-red-600">Password doesn't matched </p>);
      return;
    }

    // handling email password register option
    handleNewUserWithEmailPass(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        handleUpdateProfile(name, photoUrl)
          .then(() => {})
          .catch(err => console.log("error message", err));
        navigate(from, { replace: true });
        setMessage(<p>Account created successfully</p>);
      })
      .catch(err => console.log("error message msg", err));
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
              <form onSubmit={handleCreateNewUser}>
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
                    className="input-controller py-2 px-3 outline-gray-200 rounded font-medium"
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
                {/* <div className="flex flex-col gap-3 my-4">
                  <input
                    type="checkbox"
                    name="check"
                    value="I accept terms and conditions"
                    required
                  />
                </div> */}
                <div className="flex flex-col gap-3 my-4">
                  <button className="mr-3 py-3 px-6 uppercase bg-blue-600 hover:bg-gray-800 text-white text-base tracking-widest font-medium rounded">
                    Register
                  </button>
                </div>
              </form>

              <div className="flex flex-col gap-3 my-4">
                <p>
                  Already have an account ?{" "}
                  <Link className="text-blue-600 hover:underline" to={"/login"}>
                    Login Now !
                  </Link>
                </p>
              </div>
              <div>{message ? message : undefined}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
