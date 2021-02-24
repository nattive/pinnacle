import React from "react";
import { connect } from "react-redux";
import NavBarHeader from "../Home/NavBarHeader";
import Search from "../Elearning/LandingPage/Search";
import SearchResults from "../CourseShop/SearchResults";
import RandomCourseCategory from "../CourseShop/RandomCourseCategory";

const CoursesByCategory = (props) => {
  return (
    <>
      <NavBarHeader />
      <Search />
      <SearchResults />
      <div className="container-fluid">
        <div className="colorlib-counters">
          <div className="container-fluid mt-5">
            <div className="row mb-5">
              <h2>Marketing Courses</h2>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-3">
                <h4>Filter Courses</h4>
              </div>
              <div className="col-xs-12 col-md-8"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesByCategory);
