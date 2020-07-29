import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactSVG } from "react-svg";
import "../../Assets/fonts/flaticon.css";
import welfare from "../../Assets/fonts/font/svg/030-welfare.svg";
import volunteer from "../../Assets/fonts/font/svgIcon/043-online learning.svg";
import idea from "../../Assets/fonts/font/svg/012-donation.svg";
import instructor from "../../Assets/fonts/font/svgIcon/050-online class.svg";
export default function Service() {
  return (
    <Container>
      <div className="service_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-50">
                <h3>
                  Share your <span>Knowledge</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="single_service text-center">
                <img src={volunteer} alt="welfare" style={{ width: 70 }} />
                <h3> Create an online course</h3>
                <p>
                  Help our students learn new skills, transform their careers
                  and businesses by becoming an instructor.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="single_service text-center">
                <img src={idea} style={{ width: 70 }} alt="" />
                <h3> Earn money</h3>
                <p>Earn more money by teaching people round Africa.</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="single_service text-center">
                <img src={instructor} style={{ width: 70 }} alt="" />
                <h3> Join our community</h3>
                <p>
                  Get inspiration and support to create a course by joining our
                  vibrant community of instructors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
