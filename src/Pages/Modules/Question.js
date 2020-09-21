import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  Container,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Box,
  CircularProgress,
  Grid,
  Backdrop,
} from "@material-ui/core";
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import { storeQuestionResult } from "../../Actions/moduleActions";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    marginTop: 10,
  },
  media: {
    height: 140,
  },
  backdrop: {
    zIndex: 99999,
    color: "#fff",
  },
});
const Question = (props) => {
  const classes = useStyles();
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const handleClose = () => {
    setOpenDialog(false);
  };
  const [answerArray, setAnswerArray] = useState(
    new Array(
      props.moduleToPlay.course_questions
        ? props.moduleToPlay.course_questions.length
        : 0
    )
  );
  const [selectAnswer, setSelectAnswer] = useState(
    new Array(
      props.moduleToPlay.course_questions
        ? props.moduleToPlay.course_questions.length
        : 0
    )
  );
  const [percentage, setPercentage] = useState(0);
  const [wrongAnswer, setwrongAnswer] = useState(0);
  const handleSelectAnswer = (index, answer, selectedOption) => {
    setTotal(answer === selectedOption ? total + 5 : total + 0);
    selectAnswer[index] = selectedOption;
    answerArray[index] = answer;
  };

  useEffect(() => {
    setOpenDialog(props.showResult);
  }, [props.showResult]);

  const handleAnswer = () => {
    setSubmitDisabled(true);
    const totalQuestion = props.moduleToPlay.course_questions.length;
    const totalQuestionAccum = totalQuestion * 5;
    /**
     * Get the total possible getElementsByName('A')price
     */

    for (let a = 0; a < totalQuestion; a++) {
      const correctAnswer = answerArray[a];
      const correctSelectedAnswer = selectAnswer[a];
      setTotal(correctAnswer === correctSelectedAnswer ? total + 5 : total + 0);
      setwrongAnswer(
        correctAnswer !== correctSelectedAnswer ? wrongAnswer + 1 : wrongAnswer
      );
      const percent = (total / totalQuestionAccum) * 100;
      setShowAnswer(true);
      setOpen(true);
      setPercentage(percent > 100 ? 100 : percent);

      const result = {
        module_id: props.moduleToPlay.id, // course material id
        no_correct_answer:
          props.moduleToPlay.course_questions.length - wrongAnswer,
        no_wrong_answer: wrongAnswer,
        total: total,
        percentage: percentage,
        totalNumberOfQuestions: props.moduleToPlay.course_questions.length,
      };
      props.storeQuestionResult({ result });
    }
  };

  return (
    <Container>
      <Backdrop className={classes.backdrop} open={props.appIsBusy}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Dialog
        maxWidth={"sm"}
        fullWidth={true}
        onClose={handleClose}
        open={openDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {`Your Grade on ${props.moduleToPlay.title}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Your Grade</DialogContentText>
          <div className="row">
            <div className="col-sm-6">
              <Box
                position="relative"
                justifySelf="center"
                display="inline-flex"
              >
                <CircularProgress
                  value={percentage}
                  size="200px"
                  style={{ padding: "10%" }}
                  variant="static"
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    variant="h5"
                    component="div"
                    color="textSecondary"
                  >{`${percentage}%`}</Typography>
                </Box>
              </Box>
            </div>
            <div className="col-sm-6">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">CourseName</th>
                      <th scope="col">progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row"> Total correct Answer</td>
                      <td>
                        {props.moduleToPlay.course_questions &&
                         props.moduleToPlay.course_questions.length -
                          wrongAnswer}
                      </td>
                    </tr>
                    <tr>
                      <td scope="row"> Total wrong Answer</td>
                      <td>{wrongAnswer}</td>
                    </tr>
                    <tr>
                      <td scope="row"> Total Accumulated Point</td>
                      <td>{total}</td>
                    </tr>
                    <tr>
                      <td scope="row"> Total Percentage:</td>
                      <td>{percentage}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Typography variant="body1">
        Take a quiz on {props.moduleToPlay.title}
      </Typography>
      {props.moduleToPlay ? (
        props.moduleToPlay.course_questions &&
        (props.moduleToPlay.course_questions.length > 0
          ? props.moduleToPlay.course_questions.map((quiz, key) => (
              <>
                <Card gutterBottom className={classes.root}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h6" className="question">
                        {quiz.question}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        Choose either options
                      </FormLabel>
                      <RadioGroup
                        aria-label="options"
                        name="options"
                        // value={value}
                        aria-disabled
                        onChange={(e) =>
                          handleSelectAnswer(key, quiz.answer, e.target.value)
                        }
                      >
                        <FormControlLabel
                          name="A"
                          value="A"
                          disabled={showAnswer}
                          control={<Radio />}
                          label={quiz.optionA}
                        />
                        <FormControlLabel
                          value="B"
                          disabled={showAnswer}
                          control={<Radio />}
                          label={quiz.optionB}
                        />
                        <FormControlLabel
                          value="C"
                          disabled={showAnswer}
                          control={<Radio />}
                          label={quiz.optionC}
                        />
                        <FormControlLabel
                          value="D"
                          disabled={showAnswer}
                          control={<Radio />}
                          label={quiz.optionD}
                        />
                      </RadioGroup>
                    </FormControl>
                    {showAnswer && (
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        component="p"
                      >
                        Correct answer: {quiz.answer}
                      </Typography>
                    )}
                  </CardActions>
                </Card>
              </>
            ))
          : console.log(props.moduleToPlay.course_questions))
      ) : (
        <Alert severity="info">
          <p>no module selected</p>
        </Alert>
      )}
      <Button color="primary" onClick={handleAnswer} disabled={submitDisabled} style={{ margin: 15 }}>
        Submit Answer
      </Button>
    </Container>
  );
};

Question.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({
  moduleToPlay: state.course.moduleToPlay,
  appIsBusy: state.loading.appIsBusy,
  questions: state.module.showQuestions,
  showResult: state.module.showResult,
});

const mapDispatchToProps = { storeQuestionResult };

export default connect(mapStateToProps, mapDispatchToProps)(Question);