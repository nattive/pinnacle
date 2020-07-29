import React from "react";
import bg from "../../Assets/img/banner/banner3.jpg";
import { Typography } from "@material-ui/core";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Testimonial() {
  return (
    <div>
      <div
        id="colorlib-testimony"
        className="testimony-img"
        style={{ backgroundImage: `url(${bg})` }}
        dataStellarBackgroundRatio="0.5"
      >
        <div className="overlay"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 center-heading text-center colorlib-heading ">
              <Typography variant="h1" className="heading-big">
                What are the students says
              </Typography>
              <Typography variant="h2">
                see how other instructors are changing lives by sharing their
                expertise.
              </Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="testimony-flex">
                <OwlCarousel
                  items={5}
                  style={{ marginBottom: "15%" }}
                  className="slider_active owl-carousel"
                  loop
                  nav
                >
                  <div className="m-1 one-fifth ">
                    <span className="icon">
                      <i className="icon-quotes-left"></i>
                    </span>
                    <div className="testimony-wrap">
                      <blockquote>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </blockquote>
                      <div className="desc">
                        <div
                          className="figure-img"
                          style={{ backgroundImage: `url(${bg})` }}
                        ></div>
                        <h3>Dave Henderson</h3>
                      </div>
                    </div>
                  </div>
                  <div className="m-1 one-fifth ">
                    <span className="icon">
                      <i className="icon-quotes-left"></i>
                    </span>
                    <div className="testimony-wrap">
                      <blockquote>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </blockquote>
                      <div className="desc">
                        <div
                          className="figure-img"
                          style={{ backgroundImage: `url(${bg})` }}
                        ></div>
                        <h3>Dave Henderson</h3>
                      </div>
                    </div>
                  </div>
                  <div className="m-1 one-fifth ">
                    <span className="icon">
                      <i className="icon-quotes-left"></i>
                    </span>
                    <div className="testimony-wrap">
                      <blockquote>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </blockquote>
                      <div className="desc">
                        <div
                          className="figure-img"
                          style={{ backgroundImage: `url(${bg})` }}
                        ></div>
                        <h3>Dave Henderson</h3>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
