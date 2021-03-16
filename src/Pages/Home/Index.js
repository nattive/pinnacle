import React, { Component } from "react";
import Header from "../../Layout/Header";
import Slider from "./Slider";
import Services from "./Services";
import FeaturedCourses from "./FeaturedCourses";
import CoachingSection from "./CoachingSection";
import Volunteer from "./More";
import InternSection from "./InternSection";
import Testimonial from "./Testimonial";
import Countdown from "./Countdown";
import BlogSection from "./BlogSection";
import More from "./More";
import Footer from "../../Layout/Footer";
import AuthSection from "./AuthSection";
import { connect } from "react-redux";
import { fetchCourses } from "../../Actions/courseAction";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import NavBarHeader from "./NavBarHeader";
import SingleBanner from "../../General Components/SingleBanner";
import BecomeTutor from "./BecomeTutor";

class Index extends Component {
  async componentDidMount() {
    await this.props.fetchCourses();
  }
  render() {
    return (
      <>
        <Snackbar
          open={this.props.fetchCourseError}
          close={!this.props.fetchCourseError}
          autoHideDuration={6000}
          onClose
        >
          <Alert onClose severity="error">
            {JSON.stringify(this.props.fetchCourseError)}
          </Alert>
        </Snackbar>
        <Header />
        <NavBarHeader />
        <SingleBanner />
        <AuthSection />
        <More />
        {/* <Services /> */}
        <FeaturedCourses />
        <Countdown />
        <BecomeTutor />
        {/* <CoachingSection /> */}
        <Testimonial location="Homepage" />
        <BlogSection />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  course: state.course.items,
  fetchCourseError: state.course.fetchCourseError,
});

export default connect(mapStateToProps, { fetchCourses })(Index);
