import React, { Component } from "react";
import Preview from "./Preview";
import { connect } from "react-redux";
import { showCourse } from "../../Actions/courseAction";
import { Skeleton } from "@material-ui/lab";
import Modules from "../Modules";
import { useRouteMatch, Switch, BrowserRouter, Route } from "react-router-dom";
class Course extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }
  componentDidMount() {
    this.props.match.params.course !== undefined
      ? this.props.showCourse(this.props.match.params.course)
      : this.setState({ isLoading: true });
  }
  componentWillReceiveProps(newProp) {
    newProp.match && this.props.showCourse(newProp.match.params.course);
  }
  render() {
    return this.state.isLoading ? (
      <Skeleton />
    ) : (
      <PreviewFunc {...this.props} />
    );
  }
}

function PreviewFunc(props) {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Preview {...props} url={url} />
      </Route>
      <Route path={`${path}/:id`} render={({match}) =>  <Modules match={match} />}>
       
      </Route>
    </Switch>
  );
}

export default connect(null, { showCourse })(Course);
