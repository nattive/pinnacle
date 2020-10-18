import React, { Component } from "react";
import image from "../../Assets/img/blog/single_blog_2.png";
import { getPosts } from "../../Actions/blogAction";
import { connect } from "react-redux";
import { Skeleton } from "@material-ui/lab";
import Parse from "html-react-parser";
import { Link } from "react-router-dom";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

 
  render() {
    return this.props.isGettingPosts ? (
      <React.Fragment>
        <article className="blog_item">
          <div className="blog_item_img">
            <Skeleton width={750} height={375} animation="wave" />
          </div>
          <div className="blog_details">
            <a className="d-inline-block" href="single-blog.html">
              <h2>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
              </h2>
            </a>
            <p>
              <Skeleton variant="text" />
            </p>
            <ul className="blog-info-link">
              <Skeleton variant="text" />
            </ul>
          </div>
        </article>
      </React.Fragment>
    ) : this.props.posts.length > 0 ? (
      this.props.posts.map((post) => (
        <React.Fragment>
          <article className="blog_item">
            <div className="blog_item_img">
              <img className="card-img rounded-0" src={post.imageUrl} alt="" />
              <a href="#" className="blog_item_date">
                <h3>{post.created.split(" ")[1]}</h3>
                <p>{post.created.split(" ")[0]}</p>
              </a>
            </div>
            <div className="blog_details">
              <Link className="d-inline-block" to={`${this.props.url}/${post.slug}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{Parse(post.body.substring(0, 200))}</p>{" "}
              <Link className="mb-3" to={`${this.props.url}/${post.slug}`}>
                Read More
              </Link>
              <ul className="blog-info-link">
                <li>
                  <a href="#">
                    <i className="fa fa-tag"></i>{" "}
                    {post.tags &&
                      post.tags
                        .split(",")
                        .map((tag, index) => <span key={index}>{tag}, </span>)}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-user"></i> Admin
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fa fa-comments"></i>{" "}
                    {post.comments && post.comments.length} Comments
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </React.Fragment>
      ))
    ) : (
      <p>no post</p>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isGettingPosts: state.blog.isGettingPosts,
    posts: state.blog.posts,
    post: state.blog.post,
    blogError: state.blog.blogError,
    queryPosts: state.blog.queryPosts,
  };
}

export default connect(mapStateToProps, { getPosts })(Posts);
