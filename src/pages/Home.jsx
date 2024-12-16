import React from "react";

const Home = () => (
  <div className="container text-center py-5">
    <h1 className="display-3 font-weight-bold">Welcome to Vista Developer</h1>
    <p className="lead">
      We provide top-notch IT solutions to help grow your business in the digital age.
    </p>
    <hr />
    <h3 className="mt-5">Why Choose Us?</h3>
    {/* Card Section */}
    <div className="row mt-4">
      <div className="col-md-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Cutting-Edge Technology</h5>
            <p className="card-text">
              We leverage the latest technologies to build high-performance solutions that drive your business forward.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Expert Team</h5>
            <p className="card-text">
              Our developers, designers, and strategists are industry leaders with a proven track record of success.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Client-Focused Approach</h5>
            <p className="card-text">
              We prioritize your business goals, delivering customized solutions designed to achieve measurable results.
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h3 className="mt-5">Let's Get Started!</h3>
    <p className="lead">Ready to take your business to the next level? Contact us today!</p>
    <a href="/contact" className="btn btn-primary btn-lg">
      Contact Us
    </a>
  </div>
);

export default Home;
