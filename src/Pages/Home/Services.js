import React from "react";
import image1 from "../../Assets/img/case/1.png";
import { Container, Grid, Typography, Button, Link } from "@material-ui/core";
import student from "../../Assets/img/banner/student.png";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import './service.scss'
export default function Services() {
  // backgroundColor: '#ebf3ff'  <ScrollAnimation animateOnce animateIn="animate__fadeIn">
  return (
    <div className="case_study_area">
      <div className="container-fluid" className="align-content-end ">
        <div className="row">
          <div className="col-md-6 col-xs-12 d-none d-md-block">
            <img src={student} alt="" className="rounded w-95"/>
          </div>
          <div className="col-md-6 col-xs-12 case_study_area-text">
            <h3 className="mt-5">Learn from well trained Tutors </h3>
            <p>We have have over 100, 000 courses prepared by well 
              trained and certified progessional tutors across Africa</p>
              <button className="case_study_area-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
   );
}
