import React from "react";
import { GrPaypal, GrStripe } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import bg_breadcumb from "../../assets/breadcumb-bg.jpg";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

const Checkout = () => {
  const selectedCourse = useLoaderData();
  const { name, price, courseImg } = selectedCourse;
  console.log(selectedCourse);
  return (
    <section>
      <BackgroundImage
        img={bg_breadcumb}
        content={"Checkout"}
      ></BackgroundImage>
      <div className="my-8">
        <div className="w-1/3 mx-auto shadow-lg rounded-lg p-10 dark:bg-slate-800">
          <h3 className="text-2xl text-center font-semibold mb-4 dark:text-white">
            Thanks For Choosing {name} Course
          </h3>
          <img src={courseImg} alt="" />
          <h4 className=" my-4 text-xl font-medium text-center dark:text-white">
            Please Pay <span className="text-blue-600 dark:text-white">${price}</span>{" "}
          </h4>

          <div className="my-6 dark:text-white">
            <h5 className="text-center font-medium text-lg">
              Choose Your Payment Method
            </h5>
            <button
              onClick={() =>
                swal({
                  title: "Thanks!",
                  text: `For Purchasing ${name}`,
                  icon: "success",
                  button: "Close",
                })
              }
              className=" dark:text-white mx-auto flex items-center gap-2 my-6 py-3 px-6 uppercase bg-blue-600 hover:bg-black text-white text-base tracking-widest font-medium rounded"
            >
              {" "}
              <GrStripe /> Pay Via Stripe
            </button>
            <button
              onClick={() =>
                swal({
                  title: "Thanks!",
                  text: `For Purchasing ${name}`,
                  icon: "success",
                  button: "Close",
                })
              }
              className=" mx-auto flex items-center gap-2 my-6 py-3 px-6 uppercase bg-blue-600 hover:bg-black text-white text-base tracking-widest font-medium rounded"
            >
              {" "}
              <GrPaypal /> Pay Via Paypal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
