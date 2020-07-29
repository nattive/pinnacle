import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Index from "./Pages/Home/Index";
import "./Assets/css/bootstrap.min.css";
import "./Assets/css/magnific-popup.css";
import "./Assets/css/font-awesome.min.css";
import "./Assets/css/themify-icons.css";
import "./Assets/css/nice-select.css";
// import "./Assets/css/flaticon.css";
import "./Assets/css/gijgo.css";
import "./Assets/css/animate.css";
// import "./Assets/css/slick.css";
import "./Assets/css/slicknav.css";
import "./Assets/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About/About";
// import PinacleOnline from "./Pages/PinnacleOnline/PinacleOnline";
import { Provider } from "react-redux";
import store from "./Patials/store";
import Tutor from "./Pages/Tutor";
import Blog from "./Pages/Blog/Blog";
import SignUp from "./Pages/User/SignUp";
import Auth from "./Pages/User/Auth";
import Routes from "./Pages/LearnRoutes/Routes";
// import { Routes as ElearningRoutes } from "./Pages/LearnRoutes";

function App() {
  return (
    <Provider store={store} className="super_container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>{" "}
          <Route path="/about">
            <About />
          </Route>{" "}
          <Route path="/blog">
            <Blog />
          </Route>{" "}
          <Route path="/teach">
            <Tutor />
          </Route>
          <Route path="/auth/signin">
            <Auth />
          </Route>{" "}
          <Route path="/auth/signup">
            <SignUp />
          </Route>{" "}
          <Route path="/learn">
            <Routes />
          </Route>{" "}
          <Route path="*">
            <p> 404 </p>{" "}
          </Route>{" "}
        </Switch>{" "}
      </Router>{" "}
    </Provider>
  );
}

export default App;
