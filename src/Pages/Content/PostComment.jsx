import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import { Button, Message, Icon } from "semantic-ui-react";
import {
  postComment,
  getComment,
  postReply,
} from "../../Actions/commentAction";
import { useState } from "react";
import { useEffect } from "react";
import { IS_REPLY } from "../../Actions/types";

const PostComment = (props) => {
  const [body, setBody] = useState("");
  const [reply, setReply] = useState({});
  const [blog_posts_id, setBlogPostsId] = useState();
  useEffect(() => {
    setBlogPostsId(props.postId);
  }, [props.postId]);
const dispatch = useDispatch()
  const handleSubmit = () => {
    let commentData = {
      body,
      blog_posts_id,
    };
    props.postComment(commentData);
  };
  
  
  const handleReply = () => {
    let replyData = {
      body,
      comment_id: props.replyData.commentId,
    };
    props.postReply(replyData);
  };
  return (
    <>
      {props.user.id ? (
        <div className="comment-form">
          <h4>
            {props.replyData.commentId
              ? `Reply ${props.replyData.username}`
              : "Leave a Comment"}{" "}
            {props.replyData.commentId && (
              <span>
                <a
                  href=""
                  onClick={() => dispatch({ type: IS_REPLY, payload: {} })}
                >
                  <Icon name="cancel" color="blue" />
                </a>
              </span>
            )}
          </h4>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <textarea
                  className="form-control w-100"
                  name="comment"
                  id="comment"
                  cols="30"
                  value={body}
                  rows="9"
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Write Comment"
                />
              </div>
            </div>
            {/* <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="website"
                    id="website"
                    type="text"
                    placeholder="Website"
                  />
                </div>
              </div>
            */}
          </div>
          <div className="form-group">
            <Button
              basic
              color="blue"
              disabled={!props.user.id}
              onClick={props.replyData.commentId ? handleReply : handleSubmit}
              loading={props.isPostingComment}
              className="button button-contactForm btn_1 boxed-btn"
            >
              {props.replyData.commentId ? "Reply" : "send Message"}
            </Button>
          </div>
        </div>
      ) : (
        <Message error>Please Log in to comment</Message>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  commentPostError: state.comment.commentPostError,
  isPostingComment: state.comment.isPostingComment,
  isGettingComment: state.comment.isGettingComment,
  comments: state.comment.comments,
  replyData: state.comment.replyData,
  commentError: state.comment.commentError,
  user: state.auth.user,
});

const mapDispatchToProps = {
  postComment,
  getComment,
  postReply,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostComment);
