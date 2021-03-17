import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
export default class AuthSection extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="container-fluid"
          style={{ backgroundColor: "rgba(107, 106, 106, 0.274)" }}
        >
          <div className="container">
            <div className="row p-4">
              <div className="col-md-4 d-none d-md-block">
                <div className="d-flex align-content-center">
                  <i className="fa fa-play ml-4" />
                  <div className="ml-4">
                    <h4> Over 100,000 courses</h4>
                    Explore cources from well trained tutors
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-md-block">
                <div className="d-flex align-content-center">
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
                  <i className="fa fa-play ml-4" />
                  <div className="ml-4">
                    <h4> Over 100,000 courses</h4>
                    Explore cources from well trained tutors
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
