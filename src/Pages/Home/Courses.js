import React, { Component } from "react";
import image from "../../Assets/img/case/4.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScrollAnimation from "react-animate-on-scroll";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import Avatar from "@material-ui/core/Avatar";
import { CircularProgress, Divider } from "@material-ui/core";
import { useSelector } from "react-redux";
import ShowRating from "../../General Components/ShowRating";
import SingleCourseItem from "../../Courses/SingleCourseItem";
import { getCourses } from "../../Actions/courseAction";
import { connect } from "react-redux";
import { useEffect } from "react";

/*************Ebd of Import *********** */

function Courses(props) {
  useEffect(() => {
    props.getCourses();
  }, []);

  const { course } = props;
  return (
    <>
      <div className="container">
        <div className="row">
          {course
            ? course.length > 0
              ? course.map((item) => (
                  <ScrollAnimation
                    animateOnce
                    animateIn="animate__fadeInDown"
                    key={item.id}
                  >
                    <SingleCourseItem
                      course={item}
                      className="col-md-3 m-1 col-xs-6"
                    />
                  </ScrollAnimation>
                ))
              : "1"
            : "2"}
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  course: state.course.ALL_courses,
});

const mapDispatchToProps = {
  getCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
