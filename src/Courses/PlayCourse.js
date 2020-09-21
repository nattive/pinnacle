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
// import { verifyUserTokenAction } from "../Actions/verifyUserTokenAction";
import { connect } from "react-redux";
import HeadBar from "./HeadBar";
import 'semantic-ui-css/semantic.min.css'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShowRating from "../General Components/ShowRating";
import Comments from "./Cmments/Reviews";
import PostReview from "./Review/PostReview";
import "./PlayCourse.css"
import { Link as RouterLink } from 'react-router-dom'
import { Header, Segment, Breadcrumb } from "semantic-ui-react";
import { Card as SemanticCard, Button as SemanticButton, List, Icon as SemanticIcon } from 'semantic-ui-react'
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

  // componentWillUpdate() {
  //   this.props.isCourseEnrolled(this.props.user.user.id, course.data.id);
  // }
  componentDidMount() {
    this.state.loading = true;
    this.state.loading = false;

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
    if (newProps.courseId & newProps.user.id) {
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

    const sections = [
      { key: 'Home', content: 'Home', link: true },
      { key: 'Store', content: 'Store', link: true },
      { key: 'Shirt', content: 'T-Shirt', active: true },
    ]
    const { showedCourse } = this.state;
    const objArray = this.state.showedCourse.objective ? this.state.showedCourse.objective.split(',') : []
    console.log(objArray)
    return (
      <>
        <div className="container-fluid mb-4">
          <div className="overlay" style={{
            backgroundColor: ' #2a2a5a', backgroundImage: `url(${showedCourse.banner})`,
            backgroundSize: 'cover', minHeight: '30em', marginTop: '3em', padding: "7em 6em 0 6em", alignContent: 'center'
          }} />
          <div className="container row" style={{ margin: '-25em 5em' }}>
            <div className="col-xs-12 col-md-7 d-none d-md-block">
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" style={{ color: '#fff' }} to="/" component={RouterLink}>
                  Home
      </Link>
                <Link color="inherit" style={{ color: '#fff' }} to="/" component={RouterLink}>
                  ULearn
      </Link>
                <Typography style={{ color: '#fff' }} color="textPrimary">{showedCourse.title}</Typography>
              </Breadcrumbs>
              {
                showedCourse.id ? (
                  <>
                    <Typography variant="h3" style={{ color: '#fff' }}>{showedCourse.title}</Typography>
                    <Typography variant="h5" style={{ color: '#fff' }}>{showedCourse.subtitle}</Typography>
                    <Typography variant="body1" style={{ color: '#fff' }}>{`Difficulty: ${showedCourse.course_difficulty} 
              | Category: ${showedCourse.sub_category && showedCourse.sub_category.name}`}</Typography>
                    <Typography style={{ color: '#fff' }} variant="body1">{`Created By: ${showCourse.tutor ? showCourse.tutor.name : 'Tutors name'}`}</Typography>
                    <Typography style={{ color: '#fff' }} variant="body1">{`Last Updated: ${showCourse.updated_at}`}</Typography>
                    <Typography style={{ color: '#fff' }} variant="body1"><Icon name="globe" color='white' />{showCourse.language || 'English'}</Typography>
                  </>
                ) : (
                    <>
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                    </>
                  )
              }

              <Segment fluid padded style={{ marginTop: '8em' }} >
                <Typography variant='h6'>In this course you will learn</Typography>
                <Divider />
                <List>
                  {
                    this.props.showingCourse ? (
                      <>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                      </>
                    ) :
                      objArray.length > 0 ? objArray.map((objective, index) => (
                        <List.Item as='a'>
                          <SemanticIcon name='check' />
                          <List.Content>
                            <List.Description>
                              {objective !== '' && objective}
                            </List.Description>
                          </List.Content>
                        </List.Item>
                      )) : 'Not Set'
                  }
                </List>
              </Segment>
              {
                showedCourse.description &&
                <Segment fluid padded basic>
                  <Typography variant='h4'>Description</Typography>
                  <Divider />
                  <Typography variant='body1' className="text-dark mt-3">  {parse(showedCourse.description.length > 1000 && !this.state.readMore ?
                    showedCourse.description.substring(0, 1000) : showedCourse.description || '')}</Typography>
                  <Link component={Typography} variant="button" className="btn-link" onClick={() => this.setState((state) => ({
                    readMore: !state.readMore,
                  }))} > {this.state.readMore ? 'Show Less' : 'Show More'} </Link>
                </Segment>
              }
            </div>
            <div className=" col-sm-12 col-md-5">
              <SemanticCard fluid  >
                <VideoPlayer course={showedCourse} />
                <SemanticButton.Group fluid>
                  <SemanticButton color="blue" disabled={this.props.courseIsEnrolled}>{this.props.courseIsEnrolled ? 'You are already taking this course' : 'Add to Cart'}</SemanticButton>
                  <SemanticButton.Or />
                  <SemanticButton color='blue' loading={this.props.isEnrollingCourse} basic onClick={() => this.handleEnrollCourse(showedCourse.id)}>Start Course Now</SemanticButton>
                </SemanticButton.Group>
                <SemanticCard.Content className="p-4">
                  <Alert severity="info">
                    {showedCourse.courseType === "isPO" ? 'This course is for Pinnacled Ulearn Learners' :
                      'This course is for Career of the Future (CotF) Learners'
                    }
                  </Alert>
                  <Typography variant="h5" className="m-2 pull-right"> {showCourse.price || 'Free'}</Typography>
                  <div className="clearfix"></div>
                  <Typography variant="h5" className="text-dark mt-2 mb-2">This Course has:</Typography>
                  <List>
                    <List.Item as='a'>
                      <SemanticIcon name='check' />
                      <List.Content>
                        <List.Description>
                          {showedCourse.modules && showedCourse.modules.length} Course Modules
                          </List.Description>

                      </List.Content>
                    </List.Item>
                    <List.Item as='a'>
                      <SemanticIcon name='video' />
                      <List.Content>
                        <List.Description>
                          {showedCourse.modules && showedCourse.modules.length} Video Materials
                          </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item as='a'>
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
      </>
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

});

export default connect(mapStateToProps, {
  enrollCourse,
  // verifyUserTokenAction,
  isCourseEnrolled,
  playCourse,
  showCourse,
})(PlayCourse);
