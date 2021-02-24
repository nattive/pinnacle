import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RecommendedCourses from "../../Courses/RecommendedCourses/RecommendedCourses";
import NavBarHeader from "../Home/NavBarHeader";
import Banner from "../Elearning/LandingPage/Banner";
import Search from "../Elearning/LandingPage/Search";
import CategoryList from "../Elearning/Components/CategoryList";
import SearchResults from "./SearchResults";
import CourseList from "./CourseList";
import WhatOthersView from "../Home/WhatOthersView";
import FeaturedCourses from "../../Courses/FeaturedCourses";
import RandomCourseCategory from "./RandomCourseCategory";

class Courses extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <>
        <NavBarHeader />
        <Search />
        <div className="container-fluid">
          <SearchResults />
          <CategoryList />
          <WhatOthersView />
          <FeaturedCourses />
          <RecommendedCourses />
          <RandomCourseCategory />
        </div>
        {/* <Search />
            <CategoryList />
            <RecommendedCourses /> */}
      </>
    );
  }
}

Courses.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {};
}

export default connect(mapStateToProps)(Courses);
