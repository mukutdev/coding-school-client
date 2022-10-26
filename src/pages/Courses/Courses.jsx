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
      <div style={{ backgroundColor: "#F3F7FB" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-12 py-10">
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-7">
                {courses.map(course => (
                  <CourseCard key={course.id} course={course}></CourseCard>
                ))}
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-white pt-5 px-8 rounded-lg sticky top-3">
                <h2 className="text-2xl font-semibold text-center">
                  Most Purchased Courses
                </h2>
                <div className="flex flex-col gap-5 py-6">
                  {courses.map(course => (
                    <div className="flex  gap-5 my-5" key={course.id}>
                      <div>
                        <img
                          className="h-24 w-full rounded-lg"
                          src={course.thumb}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <Link to={`/course/${course.id}`} className="hover:text-blue-600">
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
