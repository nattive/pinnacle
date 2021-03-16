import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, Button } from "@material-ui/core";
import banner1 from "../Assets/img/banner/teacher1.jpg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SingleBanner() {
  const bg1 = {
    backgroundImage: `url(${banner1})`,
    backgroundSize: "cover",
    height: "500px",
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
          <div style={bg1} />
        </div>
      </Slider>
    </div>
  );
}

SingleBanner.propTypes = {
  location: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBanner);
