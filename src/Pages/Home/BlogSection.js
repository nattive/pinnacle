import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import blogImage2 from "../../Assets/img/blog/single_blog_1.png";
import blogImage from "../../Assets/img/blog/blog_1.png";
import { getPosts, getCategories } from "../../Actions/blogAction";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import Parse from "html-react-parser";

function BlogSection(props) {
  const { url } = useRouteMatch();
  useEffect(() => {
    props.getPosts();
    props.getCategories();
  }, []);
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
              {props.posts[0] ? (
                <article class="blog_item">
                  <div class="blog_item_img">
                    <img
                      class="card-img rounded-0"
                      src={props.posts[0].imageUrl}
                      alt=""
                    />
                    <a href="#" class="blog_item_date">
                      <h3>{props.posts[0].created.split(" ")[1]}</h3>
                      <p>{props.posts[0].created.split(" ")[0]}</p>
                    </a>
                  </div>

                  <div class="blog_details">
                    <Link
                      className="d-inline-block"
                      to={`/blog/${props.posts[0].slug}`}
                    >
                      <h2> {props.posts[0].title}</h2>
                    </Link>
                    <p>{Parse(props.posts[0].body.substring(0, 200))}</p>
                    <ul class="blog-info-link">
                      <li>
                        <a href="#">
                          <i className="fa fa-tag"></i>
                          {props.posts[0].tags &&
                            props.posts[0].tags
                              .split(",")
                              .map((tag, index) => (
                                <span key={index}>{tag}, </span>
                              ))}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-comments"></i>
                          {props.posts[0].comments &&
                            props.posts[0].comments.length}
                          Comments
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              ) : (
                "No Blog Post yet"
              )}
            </div>
          </div>
          <div class="col-lg-4">
            <aside class="single_sidebar_widget post_category_widget">
              <h4 class="widget_title">Category</h4>
              <ul class="list cat-list">
                {props.categories &&
                  props.categories.map((category) => (
                    <li key={category.id}>
                      <a href="#" class="d-flex">
                        <p>{category.name}</p>
                        <p>
                          ({category.blog_posts && category.blog_posts.length})
                        </p>
                      </a>
                    </li>
                  ))}
              </ul>
            </aside>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 grouped_col">
            <div class="grouped_title mb-2">Free available Resources</div>
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
              <div class="news_post mt-4 d-flex flex-row align-items-start justify-content-start">
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
            <div class="grouped_title">Top Courses</div>
            <div class="events">
              {props.courses &&
                props.courses.length &&
                props.courses.map((course) => (
                  <ScrollAnimation
                    delay={300}
                    animateOnce
                    animateIn="animate__fadeInUp mt-2 mb-2"
                  >
                    <div class="news_post d-flex flex-row align-items-start justify-content-start">
                      <div>
                        <div class="news_post_image">
                          <img src={course.banner} alt={course.slug} />
                        </div>
                      </div>
                      <div class="news_post_body">
                        <div class="news_post_date">{course.updated}</div>
                        <div class="news_post_title">
                          <a href="news.html">{course.title}</a>
                        </div>
                        <div class="news_post_author">
                          By{" "}
                          <a href="#">{course.tutor && course.tutor.user.name}</a>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
            </div>
          </div>

          <div class="col-lg-4 grouped_col">
            <div class="grouped_title">Blog Posts</div>
            <div class="news">
              {props.posts &&
                props.posts.length &&
                props.posts.map((post) => (
                  <ScrollAnimation
                    delay={300}
                    key={post.id}
                    animateOnce
                    animateIn="animate__fadeInUp"
                  >
                    <div class="news_post d-flex flex-row align-items-start justify-content-start">
                      <div>
                        <div class="news_post_image">
                          <img src={post.imageUrl} alt={post.slug} />
                        </div>
                      </div>
                      <div class="news_post_body">
                        <div class="news_post_date">{post.created}</div>
                        <div class="news_post_title">
                          <a href="news.html">{post.title}</a>
                        </div>
                        <div class="news_post_author">
                          By <a href="#">Admin</a>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isGettingPosts: state.blog.isGettingPosts,
  posts: state.blog.posts,
  post: state.blog.post,
  blogError: state.blog.blogError,
  gettingCat: state.blog.gettingCat,
  categories: state.blog.categories,
  catErrors: state.blog.catErrors,
  courses: state.course.ALL_courses,
});

const mapDispatchToProps = {
  getPosts,
  getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogSection);
