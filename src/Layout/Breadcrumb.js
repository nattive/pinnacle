import React from "react";

export default function Breadcrumb(props) {
  return (
    <div class="bradcam_area bradcam_bg_1">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="bradcam_text">
              <h3> {props.title} </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
