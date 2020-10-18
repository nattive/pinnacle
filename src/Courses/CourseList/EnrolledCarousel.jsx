import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import EnrolledCourseCard from "../EnrolledCourseCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { getEnrolledCourse } from "../../Actions/courseAction";
import { useHistory, useRouteMatch } from "react-router-dom";

/**
 * Displays List of all courses user has enrolled in
 * @param {courses, user} props
 */
const EnrolledCarousel = (props) => {
  const history = useHistory();
  const { url } = useRouteMatch();
  useEffect(() => {
    props.getEnrolledCourse();
  }, []);

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
    <div>
        <Carousel responsive={responsive}>
          {props.ENROLLED_courses && props.ENROLLED_courses.length > 0 ? (
            props.ENROLLED_courses.map((item, key) => (
              <EnrolledCourseCard
                course={item}
                url={url}
                key={key}
                history={history}
              />
            ))
          ) : (
            <p>You are not following any course</p>
          )}
        </Carousel>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ENROLLED_courses: state.course.ENROLLED_courses,
  user: state.auth.user,
});

const mapDispatchToProps = {
  getEnrolledCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(EnrolledCarousel);
