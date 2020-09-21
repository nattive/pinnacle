import React, { useEffect } from "react";
import SignUpForm from "./SignUpForm";
import { useHistory, useRouteMatch } from "react-router-dom";
import SignInForm from "./SignInForm";
import { useSelector, connect } from "react-redux";
import { getUser} from "../../Actions/loginAction"
function SignUp(props) {
  let history = useHistory();
  let { path, url } = useRouteMatch();
  const showLogin = useSelector((state) => state.auth.showLogin);
  useEffect(() => {
    props.getUser()
  }, [])
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

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  getUser
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)