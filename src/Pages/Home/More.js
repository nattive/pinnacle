import React from "react";
import volunteer from "../../Assets/img/Pinnacle/volunteer.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function More() {
  return (
    <div className="service_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-50">
              <h3>
              Achieve much more with <span>Pinnacle</span>, 
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_service text-center">
              <div className="service_icon">
                <img src={volunteer} alt="" />
              </div>
              <h3> Volunteer at Pinnacle Consult </h3>
              <p>
                Working at Pinnacle launches you into an exciting experience of
                creating innovative learning and management solutions with a
                smart and fun team. Our team believes in design-thinking for
                learning, projects, and advisory services
              </p>
              <div className="button-group mt-4">
                <a href="#" className="learn_more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_service text-center">
              <div className="service_icon">
                <img
                  src={volunteer}
                  style={{ width: "80%", margin: "1em" }}
                  alt=""
                />
              </div>
              <h3> Create with Pinnacle </h3>
              <p>
                Join Pinnacle consult as a tutor and turn your skills into an
                avenue to reach millions in Africa
              </p>
              <div className="button-group mt-4">
                <a href="#" className="learn_more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_service text-center">
              <div className="service_icon">
                <img
                  src={volunteer}
                  style={{ width: "80%", margin: "1em" }}
                  alt=""
                />
              </div>
              <h3>Pinnacle Personalised Coaching and Trainings</h3>
              <p>
                Receive one-on-one personal training and coaching from our
                diverse range of industry professionals and entrepreneurs. This
                product is available online and offline to interested
                individuals and corporate organisations
              </p>
              <a href="#" className="learn_more">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
