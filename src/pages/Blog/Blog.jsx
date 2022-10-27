import React from "react";
import bg_breadcumb from "../../assets/breadcumb-bg.jpg";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
const Blog = () => {
  return (
    <div>
      <BackgroundImage img={bg_breadcumb} content={"Blogs"}></BackgroundImage>
      <div className="container mx-auto my-6">
        <div className="md:w-2/3 mx-auto my-8 shadow-lg rounded p-5">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4"
          >
            <input type="checkbox" />

            <div className="collapse-title text-xl font-medium text-blue-600">
              What is cors?
            </div>
            <div className="collapse-content">
              <p className="font-medium">
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources. CORS also relies on a mechanism by
                which browsers make a "preflight" request to the server hosting
                the cross-origin resource, in order to check that the server
                will permit the actual request. In that preflight, the browser
                sends headers that indicate the HTTP method and headers that
                will be used in the actual request.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <input type="checkbox" />

            <div className="collapse-title text-xl font-medium text-blue-600">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </div>
            <div className="collapse-content">
              <p className="font-medium">
                Firebase Authentication provides backend services, easy-to-use
                SDKs, and ready-made UI libraries to authenticate users to your
                app. It supports authentication using passwords, phone numbers,
                popular federated identity providers like Google, Facebook and
                Twitter, and more.But there are other options also like MongoDB
                ,Oracle Database , Amazon Redshift etc etc .They Provide Quality
                service as well
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4"
          >
            <input type="checkbox" />

            <div className="collapse-title text-xl font-medium text-blue-600">
              How does the private route work?
            </div>
            <div className="collapse-content">
              <p className="font-medium">
                The private route is similar to the public route, the only
                change is that redirect URL and authenticate condition.If the
                user is not authenticated he will be redirected to the login
                page and the user can only access the authenticated routes If he
                is authenticated (Logged in).
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4"
          >
            <input type="checkbox" />

            <div className="collapse-title text-xl font-medium text-blue-600">
              What is Node? How does Node work?
            </div>
            <div className="collapse-content">
              <p className="font-medium">
                Node is a used for backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node.js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
