import React, { Component } from "react";
import HeadBar from "../../Courses/HeadBar";
import CategoryList from "../../Courses/Category/CategoryList";
import TitleHeader from "../../Courses/TitleHeader";
import ListCourses from "../../Courses/ListCourses";
import CourseRow from "../../Courses/CourseList/CourseRow";
import Footer from "../../Layout/Footer";
import ProgressTable from "../User/ProgressTable";
import RecommendedCourses from "../../Courses/RecommendedCourses/RecommendedCourses";
export default class Dashboard extends Component {
  render() {
    return (
      <>
        <HeadBar />
        <TitleHeader title="Pinnacle Ulearn" />
        <CategoryList />
        <div className="container mt-4">
          <CourseRow />
          <div className="mb-4 mt-4">
            <ProgressTable />
            <RecommendedCourses />
          </div>
          <ListCourses />
        </div>
        <Footer />
      </>
    );
  }
}
