import React from "react";
import "../Assests/css/style.css";
import "../Assests/css/icomoon.css";
import BusinessIcon from "@material-ui/icons/Business";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import BugReportIcon from "@material-ui/icons/BugReport";
import MoneyIcon from "@material-ui/icons/Money";
import StyleIcon from "@material-ui/icons/Style";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
export default function CategoryList() {
  return (
    <div id="colorlib-services">
      <div className="container">
        <div className="row">
          <div className="col-md-12 services-wrap">
            <div className="row">
              <div className="col-md-2 col-sm-6 text-center">
                <a href="services.html" className="services">
                  <span className="icon">
                    <i>
                      <BusinessIcon fontSize="large" />
                    </i>
                  </span>
                  <div className="desc">
                    <h3>
                      Business <br />
                      Class
                    </h3>
                  </div>
                </a>
              </div>
              <div className="col-md-2 col-sm-6 text-center">
                <a href="services.html" className="services">
                  <span className="icon">
                    <i>
                      <DeveloperBoardIcon fontSize='large' />
                    </i>
                  </span>
                  <div className="desc">
                    <h3>
                      Personal <br />
                      Development
                    </h3>
                  </div>
                </a>
              </div>
              <div className="col-md-2 col-sm-6 text-center">
                <a href="services.html" className="services">
                  <span className="icon">
                    <i>
                      <BugReportIcon fontSize='large' />
                    </i>
                  </span>
                  <div className="desc">
                    <h3>
                      Technology
                      <br />
                      development
                    </h3>
                  </div>
                </a>
              </div>
              <div className="col-md-2 col-sm-6 text-center">
                <a href="services.html" className="services">
                  <span className="icon">
                    <i>
                      <MoneyIcon fontSize='large' />
                    </i>
                  </span>
                  <div className="desc">
                    <h3>Marketing <br />
                    <br />
                    </h3>
                  </div>
                </a>
              </div>
              <div className="col-md-2 col-sm-6 text-center">
                <a href="services.html" className="services">
                  <span className="icon">
                    <i>
                      <StyleIcon fontSize='large' />
                    </i>
                  </span>
                  <div className="desc">
                    <h3>Lifestyle <br /> <br /></h3>
                  </div>
                </a>
              </div>
              <div className="col-md-2 col-sm-6 text-center">
                <a href="services.html" className="services">
                  <span className="icon">
                    <i><MoreHorizIcon /></i>
                  </span>
                  <div className="desc">
                    <h3>
                     View All <br />
                      Categories
                    </h3>
                  </div>
                </a>
              </div>
            </div>
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
