import Axios from "axios"
import { BaseUrl } from "../Patials/BaseUrl"
import {
    POST_COMMENT,
    COMMENT_POSTED,
    UPDATE_COMMENT,
    COMMENT_UPDATED,
    DELETE_COMMENT,
    COMMENT_DELETED,
    POSTING_COMMENT_ERROR,
    GET_COMMENT,
    GET_COMMENT_ERROR,
    COMMENT,
    DELETING_COMMENT_ERROR,
} from "./types"

export const postComment = (data) => dispatch => {


    const token = localStorage.getItem('P_access_token')

    dispatch({
        type: POST_COMMENT
    })

    Axios.post(`${BaseUrl}user/course/comment`, {
            body: data.body,
            course_id: data.course_id,
            blog_posts_id: data.blog_posts_id,
        }, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
            console.log(response);
            dispatch({
                type: COMMENT_POSTED,
                payload: response.data
            })
            dispatch(getComment(data.course_id))
        })
        .catch(err => {
            console.log(err.response)
            dispatch({
                type: POSTING_COMMENT_ERROR,
                payload: err.response ? err.response.data ? err.response.data.message || JSON.stringify(err.response.data.error) : JSON.stringify(err.response.data) : err.message
            })
            console.error(err)
        });

}

export const postReply = (data) => dispatch => {


    const token = localStorage.getItem('P_access_token')
    const { comment_id, body } = data

    dispatch({
        type: POST_COMMENT
    })

    Axios.post(`${BaseUrl}user/course/reply`, {
            comment_id,
            body
        }, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
            console.log(response);
            dispatch({
                type: COMMENT_POSTED,
                payload: response.data
            })
            dispatch(getComment(data.course_id))


        })
        .catch(err => {
            console.log(err.response)
            dispatch({
                type: POSTING_COMMENT_ERROR,
                payload: err.response ? err.response.data ? err.response.data.message || JSON.stringify(err.response.data.error) : JSON.stringify(err.response.data) : err.message
            })
            console.error(err)
        });

}

export const getComment = (id) => dispatch => {


    const token = localStorage.getItem('P_access_token')

    dispatch({
        type: GET_COMMENT
    })

    Axios.get(`${BaseUrl}user/course/comment/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
            console.log(response);
            dispatch({
                type: COMMENT,
                payload: response.data
            })

        })
        .catch(err => {
            console.log(err.response)
            dispatch({
                type: GET_COMMENT_ERROR,
                payload: err.response ? err.response.data ? err.response.data.message || JSON.stringify(err.response.data.error) : JSON.stringify(err.response.data) : err.message
            })
            console.error(err)
        });

}