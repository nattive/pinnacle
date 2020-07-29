import React from "react";
import quote from "../../Assets/img/svg_icon/quote.svg";
import { Container, Typography } from "@material-ui/core";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Testimonial() {
  return (
    <div className="testimonial_area  ">
      <div className="container">
        <div className="row mb-4">
          <div className="col-xs-12 text-center mx-auto">
            <h3 className="text-center">
              See what Clients and students are saying about us
            </h3>
          </div>
        </div>
        <Container>
          <OwlCarousel
            items={4}
            className="slider_active owl-carousel"
            loop
            nav
            autoplay
          >
            <div className="single_carousel">
              <div className="single_testmonial text-center">
                <div className="quote">
                  <img src={quote} alt="quote" />
                </div>
                <Typography variant='body1'>
                  Donec imperdiet congue orci consequat mattis.Donec rutrum
                  porttitor sollicitudin.Pellentesque id dolor tempor
                  sapien feugiat ultrices nec sed neque. Fusce ac mattis
                  nulla.Morbi eget ornare dui.
                </Typography>
                <div className="testmonial_author">
                  <div className="thumb">
                    <img src="img/case/testmonial.png" alt="" />
                  </div>
                  <h3> Robert Thomson </h3> <span> Business Owner </span>
                </div>
              </div>
            </div>
            <div className="single_carousel">
              <div className="single_testmonial text-center">
                <div className="quote">
                  <img src={quote} alt="quote" />
                </div>
                <Typography variant='body1'>
                  Donec imperdiet congue orci consequat mattis.Donec rutrum
                  porttitor sollicitudin.Pellentesque id dolor tempor
                  sapien feugiat ultrices nec sed neque. Fusce ac mattis
                  nulla.Morbi eget ornare dui.
                </Typography>
                <div className="testmonial_author">
                  <div className="thumb">
                    <img src="img/case/testmonial.png" alt="" />
                  </div>
                  <h3> Robert Thomson </h3> <span> Business Owner </span>
                </div>
              </div>
            </div>
            <div className="single_carousel">
              <div className="single_testmonial text-center">
                <div className="quote">
                  <img src={quote} alt="quote" />
                </div>
                <Typography variant='body1'>
                  Donec imperdiet congue orci consequat mattis.Donec rutrum
                  porttitor sollicitudin.Pellentesque id dolor tempor
                  sapien feugiat ultrices nec sed neque. Fusce ac mattis
                  nulla.Morbi eget ornare dui.
                </Typography>
                <div className="testmonial_author">
                  <div className="thumb">
                    <img src="img/case/testmonial.png" alt="" />
                  </div>
                  <h3> Robert Thomson </h3> <span> Business Owner </span>
                </div>
              </div>
            </div>
            <div className="single_carousel">
              <div className="single_testmonial text-center">
                <div className="quote">
                  <img src={quote} alt="quote" />
                </div>
                <Typography variant='body1'>
                  Donec imperdiet congue orci consequat mattis.Donec rutrum
                  porttitor sollicitudin.Pellentesque id dolor tempor
                  sapien feugiat ultrices nec sed neque. Fusce ac mattis
                  nulla.Morbi eget ornare dui.
                </Typography>
                <div className="testmonial_author">
                  <div className="thumb">
                    <img src="img/case/testmonial.png" alt="" />
                  </div>
                  <h3> Robert Thomson </h3> <span> Business Owner </span>
                </div>
              </div>
            </div>
            <div className="single_carousel">
              <div className="single_testmonial text-center">
                <div className="quote">
                  <img src={quote} alt="quote" />
                </div>
                <Typography variant='body1'>
                  Donec imperdiet congue orci consequat mattis.Donec rutrum
                  porttitor sollicitudin.Pellentesque id dolor tempor
                  sapien feugiat ultrices nec sed neque. Fusce ac mattis
                  nulla.Morbi eget ornare dui.
                </Typography>
                <div className="testmonial_author">
                  <div className="thumb">
                    <img src="img/case/testmonial.png" alt="" />
                  </div>
                  <h3> Robert Thomson </h3> <span> Business Owner </span>
                </div>
              </div>
            </div>
            <div className="single_carousel">
              <div className="single_testmonial text-center">
                <div className="quote">
                  <img src={quote} alt="quote" />
                </div>
                <Typography variant='body1'>
                  Donec imperdiet congue orci consequat mattis.Donec rutrum
                  porttitor sollicitudin.Pellentesque id dolor tempor
                  sapien feugiat ultrices nec sed neque. Fusce ac mattis
                  nulla.Morbi eget ornare dui.
                </Typography>
                <div className="testmonial_author">
                  <div className="thumb">
                    <img src="img/case/testmonial.png" alt="" />
                  </div>
                  <h3> Robert Thomson </h3> <span> Business Owner </span>
                </div>
              </div>
            </div>
            
          </OwlCarousel>
        </Container>
      </div>
    </div>
  );
}
