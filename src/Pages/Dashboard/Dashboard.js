import React, { Component } from "react";
import HeadBar from "../../Courses/HeadBar";
import CategoryList from "../../Courses/Category/CategoryList";
import TitleHeader from "../../Courses/TitleHeader";
import ListCourses from "../../Courses/ListCourses";
import CourseRow from "../../Courses/CourseList/CourseRow";
import Footer from "../../Layout/Footer";
import ProgressTable from "../User/ProgressTable";
import RecommendedCourses from "../../Courses/RecommendedCourses/RecommendedCourses";
import { getUserProgress } from "../../Actions/moduleActions"
import Banner from "../Elearning/LandingPage/Banner"
import { connect } from "react-redux";
import DashboardBanner from "./DashboardBanner";
import { Container } from "@material-ui/core";
class Dashboard extends Component {
  componentDidMount() {
    this.props.getUserProgress();
  }
  render() {
    return (
      <>
        <DashboardBanner />
        {/* <Container> */}
          <CourseRow />
          <ProgressTable />
          <RecommendedCourses />
        {/* </Container> */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { getUserProgress })(Dashboard);
