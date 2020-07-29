import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { CircularProgress } from "@material-ui/core";
import SingleCourseItem from "../SingleCourseItem";
import { connect } from "react-redux";
import {
  fetchPOCourses,
  fetchCOTFCourses,
  fetchFREECourses,
  getEnrolledCourse,
  enrollCourse,
} from "../../Actions/courseAction";
import { useEffect } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));
function CourseRow(props) {
  useEffect(() => {
    props.getEnrolledCourse();
  }, [])
  useEffect(() => {
    props.user && props.user.account_type === "isPO"
      ? props.fetchPOCourses(5)
      : props.user.account_type === "isCareer"
      ? props.fetchCOTFCourses(5)
      : props.fetchFREECourses(5);
  }, [props.user]);
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      {/* <AppBar position="static" color="default"> */}
      {props.user !== undefined && (
        <>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            className="w-100"
          >
            <Tab label="Courses you are following" {...a11yProps(0)} />
            <Tab label="Top Rated Courses" {...a11yProps(1)} />
            <Tab label="Courses You might like" {...a11yProps(2)} />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div className="row">
                {props.ENROLLED_courses.length > 0 ? (
                  props.ENROLLED_courses.map((item, key) => (
                    <div key={key} className="col-xs-4 col-md-3">
                      <SingleCourseItem course={item} />{" "}
                    </div>
                  ))
                ) : (
                  <p>You are not following any course</p>
                )}
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div className="row">
                {props.user.account_type === "isPO" ? (
                  props.PO_courses !== undefined &&
                  props.PO_courses.length > 0 ? (
                    props.PO_courses.map((item, key) => (
                      <div key={key} className="col-xs-4 col-md-2">
                        <SingleCourseItem course={item} />{" "}
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="mx-auto text-center mt-4">
                        {/* <CircularProgress /> */}
                        <p>No Courses Here...</p>
                      </div>
                    </>
                  )
                ) : props.user.account_type === "isCareer" ? (
                  props.COTF_courses !== undefined &&
                  props.COTF_courses.length !== 0 ? (
                    props.COTF_courses.map((item, key) => (
                      <div key={key} className="col-xs-4 col-md-2">
                        <SingleCourseItem course={item} />{" "}
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="mx-auto text-center mt-4">
                        {/* <CircularProgress /> */}
                        <p>No Courses Here...</p>
                      </div>
                    </>
                  )
                ) : null}
              </div>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <p>No Courses Here...</p>
            </TabPanel>
          </SwipeableViews>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  PO_courses: state.course.PO_courses.data,
  FREE_courses: state.course.FREE_courses.data,
  COTF_courses: state.course.COTF_courses.data,
  ENROLLED_courses: state.course.ENROLLED_courses,
  account_type: state.auth.account_type,
});

const mapDispatchToProps = {
  fetchPOCourses,
  fetchCOTFCourses,
  fetchFREECourses,
  getEnrolledCourse,
  enrollCourse,
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseRow);
