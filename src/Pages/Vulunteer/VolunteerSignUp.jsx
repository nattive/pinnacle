import React from "react";
import NavBarHeader from "../Home/NavBarHeader";
import { Grid, Typography } from "@material-ui/core";
import volunteer from "../../Assets/img/svg_icon/vulunteer.png";
import Auth from "../User/SignUp"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Intro from "./Intro";
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import SingleBanner from "../../General Components/SingleBanner";

 function MenteeSignUp(props) {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <NavBarHeader />
      {/* <SingleBanner /> */}
      <Grid container>
        <Grid item xs={12} md={6} style={{ marginTop: "7em" }}>
          <img src={volunteer} className="w-100 mx-auto" />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          alignContent="center"
          style={{ marginTop: "5em" }}
        >
          <Route exact path={`${path}`}>
            <Intro />
          </Route>
          <Route path={`${path}/signup`}>
            <SignupForm />
          </Route>
          {/* <Route path={`${path}/auth`}>
            <div className="my-auto mx-auto p-4">
              <Auth />
            </div>
          </Route> */}
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(MenteeSignUp);