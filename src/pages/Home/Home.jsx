import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import background from "../../assets/hero_bg_8_2.jpg";
import CourseCard from "../../components/CourseCard/CourseCard";

const Home = () => {
  const featuredCourse = useLoaderData();

  return (
    <div>
      <div
        className="md:py-72 py-24"
        bg-cover="true"
        bg-center="true"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container mx-auto">
          <div className="md:w-1/3 mx-7 md:mx-0 bg-zinc-50 dark:bg-slate-900 p-6 rounded">
            <h2 className="md:text-2xl text-xl font-medium dark:text-white">
              Welcome to Coding School
            </h2>
            <p className="md:text-4xl text-2xl font-semibold my-7 md:leading-10 dark:text-white">
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

      <div  className="dark:bg-slate-900 bg-slate-100">
        <div className="md:py-16 py-10 container mx-auto">
          <div className="flex flex-col justify-center">
            <h2 className="text-blue-600 text-lg text-center font-semibold tracking-widest">
              POPULAR COURSES
            </h2>
            <h3 className="md:text-4xl text-2xl font-semibold text-center mt-4 dark:text-white">
              Explore Featured Courses
            </h3>
            <div className="my-12 grid md:grid-cols-3 grid-cols-1 justify-between gap-14">
              {featuredCourse.map(course => (
                <CourseCard key={course.id} course={course}></CourseCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
