import React from "react";
import image1 from "../../Assets/img/case/1.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Grid, Typography, Button, Link } from "@material-ui/core";
import student from "../../Assets/img/banner/student.png";
export default function Services() {
  return (
    <div className="case_study_area">
      <Container>
        <Grid container>
          <Grid item xs="hidden" md={6}>
            <img  src={student} className="w-50 img-responsive rounded" alt="learn with pinnacle" />
          </Grid>
          <Grid
            item
            xs="hidden"
            md={6}
            className="p-4 my-auto"
            alignContent="center"
          >
            <Typography variant="h4">
              Learning is an endless journey!
            </Typography>
            <Typography variant="body1" style={{paddingRight: '10vh'}}>
              We have thousands of free and paid resources, created to keep you
              going.Our training platform offers video classes on diverse hard
              and soft skills for the millennia and the preparation of young
              Nigerians for the 21st century workplace.
            </Typography>
            <Button component={Link} variant="text" to="/learn">
              learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
