import React from "react";

export default function FeaturedCourses() {
  return (
    <>
      <div className="row featured_row">
        <div className="col-lg-6 featured_col">
          <div className="featured_content">
            <div className="featured_header d-flex flex-row align-items-center justify-content-start">
              <div className="featured_tag">
                <a href="#"> Featured </a>
              </div>
              <div className="featured_price ml-auto">
                Price: <span> $35 </span>
              </div>
            </div>
            <div className="featured_title">
              <h3>
                <a href="courses.html"> Online Literature Course </a>
              </h3>
            </div>
            <div className="featured_text">
              Maecenas rutrum viverra sapien sed fermentum.Morbi tempor odio
              eget lacus tempus pulvinar.Donec vehicula efficitur nibh, in
              pretium nulla interdum lacus vehicula efficitur nibh, in
              pretiumvehicula efficitur nibh, in pretium tempus non.
            </div>
            <div className="featured_footer d-flex align-items-center justify-content-start">
              <div className="featured_author_image">
                <img src="images/featured_author.jpg" alt="" />
              </div>
              <div className="featured_author_name">
                By <a href="#"> James S.Morrison </a>
              </div>
              <div className="featured_sales ml-auto">
                <span> 352 </span> Sales
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 featured_col">
          <div
            className="featured_background"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
      </div>
    </>
  );
}
