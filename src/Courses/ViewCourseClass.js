import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Footer from "../Layout/Footer";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import HeadBar from "./HeadBar";
import { getCourseById } from "../Patials/patials";
import SideDrawer from "./SideDrawer";
import PlayCourse from "./PlayCourse";
import { Breadcrumbs } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import CourseHeadTitle from "./CourseHeadTitle";
import { useHistory } from "react-router-dom";
var PHPUnserialize = require("php-unserialize");

export default function ViewCourseClass(props) {
  let history = useHistory();
    let { path, url } = useRouteMatch(); 
  return (
    <>
      <div className='container' >
        <main className='row'>
          <PlayCourse
            courseId={props.course}
            history={history}
            url={url}
          />
        </main>
      </div>
    </>
  );
}
