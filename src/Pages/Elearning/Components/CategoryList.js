import React from "react";
import "../Assests/css/style.css";
import "../Assests/css/icomoon.css";
import BusinessIcon from "@material-ui/icons/Business";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import BugReportIcon from "@material-ui/icons/BugReport";
import MoneyIcon from "@material-ui/icons/Money";
import StyleIcon from "@material-ui/icons/Style";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fetchSubCategory } from "../../../Actions/courseAction";
import { useEffect } from "react";
import { connect } from "react-redux";

function CategoryList(props) {
  useEffect(() => {
    props.fetchSubCategory();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="colorlib-services">
      <div className="container">
        <div className="col-md-12 colorlib-heading center-heading text-center">
          {/* <h1 className="heading-big">Categories</h1> */}
          <h2>Top Topics For you</h2>
        </div>
        <div className="row">
          <div className="col-md-12 services-wrap">
            <Carousel responsive={responsive}>
              {props.subCategories &&
              props.subCategories.data &&
              props.subCategories.data.length > 0
                ? props.subCategories.data.map((sub) => (
                    <div className=" text-center">
                      <a href="services.html" className="services">
                        {/* <span className="icon">
                    <i>
                      <BusinessIcon fontSize="large" />
                    </i>
                  </span> */}
                        <div className="desc">
                          <h3>{sub.name}</h3>
                        </div>
                      </a>
                    </div>
                  ))
                : "...loading"}
            </Carousel>
          </div>
          <div className="col-md-12 text-center">
            <p>
              <a
                href="https://vimeo.com/channels/staffpicks/93951774"
                className="btn btn-primary btn-outline btn-lg btn-discover popup-vimeo"
              >
                <span className="icon">
                  <i className="icon-play3"></i>
                </span>
                Discover Courses
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    subCategories: state.course.subCategories,
  };
}

const mapDispatchToProps = {
  fetchSubCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
