import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

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
        <div className="single_slider  d-flex align-items-center slider_bg_1 overlay2">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="slider_text ">
                  <h3>
                    Let's help you <br /> Grow!
                  </h3>
                  <div className="video_service_btn">
                    <Link to="/about" className="boxed-btn3">
                     Our Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single_slider  d-flex align-items-center slider_bg_2 overlay2">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="slider_text float-right">
                  <h3 style={{ textAlign: "right" }}>
                    Level Up your Skills <br /> with Pinnacle <br /> e-learning
                  </h3>
                  <div className="video_service_btn  float-right">
                    <Link to="/e-learning" className="boxed-btn3">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
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
