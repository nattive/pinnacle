import React, { Component } from "react";
import { connect } from "react-redux";
import BannerSlider from "./BannerSlider";
import Service from "./Service";
import HelpSection from "./HelpSection";
import CTAsection from "./CTAsection";
import Testimonial from "../Home/Testimonial";
import SingleBanner from "../../General Components/SingleBanner";

export const Home = () => {
  return (
    <>
      <SingleBanner title="Reachout to millions of African Students" subText="With our easy-to-use guide, Make course naterials with ease" />
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
