import React, { Component, Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { verifyUserTokenAction } from "../Actions/verifyUserTokenAction";
import {
  playCourse,
  fetchPOCourses,
  fetchCOTFCourses,
  getEnrolledCourse,
  fetchFREECourses,
} from "../Actions/courseAction";
import { getCourseById } from "../Patials/patials";
import {
  CircularProgress,
  Divider,
  Typography,
  Avatar,
  Paper,
} from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { connect } from "react-redux";
import { BaseUrl } from "../Patials/BaseUrl";
import ReactPlaceholder from "react-placeholder/lib";
import { Skeleton } from "@material-ui/lab";
import DisplayCourses from "./DisplayCourses";

var PHPUnserialize = require("php-unserialize");

class SideDrawer extends Component {
  constructor() {
    super();
    this.state = {
      course: {},
    };
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount(){
    const user_as_token = localStorage.getItem("user_as_token");
    const access_token = localStorage.getItem("access_token");
    if (!user_as_token){
      this.props.history.push('/')
    } else {
      this.props.verifyUserTokenAction(access_token);
    }
    if (this.props.AuthError) {
      this.props.history.push("/e-learning");

    }
  }

  async componentWillMount() {
    await this.props.verifyUserTokenAction();
    // if(this.props.user.)
    this.props.fetchPOCourses(5);
    this.props.fetchCOTFCourses(5);
    this.props.fetchFREECourses(5);
    if (this.props.user.user !== undefined) {
      this.props.getEnrolledCourse(this.props.user.user.id);
    }
    if (this.props.user.user !== undefined) {
      this.props.getEnrolledCourse(this.props.user.user.id);
      switch (this.props.account_type) {
        case "isPO":
          this.setState({ course: this.props.PO_courses });
          break;
        case "isCareer":
          this.setState({ course: this.props.COTF_courses });
          break;

        default:
          break;
      }
    }
  }

  handlePlay(course, courseTitle) {
    const { path, history, user, playCourse } = this.props;
    if (
      user !== undefined &&
      playCourse !== undefined &&
      history !== undefined
    ) {
      playCourse(user.user.id, course);
      history.push(`${path}/play/${courseTitle}`);
    } else {
      console.log(this.props);
    }
  }

  render() {
    const {
      FREE_courses,
      COTF_courses,
      ENROLLED_courses,
      PO_courses,
    } = this.props;
    return (
      <div>
        {/* <div className={this.props.classes.toolbar} /> */}
        {this.props.user === {} ||
        this.props.user === undefined ||
        this.props.user === "" ? null : (
          <>
            <div className="p-4">
              <Typography>
                {this.props.user && this.props.user.user ? (
                  `Welcome ${this.props.user.user.name}`
                ) : (
                  <Skeleton showLoadingAnimation />
                )}
              </Typography>
            </div>
            <Divider />
          </>
        )}
        <ListItem style={{ background: "#55555513" }}>
          <Typography style={{ color: "#000066", fontSize: "16px" }}>
            Courses You follow
          </Typography>
        </ListItem>
        <List>
          {ENROLLED_courses ? (
            ENROLLED_courses.length > 0 ? (
              ENROLLED_courses.map((item) => (
                <ListItem
                  button
                  key={item.id}
                  onClick={() => this.handlePlay(item.id, item.title)}
                >
                  <Avatar variant="square" src={`${BaseUrl}/${item.banner}`} />
                  <Typography className={this.props.styles.listText}>
                    {item.title}
                  </Typography>
                </ListItem>
              ))
            ) : (
              <div className="w-100">
                <p className="text-muted small p-2">
                  You are not following any Course
                </p>
              </div>
            )
          ) : (
            <div className="w-100">
              <ReactPlaceholder type="media" showLoadingAnimation />
            </div>
          )}
        </List>

        <Divider />
        <List>
          <Divider />
          <ListItem style={{ background: "#55555513" }}>
            <Typography style={{ color: "#000066", fontSize: "16px" }}>
              Recommended For You
            </Typography>
          </ListItem>
          <Divider />
          <DisplayCourses
            styles={this.props.styles}
            courses={
              this.props.account_type === "isPO"
                ? this.props.PO_courses
                : this.props.COTF_courses
            }
          />
        </List>
        <Divider />
        <ListItem style={{ background: "#55555513" }}>
          <Typography style={{ color: "#000066", fontSize: "16px" }}>
            Top Paid Course
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          {FREE_courses ? (
            FREE_courses.length > 0 ? (
              FREE_courses.map((item) => (
                <ListItem button key={item.id}>
                  {/* <ListItemIcon>
              
            </ListItemIcon> */}
                  <Avatar src={`${BaseUrl}/${item.banner}`} />
                  <Typography className={this.props.classes.listText}>
                    {item.title}
                  </Typography>
                </ListItem>
              ))
            ) : (
              <p className="text-muted small p-2">No Courses Uploaded yet</p>
            )
          ) : (
            <div className="w-100">
              <ReactPlaceholder
                type="media"
                widths="100%"
                showLoadingAnimation
              />
            </div>
          )}
        </ListItem>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  AuthError: state.auth.AuthError,
  account_type: state.auth.account_type,
  FREE_courses: state.course.FREE_courses,
  COTF_courses: state.course.COTF_courses,
  PO_courses: state.course.PO_courses.data,
  ENROLLED_courses: state.course.ENROLLED_courses,
});

export default connect(mapStateToProps, {
  playCourse,
  verifyUserTokenAction,
  fetchPOCourses,
  fetchCOTFCourses,
  fetchFREECourses,
  getEnrolledCourse,
})(SideDrawer);
