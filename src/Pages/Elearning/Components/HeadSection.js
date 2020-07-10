import React from 'react'
import "../Assests/css/style.css";
import logo from '../../../Assets/img/Pinnacle/logoWhite.png'
import { Link } from 'react-router-dom';
export default function HeadSection() {
    return (
      <div>
        <nav className="colorlib-nav" role="navigation">
          <div className="top-menu">
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <div id="colorlib-logo">
                    <img src={logo} alt='Pinnacle logo' />
                  </div>
                </div>
                <div className="col-md-10 text-right menu-1">
                  <ul>
                    <li className="active">
                      <Link to='/'>Home</Link>
                    </li>
                    <li className="has-dropdown">
                      <a href="courses.html">Courses</a>
                      <ul className="dropdown">
                        <li>
                          <a href="courses-single.html">Courses Single</a>
                        </li>
                        <li>
                          <a href="#">Mobile Apps</a>
                        </li>
                        <li>
                          <a href="#">Website</a>
                        </li>
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">WordPress</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="teachers.html">Teachers</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="event.html">Events</a>
                    </li>
                    <li>
                      <a href="news.html">News</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li className="btn-cta">
                      <a href="#">
                        <span>Get started</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}
