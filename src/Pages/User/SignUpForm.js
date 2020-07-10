import React, { Component } from "react";
import {
  Button,
  CircularProgress,
  ButtonGroup,
  Snackbar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../Actions/registerAction";
import { toggleForm } from "../../Actions/loginAction";
import { verifyUserTokenAction } from "../../Actions/verifyUserTokenAction";
import { Alert } from "@material-ui/lab";
class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      account_type: "",
      email: "",
      password: "",
      error: "",
      ConfirmPassword: "",
      hasError: {},
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: [e.target.value][0],
    });
    console.log(e);
  }

  componentWillMount() {
    this.props.verifyUserTokenAction();
  }

  componentWillReceiveProps(newProps) {
    const { path, history } = this.props;

    if (newProps.errors) {
      switch (newProps.auth.errors.message) {
        case "Request failed with status code 422":
          this.setState({ error: "Email Already exist" });
          break;

        default:
          break;
      }
    } else {
      this.setState({ error: "", hasError: {} });
      if (newProps.user) {
        if (newProps.user.id === undefined) {
          this.setState({ error: "Registration failed" });
        } else {
          history.push(this.props.path + "/courses");
        }
      }
      console.log(newProps);
    }
  }

  handleChange(event) {
    this.setState({ account_type: event.target.value });
  }
  async handleSubmit(e) {
    let credentials = {
      name: this.state.name,
      password: this.state.password,
      account_type: this.state.account_type,
      email: this.state.email,
    };
    await this.props.register(credentials);
    // console.log(this.props);
  }

  render() {
    const formField = [
      {
        name: "name",
        type: "text",
        placeholder: "Full Name",
      },
      {
        name: "email",
        type: "email",
        placeholder: "Email Address",
      },
      {
        type: "password",
        placeholder: "Password",
        name: "password",
      },
      {
        type: "password",
        placeholder: "Confirm Password",
        name: "ConfirmPassword",
      },
    ];

    const { path, history } = this.props;
    return (
      <div>
        <Snackbar
          open={this.props.error !== ""}
          autoHideDuration={12000}
          // onClose={handleClose}
        >
          <Alert severity="error"> {this.props.error} </Alert>
        </Snackbar>
        <form
          action=""
          method="post"
          className="form-box"
          onSubmit={this.handleSubmit}
        >
          {/* {this.props.error !== "" ? (
                                                            <Alert severity="error">{this.props.error}</Alert>
                                                          ) : null} */}
          <h3 className="h4 text-black mb-4"> Sign Up </h3>
          {formField.map((item, key) => (
            <div className="form-group" key={key}>
              <TextField
                id="outlined-basic"
                name={item.name}
                className="w-100"
                variant="outlined"
                type={item.type}
                label={item.placeholder}
                value={this.state[item.name]}
                onChange={this.onChange}
              />
            </div>
          ))}
          <div className="form-group">
            <FormControl className="w-100">
              <InputLabel id="demo-simple-select-outlined-label">
                Select account type
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.account_type}
                onChange={this.handleChange}
              >
                <MenuItem value="isPO">
                  Sign up to Pinnacle Online e - learning Portal
                </MenuItem>
                <MenuItem value="isCareer">
                  Sign up to Career of the future Portal
                </MenuItem>
                <MenuItem value="isTutor"> Be a tutor </MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button
            variant="contained"
            color="primary"
            className="mt-4 p-1 w-100"
            onClick={this.handleSubmit}
          >
            {this.props.loading ? <CircularProgress color="#fff" /> : "Sign Up"}
          </Button>
          <Typography variant="subtitle1" className-="mt-4">
            Do you have an account?{" "}
            <Button onClick={() => this.props.toggleForm(true)} variant="text">
              {" "}
              Sign In
            </Button>
          </Typography>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  error: state.auth.error,
  loading: state.loading.authLoadingState,
});
SignUpForm.propTypes = {
  verifyUserTokenAction: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  user: PropTypes.object,
  error: PropTypes.string,
};

export default connect(mapStateToProps, {
  verifyUserTokenAction,
  register,
  toggleForm,
})(SignUpForm);
