import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import { Typography, Grid, Button } from "@material-ui/core";
import banner1 from '../../Assets/img/banner/teacher1.jpg'

export default function DashboardBanner() {
    const bg1 = {
      backgroundImage: `url(${banner1})`,
    };
    
  return (
    <div className="slider_area" >
      <OwlCarousel items={1} className="slider_active owl-carousel" loop nav>
        <div className="single_slider  d-flex align-items-center " style={bg1}>
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
                      Create with Pinnacle
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        color: "#000066",
                        fontSize: "1.4em",
                      }}
                    >
                      Join us as an instructor and turn your skills into an
                      avenue to reach learners in Africa.
                    </Typography>
                    <div className="video_service_btn">
                      <Button
                        variant="contained"
                        color="primary"
                        to="teach/instructor/auth"
                        component={Link}
                        style={{ padding: 15 }}
                      >
                        Get Started
                      </Button>
                    </div>
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
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "2em",
                      }}
                    >
                      Level Up your Skills with Pinnacle ULearn
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        color: "#fff",
                        fontSize: "1.4em",
                      }}
                    >
                      Have access to over 500,000 live and video classes on
                      diverse hard and soft skills for the 21st century
                      professional,
                    </Typography>
                    <div className="video_service_btn">
                      <Button variant="contained" style={{ padding: 15 }}>
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className="single_slider  d-flex align-items-center slider_bg_3 overlay2">
          <div className="container">
            <div className="row">
              <Grid container>
                <Grid md={5}>
                  <div className="slider_text ">
                    <Typography
                      variant="h4"
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "2em",
                      }}
                    >
                      Build a Career for the Future
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        color: "#fff",
                        fontSize: "1.4em",
                      }}
                    >
                      A program geared towards the preparation of young
                      Nigerians for the 21st century workplace.
                    </Typography>
                    <div className="video_service_btn">
                      <Button variant="contained" style={{ padding: 15 }}>
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
