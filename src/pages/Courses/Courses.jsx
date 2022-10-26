import React from "react";
import { useLoaderData } from "react-router-dom";
import bg_breadcumb from "../../assets/breadcumb-bg.jpg";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import CourseCard from "../../components/CourseCard/CourseCard";

const Courses = () => {

  const courses = useLoaderData()
  return (
    <section>
      <BackgroundImage
        img={bg_breadcumb}
        content={"All Courses"}
      ></BackgroundImage>
        <div  style={{ backgroundColor: "#F3F7FB" }}>
        <div className="container mx-auto">
         <div className="grid grid-cols-3 gap-12 py-10">
            <div className="col-span-2">
               <div className="grid grid-cols-2 gap-7">
               {
                courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
              }
               </div>
            </div>
            <div className="col-span-1">
                <div className="bg-white p-5 rounded-lg">
                      <h2 className="text-2xl font-semibold text-center">Most Purchased Courses</h2>
                </div>
            </div>
        </div>
        </div>
        </div>
    </section>
  );
};

export default Courses;
