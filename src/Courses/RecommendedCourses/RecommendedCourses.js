import React, { Component } from "react";
import { connect } from "react-redux";
import SingleCourseItem from "../SingleCourseItem";
import { getRecommendation } from "../../Actions/courseAction";
import { useEffect } from "react";
import { Skeleton } from "@material-ui/lab";
import { Container, Divider } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { blue } from "@material-ui/core/colors";

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
    <Container style={{ margin: "2em 0" }}>
      {props.recommendedCourses.Title && (
        <>
          <div className="col-md-12 mt-1 mb-2 colorlib-heading center-heading">
            {/* <h1 className="heading-big">Categories</h1> */}
            <Divider className=" mt-3" color="primary" />
            <h2 style={{ fontSize: "1.1em" }}>
              {" "}
              Because you checked{" "}
              <span style={{ textTransform: "capitalize", color: blue[800] }}>
                {props.recommendedCourses.Title}
              </span>
            </h2>
            <Divider className="mb-4" color="primary" />
          </div>
          <div className="container">
          <Carousel responsive={responsive}>
            {props.recommendedCourses.Course &&
            props.recommendedCourses.Course.length > 0
              ? props.recommendedCourses.Course.map((item, key) => (
                  <SingleCourseItem course={item} />
                ))
              : null}
          </Carousel>
          </div>
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
