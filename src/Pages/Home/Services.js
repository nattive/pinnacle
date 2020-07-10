import React from "react";
import image1 from "../../Assets/img/case/1.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Products = [
  {
    title: "Pinnacle Online",
    img: image1,
    btnText: "See Online Courses",
    description:
      " E-learning and training platform offering live and video classNamees on diverse hard and soft skills for the 21st century professional or entrepreneur.",
  },
  {
    title: "Careers of the Future",
    img: image1,
    btnText: "Know More",
    description:
      " E-learning portal geared towards the preparation of young Nigerians for the 21st century workplace. Also features a wide range of hard and soft skills all specifically designed for a younger audience.",
  },
  {
    title: "Pinnacle Personalized Coaching and Trainings",
    img: image1,
    btnText: "Know More",
    description:
      "Receive one-on-one personal training and coaching from our diverse range of industry professionals and entrepreneurs. This product is available online and offline to interested individuals and corporate organizations.",
  },
  {
    title: "Research and development:",
    img: image1,
    btnText: "Goto Research Centre",
    description:
      "Pinnacle research provides tailored solutions to agencies and international bodies through up-to-date data, and social and economic research designed for community or individual development, policy interventions, and organisational investments. Available research data would come with “free” and “pay to”access options.",
  },
];

export default function Services() {
  return (
    <div className="case_study_area">
      <div className="container">
        <div className="pt-4">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-50">
                <h3>
                  Pinnacle <span>Products</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <OwlCarousel
                classNameName="case_active owl-carousel"
                loop
                autoplay
                margin={10}
                items={1}
                nav
                dots
              >
                {Products.map((item) => (
                  <div className="about_info_area">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                          <div className="about_text">
                            <h3>{item.title}</h3>
                            <p>
                             {item.description}
                            </p>
                            <a href="#" className="boxed-btn3">
                             {item.btnText}
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="about_thumb">
                            <img src={item.img} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
