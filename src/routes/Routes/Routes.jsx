import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch('http://localhost:5000/courses/featured'),
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: () => fetch('http://localhost:5000/courses'),
        element: <Courses></Courses>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "faq",
        element: <Faq></Faq>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
