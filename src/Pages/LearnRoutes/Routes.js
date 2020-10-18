import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Elearning from "../Elearning";
import Dashboard from "../Dashboard";
import CoursePreview from "../CoursePreview";
import { useEffect } from "react";
import { connect } from "react-redux";
import { verifyToken } from "../../Actions/verifyTokenAction";
import { getUser } from "../../Actions/loginAction";
import Modules from "../Modules";
import HeadBar from "../../Courses/HeadBar";
import Footer from "../../Layout/Footer";
import PlayCourse from "../../Courses/PlayCourse";
import PlaySavedModules from "../../Courses/PlaySavedModules";
import Play from "../../Courses/PlayArena";
import NavBarHeader from "../Home/NavBarHeader";
function Routes(props) {
  let { path, url } = useRouteMatch();

  useEffect(() => {
    props.getUser();
  }, []);
  return (
    <div >
      <NavBarHeader />
      <Switch>
        <Route exact path={path}>
          <Elearning />
        </Route>
        <Route path={`${path}/dashboard`}>
          <Dashboard />
        </Route>
        <Route
          path={`${path}/course/:course`}
          render={(props) => <CoursePreview {...props} url={url} />}
        ></Route>
        <Route
          path={`${path}/play/:course`}
          render={(props) => <Play {...props} url={url} />}
        ></Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  verifyToken,
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
