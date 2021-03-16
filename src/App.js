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
import Blog from "./Pages/Blog";
import SignUp from "./Pages/User/SignUp";
import Auth from "./Pages/User/Auth";
import Routes from "./Pages/LearnRoutes/Routes";
import CourseShop from "./Pages/CourseShop";
import CoursesByCategory from "./Pages/CoursesByCategory";
import Coach from "./Pages/Coach";
import Volunteer from "./Pages/Vulunteer";
// import { Routes as ElearningRoutes } from "./Pages/LearnRoutes";
import "semantic-ui-css/semantic.min.css";
import Footer from "./Layout/Footer";
import Content from "./Pages/Content";
import Preview from "./Pages/CoursePreview/Preview";
import ShowCourse from "./Pages/CoursePreview";
function App() {
  return (
    <Provider store={store} className="super_container bg-light">
      <Router>
        <Switch>
          <div style={{ marginBottom: "0em" }}>
            <Route exact path="/" component={(props) => <Index {...props} />} />
            <Route
              exact
              path="/about"
              component={(props) => <About {...props} />}
            />
            <Route path="/blog" component={(props) => <Blog {...props} />} />
            <Route
              path="/content"
              component={(props) => <Content {...props} />}
            />
            <Route path="/teach" component={(props) => <Tutor {...props} />} />
            <Route
              path="/auth/signin"
              component={(props) => <Auth {...props} />}
            />
            <Route
              path="/auth/signup"
              component={(props) => <SignUp {...props} />}
            />
            <Route path="/learn" component={(props) => <Routes {...props} />} />
            <Route
              path="/course/category/:category"
              component={(props) => <CoursesByCategory {...props} />}
            />
            <Route
              path="/courses"
              component={(props) => <CourseShop {...props} />}
            />
            <Route
              path="/course/preview/:course"
              component={(props) => <ShowCourse {...props} />}
            />
            <Route path="/coach" component={(props) => <Coach {...props} />} />
            <Route
              path="/Volunteer"
              component={(props) => <Volunteer {...props} />}
            />
            {/* <Route path="*">
              <p> 404 </p>
            </Route> */}
          </div>
        </Switch>
        <div className="position-static">
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
