import React, { Component } from "react";
import {
  Typography,
  Divider,
  Icon,
  Breadcrumbs,
  Link,
} from "@material-ui/core";
import image from "../Assets/img/blog/single_blog_1.png";
import TutorCard from "./TutorCard";
import { Alert, AlertTitle, Skeleton } from "@material-ui/lab";
import { addCart } from "../Actions/generalAction";
import VideoPlayer from "../General Components/VideoPlayer/VideoPlayer";
import {
  enrollCourse,
  isCourseEnrolled,
  playCourse,
  showCourse,
} from "../Actions/courseAction";
import { recommended } from "../Patials/constant";
import { connect } from "react-redux";
import HeadBar from "./HeadBar";
import "semantic-ui-css/semantic.min.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShowRating from "../General Components/ShowRating";
import Comments from "./Cmments/Reviews";
import PostReview from "./Review/PostReview";
import "./PlayCourse.css";
import { Link as RouterLink } from "react-router-dom";
import { Header, Segment, Breadcrumb, Message } from "semantic-ui-react";
import {
  Card as SemanticCard,
  Button as SemanticButton,
  List,
  Icon as SemanticIcon,
} from "semantic-ui-react";
import RecommendedCourses from "./RecommendedCourses/RecommendedCourses";
import { blue, yellow, blueGrey } from "@material-ui/core/colors";
import NavBarHeader from "../Pages/Home/NavBarHeader";
import "./PlayCourse.css";
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
      readMore: false,
    };
    this.unserialize = this.unserialize.bind(this);
    this.handleEnrollCourse = this.handleEnrollCourse.bind(this);
    this.toggleReadMore = this.toggleReadMore.bind(this);
  }
  toggleReadMore() {
    this.setState({ showAll: true });
  }

  componentDidMount() {
    this.props.showCourse(this.props.match.params.course);
    // this.props.isCourseEnrolled(this.props.user.id, this.props.courseId);
    /**
     * Get the course, course id was received from props
     */
    console.log(this.props);

    // this.props.enrollCourse(5);
    // this.props.verifyUserTokenAction();
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    if (newProps.showedCourse & newProps.user) {
      const { showedCourse } = newProps;
      this.setState({
        courseId: showedCourse.id,
        user: newProps.user,
      });
      this.props.isCourseEnrolled(newProps.user, showedCourse.id);
    }
    if (newProps.showedCourse) {
      const { showedCourse } = newProps;
      this.setState({
        showedCourse: newProps.showedCourse,
      });

      var recommend = localStorage.getItem(recommended);
      if (recommend) {
        var recommendArray = JSON.parse(recommend);
        if (recommendArray.includes(showedCourse.slug)) {
          return;
        } else {
          recommendArray.push(showedCourse.slug);
          localStorage.setItem(recommended, JSON.stringify(recommendArray));
        }
      } else {
        const recommendArray = [];
        recommendArray.push(showedCourse.slug);
        localStorage.setItem(recommended, JSON.stringify(recommendArray));
      }
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

  async handleEnrollCourse(id) {
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

    const { showedCourse } = this.state;

    const sections = [
      { key: "Home", content: "Home", link: true },
      { key: "Store", content: "Store", link: true },
      { key: "Shirt", content: "T-Shirt", active: true },
    ];
    const objArray = this.state.showedCourse.objective
      ? this.state.showedCourse.objective.split(",")
      : [];

    return (
      <div className="container-fluid" style={{ marginBottom: "15em" }}>
        <NavBarHeader />
        <div
          className=" d-none d-md-block"
          style={{
            // backgroundColor: "red",
            // backgroundImage: `url(${showedCourse.banner})`,
            backgroundPosition: "fixed",
            backgroundSize: "cover",
            backgroundColor: blueGrey[900],
            minHeight: "30em",
            marginTop: "3em",
            padding: "7em 6em 0 6em",
            alignContent: "center",
          }}
        />
        <div className="container row course-container">
          <div className="course-text col-xs-12 col-md-7">
            <Breadcrumbs aria-label="breadcrumb" className="ml-4">
              <Link
                color="inherit"
                style={{ color: "#fff" }}
                to="/"
                component={RouterLink}
              >
                Home
              </Link>
              <Link
                color="inherit"
                style={{ color: "#fff" }}
                to="/learn"
                component={RouterLink}
              >
                ULearn
              </Link>
              <Typography style={{ color: "#fff" }} color="textPrimary">
                {showedCourse.title}
              </Typography>
            </Breadcrumbs>
            {showedCourse.id ? (
              <div className="ml-4">
                <Typography
                  variant="h3"
                  style={{ color: "#fff", textTransform: "capitalize" }}
                >
                  {showedCourse.title}
                </Typography>
                <Typography variant="h5" style={{ color: "#fff" }}>
                  {showedCourse.subtitle}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ color: "#fff" }}
                >{`Difficulty: ${showedCourse.course_difficulty} 
              | Category: ${
                showedCourse.SubCategory && showedCourse.SubCategory.name
              }`}</Typography>
                <Typography
                  style={{ color: "#fff" }}
                  variant="body1"
                >{`Created By: ${
                  showedCourse.tutor ? showedCourse.tutor.name : "Tutors name"
                }`}</Typography>
                <Typography
                  style={{ color: "#fff" }}
                  variant="body1"
                >{`Last Updated: ${showedCourse.updated}`}</Typography>
                <Typography style={{ color: "#fff" }} variant="body1">
                  <Icon name="globe" color="white" />
                  {showedCourse.language || "English"}
                </Typography>
              </div>
            ) : (
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            )}

            <Segment fluid padded className="objective-card">
              <Typography variant="h6">
                In this course you will learn
              </Typography>
              <Divider />
              <List>
                {this.props.showingCourse ? (
                  <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                  </>
                ) : objArray.length > 0 ? (
                  objArray.map((objective, index) => (
                    <List.Item as="a">
                      <SemanticIcon name="check" />
                      <List.Content>
                        <List.Description>
                          {objective !== "" && objective}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  ))
                ) : (
                  "Not Set"
                )}
              </List>
            </Segment>
            {showedCourse.description && (
              <Segment fluid padded basic>
                <Typography variant="h4">Description</Typography>
                <Divider />
                <Typography variant="body1" className="text-dark mt-3">
                  {" "}
                  {parse(
                    showedCourse.description.length > 1000 &&
                      !this.state.readMore
                      ? showedCourse.description.substring(0, 1000)
                      : showedCourse.description || ""
                  )}
                </Typography>
                <Link
                  component={Typography}
                  variant="button"
                  className="btn-link"
                  onClick={() =>
                    this.setState((state) => ({
                      readMore: !state.readMore,
                    }))
                  }
                >
                  {" "}
                  {this.state.readMore ? "Show Less" : "Show More"}{" "}
                </Link>
              </Segment>
            )}
          </div>
          <div className="course-card col-sm-12 col-md-5">
            <SemanticCard fluid>
              <VideoPlayer
                videoUrl={showedCourse.videoUrl}
                banner={showedCourse.banner}
              />
              <SemanticButton.Group fluid>
                {/* <SemanticButton
                  color="blue"
                  disabled={this.props.courseIsEnrolled}
                  onClick={() => this.props.addCart(showedCourse.id)}
                  loading={this.props.addingToCart}
                >
                  {this.props.courseIsEnrolled
                    ? "You are already taking this course"
                    : this.props.addedToCart
                    ? "Added to Cart"
                    : "Add to Cart"}
                </SemanticButton>
                <SemanticButton.Or /> */}
                <SemanticButton
                  color="green"
                  loading={this.props.isEnrollingCourse}
                  onClick={() => {
                    this.props.courseIsEnrolled
                      ? this.props.history.push(
                          "/learn/play/" + showedCourse.slug
                        )
                      : this.handleEnrollCourse(showedCourse.id);
                  }}
                >
                  {this.props.courseIsEnrolled
                    ? "Continue Course"
                    : "Start Course Now"}
                </SemanticButton>
              </SemanticButton.Group>
              <SemanticCard.Content className="p-4">
                <Message
                  error={this.props.enrollCourseError}
                  hidden={!this.props.enrollCourseError}
                >
                  {JSON.stringify(this.props.enrollCourseError)}
                </Message>
                <Alert severity="info">
                  {`This course is for ${showedCourse.courseType} subscribers`}
                </Alert>

                <Typography variant="h5" className="m-2 pull-right">
                  {" "}
                  {showCourse.price || "Free"}
                </Typography>
                <div className="clearfix"></div>
                {/* <Typography variant="h5" className="text-dark mt-2 mb-2">
                    This Course has:
                  </Typography> */}
                <List>
                  <List.Item as="a">
                    <SemanticIcon name="check" color="blue" />
                    <List.Content>
                      <List.Description>
                        {showedCourse.Modules && showedCourse.Modules.length}{" "}
                        Course Modules
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item as="a">
                    <SemanticIcon name="video" color="blue" />
                    <List.Content>
                      <List.Description>
                        {showedCourse.total_materials} Video Materials
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item as="a">
                    <SemanticIcon name="tag" color="blue" />
                    <List.Content>
                      <List.Description>
                        This course is for {showedCourse.courseType} subscribers
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item as="a">
                    <SemanticIcon name="student" color="blue" />
                    <List.Content>
                      <List.Description>
                        {(showedCourse.users && showedCourse.users.length) || 0}{" "}
                        students took this course
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item as="a">
                    <SemanticIcon name="star" color="blue" />
                    <List.Content>
                      <List.Description>
                        {showedCourse.no_rated_user} Rated this course
                      </List.Description>
                    </List.Content>
                  </List.Item>

                  <List.Item as="a">
                    <List.Content>
                      <List.Description>
                        <ShowRating {...showedCourse} />
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </SemanticCard.Content>
              <SemanticCard.Content extra>
                <Comments course_id={showedCourse.id} />
                <PostReview course={showedCourse} />
              </SemanticCard.Content>
            </SemanticCard>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isEnrolled: state.course.isEnrolled,
  showedCourse: state.course.showCourse.data,
  showingCourse: state.course.showingCourse,
  errShowingCourse: state.course.errShowingCourse,
  isEnrollingCourse: state.course.isEnrollingCourse,
  enrollCourseError: state.course.enrollCourseError,
  courseIsEnrolled: state.course.courseIsEnrolled,
  addingToCart: state.general.addingToCart,
  addedToCart: state.general.addedToCart,
  errorAddingToCart: state.general.errorAddingToCart,
});

export default connect(mapStateToProps, {
  enrollCourse,
  addCart,
  isCourseEnrolled,
  playCourse,
  showCourse,
})(PlayCourse);
