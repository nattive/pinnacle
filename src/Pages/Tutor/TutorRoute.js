import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Home } from "./Home";
import HeadBar from "../../Courses/HeadBar";
import Footer from "../../Layout/Footer";
import SignUp from "./SignUp";
import NavBarHeader from "../Home/NavBarHeader";
import Header from "../../Layout/Header";

export const TutorRoute = () => {
    const {path} = useRouteMatch()
  return (
    <>
      <Header />
      <NavBarHeader />
      <Switch>
        <Route exact path={path}>
          <Home />
        </Route>
        <Route exact path={path + "/instructor/auth"}>
          <SignUp />
        </Route>
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TutorRoute);
