import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
import SingleCourseItem from "../../../Courses/SingleCourseItem";

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
              <Carousel responsive={responsive}>
                {this.state.courses.map((item) => (
                  <SingleCourseItem course={item} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.course.ALL_courses.data,
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
