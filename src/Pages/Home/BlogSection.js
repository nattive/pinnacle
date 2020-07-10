import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import blogImage2 from "../../Assets/img/blog/single_blog_1.png";
import blogImage from "../../Assets/img/blog/blog_1.png";
export default function BlogSection() {
  return (
    <div class="grouped_sections">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="section_title text-center">
            <h1>Blog Posts</h1>
          </div>
          <div class="section_subtitle mb-50">
            Get updated with relevant articles and reports of Pinnacle
            activities, product release, and trainings
          </div>
        </div>
      </div>
      <div class="container">
        <div className="row">
          <div class="col-lg-8 mb-5 mb-lg-0">
            <div class="blog_left_sidebar">
              <article class="blog_item">
                <div class="blog_item_img">
                  <img class="card-img rounded-0" src={blogImage2} alt="" />
                  <a href="#" class="blog_item_date">
                    <h3>15</h3>
                    <p>Jan</p>
                  </a>
                </div>

                <div class="blog_details">
                  <a class="d-inline-block" href="single-blog.html">
                    <h2>Google inks pact for new 35-storey office</h2>
                  </a>
                  <p>
                    That dominion stars lights dominion divide years for fourth
                    have don't stars is that he earth it first without heaven in
                    place seed it second morning saying.
                  </p>
                  <ul class="blog-info-link">
                    <li>
                      <a href="#">
                        <i class="fa fa-user"></i> Travel, Lifestyle
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-comments"></i> 03 Comments
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
          <div class="col-lg-4">
            <aside class="single_sidebar_widget post_category_widget">
              <h4 class="widget_title">Category</h4>
              <ul class="list cat-list">
                <li>
                  <a href="#" class="d-flex">
                    <p>Resaurant food</p>
                    <p>(37)</p>
                  </a>
                </li>
                <li>
                  <a href="#" class="d-flex">
                    <p>Travel news</p>
                    <p>(10)</p>
                  </a>
                </li>
                <li>
                  <a href="#" class="d-flex">
                    <p>Modern technology</p>
                    <p>(03)</p>
                  </a>
                </li>
                <li>
                  <a href="#" class="d-flex">
                    <p>Product</p>
                    <p>(11)</p>
                  </a>
                </li>
                <li>
                  <a href="#" class="d-flex">
                    <p>Inspiration</p>
                    <p>21</p>
                  </a>
                </li>
                <li>
                  <a href="#" class="d-flex">
                    <p>Health Care (21)</p>
                    <p>09</p>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 grouped_col">
            <div class="grouped_title">Free available Resources</div>
            <ScrollAnimation
              delay={300}
              animateOnce
              animateIn="animate__fadeInUp"
            >
              <div class="news_post d-flex flex-row align-items-start justify-content-start">
                <div>
                  <div class="news_post_image">
                    <img src={blogImage} alt="blog image" />
                  </div>
                </div>
                <div class="news_post_body">
                  <div class="news_post_title">
                    <a href="news.html">Why Choose online education?</a>
                  </div>
                  <div class="news_post_author">
                    By <a href="#">William Smith</a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              delay={600}
              animateOnce
              animateIn="animate__fadeInUp"
            >
              <div class="news_post d-flex flex-row align-items-start justify-content-start">
                <div>
                  <div class="news_post_image">
                    <img src={blogImage} alt="blog image" />
                  </div>
                </div>
                <div class="news_post_body">
                  <div class="news_post_title">
                    <a href="news.html">Why Choose online education?</a>
                  </div>
                  <div class="news_post_author">
                    By <a href="#">William Smith</a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              delay={900}
              animateOnce
              animateIn="animate__fadeInUp"
            >
              <div class="news_post d-flex flex-row align-items-start justify-content-start">
                <div>
                  <div class="news_post_image">
                    <img src={blogImage} alt="blog image" />
                  </div>
                </div>
                <div class="news_post_body">
                  <div class="news_post_title">
                    <a href="news.html">Why Choose online education?</a>
                  </div>
                  <div class="news_post_author">
                    By <a href="#">William Smith</a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              delay={1200}
              animateOnce
              animateIn="animate__fadeInUp"
            >
              <div class="news_post d-flex flex-row align-items-start justify-content-start">
                <div>
                  <div class="news_post_image">
                    <img src={blogImage} alt="blog image" />
                  </div>
                </div>
                <div class="news_post_body">
                  <div class="news_post_title">
                    <a href="news.html">Why Choose online education?</a>
                  </div>
                  <div class="news_post_author">
                    By <a href="#">William Smith</a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div class="col-lg-4 grouped_col">
            <div class="grouped_title">Upcoming Events</div>
            <div class="events">
              <ScrollAnimation
                delay={300}
                animateOnce
                animateIn="animate__fadeInUp"
              >
                <div class="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="event_date d-flex flex-column align-items-center justify-content-center">
                      <div class="event_day">20</div>
                      <div class="event_month">April</div>
                    </div>
                  </div>
                  <div class="event_body">
                    <div class="event_title">
                      <a href="#">New Marketing Course Release</a>
                    </div>
                    <div class="event_subtitle">Location: Online Platform</div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                delay={600}
                animateOnce
                animateIn="animate__fadeInUp"
              >
                <div class="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="event_date d-flex flex-column align-items-center justify-content-center">
                      <div class="event_day">20</div>
                      <div class="event_month">April</div>
                    </div>
                  </div>
                  <div class="event_body">
                    <div class="event_title">
                      <a href="#">New Marketing Course Release</a>
                    </div>
                    <div class="event_subtitle">Location: Online Platform</div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                delay={900}
                animateOnce
                animateIn="animate__fadeInUp"
              >
                <div class="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="event_date d-flex flex-column align-items-center justify-content-center">
                      <div class="event_day">20</div>
                      <div class="event_month">April</div>
                    </div>
                  </div>
                  <div class="event_body">
                    <div class="event_title">
                      <a href="#">New Marketing Course Release</a>
                    </div>
                    <div class="event_subtitle">Location: Online Platform</div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                delay={1200}
                animateOnce
                animateIn="animate__fadeInUp"
              >
                <div class="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="event_date d-flex flex-column align-items-center justify-content-center">
                      <div class="event_day">20</div>
                      <div class="event_month">April</div>
                    </div>
                  </div>
                  <div class="event_body">
                    <div class="event_title">
                      <a href="#">New Marketing Course Release</a>
                    </div>
                    <div class="event_subtitle">Location: Online Platform</div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div class="col-lg-4 grouped_col">
            <div class="grouped_title">Blog Posts</div>
            <div class="news">
              <ScrollAnimation
                delay={300}
                animateOnce
                animateIn="animate__fadeInUp"
              >
                <div class="news_post d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="news_post_image">
                      <img
                        src="../Assets/img/blog/blog_1.png"
                        alt="https://unsplash.com/@beccatapert"
                      />
                    </div>
                  </div>
                  <div class="news_post_body">
                    <div class="news_post_title">
                      <a href="news.html">Why Choose online education?</a>
                    </div>
                    <div class="news_post_author">
                      By <a href="#">William Smith</a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                delay={600}
                animateOnce
                animateIn="animate__fadeInUp"
              >
                <div class="news_post d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="news_post_image">
                      <img src={blogImage} alt="blog image" />
                    </div>
                  </div>
                  <div class="news_post_body">
                    <div class="news_post_date">April 02, 2018</div>
                    <div class="news_post_title">
                      <a href="news.html">Books, Kindle or tablet?</a>
                    </div>
                    <div class="news_post_author">
                      By <a href="#">William Smith</a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                delay={900}
                animateOnce
                animateIn="animate__fadeInUp"
              >
                <div class="news_post d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="news_post_image">
                      <img src={blogImage} alt="blog image" />
                    </div>
                  </div>
                  <div class="news_post_body">
                    <div class="news_post_date">April 02, 2018</div>
                    <div class="news_post_title">
                      <a href="news.html">Why Choose online education?</a>
                    </div>
                    <div class="news_post_author">
                      By <a href="#">William Smith</a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                delay={1200}
                animateOnce
                animateIn="animate__fadeInUp"
              >
                <div class="news_post d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="news_post_image">
                      <img src={blogImage} alt="blog image" />
                    </div>
                  </div>
                  <div class="news_post_body">
                    <div class="news_post_date">April 02, 2018</div>
                    <div class="news_post_title">
                      <a href="news.html">Books, Kindle or tablet?</a>
                    </div>
                    <div class="news_post_author">
                      By <a href="#">William Smith</a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
