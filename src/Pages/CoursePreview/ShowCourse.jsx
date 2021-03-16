import React, { ReactElement, useEffect, useState } from "react";
import "./ShowCourse.css";
import NavBarHeader from "../Home/NavBarHeader";
import {
  FaPlayCircle,
  FaSignal,
  FaHandPointRight,
  FaVideo,
  FaCheck,
} from "react-icons/fa";
import { Avatar, CircularProgress } from "@material-ui/core";
import { GoClock, GoTag } from "react-icons/go";
import VideoPlayer from "../../General Components/VideoPlayer/VideoPlayer";
import PostReview from "../../Courses/Review/PostReview";
import Comments from "../../Courses/PlayArena/Comments";
import ModulesList from "../../Pages/Modules/ModulesList";
import ShowRating from "../../General Components/ShowRating";
import { Rating } from "@material-ui/lab";
import Reviews from "../../Courses/Cmments/Reviews";
import RecommendedCourses from "../../Courses/RecommendedCourses/RecommendedCourses";
import {
  enrollCourse,
  isCourseEnrolled,
  playCourse,
  showCourse,
} from "../../Actions/courseAction";
import { connect } from "react-redux";

function ShowCourse(props) {
  const [course, setCourse] = useState({});
  useEffect(() => {
    console.log("props");
    const course = props.match.params?.course;
    props.showCourse(course);
  }, []);
  useEffect(() => {
    const course = Object.assign({}, props.showedCourse);
    const objArray = props.showedCourse?.objective?.split("-");
    course.objArray = objArray;
    setCourse(course);
  }, [props.showedCourse]);
  return (
    <div className="bg-light">
      <NavBarHeader />
      <section className="bg-light">
        <div className="head-section">
          <div className="container-fluid">
            {course.id ? (
              <>
                {" "}
                <div className="head-body">
                  <h1 className="course-main-title">{course.title}</h1>
                  <p className="course-sub-title">{course.subtitle}</p>
                  <div className="d-flex mt-3">
                    <button className="btn-intro">
                      Get Started
                      {/* <i className="pl-2 pt-1">
                    <FaPlayCircle />
                  </i> */}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="mx-5 mt-5">
                <CircularProgress color="primary" size={35} />
              </div>
            )}
          </div>
        </div>
        <div className="p-3" style={{ backgroundColor: "#fff" }}>
          <div className="container row ">
            {course.id ? (
              <>
                {" "}
                <div className="col-xs-12 col-md-7 d-flex align-items-center">
                  <div className="tutor-info d-flex mr-5">
                    <Avatar style={{ backgroundColor: "rgb(155, 155, 187)" }} />
                    <div className="tutor-meta pl-3">
                      <h4>Jphn doe</h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="tutor-time  mr-5">
                    <div className="d-flex align-items-center pl-2">
                      <i>
                        <GoClock />
                      </i>
                      <p>3hrs 12mins</p>
                    </div>
                  </div>
                  <div className="tutor-time mr-5">
                    <div className="d-flex align-items-center pl-2">
                      <i>
                        <FaSignal />
                      </i>
                      <p>{course.course_difficulty}</p>
                    </div>
                  </div>
                  <div className="mr-5">
                    <ShowRating
                      rating={course.rating_percentage}
                      no_rated_user={course.no_rated_user}
                    />
                  </div>{" "}
                </div>
                <div className="col-xs-12 col-md-5  video-preview">
                  <VideoPlayer
                    videoUrlr={course.videoUrl}
                    banner={course.banner}
                  />
                </div>{" "}
              </>
            ) : (
              <div className="mx-5 mt-5">
                <CircularProgress color="primary" size={35} />
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="row">
          {course.id ? (
            <div className="col-xs-12 card card-body">
              <div className="row">
                <div className="col-xs-12 col-md-6 course-module-container">
                  <h4 className="course-section-header">Course Modules</h4>
                  <div className="py-3">
                    <div className="module">
                      <ModulesList modules={course.Modules} />
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <h4>Course prerequisites</h4>
                  <div className="pre-box">
                    <ul>
                      <li className="d-flex">
                        {" "}
                        <span className="mr-3">
                          <FaHandPointRight />{" "}
                        </span>
                        <p>{course.prerequisite}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mx-auto my-5">
              <CircularProgress size={35} />
            </div>
          )}
        </div>
      </section>
      <section className="course-desc p-5" style={{ backgroundColor: "#fff" }}>
        <div className="container row">
          {course.id ? (
            <>
              <div
                className="col-sm-12 col-md-7"
                style={{ borderRight: "1px solid rgba(136, 136, 136, 0.411)" }}
              >
                <h4 className="text-justify mb-4">About the course</h4>
                <p className=" mb-4">{course.description}</p>
              </div>
              <div className="col-sm-12 col-md-5">
                <h4 className="course-section-header">What you will learn</h4>
                {course.objArray?.map((obj, k) => (
                  <div key={k} className="learn-text d-flex align-items-center">
                    <i className="mr-1">
                      <FaCheck />
                    </i>
                    <p>{obj}</p>
                  </div>
                ))}
                <hr className="my-5" />
                <h4 className="course-section-header">
                  More information about this course
                </h4>
                <div className="mt-5">
                  <div className="d-flex meta-text">
                    <p>
                      <strong className="pr-3">Course Type</strong>
                      {course.courseType}{" "}
                    </p>
                  </div>
                  <hr className="mx-2" />
                  <div className="d-flex meta-text">
                    <p>
                      <strong className="pr-3">Category</strong>
                      {course.SubCategory?.name}
                    </p>
                  </div>
                  <hr className="mx-2" />
                  <div className="d-flex meta-text">
                    <p>
                      <strong className="pr-3">Price</strong>
                      {course.price}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="mx-auto my-5">
              <CircularProgress size={50} />
            </div>
          )}
        </div>
      </section>
      <section className="mt-3">
        <div className="bg-white">
          <div className="py-5 px-3 pt-32pt pt-lg-64pt pb-16pt pb-lg-32pt">
            <div className="container page__container">
              <h4>Student Feedback</h4>
              <div className="row">
                <div className="col-md-3 mb-32pt mb-md-0">
                  <div className="display-1">4.7</div>
                  <div className="rating rating-32">
                    <Rating
                      size="medium"
                      readOnly
                      defaultValue={4}
                      className="p-1"
                    />
                  </div>
                  <p className="text-muted mb-0">20 ratings</p>
                </div>
                <div className="col-md-9">
                  <div className="row align-items-center mb-8pt">
                    <div className="col-md-9 col-sm-6">
                      <div className="progress">
                        <div
                          className="progress-bar bg-secondary"
                          aria-valuenow={16}
                          style={{ width: "16%" }}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 d-none d-sm-flex align-items-center">
                      <div className="rating rating-24 mr-8pt">
                        <Rating
                          size="medium"
                          readOnly
                          defaultValue={5}
                          className="p-1"
                        />
                      </div>
                      <span className="text-muted">75%</span>
                    </div>
                  </div>
                  <div className="row align-items-center mb-8pt">
                    <div className="col-md-9 col-sm-6">
                      <div className="progress">
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          aria-valuenow={16}
                          style={{ width: "6%" }}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 d-none d-sm-flex align-items-center">
                      <div className="rating rating-24 mr-8pt">
                        <Rating
                          size="medium"
                          readOnly
                          defaultValue={4}
                          className="p-1"
                        />
                      </div>
                      <p className="text-muted mb-0">6%</p>
                    </div>
                  </div>
                  <div className="row align-items-center mb-8pt">
                    <div className="col-md-9 col-sm-6">
                      <div className="progress">
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          aria-valuenow={16}
                          style={{ width: "16%" }}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 d-none d-sm-flex align-items-center">
                      <div className="rating rating-24 mr-8pt">
                        <Rating
                          size="medium"
                          readOnly
                          defaultValue={3}
                          className="p-1"
                        />
                      </div>
                      <p className="text-muted mb-0">66%</p>
                    </div>
                  </div>
                  <div className="row align-items-center mb-8pt">
                    <div className="col-md-9 col-sm-6">
                      <div className="progress">
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          aria-valuenow={66}
                          style={{ width: "66%" }}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 d-none d-sm-flex align-items-center">
                      <div className="rating rating-24 mr-8pt">
                        <Rating
                          size="medium"
                          readOnly
                          defaultValue={2}
                          className="p-1"
                        />
                      </div>
                      <p className="text-muted mb-0">16%</p>
                    </div>
                  </div>
                  <div className="row align-items-center mb-8pt">
                    <div className="col-md-9 col-sm-6">
                      <div className="progress">
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          aria-valuenow={16}
                          style={{ width: "16%" }}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 d-none d-sm-flex align-items-center">
                      <div className="rating rating-24 mr-8pt">
                        <Rating
                          size="medium"
                          readOnly
                          defaultValue={1}
                          className="p-1"
                        />
                      </div>
                      <p className="text-muted mb-0">1%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-16pt pt-lg-32pt">
            <div className="page-separator-mask js-read-more">
              <div className="container page__container">
                <div className="mb-16pt pb-16pt border-bottom row">
                  <Reviews />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <RecommendedCourses /> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  // isEnrolled: state.course.isEnrolled,
  showedCourse: state.course.showCourse.data,
  showingCourse: state.course.showingCourse,
  // errShowingCourse: state.course.errShowingCourse,
  // isEnrollingCourse: state.course.isEnrollingCourse,
  // enrollCourseError: state.course.enrollCourseError,
  // // courseIsEnrolled: state.course.courseIsEnrolled,
  addingToCart: state.general.addingToCart,
  // addedToCart: state.general.addedToCart,
  // errorAddingToCart: state.general.errorAddingToCart,
});

const mapDispatchToProps = {
  showCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCourse);
