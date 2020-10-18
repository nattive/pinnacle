import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PlaySavedModules from "../../Courses/PlaySavedModules";
import { useParams, Switch, Route, useRouteMatch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ModulesList from "./ModulesList";
import Question from "./Question";
export const PlayEnrolledCourse = (props) => {
  const { path, url } = useRouteMatch();
  const { match } = props;
  const param = useParams();
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={7} style={{ margin: 15 }}>
          <Switch>
            <Route exact path={match.url}>
              <PlaySavedModules url={match.url} id={match.params.id} />
            </Route>
            <Route path={`${match.url}/quiz`}>
              <Question />
            </Route>
          </Switch>
        </Grid>
        <Grid item xs={12} sm={12} md={4} style={{ margin: 15 }}>
          <ModulesList match={match} />
        </Grid>
      </Grid>
    </>
  );
};

PlayEnrolledCourse.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PlayEnrolledCourse);
