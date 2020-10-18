import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NavBarHeader from "../Home/NavBarHeader";
import PostDetails from "./PostDetails";
import Posts from "./Posts";
import { connect } from "react-redux";

function BlogRoute(props) {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Posts url={url}/>
        </Route>
        <Route exact path={`${path}/:slug`}>
          <PostDetails />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlogRoute);
