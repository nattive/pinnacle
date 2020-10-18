import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import  SignUp from './SignUp';
import Home from './Home';
import MenteeHome from './MenteeHome';
import ResourceView from './ResourceView';
export default function VolunteerRoute() {
      let { path, url } = useRouteMatch();
    return (
      <div>
        <Route exact path={`${path}`}>
          <Home />
        </Route>
        <Route path={`${path}/signUp`}>
          <SignUp />
        </Route>
        <Route path={`${path}/actions`}>
          <MenteeHome />
        </Route>
      </div>
    );
}
