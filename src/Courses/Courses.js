import React, { Component, useEffect } from "react";
import {
  Redirect,
  Route,
  useRouteMatch,
  Switch,
  useHistory,
} from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import ViewCourse from "./ViewCourse";
import PlayModules from "./PlayModules";
import CourseComponent from "./CourseComponent";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Avatar, TextField, Snackbar } from "@material-ui/core";
import { BaseUrl } from "../Patials/BaseUrl";
import SideDrawer from "./SideDrawer";
import { Alert, AlertTitle } from "@material-ui/lab";
import { NULL_ERRORS } from "../Actions/types";
// import { verifyUserTokenAction } from "../Actions/verifyUserTokenAction";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
  listText: {
    fontSize: 12,
    padding: theme.spacing(1),
  },
}));

function Courses(props) {
  const dispatch = useDispatch();
  const {
    window,
    PO_courses,
    FREE_courses,
    isEnrolledError,
    playError,
    AuthError,
    verifyUserToken,
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  let { path, url } = useRouteMatch();
  let history = useHistory();
  return (
    <>
      {console.log(path)}
      <Switch>
        <Route exact path={`${path}`}>
          <CourseComponent />
        </Route>
        <Route path={`${path}/course-id/:id`}>
          <ViewCourse />
        </Route>
        <Route path={`${path}/play`}>
          <PlayModules />
        </Route>
      </Switch>
    </>
  );
}

const mapStateToProps = (state) => ({
  PO_courses: state.course.PO_courses.data,
  FREE_courses: state.course.FREE_courses.data,
  isEnrolledError: state.course.isEnrolledError,
  playError: state.course.playError,
  AuthError: state.auth.AuthError,
});

const mapDispatchToProps = {
  // verifyUserToken: verifyUserTokenAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
