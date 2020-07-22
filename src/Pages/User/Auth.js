import React, { Component } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import SignInForm from "./SignInForm";
import HeadNotification from "../Elearning/Components/HeadNotification";
import HeadSection from "../Elearning/Components/HeadSection";
import SignUp from "./SignUp";
import Header from "../../Layout/Header";
import NavBarHeader from "../Home/NavBarHeader";
import "./Auth.css";
import Footer from "../../Layout/Footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class Auth extends Component {
  render() {
    return (
      <>
        <div className="authBackground overlay2">
          <NavBarHeader />
          <div className="container ">
            <div
              className="row  align-items-center"
              style={{ marginTop: "10%" }}
            >
              <div className="col-xs-12 col-sm-12 col-md-8">
                <div className="mx-auto ml-4">
                  <OwlCarousel
                    items={1}
                    className="slider_active owl-carousel"
                    loop
                    nav
                    autoplay
                  >
                    <div className="single_slider">
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
                        style={{ color: "#fff", fontSize: "1.4em" }}
                      >
                        Have access to over 500,000 live and video classes on
                        diverse hard and soft skills for the 21st century
                        professional,
                      </Typography>
                    </div>
                    <div className="single_slider">
                      <Typography
                        variant="h4"
                        style={{
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: "2em",
                        }}
                      >
                        Top resources to build your future career
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{ color: "#fff", fontSize: "1.4em" }}
                      >
                        Have access to over 500,000 live and video classes on
                        diverse hard and soft skills for the 21st century
                        professional,
                      </Typography>
                    </div>
                    <div className="slider_text single_slider">
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
                        style={{ color: "#fff", fontSize: "1.4em" }}
                      >
                        A program geared towards the preparation of young
                        Nigerians for the 21st century workplace.
                      </Typography>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-md-offset-1 bg-light p-4 mb-4">
                <SignUp />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
