import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import bg_breadcumb from "../../assets/breadcumb-bg.jpg";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import CourseCard from "../../components/CourseCard/CourseCard";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <section>
      <BackgroundImage
        img={bg_breadcumb}
        content={"All Courses"}
      ></BackgroundImage>
      <div className="bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12 py-10">
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
                {courses.map(course => (
                  <CourseCard key={course.id} course={course}></CourseCard>
                ))}
              </div>
            </div>
            <div className="md:col-span-1 mx-3 ">
              <div className="bg-white dark:bg-slate-900 pt-5 px-8 rounded-lg sticky top-3">
                <h2 className="text-2xl font-semibold text-center dark:text-white">
                  Most Purchased Courses
                </h2>
                <div className="flex flex-col gap-5 py-6">
                  {courses.map(course => (
                    <div className="flex flex-col md:flex-row gap-5 my-5" key={course.id}>
                      <div className="">
                        <img
                          className="md:h-24  w-44 md:w-full rounded-lg"
                          src={course.thumb}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <Link to={`/course/${course.id}`} className="hover:text-blue-600 dark:text-white">
                          {course.name}
                        </Link>
                        <div className="mt-3">
                        <span className="bg-red-600  text-white font-semibold px-6 py-1 rounded-lg ">
                          ${course.price}
                        </span>
                         
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
