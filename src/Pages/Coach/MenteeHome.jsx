import React, { Component } from "react";
import Hidden from "@material-ui/core/Hidden";
import { connect } from "react-redux";
import NavBarHeader from "../Home/NavBarHeader";
import { Grid } from "@material-ui/core";
import "./MenteeHome.css";
import { Route, useRouteMatch, Link, useHistory } from "react-router-dom";
import HomeView from "./HomeView";
import MessageView from "./MessageView";
import ResourceView from "./ResourceView";
import { userNotification } from "../../Actions/generalAction";
import { useEffect } from "react";

const MenteeHome = (props) => {
  useEffect(() => {
    props.userNotification();
  }, []);

  const { url, path } = useRouteMatch();
  let history = useHistory();
  return (
    <>
      <NavBarHeader />
      <Grid container>
        <Hidden smDown>
          <Grid item md={2}>
            <div className="action-center">
              <h4>Action Center</h4>
              <ul className="menu-list">
                <li onClick={() => history.push(`${url}`)}>Home</li>
                <li onClick={() => history.push(`${url}/message`)}>Message</li>
                {/* <li>Notification</li> */}
                <li onClick={() => history.push(`${url}/resources`)}>
                  Resources
                </li>
                <li>Preference</li>
                <li> Assigned coach</li>
              </ul>
            </div>
          </Grid>
        </Hidden>
        <Grid item md={9} sm={12}>
          <div className="m-4">
            <Route exact path={`${path}`}>
              <HomeView />
            </Route>
            <Route exact path={`${path}/message`}>
              <MessageView />
            </Route>
            <Route path={`${path}/resources`}>
              <ResourceView />
            </Route>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  notificationError: state.general.notificationError,
  notification: state.general.notification,
});

const mapDispatchToProps = {
  userNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenteeHome);
