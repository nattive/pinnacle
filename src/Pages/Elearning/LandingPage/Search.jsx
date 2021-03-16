import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import {
  fetchMainCategory,
  searchCourses,
} from "../../../Actions/courseAction";

const Search = (props) => {
  useEffect(() => {
    props.fetchMainCategory();
  }, []);
  const [query, setQuery] = useState();
  return (
    <section
      className="container-fluid my-5 py-5"
      style={{ backgroundColor: "#3f51b5", margin: "2em 0 0 0" }}
    >
      <div className=" text-center section-title">
        <h2 className="text-light ">Looking for a particular course?</h2>
      </div>
      <div className="container">
        <div className="colorlib-form">
          <div className="row no-gutter mx-auto">
            <div className="col-md-8">
              <div className="form-group">
                {/* <!-- <label for="search">Search Course</label> --> */}
                <div className="form-field">
                  <input
                    type="text"
                    style={{ color: "#000066" }}
                    onChange={(e) => {
                      props.searchCourses(e.target.value);
                      setQuery(e.target.value);
                    }}
                    className="form-control search"
                    placeholder="Keyword search"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <input
                id="submit"
                onClick={(e) => {
                  e.preventDefault();
                  props.searchCourses(query);
                }}
                value="Search course"
                className="btn-search btn btn-light btn-block w-100"
                style={{ borderRadius: " 0" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  mainCategories: state.course.mainCategories,
});

const mapDispatchToProps = {
  fetchMainCategory,
  searchCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
