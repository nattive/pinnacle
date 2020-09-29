import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import "../Assests/css/style.css";
import bg1 from "../Assests/images/img_bg_1.jpg";
import bg2 from "../Assests/images/img_bg_2.jpg";
import HeadSection from "../Components/HeadSection";
import HeadNotification from "../Components/HeadNotification";
import CategoryList from "../Components/CategoryList";
import CourseSlide from "../Components/CourseSlide";
import CareerIntro from "../Components/CareerIntro";
import Footer from "../../../Layout/Footer";
import { Divider } from "@material-ui/core";
import UlearnIntro from "../Components/UlearnIntro";
import Services from "../../Home/Services";
import OtherCoursesServices from "../Components/OtherCoursesServices";
// import Slider from "../Components/Slider";
import Slider from "../../Home/Slider";
import NavBarHeader from "../../Home/NavBarHeader";
import Banner from "./Banner";
import Search from "./Search";
export default function LandingPage() {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div>
        <NavBarHeader />
        <Banner />
        <Search />
        <CategoryList />
        <CourseSlide />
        <Divider className="m-4" />
        <CareerIntro />
        <Divider className="m-4" />
        <OtherCoursesServices />
        {/* <Divider className="m-4" /> */}
        <UlearnIntro />
      </div>
    </>
  );
}
