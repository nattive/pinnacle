import React from 'react'
import image from '../Assets/img/team/1.png'
export default function Team() {
    return (
      <div class="team_area minus_padding">
        <div class="container">
          <div class="border_bottom">
            <div class="row">
              <div class="col-xl-12">
                <div class="section_title mb-40 text-center">
                  <h3>Meet the Team</h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="single_team">
                  <div class="team_thumb">
                    <img src={image} alt="" />
                  </div>
                  <div class="team_info text-center">
                    <h3>Durotoye Timileyin </h3>
                    <p>(post)</p>
                    <div class="social_link">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6"></div>

              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="single_team">
                  <div class="team_thumb">
                    <img src={image} alt="" />
                  </div>
                  <div class="team_info text-center">
                    <h3>Ome Okoyomoh</h3>
                    <p>(post)</p>
                    <div class="social_link">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
