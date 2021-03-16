import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, Button } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export default function Slider() {
  return (
    <div className="slider_area" style={{ marginBottom: "-60px" }}>
      {/* <OwlCarousel
        items={1}
        className="slider_active owl-carousel"
        loop
        nav
        autoplay
      >
        <div className="single_slider  d-flex align-items-center slider_bg_1">
          <div className="container">
            <div className="row">
              <Grid container>
                <Grid md={5}>
                  <div
                    className="slider_text"
                    style={{ backgroundColor: "#fff", padding: "10px" }}
                  >
                    <Typography
                      variant="h4"
                      style={{
                        color: blue[800],
                        fontWeight: "bold",
                        fontSize: "2em",
                      }}
                    >
                      Build a Career for the Future
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ color: blue[800], fontSize: "1.4em" }}
                    >
                      A program geared towards the preparation of young
                      Nigerians for the 21st century workplace.
                    </Typography>
                    <div className="video_service_btn">
                      <Button
                        to="/learn"
                        component={Link}
                        color="primary"
                        variant="contained"
                        color="primary"
                        style={{ padding: 15 }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className="single_slider  d-flex align-items-center slider_bg_2">
          <div className="container">
            <div className="row">
              <Grid container>
                <Grid md={5}>
                  <div
                    className="slider_text float-right"
                    style={{ backgroundColor: "#fff", padding: "10px" }}
                  >
                    <Typography
                      variant="h4"
                      style={{
                        color: blue[800],
                        fontWeight: "bold",
                        fontSize: "2em",
                      }}
                    >
                      Level Up your Skills with Pinnacle ULearn
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ color: blue[800], fontSize: "1.4em" }}
                    >
                      Have access to over 500,000 live and video classes on
                      diverse hard and soft skills for the 21st century
                      professional,
                    </Typography>
                    <div className="video_service_btn">
                      <Button
                        to="/learn"
                        component={Link}
                        variant="contained"
                        style={{ padding: 15 }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className="single_slider  d-flex align-items-center slider_bg_3">
          <div className="container">
            <div className="row">
              <Grid container>
                <Grid md={5}>
                  <div
                    className="slider_text"
                    style={{
                      backgroundColor: "#fff",
                      padding: "10px",
                      float: "right",
                    }}
                  >
                    <Typography
                      variant="h4"
                      style={{
                        color: blue[800],
                        fontWeight: "bold",
                        fontSize: "2em",
                      }}
                    >
                      Build a Career for the Future
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ color: blue[800], fontSize: "1.4em" }}
                    >
                      A program geared towards the preparation of young
                      Nigerians for the 21st century workplace.
                    </Typography>
                    <div className="video_service_btn">
                      <Button
                        to="/learn"
                        color="primary"
                        component={Link}
                        variant="contained"
                        style={{ padding: 15 }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </OwlCarousel> */}
    </div>
  );
}
