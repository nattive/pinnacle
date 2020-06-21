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
class CourseComponent extends Component {
  componentWillMount() {
    this.props.verifyUserTokenAction();
    this.props.fetchPOCourses(5);
    this.props.fetchCOTFCourses(5);
    this.props.fetchFREECourses(5);
  }

  // componentDidMount() {
  // }

  // componentDidMount(newProp) {
  //   if (this.props.user.user) return <Redirect to="/" />;
  // }

  render() {
    return (
      <>
        {/* {this.props.user.length === 0 && (<Redirect to='/lol' />)} */}
        <HeadBar props={this.props.user} />
        <CategoryList />
        <div className="container">
          <ListCourses />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  verifyUserTokenAction,
  fetchPOCourses,
  fetchCOTFCourses,
  fetchFREECourses,
})(CourseComponent);
