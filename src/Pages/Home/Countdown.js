import React from "react";

export default function Countdown() {
  return (
    <div class="counter_area " style={{ background: "#ebf3ff" }}>
      <div class="container">
        <div class="row">
        <div className="col-xl-12">
              <div className="section_title text-center mb-50">
                <h3>
                  Or statistic keeps increasing
                </h3>
              </div>
            </div>
          <div class="col-xl-3 col-lg-3 col-md-3">
            <div class="single_counter text-center">
              <div class="counter_icon">
                <img src="img/svg_icon/group.svg" alt="" />
              </div>
              <h3>
                {" "}
                <span class="counter">200</span> <span> +</span>{" "}
              </h3>
              <p>Courses</p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3">
            <div class="single_counter text-center">
              <div class="counter_icon">
                <img src="img/svg_icon/cart.svg" alt="" />
              </div>
              <h3>
                {" "}
                <span class="counter">97</span>{" "}
              </h3>
              <p>Professional Tutors</p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3">
            <div class="single_counter text-center">
              <div class="counter_icon">
                <img src="img/svg_icon/heart.svg" alt="" />
              </div>
              <h3>
                {" "}
                <span class="counter">5628</span>
              </h3>
              <p>Happy Students</p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3">
            <div class="single_counter text-center">
              <div class="counter_icon">
                <img src="img/svg_icon/respect.svg" alt="" />
              </div>
              <h3>
                {" "}
                <span class="counter">5637</span>{" "}
              </h3>
              <p>Free Resources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
