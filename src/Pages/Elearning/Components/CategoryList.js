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
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

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
      <div className="container-fluid">
        <div className="section_title text-left m-4 w-75 mt-5">
          <h3>Top categories</h3>
          <Divider className="m-3" variant="middle" color="primary" />
        </div>
        <div className="row">
          <div className="col-md-12 services-wrap">
            <div className="row">
              {props.subCategories &&
              props.subCategories.data &&
              props.subCategories.data.length > 0
                ? props.subCategories.data.map((sub) => (
                    <div className=" col-md-3 text-center">
                      <a href="" className="services">
                        <span className="icon">
                          <i>
                            <BusinessIcon fontSize="large" />
                          </i>
                        </span>
                        <div className="desc">
                          <h3>{sub.name}</h3>
                        </div>
                      </a>
                    </div>
                  ))
                : "...loading"}
            </div>
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
