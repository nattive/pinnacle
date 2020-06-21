import React from "react";
import post from '../Assets/img/post/post_1.png'
export default function Sidebar() {
  return (
    <>
      <div class="blog_right_sidebar">
        <aside class="single_sidebar_widget search_widget">
          <form action="#">
            <div class="form-group">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Keyword"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Search Keyword'"
                />
                <div class="input-group-append">
                  <button class="btn" type="button">
                    <i class="ti-search"> </i>
                  </button>
                </div>
              </div>
            </div>
            <button
              class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
              type="submit"
            >
              Search
            </button>
          </form>
        </aside>
        <aside class="single_sidebar_widget post_category_widget">
          <h4 class="widget_title"> Category </h4>
          <ul class="list cat-list">
            <li>
              <a href="#" class="d-flex">
                <p> Restaurant food </p> <p> (37) </p>
              </a>
            </li>
          </ul>
        </aside>
        <aside class="single_sidebar_widget popular_post_widget">
          <h3 class="widget_title"> Recent Post </h3>
          <div class="media post_item">
            <img src={post} alt="post" />
            <div class="media-body">
              <a href="single-blog.html">
                <h3> From life was you fish... </h3>
              </a>
              <p> January 12, 2019 </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
