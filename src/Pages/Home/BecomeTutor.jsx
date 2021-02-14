import React from 'react'
import tutor from "../../Assets/img/banner/tutor.png";
import { Link } from 'react-router-dom';

function BecomeTutor() {
    return (
      <>
        <div className="container">
          <div className="row" style={{ marginTop: "5em" }}>
            <div className="col-md-6 d-none d-md-block">
              <img src={tutor} alt="" className="img-fluid" />
            </div>
            <div className="col-xs-12 col-md-6">
              <div
                className="align-contents-center"
                style={{ marginTop: "10em" }}
              >
                <div className="section_title text-left m-4 w-75 mt-5">
                  <h3>Become a tutor</h3>
                  <p>
                    Take the first into turning your skills into an avenue to
                    reach learners in Africa, We provide all you need to create
                    your course seemlessly
                  </p>
                  <Link to='/teach' className="mt-4 btn px-5 btn-outline btn-ptimary">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid"
          style={{ borderBottom: "1px solid rgba(107, 106, 106, 0.274)",borderTop: "1px solid rgba(107, 106, 106, 0.274)", }}
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
      </>
    );
}

export default BecomeTutor
