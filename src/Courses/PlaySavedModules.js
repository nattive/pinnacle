import React, { useState } from "react";
import VideoPlayer from "../General Components/VideoPlayer/VideoPlayer";
import { Alert, AlertTitle, Skeleton } from "@material-ui/lab";
import { makeStyles, Button, Paper, Typography } from "@material-ui/core";
import Question from "./Question";
import { useHistory } from "react-router-dom";
import { displayQuestions } from "../Actions/moduleActions";
import { showNodule } from "../Actions/courseAction";

import { useSelector, connect } from "react-redux";
import { useEffect } from "react";
var parse = require("html-react-parser");

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function PlaySavedModules(props) {
  useEffect(() => {
    props.showNodule(props.id);
  }, []);
  let history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <div className={props.showQuestion ? "d-none" : "d-block"}>
        {props.moduleToPlay ? (
          <>
            <VideoPlayer course={props.moduleToPlay} />
            <h4 className="mt-4 mb-4 p-4">{props.moduleToPlay.title}</h4>
            <Paper elevation={0} className="p-3">
              <Typography variant="h5"> Objective </Typography>
              <Typography variant="body2">
                {" "}
                {props.moduleToPlay.objective}{" "}
              </Typography>
            </Paper>
            <Alert severity="info" className="m-4 p-4">
              <AlertTitle>Prerequisite</AlertTitle>
              {props.moduleToPlay.prerequisite}
            </Alert>
            <Typography className=" mt-4 mb-4 p-4" variant="body2">
              {props.moduleToPlay.text ? (
                parse(props.moduleToPlay.text)
              ) : (
                <>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                </>
              )}
            </Typography>
            {props.moduleToPlay.quiz ? (
              <Button size="large" variant="primary" onClick={displayQuestions}>
                Take Module Quiz
              </Button>
            ) : null}
          </>
        ) : (
          <Skeleton />
        )}
      </div>

      {/* {props. && <Question question={state.quiz} course={state} />} */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  showQuestions: state.module.showQuestions,
  moduleToPlay: state.course.moduleToPlay,
});

export default connect(mapStateToProps, { showNodule })(PlaySavedModules);
