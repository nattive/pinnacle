import React from "react";
import NavBarHeader from "../Home/NavBarHeader";
import Slider from "../Home/Slider";
import { Grid, Typography, Hidden } from "@material-ui/core";
import volunteer from "../../Assets/img/Pinnacle/oneOnOne.png";
import helpingHands from "../../Assets/img/Pinnacle/helpingHands.jpg";
import { Button } from "semantic-ui-react";
import { Link, useRouteMatch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Banner from "./Banner";
import Testimonial from "../Home/Testimonial";
export default function Home() {
  let { url } = useRouteMatch();
  return (
    <div>
      <NavBarHeader />
      <Banner />
      <Container>
        <Grid container style={{ marginTop: "100px" }}>
          <Hidden smDown>
            <Grid item xs={12} md={6}>
              <img
                src={volunteer}
                alt="oneOnOne.png"
                className="w-75 p-2 img-responsive justify-self-center text-center"
              />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={6}>
            <div style={{ marginTop: "50px" }}>
              <h2 className="text-center p-2 mx-auto">Get a personal Coach</h2>
              <Typography className="text-center p-4 mx-auto" variant="h5">
                Receive one-on-one personal training and coaching from our
                diverse range of industry professionals and entrepreneurs.
                <br />
                <div className="col-md-12 text-center mt-4">
                  <p>
                    <Link
                      to={`${url}/signUp`}
                      className="btn btn-primary btn-outline btn-lg btn-discover popup-vimeo"
                    >
                      <span className="icon"></span>
                      Get started, Get a coach
                    </Link>
                  </p>
                </div>
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: "30px" }}>
          <Grid item xs={12} md={6}>
            <div style={{ marginTop: "50px" }}>
              <h2 className="text-center p-2 mx-auto">Sign up as a coach</h2>
              <Typography className="text-center p-4 mx-auto" variant="h5">
                Are you a life coach? Psychologist or any related fields? would
                you like to take up the challenge, mentor or be a personal
                trainer?
                <br />
                <div className="col-md-12 text-center mt-4">
                  <p>
                    <Link
                      to={`${url}/signUp`}
                      className="btn btn-primary btn-outline btn-lg btn-discover popup-vimeo"
                    >
                      <span className="icon"></span>
                      Sign up as a coach
                    </Link>
                  </p>
                </div>
              </Typography>
            </div>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} md={6}>
              <img
                src={helpingHands}
                alt="helpingHands.png"
                className="w-75 p-2 img-responsive justify-self-center text-center"
              />
            </Grid>
          </Hidden>
          <Testimonial location="Coach" />
        </Grid>
      </Container>
    </div>
  );
}
