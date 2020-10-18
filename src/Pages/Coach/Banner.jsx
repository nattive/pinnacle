import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { blue } from "@material-ui/core/colors";
import little from "../../Assets/img/banner/little-girl-taking-online-classes-4261789.jpg";
const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${little})` }}>
      <div className="container">
        <div className="row">
          <Grid container>
            <Grid md={5}>
              <div
                className="slider_text"
                style={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  marginTop: "100px",
                  position: 'relative',
                  top: '100%',
                  bottom: '0px',
                }}
              >
                <Typography
                  variant="h4"
                  style={{
                    color: blue[800],
                    fontWeight: "bold",
                    fontSize: "2em",
                  }}
                >
                  Pinnacle Coaching & Trainings
                </Typography>
                <Typography
                  variant="body1"
                  style={{ color: blue[800], fontSize: "1.4em" }}
                >
                 Our Mentors are ready to coach you to a higher level!
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
