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
      <header class="header" style={{position: 'static'}}>
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
