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
    <div className="colorlib-search">
      <div className="container">
        <div className="row">
          <div className="col-md-12 search-wrap">
            <div className="search-wrap-2">
              <form method="post" className="colorlib-form">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      {/* <!-- <label for="search">Search Course</label> --> */}
                      <div className="form-field">
                        <input
                          type="text"
                          id="search"
                          onChange={(e) => {
                            props.searchCourses(e.target.value);
                            setQuery(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Keyword search"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      {/* <!-- <label for="course">Category Course</label> --> */}
                      <div className="form-field">
                        <i className="icon icon-arrow-down3"></i>
                        <select
                          name="people"
                          id="people"
                          className="form-control bg-dark"
                        >
                          {props.mainCategories.length > 0 ? (
                            props.mainCategories.map((category) => (
                              <option value={category.id}>
                                {category.name}
                              </option>
                            ))
                          ) : (
                            <option disabled>Loading...</option>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      {/* <!-- <label for="difficulty">Difficulty</label> --> */}
                      <div className="form-field">
                        <i className="icon icon-arrow-down3"></i>
                        <select
                          name="people"
                          id="people"
                          className="form-control"
                        >
                          <option value="isPO">Pinnacle Ulearn</option>
                          <option value="isCareer">Career Of The Future</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <input
                      type="submit"
                      name="submit"
                      id="submit"
                      onClick={() => props.searchCourses(query)}
                      value="Search course"
                      className="btn btn-primary btn-block"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
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
