import React from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Services from "../Home/Services";
import Breadcrumb from "../../Layout/Breadcrumb";
import WhyUs from "./WhyUs";
import Countdown from "../Home/Countdown";
import Team from "./Team";
import NavBarHeader from "../Home/NavBarHeader";

export default function About() {
  return (
    <>
      <Header />
      <NavBarHeader />
      <Breadcrumb title="About Us" />
      <WhyUs />
      <Services />
      <Countdown />
      <Team />
      <Footer />
    </>
  );
}
