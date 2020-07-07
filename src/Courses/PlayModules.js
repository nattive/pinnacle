import React, { useState } from "react";
import { useHistory, Switch, Route, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { Alert, AlertTitle, Skeleton } from "@material-ui/lab";
import HeadBar from "./HeadBar";
import {
  Paper,
  Tabs,
  Typography,
  Avatar,
  Divider,
  Box,
  Button,
  Icon,
} from "@material-ui/core";
import SideTab from "./SideTab";
import ReactPlaceholder from "react-placeholder/lib";
import Footer from "../Layout/Footer";
import PlaySavedModules from "./PlaySavedModules";
var parse = require("html-react-parser");

export default function PlayModules() {
  let history = useHistory();
  const [moduleIndex, setModuleIndex] = useState(0);
  const playing = useSelector((state) => state.course.playCourse);
  const modules = useSelector((state) => state.course.playModuleQueue);
  const error = useSelector((state) => state.course.playError);
  const [Disable, setDisable] = useState(false);
  const [value, setValue] = React.useState(2);
  const [backDisable, setBackDisable] = useState(true);
  const [HasQuiz, setHasQuiz] = useState(false);
  const { url, path } = useRouteMatch();
  const [nextBtn, setNextBtn] = useState(
    useSelector((state) => state.course.playModuleQueue)
      ? modules[moduleIndex]
        ? modules[moduleIndex].title
        : "Play Course"
      : "Finish"
  );
  const [backBtn, setbackBtn] = useState(
    useSelector((state) => state.course.playModuleQueue)
      ? modules[moduleIndex - 1]
        ? modules[moduleIndex - 1].title
        : "Play Course"
      : ""
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const nextModule = () => {
    const length = modules.length;
    if (moduleIndex >= length) {
      setDisable(false);
    } else {
      // setBackDisable(false);
      setModuleIndex((prev) => prev + 1);
      console.log(modules[moduleIndex]);
      setNextBtn(
        modules[moduleIndex + 1]
          ? `Next: ${modules[moduleIndex + 1].title}`
          : "Finish Course"
      );
      setbackBtn(
        modules[moduleIndex - 1]
          ? modules[moduleIndex - 1].title
          : "No more modules"
      );
      setBackDisable(modules[moduleIndex - 1] ? false : true);

      history.push({
        pathname: `${url}/modules`,
        state: modules[moduleIndex],
      });
    }
    console.log(length);
  };

  const prevModule = () => {
    const length = modules.length;
    if (moduleIndex === 0) {
      setBackDisable(true);
    } else {
      setBackDisable(false);
      setModuleIndex((prev) => prev - 1);
      console.log(modules[moduleIndex]);
      setbackBtn(modules[moduleIndex - 1].title);

      history.push({
        pathname: `${url}/modules`,
        state: modules[moduleIndex],
      });
    }
  };

  return (
    <div className="container-fluid bg-light">
      <div className="mt-2">
        {error === "" ? (
          playing.id !== undefined ? (
            <>
              <div className="row no-gutters">
                <div className="col-sm-12 col-md-8">
                  <Modules />
                  <div className="row">
                    <Button
                      variant="contained"
                      color="primary"
                      className={
                        moduleIndex <= 1
                          ? "d-none m-4 col-md-4 col-xs-12"
                          : "m-4 col-md-4 col-xs-12"
                      }
                      size="large"
                      disabled={backDisable}
                      onClick={prevModule}
                    >
                      {`Previous: ${backBtn}`}
                    </Button>
                    <Button
                      variant="contained"
                      disabled={Disable}
                      color="primary"
                      size="large"
                      className="m-4 col-md-4 col-xs-12"
                      onClick={nextModule}
                      // disabled={!modules[moduleIndex - 1]}
                    >
                      {nextBtn}
                    </Button>{" "}
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 ">
                  <SideTab />
                </div>
              </div>
            </>
          ) : (
            <>
              <Skeleton variant="rect" fluid width={700} height={500} />
              <hr className="my-4" />
              <Box>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
              </Box>
            </>
          )
        ) : (
          <Alert severity="error">{error}</Alert>
        )}
      </div>
      <Footer />
    </div>
  );
}

function CourseIntro() {
  const [moduleIndex, setModuleIndex] = useState(-1);

  const playing = useSelector((state) => state.course.playCourse);
  return (
    <div>
      <div className={moduleIndex === -1 ? "d-block " : " d-none"}>
        <VideoPlayer course={playing} />
        <Typography
          variant="h5"
          className="mb-4 mt-4"
          style={{ fontVariant: "capitalize" }}
        >
          {playing.title}
        </Typography>
        <div className="d-flex mb-4" style={{ alignItems: "center" }}>
          <Avatar style={{ width: "1.5em", height: "1.5em" }} />
          <Typography variant="subtitle1" className="ml-2">
            Tutor Name
          </Typography>
        </div>
        {playing.objective && (
          <>
            <Divider />
            <Alert severity="info">
              <AlertTitle>Objective</AlertTitle>
              {parse(playing.objective)}
            </Alert>
          </>
        )}
        {playing.description && (
          <>
            <Divider />
            <Typography variant="h5" className="p-2">
              Description
            </Typography>
            <Divider />
            <Typography
              variant="body1"
              className="mt-2 mb-4 p-2"
              style={{ textJustify: "justify" }}
            >
              {parse(playing.description)}
            </Typography>
          </>
        )}
      </div>
    </div>
  );
}

const Modules = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <CourseIntro />
      </Route>
      <Route path={`${path}/modules`}>
        {/* <p>play</p> */}
        <PlaySavedModules />
      </Route>
      <Route path={`${path}/play/:course`}>
        <PlayModules />
      </Route>
    </Switch>
  );
};
