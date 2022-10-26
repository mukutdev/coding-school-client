import React from "react";
import { TbClock, TbNotes, TbUserCircle } from "react-icons/tb";
import { Link } from "react-router-dom";
const CourseCard = ({ course }) => {
  const {
    id,
    name,
    thumb,
    duration,
    students,
    lectures,
    price,
    instructor,
    category,
  } = course;
  return (
    <div
      className="pt-7 px-8  bg-white rounded-lg"
      style={{ boxShadow: "0px 3px 0px #dfeaf4" }}
    >
      <div className="relative">
        <img
          className="h-72 w-full object-cover rounded-lg"
          src={thumb}
          alt=""
        />
        <span className="bg-red-600 text-white font-semibold px-6 py-1 rounded-full absolute top-3 right-4">
          ${price}
        </span>
      </div>
      <div className="pt-4">
        <Link
          to={`/course/${id}`}
          className="text-xl font-medium hover:text-blue-600"
        >
          {name}
        </Link>
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center">
            <img
              className="h-12 rounded-full mr-4"
              src={instructor.instructorImg}
              alt=""
            />
            <span className="text-base  text-blue-600">{instructor.name}</span>
          </div>
          <div>
            <span className="bg-blue-600 text-white font-semibold px-6 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="border-t border-dashed border-gray-300 my-3"></div>
        <div className="flex items-center justify-between py-3">
          <span className="flex items-center justify-between gap-1">
            <TbNotes /> Lesson : {lectures}
          </span>
          <span className="flex items-center justify-between gap-1">
            <TbUserCircle /> Students : {students}
          </span>
          <span className="flex items-center justify-between gap-1">
            <TbClock /> Duration : {duration}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
