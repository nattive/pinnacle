import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
  CardHeader,
  IconButton,
  Paper,
  CardMedia,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    justifySelf: "center",
    margin: "auto",
  },
}));

export default function TutorCard(props) {
  const classes = useStyles();
  const { tutor } = props;
  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              {tutor ? tutor.name : <Skeleton />}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {tutor ? tutor.about : <Skeleton />}
            </Typography>
            <Typography color="textSecondary">Ratings</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton color="primary" aria-label="facebook" component="button">
            <FacebookIcon />
          </IconButton>
          <IconButton color="primary" aria-label="Twitter" component="button">
            <TwitterIcon />
          </IconButton>
          <IconButton color="primary" aria-label="Youtube" component="button">
            <YouTubeIcon />
          </IconButton>
          <IconButton color="primary" aria-label="LinkedIn" component="button">
            <LinkedInIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
