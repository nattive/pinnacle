import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import { Typography, Grid, Button } from "@material-ui/core";
import bg from "../Assests/images/bg.jpg";
export default function Slider() {
  return (
    <div className="slider_area" style={{ marginBottom: "-60px" }}>
      <OwlCarousel
        items={1}
        className="slider_active owl-carousel"
        loop
        nav
        autoplay
      >
        <div
          className="single_slider  d-flex align-items-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="container">
            <div className="row">
              <Grid container>
                <Grid md={5}>
                  <div className="slider_text ">
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
        <div className="single_slider  d-flex align-items-center slider_bg_2 overlay2">
          <div className="container">
            <div className="row">
              <Grid container>
                <Grid md={5}>
                  <div className="slider_text float-right">
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
        <div className="single_slider  d-flex align-items-center slider_bg_3 overlay2">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="slider_text ">
                  <h3>
                    Top resources to build <br /> your future career
                  </h3>
                  <div className="video_service_btn">
                    <a href="#" className="boxed-btn3">
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
