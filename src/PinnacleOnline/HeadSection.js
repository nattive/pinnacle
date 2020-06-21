import React from "react";
import hero from "../Assets/img/banner/hero_1.jpg";
import { useRouteMatch, Link } from "react-router-dom";
import SignUp from "../User/SignUp";
export default function HeadSection() {
  let { path, url } = useRouteMatch();
  return (
    <div className="intro-section" id="home-section">
      <div
        className="slide-1"
        style={{ backgroundImage: `url(${hero})` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4">
                  <h1 data-aos="fade-up" data-aos-delay="100">
                    Welcome to Pinnacle E-learning and training platform
                  </h1>
                  <p className="mb-4" data-aos="fade-up" data-aos-delay="200">
                    We offer live and video classes on diverse hard and soft
                    skills for the 21st century professional or entrepreneur.
                  </p>
                  <p data-aos="fade-up" data-aos-delay="300">
                    <a href="#" className="btn btn-primary py-3 px-5 btn-pill">
                      Admission Now
                    </a>
                  </p>
                </div>

                <div
                  className="col-lg-5 ml-auto"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <SignUp type="isPO" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
