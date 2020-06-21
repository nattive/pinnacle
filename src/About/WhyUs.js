import React from "react";
import about from "../Assets/img/service/about.png";
export default function WhyUs() {
  return (
    <div class="about_info_area plus_padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-6">
            <div class="about_text">
              <h3>Who we are</h3>
              <p style={{ textAlign: "justify" }}>
                Pinnacle Consult is a strategic advisory services company,
                interested in the design, management, and delivery of innovative
                projects and products. Our wide scope of services is geared at
                promoting personal and professional development across all
                demographics.
              </p>
              <hr className="my-4" />
              <h3>Mission and Vision:</h3>
              <p style={{ textAlign: "justify" }}>
                Our mission is to identify and equip youths and industry top
                talents with the necessary tools for maximum productivity
                through skill acquisition, practical learning, leadership
                opportunities, and creative technology.
              </p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="about_thumb">
              <img src={about} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
