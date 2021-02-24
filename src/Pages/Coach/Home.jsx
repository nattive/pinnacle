import React from "react";
import NavBarHeader from "../Home/NavBarHeader";
import { Grid, Typography, Hidden } from "@material-ui/core";
import little from "../../Assets/img/banner/little-girl-taking-online-classes-4261789.jpg";
import { FaUserMd, FaIntercom, AiOutlineOneToOne } from 'react-icons/all'
import helpingHands from "../../Assets/img/Pinnacle/helpingHands.jpg";
import oneonone from '../../Assets/img/banner/ClipartKey_936733.png'
import { Button } from "semantic-ui-react";
import { Link, useRouteMatch } from "react-router-dom";
import volunteer from "../../Assets/img/Pinnacle/oneOnOne.png";
import SingleBanner from "../../General Components/SingleBanner";
import Testimonial from "../Tutor/Testimonial";
export default function Home() {
let { url } = useRouteMatch();
return (
<>
  <NavBarHeader />
  <SingleBanner image={little} title='Join our coaching program' subText='Receive one-on-one personal training and coaching
         from our diverse range of industry professionals
          and entrepreneurs.' />
  <div className="container-fluid banner-bottom-info">
    <div className="container">
      <div className="row p-4">
        <div className="col-md-4 d-none d-md-block">
          <div className="d-flex align-content-center">
            <FaUserMd className='banner-bottom-icon' />
            <div className="ml-4">
              <h4>Reliable support system</h4>
              Get reliable suppoty to various issues, raging from personal to professional issues.
            </div>
          </div>
        </div>
        <div className="col-md-4 d-none d-md-block">
          <div className="d-flex align-content-center">
            <FaIntercom className='banner-bottom-icon' />
            <div className="ml-4">
              <h4> Coarch and Mentor </h4>
              Are you a life coach? Psychologist or any related fields? would
              you like to take up the challenge, mentor or be a personal
              trainer?
            </div>
          </div>
        </div>
        <div className="col-md-4 d-none d-md-block">
          <div className="d-flex align-content-center">
            <AiOutlineOneToOne className='banner-bottom-icon' />
            <div className="ml-4">
              <h4> One-on-One Mentorship </h4>
              Receive one-on-one personal training and coaching from our
              diverse range of industry professionals and entrepreneurs.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container-fluid " style={{marginTop: '3em'}}>
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <img src={oneonone} alt="oneOnOne.png" className="w-75 p-4 img-responsive justify-self-center text-center" />
      </div>
      <div className="col-sm-12 col-md-6">
        <h2 className="text-center text-keft py-4 mx-auto" style={{fontSize: '40px'}}>Get a personal Coach</h2>
        <p className="text-keft p-4 mx-auto" >
          Receive one-on-one personal training and coaching from our
          diverse range of industry professionals and entrepreneurs.</p>
          <div className="col-md-12 text-center mt-4">
            <p>
              <Link to={`${url}/signUp`} className="btn btn-primary btn-outline btn-lg btn-discover popup-vimeo">
              <span className="icon"></span>
              Get started, Get a coach
              </Link>
            </p>
          </div>
        
      </div>
    </div>
  <Testimonial />

  </div>
</>
);
}