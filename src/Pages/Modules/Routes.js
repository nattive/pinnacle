import React from "react";
import {
  Switch,
  BrowserRouter as Route,
  useRouteMatch,
} from "react-router-dom";
import { PlayEnrolledCourse } from "./PlayEnrolledCourse";
import HeadBar from "../../Courses/HeadBar";
import Footer from "../../Layout/Footer";
import  Question  from "./Question";

export default function Routes({ match }) {
  const { path, url } = useRouteMatch();

  return (
    <>
      <div className="mt-4">
        <Switch>
          <Route exact path={path}>
            <PlayEnrolledCourse match={match} />
          </Route>
          <Route path={`${path}/quiz/:id`}>
            <Question />
          </Route>
        </Switch>
      </div>
    </>
  );
}
