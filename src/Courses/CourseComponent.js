import React, { Component } from "react";
import Footer from "../Layout/Footer";
import Search from "./Search";
import ListCourses from "./ListCourses";
import HeadBar from "./HeadBar";
import { verifyUserTokenAction } from "../Actions/verifyUserTokenAction";
import {
  fetchPOCourses,
  fetchCOTFCourses,
  fetchFREECourses,
} from "../Actions/courseAction";
import { Redirect, Route, useRouteMatch, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ViewCourse from "./ViewCourse";
import PlayModules from "./PlayModules";
import Breadcrumb from "../Layout/Breadcrumb";
import CategoryList from "./Category/CategoryList";
import TitleHeader from "./TitleHeader";
class CourseComponent extends Component {
  componentWillMount() {
    this.props.verifyUserTokenAction();
    this.props.fetchPOCourses(5);
    this.props.fetchCOTFCourses(5);
    this.props.fetchFREECourses(5);
  }

  // componentDidMount(newProp) {
  //   if (this.props.user.user) return <Redirect to="/" />;
  // }

  render() {
    return (
      <>
        {/* {this.props.user.length === 0 && (<Redirect to='/lol' />)} */}
        {/* <HeadBar /> */}
        <CategoryList />
        <TitleHeader
          title={
            this.props.account_type === "isPO"
              ? "Pinnacle Ulearn"
              : this.props.account_type === "isCareer"
              ? "Career of The Future"
              : "Learn With Pinnacle"
          }
        />
        <div className="container">
          <ListCourses  />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  account_type: state.auth.account_type,
});

export default connect(mapStateToProps, {
  verifyUserTokenAction,
  fetchPOCourses,
  fetchCOTFCourses,
  fetchFREECourses,
})(CourseComponent);
