import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShowRating from "../../General Components/ShowRating";
import Axios from "axios";
import { BaseUrl } from "../../Patials/BaseUrl";
import { useState } from "react";
import { connect } from "react-redux";
import { deleteReview } from "../../Actions/ReviewAction";
import { Button, Comment, Form, Label, Rating } from 'semantic-ui-react'
import { Typography, Divider } from "@material-ui/core";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: '2%',
    backgroundColor: theme.palette.background.paper,
  },
  fonts: {
    fontWeight: "bold",
  },
  inline: {
    display: "inline",
  },
}));

const checkIfUserIsPoster = (userId, reviewId) => {
  Axios.post(`${BaseUrl}api/courses/review/check`, {
    userId: userId,
    reviewId: reviewId,
  }).then((res) => {
    // res.data;
    console.log(res.data);
  });
};

function Review(props) {
  useEffect(() => {
    props.fetchReview(props.course_id)
  }, [props.course_id])
  const handleDeleteReview = (id, course_id) => {
    props.deleteReview(id, course_id);
  };
  console.log(props);
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6">Review(s)</Typography>
      {/* <Typography variant="caption">{props.comments && props.comments.data.length ? null : 'No review yet'}</Typography> */}
      {props.comments
        ? props.comments.data &&
        props.comments.data.map((review, key) => (
          <React.Fragment key={key}>
            <Comment className={classes.root}>
              <Comment.Content>
                <Comment.Author>{review.user_name}</Comment.Author>
                <Comment.Metadata className='mb-1 mt-1'>
                  <div>2 days ago</div>
                </Comment.Metadata>
                <Comment.Metadata className='mb-1 mt-1'>
                  <Rating size="tiny" icon='star' defaultRating={3} maxRating={4} disabled />
                </Comment.Metadata>
                <Comment.Text>
                  {review.review}
                </Comment.Text>
                <Comment.Actions className='my-3'>
                  {review.user_id === props.user.id ?
                    (<> <Comment.Action className='mr-3'>edit</Comment.Action>
                      <Comment.Action loading={props.isDeletingReview} onClick={() =>
                        handleDeleteReview(review.id, review.course_id)
                      }>Delete</Comment.Action></>)
                    : null}
                </Comment.Actions>
              </Comment.Content>
              <Divider />
            </Comment>
          </React.Fragment>
        ))
        : "No review yet"}
        </>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isDeletingReview: state.reviews.isDeletingReview,
});

export default connect(mapStateToProps, { deleteReview })(Review);
