import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SingleBanner.scss'
import  Slider from "react-slick"

interface SliderProps {
  image: ImageData;
  title: Text,
  subText: Text
}

export default function SingleBanner(props: SliderProps) {
  const bg1 = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    height: "550px",
    // position: 'relative'
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="slider_area">
      <Slider {...settings}>
        <div className="cpntainer-fluid w-100">
          <div className='caption'>
            <h3>{props.title}</h3>
            <p>{props.subText}</p>
          </div>
          <div style={bg1} />
        </div>
      </Slider>
    </div>
  );
}
