import React from "react";
import "../../Assets/css/courses.css";
import Courses from "./ExploreCourses";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import WhatOthersView from "./WhatOthersView";
import { Link } from "react-router-dom";

export default function FeaturedCourses() {
  return (
      <div className="container-fluid px-3 py-5">
        <div className="row">
          <div className="col-xl-12 w-50">
            <div className="section_title text-center mt-4">
              <h3>
               Our top Courses
              </h3>              
              <p className="mt-3">
                Choose from various courses prepared by well trained tutors on
                diverse hard and soft skills for the 21 st century professional
                or entrepreneur.
              </p>
            </div>
          </div>
        </div>
        <div className="m-1">
          <Courses />
        </div>
        <div className="my-3">
          <WhatOthersView />
        </div>
        <div className="row mb-4">
          <div className="col-xl-12">
            <div className="more_close_btn text-center">
              <Link to='/courses' className="boxed-btn3-line">More Courses</Link>
            </div>
          </div>
        </div>
      </div>
 
  );
}
