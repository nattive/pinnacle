import React, { Component } from "react";
import { connect } from "react-redux";
import SingleCourseItem from "../SingleCourseItem";
import { getRecommendedByUser } from "../../Actions/courseAction";
import { useEffect } from "react";
import { Skeleton } from "@material-ui/lab";
import { Container, Divider } from "@material-ui/core";
const RecommendedCourses = (props) => {
  useEffect(() => {
    props.getRecommendedByUser(props.user.id);
  }, [props.user]);
  return (
    <Container>
      <h3 className="pt-2 pb-2"> Recommended for you</h3> <Divider />
      <div className="row mt-4 no-gutters">
        {props.recommendedCourses && props.recommendedCourses.length > 0 ? (
          props.recommendedCourses.map((item, key) => (
            <div key={key} className="col-xs-4 col-md-2">
              <SingleCourseItem course={item} />{" "}
            </div>
          ))
        ) : (
          <Skeleton variant="rect" />
        )}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  recommendedCourses: state.course.recommendedCourses.data,
});

const mapDispatchToProps = {
  getRecommendedByUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedCourses);
