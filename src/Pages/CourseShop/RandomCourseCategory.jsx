import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchRandomCoursesByCategory } from "../../Actions/courseAction";
import Courses from "./Courses";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import SingleCourseItem from "../../Courses/SingleCourseItem";
import ReactPlaceholder from "react-placeholder";

const RandomCourseCategory = (props) => {
  useEffect(() => {
    props.fetchRandomCoursesByCategory();
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
  return (
    <>
      <hr className="my-5" />
      {props.categories.map((category, key) => (
        <React.Fragment key={key}>
          {category.courses && category.courses.length > 0 ? (
            <section>
              <h2 className="section-title text-left">
               Top Courses on{" "}
                {category.main_category &&
                  category.main_category.name}
              </h2>
              <div className="slider-container">
                <a className="slider-nav left" onClick={onPrev}>
                  <GoChevronLeft />
                </a>
                <Slider ref={(c) => (slider = c)} {...settings}>
                  {category.courses.gettingRCCourse ? (
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
                  ) : category.courses.length > 0 ? (
                    category.courses.map((course) => (
                      <SingleCourseItem key={course.id} {...course} />
                    ))
                  ) : (
                    <p>There are no courses to recommend yet</p>
                  )}
                </Slider>
                <a className="slider-nav right" onClick={onNext}>
                  <GoChevronRight />
                </a>
              </div>
            </section>
          ) : null}
        </React.Fragment>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  gettingRCCourse: state.course.gettingRCCourse,
  categories: state.course.RCCourse,
  errorGettingRCCourse: state.course.errorGettingRCCourse,
});

const mapDispatchToProps = { fetchRandomCoursesByCategory };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomCourseCategory);
