import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NavBarHeader from "../Home/NavBarHeader";
import ContentDetails from "./ContentDetails";
import Contents from "./Contents";
import { connect } from "react-redux";

function ContentRoute(props) {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Contents url={url} />
        </Route>
        <Route exact path={`${path}/:slug`}>
          <ContentDetails />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContentRoute);
