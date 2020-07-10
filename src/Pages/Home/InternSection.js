import React from "react";
import volunteer from "../../Assets/img/Pinnacle/woman-standing-in-hallway-while-holding-book-1462630.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function InternSection() {
  return (
    <div className="container-fluid" style={{ marginTop: "4em" }}>
      <div className="container">
        <hr className="my-4" />
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <ScrollAnimation animateOnce animateIn="animate__slideInLeft">
              <div className="m-3 p-4 coaching-body">
                <h3> Intern with Pinnacle </h3>
                <p>
                  Believe you’re a Genius, we’ll give you the platform to prove
                  that you are!
                </p>
                <div className="button-group mt-4">
                  <button className="btn btn-Coaching">Join Program</button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-sm-12 col-md-6">
            <ScrollAnimation animateOnce animateIn="animate__slideInRight">

            <img
              src={volunteer}
              style={{ width: "80%", margin: "1em" }}
              alt=""
            />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <hr className="my-4"/>
    </div>
  );
}
