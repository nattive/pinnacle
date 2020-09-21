import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postComment, getComment, postReply } from '../../Actions/commentAction';
import { Button, Comment as SemanticComment, Form, Header, Label, Message, Icon } from 'semantic-ui-react'
import { Container, Link, Avatar } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import avatarImage from "../../Assets/img/comment/67902.png"
class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            replyData: {}
        }
        props.course.id && props.getComment(props.course.id)
        this.handlePostComment = this.handlePostComment.bind(this)
    }
    handlePostComment() {
        if (this.state.body !== '') {
            if (this.state.replyData.comment_id) {
                const data = {
                    comment_id: this.state.replyData.comment_id,
                    body: this.state.body,
                    course_id: this.props.course.id,
                }
                this.props.postReply(data)
                this.setState({ replyData: {} })
            } else {
                const data = {
                    course_id: this.props.course.id,
                    body: this.state.body
                }
                this.props.postComment(data)
            }
        } else {
            alert('comment cannot be empty')
        }
    }

    handlePostReply(comment_id) {
        if (this.state.body !== '') {

            const data = {
                comment_id: comment_id,
                body: this.state.body
            }
            this.props.postReply(data)
        } else {
            alert('comment cannot be empty')
        }
    }

    render() {
        const { commentPostError, isPostingComment, comments } = this.props
        return (
            <Container>
                <SemanticComment.Group>
                    {
                        comments && comments.length ? comments.map(comment => (
                            <React.Fragment key={comment.id}>
                                <SemanticComment>
                                    <SemanticComment.Avatar src={comment.user && comment.user.image ?  comment.user.image :avatarImage} />
                                    <SemanticComment.Content>
                                        <SemanticComment.Author as='a'>{comment.user ? comment.user.name : 'Anonymous' }</SemanticComment.Author>
                                        <SemanticComment.Metadata>
                                            <div>{comment.date}</div>
                                        </SemanticComment.Metadata>
                                        <SemanticComment.Text>
                                            <p>{comment.body}</p>
                                        </SemanticComment.Text>
                                        <SemanticComment.Actions>
                                            <SemanticComment.Action onClick={() => this.setState({
                                                replyData: {
                                                    comment_id: comment.id,
                                                    to: comment.user ? comment.user.name : ''
                                                }
                                            })}>Reply</SemanticComment.Action>
                                        </SemanticComment.Actions>
                                    </SemanticComment.Content>
                                    {comment.replies.length ? 
                                        comment.replies.map(reply =>
                                        <>
                                            <SemanticComment.Group>
                                                <SemanticComment>
                                                        <SemanticComment.Avatar src={reply.user && reply.user.image ? reply.user.image : avatarImage} />
                                                    <SemanticComment.Content>
                                                        <SemanticComment.Author as='a'>{reply.user && reply.user.name ? reply.user.name : 'Anonymous'}</SemanticComment.Author>
                                                        <SemanticComment.Metadata>
                                                            <div>Just now</div>
                                                        </SemanticComment.Metadata>
                                                        <SemanticComment.Text>{reply.body} </SemanticComment.Text>
                                                        {/* <SemanticComment.Actions>
                                                            <SemanticComment.Action>Reply</SemanticComment.Action>
                                                        </SemanticComment.Actions> */}
                                                    </SemanticComment.Content>
                                                </SemanticComment>
                                            </SemanticComment.Group>
                                        </>
                                    ) : null}

                                </SemanticComment>
                            </React.Fragment>
                        )) : 'Be the first to write a comment'
                    }

                    <Form reply={this.state.replyData.to} onSubmit={this.handlePostComment}>
                        <Message hidden={!commentPostError} visible={commentPostError} error={commentPostError}>{commentPostError}</Message>
                        {this.state.replyData.to &&
                            <>
                                <Label>Reply to {this.state.replyData.to}'s comment</Label>
                                <Link onClick={() => this.setState({
                                    replyData: {}
                                })}><Icon name='cancel'></Icon></Link>
                            </>
                        }
                        <Form.TextArea onChange={e => this.setState({ body: e.target.value })} placeholder="Your Comment..." />
                        <Button loading={isPostingComment} content={this.state.reply ? 'Add Reply' : 'Add Comment'} labelPosition='left' icon='edit' primary />
                    </Form>
                </SemanticComment.Group>
            </Container>
        )
    }
}

// Comment.propTypes = {
//     course_id
// };

function mapStateToProps(state, ownProps) {
    return {
        course: state.course.playCourse,
        commentPostError: state.comment.commentPostError,
        isPostingComment: state.comment.isPostingComment,
        isGettingComment: state.comment.isGettingComment,
        comments: state.comment.comments,
        commentError: state.comment.commentError,
    };
}

export default connect(mapStateToProps, { postComment, getComment, postReply })(Comments);
