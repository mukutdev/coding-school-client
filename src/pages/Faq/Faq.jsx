import React from "react";
import bg_breadcumb from "../../assets/breadcumb-bg.jpg";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
const Faq = () => {
  return (
    <div>
      <BackgroundImage img={bg_breadcumb} content={"FAQ"}></BackgroundImage>
      <div className="container mx-auto my-6">
        <div className="md:w-2/3 mx-auto my-8 shadow-lg rounded p-5">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4"
          >
            <input type="checkbox" />

            <div className="collapse-title text-xl font-medium text-black">
            How do I take a coding school course?
            </div>
            <div className="collapse-content">
              <p className="font-medium">
              coding school courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile browser. 
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <input type="checkbox" />

            <div className="collapse-title text-xl font-medium text-blue-600">
            How can I pay for a course?
            </div>
            <div className="collapse-content">
              <p className="font-medium">
                You can pay via Stripe or paypal. 
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4"
          >
            <input type="checkbox" />

            <div className="collapse-title text-xl font-medium text-blue-600">
            Where can I go for help? ?
            </div>
            <div className="collapse-content">
              <p className="font-medium">
              If you have a question about a paid course while you’re taking it, you can search for answers to your question in the Q&A or ask the instructor. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
