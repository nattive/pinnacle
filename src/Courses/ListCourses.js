import React, { Component } from "react";
import { getCourses } from "../Patials/patials";
import { CircularProgress, Container, Divider, Grid } from "@material-ui/core";
import SingleCourseItem from "./SingleCourseItem";
import ReactPlaceholder from "react-placeholder/lib";
import "react-placeholder/lib/reactPlaceholder.css";
import {getUser} from '../Actions/loginAction'
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
    // this.getDerivedStateFromProps = this.getDerivedStateFromProps.bind(this);
  }
  UNSAFE_componentWillMount(){
    this.props.getUser();

  }
  componentDidMount() {
    switch (this.props.user.account_type) {
      case "isPO":
        this.props.fetchPOCourses(12);
        this.setState({ course: this.props.PO_courses.data, ready: true });
        break;
      case "isCareer":
        this.props.fetchCOTFCourses(12);
        this.setState({ course: this.props.COTF_courses.data, ready: true });
        break;
      default:
        break;
    }
  }
  UNSAFE_componentWillReceiveProps(props) {
    if (props.user.account_type) {
      switch (props.user.account_type) {
        case "isPO":
          this.setState({
            course: props.PO_courses.data,
            ready: true,
          });
          break;
        case "isCareer":
          this.setState({
            course: props.PO_courses.data,
            ready: true,
          });

          break;
        default:
          break;
      }
    }
  }

  render() {
    return (
      <Container>
        <h3 className="pt-2 pb-2"> Top Courses </h3> <Divider />
        <Grid container>
          {this.state.course && this.state.course.length < 0 ? (
            <div className="mx-auto">
              <CircularProgress />
            </div>
          ) : this.state.ready ? (
            this.state.course &&
            this.state.course.map((item, key) => (
              <Grid>
                <SingleCourseItem course={item} />{" "}
              </Grid>
            ))
          ) : (
            <>
              <div className="mx-auto text-center mt-4">
                <CircularProgress />
              </div>{" "}
            </>
          )}{" "}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  PO_courses: state.course.PO_courses,
  FREE_courses: state.course.FREE_courses,
  COTF_courses: state.course.COTF_courses,
  user: state.auth.user,
  ENROLLED_courses: state.course.ENROLLED_courses,
});

const mapDispatchToProps = {
  fetchPOCourses,
  fetchCOTFCourses,
  fetchFREECourses,
  getEnrolledCourse,
  enrollCourse,
  getUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListCourses);
