import React from "react";
import "../../Assets/css/courses.css";
import Courses from "./Courses";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function FeaturedCourses() {
  return (
    <ScrollAnimation animateOnce animateIn="animate__fadeInDown">
      <div className="container card" style={{ marginTop: "-60px" }}>
        <div className="row card-heading">
          <div className="col-xl-12">
            <div className="section_title text-center">
              <h3>
                Featured <span> Courses </span>
              </h3>
              <p className="pr-4 pl-4">
                E - learning and training platform offering live and video
                classes on diverse hard and soft skills for the 21 st century
                professional or entrepreneur.
              </p>
            </div>
          </div>
        </div>
        <div className="row courses_row card-body">
          <Courses />
        </div>
        <div className="row mb-4">
          <div className="col-xl-12">
            <div className="more_close_btn text-center">
              <a href="#" className="boxed-btn3-line">
                More courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
