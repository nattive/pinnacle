import React from "react";
import { connect } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleCourseItem from "../../Courses/SingleCourseItem";
import { topRatedCourses } from "../../Actions/courseAction";
import { useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import {getCourses} from "../../Actions/courseAction"
function CourseList(props) {
    useEffect(() => {
       props.getCourses();
    }, [])
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
    <div className="container">
      <div className="col-md-12 mt-1 mb-2 colorlib-heading center-heading text-center">
        {/* <h1 className="heading-big">Categories</h1> */}
        <h2>All Courses</h2>
        <Divider className="p-1 m-3" variant="middle" color="primary" />
      </div>
      <Carousel responsive={responsive}>
        {props.ALL_courses && props.ALL_courses.length > 0
          ? props.ALL_courses.map((item, key) => (
              <SingleCourseItem course={item} key={key} />
            ))
          : "no course uploaded"}
      </Carousel>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    ALL_courses: state.course.ALL_courses,
  };
}

export default connect(mapStateToProps, { topRatedCourses, getCourses })(
  CourseList
);
