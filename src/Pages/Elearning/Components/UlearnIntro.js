import React from "react";
import imgClass2 from "../Assests/images/classes-3.jpg";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  bigText: {
    position: "absolute",
    bottom: "0px",
    left: "10px",
    color: "rgba(0, 0, 0, 0.05)",
    zIndex: "-1",
    fontWeight: "700",
    fontSize: "60px",
  },
});
export default function UlearnIntro() {
  const classes = useStyles();

  return (
    <div className="colorlib-counters mt-4" style={{ top: "2em" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="about-desc">
              <div
                className="w-100 p-4"
                style={{ backgroundImage: `url(${imgClass2})`, height: '300px', backgroundSize: 'cover' }}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-12 colorlib-heading">
                <h3 className="course-heading">Pinnacle Ulearn</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>
                  <strong>Learn with ULearn</strong>
                </p>
                <p>
                  We offer live and video classes on diverse hard and soft
                  skills for the 21st century professional, entrepreneur and
                  freelancer
                </p>
              </div>
            </div>
            <Button
              component={Link}
              to="/auth/signin"
              variant="contained"
              color="primary"
              className="btn btn-primary mt-4 btn-outline btn-lg btn-discover popup-vimeo"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
