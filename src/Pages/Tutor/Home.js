import React, { Component } from "react";
import { connect } from "react-redux";
import BannerSlider from "./BannerSlider";
import Header from "../../Layout/Header";
import NavBarHeader from "../Home/NavBarHeader";
import Service from "./Service";
import HelpSection from "./HelpSection";
import CTAsection from "./CTAsection";
import Testimonial from "../Home/Testimonial";

export const Home = () => {
  return (
    <>
      <BannerSlider />
      <Service />
      <HelpSection />
      <Testimonial location="Tutor" />
      <CTAsection />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
