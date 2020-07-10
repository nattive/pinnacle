import React, { Component } from "react";
import imgClass2 from "../Assests/images/classes-2.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Assests/css/style.css";
import { connect } from "react-redux";
import { Skeleton } from "@material-ui/lab";
import { useState } from "react";
import {
  fetchPOCourses,
  fetchCOTFCourses,
  fetchFREECourses,
  getEnrolledCourse,
  enrollCourse,
  fetchCourses,
} from "../../../Actions/courseAction";
import { BaseUrl } from "../../../Patials/BaseUrl";

class CourseSlide extends Component {
  constructor() {
    super();
    this.state = {
      courses: [],
    };
  }

  componentDidMount(){
      this.props.fetchCourses(5)
      this.props.fetchFREECourses(5);
      this.props.fetchPOCourses(5);
      this.props.fetchCourses(5);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.courses) {
      this.setState({ courses: newProps.courses });
    }
  }

  render() {
    const { courses } = this.state;

    return (
      <div className="colorlib-classes">
        {console.log(courses)}
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 colorlib-heading center-heading text-center">
              <h1 className="heading-big">Popular Online Courses</h1>
              <h2>Popular Online Courses</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ">
              <OwlCarousel
                className="owl-theme, owl-carousel"
                loop
                items={4}
                margin={10}
                mergeFit
                //   s
              >
                {this.state.courses.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="classes">
                      <div
                        className="classes-img"
                        style={{
                          backgroundImage: `url(${BaseUrl + item.banner})`,
                        }}
                      ></div>
                      <div className="wrap">
                        <div className="desc">
                          <span className="teacher">{item.tutor.name}</span>
                          <h3>
                            <a href="#" style={{ textTransform: "capitalize" }}>
                              {item.title}
                            </a>
                          </h3>
                        </div>
                        <div className="pricing">
                          <p>
                            <span className="price">
                              {item.isFree === "true" ? "Free" : item.price}
                            </span>
                            {/* <span className="price old-price">$250</span> */}
                            <span className="more">
                              <a href="#">
                                <i className="icon-link"></i>
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.course.items.data,
  PO_courses: state.course.PO_courses,
  FREE_courses: state.course.FREE_courses,
  COTF_courses: state.course.COTF_courses,
  ENROLLED_courses: state.course.ENROLLED_courses,
});

const mapDispatchToProps = {
  fetchPOCourses,
  fetchCOTFCourses,
  fetchFREECourses,
  getEnrolledCourse,
  enrollCourse,
  fetchCourses,
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseSlide);
