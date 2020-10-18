import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarHeader from "../Home/NavBarHeader";
import { useState } from "react";
import { coacheeSignup } from "../../Actions/generalAction";
import {
  Input,
  TextArea,
  Select,
  Form,
  Label,
  Header,
  Message,
} from "semantic-ui-react";
import { Grid, Typography, Paper } from "@material-ui/core";
import volunteer from "../../Assets/img/Pinnacle/volunteer.svg";
import { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { nodeName } from "jquery";
const SignUp = (props) => {
  const [name, setName] = useState(props.user ? props.user.name : "");
  const [email, setEmail] = useState(props.user ? props.user.email : "");
  const [motivation, setMotivation] = useState("");
  const [category, setCategory] = useState("");
  const [Interest, setInterest] = useState("");
  const [Availability, setAvailability] = useState("");
  const [CoachPreference, setCoachPreference] = useState("");
  const availableOption = [
    { key: "Weekdays", text: "Weekdays", value: "Weekdays" },
    { key: "Weekends", text: "Weekends", value: "Weekends" },
  ];

  const coachOption = [
    { key: "Male", text: "Male", value: "Male" },
    { key: "Female", text: "Female", value: "Female" },
    { key: "indifferent", text: "indifferent", value: "indifferent" },
  ];

  const categoryOption = [
    {
      key: "Business Coaching",
      text: "Business Coaching",
      value: "Business Coaching",
    },
    {
      key: "Career Coaching",
      text: "Career Coaching",
      value: "Career Coaching",
    },
    {
      key: "Personal Coaching",
      text: "Personal Coaching",
      value: "Personal Coaching",
    },
  ];

  const careerCoachingOption = [
    {
      key: "Want to get a promotion",
      text: "Want to get a promotion",
      value: "Want to get a promotion",
    },
    {
      key: "Learn how to manage your manager",
      text: "Learn how to manage your manager",
      value: "Learn how to manage your manager",
    },
    {
      key: "Learn how to manage your junior team",
      text: "Learn how to manage your junior team",
      value: "Learn how to manage your junior team",
    },
    {
      key: "Want to transition into a new industry",
      text: "Want to transition into a new industry",
      value: "Want to transition into a new industry",
    },
    {
      key: "Want to upgrade my skills",
      text: "Want to upgrade my skills",
      value: "Want to upgrade my skills",
    },
    {
      key: "Learn work-life balance",
      text: "Learn work-life balance",
      value: "Learn work-life balance",
    },
  ];

  const businessCoachingOption = [
    {
      key: "Start a new business",
      text: "Start a new business",
      value: "Start a new business",
    },
    {
      key: "Grow an existing SME",
      text: "Grow an existing SME",
      value: "Grow an existing SME",
    },
    {
      key: "Learn how to recruit the best talents",
      text: "Learn how to recruit the best talents",
      value: "Learn how to recruit the best talents",
    },
    {
      key: "Learn how to manage your team",
      text: "Learn how to manage your team",
      value: "Learn how to manage your team",
    },
    {
      key: "Learn how to communicate effectively",
      text: "Learn how to communicate effectively",
      value: "Learn how to communicate effectively",
    },
    {
      key: "Manage your cash flow",
      text: "Manage your cash flow",
      value: "Manage your cash flow",
    },
    {
      key: "Secure funding for your business",
      text: "Secure funding for your business",
      value: "Secure funding for your business",
    },
  ];

  const interestOption = [
    { key: "Family", text: "Family", value: "Family" },
    { key: "Relationships", text: "Relationships", value: "Relationships" },
    {
      key: "Personal finance",
      text: "Personal finance",
      value: "Personal finance",
    },
    {
      key: "Physical health",
      text: "Physical health",
      value: "Physical health",
    },
    { key: "Mental health", text: "Mental health", value: "Mental health" },
    { key: "Other health", text: "Other health", value: "Other health" },
  ];
  const field = [
    {
      name: name,
      placeHolder: "First and Last name",
      onChange: (e) => setName(e.target.value),
      component: Input,
      disabled: true,
      required: true,
      error: props.errorSendingCF && props.errorSendingCF.name,
    },
    {
      name: email,
      placeHolder: "Email address",
      onChange: (e) => setEmail(e.target.value),
      component: Input,
      required: true,
      disabled: true,
      type: "email",
      error: props.errorSendingCF && props.errorSendingCF.email,
    },

    {
      name: motivation,
      placeHolder: "tell us why you have signed up for our coaching session",
      onChange: (e) => setMotivation(e.target.value),
      component: TextArea,
      required: true,
      type: "email",
    },
    {
      name: category,
      placeHolder: "Select your preferred coaching category",
      onChange: (e, { value }) => setCategory(value),
      component: Select,
      option: categoryOption,
      required: true,
    },

    {
      name: Interest,
      placeHolder:
        "Tell us what you would like to be coached on. Options here are based on the coaching category selected",
      onChange: (e, { value }) => setInterest(value),
      component: Select,
      option:
        category === "Business Coaching"
          ? businessCoachingOption
          : category === "Career Coaching"
          ? careerCoachingOption
          : interestOption,
    },

    {
      // name: Interest,
      placeHolder:
        "Type your interest, if you are not interested in any of the afore mentioned",
      onChange: (e) => setInterest(e.target.value),
      component: Input,
      error: props.errorSendingCF && props.errorSendingCF.Interest,
    },
    {
      name: Availability,
      placeHolder: "tell us what you would like to be coached on",
      onChange: (e, { value }) => setAvailability(value),
      component: Select,
      error: props.errorSendingCF && props.errorSendingCF.Availability,
      option: availableOption,
    },

    {
      name: CoachPreference,
      placeHolder: "Coach preference",
      onChange: (e, { value }) => setCoachPreference(value),
      component: Select,
      option: coachOption,
    },
  ];
  const history = useHistory()
  const {path} = useRouteMatch()
  const handleSubmit = () => {
    let data = {
      name,
      email,
      motivation,
      Interest,
      Availability,
      category,
      CoachPreference,
    };
    props.coacheeSignup(data);
  };
  useEffect(() => {
    props.mentee && props.mentee.id && history.push(`/coach/actions`);
  }, [props.mentee])

  return (
    <div>
      <NavBarHeader />
      <div className="container">
        <Grid container>
          <Grid xs={12} md={7} className="p-4 justify-contents-center">
            <img
              src={volunteer}
              alt=""
              className="w-75 img-responsive justify-self-center text-center"
            />
            <Typography className="text-center m-3" variant="h5">
              Fill the form and a correspondent will get in touch with you
            </Typography>
          </Grid>
          <Grid xs={12} md={5}>
            <Paper style={{ padding: 10 }}>
              <Form onSubmit={handleSubmit} className="m-3">
                <Typography variant="h4">
                  {" "}
                  Sign up to Pinnacle Coaching & Trainings
                </Typography>
                <Message info>
                  {" "}
                  If your name is not displayed, and/or the submit button is disabled, Please login/Sign up
                </Message>
                {field.map((item) => (
                  <Form.Field
                    label={item.placeHolder}
                    value={item.name}
                    disabled={item.disabled}
                    control={item.component}
                    type={item.type}
                    options={item.option}
                    onChange={item.onChange}
                    error={item.error}
                  />
                ))}
                <Form.Button
                  className="btn-flat"
                  content="Submit"
                  color="blue"
                  fluid
                  loading={props.isSendingCF}
                  disabled={!props.user.id}
                />
              </Form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  mentee: state.auth.mentee,
  isSendingCF: state.general.isSendingCF,
  errorSendingCF: state.general.errorSendingCF,
  hasSentCF: state.general.hasSentCF,
});

const mapDispatchToProps = {
  coacheeSignup,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
