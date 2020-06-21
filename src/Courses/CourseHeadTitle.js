import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Breadcrumbs } from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import HeadBar from "./HeadBar";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fffff99",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
  h1: {
    color: "white",
    textAlign: "center",
    color: "#000066",
    fontSize: "2.1em",
  },
  icon: {
    fontSize: "14px",
    marginRight: "5px",
    color: "#000066",
  },
  link: {
    color: "#000066",
    fontSize: "14px",
  },
}));
export default function CourseHeadTitle(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb" className="text-light mt-4">
          <Link to="/" className={classes.link}>
            <HomeIcon className={classes.icon} /> Home
          </Link>
          <Link to="/courses" className={classes.link}>
            <SchoolIcon className={classes.icon} /> Courses
          </Link>
          <Typography color="textPrimary" className={classes.link}>
            <ArrowForwardIosIcon className={classes.icon} />
            {props.course.title}
          </Typography>
        </Breadcrumbs>
        {/* <div className="container">
          <div className="d-flex justify-contents-between">
            <div className="m-4">
              <Typography variant="h4" className={classes.h1}>
                {props.course.title}
              </Typography>
              <Typography variant="subtitle1" color='#000066'>
                {props.course.isCareer === 1
                  ? "Career Of the future"
                  : props.course.isPO === 1
                  ? "Pinnacle online e-commerce"
                  : null}
              </Typography>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
