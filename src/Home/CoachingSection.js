import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default class CoachingSection extends Component {
  render() {
    return (
      <ScrollAnimation animateOnce animateIn="animate__fadeInDown">
        <div className="container-fluid coaching">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div id="coachBanner" className="m-4 p-4"></div>
            </div>
            <div className="col-xs-12 col-md-6">
              <ScrollAnimation delay={200} animateOnce animateIn="animate__slideInRight">
                <div className="m-3 p-4 coaching-body">
                  <h3>Pinnacle Personalised Coaching and Trainings</h3>
                  <p>
                    Receive one-on-one personal training and coaching from our
                    diverse range of industry professionals and entrepreneurs.
                    This product is available online and offline to interested
                    individuals and corporate organisations
                  </p>
                  <div className="button-group mt-4">
                    <button className="btn btn-Coaching">Read More</button>
                    <button className="btn btn-Coaching">Enroll</button>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    );
  }
}
