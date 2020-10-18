import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import VolunteerSignUp from "./VolunteerSignUp";
import { Typography } from "@material-ui/core";

export default function Intro() {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div
        className="col-md-12 colorlib-heading center-heading text-center"
      >
        {/* <h1 className="heading-big">Categories</h1> */}
        <h2>Volunteer at Pinnacle</h2>
      </div>
      {/* <Typography variant="h3">Volunteer at Pinnacle</Typography> */}
      <Typography variant="body1" className="align-self-center">
        Working at Pinnacle launches you into an exciting experience of creating
        innovative learning and management solutions with a smart and fun team.
        Our team believes in design-thinking for learning, projects, and
        advisory services. You will likely find our team busy with content
        creation, brainstorm jams, project management, research designs,
        infotechnology, eating chocolate cake, completing a fitness session,
        doing karaoke, etc.
      </Typography>
      <div className="col-md-12 text-center mt-4">
        <p>
          <Link
            to={`${url}/signup`}
            className="btn btn-primary btn-outline btn-lg btn-discover popup-vimeo"
          >
            Get Started!
          </Link>
        </p>
      </div>
    </>
  );
}
