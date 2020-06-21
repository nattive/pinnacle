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
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
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
      <Paper className="w-100 mx-auto text-center" variant="outlined">
        <Typography variant="h5" component="h5" className="m-2 text-success">
          Tutor
        </Typography>
        <CardActionArea>
          <Avatar
            // alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className={classes.large}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {tutor ? tutor.name : <Skeleton />}
            </Typography>
            <Typography color="textSecondary">Ratings</Typography>
          </CardContent>
          <CardActions>
            <IconButton
              color="primary"
              aria-label="facebook"
              component="button"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary" aria-label="Twitter" component="button">
              <TwitterIcon />
            </IconButton>
            <IconButton color="primary" aria-label="Youtube" component="button">
              <YouTubeIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="LinkedIn"
              component="button"
            >
              <LinkedInIcon />
            </IconButton>
          </CardActions>
        </CardActionArea>
      </Paper>
    </div>
  );
}
