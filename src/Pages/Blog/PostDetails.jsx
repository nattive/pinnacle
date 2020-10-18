import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPost } from "../../Actions/blogAction";
import parse from "html-react-parser";
import { Button } from "semantic-ui-react";
import PostComment from "./PostComment";
import { IS_REPLY } from "../../Actions/types";
import { blue } from "@material-ui/core/colors";
const PostDetails = (props) => {
  const { slug } = useParams();
  useEffect(() => {
    props.getPost(slug);
  }, []);
  const { post } = props;
  const dispatch = useDispatch()
  return (
    <>
      <div className="single-post">
        <div className="feature-img">
          <img className="img-fluid" src={post.imageUrl} alt="" />
        </div>
        <div className="blog_details">
          <h2>{post.title}</h2>
          <ul className="blog-info-link mt-3 mb-4">
            <li>
              <a href="#">
                <i class="fa fa-tag"></i>{" "}
                {post.tags &&
                  post.tags
                    .split(",")
                    .map((tag, index) => <span key={index}>{tag}, </span>)}
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-comments"></i>{" "}
                {post.comments && post.comments.length} Comments
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-calendar"></i> {post.created}
              </a>
            </li>
          </ul>
          <p className="excert">{post.body && parse(post.body)}</p>
        </div>
      </div>
      <div className="navigation-top">
        <div className="d-sm-flex justify-content-between text-center">
          <div className="col-sm-4 text-center my-2 my-sm-0">
            <p className="comment-count">
              <span className="align-middle">
                <i className="fa fa-comment"></i>
              </span>{" "}
              {post.comments && post.comments.length} Comments
            </p>
          </div>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-behance"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="navigation-area">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
              <div className="thumb">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="img/post/preview.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="arrow">
                <a href="#">
                  <span className="lnr text-white ti-arrow-left"></span>
                </a>
              </div>
              <div className="detials">
                <p>Prev Post</p>
                <a href="#">
                  <h4>Space The Final Frontier</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
              <div className="detials">
                <p>Next Post</p>
                <a href="#">
                  <h4>Telescopes 101</h4>
                </a>
              </div>
              <div className="arrow">
                <a href="#">
                  <span className="lnr text-white ti-arrow-right"></span>
                </a>
              </div>
              <div className="thumb">
                <a href="#">
                  <img className="img-fluid" src="img/post/next.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="comments-area">
        <h4> {post.comments && post.comments.length} Comment(s)</h4>
        {post.comments && post.comments.length > 0 ? (
          post.comments.map((comment) => (
            <div className="comment-list" key={comment.id}>
              <div className="single-comment justify-content-between d-flex">
                <div className="user justify-content-between d-flex">
                  <div className="thumb">
                    <img src="img/comment/comment_1.png" alt="" />
                  </div>
                  <div className="desc">
                    <p className="comment">{comment.body}</p>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <h5>
                          <a href="#">{comment.user && comment.user.name}</a>
                        </h5>
                        <p className="date">{comment.date} </p>
                      </div>
                      {props.user.id && (
                        <div className="reply-btn">
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              dispatch({
                                type: IS_REPLY,
                                payload: {
                                  commentId: comment.id,
                                  username: comment.user && comment.user.name,
                                },
                              })
                            }
                            className="btn-reply text-uppercase"
                          >
                            reply
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {comment.replies &&
                comment.replies.map((reply) => (
                  <React.Fragment key={reply.id}>
                    <div
                      style={{
                        borderLeft: `1px solid ${blue[900]}`,
                        margin: "38px 0 0 2em",
                      }}
                      className="comment-list"
                    >
                      <div className="single-comment justify-content-between d-flex">
                        <div className="user justify-content-between d-flex">
                          <div className="thumb">
                            <img src="img/comment/comment_1.png" alt="" />
                          </div>
                          <div className="desc">
                            <p className="comment">{reply.body}</p>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <h5>
                                  <a href="#">
                                    {reply.user && reply.user.name}
                                  </a>
                                </h5>
                                {/* <p className="date">{reply.created_at} </p> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              <hr className="my-4" />
            </div>
          ))
        ) : (
          <p>No Comment</p>
        )}
      </div>
      <PostComment postId={post.id} />
    </>
  );
};

const mapStateToProps = (state) => ({
  isGettingPost: state.blog.isGettingPost,
  post: state.blog.post,
  user: state.auth.user
});

const mapDispatchToProps = {
  getPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
