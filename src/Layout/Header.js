import React from "react";
import logo from "../Assets/img/Pinnacle/logoWhite.png";
import stickyLogo from "../Assets/img/Pinnacle/drafts.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
export default function Header(props) {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <header className="header" style={{position: 'static'}}>
        <div className="top_bar">
          <div className="top_bar_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                    <ul className="top_bar_contact_list">
                      <li>
                        <div className="question">Have any questions?</div>
                      </li>
                      <li>
                        <div>(00234) 80 456 3778</div>
                      </li>
                      <li>
                        <div>info@pinnacleOnline.org</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
