import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemSecondaryAction,
  Button,
} from "@material-ui/core";
import ShowRating from "../../General Components/ShowRating";
import Axios from "axios";
import { BaseUrl } from "../../Patials/BaseUrl";
import { useState } from "react";
import { connect } from "react-redux";
import { deleteReview } from "../../Actions/ReviewAction";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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

function Comment(props) {
  const handleDeleteReview = (id, course_id) => {
    props.deleteReview(id, course_id);
  };
  console.log(props);
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <Typography variant="h5">Review(s)</Typography>
      {props.comments
        ? props.comments.data.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem j>
                <ListItemText
                  primary={
                    <Typography className={classes.fonts}>
                      {item.user_name}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        <ShowRating rating={item.rating} />
                      </Typography>
                      <Typography variant="body2">{item.review}</Typography>
                    </>
                  }
                />
                {item.user_id === props.user.user.id ? (
                  <ListItemSecondaryAction>
                    <Button
                      variant="text"
                      onClick={() =>handleDeleteReview(item.id, item.course_id)}
                    >
                      delete
                    </Button>
                    <Button variant="text">Edit</Button>
                  </ListItemSecondaryAction>
                ) : (
                  "test"
                )}
              </ListItem>
              <Divider />
            </React.Fragment>
          ))
        : "No review yet"}
    </List>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isDeletingReview: state.reviews.isDeletingReview,
});

export default connect(mapStateToProps, {deleteReview})(Comment);
