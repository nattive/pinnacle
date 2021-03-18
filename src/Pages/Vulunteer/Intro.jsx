import React from "react";
import volunteer from "../../Assets/img/banner/6660.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import './volunteer.scss'
import SingleBanner from "../../General Components/SingleBanner";
import banner1 from "../../Assets/img/banner/teacher1.jpg";
import { GoPerson, GoProject, GoBeaker, GoBriefcase, GoBookmark } from 'react-icons/go'
import Testimonial from "../Tutor/Testimonial";
export default function Intro() {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div style={{ margin: "4em 0" }}>
        <SingleBanner title='Intern with Pinnacle' image={banner1} subText='Work with professionals. Create, brainstorm, manage project, research designs, with pinnacle.' />
        <div
          className="container-fluid banner-bottom-info"

        >
          <div className="container">
            <div className="row p-4">
              <div className="col-md-4 d-none d-md-block">
                <div className="d-flex align-content-center">
                  <GoBriefcase className='banner-bottom-icon' />
                  <div className="ml-4">
                    <h4> Work with professionals</h4>
                    Expose yourself to working with top professionals, gain experience and learn.
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-md-block">
                <div className="d-flex align-content-center">
                  <GoProject className='banner-bottom-icon' />
                  <div className="ml-4">
                    <h4> Gain the experience </h4>
                    You will be Collaaborating with the team in content
                     creation, brainstorm jams, project management, research designs and many more.
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-md-block">
                <div className="d-flex align-content-center">
                  <GoBookmark className='banner-bottom-icon' />
                  <div className="ml-4">
                    <h4>  Exciting experience </h4>
                    Working at Pinnacle launches you into an exciting experience of creating
                    innovative learning and management solutions with a smart and fun team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container-fluid p-4" style={{ marginTop: "7em" }}>
        <div className="row second-section">
          <div className="col-xs-12 col-md-5 d-none d-md-block">
            <img src={volunteer} className="w-100 mx-auto" />
          </div>
          <div className="col-xs-12 col-md-5  my-auto mx-auto second-section-text">
            <h4>Call for Volunteers</h4>
            <p>
              Working at Pinnacle launches you into an exciting experience of creating
              innovative learning and management solutions with a smart and fun team.
</p>
          </div>
        </div>
        <div className="row second-section my-5">
          <div className="col-xs-12 col-md-5  my-auto mx-auto second-section-text">
            <h4>We believes in design-thinking for learning</h4>
            <p>You will likely find our team busy with content
                          creation, brainstorm jams, project management, research designs,
                          infotechnology, eating chocolate cake, completing a fitness session,
                      doing karaoke, etc.
            </p>
          </div>
          <div className="col-xs-12 col-md-5 d-none d-md-block">
            <img src={volunteer} className="w-100 mx-auto" />
          </div>
        </div>
      </div>
      <Testimonial />
      <div className="col-md-12 text-center mt-4 ready-text">
        <h1>Ready to start the awesime journey with us?</h1>

        <p>
          <Link
            to={`${url}/signup`}
            className="btn btn-primary btn-outline btn-lg btn-discover popup-vimeo"
          >
            Get Started!
          </Link>
        </p>
      </div>
    </>
  );
}
