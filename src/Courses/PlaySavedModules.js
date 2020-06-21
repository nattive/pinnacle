import React, { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles, Button, Paper, Typography } from "@material-ui/core";
import Question from "./Question";
import { useHistory } from "react-router-dom";
import { displayQuestions } from "../Actions/moduleActions";
import { useSelector } from "react-redux";
var parse = require("html-react-parser");

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PlaySavedModules(props) {
  const showQuestion = useSelector((state) => state.module.showQuestions);
  let history = useHistory();
  const classes = useStyles();
  const { state } = history.location;
  if (state === undefined) {
    history.push("/e-learning/courses");
  }
  return (
    <div>
      <div className={showQuestion ? "d-none" : "d-block"}>
        <VideoPlayer course={state} />
        <h4 className="mt-4 mb-4 p-4">{state.title}</h4>
        <Paper elevation={0} className='p-3'>
          <Typography variant="h5"> Objective </Typography>
          <Typography variant="body2"> {state.objective} </Typography>
        </Paper>
        <Alert severity="info" className="m-4 p-4">
          <AlertTitle>Prerequisite</AlertTitle>
          {state.prerequisite}
        </Alert>
        <Typography className=" mt-4 mb-4 p-4" variant="body2">
          {parse(state.text)}
        </Typography>
        {state.quiz ? (
          <Button size="large" variant="primary" onClick={displayQuestions}>
            Take Module Quiz
          </Button>
        ) : null}
      </div>

      {showQuestion && <Question question={state.quiz} course={state} />}
    </div>
  );
}
