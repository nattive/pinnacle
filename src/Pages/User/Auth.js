import React, { Component } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import SignInForm from "./SignInForm";
import HeadNotification from "../Elearning/Components/HeadNotification";
import HeadSection from "../Elearning/Components/HeadSection";
import SignUp from "./SignUp";
import Header from "../../Layout/Header";

export default class Auth extends Component {
  render() {
    return (
      <div className="container">
        <HeadNotification />
        <Header />
        <div className="row  align-items-center" style={{marginTop: '15%'}}>
          <div className="col-xs-12 col-sm-12 col-md-8">
            <div className="mx-auto"></div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 my-auto col-md-offset-1">
            <SignUp />
          </div>
        </div>
      </div>
    );
  }
}
