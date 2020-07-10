import React, { Component } from "react";
import image from "../../Assets/img/case/4.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScrollAnimation from "react-animate-on-scroll";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import Avatar from "@material-ui/core/Avatar";
import { CircularProgress, Divider } from "@material-ui/core";
import { useSelector } from "react-redux";
import ShowRating from "../../General Components/ShowRating";
// import { getCourses } from "../Patials/patials";

/*************Ebd of Import *********** */

var parse = require("html-react-parser");
export default function Courses() {
  const course = useSelector((state) => state.course.items.data);
  console.log(course);

  return (
    <>
      <div className="container">
        <div className="row">
          {course
            ? course.length > 0
              ? course.map((item) => (
                  <ScrollAnimation
                    animateOnce
                    animateIn="animate__fadeInDown"
                    className="col-md-4 col-xs-6"
                    key={item.id}
                  >
                    <div className="course m-2">
                      <div className="course_image">
                        <div className="overlay play"> </div>
                        <img
                          src={`http://pinnacle.test/${item.banner}`}
                          alt=""
                        />
                      </div>
                      <div className="course_body">
                        <div class="course_header mb-2 d-flex flex-row align-items-center justify-content-start">
                          <div class="course_tag">
                            <a href="#">New</a>
                          </div>
                          <div class="course_price ml-auto">
                            {item.isFree === "true" ? (
                              <span>Free</span>
                            ) : (
                              <>
                                Price: <span>{item.price}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <Divider />
                        <div className="course_title mt-3 mb-3">
                          <h3>
                            <a href="courses.html"> {item.title} </a>
                          </h3>
                        </div>
                        <div className="course_text">
                          {parse(item.description.substring(0, 50))}
                          {item.description.length > 50 ? "..." : null}
                        </div>
                        <ShowRating course={item} />
                        <Divider />
                        <div className="course_footer d-flex align-items-center justify-content-start mt-3">
                          <div className="">
                            <Avatar src={item.tutor.image}> </Avatar>
                            {/* <Avatar>{item.tutor.name.substring(0, 1)}</Avatar> */}
                          </div>
                          <div className="course_author_name">
                            By <a href="#"> {item.tutor.name} </a>
                          </div>
                          {/* <div className="course_sales ml-auto">
                                                                                                <span>352</span> Modules
                                                                                              </div> */}
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))
              : "1"
            : "2"}
        </div>
      </div>
    </>
  );
}
