import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PlaySavedModules from "../../Courses/PlaySavedModules";
import { useParams } from "react-router-dom";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ModulesList from "./ModulesList";
export const PlayEnrolledCourse = (props) => {
  const { match } = props;
  const param = useParams();
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={7} style={{ margin: 15 }}>
          <PlaySavedModules id={match.params.id} />
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
