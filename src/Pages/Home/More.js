import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactSVG } from "react-svg";
import "../../Assets/fonts/flaticon.css";
import welfare from '../../Assets/fonts/font/svg/030-welfare.svg'
import volunteer from "../../Assets/fonts/font/svg/029-volunteer.svg";
import idea from "../../Assets/fonts/font/svgIcon/048-idea.svg";
import instructor from "../../Assets/fonts/font/svgIcon/023-instructor.svg";
export default function More() {
  return (
    <Container>
      <div className="service_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-50">
                <h3>
                  Achieve much more with <span>Pinnacle</span>,
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="single_service text-center">
                <img src={volunteer} alt="welfare" style={{ width: 70 }} />
                <h3> Volunteer at Pinnacle Consult </h3>
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
                <h3> Research Beyond Borders</h3>
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
                <img src={instructor} style={{ width: 70 }} alt="" />
                <h3>Pinnacle Personalized Coaching and Trainings</h3>
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
