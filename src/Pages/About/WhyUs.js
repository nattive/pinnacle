import React from "react";
import about from "../../Assets/img/service/about.png";
import { Typography } from "@material-ui/core";
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
          
          <hr className="my-4" />
          <h3>Founders’ note</h3>
          <p style={{ textAlign: "justify" }}>
            Welcome millennials! We are so glad you took a risk by visiting our
            website, where all the awesome activities happen! We hope that you
            feed your eyes and mind with our helpful resources; explore what it
            means to be a member of our community, learn, and have fun! If you
            are a new partner, we are stoked to have you visit. What a huge
            effort?! We hope that our work solidifies in your mind, and you find
            a really great sync between our offerings and yours. Quick intro:
            Pinnacle was founded out of the need to solve SDGs 4, 8 and 9, which
            are centered on providing quality education, employment
            opportunities and foster innovation & industrialisation. So,
            Timilehin and Omeghie embarked on this beautiful journey by creating
            a platform to help resolve these pressing world needs in our
            motherland- Africa. We are super excited to see you grow and journey
            with us, if our vision aligns with yours.
          </p>
        </div>
      </div>
    </div>
  );
}
