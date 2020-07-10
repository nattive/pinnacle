import React, { Component } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import SignInForm from "./SignInForm";

export default class Auth extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
            <Typography variant='h2'>Sign up</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <SignInForm />
        </Grid>
      </Grid>
    );
  }
}
