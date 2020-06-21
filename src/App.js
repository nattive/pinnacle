import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Index from "./Home/Index";
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
import { Routes } from "./Patials/Routes";
import About from "./About/About";
import PinacleOnline from "./PinnacleOnline/PinacleOnline";
import {Provider} from 'react-redux'
import store from "./Patials/store";
import Courses from "./Courses/Courses";
import Blog from "./Blog/Blog";
function App() {
  return (
    <Provider store={store} className='super_container'>
      <Router>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/e-learning">
            <PinacleOnline />
          </Route>
           <Route path="*">
           <p>404</p>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
