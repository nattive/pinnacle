import React from "react";
import ShowRating from "../General Components/ShowRating";
import { Link, useHistory } from "react-router-dom";
import image from "../Assets/img/case/1.png";
import "./SingleCourseItem.css";
const SingleCourseItem = (props) => {
  let history = useHistory();
  // <Image
  //   style={{ width: "100%", height: "150px" }}
  //   cloudName={cloudName}
  //   publicId={props.course.image_public_id}
  //   crop="scale"
  //   width="auto"
  //   responsive
  // />
  return (
    <div className="single-course-card card">
      <div className="card-img">
        <div className="overlay2"></div>
        <img src={image} alt="" className="card-img-top " />
      </div>
      <div className="card-body">
        <div className="text-left">
          <h4 className=" course-card-title text-dark">{props.title}</h4>
          <p className="course-tutor text-dark">{props.subtitle}</p>
          <p className="course-tutor text-muted mt-3">By: John Doe</p>
          <div style={{ margin: "10px 0 0 -2px" }}>
            <ShowRating {...{ rating: 4, no_rated_user: 12 }} />
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <i className="fa fa-signal"></i>
              <p className="ml-2" style={{ fontSize: ".9em" }}>
                {props.course_difficulty}
              </p>
            </div>
            <p className="course_price">₦{props.price || "Free"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseItem;
