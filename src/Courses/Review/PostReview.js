import React, { Component } from "react";
import {
  Box,
  Typography,
  makeStyles,
  Paper,
  Button,
  Divider,
  CircularProgress,
  Card,
  CardActionArea,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import ReactStars from "react-rating-stars-component";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import {
  enrollCourse,
  isCourseEnrolled,
  playCourse,
  showCourse,
} from "../../Actions/courseAction";
import { postReview, fetchReview } from "../../Actions/ReviewAction";
import { verifyUserTokenAction } from "../../Actions/verifyUserTokenAction";
import { Link } from "react-router-dom";
import SignInForm from "../../Pages/User/SignInForm";
import SignUp from "../../Pages/User/SignUp";
import CreateIcon from "@material-ui/icons/Create";
class PostReview extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      ratingBody: "",
      showAuth: false,
    };
    this.handlePostReview = this.handlePostReview.bind(this);
    this.reviewText = this.reviewText.bind(this);
  }
  componentDidMount() {
    this.props.verifyUserTokenAction();
  }

  reviewText() {
    switch (this.state.rating) {
      case 5:
        return "Awesome";
      case 4:
        return "Great";
      case 3:
        return "Well... it's Good";
      case 2:
        return "It's bad";
      case 1:
        return "I don't like it";
      case 0:
        return "No...No.. No";

      default:
        break;
    }
  }

  async handlePostReview() {
    const data = {
      review: this.state.ratingBody,
      rating: this.state.rating,
      user_name: this.props.user.name,
      user_id: this.props.user.id,
      course_id: this.props.course.id,
    };

    this.props.postReview({ data });
    this.setState({
      rating: 0,
      ratingBody: "",
    });
  }

  render() {
    return (
      <Card className="m-2 p-2">
        <CardHeader
          avatar={
            <Avatar aria-label="review" color='primary'>
              <CreateIcon />
            </Avatar>
          }
          title=" Write a review"
        ></CardHeader>
        <CardActionArea>
          <div className="card-body">
            {this.props.user.name ? (
              <>
                <p className="text-muted">{this.reviewText()}</p>
                <div className="w-100">
                  <ReactStars
                    size={30}
                    half={false}
                    value={this.state.rating}
                    onChange={(newRating) => {
                      this.setState({ rating: newRating });
                    }}
                  />
                </div>

                <TextField
                  id="standard-multiline-static"
                  label="Your review about the course"
                  multiline
                  className="w-100"
                  rows={4}
                  variant="outlined"
                  value={this.state.ratingBody}
                  onChange={(event) =>
                    this.setState({ ratingBody: event.target.value })
                  }
                />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  className="m-2"
                  onClick={this.handlePostReview}
                >
                  {this.props.isSendingReview ? (
                    <CircularProgress size={30} color="#fff" />
                  ) : (
                    " Post Review"
                  )}
                </Button>
              </>
            ) : (
              <div className="mx-auto">
                {this.state.showAuth ? (
                  <SignUp />
                ) : (
                  <>
                    {" "}
                    <p>Sign in to write a review</p>
                    <Button
                      variant="contained"
                      className="m-2"
                      color="primary"
                      onClick={() => this.setState({ showAuth: true })}
                    >
                      Sign in
                    </Button>{" "}
                  </>
                )}
              </div>
            )}
          </div>
        </CardActionArea>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isEnrolled: state.course.isEnrolled,
  isSendingReview: state.loading.isSendingReview,
});

const mapDispatchToProps = {
  enrollCourse,
  verifyUserTokenAction,
  isCourseEnrolled,
  playCourse,
  fetchReview,
  showCourse,
  postReview,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostReview);
