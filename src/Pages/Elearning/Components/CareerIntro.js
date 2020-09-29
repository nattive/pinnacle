import React from "react";
import imgClass2 from "../Assests/images/about-img-2.jpg";
import { Button } from "@material-ui/core";

export default function CareerIntro() {
  return (
    <div className="colorlib-counters mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="about-desc">
              <div
                className="about-img-1"
                style={{ backgroundImage: `url(${imgClass2})` }}
              ></div>
              <div
                className="about-img-2"
                style={{ backgroundImage: `url(${imgClass2})` }}
              ></div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-12 colorlib-heading">
                <h3 className="course-heading">Careers of the Future</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-3">
                <p>
                  <strong>Build your Career for the Future</strong>
                </p>
                <p>
                  Join the E-learning portal geared towards the preparation of
                  young Nigerians for the 21st century workplace. Featuring a
                  wide range of hard and soft skills all specifically designed
                  for a younger audience.
                </p>
              </div>
              <div className="col-md-6 col-sm-6 mt-2">
                <div className="counter-entry">
                  <div className="desc">
                    <span
                      className="colorlib-counter js-counter"
                      data-from="0"
                      data-to="1539"
                      data-speed="5000"
                      data-refresh-interval="50"
                    ></span>
                    <span className="colorlib-counter-label">Courses</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 mt-2">
                <div className="counter-entry">
                  <div className="desc">
                    <span
                      className="colorlib-counter js-counter"
                      data-from="0"
                      data-to="3653"
                      data-speed="5000"
                      data-refresh-interval="50"
                    ></span>
                    <span className="colorlib-counter-label">Students</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 mt-2">
                <div className="counter-entry">
                  <div className="desc">
                    <span
                      className="colorlib-counter js-counter"
                      data-from="0"
                      data-to="2300"
                      data-speed="5000"
                      data-refresh-interval="50"
                    ></span>
                    <span className="colorlib-counter-label">
                      Teachers online
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 mt-2">
                <div className="counter-entry">
                  <div className="desc">
                    <span
                      className="colorlib-counter js-counter"
                      data-from="0"
                      data-to="200"
                      data-speed="5000"
                      data-refresh-interval="50"
                    ></span>
                    <span className="colorlib-counter-label">Countries</span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant="contained"
              className="btn btn-primary btn-outline btn-lg btn-discover popup-vimeo"
              color="primary"
            >
              {" "}
              Sign Up{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
