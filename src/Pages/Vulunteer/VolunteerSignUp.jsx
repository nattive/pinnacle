import React from "react";
import NavBarHeader from "../Home/NavBarHeader";
import { Grid, Typography } from "@material-ui/core";
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
    <>
      <NavBarHeader />
      <Route exact path={`${path}`}>
        <Intro />
      </Route>
      <Route path={`${path}/signup`}>
        <SignupForm />
      </Route>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(MenteeSignUp);