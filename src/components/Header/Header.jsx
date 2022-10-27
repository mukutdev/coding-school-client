import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { MdOutlineDarkMode, MdOutlineWbSunny , MdOutlineMenu , MdClose} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthProviderContext } from "../../context/AuthContext";

const Header = () => {
  const { user, handleSignOut } = useContext(AuthProviderContext);

  const [theme, setTheme] = useState(null);

  const [open , setOpen] = useState(false);

  // dark mood functionality

  useEffect(()=>{

    if(window.matchMedia('(prefers-color-scheme : dark)').matches){
      setTheme('dark')
    }else{
      setTheme('light')
    }

  } , [])

  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  } ,[theme])


  const activeClass = {
    backgroundColor: "#2563eb",
    color: "#fff",
  };

  // handle logout

  const handleLogOut = () => {
    handleSignOut();
  };

  const handleThemeSwitch = () =>{
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="py-5 container mx-auto">
      <div className="flex justify-between items-center">
        <div className="logo-wrapper ">
          <Link to={"/"}>
            <img className="md:h-16 h-8 mr-4 " src={logo} alt=""  />
          </Link>
        </div>
        <div className="md:ml-auto md:mr-16 mr-2">
          <div onClick={() => setOpen(!open)} className="dark:text-white md:hidden">
          {
              open ? <MdClose  /> :
              <MdOutlineMenu />
            }
       
          </div>
          <nav className={`flex md:flex-row flex-col justify-between duration-300 ease-in md:static dark:bg-slate-900 bg-white dark:text-white absolute  ${open ? 'top-20 p-6' : 'top-[-220px]'}`}>

            <NavLink
              style={({ isActive }) => (isActive ? activeClass : undefined)}
              className="md:mr-3 mr-0 py-3 md:px-6 px-3  uppercase hover:bg-blue-600  hover:text-white text-base tracking-widest font-medium rounded"
              to={"/courses"}
            >
              Courses
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeClass : undefined)}
              className="mr-3 py-3 md:px-6 uppercase px-3  hover:bg-blue-600 hover:text-white text-base tracking-widest font-medium rounded"
              to={"/blogs"}
            >
              Blogs
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeClass : undefined)}
              className="mr-3 py-3 md:px-6 uppercase px-3  hover:bg-blue-600 hover:text-white text-base tracking-widest font-medium rounded"
              to={"/faq"}
            >
              Faq
            </NavLink>
          </nav>
        </div>
        <div className="mr-3">
          <button onClick={handleThemeSwitch} className="flex dark:text-white text-2xl">
             {theme === 'dark' ?  <MdOutlineDarkMode /> :  <MdOutlineWbSunny />}
          </button>
        </div>
        <div>
          {user?.uid ? (
            <div className="flex items-center">
              <img
                title={user.displayName}
                className=" rounded-full md:h-14 h-8 mr-7"
                src={user.photoURL}
                alt=""
              />
              <button
                onClick={handleLogOut}
                className="mr-3 py-3 md:px-6 px-2 uppercase bg-blue-600 hover:bg-blue-600 text-white md:text-base text-sm  tracking-widest font-medium rounded"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="mr-3 py-3 md:px-6 px-4 uppercase bg-blue-600 hover:bg-blue-600 text-white md:text-base text-sm tracking-widest font-medium rounded">
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
