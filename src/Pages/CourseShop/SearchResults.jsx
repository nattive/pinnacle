import React from "react";
import { connect } from "react-redux";
import SingleCourseItem from "../../Courses/SingleCourseItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SearchResults(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
    <div className="container">
      {props.result.length > 0 && (
        <>
          <div className="row mb-3">
            <div className="col-md-12 colorlib-heading center-heading text-center">
              {/* <h1 className="heading-big">Categories</h1> */}
              <h2> Related Courses on search result</h2>
            </div>
          </div>
          <div className="row mb-2">
            <Carousel responsive={responsive}>
              {props.result.length > 0
                ? props.result.map((query) =>
                    query.type === "courses" ? (
                      <SingleCourseItem course={query.searchable} />
                    ) : null
                  )
                : "No search result"}
            </Carousel>
          </div>
          <div className="row mb-3">
            <div className="col-md-12 colorlib-heading center-heading text-center">
              {/* <h1 className="heading-big">Categories</h1> */}
              <h2> Related Topics on search result</h2>
            </div>
          </div>
          <div className="row mb-2">
            <Carousel responsive={responsive}>
              {props.result.length > 0
                ? props.result.map((query) =>
                    query.type === "main_categories" ? (
                      <div className=" text-center">
                        <a href="services.html" className="services">
                          <div className="desc">
                            <h3>{query.searchable.name}</h3>
                          </div>
                        </a>
                      </div>
                    ) : null
                  )
                : "No search result"}
            </Carousel>
          </div>
        </>
      )}
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    result: state.course.searchCourse,
  };
}

export default connect(mapStateToProps, null)(SearchResults);
