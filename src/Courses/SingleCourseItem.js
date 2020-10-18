import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";
import { Typography } from "@material-ui/core";
import ShowRating from "../General Components/ShowRating";
import { Link, useHistory } from "react-router-dom";
import { Image, Video } from "cloudinary-react";
import { cloudName } from "../Patials/BaseUrl";
import { blue } from "@material-ui/core/colors";

const SingleCourseItem = (props) => {
  let history = useHistory();
  return (
    <Card
      style={{ height: "23em", border: `1px solid #37373790` }}
      onClick={() => history.push(`/learn/course/${props.course.slug}`)}
      image={
        <Image
          style={{ width: "100%", height: "150px" }}
          cloudName={cloudName}
          publicId={props.course.image_public_id}
          crop="scale"
          width="auto"
          responsive
        />
      }
      header={
        <Typography variant="h6" style={{ textTransform: "capitalize" }}>
          {props.course.title}
        </Typography>
      }
      meta={props.course.subtitle}
      description={`Category: ${
        props.course.SubCategory && props.course.SubCategory.name
      } |
     By: ${
       props.course.tutor &&
       props.course.tutor.user &&
       props.course.tutor.user.name
     }`}
      extra={
        <div style={{ backgroundColor: "transparent" }}>
          <Typography variant="overline" className="text-danger pull-right">
            {props.course.isFree ? "Free" : props.course.price}
          </Typography>
          <div className="d-flex justify-content-start">
            <div className="d-flex">
              <Icon name="video play" />
              <small>0</small>
            </div>
            <div className="d-flex">
              <Icon name="question circle" />
              <small>0</small>
            </div>
             <div className="d-flex">
              <Icon name="star" />
              <small>0</small>
            </div>
            
          </div>
        </div>
      }
    />
  );
};

export default SingleCourseItem;
