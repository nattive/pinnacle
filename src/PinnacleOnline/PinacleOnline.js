import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import HeadSection from "./HeadSection";
import "./style.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import FeaturedCourses from "../Home/FeaturedCourses";
import OurPrograms from "./OurPrograms";
import Courses from "../Courses/Courses";
import { Router, Switch, useRouteMatch, Route } from "react-router-dom";
import ViewCourse from "../Courses/ViewCourse";
import PlayModules from "../Courses/PlayModules";
import { connect } from "react-redux";

function ELearning() {
  return (
    <>
      <Header />
      <HeadSection />
      {/* <FeaturedCourses />
      <OurPrograms />
      <Footer /> */}
    </>
  );
}

function PinacleOnline() {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <ELearning />
        </Route>
        <Route path={`${path}/courses`}>
          <Courses />
        </Route>
         <Route path={`${path}/*`}>
         <p>404</p>
        </Route>
        
      </Switch>
    </>
  );
  
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(PinacleOnline);