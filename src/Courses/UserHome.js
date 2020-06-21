import React from 'react'
import Courses from './Courses';
import HeadBar from './HeadBar';
import ViewCourse from './ViewCourse';

export default function UserHome() {
    let { path, url } = useRouteMatch();

    return (
      <div>
        <HeadBar />
        {/* <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul> */}
        <Switch>
          <Route exact path={path}>
            <Courses />
          </Route>
          <Route path={`${path}/id/:id`}>
            <Courses />
          </Route>
          <Route path="*">
            <p>404</p>
          </Route>
        </Switch>
      </div>
    );
}
