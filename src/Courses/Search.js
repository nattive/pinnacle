import React from "react";

export default function Search() {
  return (
    <>
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="section_title text-center">
            <h2>Choose your course</h2>
          </div>
          <div class="section_subtitle">
            Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut
            euismod pellentesque imperdiet. Cras laoreet gravida lectus, at
            viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum
            interdum dui, ac tempor lorem convallis ut
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="course_search">
            <form
              action="#"
              class="course_search_form d-flex flex-md-row flex-column align-items-start justify-content-between"
            >
              <div>
                <input
                  type="text"
                  class="course_input"
                  placeholder="Course"
                  required="required"
                />
              </div>
              <div>
                <input
                  type="text"
                  class="course_input"
                  placeholder="Level"
                  required="required"
                />
              </div>
              <button class="course_button">
                <span>search course</span>
                <span class="button_arrow">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
