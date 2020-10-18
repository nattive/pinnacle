import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class AuthSection extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid auth_section" style={{ marginTop: 0, padding: 25 }}>
          <Grid container>
            <Grid item justify="center">
              <Typography style={{ textAlign: "center" }}>
                We are keen on crafting unique learning content and approaches,
                designing innovative project ideas, building the best talent,
                and partnering with communities or organizations.{" "}
                <Link to="/login">Join our community </Link> and discover more
              </Typography>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
