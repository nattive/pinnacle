import React from "react";
import quote from "../../Assets/img/svg_icon/quote.svg";
import { Container, Typography } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getTestimonials } from "../../Actions/generalAction";
import { connect } from "react-redux";
import { useEffect } from "react";
import Prototype from "prop-types";
import { Skeleton } from "@material-ui/lab";

function Testimonial(props) {
  useEffect(() => {
    props.getTestimonials(props.location);
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    props.testimonies && (
      <div className="testimonial_area  ">
        <div className="container">
          <div className="row mb-4">
            <div className="col-xs-12 text-center mx-auto">
              <div className="section_title text-center mb-50">
                {/* <h3>See what Clients and students are saying about <span>us</span> </h3> */}
              </div>
            </div>
          </div>
          <Container>
            <Carousel responsive={responsive}>
              {props.gettingTestimonies ? (
                <div className="single_carousel">
                  <div className="single_testmonial text-center">
                    <p>
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                    </p>
                  </div>
                </div>
              ) : props.testimonies.length > 0 ? (
                props.testimonies.map((testimony) => (
                  <div key={testimony.id} className="single_carousel">
                    <div className="single_testmonial text-center">
                      <div className="quote">
                        <img src={quote} alt="quote" />
                      </div>
                      <Typography variant="body1">{testimony.body}</Typography>
                      <div className="testmonial_author">
                        <div className="thumb">
                          <img src="img/case/testmonial.png" alt="" />
                        </div>
                        <h3> {testimony.userName} </h3>{" "}
                        <span> {testimony.userTitle} </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                ""
              )}
            </Carousel>
          </Container>
        </div>
      </div>
    )
  );
}

Testimonial.propTypes = {
  location: Prototype.string.isRequired,
};

const mapStateToProps = (state) => ({
  gettingTestimonies: state.general.gettingTestimonies,
  testimonies: state.general.testimonies,
  testimonialError: state.general.testimonialError,
});

const mapDispatchToProps = {
  getTestimonials,
};

export default connect(mapStateToProps, mapDispatchToProps)(Testimonial);
