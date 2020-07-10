import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import bg1 from '../Assests/images/img_bg_1.jpg'
export default function HeadSection() {
  return (
    <div id="page">
      <aside id="colorlib-hero">
        <div className="flexslider">
          <ul className="slides">
            <OwlCarousel
              items={1}
              className="slider_active owl-carousel"
              loop
              nav
              autoplay
            >
              <li
                style={{
                  backgroundImage: `url(${bg1})`
              >
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-8 col-sm-12 col-md-offset-2 col-xs-12 col-md-pull-1 slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h2>You only have to know one thing</h2>
                          <h1>Best Online Learning System</h1>
                          <p>
                            <a
                              href="https://vimeo.com/channels/staffpicks/93951774"
                              className="btn btn-primary btn-lg popup-vimeo"
                            >
                              <span className="icon">
                                <i className="icon-play3"></i>
                              </span>{" "}
                              Start Learning Now!
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </OwlCarousel>
          </ul>
        </div>
      </aside>
    </div>
  );
}
