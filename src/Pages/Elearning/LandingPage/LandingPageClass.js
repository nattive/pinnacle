import React, { Component } from "react";
import LandingPage from "./LandingPage";
import { connect } from "react-redux";
import { fetchCourses } from '../../../Actions/courseAction'
class LandingPageClass extends Component {
  componentDidMount() {
    this.props.fetchCourses(10);
  }
  render() {
    return <LandingPage />;
  }
}

// const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  fetchCourses
};

export default connect(null, mapDispatchToProps)(LandingPageClass);
