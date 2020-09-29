import React, { Component } from "react";
import { connect } from "react-redux";
import SingleCourseItem from "../SingleCourseItem";
import { getRecommendation } from "../../Actions/courseAction";
import { useEffect } from "react";
import { Skeleton } from "@material-ui/lab";
import { Container, Divider } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const RecommendedCourses = (props) => {
  useEffect(() => {
    props.getRecommendation();
  }, [props.user]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container>
      {props.recommendedCourses.Title && (
        <>
          <h3 className="pt-2 pb-2">
            Because you checked {props.recommendedCourses.Title}
          </h3>
          <Divider className="mb-4 mt-4" />
          <Carousel responsive={responsive}>
            {props.recommendedCourses.Course &&
            props.recommendedCourses.Course.length > 0
              ? props.recommendedCourses.Course.map((item, key) => (
                  <SingleCourseItem course={item} />
                ))
              : null}
          </Carousel>
        </>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  recommendedCourses: state.course.recommendedCourses,
});

const mapDispatchToProps = {
  getRecommendation,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedCourses);
