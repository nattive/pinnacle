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
      <Link to={`/learn/course/${props.course.slug}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={BaseUrl + props.course.banner}
            title={props.course.title}
          />
          <CardContent>
            <Typography  variant="h6" >{props.course.title}</Typography>
            <Typography gutterBottom variant="body2" component="p">
              {`category: ${props.course.sub_category.name}`}
            </Typography>
            <Typography gutterBottom variant="caption" component="small">
              300 Modules
            </Typography>
            <Typography
              gutterBottom
              variant="caption"
              component="small"
              className="ml-1"
            >
              by: {props.course.tutor.name}
            </Typography>

            <Typography variant="overline" className="text-danger pull-right">
              {props.course.isFree ? "Free" : props.course.price}
            </Typography>
            <ShowRating course={props.course} />
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
