import React from "react";
import quote from "../../Assets/img/svg_icon/quote.svg";
export default function Testimonial() {
  return (
    <div className="testimonial_area  ">
      <div className="container">
        <div className="row mb-4">
          <div className="col-xs-12 text-center mx-auto">
            <h3 className="text-center">
              See what Clients and students are saying about us
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="testmonial_active owl-carousel">
              <div className="single_carousel">
                <div className="single_testmonial text-center">
                  <div className="quote">
                    <img src={quote} alt="quote" />
                  </div>
                  <p>
                    Donec imperdiet congue orci consequat mattis.Donec rutrum
                    porttitor <br /> sollicitudin.Pellentesque id dolor tempor
                    sapien feugiat ultrices nec sed neque. <br /> Fusce ac
                    mattis nulla.Morbi eget ornare dui.
                  </p>
                  <div className="testmonial_author">
                    <div className="thumb">
                      <img src="img/case/testmonial.png" alt="" />
                    </div>
                    <h3> Robert Thomson </h3> <span> Business Owner </span>
                  </div>
                </div>
              </div>
              <div className="single_carousel">
                <div className="single_testmonial text-center">
                  <div className="quote">
                    <img src={quote} alt="" />
                  </div>
                  <p>
                    Donec imperdiet congue orci consequat mattis.Donec rutrum
                    porttitor <br /> sollicitudin.Pellentesque id dolor tempor
                    sapien feugiat ultrices nec sed neque. <br /> Fusce ac
                    mattis nulla.Morbi eget ornare dui.
                  </p>
                  <div className="testmonial_author">
                    <div className="thumb">
                      <img src="img/case/testmonial.png" alt="" />
                    </div>
                    <h3> Robert Thomson </h3> <span> Business Owner </span>
                  </div>
                </div>
              </div>
              <div className="single_carousel">
                <div className="single_testmonial text-center">
                  <div className="quote">
                    <img src={quote} alt="" />
                  </div>
                  <p>
                    Donec imperdiet congue orci consequat mattis.Donec rutrum
                    porttitor <br /> sollicitudin.Pellentesque id dolor tempor
                    sapien feugiat ultrices nec sed neque. <br /> Fusce ac
                    mattis nulla.Morbi eget ornare dui.
                  </p>
                  <div className="testmonial_author">
                    <div className="thumb">
                      <img src="img/case/testmonial.png" alt="" />
                    </div>
                    <h3> Robert Thomson </h3> <span> Business Owner </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
