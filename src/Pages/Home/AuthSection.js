import React, { Component } from "react";

export default class AuthSection extends Component {
  render() {
    return (
      <>
        <div className="container-fluid auth_section" style={{ marginTop: 0 }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h3>Join The community</h3>
                <p className='pr-4'>
                  Join our community of learners to gain access to thousands of
                  free resources
                </p>
              </div>
              <div className="col-sm-6">
                <div className="row">
                  <div className="d-flex">
                    <div className="buttons_container d-flex flex-row align-items-start justify-content-start flex-wrap">
                      <div className="button button_1 mr-3">
                        <a href="#">
                          Create Account
                          <div className="button_arrow">
                            <i
                              className="fa fa-user-plus"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </a>
                      </div>
                      <div className="button button_2">
                        <a href="#">
                          Login
                          <div className="button_arrow">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
