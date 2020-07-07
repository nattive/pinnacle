import React, { Component } from "react";
import { getCourses } from "../Patials/patials";
import { CircularProgress, Container, Divider } from "@material-ui/core";
import SingleCourseItem from "./SingleCourseItem";
import ReactPlaceholder from "react-placeholder/lib";
import "react-placeholder/lib/reactPlaceholder.css";
import { connect } from "react-redux";
import {
  fetchPOCourses,
  fetchCOTFCourses,
  fetchFREECourses,
  getEnrolledCourse,
  enrollCourse,
} from "../Actions/courseAction";
import CourseRow from "./CourseList/CourseRow";
class ListCourses extends Component {
  constructor() {
    super();
    this.state = {
      course: {},
      ready: false,
    };
  }
  async componentDidMount() {
    var course = await getCourses(10);
    this.setState({ course: course.data, ready: true });
  }

  render() {
    return (
      <Container>
        <div className="row mt-4">
          <CourseRow />
        </div>
        <h3 className="pt-2 pb-2">Top Courses</h3>
        <Divider />
        <div className="row mt-4">
          {this.state.course.length < 0 ? (
            <div className="mx-auto">
              <CircularProgress />
            </div>
          ) : this.state.ready ? (
            this.state.course.map((item, key) => (
              <div key={key} className="col-xs-6 col-md-4">
                <SingleCourseItem course={item} />
              </div>
            ))
          ) : (
            <>
              <div className="mx-auto text-center mt-4">
                <CircularProgress />
              </div>
            </>
          )}
        </div>
        <h3 className="pt-2 pb-2">Recommended For You</h3>
        <Divider />
        <div className="row mt-4">
          {this.state.course.length < 0 ? (
            <div className="mx-auto">
              <CircularProgress />
            </div>
          ) : this.state.ready ? (
            this.state.course.map((item, key) => (
              <div key={key} className="col-xs-6 col-md-4">
                <SingleCourseItem course={item} />
              </div>
            ))
          ) : (
            <>
              <div className="mx-auto text-center mt-4">
                <CircularProgress />
              </div>
            </>
          )}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  PO_courses: state.course.PO_courses,
  FREE_courses: state.course.FREE_courses,
  COTF_courses: state.course.COTF_courses,
  ENROLLED_courses: state.course.ENROLLED_courses,
});

const mapDispatchToProps = {
  fetchPOCourses,
  fetchCOTFCourses,
  fetchFREECourses,
  getEnrolledCourse,
  enrollCourse,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListCourses);
