import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  TextArea,
  Header,
  Message,
} from "semantic-ui-react";
import { Container, Typography, Divider, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { volunteerSignup } from "../../Actions/generalAction";
import { useEffect } from "react";

function SignupForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [motivation, setMotivation] = useState("");
  const [Interest, setInterest] = useState("");
  const [Availability, setAvailability] = useState("");
  const [Educational, setEducational] = useState("");
  const [tool, setTool] = useState("");
  const [File, setFile] = useState("");
  const [success, setSuccess] = useState(null);
  const availableOption = [
    { key: "FullTime", text: "Full Time", value: "FullTime" },
    { key: "partTime", text: "Part Time", value: "partTime" },
  ];

  const EducationalOption = [
    { key: "Bsc/B.A", text: "FBsc/B.Ae", value: "Bsc/B.A" },
    { key: "Masters", text: "Masters", value: "Masters" },
    { key: "Diploma", text: "Diploma", value: "Diploma" },
    { key: "Undergraduate", text: "Undergraduate", value: "Undergraduate" },
    {
      key: "Postgraduate level",
      text: "Postgraduate level",
      value: "Postgraduate level",
    },
  ];

  const toolOption = [
    { key: "Smartphone", text: "Smartphone", value: "Smartphone" },
    {
      key: "pc",
      text: "Personal computer/desktop",
      value: "Personal computer/desktop",
    },
    {
      key: "Modem",
      text: "Modem",
      value: "Modem",
    },
    { key: "Others", text: "Others", value: "Others" },
  ];
  const field = [
    {
      name: name,
      placeHolder: "First and Last name",
      onChange: (e) => setName(e.target.value),
      component: Input,
      required: true,
    },
    {
      name: email,
      placeHolder: "Email address",
      onChange: (e) => setEmail(e.target.value),
      component: Input,
      required: true,
      type: "email",
    },
    {
      name: motivation,
      placeHolder: "Tell us why you would like to intern with Pinnacle",
      onChange: (e) => setMotivation(e.target.value),
      component: TextArea,
    },
    {
      name: Interest,
      placeHolder: "Interest",
      onChange: (e) => setInterest(e.target.value),
      component: Input,
    },
    {
      name: Availability,
      placeHolder: "Availability ",
      onChange: (e, { value }) => setAvailability(value),
      component: Select,
      option: availableOption,
    },
    {
      name: File,
      placeHolder: "Upload your CV (.doc or .pdf formats only)",
      onChange: (e) => setFile(e.target.value),
      component: Input,
      type: "file",
      option: availableOption,
    },

    {
      name: tool,
      placeHolder: "Please tick the devices that are available for your use",
      onChange: (e, { value }) => setTool(value),
      component: Select,
      option: toolOption,
    },

    {
      name: Educational,
      placeHolder: "Educational qualification",
      onChange: (e, { value }) => setEducational(value),
      component: Select,
      option: EducationalOption,
    },
  ];
  const { innerWidth: width, innerHeight: height } = window;
  const handleSubmit = () => {
    let data = {
      name,
      email,
      motivation,
      Interest,
      Availability,
      Educational,
      tool,
    };
    props.volunteerSignup(data);
  };

  useEffect(() => {
    props.hasSentVF &&
      setSuccess(
        "Thank you for choosing to work with us. Our operations the team will be in touch within 1-2 weeks."
      );
  }, [props.hasSentVF]);
  return (
    <Container
      className="mt-4"
      style={{ overflowX: "auto", height: height - 100 }}
    >
      <Paper className="p-3">
        {success === null ? (
          <Form className="m-3" onSubmit={handleSubmit}>
            <Typography variant="h4" className="mt-4 mb-4">
              Let's get to meet you!
            </Typography>
            <Divider className="my-4" />
            <Message info>
              Note: This is not a paid role, however we offer allowances for
              internet and a working space (if necessary).
            </Message>
            {field.map((item) => (
              <Form.Field
                label={item.placeHolder}
                control={item.component}
                type={item.type}
                options={item.option}
                required={item.required}
                onChange={item.onChange}
              />
            ))}
            <Form.Button
              loading={props.isSendingVF}
              className="btn-flat"
              content="Submit"
              color="blue"
              fluid
            />
          </Form>
        ) : (
          <Message success>{success}</Message>
        )}
      </Paper>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  isSendingVF: state.general.isSendingVF,
  errorSendingVF: state.general.errorSendingVF,
  hasSentVF: state.general.hasSentVF,
});

export default connect(mapStateToProps, { volunteerSignup })(SignupForm);
