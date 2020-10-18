import React from 'react'
import { Button, Comment, Form, Label, Rating } from 'semantic-ui-react'
import {
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
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import SignInForm from "../../Pages/User/SignInForm";
import SignUp from "../../Pages/User/SignUp";
import CreateIcon from "@material-ui/icons/Create";
import ShowRating from '../../General Components/ShowRating';

/**
 *  constructor() {
    super();
    this.state = {
      rating: 0,
      ratingBody: "",
      showAuth: false,
    };
    this.handlePostReview = this.handlePostReview.bind(this);
    this.reviewText = this.reviewText.bind(this);
  }
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
  
  */

const PostReview = (props) => {
  const [rating, setRating] = React.useState(0)
  const [ratingBody, setRatingBody] = React.useState('')
  const [error, setError] = React.useState(null)
  const handlePostReview = () => {
    if (ratingBody !== '') {
      const data = {
        review: ratingBody,
        rating: rating,
        user_name: props.user.name,
        user_id: props.user.id,
        course_id: props.course.id,
      };

      props.postReview({ data });
      setRating(0)
      setRating('')

    } else {
      setError('Rating cannot be empty')
    }
  }

  return (
  <>
      {
        props.courseIsEnrolled &&
        <Form reply onSubmit={handlePostReview}>
        <Label>You enrolled into this course, Add a review</Label>
          <div className="w-100 m-3">
            <ReactStars
              size={30}
              half={false}
              value={rating}
              onChange={(newRating) => {
                setRating(newRating)
              }}
            />
          </div>
          <Form.TextArea required onChange={e => setRatingBody(e.target.value)} />
          <Button loading={props.isSendingReview} content='Add Review'  labelPosition='left' icon='edit' primary />
        </Form>
      }
      </>
  )
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isEnrolled: state.course.isEnrolled,
  courseIsEnrolled: state.course.courseIsEnrolled,
  isSendingReview: state.loading.isSendingReview,
});

PostReview.propTypes = {
  course: PropTypes.object
};
const mapDispatchToProps = {
  enrollCourse,
  // verifyUserTokenAction,
  isCourseEnrolled,
  playCourse,
  fetchReview,
  showCourse,
  postReview,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostReview);
