import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import "../Assests/css/style.css";
import bg1 from "../Assests/images/img_bg_1.jpg";
import bg2 from "../Assests/images/img_bg_2.jpg";
import HeadSection from "../Components/HeadSection";
import HeadNotification from "../Components/HeadNotification";
import CategoryList from "../Components/CategoryList";
import CourseSlide from "../Components/CourseSlide";
import CareerIntro from "../Components/CareerIntro";
import Footer from "../../../Layout/Footer";
import { Divider } from "@material-ui/core";
import UlearnIntro from "../Components/UlearnIntro";
import Services from "../../Home/Services";
import OtherCoursesServices from "../Components/OtherCoursesServices";
import Slider from "../Components/Slider";
export default function LandingPage() {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div>
      <HeadSection />
       <Slider />
        <div className="colorlib-search">
          <div className="container">
            <div className="row">
              <div className="col-md-12 search-wrap">
                <div className="search-wrap-2">
                  <form method="post" className="colorlib-form">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          {/* <!-- <label for="search">Search Course</label> --> */}
                          <div className="form-field">
                            <input
                              type="text"
                              id="search"
                              className="form-control"
                              placeholder="Keyword search"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          {/* <!-- <label for="course">Category Course</label> --> */}
                          <div className="form-field">
                            <i className="icon icon-arrow-down3"></i>
                            <select
                              name="people"
                              id="people"
                              className="form-control"
                            >
                              <option value="#">WordPress</option>
                              <option value="#">HTML/CSS</option>
                              <option value="#">PHP</option>
                              <option value="#">JavaScript</option>
                              <option value="#">Python</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          {/* <!-- <label for="difficulty">Difficulty</label> --> */}
                          <div className="form-field">
                            <i className="icon icon-arrow-down3"></i>
                            <select
                              name="people"
                              id="people"
                              className="form-control"
                            >
                              <option value="#">Difficulty</option>
                              <option value="#">Beginner</option>
                              <option value="#">Intermediate</option>
                              <option value="#">Advance</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <input
                          type="submit"
                          name="submit"
                          id="submit"
                          value="Search course"
                          className="btn btn-primary btn-block"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CategoryList />
        <CourseSlide />
        <Divider className="m-4" />
        <CareerIntro />
        <Divider className="m-4" />
        <OtherCoursesServices />
        <Divider className="m-4" />
        <UlearnIntro />
      </div>
      <Footer />
    </>
  );
}
