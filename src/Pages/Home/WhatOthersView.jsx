import React, { Component, useRef } from "react";
import image from "../../Assets/img/case/4.png";
import ScrollAnimation from "react-animate-on-scroll";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { CircularProgress, Divider } from "@material-ui/core";
import ShowRating from "../../General Components/ShowRating";
import SingleCourseItem from "../../Courses/SingleCourseItem";
import { getRecommendation } from "../../Actions/courseAction";
import { connect } from "react-redux";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ExploreCourses.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
/*************Ebd of Import *********** */

function WhatOthersView(props) {
  useEffect(() => {
    props.getRecommendation();
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { courses } = props;
  const placeholdersArray = new Array(10);
  let slider = useRef();
  const onNext = () => slider.slickNext();
  const onPrev = () => slider.slickPrev();
  const {
    recommendedCoursesFetchError,
    isGettingrecommendedCourses,
    recommendedCourses,
  } = props;
  return (
    <>
      <hr className="my-5" />
      <section>
        <h2 className="section-title text-left">
          What other students are viewing
        </h2>
        <div className="slider-container">
          <a className="slider-nav left" onClick={onPrev}>
            <GoChevronLeft />
          </a>
          <Slider ref={(c) => (slider = c)} {...settings}>
            {isGettingrecommendedCourses
              ? [...Array(10)].map((p, k) => (
                  <div key={k}>
                    <div className="m-2">
                      <ReactPlaceholder
                        showLoadingAnimation
                        type="rect"
                        style={{ height: "150px" }}
                      />
                      <div className="my-2" />
                      <div className="pr-3">
                        <ReactPlaceholder
                          showLoadingAnimation
                          rows={3}
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                ))
              : courses && courses.length > 0
              ? courses.map((course) => (
                  <SingleCourseItem key={course.id} {...course} />
                ))
              : <p>There are no courses to recommend yet</p>}
          </Slider>
          <a className="slider-nav right" onClick={onNext}>
            <GoChevronRight />
          </a>
        </div>
      </section>
    </>
  );
}
const mapStateToProps = (state) => ({
  recommendedCoursesFetchError: state.course.recommendedCoursesFetchError,
  isGettingrecommendedCourses: state.course.isGettingrecommendedCourses,
  courses: state.course.recommendedCourses.data,
});
// const mapStateToProps = (state) => ({
//   course: state.course.ALL_courses,
//   gettingRCCourse: state.course.gettingRCCourse,
//   RCCourse: state.course.RCCourse,
//   errorGettingRCCourse: state.course.errorGettingRCCourse,
// });
const mapDispatchToProps = {
  getRecommendation,
};

export default connect(mapStateToProps, mapDispatchToProps)(WhatOthersView);
