import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import onlineCourse from "../../Assets/img/svg_icon/svg/007-online-course.svg";
import education from "../../Assets/img/svg_icon/svg/002-education.svg";
import money from "../../Assets/img/svg_icon/svg/001-money.svg";
import { Link } from "react-router-dom";
import virtualClassSvg from "../../Assets/img/svg_icon/svg/006-virtual-class.svg";
export default class AuthSection extends Component {
  render() {
    const iconStyle = {
      width: '45px'
    }
    return (
      <React.Fragment>
        <div
          className="jumbotron"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-4 d-none d-md-block">
                <div className="d-flex align-content-center">
                  <img src={virtualClassSvg} style={iconStyle} alt=""/>
                  <div className="ml-4 p-1">
                    <h4> Over 100,000 courses</h4>
                    Explore cources from well trained tutors
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-md-block">
                <div className="d-flex align-content-center">
                <img src={onlineCourse} style={iconStyle} alt=""/>
                  <i className="fa fa-video ml-4" />
                  <div className="ml-4">
                    <h4> Create and Earn </h4>
                    We help you all through from the creation of the course to
                    the delivery
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-md-block">
                <div className="d-flex align-content-center">
                <img src={education} style={iconStyle} alt=""/>
                  <div className="ml-4">
                    <h4> Over 100,000 Student</h4>
                   We are not just a elearning partform, We create a community if learners
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
