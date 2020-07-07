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

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    margin: 5,
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
    <Card className={classes.root}>
      <Link to={`${path}/course-id/${props.course.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={BaseUrl + props.course.banner}
            title={props.course.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.course.title}
            </Typography>
            <Typography gutterBottom variant="caption" component="small">
              300 Modules
            </Typography>
            <br />
            <Typography
              gutterBottom
              variant="caption"
              component="small"
              className="ml-1"
            >
              {props.course.sub_category.name}
            </Typography>
              <br />
            <Typography
              gutterBottom
              variant="caption"
              component="small"
              className="ml-1"
            >
              by: {props.course.tutor.name}
            </Typography>
          </CardContent>
          <ShowRating course={props.course} />
        </CardActionArea>
        <CardActions>
          <Typography variant="overline" className="text-danger pull-right">
            {props.course.isFree ? "Free" : props.course.price}
          </Typography>
        </CardActions>{" "}
      </Link>
    </Card>
  );
}
