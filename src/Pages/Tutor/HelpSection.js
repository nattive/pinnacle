import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import plan from "../../Assets/img/tutor/plan.svg";
import Create from "../../Assets/img/tutor/undraw_sculpting_1c9p.png";
export default function HelpSection() {
  return (
    <>
      <div className="section_title text-center mb-50">
        <h3>
          How we can help <span>you</span>
        </h3>
      </div>
      {/* <OwlCarousel
        items={1}
        className="slider_active owl-carousel"
        loop
        nav
        autoplay
      >
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <img
                src={plan}
                style={{ width: "100%" }}
                alt="plan your course"
              />
            </Grid>
            <Grid item xs={12} md={4} alignItems="center" className="my-auto">
              <Typography variant="h5" style={{ marginBottom: 15 }}>
                Plan your course
              </Typography>
              <Typography variant="h6" style={{ marginBottom: 15 }}>
                A good course start with a good plan
              </Typography>
              <Typography variant="body1">
                Before sharing the awesome knowledge, Choose a suitable topic,
                plan your lecture, organize your course into modules.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <img
                src={Create}
                style={{ width: "100%" }}
                alt="plan your course"
              />
            </Grid>
            <Grid item xs={12} md={4} alignItems="center" className="my-auto">
              <Typography variant="h5" style={{ marginBottom: 15 }}>
                Create your course
              </Typography>
              <Typography variant="h6" style={{ marginBottom: 15 }}>
                Time to share the awesome knowledge
              </Typography>
              <Typography variant="body1">
                Film your course with an high quality video camera, write a well
                explanatory text to compliment the video. Quiz your student
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </OwlCarousel> */}
    </>
  );
}
