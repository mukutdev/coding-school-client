import React from "react";
import { BiCaretRightCircle } from "react-icons/bi";
import { MdOutlineTopic } from "react-icons/md";
import { AiOutlineUserAdd} from "react-icons/ai";
import { CiGlobe} from "react-icons/ci";
import { TbUserCircle ,TbClock, TbNotes, } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";
import bg_breadcumb from "../../assets/breadcumb-bg.jpg";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
const SingleCourse = () => {
  const course = useLoaderData();
  const {
    id,
    name,
    thumb,
    courseImg,
    duration,
    students,
    lectures,
    price,
    instructor,
    category,
    description,
    outcomes,
    lang
  } = course;
  console.log(course);

  return (
    <section>
      <BackgroundImage img={bg_breadcumb} content={name}></BackgroundImage>

      <div className="container mx-auto">
        <div className="grid grid-cols-3 my-14 gap-16">
          <div className="col-span-2 ml-20">
            <div className="border p-10 rounded-lg shadow">
              <div>
                <img className="rounded-lg" src={courseImg} alt="" />
              </div>
              <div className="mt-7">
                <h2 className="text-3xl font-semibold">{name}</h2>
                <div className="flex mt-5 gap-5">
                  <span className="bg-blue-600 px-4 py-1 rounded-full text-white flex items-center gap-2 text-base font-medium">
                    {" "}
                    <TbUserCircle /> Instructor : {instructor.name}
                  </span>
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full flex items-center gap-2 text-base font-medium">
                    {" "}
                    <MdOutlineTopic /> Category : {category}
                  </span>
                </div>
              </div>
            </div>
            <div className="shadow rounded-lg p-10 my-10">
              <h2 className="text-2xl font-semibold">About The Course</h2>
              <p className="my-4 text-lg">{description}</p>
              <h2 className="text-2xl font-semibold mt-3">
                What You will Learn
              </h2>
              <div className="my-5">
                {outcomes.map((list, i) => (
                  <li
                    key={i}
                    className="list-none flex items-center gap-2 my-3 text-lg font-medium"
                  >
                    <BiCaretRightCircle className="text-blue-600 text-lg" />
                    {list}
                  </li>
                ))}
              </div>

              <div className="my-6">
                <Link to={`/checkout/${id}`}>
                  <button className="mr-3 py-3 px-6 uppercase bg-blue-600 hover:bg-black text-white text-base tracking-widest font-medium rounded">
                    Get Premium Access
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 mr-20">
            <div className=" shadow rounded-lg sticky top-3">
              <div>
                <img src={thumb} alt="" />
              </div>
              <div className="py-8 px-10">
                <h1 className="font-semibold text-2xl"> ${price}</h1>
                <div className="my-6">
                  <p className="flex items-center gap-2 mb-2 text-lg border-b border-dashed py-2 border-slate-300">
                    <TbUserCircle className="text-blue-600" />
                    <span className="font-medium">Instructor</span> :
                    {instructor.name}
                  </p>
                  <p className="flex items-center gap-2 mb-2 text-lg border-b border-dashed py-2 border-slate-300">
                    <TbNotes className="text-blue-600" />
                    <span className="font-medium">Lesson</span> : {lectures}
                  </p>
                  <p className="flex items-center gap-2 mb-2 text-lg border-b border-dashed py-2 border-slate-300">
                    <AiOutlineUserAdd className="text-blue-600" />
                    <span className="font-medium">Students</span> : {students}
                  </p>
                  <p className="flex items-center gap-2 mb-2 text-lg border-b border-dashed py-2 border-slate-300">
                    <TbClock className="text-blue-600" />
                    <span className="font-medium">Duration</span> : {duration}
                  </p>
                  <p className="flex items-center gap-2 mb-2 text-lg border-b border-dashed py-2 border-slate-300">
                    <CiGlobe className="text-blue-600" />
                    <span className="font-medium">Language</span> : {lang}
                  </p>
                   
                  <Link>
                  <button className=" my-6 py-3 px-6 uppercase bg-blue-600 hover:bg-black text-white text-base tracking-widest font-medium rounded">Download Curriculum </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCourse;