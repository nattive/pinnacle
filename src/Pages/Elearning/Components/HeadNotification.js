import React, { Component } from 'react'
import "../Assests/css/style.css";

export default class HeadNotification extends Component {
    render() {
        return (
          <div>
            <div className="upper-menu">
              <div className="container">
                <div className="row">
                  <div className="col-xs-4">
                    <p>The ideal WordPress theme for online learning center</p>
                  </div>
                  <div className="col-xs-6 col-md-push-2 text-right">
                    <p className="btn-apply">
                      <a href="#">Our Vision</a> <a href="#">Our Missions</a>{" "}
                      <a href="#">Sign Up</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
