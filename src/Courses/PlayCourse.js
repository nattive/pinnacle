import React, { Component } from "react";
import {
  Grid,
  Paper,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Avatar,
  CssBaseline,
  Divider,
  ListItemIcon,
  CircularProgress,
} from "@material-ui/core";
import image from "../Assets/img/blog/single_blog_1.png";
import TutorCard from "./TutorCard";
import { getCourseById } from "../Patials/patials";
import { BaseUrl } from "../Patials/BaseUrl";
import Skeleton from "@material-ui/lab/Skeleton";
import ReactPlaceholder from "react-placeholder/lib";
import CourseHeadTitle from "./CourseHeadTitle";
import { Alert, AlertTitle } from "@material-ui/lab";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import TextureIcon from "@material-ui/icons/Texture";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { enrollCourse, isCourseEnrolled } from "../Actions/courseAction";
import { verifyUserTokenAction } from "../Actions/verifyUserTokenAction";
import { connect } from "react-redux";
import HeadBar from "./HeadBar";
import Footer from "../Layout/Footer";
var PHPUnserialize = require("php-unserialize");

var parse = require("html-react-parser");

class PlayCourse extends Component {
  constructor() {
    super();
    this.state = {
      course: {},
      loading: true,
      enrollLoading: true,
    };
    this.unserialize = this.unserialize.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.playModule = this.playModule.bind(this);
  }
  playModule(id) {
    // alert(id)
  }

  async componentDidMount() {
    this.state.loading = true;
    var course = await getCourseById(this.props.courseId);
    this.state.loading = false;
    this.state.enrollLoading = false;
    this.props.isCourseEnrolled(this.props.user.user.id, course.data.id);
    /**
     * Get the course, course id was received from props
     */
    this.setState({ course: course.data });
    // this.props.enrollCourse(5);
    this.props.verifyUserTokenAction();
  }

  async handleClick(id) {
    await this.props.enrollCourse(this.props.user.user.id, id);
    await this.props.isCourseEnrolled(this.props.user.user.id, id);
    // this.props.history.push(this.props.url + "/enroll/" + id);
    // course-id/:id/enroll/:course
  }
  unserialize(serializeIbj) {
    return PHPUnserialize.unserialize(serializeIbj);
  }

  render() {
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [
        {
          src: "/path/to/video.mp4",
          type: "video/mp4",
        },
      ],
    };
    return (
      <>
        <HeadBar />
        <div className="container-fluid">
          <CourseHeadTitle course={this.state.course} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-9">
              <div className="pr-2">
                {this.state.loading ? (
                  <div>
                    <Skeleton variant="rect" width="100%" height={500} />
                    <ReactPlaceholder
                      type="text"
                      rows={5}
                      className="p-4"
                      widths={700}
                      showLoadingAnimation
                    />
                  </div>
                ) : (
                  <>
                    <div className="p-3 mb-4">
                      <p>your Progress</p>
                      {this.state.course.introVideo ? (
                        <VideoPlayer course={this.state.course} />
                      ) : this.state.course.videoPath ? (
                        <VideoPlayer course={this.state.course} />
                      ) : (
                        <img
                          src={BaseUrl + this.state.course.banner}
                          alt=""
                          width="100%"
                          height={500}
                          className="img-responsive w-100"
                        />
                      )}
                    </div>
                    <Typography
                      variant="h5"
                      style={{ color: "#000066", padding: "5px" }}
                    >
                      {this.state.course.title}
                    </Typography>
                    <div className="d-flex" style={{ marginTop: "20px" }}>
                      <TextureIcon
                        style={{ color: "#000066", padding: "5px" }}
                      />
                      <Typography
                        variant="h6"
                        style={{ color: "#000066", padding: "5px" }}
                      >
                        Course Description
                      </Typography>
                    </div>
                    <Divider />
                    {this.state.objective ? (
                      <Alert severity="info">
                        <AlertTitle> Objective </AlertTitle>
                        <p> {this.state.course.objective} </p>
                      </Alert>
                    ) : null}
                    <CssBaseline />
                    <Divider />
                    <div className="mt-4 mb-4">
                      <p> {parse(this.state.course.description)} </p>
                    </div>
                    <div className="d-flex" style={{ marginTop: "20px" }}>
                      <TextureIcon
                        style={{ color: "#000066", padding: "5px" }}
                      />
                      <Typography
                        variant="h6"
                        style={{ color: "#000066", padding: "5px" }}
                      >
                        Course Modules
                      </Typography>
                    </div>
                    <Divider />
                    {this.state.course.course_materials.length < 0
                      ? null
                      : this.state.course.course_materials.map(
                          (item, index) => (
                            <ListItem
                              key={index}
                              button
                              className="o-4"
                              onClick={this.playModule(item.id)}
                            >
                              <ListItemIcon>
                                <PlayCircleFilledIcon />
                              </ListItemIcon>
                              <p
                                style={{
                                  lineHeight: "14px",
                                  fontSize: "14px",
                                  padding: "10px",
                                }}
                              >
                                {item.title}
                              </p>
                            </ListItem>
                          )
                        )}
                  </>
                )}
              </div>
              <div className="col-12">
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  className="m-4"
                  onClick={() => this.handleClick(this.state.course.id)}
                >
                  {/* <CircularProgress /> */}
                  {this.props.isEnrolled === true ? "unfollow" : "follow"}
                </Button>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <TutorCard tutor={this.state.course.tutor} />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isEnrolled: state.course.isEnrolled,
});

export default connect(mapStateToProps, {
  enrollCourse,
  verifyUserTokenAction,
  isCourseEnrolled,
})(PlayCourse);
