import React, { Component, useRef, useState } from "react";
import image from "../../Assets/img/case/4.png";
import ScrollAnimation from "react-animate-on-scroll";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { CircularProgress, Divider } from "@material-ui/core";
import ShowRating from "../../General Components/ShowRating";
import SingleCourseItem from "../../Courses/SingleCourseItem";
import {
  getCourses,
  fetchRandomCoursesByCategory,
} from "../../Actions/courseAction";
import { connect } from "react-redux";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ExploreCourses.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
/*************Ebd of Import *********** */

function Courses(props) {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    props.fetchRandomCoursesByCategory();
  }, []);
  useEffect(() => {
    setCategories([]);
    const temp_array = [];
    props.RCCourse.map((course) =>
      temp_array.push({
        category_name: course.name,
        courses: course.courses,
        main_category: course.main_category.name,
      })
    );
    setCourses(temp_array[0] && temp_array[0].courses);
    setCategories(temp_array);
  }, [props.RCCourse]);
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
  let slider = useRef();
  const onClickCategory = (course, key) => {
    setCourses(course);
    setActiveIndex(key);
  };
  const onNext = () => slider.slickNext();
  const onPrev = () => slider.slickPrev();
  const { gettingRCCourse } = props;
  // category--option-nav-acrive
  return (
    <>
      <section>
        <h3 className="section-title text-left mt-5">
          Explore Course Category
        </h3>
        <div className="row w-75 ml-4">
          {categories.map((category, key) => (
            <a
              onClick={() => onClickCategory(category.courses, key)}
              key={key}
              className={` mb-2 mr-3 ${
                activeIndex === key
                  ? "category--option-nav-acrive"
                  : "category--option-nav"
              }`}
            >
              {category.category_name}
            </a>
          ))}
        </div>
        <hr className="my-5" />

        <div className="slider-container">
          <a className="slider-nav left" onClick={onPrev}>
            <GoChevronLeft />
          </a>
          <Slider ref={(c) => (slider = c)} {...settings}>
            {gettingRCCourse ? (
              [...Array(10)].map((p, k) => (
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
            ) : courses && courses.length > 0 ? (
              courses.map((course) => (
                <SingleCourseItem key={course.id} {...course} />
              ))
            ) : (
              <p>No course in this category yet</p>
            )}
          </Slider>
          <a className="slider-nav right" onClick={onNext}>
            <GoChevronRight />
          </a>
        </div>
      </section>
    </>
  );
}
// const mapStateToProps = (state) => ({
//   courses: state.course.ALL_courses,
// });
const mapStateToProps = (state) => ({
  gettingRCCourse: state.course.gettingRCCourse,
  RCCourse: state.course.RCCourse,
  errorGettingRCCourse: state.course.errorGettingRCCourse,
});
const mapDispatchToProps = {
  fetchRandomCoursesByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
