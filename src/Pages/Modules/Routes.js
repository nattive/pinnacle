import React from "react";
import {
  Switch,
  BrowserRouter as Route,
  useRouteMatch,
} from "react-router-dom";
import { PlayEnrolledCourse } from "./PlayEnrolledCourse";
import HeadBar from "../../Courses/HeadBar";
import Footer from "../../Layout/Footer";
import { Question } from "./Question";

export default function Routes({ match }) {
  let { path, url } = useRouteMatch();

  return (
    <>
      <HeadBar />
      <div className="mt-4">
        <Switch>
          <Route exact path={path}>
            <PlayEnrolledCourse match={match} />
          </Route>
          <Route path={`${path}/:id`}>
            <Question />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}
