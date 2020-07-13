import React from "react";
import SignUpForm from "./SignUpForm";
import { useHistory, useRouteMatch } from "react-router-dom";
import SignInForm from "./SignInForm";
import { useSelector } from "react-redux";

export default function SignUp(props) {
  let history = useHistory();
  let { path, url } = useRouteMatch();
  const showLogin = useSelector((state) => state.auth.showLogin);

  return (
    <div>
      {!showLogin ? (
        <SignUpForm props={props} history={history} path={path} url={url} />
      ) : (
        <SignInForm props={props} history={history} path={path} url={url} />
      )}
    </div>
  );
}
