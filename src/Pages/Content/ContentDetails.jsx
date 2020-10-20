import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getResource } from "../../Actions/resourceAction";
import parse from "html-react-parser";
import { Button } from "semantic-ui-react";
import PostComment from "./PostComment";
import { IS_REPLY } from "../../Actions/types";
import { blue } from "@material-ui/core/colors";
const ContentDetails = (props) => {
  const { slug } = useParams();
  useEffect(() => {
    props.getResource(slug);
  }, []);
  const { FR } = props;
  const dispatch = useDispatch();
  return (
    <>
      <div className="single-post">
        <div className="feature-img">
          <img className="img-fluid" src={FR.banner} alt="" />
        </div>
        <div className="blog_details">
          <h2>{FR.title}</h2>
          <ul className="blog-info-link mt-3 mb-4">
            <li>by : {FR.by}</li>
            <li>
              <a href="#">
                <i className="fa fa-comments"></i>{" "}
                {FR.comments && FR.comments.length} Comments
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-calendar"></i> {FR.created}
              </a>
            </li>
          </ul>
          <p className="excert">{FR.body && parse(FR.body)}</p>
        </div>
      </div>
      <div className="navigation-top">
        <div className="d-sm-flex justify-content-between text-center">
          <div className="col-sm-4 text-center my-2 my-sm-0">
            <p className="comment-count">
              <span className="align-middle">
                <i className="fa fa-comment"></i>
              </span>{" "}
              {FR.comments && FR.comments.length} Comments
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
        <h3>Download files</h3>
          <div className="row">
            {FR.mediaFiles && FR.mediaFiles.length > 0 ? (
              FR.mediaFiles.map((file) => (
                <div className="col-md-4 col-sm-12 text-justify">
                  <h4>{file.name}</h4>
                  <div className="detials">
                    <p>{file.caption}</p>
                  </div>
                  <a href={file.link} download><i className="fa fa-download"></i>Click to begin file download</a>
                </div>
              ))
            ) : (
              <p>no downloadable media Files</p>
            )}
          </div>
        </div>
      </div>

      <div className="comments-area">
        <h4> {FR.comments && FR.comments.length} Comment(s)</h4>
        {FR.comments && FR.comments.length > 0 ? (
          FR.comments.map((comment) => (
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
      <PostComment postId={FR.id} />
    </>
  );
};

const mapStateToProps = (state) => ({
  isGettingFRs: state.resource.isGettingFRs,
  FR: state.resource.FR,
  user: state.auth.user,
});

const mapDispatchToProps = {
  getResource,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentDetails);
