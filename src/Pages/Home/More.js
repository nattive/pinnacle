import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import SvgIcon from "@material-ui/core/SvgIcon";
import "../../Assets/fonts/flaticon.css";
import coach from "../../Assets/img/svg_icon/svg/002-education.svg";
import volunteer from "../../Assets/img/svg_icon/svg/004-group.svg";
import idea from "../../Assets/img/svg_icon/svg/005-teach.svg";
export default function More() {
  return (
    <Container>
      <div className="service_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-50">
                <h3>
                  What we offer at <span>Pinnacle</span>,
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="single_service text-center">
                <img src={volunteer} alt="welfare" style={{ width: 70 }} />
                <h3>Work at Pinnacle </h3>
                <p>
                  Working at Pinnacle launches you into an exciting experience
                  of creating innovative learning and management solutions with
                  a smart and fun team.
                </p>
                <div className="button-group mt-4">
                  <a href="#" className="learn_more">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="single_service text-center">
                <img src={idea} style={{ width: 70 }} alt="" />
                <h3> Create with Pinnacle</h3>
                <p>
                  We provide tailored solutions to agencies and international
                  bodies
                </p>
                <div className="button-group mt-4">
                  <a href="#" className="learn_more">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="single_service text-center">
                <img src={coach} style={{ width: 70 }} alt="" />
                <h3>Learn at Pinnacle</h3>
                <p>
                  Receive one-on-one personal training and coaching from our
                  diverse range of industry professionals and entrepreneurs.
                </p>
                <a href="#" className="learn_more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
