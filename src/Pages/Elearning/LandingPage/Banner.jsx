import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Typography, Grid, Button } from "@material-ui/core";
import bg from "../Assests/images/bg.jpg";
export default function Slider() {
  return (
    <div className="slider_area" style={{ marginBottom: "-60px" }}>
    
      <Slick  className="slider_active owl-carousel">
        <div
          className="single_slider  d-flex align-items-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="container">
            <div className="row">
              <Grid container>
                <Grid md={5}>
                  <div className="slider_text bg-light p-3">
                    <Typography
                      variant="h4"
                      style={{
                        color: "#000066",
                        fontWeight: "bold",
                        fontSize: "2em",
                      }}
                    >
                      Build a Career for the Future
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ color: "#000066", fontSize: "1.4em" }}
                    >
                      A program geared towards the preparation of young
                      Nigerians for the 21st century workplace.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className="single_slider  d-flex align-items-center slider_bg_2 ">
          <div className="container">
            <div className="row">
              <Grid container>
                <Grid md={5}>
                  <div className="slider_text float-right bg-light p-3">
                    <Typography
                      variant="h4"
                      style={{
                        color: "#000066",
                        fontWeight: "bold",
                        fontSize: "2em",
                      }}
                    >
                      Level Up your Skills with Pinnacle ULearn
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ color: "#000066", fontSize: "1.4em" }}
                    >
                      Have access to over 500,000 live and video classes on
                      diverse hard and soft skills for the 21st century
                      professional,
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className="single_slider  d-flex align-items-center slider_bg_3 ">
          <div className="container">
            <div className="row">
              <Grid container>
                <Grid md={5}>
                  <div className="slider_text float-right bg-light p-3">
                    <Typography
                      variant="h4"
                      style={{
                        color: "#000066",
                        fontWeight: "bold",
                        fontSize: "2em",
                      }}
                    >
                      Top resources to build <br /> your future career
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ color: "#000066", fontSize: "1.4em" }}
                    >
                      We have hundred of courses by well trained tutor
                      Engineered to steer young and teenage student to a bette
                      career path
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Slick>
    </div>
  );
}
