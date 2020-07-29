import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BaseUrl } from "../Patials/BaseUrl";
import { Link, useRouteMatch } from "react-router-dom";
import ShowRating from "../General Components/ShowRating";
import { CardHeader } from "@material-ui/core";
import course from '../Assets/img/banner/info_banner.png'
const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    margin: 3,
    border: "1px solid  rgba(180, 180, 180, 0.075)",
  },
  media: {
    height: 120,
  },
});

export default function SingleCourseItem(props) {
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  return (
    <div className="classes">
      <div
        className="classes-img"
        style={{
          backgroundImage: `url(${course})`,
        }}
      ></div>
      <div className="wrap">
        <div className="desc">
          <span className="teacher">{props.course.tutor.name}</span>
          <h3>
            <a href="#" style={{ textTransform: "capitalize" }}>
              {props.course.title}
            </a>
          </h3>
        </div>
        <div className="pricing">
          <p>
            <Typography variant="overline" className="text-danger pull-right">
              {props.course.isFree ? "Free" : props.course.price}
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
              {`category: ${
                props.course.sub_category && props.course.sub_category.name
              }`}
            </Typography>
            <span className="more">
              <ShowRating course={props.course} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
