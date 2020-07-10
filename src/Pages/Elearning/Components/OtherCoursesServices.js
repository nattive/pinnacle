import React from "react";
import image1 from "../Assests/images/classes-3.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Products = [
  {
    title: "Pinnacle Coaching & Trainings",
    img: image1,
    btnText: "See More ",
    description:
      " Receive one-on-one personal training and coaching from our diverse range of industry professionals and entrepreneurs. This product is available online and offline to interested individuals and corporate organizations.",
  },
  {
    title: "Create with Pinnacle",
    img: image1,
    btnText: "Know More",
    description:
      " Join us as an instructor and turn your skills into an avenue to reach learners in Africa",
  },
];

export default function OtherCoursesServices() {
  return (
    <div className="case_study_area">
      <div className="container">
        <div className="pt-4">
          {/* <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-50">
                <h3>
                  Pinnacle <span>Products</span>
                </h3>
              </div>
            </div>
          </div> */}
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
                            <p>{item.description}</p>
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
