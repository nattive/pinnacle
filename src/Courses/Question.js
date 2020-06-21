import React, { Component } from "react";
import {
  Paper,
  Card,
  CardContent,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  CardHeader,
  CircularProgress,
} from "@material-ui/core";
import { connect } from 'react-redux'
import { displayQuestions } from "../Actions/moduleActions";

class Question extends Component {
  constructor() {
    super();
  }
  render() {
    const quiz = [];
    const { showQuestions, displayQuestions } = this.props;
    const questionsArray = JSON.parse(this.props.question);
    console.log(questionsArray);
    for (const property in questionsArray) {
      if (questionsArray.hasOwnProperty(property)) {
        const element = questionsArray[property];
        quiz.push(JSON.parse(element));
      }
    }
    // for (const property in Questions.questions) {
    //   if (Questions.questions.hasOwnProperty(property)) {
    //     const element = Questions.questions[property];
    //     // console.log(element);
    //     questionsArray.push(element);
    //   }
    // }
    return (
      <>
        <Typography variant="h4" color="primary" className='m-3'>
          Quiz: {this.props.course ? this.props.course.title : ""}
        </Typography>
        <>
          {quiz.length > 0 ? (
            quiz.map((item, key) => (
              <Card key={key} className="row m-4" variant="outlined">
                <CardContent>
                  <Typography
                    // className
                    color="textSecondary"
                    gutterBottom
                  >
                    {item.questionToAsk}
                  </Typography>
                  <div className="m-2">
                    <FormControl component="fieldset" className="mt-3">
                      {/* <FormLabel component="legend"><i>Choose Either </i></FormLabel> */}
                      <RadioGroup
                        aria-label="Options"
                        name="Options1"
                        // value={value}
                        // onChange={handleChange}
                      >
                        <FormControlLabel
                          value="A"
                          control={<Radio />}
                          label={item.optionA}
                        />
                        <FormControlLabel
                          value="B"
                          control={<Radio />}
                          label={item.optionB}
                        />
                        <FormControlLabel
                          value="C"
                          control={<Radio />}
                          label={item.optionC}
                        />
                        <FormControlLabel
                          value="D"
                          control={<Radio />}
                          label={item.optionD}
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <CircularProgress />
          )}
        </>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  showQuestions: state.module.showQuestions,
});

const mapDispatchToProps = {
  displayQuestions: displayQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
