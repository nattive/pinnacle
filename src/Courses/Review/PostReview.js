import React, { Component } from "react";
import {
  Box,
  Typography,
  makeStyles,
  Paper,
  Button,
  Divider,
  CircularProgress,
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

class PostReview extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      ratingBody: "",
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
      user_name: this.props.user.user.name,
      user_id: this.props.user.user.id,
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
      <div className="card mt-3">
        <div className="card-header">
          <Typography component="legend" variant="h5">
            Write a review
          </Typography>
        </div>
        <div className="card-body">
          <p className="text-muted">{ this.reviewText()}</p>
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
        </div>
      </div>
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
