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
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  List,
  Box,
  LinearProgress,
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
import VideoPlayer from "../General Components/VideoPlayer/VideoPlayer";
import {
  enrollCourse,
  isCourseEnrolled,
  playCourse,
  showCourse,
} from "../Actions/courseAction";
import { verifyUserTokenAction } from "../Actions/verifyUserTokenAction";
import { connect } from "react-redux";
import HeadBar from "./HeadBar";
import Footer from "../Layout/Footer";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShowRating from "../General Components/ShowRating";
import Comments from "./Cmments/Comments";
import PostReview from "./Review/PostReview";

var PHPUnserialize = require("php-unserialize");

var parse = require("html-react-parser");

class PlayCourse extends Component {
  constructor() {
    super();
    this.state = {
      showedCourse: {},
      loading: true,
      courseId: null,
      enrollLoading: true,
      showAll: false,
      readMoreText: "Read More",
    };
    this.unserialize = this.unserialize.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleReadMore = this.toggleReadMore.bind(this);
  }
  toggleReadMore() {
    this.setState({ showAll: true });
  }

  // componentWillUpdate() {
  //   this.props.isCourseEnrolled(this.props.user.user.id, course.data.id);
  // }
  componentDidMount() {
    this.state.loading = true;
    this.state.loading = false;

    this.props.showCourse(this.props.courseId);
    // this.props.isCourseEnrolled(this.props.user.id, this.props.courseId);
    /**
     * Get the course, course id was received from props
     */
    console.log(this.props);

    // this.props.enrollCourse(5);
    this.props.verifyUserTokenAction();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.courseId) {
      this.setState({
        courseId: newProps.courseId,
        user: newProps.user,
      });
      this.props.isCourseEnrolled(newProps.user, newProps.courseId);
    }
    if (newProps.showedCourse) {
      this.setState({
        showedCourse: newProps.showedCourse,
      });
      this.props.isCourseEnrolled(newProps.user.id, newProps.showedCourse.id);
    }
  }

  handlePlay(course, courseTitle) {
    const { url, history, user, playCourse } = this.props;
    if (
      user !== undefined &&
      playCourse !== undefined &&
      history !== undefined
    ) {
      playCourse(user.id, course);
      // console.log(path);
      // alert('ok')
      history.push(`${url}/1`);
    } else {
      console.log(this.props);
    }
  }

  async handleClick(id) {
    await this.props.enrollCourse(this.props.user.id, id);
    await this.props.isCourseEnrolled(this.props.user.id, id);
    // this.props.history.push(this.props.url + "/enroll/" + id);
    // course-id/:id/enroll/:course
  }
  unserialize(serializeIbj) {
    return PHPUnserialize.unserialize(serializeIbj);
  }

  render() {
    this.state.user &&
      this.props.isCourseEnrolled(this.state.user.id, this.state.courseId);

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
    const { showedCourse } = this.state;
    return (
      <>
        {/* <HeadBar /> */}
        {/* <div className="container-fluid ">
          <CourseHeadTitle course={showedCourse} />
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7">
              <div className="pr-2" style={{ background: "#fff" }}>
                {!showedCourse ? (
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
                      {/* <p>your Progress</p> */}
                      {showedCourse.introVideo ? (
                        <VideoPlayer course={showedCourse} />
                      ) : showedCourse.videoPath ? (
                        <VideoPlayer course={showedCourse} />
                      ) : (
                        <img
                          src={BaseUrl + showedCourse.banner}
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
                      {showedCourse.title}
                    </Typography>

                    <Divider />
                    {showedCourse.objective ? (
                      <Alert severity="info">
                        <AlertTitle> Objective </AlertTitle>
                        <p style={{ textAlign: "justify" }}>
                          {" "}
                          {showedCourse.objective}{" "}
                        </p>
                      </Alert>
                    ) : null}
                    <CssBaseline />
                    <Divider />
                    <div className="mt-4 mb-4">
                      <p>
                        {showedCourse.description &&
                          parse(
                            this.state.showAll
                              ? showedCourse.description
                              : showedCourse.description.substring(0, 800) +
                                  "..."
                          )}{" "}
                        {this.state.showAll && (
                          <Button onClick={this.toggleReadMore} variant="text">
                            {this.state.readMoreText}
                          </Button>
                        )}
                      </p>
                    </div>

                    <div className="d-flex" style={{ marginTop: "2%" }}>
                      <TextureIcon
                        style={{ color: "#000066", padding: "5px" }}
                      />
                      <Typography
                        variant="h6"
                        style={{ color: "#000066", padding: "5px" }}
                      >
                        Course Reviews
                      </Typography>
                      <LinearProgress variant="determinate" value={20} />
                    </div>
                    <Divider />
                  </>
                )}
              </div>

              <div className="col-12">
                {this.props.user.id ? (
                  <>
                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      className="m-4"
                      onClick={() => this.handleClick(showedCourse.id)}
                    >
                      {/* <CircularProgress /> */}
                      {this.props.isEnrolled === true ? "unfollow" : "follow"}
                    </Button>
                    {this.props.isEnrolled && (
                      <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        className="m-4"
                        onClick={() =>
                          this.handlePlay(showedCourse.id, showedCourse.title)
                        }
                      >
                        Start Course
                      </Button>
                    )}
                  </>
                ) : (
                  <p className="alert alert-warning mt-4">
                    Sign in to follow this course
                  </p>
                )}
              </div>
            </div>
            <div className="col-sm-12 col-md-5">
              <TutorCard tutor={showedCourse.tutor} />
              {showedCourse.id && <Comments course_id={showedCourse.id} />}

              <PostReview course={showedCourse} />
              <div className="d-flex" style={{ marginTop: "20px" }}>
                <TextureIcon style={{ color: "#000066", padding: "5px" }} />
                <Typography
                  variant="h6"
                  style={{ color: "#000066", padding: "5px" }}
                >
                  Course Modules
                </Typography>
              </div>
              <Divider />
              {showedCourse.modules && showedCourse.modules.length < 0
                ? null
                : showedCourse.modules &&
                  showedCourse.modules.map((item, index) => (
                    <ExpansionPanel key={index}>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className>{item.title}</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <List>
                          {item.course_materials &&
                            item.course_materials.map((module) => (
                              <ListItem
                                button
                                className="p-1"
                                // onClick={this.playModule(module.id)}
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
                                  {module.title}
                                </p>
                              </ListItem>
                            ))}
                        </List>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  ))}
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
  showedCourse: state.course.showCourse.data,
});

export default connect(mapStateToProps, {
  enrollCourse,
  verifyUserTokenAction,
  isCourseEnrolled,
  playCourse,
  showCourse,
})(PlayCourse);
