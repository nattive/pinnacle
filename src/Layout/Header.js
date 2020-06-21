import React from "react";
import logo from "../Assets/img/Pinnacle/logoWhite.png";
import stickyLogo from "../Assets/img/Pinnacle/drafts.png";
import { Link } from "react-router-dom";
import './Header.css'
export default function Header(props) {
  return (
    <>
      <header class="header">
        <div class="top_bar">
          <div class="top_bar_container">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="top_bar_content d-flex flex-row align-items-center justify-content-start">
                    <ul class="top_bar_contact_list">
                      <li>
                        <div class="question">Have any questions?</div>
                      </li>
                      <li>
                        <div>(009) 35475 6688933 32</div>
                      </li>
                      <li>
                        <div>info@elaerntemplate.com</div>
                      </li>
                    </ul>
                    <div class="top_bar_login ml-auto">
                      <ul>
                        <li>
                          <a href="#">Register</a>
                        </li>
                        <li>
                          <a href="#">Login</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="header_content d-flex flex-row align-items-center justify-content-start">
                  <div class="logo_container">
                    <a href="#">
                      <div class="logo_content d-flex flex-row align-items-end justify-content-start">
                        <div class="logo_img">
                          <img src={stickyLogo} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <nav class="main_nav_contaner ml-auto">
                    <ul class="main_nav">
                      <li class="active">
                        <Link to="/" className="Active">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <li className='hasSubMenu'>
                          <a href="#">
                            Our Products <i className="ti-angle-down"> </i>
                          </a>

                          <ul className='submenu'>
                            <li>
                              <Link to="/e-learning">Pinnacle Online</Link>
                            </li>
                            <li>
                              <a href="#"> Careers of the Future </a>
                            </li>
                            <li>
                              <a href="#">
                                Pinnacle Personalised Coaching and Trainings
                              </a>
                            </li>
                            <li>
                              <a href="#">Research and development</a>
                            </li>
                          </ul>
                        </li>
                      </li>
                      <li>
                        <Link to="/blog" className="Active">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <a href="contact.html">contact</a>
                      </li>
                    </ul>
                    <div class="search_button">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </div>

                    <div class="hamburger menu_mm">
                      <i class="fa fa-bars menu_mm" aria-hidden="true"></i>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="header_search_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="header_search_content d-flex flex-row align-items-center justify-content-end">
                  <form action="#" class="header_search_form">
                    <input
                      type="search"
                      class="search_input"
                      placeholder="Search"
                      required="required"
                    />
                    <button class="header_search_button d-flex flex-column align-items-center justify-content-center">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
        <div className="menu_close_container">
          <div className="menu_close">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="search">
          <form action="#" className="header_search_form menu_mm">
            <input
              type="search"
              className="search_input menu_mm"
              placeholder="Search"
              required="required"
            />
            <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
              <i className="fa fa-search menu_mm" aria-hidden="true"></i>
            </button>
          </form>
        </div>
        <nav className="menu_nav">
          <ul className="menu_mm">
            <li className="menu_mm">
              <a href="index.html">Home</a>
            </li>
            <li className="menu_mm">
              <a href="courses.html">Courses</a>
            </li>
            <li className="menu_mm">
              <a href="instructors.html">Instructors</a>
            </li>
            <li className="menu_mm">
              <a href="#">Events</a>
            </li>
            <li className="menu_mm">
              <a href="blog.html">Blog</a>
            </li>
            <li className="menu_mm">
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="menu_extra">
          <div className="menu_phone">
            <span className="menu_title">phone:</span>(009) 35475 6688933 32
          </div>
          <div className="menu_social">
            <span className="menu_title">follow us</span>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
