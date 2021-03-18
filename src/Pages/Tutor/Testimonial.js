import React from "react";
import bg from "../../Assets/img/banner/banner3.jpg";
import { Typography } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"


export default function Testimonial() {
  const settings = {
    dots: false,
    infinite: false,
    autoplay:true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 967,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 867,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };
  return (
    <div>
      <div
        id="colorlib-testimony"
        className="testimony-img"
        style={{ backgroundImage: `url(${bg})` }}
        dataStellarBackgroundRatio="0.5"
      >
        <div className="overlay"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 center-heading text-center colorlib-heading ">

              <div className="col-xl-12">
                <div className="section_title text-center mb-50">
                  <h3 className="text-light">
                    Our student's Testimony
                </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="my-5 py-5">
              <Slider {...settings} style={{ marginBottom: "15%" }}

              >
                <div>
                  <div className="card card-body m-3 py-5">
                    <span className="icon">
                      <i className="icon-quotes-left"></i>
                    </span>
                    <div className="testimony-wrap">
                      <blockquote>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </blockquote>
                      <div className="desc">
                        <div
                          className="figure-img"
                          style={{ backgroundImage: `url(${bg})` }}
                        ></div>
                        <h3>Dave Henderson</h3>
                      </div>
                    </div>
                  </div>

                </div>
                <div>
                  <div className="card card-body m-3 py-5">
                    <span className="icon">
                      <i className="icon-quotes-left"></i>
                    </span>
                    <div className="testimony-wrap">
                      <blockquote>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </blockquote>
                      <div className="desc">
                        <div
                          className="figure-img"
                          style={{ backgroundImage: `url(${bg})` }}
                        ></div>
                        <h3>Dave Henderson</h3>
                      </div>
                    </div>
                  </div>

                </div>
                <div>
                  <div className="card card-body m-3 py-5">
                    <span className="icon">
                      <i className="icon-quotes-left"></i>
                    </span>
                    <div className="testimony-wrap">
                      <blockquote>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </blockquote>
                      <div className="desc">
                        <div
                          className="figure-img"
                          style={{ backgroundImage: `url(${bg})` }}
                        ></div>
                        <h3>Dave Henderson</h3>
                      </div>
                    </div>
                  </div>

                </div>
                <div>
                  <div className="card card-body m-3 py-5">
                    <span className="icon">
                      <i className="icon-quotes-left"></i>
                    </span>
                    <div className="testimony-wrap">
                      <blockquote>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </blockquote>
                      <div className="desc">
                        <div
                          className="figure-img"
                          style={{ backgroundImage: `url(${bg})` }}
                        ></div>
                        <h3>Dave Henderson</h3>
                      </div>
                    </div>
                  </div>

                </div>
                <div>
                  <div className="card card-body m-3 py-5">
                    <span className="icon">
                      <i className="icon-quotes-left"></i>
                    </span>
                    <div className="testimony-wrap">
                      <blockquote>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </blockquote>
                      <div className="desc">
                        <div
                          className="figure-img"
                          style={{ backgroundImage: `url(${bg})` }}
                        ></div>
                        <h3>Dave Henderson</h3>
                      </div>
                    </div>
                  </div>

                </div>
                <div>
                  <div className="card card-body m-3 py-5">
                    <span className="icon">
                      <i className="icon-quotes-left"></i>
                    </span>
                    <div className="testimony-wrap">
                      <blockquote>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </blockquote>
                      <div className="desc">
                        <div
                          className="figure-img"
                          style={{ backgroundImage: `url(${bg})` }}
                        ></div>
                        <h3>Dave Henderson</h3>
                      </div>
                    </div>
                  </div>

                </div>
                <div>
                  <div className="card card-body m-3 py-5">
                    <span className="icon">
                      <i className="icon-quotes-left"></i>
                    </span>
                    <div className="testimony-wrap">
                      <blockquote>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </blockquote>
                      <div className="desc">
                        <div
                          className="figure-img"
                          style={{ backgroundImage: `url(${bg})` }}
                        ></div>
                        <h3>Dave Henderson</h3>
                      </div>
                    </div>
                  </div>

                </div>
                <div>
                  <div className="card card-body m-3 py-5">
                    <span className="icon">
                      <i className="icon-quotes-left"></i>
                    </span>
                    <div className="testimony-wrap">
                      <blockquote>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </blockquote>
                      <div className="desc">
                        <div
                          className="figure-img"
                          style={{ backgroundImage: `url(${bg})` }}
                        ></div>
                        <h3>Dave Henderson</h3>
                      </div>
                    </div>
                  </div>

                </div>

              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
