import Axios from "axios"
import { BaseUrl } from "../Patials/BaseUrl"
import {
    GET_BLOG_POSTS,
    BLOG_POSTS,
    ERR_GETTING_BLOG_POST,
    GET_BLOG_POST,
    BLOG_POST,
    ERR_GETTING_BLOG_POSTS,
    GET_BLOG_CATEGORIES,
    BLOG_CATEGORIES,
    ERR_GETTING_BLOG_CATEGORIES,
} from "./types"

export const getPosts = () => dispatch => {

    dispatch({
        type: GET_BLOG_POSTS
    })

    Axios.get(`${BaseUrl}post`)
        .then(res => {
            dispatch({
                type: BLOG_POSTS,
                payload: res.data && res.data.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERR_GETTING_BLOG_POSTS,
                payload: err.response ? err.response.data &&
                    err.response.data.message : err.message ?
                    JSON.stringify(err.message) : 'error occurred'
            })
        })
}

export const searchPosts = (query) => dispatch => {

    dispatch({
        type: GET_BLOG_POSTS
    })

    Axios.get(`${BaseUrl}post/search/${query}`)
        .then(res => {
            dispatch({
                type: BLOG_POSTS,
                payload: res.data && res.data.data || res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERR_GETTING_BLOG_POSTS,
                payload: err.response ? err.response.data &&
                    err.response.data.message : err.message ?
                    JSON.stringify(err.message) : 'error occurred'
            })
        })
}

export const getCategories = () => dispatch => {

    dispatch({
        type: GET_BLOG_CATEGORIES
    })

    Axios.get(`${BaseUrl}post/category`)
        .then(res => {
            dispatch({
                type: BLOG_CATEGORIES,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERR_GETTING_BLOG_CATEGORIES,
                payload: err.response ? err.response.data &&
                    err.response.data.message : err.message ?
                    JSON.stringify(err.message) : 'error occurred'
            })
        })
}

export const getPost = (slug) => dispatch => {

    dispatch({ type: GET_BLOG_POST })

    Axios.get(`${BaseUrl}post/${slug}`)
        .then(res => {
            dispatch({
                type: BLOG_POST,
                payload: res.data && res.data.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERR_GETTING_BLOG_POST,
                payload: err.response ? err.response.data &&
                    err.response.data.message : err.message ?
                    JSON.stringify(err.message) : 'error occurred'
            })
        })
}