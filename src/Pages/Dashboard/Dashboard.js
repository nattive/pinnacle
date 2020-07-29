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
import { connect } from "react-redux";
class Dashboard extends Component {
  componentDidMount(){
    this.props.getUserProgress();
  }
  render() {
    return (
      <>
        <div style={{ marginTop: "7%" }}>
          <TitleHeader
            title={
              this.props.user && this.props.user.account_type === "isPO"
                ? "Pinnacle Ulearn"
                : this.props.user.account_type === "isCareer"
                ? "Career of the Future"
                : this.props.user.account_type
            }
          />
        </div>
        <CategoryList />
        <div className="container mt-4">
          <CourseRow />
          <div className="mb-4 mt-4">
            <ProgressTable />
            <RecommendedCourses />
          </div>{" "}
          <ListCourses />
        </div>{" "}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {getUserProgress})(Dashboard);
