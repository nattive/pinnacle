import React, { Component } from "react";
import { getCourses } from "../Patials/patials";
import { CircularProgress } from "@material-ui/core";
import SingleCourseItem from "./SingleCourseItem";
import ReactPlaceholder from "react-placeholder/lib";
import "react-placeholder/lib/reactPlaceholder.css";
export default class ListCourses extends Component {
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
      <div className="row mt-4">
        {this.state.course.length < 0 ? (
          <div className="mx-auto">
            <CircularProgress />
          </div>
        ) : this.state.ready ? (
          this.state.course.map((item, key) => (
            <div key={key} className="col-xs-6 col-md-4">
              <SingleCourseItem course={item} />{" "}
            </div>
          ))
        ) : (
          <>
            <div className="mx-auto text-center mt-4">
              <CircularProgress />
            </div>{" "}
          </>
        )}{" "}
      </div>
    );
  }
}
