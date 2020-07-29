import React, { Component } from "react";
import { connect } from "react-redux";
import BannerSlider from "./BannerSlider";
import Header from "../../Layout/Header";
import NavBarHeader from "../Home/NavBarHeader";
import Service from "./Service";
import HelpSection from "./HelpSection";
import Testimonial from "./Testimonial";
import CTAsection from "./CTAsection";

export const Home = () => {
  return (
    <>
      <BannerSlider />
      <Service />
      <HelpSection />
      <Testimonial />
      <CTAsection />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
