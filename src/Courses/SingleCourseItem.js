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
    maxWidth: 345,
  },
  media: {
    height: 140,
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
            <Typography variant="body2" color="textSecondary" component="p">
              {props.course.description.substring(0, 200)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <ShowRating course={props.course} />
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Follow
          </Button>
        </CardActions>{" "}
      </Link>
    </Card>
  );
}
